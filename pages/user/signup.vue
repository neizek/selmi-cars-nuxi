<script setup lang="ts">
	import type { UserSignUpPayload } from '~/types/users';
	import { required, isEmail } from '~/utils/forms/validators';

	const $q = useQuasar();
	const localePath = useLocalePath();

	const user: Ref<UserSignUpPayload> = ref({
		email: '',
		firstname: '',
		lastname: '',
		password: '',
		repeatPassword: '',
	});

	const isLoading: Ref<boolean> = ref(false);

	async function requestSignUp() {
		await useFetch('/api/users/create', {
			method: 'POST',
			body: user.value,
			onResponseError({ response }) {
				$q.notify({
					type: 'negative',
					message: 'Произошла ошибка, попробуйте ещё раз.',
				});
				console.log(response);
			},
			onResponse({ response }) {
				if (response._data.statusCode !== 400) {
					$q.notify({
						type: 'positive',
						message: 'Поздравляем с успешной регистрацией!',
					});
					navigateTo(localePath('/user/signin'));
					console.log(response);
				}
			},
		});
	}

	function handleSignUp() {
		isLoading.value = true;

		requestSignUp().finally(() => {
			isLoading.value = false;
		});
	}
</script>

<template>
	<q-card class="absolute-center q-pa-md" style="width: 350px">
		<q-form @submit="handleSignUp">
			<q-card-section class="q-gutter-y-sm">
				<q-input v-model="user.email" :label="$t('email')" :rules="[required, isEmail]">
					<template #prepend>
						<q-icon name="mail" />
					</template>
				</q-input>
				<q-input v-model="user.firstname" :label="$t('firstName')" :rules="[required]">
					<template #prepend>
						<q-icon name="person" />
					</template>
				</q-input>
				<q-input v-model="user.lastname" :label="$t('lastName')" :rules="[required]">
					<template #prepend>
						<q-icon name="person" />
					</template>
				</q-input>
				<q-input v-model="user.password" :label="$t('password')" :rules="[required]">
					<template #prepend>
						<q-icon name="lock" />
					</template>
				</q-input>
				<q-input
					v-model="user.repeatPassword"
					:label="$t('repeatPassword')"
					:rules="[required]">
					<template #prepend>
						<q-icon name="lock" />
					</template>
				</q-input>
			</q-card-section>
			<q-card-actions>
				<q-btn type="submit" :label="$t('signUp')" :loading="isLoading" />
			</q-card-actions>
		</q-form>
	</q-card>
</template>
