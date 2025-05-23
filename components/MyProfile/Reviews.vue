<script setup lang="ts">
	defineProps<{ userId: number }>();
</script>
<template>
	<q-card>
		<q-card-section>
			<h4>Мои отзывы</h4>
		</q-card-section>
		<q-item v-if="userId">
			<ReviewsBlock :user-id="userId" />
		</q-item>
	</q-card>
</template>
