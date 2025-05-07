<script setup lang="ts">
	import AppFooter from './AppFooter.vue';
	import AppHeader from './AppHeader.vue';
	import '~/assets/styles/main.scss';
	import BottomBar from './BottomBar.vue';
</script>

<template>
	<div>
		<q-layout view="hHh lpR fff" class="bg-grey-2">
			<AppHeader />
			<q-page-container class="wrapper w1200">
				<slot />
			</q-page-container>
			<BottomBar />
			<AppFooter />
		</q-layout>
	</div>
</template>
