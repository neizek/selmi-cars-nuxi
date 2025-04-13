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

	const {data: cars} = await useFetch('/api/cars', {
		method: 'POST',
		body: computed(() => (filters.value)),
		watch: [filters]
	});

	const { data: makes } = useFetch('/api/cars/make', {
		method: 'get'
	})
</script>

<template>
	<CarCardsSection :cars="cars">
		<template #header>
			<div class="row">
				<span class="text-h4">Каталог</span>
				<q-space></q-space>
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
	<q-drawer></q-drawer>
</template>