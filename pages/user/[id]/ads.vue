<script setup lang="ts">
const { user } = useUserSession();
const { data: cars, status } = await useFetch("/api/cars", {
	method: "POST",
	body: computed(() => ({
		where: {
			userId: user.value?.id,
		},
	})),
	lazy: true,
});
</script>

<template>
	<PageWrap>
		<CarCardsSection
			:cars="cars || []"
			:is-loading="status !== 'success'"
			:expected-cars="4"
		>
			<template #header> <h2>Мои объявления</h2></template>
		</CarCardsSection>
	</PageWrap>
</template>
