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
					<q-page class="q-gutter-y-xl q-mt-lg q-px-md">
						<slot />
					</q-page>
				</q-page-container>
			<AppFooter />
		</q-layout>
	</div>
</template>