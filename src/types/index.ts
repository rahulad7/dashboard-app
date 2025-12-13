export type NotificationType = 'info' | 'warning' | 'success' | 'error';

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: NotificationType;
  createdAt: string;
  read: boolean;
}

export interface NotificationsOverTimePoint {
  label: string;
  count: number;
}

export interface ReadVsUnreadStats {
  read: number;
  unread: number;
}

export interface AnalyticsData {
  notificationsOverTime: NotificationsOverTimePoint[];
  readVsUnread: ReadVsUnreadStats;
}

export interface NotificationPersistence {
  readIds: string[];
  deletedIds: string[];
  lastUpdated: string;
}

