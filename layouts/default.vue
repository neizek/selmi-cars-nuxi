<script setup lang="ts">
	import AppFooter from './AppFooter.vue';
	import '~/assets/styles/main.scss';
	import BottomBar from './BottomBar.vue';
	import { favorites } from '~/lib/stores/favorites';
	import { views } from '~/lib/stores/views';
	import HeaderBar from './HeaderBar.vue';

	const { loggedIn, user } = useUserSession();

	onMounted(() => {
		if (loggedIn.value) {
			if (user.value && favorites.value.length === 0) {
				$fetch(`/api/favorites/many?userId=${user.value.id}`).then((response) => {
					if (Array.isArray(response)) {
						favorites.value = response;
					} else {
						console.error('Failed to fetch favorites:', response);
					}
				});
			}

			if (views.value.length === 0 && user.value) {
				$fetch(`/api/favorites/many?userId=${user.value.id}`).then((response) => {
					if (Array.isArray(response)) {
						views.value = response;
					} else {
						console.error('Failed to fetch views:', response);
					}
				});
			}
		}
	});
</script>

<template>
	<div>
		<q-layout view="lHh lpR fff" class="bg-grey-2">
			<HeaderBar />
			<q-page-container class="wrapper w1200">
				<slot />
			</q-page-container>
			<MessengerDrawer />
			<BottomBar />
			<AppFooter />
		</q-layout>
	</div>
</template>
