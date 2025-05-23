<script setup lang="ts">
	import type { SingleUser } from '~/types/users';

	defineProps<{ user: SingleUser | null }>();
</script>

<template>
	<q-card v-if="user">
		<q-card-section>
			<q-item>
				<q-item-section avatar>
					<q-icon name="fas fa-user-circle" size="48px" class="text-grey-7" />
				</q-item-section>
				<q-item-section>
					<q-item-label>
						{{ user.firstname }} {{ user.lastname }} ({{ user.email }})
					</q-item-label>
					<q-item-label caption>Частное лицо</q-item-label>
				</q-item-section>
				<q-item-section side>
					<q-item-label>Редактировать</q-item-label>
				</q-item-section>
			</q-item>
		</q-card-section>
	</q-card>

	<!-- SKELETON -->

	<q-card v-else>
		<q-card-section>
			<q-item>
				<q-item-section avatar>
					<q-skeleton type="QAvatar" size="48px" />
				</q-item-section>
				<q-item-section>
					<q-item-label><q-skeleton type="text" /></q-item-label>
					<q-item-label><q-skeleton type="text" /></q-item-label>
					<q-item-label caption><q-skeleton type="text" /></q-item-label>
				</q-item-section>
				<q-item-section side>
					<q-item-label>Редактировать</q-item-label>
				</q-item-section>
			</q-item>
		</q-card-section>
	</q-card>
</template>
