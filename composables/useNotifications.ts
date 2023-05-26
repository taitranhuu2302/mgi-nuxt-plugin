import {createUUID} from "~/utils";
import {onMounted} from "#build/imports";

const defaultNotificationOptions = {
    type: "info",
    title: "Info Notification",
    message:
        "Ooops! A message was not provided.",
    autoClose: true,
    duration: 5,
};

export const useNotifications = () => {
    const notifications = useState<INotification[]>('notifications', () => [])

    onMounted(() => {

    })

    const showNotification = (options?: {
        type?: NotificationType,
        title?: string;
        message?: string;
        autoClose?: boolean;
        duration?: number;
    }) => {
        const _options = {
            ...defaultNotificationOptions,
            ...options
        }
        const newNotify: INotification = <INotification>{
            id: createUUID(),
            ..._options
        }
        notifications.value = [...notifications.value, newNotify]
    }

    const removeNotification = (id: string) => {
        notifications.value = notifications.value.filter(item => item.id !== id)
    }

    return {notifications, showNotification, removeNotification}
}