<script setup lang="ts">
	const route = useRoute();
	const id = route.params.id;

	const { data: car } = useFetch(`/api/cars/single?id=${id}`, {
		method: 'GET',
		lazy: true,
	});
</script>

<template>
	<PageWrap>
		<div v-if="car" class="row q-col-gutter-x-md">
			<div class="col-8">
				<SingleCarGallery :images="car.carImages" />
				<!-- <div class="column">
					<span class="text-h4">{{ toPriceFormat(car.price) }}</span>
					<span class="text-h4">{{ car.make.name }} {{ car.model.name }}</span>
				</div> -->
			</div>
			<div class="col-4 q-gutter-y-md">
				<q-card flat class="bg-transparent shadower">
					<q-card-actions align="right">
						<q-btn round color="grey-4" text-color="grey-8" icon="share" />
						<q-btn round color="grey-4" text-color="grey-8" icon="favorite" />
						<q-btn round color="grey-4" text-color="grey-8" icon="more_horiz" />
					</q-card-actions>
				</q-card>

				<q-card flat class="q-pa-sm">
					<q-item>
						<q-item-section avatar>
							<q-avatar>
								<q-icon name="account_circle" size="48px" class="text-grey-7" />
							</q-avatar>
						</q-item-section>

						<q-item-section>
							<q-item-label>
								{{ car.user.firstname }} {{ car.user.lastname }}
							</q-item-label>
							<q-item-label caption>Частное лицо</q-item-label>
						</q-item-section>
						<q-item-section side top>
							<q-item-label caption>10 отзывов</q-item-label>
							<div class="text-orange">
								<q-icon name="star" />
								<q-icon name="star" />
								<q-icon name="star" />
							</div>
						</q-item-section>
					</q-item>
					<q-card-actions class="full-width">
						<q-btn icon="message" color="secondary" label="Написать" style="flex: 1" />
						<q-btn icon="call" color="primary" label="Позвонить" />
					</q-card-actions>
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
