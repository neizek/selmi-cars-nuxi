export default defineNuxtRouteMiddleware((to) => {
	const { user, loggedIn } = useUserSession();
	const localePath = useLocalePath();

	if (!loggedIn.value) {
		return navigateTo(localePath("/user/signin"));
	}

	const routeUserId = to.params.id;

	if (user.value?.id !== Number(routeUserId)) {
		throw createError({
			statusCode: 403,
			statusMessage: "Access Restricted",
		});
	}
});
