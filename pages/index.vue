<script setup lang="ts">
import CarCardsSection from '~/components/CarCardsSection.vue';

	const { data: makes } = useFetch('/api/cars/make', {
		method: 'get',
		lazy: true
	})

	const { data: newCars, status } = useFetch('/api/cars', {
		method: 'POST',
		body: {
			orderBy: {createdAt: 'desc'}
		},
		lazy: true
	});

	const carMock = {
		img: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/X5-2023/10452/1688992642182/front-left-side-47.jpg',
		make: 'BMW',
		model: 'X5',
		price: 2500,
		year: 2024,
		mileage: 80000
	}

</script>

<template>
	<PageWrap>
		<CarCardsSection :cars="newCars" :is-loading="status !== 'success'" :expected-cars="4">
			<template #header>
				<span class="text-h4">Новые объявления</span>
			</template>
		</CarCardsSection>
		<div class="row q-gutter-md">
			<div v-for="make in makes" :key="make.id">
				<NuxtLink :to="$localePath('/cars')">{{ make.name }}</NuxtLink>
			</div>
		</div>
		<CarCardsSection :cars="Array(8).fill('').map(() => carMock)">
			<template #header>
				<span class="text-h4">Популярные объявления</span>
			</template>
		</CarCardsSection>
	</PageWrap>
  </template>