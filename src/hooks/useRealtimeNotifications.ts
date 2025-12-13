'use client';

import { useEffect, useRef } from 'react';
import { useNotificationsContext } from '@/src/contexts/NotificationsContext';
import { Notification } from '@/src/types';

export function useRealtimeNotifications() {
  const { addNotification } = useNotificationsContext();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const getRandomInterval = () => Math.floor(Math.random() * 15000) + 15000;

    const fetchNewNotification = async () => {
      try {
        const response = await fetch('/api/notifications/new');
        const result = await response.json();

        if (result.success && result.data) {
          addNotification(result.data as Notification);
        }
      } catch (error) {
        console.error('Failed to fetch new notification:', error);
      }
    };

    const scheduleNext = () => {
      const delay = getRandomInterval();
      intervalRef.current = setTimeout(() => {
        fetchNewNotification();
        scheduleNext();
      }, delay);
    };

    scheduleNext();

    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
      }
    };
  }, [addNotification]);
}

