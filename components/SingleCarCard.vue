<script lang="ts" setup>
	const { car } = defineProps(['car']);
	const img = 'https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/X5-2023/10452/1688992642182/front-left-side-47.jpg';
</script>

<template>
	<q-card flat v-if="car !== undefined">
		<div style="aspect-ratio: 4 / 3; width: 100%;">
			<q-img
				class="rounded-borders"
				:src="img"
				:alt="`${car.make.name} ${car.model}`"
				style="width: 100%; height: 100%;"
			/>
		</div>
		<q-item>
			<q-item-section>
				<q-item-label>{{ car.make.name }} {{ car.model.modelName }}</q-item-label>
				<q-item-label caption lines="2">{{ car.year }}, {{ car.mileage }}</q-item-label>
			</q-item-section>
			<q-item-section side class="text-primary text-h6">
				<q-item-label>{{ toPriceFormat(car.price) }}</q-item-label>
			</q-item-section>
		</q-item>
	</q-card>
</template>