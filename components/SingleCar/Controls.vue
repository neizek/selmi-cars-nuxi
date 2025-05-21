<script setup lang="ts">
	import { addFavorite, favorites, removeFavorite } from '~/lib/stores/favorites';
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

		addFavorite(props.id);

		$fetch('/api/favorites/create', {
			method: 'POST',
			body: { carId: props.id, userId: user.value?.id },
		}).catch(() => {
			removeFavorite(props.id);

			$q.notify({
				message: 'Ошибка при добавлении в избранное',
				type: 'negative',
			});
		});
	}

	function deleteFromFavorites() {
		removeFavorite(props.id);

		$fetch('/api/favorites/delete', {
			method: 'POST',
			body: { carId: props.id, userId: user.value?.id },
		}).catch(() => {
			addFavorite(props.id);

			$q.notify({
				message: 'Не удалось удалить из избранных. Попробуйте еще раз.',
				type: 'negative',
			});
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
				text-color="grey-7"
				icon="fas fa-share"
				@click="openSharingBox" />
			<q-btn
				round
				color="grey-4"
				:text-color="isFavorite ? 'primary' : 'grey-7'"
				icon="fas fa-heart"
				@click="isFavorite ? deleteFromFavorites() : addToFavorites()" />
			<q-btn round color="grey-4" text-color="grey-7" icon="fas fa-ellipsis">
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
