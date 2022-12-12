export default defineNuxtRouteMiddleware((to, from) => {
    const { status } = useSession();
    if (status.value === 'unauthenticated') {
        return navigateTo("/login")
    } else {
        return navigateTo("/")
    }
})