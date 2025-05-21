<script setup lang="ts">
	import { PageWrap, SingleCarControls } from '#components';
	import { views } from '~/lib/stores/views';
	import type { ContactCard } from '~/types/cars';

	interface Parameter {
		[prop: string]: {
			icon: string;
			label: string;
			value: string;
			side?: string;
		};
	}

	const route = useRoute();
	const { user } = useUserSession();
	const id = route.params.id;

	const contact: Ref<ContactCard | undefined> = ref(undefined);
	const parameters: Ref<Parameter> = ref({
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

	const { data: car } = useFetch(`/api/cars/single?id=${id}`, {
		method: 'GET',
		lazy: true,
		onResponse: ({ response }) => {
			const car = response._data;

			if (car) {
				contact.value = {
					name: `${car.user.firstname} ${car.user.lastname}`,
					isEntity: false,
					rate: 3,
				};

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
				<q-card class="q-pa-sm">
					<q-item>
						<q-item-section>
							<q-item-label>
								<h3>Комментарий от продавца</h3>
							</q-item-label>
						</q-item-section>
					</q-item>
					<q-item>
						<q-item-section>
							<p>
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
								ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
								aliquip ex ea commodo consequat. Duis aute irure dolor in
								reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
								pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
								culpa qui officia deserunt mollit anim id est laborum."
							</p>
						</q-item-section>
					</q-item>
				</q-card>
			</div>
			<div class="col-4 q-gutter-y-md">
				<SingleCarControls :id="Number(id)" />

				<SingleCarOwnerCard :contact="contact" />

				<q-card class="q-pa-sm">
					<q-item>
						<q-item-section>
							<q-item-label v-if="car">
								<h3>{{ car.make.name }} {{ car.model.name }}</h3>
							</q-item-label>
							<q-item-label v-else>
								<q-skeleton type="text" class="text-h3" />
							</q-item-label>
						</q-item-section>
						<q-item-section side>
							<q-item-label v-if="car">
								<h3 class="text-primary">{{ toPriceFormat(car.price) }}</h3>
							</q-item-label>
							<q-item-label v-else>
								<q-skeleton type="text" class="text-h3" style="width: 100px" />
							</q-item-label>
						</q-item-section>
					</q-item>
					<q-separator inset />
					<q-list>
						<q-item
							v-for="parameter in Object.values(parameters)"
							:key="parameter.value">
							<q-item-section avatar>
								<q-icon :name="parameter.icon" class="self-center text-grey-8" />
							</q-item-section>
							<q-item-section>
								<q-item-label caption>{{ parameter.label }}</q-item-label>
								<q-item-label v-if="parameter.value">
									{{ parameter.value }}
								</q-item-label>
								<q-item-label v-else><q-skeleton type="text" /></q-item-label>
							</q-item-section>
							<q-item-section v-if="parameter.side" side>
								<q-item-label>{{ parameter.side }}</q-item-label>
							</q-item-section>
						</q-item>
					</q-list>
				</q-card>

				<q-card class="q-pa-sm">
					<q-item>
						<q-item-section>
							<q-item-label>
								<h4>Комплектация</h4>
							</q-item-label>
						</q-item-section>
					</q-item>
					<q-item>
						<div>
							<q-chip icon="fas fa-shield-halved" label="Безопасность" />
							<q-chip icon="fas fa-fan" label="Комфорт" />
							<q-chip icon="fas fa-couch" label="Салон" />
							<q-chip icon="fas fa-music" label="Мультимедия" />
						</div>
					</q-item>
				</q-card>

				<q-card class="bg-transparent">
					<q-item class="justify-evenly">
						<q-chip color="transparent" icon="fas fa-eye" label="24" disable />
						<q-chip
							color="transparent"
							icon="fas fa-calendar"
							label="24.05.2024"
							disable />
					</q-item>
				</q-card>
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
