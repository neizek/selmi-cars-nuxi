<script setup lang="ts">
	import ProfileMenu from '~/components/ProfileMenu.vue';
	import LogoSVG from '~/assets/logo.svg';
	import { messengerOpen } from '~/lib/stores/messenger';

	const { loggedIn } = useUserSession();
	const { locales, setLocale } = useI18n();
</script>

<template>
	<q-header class="bg-white">
		<q-toolbar class="q-py-sm q-px-md q-gutter-sm">
			<NuxtLink :to="$localePath('/')" style="display: flex; height: 32px">
				<LogoSVG />
			</NuxtLink>
			<q-space />
			<q-btn
				v-if="$q.screen.gt.xs"
				:label="$t('addAd')"
				color="primary"
				icon="fas fa-plus"
				:to="$localePath('/cars/create')" />
			<q-btn
				v-if="!loggedIn"
				:label="$q.screen.gt.xs ? $t('signUp') : ''"
				:to="$localePath('/user/signup')"
				icon="fas fa-user"
				outline />
			<q-btn v-if="loggedIn" :to="$localePath('/favorites')" icon="fas fa-heart" flat />
			<q-btn
				v-if="loggedIn"
				icon="fas fa-comments"
				flat
				@click="messengerOpen = !messengerOpen" />
			<q-btn v-if="loggedIn" icon="fas fa-user" flat>
				<ProfileMenu />
			</q-btn>
			<q-btn v-if="!loggedIn" icon="fas fa-globe" flat>
				<q-menu>
					<q-list>
						<q-item
							v-for="(locale, index) in locales"
							:key="index"
							clickable
							@click="setLocale(locale.code)">
							<q-item-section>{{ locale.name }}</q-item-section>
						</q-item>
					</q-list>
				</q-menu>
			</q-btn>
		</q-toolbar>
	</q-header>
</template>
