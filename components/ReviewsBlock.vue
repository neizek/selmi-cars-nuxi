<script setup lang="ts">
	import type { Review } from '~/types/reviews';

	const props = defineProps<{ userId: number }>();

	const { data: reviews } = useFetch<Review[]>(`/api/reviews/many?userId=${props.userId}`);
</script>

<template>
	<q-list v-if="reviews" class="full-width">
		<q-item v-for="review in reviews" :key="review.id" class="q-pa-none">
			<q-item-section avatar>
				<q-icon size="36px" name="fas fa-user-circle" />
			</q-item-section>
			<q-item-section>
				<q-item-label>
					{{ review.author.firstname }} {{ review.author.lastname }}
				</q-item-label>
				<q-item-label caption>{{ review.text }}</q-item-label>
			</q-item-section>
			<q-item-section side>
				<q-rating v-model="review.rate" readonly />
			</q-item-section>
		</q-item>
	</q-list>
	<div v-else>
		<span>Нету ни одного отзыва</span>
	</div>
</template>
