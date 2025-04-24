<script lang="ts" setup>
	import type { NuxtError } from '#app';
	import ErrorSvg from '~/assets/illustrations/errors/error.svg';

	defineProps({
		error: {
			type: Object as () => NuxtError,
			default: () => ({ statusCode: 500, message: 'Unknown error' }),
		},
	});

	const handleError = () => clearError({ redirect: '/' });
</script>
<template>
	<div>
		<NuxtLayout>
			<div class="absolute-center text-center column q-gutter-y-md">
				<q-img fit="contain" :src="ErrorSvg" width="400px" height="400px" />
				<h1>Ошибка {{ error?.statusCode }}</h1>
				<span>{{ error?.message }}</span>
				<q-btn flat label="Вернуться на главную" @click="handleError" />
			</div>
		</NuxtLayout>
	</div>
</template>
