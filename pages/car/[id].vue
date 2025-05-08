<script setup lang="ts">
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
	const id = route.params.id;

	const contact: Ref<ContactCard | undefined> = ref(undefined);
	const parameters: Ref<Parameter> = ref({
		mileage: { icon: 'route', label: 'Пробег', value: '' },
		year: { icon: 'calendar_today', label: 'Год выпуска', value: '' },
		transmissionType: { icon: 'settings', label: 'Коробка', value: 'Автоматическая' },
		engine: { icon: 'rocket', label: 'Двигатель', value: '3.0 Бензин' },
		color: { icon: 'palette', label: 'Цвет', value: 'Серебристый' },
		vin: { icon: 'grading', label: 'VIN код', value: 'WBAFA*******', side: 'Показать' },
		registrationNumber: {
			icon: 'pin',
			label: 'Гос. номер',
			value: 'MZ-****',
			side: 'Показать',
		},
		inspectionDate: {
			icon: 'policy',
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
				};

				parameters.value.mileage.value = car.mileage;
				parameters.value.year.value = car.year;
			}
		},
	});
</script>

<template>
	<PageWrap>
		<div v-if="car" class="row q-col-gutter-x-md">
			<div class="col-8 q-gutter-y-md">
				<SingleCarGallery :images="car.carImages" />
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
				<q-card class="bg-transparent shadower">
					<q-card-actions align="right">
						<q-btn round color="grey-4" text-color="grey-8" icon="share" />
						<q-btn round color="grey-4" text-color="grey-8" icon="favorite" />
						<q-btn round color="grey-4" text-color="grey-8" icon="more_horiz" />
					</q-card-actions>
				</q-card>

				<SingleCarOwnerCard :contact="contact" />

				<q-card class="q-pa-sm">
					<q-item>
						<q-item-section>
							<q-item-label>
								<h3>{{ car.make.name }} {{ car.model.name }}</h3>
							</q-item-label>
						</q-item-section>
						<q-item-section side>
							<q-item-label>
								<h3 class="text-primary">{{ toPriceFormat(car.price) }}</h3>
							</q-item-label>
						</q-item-section>
					</q-item>
					<q-separator inset />
					<q-list>
						<q-item
							v-for="parameter in Object.values(parameters)"
							:key="parameter.value">
							<q-item-section avatar>
								<q-icon :name="parameter.icon" />
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
							<q-chip icon="verified_user" label="Безопасность" />
							<q-chip icon="ac_unit" label="Комфорт" />
							<q-chip icon="chair" label="Салон" />
							<q-chip icon="volume_up" label="Мультимедия" />
						</div>
					</q-item>
				</q-card>
			</div>
		</div>
		<div v-else>
			<span>Loading</span>
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
