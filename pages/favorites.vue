<script setup lang="ts">
	import { favorites } from '~/lib/stores/favorites';
	import type { Car } from '~/types/cars';

	const { data: cars, status } = await useFetch<Car[]>('/api/cars/many', {
		method: 'POST',
		body: computed(() => ({
			where: {
				id: {
					in: favorites.value,
				},
			},
		})),
		lazy: true,
	});
</script>

<template>
	<PageWrap>
		<CarCardsSection :cars="cars || []" :is-loading="status !== 'success'" :expected-cars="4">
			<template #header><h1>Мои избранные</h1></template>
		</CarCardsSection>
	</PageWrap>
</template>
