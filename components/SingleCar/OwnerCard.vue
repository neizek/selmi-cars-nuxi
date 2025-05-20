<script lang="ts" setup>
	import type { ContactCard } from '~/types/cars';

	defineProps<{
		contact: ContactCard | undefined;
	}>();
</script>
<template>
	<q-card v-if="contact" class="q-pa-sm">
		<q-item>
			<q-item-section avatar>
				<q-avatar>
					<q-icon name="fas fa-user-circle" size="48px" class="text-grey-7" />
				</q-avatar>
			</q-item-section>

			<q-item-section>
				<q-item-label>
					{{ contact.name }}
				</q-item-label>
				<q-item-label caption>Частное лицо</q-item-label>
			</q-item-section>
			<q-item-section side top>
				<q-item-label caption>10 отзывов</q-item-label>
				<div class="text-orange">
					<q-icon name="fas fa-star" />
					<q-icon name="fas fa-star" />
					<q-icon name="fas fa-star" />
				</div>
			</q-item-section>
		</q-item>
		<q-card-actions class="full-width">
			<q-btn icon="fas fa-comment-dots" color="secondary" label="Написать" style="flex: 1" />
			<q-btn icon="fas fa-phone" color="primary" label="Позвонить" />
		</q-card-actions>
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
