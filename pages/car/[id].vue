<script setup lang="ts">
	import { PageWrap, SingleCarControls } from '#components';
	import { views } from '~/lib/stores/views';
	import type { Car, CarParameter } from '~/types/cars';

	const route = useRoute();
	const { user } = useUserSession();
	const id = route.params.id;

	const parameters: Ref<CarParameter> = ref({
		bodyStyle: { icon: 'fas fa-car-side', label: 'Тип кузова', value: '' },
		mileage: { icon: 'fas fa-route', label: 'Пробег', value: '' },
		year: { icon: 'fas fa-calendar', label: 'Год выпуска', value: '' },
		transmissionType: { icon: 'fas fa-gears', label: 'Коробка', value: '' },
		engine: { icon: 'fas fa-rocket', label: 'Двигатель', value: '' },
		color: { icon: 'fas fa-palette', label: 'Цвет', value: 'Серебристый' },
		vin: { icon: 'fas fa-barcode', label: 'VIN код', value: 'WBAFA*******', side: 'Показать' },
		registrationNumber: {
			icon: 'fas fa-hashtag',
			label: 'Гос. номер',
			value: 'MZ-****',
			side: 'Показать',
		},
		inspectionDate: {
			icon: 'fas fa-certificate',
			label: 'Тех. осмотр',
			value: '02 Февраля 2025',
		},
	});

	const { data: car } = useFetch<Car>(`/api/cars/single?id=${id}`, {
		method: 'GET',
		lazy: true,
		onResponse: ({ response }) => {
			const car = response._data;

			if (car) {
				// contact.value = {
				// 	name: `${car.user.firstname} ${car.user.lastname}`,
				// 	isEntity: false,
				// 	rate: 3,
				// };

				parameters.value.bodyStyle.value = car.bodyStyle;
				parameters.value.mileage.value = car.mileage;
				parameters.value.year.value = car.year;
				parameters.value.transmissionType.value = car.transmissionType;
				parameters.value.engine.value = `${car.engineVolume} / ${car.fuelType}`;
			}
		},
	});

	onMounted(() => {
		if (user && !views.value.includes(Number(id))) {
			$fetch('/api/views/create', {
				method: 'POST',
				body: {
					userId: user.value?.id,
					carId: id,
				},
			}).then(() => {
				views.value.push(Number(id));
			});
		}
	});
</script>

<template>
	<PageWrap>
		<div class="row q-col-gutter-x-md">
			<div class="col-8 q-gutter-y-md">
				<SingleCarGallery v-if="car" :images="car.carImages" />
				<SingleCarGallerySkeleton v-else />
				<SingleCarDescription />
			</div>
			<div class="col-4 q-gutter-y-md">
				<SingleCarControls :id="Number(id)" />
				<SingleCarOwnerCard :user="car?.user" />
				<SingleCarTitle :car="car" />
				<SingleCarParameters :parameters="parameters" />
				<SingleCarEquipment />

				<SingleCarOtherInfo />
			</div>
		</div>
	</PageWrap>
</template>

<style lang="css">
	.ImageGallery {
		width: 100%;
		aspect-ratio: 3/2;
		overflow: hidden;
		border-radius: 8px;
	}
</style>
