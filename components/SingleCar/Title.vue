<script lang="ts" setup>
	import type { Car } from '~/types/cars';

	defineProps<{ car: Car | null }>();
</script>

<template>
	<q-card>
		<q-item>
			<q-item-section>
				<q-item-label v-if="car">
					<h3>{{ car.make.name }} {{ car.model.name }}</h3>
				</q-item-label>
				<q-item-label v-else>
					<q-skeleton type="text" class="text-h3" />
				</q-item-label>
			</q-item-section>
			<q-item-section side>
				<q-item-label v-if="car">
					<h3 class="text-primary">{{ toPriceFormat(car.price) }}</h3>
				</q-item-label>
				<q-item-label v-else>
					<q-skeleton type="text" class="text-h3" style="width: 100px" />
				</q-item-label>
			</q-item-section>
		</q-item>
	</q-card>
</template>
