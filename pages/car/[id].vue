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
			<div class="ImageGallery col-6">
				<NuxtImg
					v-for="(imageSet, index) in car.carImages"
					:key="index"
					:srcset="`${imageSet.s240} 240w, ${imageSet.s480} 480w, ${imageSet.s720} 720w, ${imageSet.s1080} 1080w`"
					sizes="(max-width: 600px) 100vw, 50vw"
					style="width: 100%; height: 100%; object-fit: cover; flex: none" />
			</div>
			<div class="col-6">
				<h2>{{ car.make.name }} {{ car.model.name }}</h2>
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
