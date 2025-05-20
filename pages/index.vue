<script setup lang="ts">
	import CarCardsSection from '~/components/CarCardsSection.vue';
	import type { Car, Make } from '~/types/cars';

	const { data: makes } = useFetch<Make[]>('/api/makes/many', {
		method: 'get',
		lazy: true,
	});

	const { data: newCars, status } = useFetch<Car[]>('/api/cars/many', {
		method: 'POST',
		body: {
			orderBy: { createdAt: 'desc' },
			take: 4,
		},
		lazy: true,
	});
</script>

<template>
	<PageWrap>
		<CarCardsSection
			:cars="newCars || []"
			:is-loading="status !== 'success'"
			:expected-cars="4">
			<template #header>
				<h2>Новые объявления</h2>
			</template>
		</CarCardsSection>
		<div class="row q-gutter-md">
			<div v-for="make in makes" :key="make.id">
				<NuxtLink :to="$localePath(`/cars/${make.name.toLocaleLowerCase()}`)">
					{{ make.name }}
				</NuxtLink>
			</div>
		</div>
		<CarCardsSection
			:cars="newCars || []"
			:is-loading="status !== 'success'"
			:expected-cars="4">
			<template #header>
				<h2>Популярные объявления</h2>
			</template>
		</CarCardsSection>
	</PageWrap>
</template>
