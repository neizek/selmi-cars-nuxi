<script lang="ts" setup>
	import { useFetch } from 'nuxt/app';
	import type { QSelectOption } from 'quasar';
	import { ref } from 'vue';
	import type { CreateCar, Make } from '~/types/cars';

	const step = ref(1);

	definePageMeta({
		middleware: ['auth'],
	});

	const { data: makes, status } = await useFetch<Make[]>('/api/makes/many?includeModels=true', {
		method: 'GET',
	});

	const allMakes = makes.value
		? Object.values(makes.value).map((make) => {
				return {
					label: make.name,
					value: make.id,
				};
		  })
		: undefined;

	const allModels: Ref<QSelectOption[]> = ref([]);
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
		() => {
			const newMake = makes.value?.find((make) => make.id === createCar.value.makeId);

			if (newMake && newMake.models) {
				createCar.value.modelId = undefined;
				allModels.value = newMake.models.map((model) => {
					return {
						label: model.name,
						value: model.id,
					} as unknown as QSelectOption;
				});
			}
		}
	);

	async function handleCreateCar() {
		await useFetch('/api/cars/create', {
			method: 'POST',
			body: createCar.value,
			lazy: true,
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
	<PageWrap class="column items-center">
		<div class="q-gutter-y-md" style="width: 500px">
			<h3>Новое объявление</h3>
			<q-form @submit="handleCreateCar">
				<q-stepper v-model="step" flat vertical color="primary" animated class="q-pa-sm">
					<q-step :name="1" title="Модель и марка" icon="settings" :done="step > 1">
						<div class="q-gutter-y-md">
							<q-select
								v-model="createCar.makeId"
								:options="allMakes"
								:loading="status !== 'success'"
								:disable="status !== 'success'"
								label="Марка авто" />
							<q-select
								v-model="createCar.modelId"
								:options="allModels"
								:loading="status !== 'success'"
								:disable="status !== 'success'"
								label="Модель авто" />
						</div>
						<q-stepper-navigation>
							<q-btn
								color="primary"
								icon-right="keyboard_double_arrow_right"
								label="Continue"
								@click="step = 2" />
						</q-stepper-navigation>
					</q-step>
					<q-step :name="2" title="Медиафайлы" icon="settings" :done="step > 2">
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
						<q-stepper-navigation>
							<q-btn
								icon-right="keyboard_double_arrow_right"
								color="primary"
								label="Continue"
								@click="step = 3" />
						</q-stepper-navigation>
					</q-step>
					<q-step :name="3" title="Детальное описание" icon="settings" :done="step > 3">
						<div class="q-gutter-y-md">
							<q-input v-model="createCar.price" type="number" label="Цена" />
							<q-input v-model="createCar.year" type="number" label="Год" />
							<q-input v-model="createCar.mileage" type="number" label="Пробег" />
						</div>
						<q-stepper-navigation class="q-gutter-x-md">
							<q-btn type="submit" label="Добавить авто" />
						</q-stepper-navigation>
					</q-step>
				</q-stepper>
			</q-form>
		</div>
	</PageWrap>
</template>

<style lang="scss">
	.Stepper .q-stepper__step-inner {
		padding: 16px 0 0 0;
	}
</style>
