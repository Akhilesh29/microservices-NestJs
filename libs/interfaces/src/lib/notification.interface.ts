export interface Notification {
  id: string;
  userId: string;
  type: 'EMAIL' | 'SMS' | 'PUSH';
  title: string;
  message: string;
  status: 'PENDING' | 'SENT' | 'FAILED';
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateNotificationDto {
  userId: string;
  type: 'EMAIL' | 'SMS' | 'PUSH';
  title: string;
  message: string;
}

export interface NotificationEvent {
  type: 'NOTIFICATION_CREATED' | 'NOTIFICATION_SENT' | 'NOTIFICATION_FAILED';
  data: Notification;
} 