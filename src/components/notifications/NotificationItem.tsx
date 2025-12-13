'use client';

import { Notification } from '@/src/types';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface NotificationItemProps {
  notification: Notification;
  onMarkAsRead: (id: string) => void;
  onDelete: (id: string) => void;
}

const typeColors = {
  info: 'bg-blue-100 text-blue-700',
  success: 'bg-green-100 text-green-700',
  warning: 'bg-yellow-100 text-yellow-700',
  error: 'bg-red-100 text-red-700',
};

function formatTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return date.toLocaleDateString();
}

export default function NotificationItem({
  notification,
  onMarkAsRead,
  onDelete,
}: NotificationItemProps) {
  const handleClick = () => {
    if (!notification.read) {
      onMarkAsRead(notification.id);
    }
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete(notification.id);
  };

  return (
    <div
      onClick={handleClick}
      className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition ${
        !notification.read ? 'bg-blue-50/30' : ''
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span
              className={`px-2 py-0.5 rounded text-xs font-medium ${typeColors[notification.type]}`}
            >
              {notification.type}
            </span>
            {!notification.read && (
              <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
            )}
          </div>
          <h3 className={`font-semibold text-sm mb-1 ${!notification.read ? 'text-brand-text' : 'text-gray-600'}`}>
            {notification.title}
          </h3>
          <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
          <span className="text-xs text-gray-400">{formatTime(notification.createdAt)}</span>
        </div>
        <button
          onClick={handleDelete}
          className="p-1 hover:bg-gray-200 rounded transition flex-shrink-0"
          aria-label="Delete notification"
        >
          <XMarkIcon className="h-4 w-4 text-gray-400" />
        </button>
      </div>
    </div>
  );
}

