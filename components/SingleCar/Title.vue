<script lang="ts" setup>
	import type { SingleCar } from '~/types/cars';

	defineProps<{ car: SingleCar | null }>();
</script>

<template>
	<q-card v-if="car">
		<q-item>
			<q-item-section>
				<q-item-label>
					<h3>{{ car.make.name }} {{ car.model.name }}</h3>
				</q-item-label>
				<q-item-label caption class="q-gutter-x-md">
					<span>{{ formatDateToDayMonth(car.createdAt) }}</span>
					<span class="q-gutter-x-sm">
						<q-icon name="fas fa-eye" />
						<span>{{ car._count.views }}</span>
					</span>
				</q-item-label>
			</q-item-section>
			<q-item-section side>
				<q-item-label>
					<h3 class="text-primary">{{ toPriceFormat(car.price) }}</h3>
				</q-item-label>
			</q-item-section>
		</q-item>
	</q-card>

	<!-- SKELETON -->

	<q-card v-else>
		<q-item>
			<q-item-section>
				<q-item-label>
					<q-skeleton type="text" class="text-h3" />
				</q-item-label>
				<q-item-label caption>
					<q-skeleton type="text" />
				</q-item-label>
			</q-item-section>
			<q-item-section side>
				<q-item-label>
					<q-skeleton type="text" class="text-h3" style="width: 100px" />
				</q-item-label>
			</q-item-section>
		</q-item>
	</q-card>
</template>
