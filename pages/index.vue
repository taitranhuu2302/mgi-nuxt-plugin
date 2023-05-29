<script setup lang="ts">
const {$showNotification} = useNuxtApp()

const onShowNotify = (type: NotificationType) => {
  switch (type) {
    case "info":
      $showNotification({
        message: 'New settings available on your account',
        type,
        title: "Info Notification"
      })
      break;
    case "success":
      $showNotification({
        message: 'Your changes are saved successfully',
        type,
        title: "Success Notification"
      })
      break;
    case "error":
      $showNotification({
        message: 'Error has occurred saving changes',
        type,
        title: "Error Notification"
      })
      break;
    case "warning":
      $showNotification({
        message: 'Username you have entered is invalid',
        type,
        title: "Warning Notification"
      })
      break;
  }
}

</script>

<template>
  <div id="root">
    <div class="mt-5 flex flex-col gap-5">
      <button @click="onShowNotify('info')" class="p-3 bg-blue-500 hover:bg-blue-600 transition rounded text-white">Show
        Notification Info
      </button>
      <button @click="onShowNotify('error')" class="p-3 bg-red-500 hover:bg-red-600 transition rounded text-white">Show
        Notification Error
      </button>
      <button @click="onShowNotify('warning')"
              class="p-3 bg-amber-500 hover:bg-amber-600 transition rounded text-white">Show
        Notification Warning
      </button>
      <button @click="onShowNotify('success')"
              class="p-3 bg-green-500 hover:bg-green-600 transition rounded text-white">Show
        Notification Success
      </button>
    </div>
  </div>
</template>

<style scoped>
#root {
  @apply flex items-center flex-col justify-center h-screen;
}
</style>