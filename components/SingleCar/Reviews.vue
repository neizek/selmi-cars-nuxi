<script setup lang="ts">
	import { SingleCarNewReview } from '#components';
	import type { Entity } from '~/types/entities';
	import type { Review } from '~/types/reviews';
	import type { SingleUser } from '~/types/users';

	const isOpen = defineModel<boolean>();
	const props = defineProps<{ user?: SingleUser; entity?: Entity }>();

	const reviews: Review[] | undefined = props.user?.reviews ?? props.entity?.reviews;
	const isReviewFormOpen = ref(false);
</script>
<template>
	<q-dialog v-model="isOpen">
		<q-card v-if="user || entity" style="width: 400px" class="q-pa-sm">
			<q-card-section>
				<q-item-label>
					<h4>Отзывы</h4>
				</q-item-label>
				<q-item-label caption>Всего отзывов: {{ reviews?.length }}</q-item-label>
			</q-card-section>
			<q-card-section v-if="user && reviews && reviews.length > 0">
				<ReviewsBlock :user-id="user?.id" />
			</q-card-section>
			<q-card-section v-else>
				<q-item-label>
					У этого пользователя ещё нет отзывов, будьте первым, кто его оставит.
				</q-item-label>
			</q-card-section>
			<q-card-actions class="justify-center">
				<q-btn
					flat
					icon="fas fa-plus"
					label="Добавить новый отзыв"
					@click="isReviewFormOpen = !isReviewFormOpen" />
			</q-card-actions>
		</q-card>
	</q-dialog>
	<SingleCarNewReview v-model="isReviewFormOpen" />
</template>
