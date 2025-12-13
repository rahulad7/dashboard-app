'use client';

import { useNotifications } from '@/src/hooks/useNotifications';
import { useRealtimeNotifications } from '@/src/hooks/useRealtimeNotifications';
import NotificationList from '@/src/components/notifications/NotificationList';

export default function NotificationsPage() {
  const { notifications, unreadCount, markAsRead, deleteNotification, markAllAsRead } =
    useNotifications();

  useRealtimeNotifications();

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-brand-text">Notifications</h1>
          {unreadCount > 0 && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mt-2">
              {unreadCount} unread
            </span>
          )}
        </div>
        {unreadCount > 0 && (
          <button
            onClick={markAllAsRead}
            className="px-4 py-2 bg-brand-green text-white rounded-lg hover:bg-brand-green/90 transition text-sm font-medium"
          >
            Mark all as read
          </button>
        )}
      </div>

      <NotificationList
        notifications={notifications}
        onMarkAsRead={markAsRead}
        onDelete={deleteNotification}
      />
    </div>
  );
}

