<script lang="ts" setup>
	import { useFetch } from 'nuxt/app';
	import { ref } from 'vue';
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

	const allModels: Ref<Car[] | undefined> = ref(undefined)

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
		await useFetch('/api/cars/create', {
			method: 'POST',
			body: createCar.value
		})
	}
</script>

<template>
	<PageWrap>
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
						v-model="createCar.price"
						type="number"
						label="Цена"
					/>
					<q-input
						v-model="createCar.year"
						type="number"
						label="Год"
					/>
					<q-input
						v-model="createCar.mileage"
						type="number"
						label="Пробег"
					/>
				</q-card-section>
				<q-card-actions>
					<q-btn type="submit" label="Добавить авто" />
				</q-card-actions>
			</q-form>
		</q-card>
	</PageWrap>
</template>