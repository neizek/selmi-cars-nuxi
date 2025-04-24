<script setup lang="ts">
	import type { Car } from '~/types/cars';

	defineProps<{
		cars: Car[];
		isLoading: boolean;
		expectedCars: number;
	}>();
</script>

<template>
	<div>
		<div class="q-mb-md">
			<slot name="header" />
		</div>
		<div v-if="!isLoading && cars.length > 0" class="row q-col-gutter-md">
			<div v-for="car in cars" :key="car.id" class="col-md-3 col-6">
				<SingleCarCard :car="car" />
			</div>
		</div>
		<div v-else-if="!isLoading && cars.length === 0">
			<div class="absolute-center">
				<span>К сожалению не нашлось ни одного автомобиля</span>
			</div>
		</div>
		<div v-else class="row q-col-gutter-md">
			<div v-for="_ in Array(expectedCars)" :key="_" class="col-md-3 col-6">
				<SingleCarCardSkeleton />
			</div>
		</div>
	</div>
</template>
