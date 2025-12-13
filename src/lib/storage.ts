import { Notification, NotificationPersistence } from '@/src/types';

const STORAGE_KEY = 'notifications_state';

export function saveToLocalStorage(notifications: Notification[]) {
  if (typeof window === 'undefined') return;

  const readIds = notifications.filter((n) => n.read).map((n) => n.id);
  const deletedIds: string[] = [];

  const data: NotificationPersistence = {
    readIds,
    deletedIds,
    lastUpdated: new Date().toISOString(),
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Failed to save to localStorage:', error);
  }
}

export function loadFromLocalStorage(): NotificationPersistence | null {
  if (typeof window === 'undefined') return null;

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    return JSON.parse(stored) as NotificationPersistence;
  } catch (error) {
    console.error('Failed to load from localStorage:', error);
    return null;
  }
}

export function mergeWithLocalStorage(notifications: Notification[]): Notification[] {
  const stored = loadFromLocalStorage();
  if (!stored) return notifications;

  return notifications.map((notif) => ({
    ...notif,
    read: stored.readIds.includes(notif.id),
  }));
}

export function clearLocalStorage() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}

