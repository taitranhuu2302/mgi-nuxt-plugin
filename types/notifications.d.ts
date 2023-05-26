type NotificationType = 'info' | 'success' | 'error' | 'warning';

interface INotification {
    id: string;
    type: NotificationType,
    title: string;
    message: string;
    autoClose: boolean;
    duration: number;
}