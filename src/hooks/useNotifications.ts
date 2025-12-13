'use client';

import { useEffect } from 'react';
import { useNotificationsContext } from '@/src/contexts/NotificationsContext';
import { saveToLocalStorage, mergeWithLocalStorage } from '@/src/lib/storage';

export function useNotifications() {
  const context = useNotificationsContext();

  useEffect(() => {
    async function fetchNotifications() {
      try {
        const response = await fetch('/api/notifications');
        const result = await response.json();

        if (result.success && result.data) {
          const merged = mergeWithLocalStorage(result.data);
          context.setNotifications(merged);
        }
      } catch (error) {
        console.error('Failed to fetch notifications:', error);
      }
    }

    fetchNotifications();
  }, []);

  useEffect(() => {
    if (context.notifications.length > 0) {
      saveToLocalStorage(context.notifications);
    }
  }, [context.notifications]);

  const markAsRead = (id: string) => {
    context.markAsRead(id);
  };

  const deleteNotification = (id: string) => {
    context.deleteNotification(id);
  };

  const markAllAsRead = () => {
    context.markAllAsRead();
  };

  return {
    notifications: context.notifications,
    unreadCount: context.unreadCount,
    markAsRead,
    deleteNotification,
    markAllAsRead,
  };
}

