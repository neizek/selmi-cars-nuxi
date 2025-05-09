<script setup lang="ts">
	import type { ImageSet } from '~/types/files';

	const props = defineProps<{
		images: ImageSet[];
	}>();

	const imageBlock = ref(null);
	const imagesCount = props.images.length;
	const activeImageIndex = ref(0);
	const showNavigation = ref(false);

	function onMouseOver() {
		showNavigation.value = true;
	}

	function onMouseMove(event: MouseEvent) {
		const element = imageBlock.value as unknown as HTMLElement;
		const rect = element.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const percent = (x / rect.width) * 100;
		const oneImageInPercents = 100 / imagesCount;

		if (element && percent) {
			activeImageIndex.value = Math.floor(percent / oneImageInPercents);

			element.scrollTo({
				left: activeImageIndex.value * element.clientWidth,
				behavior: 'smooth',
			});
		}
	}

	function onMouseOut() {
		showNavigation.value = false;
		const element = imageBlock.value as unknown as HTMLElement;
		activeImageIndex.value = 0;
		if (element) {
			element.scrollTo({
				left: 0,
				behavior: 'smooth',
			});
		}
	}
</script>

<template>
	<div class="relative-position overflow-hidden">
		<div
			ref="imageBlock"
			class="ImageBlock hide-scrollbar"
			@mouseover="onMouseOver"
			@mousemove="onMouseMove"
			@mouseout="onMouseOut">
			<NuxtImg
				v-for="(imageSet, index) in images"
				:key="index"
				:srcset="`${imageSet.s240} 240w, ${imageSet.s480} 480w, ${imageSet.s720} 720w, ${imageSet.s1080} 1080w`"
				sizes="(max-width: 600px) 50vw, (max-width: 1024px) 33vw, 280px"
				style="width: 100%; height: 100%; object-fit: cover; flex: none" />
		</div>
		<div v-if="showNavigation && imagesCount > 1" class="Navigation">
			<div
				v-for="(image, index) in imagesCount"
				:key="image"
				class="Navigation-chip"
				:class="{ active: activeImageIndex === index }" />
		</div>
	</div>
</template>

<style lang="scss">
	.ImageBlock {
		display: flex;
		flex-direction: row;
		aspect-ratio: 4 / 3;
		overflow: hidden;
		overflow-x: scroll;
	}

	.Navigation {
		display: flex;
		gap: 8px;
		padding: 0 8px;
		position: absolute;
		bottom: 8px;
		width: 100%;
		justify-content: center;

		&-chip {
			flex: 1;
			height: 4px;
			background-color: rgba(255, 255, 255, 0.2);
			border-radius: 5px;

			&.active {
				background-color: rgba(255, 255, 255, 0.5);
			}
		}
	}
</style>
