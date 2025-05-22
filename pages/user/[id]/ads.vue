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
		<!-- <CarCardsSection :cars="cars || []" :is-loading="status !== 'success'" :expected-cars="4">
			<template #header><h1>Мои объявления</h1></template>
		</CarCardsSection> -->
		<div class="flex items-center justify-between">
			<h1>Мои объявления</h1>
			<q-btn outline label="Добавить объявление" />
		</div>
		<div class="q-gutter-y-lg">
			<MyCarCard v-for="car in cars" :key="car.id" :car="car" />
		</div>
	</PageWrap>
</template>
