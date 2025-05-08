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
				<q-card v-if="user">
					<q-item>
						<q-item-section avatar>
							<q-avatar>
								<q-icon name="account_circle" size="48px" class="text-grey-7" />
							</q-avatar>
						</q-item-section>

						<q-item-section>
							<q-item-label>{{ user.firstname }} {{ user.lastname }}</q-item-label>
							<q-item-label caption>Частное лицо</q-item-label>
						</q-item-section>

						<q-item-section side>
							<q-item-label>Редактировать</q-item-label>
						</q-item-section>
					</q-item>
				</q-card>
				<q-card>
					<q-item>
						<q-item-section>
							<q-item-label>Моя кампания</q-item-label>
						</q-item-section>
					</q-item>
				</q-card>
			</div>
			<div class="col-6">
				<q-card v-if="user">
					<q-item>
						<q-item-section>
							<q-item-label>
								<h2>Мои отзывы</h2>
							</q-item-label>
						</q-item-section>
					</q-item>
					<q-item>
						<q-item-section>
							<q-item-label>У вас пока нет отзывов</q-item-label>
						</q-item-section>
					</q-item>
				</q-card>
			</div>
		</div>
	</PageWrap>
</template>
