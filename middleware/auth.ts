const { user, initUser } = useAuth();
export default defineNuxtRouteMiddleware(async (to, from) => {
  await initUser();
  if (!user.value) {
    return navigateTo("/login");
  }
});