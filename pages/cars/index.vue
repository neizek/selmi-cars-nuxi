<script setup lang="ts">
	import CarCardsSection from '~/components/CarCardsSection.vue';

	const sortOptions = [
		{label: 'Сначала дорогие', value: {price: 'desc'}},
		{label: 'Сначала дешёвые', value: {price: 'asc'}}
	];

	const filters = ref({
		orderBy: sortOptions[0].value,
		where: undefined
	})

	const {data: cars, status} = await useFetch('/api/cars', {
		method: 'POST',
		body: computed(() => (filters.value)),
		watch: [filters],
		lazy: true
	});

	const { data: makes } = useFetch('/api/cars/make', {
		method: 'get',
		lazy: true
	})
</script>

<template>
	<PageWrap>
		<CarCardsSection :cars="cars" :is-loading="status !== 'success'" :expected-cars="20">
			<template #header>
				<div class="row">
					<span class="text-h4">Каталог</span>
					<q-space/>
					<div class="row">
						<q-select 
							v-model="filters.orderBy" 
							:options="sortOptions"
						/>
						<q-select 
							v-model="filters.where" 
							:options="makes?.map(make => {
								return {
									value: {makeId: make.id},
									label: make.name
								}
							})"
						/>
					</div>
				</div>
			</template>
		</CarCardsSection>
	</PageWrap>
</template>