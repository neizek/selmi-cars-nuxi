<script setup lang="ts">
	import { favorites } from '~/lib/stores/favorites';

	const props = defineProps({
		id: {
			type: Number,
			required: true,
		},
	});

	const $q = useQuasar();
	const { user } = useUserSession();
	const isFavorite = computed(() => {
		return favorites.value.includes(Number(props.id));
	});

	function addToFavorites() {
		$fetch('/api/favorites/create', {
			method: 'POST',
			body: { carId: props.id, userId: user.value?.id },
		})
			.then(() => {
				favorites.value.push(props.id);
				$q.notify({
					message: 'Автомобиль добавлен в избранное',
					type: 'positive',
				});
			})
			.catch((error) => {
				$q.notify({
					message: 'Ошибка при добавлении в избранное',
					type: 'negative',
				});
				console.error('Error adding to favorites:', error);
			});
	}

	function deleteFromFavorites() {
		$fetch('/api/favorites/delete', {
			method: 'POST',
			body: { carId: props.id, userId: user.value?.id },
		})
			.then(() => {
				favorites.value = favorites.value.filter((carId) => carId !== props.id);
				$q.notify({
					message: 'Автомобиль удален из избранного',
					type: 'positive',
				});
			})
			.catch((error) => {
				$q.notify({
					message: 'Ошибка при удалении из избранного',
					type: 'negative',
				});
				console.error('Error deleting from favorites:', error);
			});
	}
</script>

<template>
	<q-card class="bg-transparent shadower">
		<q-card-actions align="right">
			<q-btn round color="grey-4" text-color="grey-8" icon="share" />
			<q-btn
				round
				color="grey-4"
				:text-color="isFavorite ? 'primary' : 'grey-8'"
				icon="favorite"
				@click="isFavorite ? deleteFromFavorites() : addToFavorites()" />
			<q-btn round color="grey-4" text-color="grey-8" icon="more_horiz" />
		</q-card-actions>
	</q-card>
</template>
