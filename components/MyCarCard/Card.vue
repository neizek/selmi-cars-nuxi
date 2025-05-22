<script setup lang="ts">
	import type { Car } from '~/types/cars';

	defineProps<{ car: Car }>();
</script>

<template>
	<q-card v-if="car !== undefined" :key="car.id" class="cursor-pointer row">
		<q-card-section horizontal>
			<SingleCarCardGallery :images="car.carImages" :is-viewed="false" />
			<q-item class="column col-4 q-pa-md">
				<q-item-section top>
					<q-item-label lines="1">
						<h2>{{ car.make.name }} {{ car.model.name }}</h2>
					</q-item-label>
					<q-item-label caption lines="1">
						{{ car.year }}, {{ car.mileage }} km
					</q-item-label>
					<q-item-label class="text-primary">
						<h3>{{ toPriceFormat(car.price) }}</h3>
					</q-item-label>
				</q-item-section>
			</q-item>
			<q-item class="col-3 column">
				<div>
					<q-chip
						color="secondary"
						text-color="white"
						icon="fas fa-check"
						label="Активно" />
				</div>
				<q-item-label>
					<span>Уникальных просмотров: {{ car.views.length }}</span>
				</q-item-label>
			</q-item>
			<q-item class="col-auto">
				<!-- <q-item>
					<q-circular-progress
						show-value
						class="text-light-blue q-ma-md"
						:value="80"
						size="50px"
						color="light-blue" />
				</q-item> -->
				<q-item-section side>
					<div class="column justify-end q-gutter-y-sm">
						<q-btn icon="fas fa-circle-up" label="Поднять объявление" disable />
						<q-btn outline icon="fas fa-eye-slash" label="Скрыть" />
						<q-btn outline color="red" icon="fas fa-trash" label="Удалить" />
					</div>
				</q-item-section>
			</q-item>
		</q-card-section>
	</q-card>
</template>
