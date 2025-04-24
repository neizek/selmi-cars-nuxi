<script lang="ts" setup>
	definePageMeta({
		middleware: ['auth', 'is-correct-user'],
	});

	const route = useRoute();

	const { data: user } = await useFetch('/api/users/first', {
		method: 'GET',
		body: {
			userId: route.params.id,
		},
		lazy: true,
	});
</script>

<template>
	<PageWrap>
		<h4>Мой профиль</h4>
		<q-card v-if="user">
			<q-item>
				<q-item-label>
					{{ user.firstname }}
				</q-item-label>
			</q-item>
		</q-card>
	</PageWrap>
</template>
