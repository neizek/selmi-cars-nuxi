<script setup lang="ts">
	import type { ImageSet } from '~/types/files';

	defineProps<{ images: ImageSet[] }>();

	const imageBlock = ref(null);
	const activeImageIndex = ref(0);

	function handleClick(index: number) {
		activeImageIndex.value = index;
		const element = imageBlock.value as unknown as HTMLElement;
		// const rect = element.getBoundingClientRect();
		element.scrollTo({
			left: activeImageIndex.value * element.clientWidth,
			behavior: 'smooth',
		});
	}
</script>
<template>
	<div ref="imageBlock" class="ImageGallery">
		<NuxtImg
			v-for="(imageSet, index) in images"
			:key="index"
			:srcset="`${imageSet.s240} 240w, ${imageSet.s480} 480w, ${imageSet.s720} 720w, ${imageSet.s1080} 1080w`"
			sizes="(max-width: 600px) 100vw, 50vw"
			style="width: 100%; height: 100%; object-fit: cover; flex: none" />
	</div>
	<div class="Preview">
		<NuxtImg
			v-for="(imageSet, index) in images"
			:key="index"
			:srcset="`${imageSet.s240} 240w, ${imageSet.s480} 480w, ${imageSet.s720} 720w, ${imageSet.s1080} 1080w`"
			sizes="240px"
			@click="
				{
					handleClick(index);
				}
			" />
	</div>
</template>

<style lang="scss">
	.ImageGallery {
		display: flex;
		width: 100%;
		aspect-ratio: 3/2;
		overflow-y: hidden;
		overflow-x: scroll;
		border-radius: 8px;
	}
	.Preview {
		margin-top: 8px;
		display: flex;
		flex-direction: row;
		gap: 8px;
		height: 100px;

		> img {
			border-radius: 8px;
		}
	}
</style>
