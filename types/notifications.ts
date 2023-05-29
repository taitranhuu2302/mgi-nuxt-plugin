export enum NotificationType {
  "info",
  "success",
  "error",
  "warning",
}

export interface INotification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  isAutoClose: boolean;
  duration: number;
}

