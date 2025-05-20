<script setup lang="ts">
	import { favorites } from '~/lib/stores/favorites';
	import ShareDialog from '../Dialogs/ShareDialog.vue';
	import SignInRequired from '../Dialogs/SignInRequired.vue';

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
		if (!user.value) {
			$q.dialog({
				component: SignInRequired,
				componentProps: {
					message: 'Чтобы добавить в избранное, необходимо войти в аккаунт',
				},
			});
			return;
		}
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

	function openSharingBox() {
		$q.dialog({
			component: ShareDialog,
			componentProps: {
				link: window.location.href,
			},
		});
	}
</script>

<template>
	<q-card class="bg-transparent">
		<q-card-actions align="right">
			<q-btn
				round
				color="grey-4"
				text-color="grey-8"
				icon="fas fa-share"
				@click="openSharingBox" />
			<q-btn
				round
				color="grey-4"
				:text-color="isFavorite ? 'primary' : 'grey-8'"
				icon="fas fa-heart"
				@click="isFavorite ? deleteFromFavorites() : addToFavorites()" />
			<q-btn round color="grey-4" text-color="grey-8" icon="fas fa-ellipsis">
				<q-menu>
					<q-list>
						<q-item clickable>
							<q-item-section class="row">
								<div class="row no-wrap items-center q-gutter-sm">
									<q-icon name="fas fa-ban" size="1.5rem" />
									<span>Пожаловаться</span>
								</div>
							</q-item-section>
						</q-item>
					</q-list>
				</q-menu>
			</q-btn>
		</q-card-actions>
	</q-card>
</template>
