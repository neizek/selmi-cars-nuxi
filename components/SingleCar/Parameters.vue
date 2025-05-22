<script setup lang="ts">
	import type { CarParameter } from '~/types/cars';

	defineProps<{ parameters: CarParameter }>();
</script>

<template>
	<q-card class="q-pa-sm">
		<q-item>
			<q-item-section>
				<q-item-label>
					<h4>Параметры</h4>
				</q-item-label>
			</q-item-section>
		</q-item>
		<q-list>
			<q-item v-for="parameter in Object.values(parameters)" :key="parameter.value">
				<q-item-section avatar>
					<q-icon :name="parameter.icon" class="self-center text-grey-8" />
				</q-item-section>
				<q-item-section>
					<q-item-label caption>{{ parameter.label }}</q-item-label>
					<q-item-label v-if="parameter.value">
						{{ parameter.value }}
					</q-item-label>
					<q-item-label v-else><q-skeleton type="text" /></q-item-label>
				</q-item-section>
				<q-item-section v-if="parameter.side" side>
					<q-item-label>{{ parameter.side }}</q-item-label>
				</q-item-section>
			</q-item>
		</q-list>
	</q-card>
</template>
