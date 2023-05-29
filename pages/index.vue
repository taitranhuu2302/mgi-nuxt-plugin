<script setup lang="ts">
import { NotificationType } from "@/types/notifications";

const { $showNotification } = useNuxtApp();

const onShowNotify = (type: NotificationType, message: string) => {
  const options = {
    message,
    type,
  };
  $showNotification(options);
};
</script>

<template>
  <div id="root">
    <div class="mt-5 flex flex-col gap-5">
      <button
        @click="
          onShowNotify(
            NotificationType.info,
            'New settings available on your account'
          )
        "
        class="bg-blue-500 hover:bg-blue-600 btn"
      >
        Show Notification Info
      </button>
      <button
        @click="
          onShowNotify(
            NotificationType.error,
            'Your changes are saved successfully'
          )
        "
        class="bg-red-500 hover:bg-red-600 btn"
      >
        Show Notification Error
      </button>
      <button
        @click="
          onShowNotify(
            NotificationType.warning,
            'Error has occurred saving changes'
          )
        "
        class="bg-amber-500 hover:bg-amber-600 btn"
      >
        Show Notification Warning
      </button>
      <button
        @click="
          onShowNotify(
            NotificationType.success,
            'Username you have entered is invalid'
          )
        "
        class="bg-green-500 hover:bg-green-600 btn"
      >
        Show Notification Success
      </button>
    </div>
  </div>
</template>

<style scoped>
#root {
  @apply flex items-center flex-col justify-center h-screen;
}

.btn {
  @apply p-3 transition rounded text-white;
}
</style>
