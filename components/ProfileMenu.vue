<script setup lang="ts">
	import { messengerOpen } from '~/lib/stores/messenger';

	interface ProfileMenuItem {
		icon: string;
		label: string;
		link?: string;
		action?: () => void;
	}

	const { clear, user, fetch: refreshSession } = useUserSession();
	const localePath = useLocalePath();

	async function handleLogout() {
		await clear();
		await refreshSession();
	}

	const profileMenuItems: ProfileMenuItem[] = [
		{
			icon: 'fas fa-table',
			label: 'Мои объявления',
			link: user.value ? `/user/${user.value.id}/ads` : '',
		},
		{
			icon: 'fas fa-comments',
			label: 'Сообщения',
			action: () => (messengerOpen.value = !messengerOpen.value),
		},
		{
			icon: 'fas fa-heart',
			label: 'Избранное',
			link: user.value ? `/user/${user.value.id}/favorites` : '',
		},
		{
			icon: 'fas fa-gear',
			label: 'Редактировать профиль',
			link: user.value ? `/user/${user.value.id}` : '',
		},
	];

	function handleClick(menuItem: ProfileMenuItem) {
		if (menuItem.link) navigateTo(localePath(menuItem.link));
		if (menuItem.action) menuItem.action();
	}
</script>

<template>
	<q-menu v-if="user" style="width: 250px">
		<q-list>
			<q-item class="row q-gutter-x-md">
				<q-avatar>
					<q-icon name="fas fa-user-circle" size="48px" class="text-grey-7" />
				</q-avatar>
				<div class="column">
					<div class="text-subtitle1">{{ user.firstname }} {{ user.lastname }}</div>
					<div class="text-caption text-grey-7">{{ user.email }}</div>
				</div>
			</q-item>
			<q-separator />
			<q-item
				v-for="menuItem in profileMenuItems"
				:key="menuItem.link"
				v-ripple
				clickable
				@click="handleClick(menuItem)">
				<q-item-section avatar>
					<q-icon :name="menuItem.icon" color="primary" />
				</q-item-section>
				<q-item-section>{{ menuItem.label }}</q-item-section>
			</q-item>
			<q-separator />
			<q-item>
				<q-btn
					v-close-popup
					color="primary"
					icon="fas fa-arrow-right-from-bracket"
					:label="$t('signOut')"
					class="full-width"
					@click="handleLogout" />
			</q-item>
		</q-list>
	</q-menu>
</template>
