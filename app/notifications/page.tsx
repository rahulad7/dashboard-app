'use client';

import { useState, useMemo } from 'react';
import { useNotifications } from '@/src/hooks/useNotifications';
import { useRealtimeNotifications } from '@/src/hooks/useRealtimeNotifications';
import NotificationList from '@/src/components/notifications/NotificationList';
import NotificationModal from '@/src/components/notifications/NotificationModal';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Notification, NotificationType } from '@/src/types';

type FilterType = 'all' | 'unread' | 'read' | NotificationType;
type SortType = 'time' | 'type' | 'read';

export default function NotificationsPage() {
  const { notifications, unreadCount, markAsRead, deleteNotification, markAllAsRead } =
    useNotifications();
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<FilterType>('all');
  const [sortBy, setSortBy] = useState<SortType>('time');
  const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null);

  useRealtimeNotifications();

  const filteredNotifications = useMemo(() => {
    let filtered = notifications;

    if (filter === 'unread') {
      filtered = filtered.filter((n) => !n.read);
    } else if (filter === 'read') {
      filtered = filtered.filter((n) => n.read);
    } else if (filter !== 'all') {
      filtered = filtered.filter((n) => n.type === filter);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (notif: Notification) =>
          notif.title.toLowerCase().includes(query) ||
          notif.message.toLowerCase().includes(query)
      );
    }

    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === 'time') {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      } else if (sortBy === 'type') {
        return a.type.localeCompare(b.type);
      } else if (sortBy === 'read') {
        return Number(a.read) - Number(b.read);
      }
      return 0;
    });

    return sorted;
  }, [notifications, searchQuery, filter, sortBy]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-brand-text">Notifications</h1>
          {unreadCount > 0 && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mt-2">
              {unreadCount} unread
            </span>
          )}
        </div>
        {unreadCount > 0 && (
          <button
            onClick={markAllAsRead}
            className="px-4 py-2 bg-brand-green text-white rounded-lg hover:bg-brand-green/90 transition text-sm font-medium w-full sm:w-auto"
          >
            Mark all as read
          </button>
        )}
      </div>

      <div className="mb-4 space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search notifications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent text-sm"
            />
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortType)}
            className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent text-sm w-full sm:w-auto"
          >
            <option value="time">Sort by Time</option>
            <option value="type">Sort by Type</option>
            <option value="read">Sort by Read Status</option>
          </select>
        </div>

        <div className="flex flex-wrap gap-2">
          {(['all', 'unread', 'read', 'info', 'success', 'warning', 'error'] as FilterType[]).map(
            (filterType) => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition ${
                  filter === filterType
                    ? 'bg-brand-green text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
              </button>
            )
          )}
        </div>
      </div>

      <NotificationList
        notifications={filteredNotifications}
        onMarkAsRead={markAsRead}
        onDelete={deleteNotification}
        onOpenModal={setSelectedNotification}
      />

      <NotificationModal
        notification={selectedNotification}
        onClose={() => setSelectedNotification(null)}
        onMarkAsRead={markAsRead}
        onDelete={deleteNotification}
      />
    </div>
  );
}

