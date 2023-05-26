<script setup lang="ts">
const props = defineProps<{
  notify: INotification
}>();
const {removeNotification} = useNotifications()

</script>

<template>
  <div class="relative bg-white rounded overflow-hidden w-full max-w-[350px] min-h-[80px] shadow-lg items-center flex gap-1">
    <div class="w-[5px] rounded h-full" :class="props.notify.type"/>
    <button @click="removeNotification(props.notify.id)" class="absolute top-[5px] right-[5px]">
      <Icon name="ic:outline-close" size="20"/>
    </button>
    <div class="p-3 flex gap-3 items-center">
      <div class="wrapper-icon" :class="props.notify.type">
        <Icon name="ic:round-check" size="20px"/>
      </div>
      <div>
        <h4 class="text-lg font-semibold">{{ props.notify.title }}</h4>
        <p>{{ props.notify.message }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper-icon {
  @apply rounded-full w-[30px] h-[30px] text-white flex items-center justify-center;
}

.info {
  @apply bg-blue-500;
}

.success {
  @apply bg-green-500;
}

.error {
  @apply bg-red-500;
}

.warning {
  @apply bg-amber-500;
}
</style>