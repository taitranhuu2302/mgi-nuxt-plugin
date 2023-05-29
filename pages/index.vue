<script setup lang="ts">
import { NotificationType } from "@/types/notifications";

const { $notify } = useNuxtApp();
</script>

<template>
  <div id="root">
    <div class="mt-5 flex flex-col gap-5">
      <button
        @click="$notify('xin chao', NotificationType.info)"
        class="bg-blue-500 hover:bg-blue-600 btn"
      >
        Show Notification Info
      </button>
      <button
        @click="$notify('xin chao', NotificationType.error)"
        class="bg-red-500 hover:bg-red-600 btn"
      >
        Show Notification Error
      </button>
      <button
        @click="$notify('xin chao', NotificationType.warning)"
        class="bg-amber-500 hover:bg-amber-600 btn"
      >
        Show Notification Warning
      </button>
      <button
        @click="$notify('xin chao', NotificationType.success)"
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
