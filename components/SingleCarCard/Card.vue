<script lang="ts" setup>
	import type { Car } from '~/types/cars';

	const { car } = defineProps<{ car: Car }>();

	const newCarPeriod = 3600000; // 1 hour

	function handleClick(id: number) {
		navigateTo(`/car/${id}`);
	}
</script>

<template>
	<q-card
		v-if="car !== undefined"
		:key="car.id"
		class="cursor-pointer"
		@click="() => handleClick(car.id)">
		<SingleCarCardGallery :images="car.carImages" />
		<q-item>
			<q-item-section>
				<q-item-label>{{ car.make.name }} {{ car.model.name }}</q-item-label>
				<q-item-label caption lines="1">{{ car.year }}, {{ car.mileage }} km</q-item-label>
			</q-item-section>
			<q-item-section
				side
				:class="`text-primary ${$q.screen.gt.xs ? 'text-h6' : 'subtitle-2 text-bold'}`">
				<q-item-label>{{ toPriceFormat(car.price) }}</q-item-label>
			</q-item-section>
		</q-item>
		<SingleCarCardBadges
			:viewed="car.views.length > 0"
			:new="new Date().getTime() - new Date(car.createdAt).getTime() < newCarPeriod" />
	</q-card>
</template>
