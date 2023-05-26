<script setup lang="ts">
const {notifications} = useNotifications()
</script>

<template>
  <div class="root">
    <slot/>
    <div class="fixed top-0 right-0 p-3">
      <transition-group name="list" tag="div" class="flex flex-col gap-5">
        <template v-for="notify in notifications" :key="notify.id">
          <Notification :notify="notify"/>
        </template>
      </transition-group>
    </div>
  </div>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>