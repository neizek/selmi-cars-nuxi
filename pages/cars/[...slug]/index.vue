<script setup lang="ts">
	import type { QSelectOption } from 'quasar';
	import CarCardsSection from '~/components/CarCardsSection.vue';
	import type { Car } from '~/types/cars';
	import type { Filter } from '~/types/filters';

	const sortOptions: QSelectOption<{ [prop: string]: 'desc' | 'asc' }>[] = [
		{ label: 'Сначала дорогие', value: { price: 'desc' } },
		{ label: 'Сначала дешёвые', value: { price: 'asc' } },
	];

	const route = useRoute();
	const slug = route.params.slug as string[];
	const [make = 'all', model = 'all'] = slug || ['all', 'all'];

	const filters: Ref<Filter<Car>> = ref({
		orderBy: sortOptions[0].value,
		where: {
			...(make !== 'all' && {
				make: {
					slug: make,
				},
			}),
			...(model !== 'all' && {
				model: {
					slug: model,
				},
			}),
		},
	});

	const { data: cars, status } = await useFetch('/api/cars/many', {
		method: 'POST',
		body: computed(() => filters.value),
		watch: [filters],
		lazy: true,
	});

	watch(filters, () => {
		console.log(filters);
	});

	const areFiltersOpen: Ref<boolean> = ref(false);
</script>

<template>
	<PageWrap>
		<CarCardsSection :cars="cars || []" :is-loading="status !== 'success'" :expected-cars="20">
			<template #header>
				<div class="row flex-center">
					<div class="column">
						<h2 class="q-ma-none">Каталог</h2>
						<q-breadcrumbs>
							<q-breadcrumbs-el label="Каталог" />
							<q-breadcrumbs-el v-if="make !== 'all'" :label="make" />
							<q-breadcrumbs-el v-if="model !== 'all'" :label="model" />
						</q-breadcrumbs>
					</div>
					<q-space />
					<div class="row q-gutter-x-sm">
						<q-select v-model="filters.orderBy" dense :options="sortOptions" />
						<q-btn
							flat
							icon="tune"
							style="height: 40px"
							@click="areFiltersOpen = !areFiltersOpen" />
					</div>
				</div>
			</template>
		</CarCardsSection>
		<q-dialog v-model="areFiltersOpen" :position="$q.screen.gt.xs ? 'right' : 'bottom'">
			<FilterDrawer :filters="filters" @update-value="filters = $event" />
		</q-dialog>
	</PageWrap>
</template>
