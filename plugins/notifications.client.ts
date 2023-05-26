export default defineNuxtPlugin((nuxtApp) => {
    const {showNotification} = useNotifications()

    return {
        provide: {
            showNotification
        }
    }
})