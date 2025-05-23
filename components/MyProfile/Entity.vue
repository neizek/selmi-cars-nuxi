<script setup lang="ts">
	import type { Entity } from '~/types/entities';

	defineProps<{ entity: Entity }>();
</script>

<template>
	<q-card>
		<q-card-section>
			<h4>Моя кампания</h4>
		</q-card-section>
		<q-card-section v-if="!entity" class="text-center">
			<span>Вы еще не зарегистрировали юридическое лицо.</span>
		</q-card-section>
	</q-card>
</template>
