<script setup lang="ts">
	import ProfileMenu from '~/components/ProfileMenu.vue';

	const { loggedIn } = useUserSession();
	const { locales, setLocale} = useI18n()
</script>

<template>
    <q-header class="bg-white">
      <q-toolbar class="q-pa-sm q-gutter-sm">
		<NuxtLink :to="$localePath('/')" style="display: flex; width: 100px;">
			<img src="~/assets/logo.svg">
		</NuxtLink>
        <q-space />
		<q-btn
			:label="$t('addAd')"
			icon="add"
			:to="$localePath('/cars/create')"
		/>
		<q-btn
			v-if="!loggedIn"
			:label="$t('signUp')"
			:to="$localePath('/user/signup')"
			icon="person"
			outline
		/>
		<q-btn
			v-if="loggedIn"
			icon="person"
			flat
		>
			<ProfileMenu />
		</q-btn>
		<q-btn
			icon="translate"
			flat
		>
			<q-menu>
				<q-list>
					<q-item
						v-for="(locale, index) in locales"
						:key="index"
						clickable
						@click="setLocale(locale.code)"
					>
						<q-item-section>{{ locale.name }}</q-item-section>
					</q-item>
				</q-list>
			</q-menu>
		</q-btn>
      </q-toolbar>
    </q-header>
</template>