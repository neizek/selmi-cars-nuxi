<script lang="ts" setup>
	import type { Car } from '~/types/cars';

	const { car } = defineProps<{ car: Car }>();

	const imageBlock = ref(null);

	function onMouseOver() {
		const element = imageBlock.value as unknown as HTMLElement;
		if (element) {
			element.scrollTo({
				left: element.scrollLeft + element.clientWidth,
				behavior: 'smooth',
			});
		}
	}

	function onMouseOut() {
		const element = imageBlock.value as unknown as HTMLElement;

		if (element) {
			element.scrollTo({
				left: 0,
				behavior: 'smooth',
			});
		}
	}

	function handleClick() {
		console.log(car);
	}
</script>

<template>
	<q-card v-if="car !== undefined" :key="car.id" flat @click="handleClick">
		<div
			ref="imageBlock"
			class="ImgBlock hide-scrollbar"
			@mouseover="onMouseOver"
			@mouseout="onMouseOut">
			<NuxtImg
				v-for="(imageSet, index) in car.carImages"
				:key="index"
				:srcset="`${imageSet.s240} 240w, ${imageSet.s480} 480w`"
				style="width: 100%; height: 100%; object-fit: cover; flex: none" />
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

<style lang="scss">
	.ImgBlock {
		display: flex;
		flex-direction: row;
		aspect-ratio: 4 / 3;
		overflow: hidden;
		overflow-x: scroll;
	}
</style>
