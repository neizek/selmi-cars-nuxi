<script setup lang="ts">
	import type { QSelectOption } from 'quasar';
	import type { Car, Make } from '~/types/cars';
	import type { Filter } from '~/types/filters';

	const { filters } = defineProps<{ filters: Filter<Car> }>();

	const chosenMake: Ref<string | undefined> = ref(undefined);
	const chosenModel: Ref<string | undefined> = ref(undefined);

	const options: Ref<{ makes: QSelectOption[]; models: QSelectOption[] }> = ref({
		makes: [],
		models: [],
	});

	const { data: makes, status } = useFetch<Make[]>('/api/cars/make', {
		method: 'get',
		lazy: true,
		onResponse: () => {
			chosenMake.value = filters.where?.make?.slug ?? undefined;
			chosenModel.value = filters.where?.model?.slug ?? undefined;
		},
	});

	watch(makes, () => {
		options.value.makes = (makes.value ?? []).map((make) => ({
			label: make.name,
			value: make.slug,
		}));
	});

	watch(chosenMake, () => {
		chosenModel.value = undefined;

		if (!makes || !makes.value) {
			return;
		}
		const chosenMakeObject = makes.value.find((make) => make.slug === chosenMake.value);

		if (chosenMakeObject && chosenMakeObject.models) {
			options.value.models = chosenMakeObject.models.map((model) => ({
				label: model.name,
				value: model.slug,
			}));
		}
	});

	const emit = defineEmits(['updateValue']);

	function acceptFilters() {
		emit('updateValue', {
			orderBy: filters.orderBy,
			where: {
				make: { slug: chosenMake.value },
				model: { slug: chosenModel.value },
			},
		});
	}
	// console.log(filters);
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
		<q-separator inset />
		<q-card-actions vertical class="q-pa-md">
			<q-btn label="Филтровать" @click="acceptFilters" />
		</q-card-actions>
	</q-card>
</template>
