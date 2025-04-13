<script setup lang="ts">
	import type { UserSignUpPayload } from '~/types/users';
	import { required, isEmail } from '~/utils/forms/validators';

	const user: Ref<UserSignUpPayload> = ref({
		email: '',
		firstName: '',
		lastName: '',
		password: '',
		repeatPassword: ''
	});

	const isLoading: Ref<boolean> = ref(false);

	async function requestSignUp() {
		await useFetch('/api/users/create', {
			method: 'POST',
			body: user.value,
			onResponseError({ response }) {
				console.log(response)
			},
			onResponse({ response }) {
				console.log(response)
			}
		});
	}

	function handleSignUp() {
		isLoading.value = true;

		requestSignUp()
		.finally(() => {
			isLoading.value = false;
		});
	}
</script>

<template>
	<q-card class="absolute-center q-pa-md" style="width: 350px;">
		<q-form @submit="handleSignUp">
			<q-card-section>
				<q-input
					v-model="user.email"
					:label="$t('email')"
					:rules="[required, isEmail]"
				>
					<template v-slot:prepend>
						<q-icon name="mail" />
					</template>
				</q-input>
				<q-input v-model="user.firstName" :label="$t('firstName')" :rules="[required]">
					<template v-slot:prepend>
						<q-icon name="person" />
					</template>
				</q-input>
				<q-input v-model="user.lastName" :label="$t('lastName')" :rules="[required]">
					<template v-slot:prepend>
						<q-icon name="person" />
					</template>
				</q-input>
				<q-input v-model="user.password" :label="$t('password')" :rules="[required]">
					<template v-slot:prepend>
						<q-icon name="lock" />
					</template>
				</q-input>
				<q-input v-model="user.repeatPassword" :label="$t('repeatPassword')" :rules="[required]">
					<template v-slot:prepend>
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