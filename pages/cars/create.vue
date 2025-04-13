<script lang="ts" setup>
	import { useFetch } from 'nuxt/app';
	import { ref, type Reactive } from 'vue';
	import type { Car, CreateCar, Make, Model } from '~/types/cars';

	definePageMeta({
		middleware: ['auth'],
	})

	const { data: makes } = await useFetch<Make[]>('/api/cars/make', {
		method: 'GET'
	});

	async function getModels(makeId: number) {
		const { data: models } = await useFetch<Model[]>('/api/cars/models', {
			method: 'POST',
			body: {
				makeId: makeId
			}
		});

		if (models.value) {
			
			allModels.value = Object.values(models.value).map(model => ({
				label: model.name,
				value: model.id
			}))
		}
	}


	const allMakes = makes.value ? Object.values(makes.value).map(make => {
		return {
			label: make.name,
			value: make.id
		};
	}) : undefined;

	const allModels: Ref<any[] | undefined> = ref(undefined)

	const createCar: Ref<CreateCar> = ref({
		makeId: undefined,
		modelId: undefined,
		price: undefined,
		year: undefined,
		mileage: undefined
	})

	watch(() => createCar.value.makeId, (newMakeId) => {
		if(newMakeId) getModels(newMakeId)
	})

	async function handleCreateCar() {
		const { data } = await useFetch('/api/cars/create', {
			method: 'POST',
			body: createCar.value
		})
	}
</script>

<template>
	<h3>Новое объявление</h3>
	<q-card class="absolute-center q-pa-md" style="width: 350px;">
		<q-form @submit="handleCreateCar">
			<q-card-section>
				<q-select
					v-model="createCar.makeId"
					:options="allMakes"
					label="Марка авто"
				/>
				<q-select
					v-model="createCar.modelId"
					:options="allModels"
					label="Модель авто"
				/>
				<q-input
					type="number"
					v-model="createCar.price"
					label="Цена"
				/>
				<q-input
					type="number"
					v-model="createCar.year"
					label="Год"
				/>
				<q-input
					type="number"
					v-model="createCar.mileage"
					label="Пробег"
				/>
			</q-card-section>
			<q-card-actions>
				<q-btn type="submit" label="Добавить авто" />
			</q-card-actions>
		</q-form>
	</q-card>
</template>