<script lang="ts" setup>
	import { computed } from 'vue';

	const props = defineProps<{
		viewed?: boolean;
		exclusive?: boolean;
		new?: boolean;
	}>();

	const badges = {
		viewed: {
			label: 'Просмотрено',
			color: 'white',
			textColor: 'grey-9',
			isShown: props.viewed,
		},
		exclusive: {
			label: 'Эксклюзив',
			color: 'primary',
			textColor: 'white',
			isShown: props.exclusive,
		},
		new: { label: 'Новое', color: 'secondary', textColor: 'white', isShown: props.new },
	};

	const visibleBadges = computed(() => Object.values(badges).filter((badge) => badge.isShown));
</script>
<template>
	<div class="absolute-top-right">
		<q-chip
			v-for="(badge, index) in visibleBadges"
			:key="index"
			:label="badge.label"
			:color="badge.color"
			:text-color="badge.textColor"
			size="sm"
			style="border-radius: 6px" />
	</div>
</template>
