export default defineNuxtRouteMiddleware((to) => {
	const { user } = useUserSession();

	const routeUserId = to.params.id;

	if (user.value?.id !== Number(routeUserId)) {
		throw createError({
			statusCode: 403,
			statusMessage: 'Access Restricted',
		});
	}
});
