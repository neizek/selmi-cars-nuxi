<script lang="ts" setup>
	import type { Car } from '~/types/cars';

	const { car } = defineProps<{ car: Car }>();
	const img = car.carImages[0].images.s240File?.url;
	// const img =
	// 	'https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/X5-2023/10452/1688992642182/front-left-side-47.jpg';
</script>

<template>
	<q-card v-if="car !== undefined" :key="car.id" flat>
		<div style="aspect-ratio: 4 / 3; width: 100%; overflow: hidden">
			<q-img
				:src="img"
				:alt="`${car.make.name} ${car.model}`"
				style="width: 100%; height: 100%" />
		</div>
		<q-item>
			<q-item-section>
				<q-item-label>{{ car.make.name }} {{ car.model.name }}</q-item-label>
				<q-item-label caption lines="2">{{ car.year }}, {{ car.mileage }} km</q-item-label>
			</q-item-section>
			<q-item-section side class="text-primary text-h6">
				<q-item-label>{{ toPriceFormat(car.price) }}</q-item-label>
			</q-item-section>
		</q-item>
	</q-card>
</template>
