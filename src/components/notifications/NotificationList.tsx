'use client';

import { Notification } from '@/src/types';
import NotificationItem from './NotificationItem';
import Card from '../ui/Card';

interface NotificationListProps {
  notifications: Notification[];
  onMarkAsRead: (id: string) => void;
  onDelete: (id: string) => void;
  onOpenModal: (notification: Notification) => void;
}

export default function NotificationList({
  notifications,
  onMarkAsRead,
  onDelete,
  onOpenModal,
}: NotificationListProps) {
  const sortedNotifications = [...notifications].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  if (sortedNotifications.length === 0) {
    return (
      <Card>
        <div className="text-center py-12">
          <p className="text-gray-500 text-sm">No notifications yet</p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-0 overflow-hidden">
      <div className="divide-y divide-gray-100">
        {sortedNotifications.map((notification, index) => (
          <div
            key={notification.id}
            className="animate-in fade-in slide-in-from-top-2"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <NotificationItem
              notification={notification}
              onMarkAsRead={onMarkAsRead}
              onDelete={onDelete}
              onOpenModal={onOpenModal}
            />
          </div>
        ))}
      </div>
    </Card>
  );
}

