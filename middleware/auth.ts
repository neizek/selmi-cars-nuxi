export default defineNuxtRouteMiddleware(() => {
	const { loggedIn } = useUserSession()
	const localePath = useLocalePath();
	if (!loggedIn.value) {
	  return navigateTo(localePath('/user/signin'))
	}
})
  