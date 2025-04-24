<script setup lang="ts">
	import type { QSelectOption } from 'quasar';
	import type { Car } from '~/types/cars';
	import type { Filter } from '~/types/filters';

	const { filters } = defineProps<{ filters: Filter<Car> }>();

	const chosenMake = ref(undefined);
	const chosenModel = ref(undefined);

	const options: Ref<{ makes: QSelectOption[]; models: QSelectOption[] }> = ref({
		makes: [],
		models: [],
	});

	const { data: makes, status } = useFetch('/api/cars/make', {
		method: 'get',
		lazy: true,
		onResponse: () => {
			chosenMake.value = filters.where?.makeId ?? undefined;
			chosenModel.value = filters.where?.modelId ?? undefined;
		},
	});

	watch(makes, () => {
		options.value.makes = (makes.value ?? []).map((make) => ({
			label: make.name,
			value: String(make.id),
		}));
	});

	watch(chosenMake, () => {
		if (!makes || !makes.value) {
			return;
		}
		const chosenMakeObject = makes.value.find((make) => make.id === Number(chosenMake.value));

		if (chosenMakeObject && chosenMakeObject.models) {
			options.value.models = chosenMakeObject.models.map((model) => ({
				value: String(model.id),
				label: model.name,
			}));
		}
	});

	const emit = defineEmits(['updateValue']);

	function acceptFilters() {
		emit('updateValue', {
			orderBy: {
				price: 'asc',
			},
			where: {
				makeId: Number(chosenMake.value),
				modelId: Number(chosenModel.value),
			},
		});
	}
	console.log(filters);
</script>

<template>
	<q-card style="width: 350px; max-height: 100vh">
		<q-card-section class="column q-gutter-y-md">
			<q-select
				v-model="chosenMake"
				label="Производитель"
				:options="options.makes"
				:loading="status !== 'success'" />
			<q-select
				v-model="chosenModel"
				label="Модель"
				:options="options.models"
				:loading="status !== 'success'" />
		</q-card-section>
		<q-card-actions vertical class="q-pa-md">
			<q-btn label="Филтровать" @click="acceptFilters" />
		</q-card-actions>
	</q-card>
</template>
