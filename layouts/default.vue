<script setup lang="ts">
import AppFooter from './AppFooter.vue';
import AppHeader from './AppHeader.vue';
import '~/assets/styles/main.scss';
</script>

<template>
	<div>
		<q-layout view="hHh lpR fff" class="bg-grey-2">
			<AppHeader />
				<q-page-container class="wrapper w1200">
					<slot />
				</q-page-container>
			<AppFooter />
		</q-layout>
	</div>
</template>