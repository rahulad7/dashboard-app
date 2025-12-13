import { Notification, NotificationType } from '@/src/types';

const notificationTemplates: Record<NotificationType, { titles: string[]; messages: string[] }> = {
  info: {
    titles: [
      'System Update Available',
      'New Feature Released',
      'Account Information',
      'Weekly Summary',
      'Profile Update',
      'Settings Changed',
      'New Message Received',
      'Document Uploaded',
    ],
    messages: [
      'A new system update is available. Please review the changes.',
      'We have released a new feature that you might find useful.',
      'Your account information has been updated successfully.',
      'Here is your weekly activity summary.',
      'Your profile has been updated.',
      'Your settings have been modified.',
      'You have received a new message.',
      'A new document has been uploaded to your account.',
    ],
  },
  success: {
    titles: [
      'Payment Successful',
      'Task Completed',
      'Upload Complete',
      'Changes Saved',
      'Order Confirmed',
      'Subscription Active',
      'Verification Complete',
      'Action Successful',
    ],
    messages: [
      'Your payment has been processed successfully.',
      'Your task has been completed successfully.',
      'Your file has been uploaded successfully.',
      'All changes have been saved.',
      'Your order has been confirmed.',
      'Your subscription is now active.',
      'Your account has been verified.',
      'The action was completed successfully.',
    ],
  },
  warning: {
    titles: [
      'Storage Limit Warning',
      'Password Expiring Soon',
      'Low Balance Alert',
      'Maintenance Scheduled',
      'Action Required',
      'Security Alert',
      'Subscription Ending',
      'Update Required',
    ],
    messages: [
      'You are approaching your storage limit. Consider upgrading.',
      'Your password will expire in 7 days. Please update it.',
      'Your account balance is running low.',
      'Scheduled maintenance will occur tonight at 2 AM.',
      'Action required: Please verify your email address.',
      'We detected unusual activity on your account.',
      'Your subscription will end in 3 days.',
      'An update is required to continue using this feature.',
    ],
  },
  error: {
    titles: [
      'Payment Failed',
      'Upload Error',
      'Connection Lost',
      'Action Failed',
      'Verification Error',
      'System Error',
      'Operation Failed',
      'Access Denied',
    ],
    messages: [
      'Your payment could not be processed. Please try again.',
      'There was an error uploading your file. Please retry.',
      'Connection lost. Please check your internet connection.',
      'The action could not be completed. Please try again.',
      'Verification failed. Please check your details.',
      'A system error occurred. Our team has been notified.',
      'The operation failed. Please contact support.',
      'Access denied. You do not have permission for this action.',
    ],
  },
};

export function generateMockNotification(
  id?: string,
  read: boolean = false,
  createdAt?: string
): Notification {
  const types: NotificationType[] = ['info', 'success', 'warning', 'error'];
  const randomType = types[Math.floor(Math.random() * types.length)];
  const template = notificationTemplates[randomType];
  
  const randomTitleIndex = Math.floor(Math.random() * template.titles.length);
  const randomMessageIndex = Math.floor(Math.random() * template.messages.length);

  const notificationId = id || `notif-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  const createdDate = createdAt || new Date().toISOString();

  return {
    id: notificationId,
    title: template.titles[randomTitleIndex],
    message: template.messages[randomMessageIndex],
    type: randomType,
    createdAt: createdDate,
    read,
  };
}

export function generateSampleNotifications(count: number = 10, includeRead: boolean = true): Notification[] {
  const notifications: Notification[] = [];
  const now = Date.now();
  
  for (let i = 0; i < count; i++) {
    const daysAgo = Math.floor(Math.random() * 7);
    const hoursAgo = Math.floor(Math.random() * 24);
    const minutesAgo = Math.floor(Math.random() * 60);
    const createdAt = new Date(now - (daysAgo * 24 * 60 * 60 * 1000) - (hoursAgo * 60 * 60 * 1000) - (minutesAgo * 60 * 1000)).toISOString();
    
    const read = includeRead && Math.random() < 0.3;
    notifications.push(generateMockNotification(undefined, read, createdAt));
  }
  
  return notifications.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export function generateNotificationByType(
  type: NotificationType,
  read: boolean = false
): Notification {
  const template = notificationTemplates[type];
  const randomTitleIndex = Math.floor(Math.random() * template.titles.length);
  const randomMessageIndex = Math.floor(Math.random() * template.messages.length);

  return {
    id: `notif-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    title: template.titles[randomTitleIndex],
    message: template.messages[randomMessageIndex],
    type,
    createdAt: new Date().toISOString(),
    read,
  };
}

