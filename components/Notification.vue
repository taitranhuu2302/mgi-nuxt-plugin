<script setup lang="ts">
import { INotification, NotificationType } from "@/types/notifications";

const props = defineProps<{
  notify: INotification;
}>();
const { removeNotification } = useNotifications();
</script>

<template>
  <div id="root" :class="NotificationType[props.notify.type]">
    <button
      @click="removeNotification(props.notify.id)"
      class="absolute top-[5px] right-[5px]"
    >
      <Icon name="ic:outline-close" size="20" />
    </button>
    <div class="px-5 w-full py-3 flex gap-3 items-center">
      <div class="wrapper-icon" :class="NotificationType[props.notify.type]">
        <Icon name="ic:round-check" size="20px" />
      </div>
      <div>
        <h4 class="text-lg font-semibold">{{ props.notify.title }}</h4>
        <p>{{ props.notify.message }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
#root {
  @apply relative bg-white rounded overflow-hidden w-full max-w-[350px] shadow-lg items-center flex gap-1;
}

#root::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 100%;
}

#root::after.info,
.info {
  @apply bg-blue-500;
}
#root::after.success,
.success {
  @apply bg-green-500;
}
#root::after.error,
.error {
  @apply bg-red-500;
}
#root::after.warning,
.warning {
  @apply bg-amber-500;
}

.wrapper-icon {
  @apply rounded-full w-[30px] h-[30px] text-white flex items-center justify-center;
}
</style>
