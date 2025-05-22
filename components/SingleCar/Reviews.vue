<script setup lang="ts">
	import type { SingleUser } from '~/types/users';

	const isOpen = defineModel<boolean>();
	const props = defineProps<{ user: SingleUser }>();
</script>
<template>
	<q-dialog v-model="isOpen">
		<q-card v-if="user" style="width: 400px">
			<q-card-section>
				<h4>Отзывы</h4>
			</q-card-section>
			<q-card-section v-if="user.reviews.length > 0">
				<q-list v-for="review in user.reviews" :key="review.id">
					<q-item>
						<q-item-section avatar>
							<q-icon size="36px" name="fas fa-user-circle" />
						</q-item-section>
						<q-item-section>
							<q-item-label>Имя</q-item-label>
							<q-item-label caption>{{ review.text }}</q-item-label>
						</q-item-section>
						<q-item-section side top>
							<q-rating v-model="review.rate" readonly />
						</q-item-section>
					</q-item>
				</q-list>
			</q-card-section>
			<q-card-section v-else>
				<q-item-label>
					У этого пользователя ещё нет отзывов, будьте первым, кто его оставит.
				</q-item-label>
			</q-card-section>
			<q-card-actions>
				<q-btn flat label="Оставить новый отзыв" />
			</q-card-actions>
		</q-card>
	</q-dialog>
</template>
