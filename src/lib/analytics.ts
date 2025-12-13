import { Notification, NotificationsOverTimePoint, ReadVsUnreadStats, AnalyticsData } from '@/src/types';
import { generateSampleNotifications } from './mockData';

export function calculateReadVsUnread(notifications: Notification[]): ReadVsUnreadStats {
  const read = notifications.filter(n => n.read).length;
  const unread = notifications.filter(n => !n.read).length;
  return { read, unread };
}

export function calculateNotificationsOverTime(notifications: Notification[]): NotificationsOverTimePoint[] {
  const now = new Date();
  const last24Hours: NotificationsOverTimePoint[] = [];
  
  for (let i = 23; i >= 0; i--) {
    const hourDate = new Date(now);
    hourDate.setHours(now.getHours() - i, 0, 0, 0);
    
    const hourLabel = hourDate.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      hour12: true 
    });
    
    const hourStart = hourDate.getTime();
    const hourEnd = hourStart + 60 * 60 * 1000;
    
    const count = notifications.filter(n => {
      const notificationTime = new Date(n.createdAt).getTime();
      return notificationTime >= hourStart && notificationTime < hourEnd;
    }).length;
    
    last24Hours.push({ label: hourLabel, count });
  }
  
  return last24Hours;
}

export function generateAnalyticsData(notifications?: Notification[]): AnalyticsData {
  const sampleNotifications = notifications || generateSampleNotifications(50, true);
  const notificationsOverTime = calculateNotificationsOverTime(sampleNotifications);
  const readVsUnread = calculateReadVsUnread(sampleNotifications);
  
  return {
    notificationsOverTime,
    readVsUnread,
  };
}

