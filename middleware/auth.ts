export default defineNuxtRouteMiddleware((to) => {
	const { loggedIn } = useUserSession();
	const localePath = useLocalePath();

	if (!loggedIn.value) {
		// Check meta property to determine behavior
		const showError = to.meta.authError === true;

		if (showError) {
			throw createError({
				statusCode: 401,
				statusMessage: 'Unauthorized',
				message: 'Please sign in to access this page',
			});
		}

		return navigateTo(localePath('/user/signin'));
	}
});
