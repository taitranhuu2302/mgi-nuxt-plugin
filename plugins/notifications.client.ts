import { NotificationType } from "~/types/notifications";

export default defineNuxtPlugin((nuxtApp) => {
  let timer: NodeJS.Timeout | null = null;

  const notify = (message: string, type: NotificationType) => {
    const notifyOld = document.getElementById("notify");
    if (notifyOld) {
      document.body.removeChild(notifyOld);
    }
    if (timer) clearTimeout(timer);

    const notify = document.createElement("div");
    notify.setAttribute("id", "notify");
    notify.classList.add(NotificationType[type]);
    notify.innerText = message;
    document.body.appendChild(notify);
    timer = setTimeout(() => {
      document.body.removeChild(notify);
    }, 2000);
  };

  return {
    provide: {
      notify: notify,
    },
  };
});
