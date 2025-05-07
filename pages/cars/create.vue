<script lang="ts" setup>
	import { useFetch } from 'nuxt/app';
	import { ref } from 'vue';
	import type { Car, CreateCar, Make, Model } from '~/types/cars';

	const step = ref(1);

	definePageMeta({
		middleware: ['auth'],
	});

	const { data: makes } = await useFetch<Make[]>('/api/cars/make', {
		method: 'GET',
	});

	const isLoadingModels = ref(false);

	async function getModels(makeId: number) {
		isLoadingModels.value = true;
		const { data: models } = await useFetch<Model[]>('/api/cars/models', {
			method: 'POST',
			body: {
				makeId: makeId,
			},
			onResponse: () => {
				isLoadingModels.value = false;
			},
		});

		if (models.value) {
			allModels.value = Object.values(models.value).map((model) => ({
				label: model.name,
				value: model.id,
			})) as unknown as Car[];
		}
	}

	const allMakes = makes.value
		? Object.values(makes.value).map((make) => {
				return {
					label: make.name,
					value: make.id,
				};
		  })
		: undefined;

	const allModels: Ref<Car[] | undefined> = ref(undefined);
	const { user } = useUserSession();

	const createCar: Ref<CreateCar> = ref({
		makeId: undefined,
		modelId: undefined,
		price: undefined,
		year: undefined,
		mileage: undefined,
		userId: user.value?.id,
		carImages: [],
	});

	watch(
		() => createCar.value.makeId,
		(newMakeId) => {
			if (newMakeId) getModels(newMakeId);
		}
	);

	async function handleCreateCar() {
		console.log(createCar.value);
		await useFetch('/api/cars/create', {
			method: 'POST',
			body: createCar.value,
		});
	}

	function onUploaded(data: { xhr: { response: string } }) {
		const response = JSON.parse(data.xhr.response);
		const imageSetId = response.body.files;

		if (imageSetId !== undefined) {
			if (createCar.value.carImages === undefined) {
				createCar.value.carImages = [imageSetId];
			} else {
				createCar.value.carImages = [...createCar.value.carImages, imageSetId];
			}
		}
	}
</script>

<template>
	<PageWrap>
		<h3>Новое объявление</h3>

		<q-form @submit="handleCreateCar">
			<q-stepper v-model="step" vertical color="primary" animated>
				<q-step :name="1" title="Select campaign settings" icon="settings" :done="step > 1">
					<q-uploader
						v-model="createCar.carImages"
						label="Добавить фото"
						url="/api/files/create"
						auto-upload
						style="max-width: 100%"
						color="grey-10"
						class="no-shadow"
						multiple
						@uploaded="onUploaded" />
				</q-step>
				<q-stepper-navigation>
					<q-btn color="primary" label="Continue" @click="step = 2" />
				</q-stepper-navigation>
				<q-step :name="2" title="Select campaign settings" icon="settings" :done="step > 1">
					<q-select v-model="createCar.makeId" :options="allMakes" label="Марка авто" />
					<q-select
						v-model="createCar.modelId"
						:options="allModels"
						:loading="isLoadingModels"
						:disable="isLoadingModels"
						label="Модель авто" />
					<q-input v-model="createCar.price" type="number" label="Цена" />
					<q-input v-model="createCar.year" type="number" label="Год" />
					<q-input v-model="createCar.mileage" type="number" label="Пробег" />
					<q-stepper-navigation>
						<q-btn color="primary" label="Continue" @click="step = 2" />
						<q-btn type="submit" label="Добавить авто" />
					</q-stepper-navigation>
				</q-step>
			</q-stepper>
		</q-form>
	</PageWrap>
</template>
