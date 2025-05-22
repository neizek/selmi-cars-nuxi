<script lang="ts" setup>
	import { SingleCarReviews } from '#components';
	import type { SingleUser } from '~/types/users';

	defineProps<{
		user: SingleUser | undefined;
	}>();

	const rate = ref(3);
	const reviewsOpened = ref(false);
</script>
<template>
	<q-card v-if="user" class="q-pa-sm">
		<q-item clickable @click="reviewsOpened = !reviewsOpened">
			<q-item-section avatar>
				<q-avatar>
					<q-icon name="fas fa-user-circle" size="48px" class="text-grey-7" />
				</q-avatar>
			</q-item-section>

			<q-item-section>
				<q-item-label>{{ user.firstname }} {{ user.lastname }}</q-item-label>
				<q-item-label caption>Частное лицо</q-item-label>
			</q-item-section>
			<q-item-section side>
				<q-item-label>
					<q-rating
						v-model="rate"
						icon="fas fa-star"
						:max="5"
						color="secondary"
						readonly />
				</q-item-label>
				<q-item-label caption>{{ user.reviews.length }} отзывов</q-item-label>
				<!-- <div class="text-orange">
					<q-icon name="fas fa-star" />
					<q-icon name="fas fa-star" />
					<q-icon name="fas fa-star" />
				</div> -->
			</q-item-section>
		</q-item>
		<q-card-actions class="full-width q-gutter-x-sm">
			<q-btn icon="fas fa-comment-dots" color="secondary" label="Написать" class="col" />
			<q-btn icon="fas fa-phone" color="primary" label="Позвонить" class="col" />
		</q-card-actions>
		<SingleCarReviews v-model="reviewsOpened" :user="user" />
	</q-card>
	<q-card v-else class="q-pa-sm">
		<q-item>
			<q-item-section avatar>
				<q-skeleton type="QAvatar" style="height: 48px" />
			</q-item-section>

			<q-item-section>
				<q-item-label>
					<q-skeleton type="text" />
				</q-item-label>
				<q-item-label caption><q-skeleton type="text" /></q-item-label>
			</q-item-section>
			<q-item-section side top>
				<q-item-label caption><q-skeleton type="text" style="width: 50px" /></q-item-label>
				<div class="text-orange">
					<q-skeleton type="text" style="width: 50px" />
				</div>
			</q-item-section>
		</q-item>
		<q-card-actions class="full-width q-gutter-x-sm">
			<q-skeleton type="QBtn" style="flex: 1" />
			<q-skeleton type="QBtn" />
		</q-card-actions>
	</q-card>
</template>
