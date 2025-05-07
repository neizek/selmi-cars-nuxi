<script setup lang="ts">
	const mobileMenu = [
		{ label: 'Каталог', to: '', icon: 'apps' },
		{ label: 'Избранное', to: '', icon: 'favorite' },
		{ label: 'Разместить', to: '', icon: 'add' },
		{ label: 'Сообщения', to: '', icon: 'message' },
		{ label: 'Пользователь', to: '', icon: 'person' },
	];
</script>
<template>
	<q-toolbar class="BottomBar mobile-only bg-white">
		<div
			v-for="button in mobileMenu"
			:key="button.label"
			class="Button column flex-center q-pa-sm">
			<q-icon class="text-black" size="28px" :name="button.icon" />
			<span class="text-caption text-black">{{ button.label }}</span>
		</div>
	</q-toolbar>
</template>

<style lang="scss">
	.BottomBar {
		display: flex;
		flex-direction: row;
		gap: 6px;
		justify-content: space-between;
		position: fixed;
		bottom: 0;
		z-index: 10000;
	}
</style>
