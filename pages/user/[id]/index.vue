<script lang="ts" setup>
	import type { SingleUser } from '~/types/users';

	definePageMeta({
		middleware: ['auth', 'is-correct-user'],
	});

	const route = useRoute();

	const { data: user } = await useFetch<SingleUser>(`/api/users/single?id=${route.params.id}`, {
		method: 'GET',
		lazy: true,
	});
</script>

<template>
	<PageWrap>
		<h1>Мой профиль</h1>
		<div class="row q-col-gutter-x-md">
			<div class="col-6 q-gutter-y-md">
				<MyProfileGeneral :user="user" />
				<MyProfileEntity />
			</div>
			<div v-if="user" class="col-6">
				<MyProfileReviews :user-id="user?.id" />
			</div>
		</div>
	</PageWrap>
</template>
