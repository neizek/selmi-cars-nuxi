<script setup lang="ts">
	const { user } = useUserSession();
	const { data: cars, status } = await useFetch('/api/cars/many', {
		method: 'POST',
		body: computed(() => ({
			where: {
				userId: user.value?.id,
			},
		})),
		lazy: true,
	});
</script>

<template>
	<PageWrap>
		<CarCardsSection :cars="cars || []" :is-loading="status !== 'success'" :expected-cars="4">
			<template #header><h1>Мои объявления</h1></template>
		</CarCardsSection>
	</PageWrap>
</template>
