<script lang="ts" setup>
	import { favorites } from '~/lib/stores/favorites';
	import { views } from '~/lib/stores/views';
	import { isEmail, required } from '~/utils/forms/validators';

	const credentials = reactive({
		email: '',
		password: '',
		rememberMe: false,
	});

	const { fetch: refreshSession } = useUserSession();
	const router = useRouter();
	const localePath = useLocalePath();

	const showPassword = ref(false);
	const isLoading = ref(false);
	const signInError = ref('');
	const previousRoute = computed(() => router.options.history.state.back);

	async function requestSignIn() {
		console.log(previousRoute.value);
		await useFetch('/api/users/signin', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: credentials,
			onResponseError({ response }) {
				if (response.status === 401) {
					signInError.value = 'Неверные данные';
				} else if (response.status === 404) {
					signInError.value = 'Такого пользователя нету';
				}
			},
			onResponse({ response }) {
				if (response.status === 200) {
					favorites.value = response._data.favorites;
					views.value = response._data.views;
					console.log(favorites.value, views.value);
					refreshSession();
					navigateTo(localePath(previousRoute.value as string));
				}
			},
		});
	}

	async function handleLogin() {
		signInError.value = '';
		isLoading.value = true;

		requestSignIn().finally(() => {
			isLoading.value = false;
		});
	}
</script>

<template>
	<q-card class="absolute-center q-py-lg shadower" style="width: 350px">
		<q-form @submit="handleLogin">
			<q-card-section>
				<div class="text-h6 text-center">
					<img src="~/assets/logo.svg" style="height: 36px" />
				</div>
				<div class="text-center text-caption text-grey-7">
					{{ $t('signInPage.useThisFormToSignIn') }}
				</div>
			</q-card-section>
			<q-card-section class="col q-gutter-y-md">
				<q-banner v-if="signInError !== ''" class="bg-red-1 text-red rounded-borders">
					{{ signInError }}
				</q-banner>
				<q-input
					v-model="credentials.email"
					:label="`${$t('email')} ${$t('or')} ${$t('phoneNumber').toLowerCase()}`"
					:rules="[required, isEmail]"
					lazy-rules
					hide-bottom-space>
					<template #prepend>
						<q-icon name="person" />
					</template>
				</q-input>
				<q-input
					v-model="credentials.password"
					:type="showPassword ? 'text' : 'password'"
					:label="$t('password')"
					hide-bottom-space
					:rules="[required]"
					lazy-rules>
					<template #prepend>
						<q-icon name="lock" />
					</template>
					<template #append>
						<q-icon
							:name="showPassword ? 'visibility' : 'visibility_off'"
							class="cursor-pointer"
							@click="showPassword = !showPassword" />
					</template>
				</q-input>
				<div class="row">
					<q-checkbox
						v-model="credentials.rememberMe"
						:label="$t('signInPage.rememberMe')" />
					<q-space />
					<NuxtLink to="/restorepassword" style="align-content: center">
						{{ $t('signInPage.forgotPassword') }}
					</NuxtLink>
				</div>
			</q-card-section>
			<q-card-section class="col q-gutter-y-md">
				<q-btn
					type="submit"
					:loading="isLoading"
					class="full-width"
					:label="$t('signIn')"
					icon="login"
					color="primary"
					@click="handleLogin" />
				<div class="text-center text-caption text-grey-7">
					{{ $t('signInPage.dontHaveAcc') }}
					<NuxtLink :to="$localePath('/user/signup')">
						{{ $t('signUp') }}
					</NuxtLink>
				</div>
			</q-card-section>
		</q-form>
	</q-card>
</template>
