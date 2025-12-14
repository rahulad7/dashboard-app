'use client';

import { useEffect } from 'react';
import { Notification } from '@/src/types';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface NotificationModalProps {
  notification: Notification | null;
  onClose: () => void;
  onMarkAsRead: (id: string) => void;
  onDelete: (id: string) => void;
}

const typeColors = {
  info: 'bg-blue-100 text-blue-700',
  success: 'bg-green-100 text-green-700',
  warning: 'bg-yellow-100 text-yellow-700',
  error: 'bg-red-100 text-red-700',
};

function formatFullTime(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

export default function NotificationModal({
  notification,
  onClose,
  onMarkAsRead,
  onDelete,
}: NotificationModalProps) {
  useEffect(() => {
    if (!notification) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [notification, onClose]);

  if (!notification) return null;

  const handleMarkAsRead = () => {
    if (!notification.read) {
      onMarkAsRead(notification.id);
    }
    onClose();
  };

  const handleDelete = () => {
    onDelete(notification.id);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-lg max-w-lg w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-2">
              <span
                className={`px-3 py-1 rounded-lg text-sm font-medium ${typeColors[notification.type]}`}
              >
                {notification.type}
              </span>
              {!notification.read && (
                <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
              )}
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
              aria-label="Close"
            >
              <XMarkIcon className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          <h2 className="text-2xl font-bold text-brand-text mb-3">
            {notification.title}
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            {notification.message}
          </p>

          <div className="text-sm text-gray-500 mb-6">
            {formatFullTime(notification.createdAt)}
          </div>

          <div className="flex gap-3">
            {!notification.read && (
              <button
                onClick={handleMarkAsRead}
                className="flex-1 px-4 py-2 bg-brand-green text-white rounded-lg hover:bg-brand-green/90 transition font-medium"
              >
                Mark as Read
              </button>
            )}
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition font-medium"
            >
              Delete
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

