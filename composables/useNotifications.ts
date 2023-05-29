import { createUUID } from "~/utils";
import { NotificationType, INotification } from "@/types/notifications";

const defaultNotificationOptions = {
  type: "info",
  title: "Info Notification",
  message: "Ooops! A message was not provided.",
  isAutoClose: true,
  duration: 3,
};

export const useNotifications = () => {
  const notifications = useState<INotification[]>("notifications", () => []);

  const showNotification = (options?: {
    type?: NotificationType;
    title?: string;
    message?: string;
    autoClose?: boolean;
    duration?: number;
  }) => {
    const type = options?.type ? NotificationType[options.type] : "info";
    const _options = {
      ...defaultNotificationOptions,
      ...options,
      title: options?.title ? options.title : `${type} notification`,
    };
    const newNotify: INotification = <INotification>{
      id: createUUID(),
      ..._options,
    };
    notifications.value = [...notifications.value, newNotify];

    if (!newNotify.isAutoClose) return;

    setTimeout(() => {
      notifications.value = notifications.value.filter(
        (n) => n.id !== newNotify.id
      );
    }, newNotify.duration * 1000);
  };

  const removeNotification = (id: string) => {
    notifications.value = notifications.value.filter((item) => item.id !== id);
  };

  return { notifications, showNotification, removeNotification };
};
