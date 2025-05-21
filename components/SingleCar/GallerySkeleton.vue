<template>
	<div ref="imageBlock" class="ImageGallery">
		<q-skeleton style="width: 100%; height: 100%; object-fit: cover; flex: none" />
	</div>
	<div class="Preview">
		<q-skeleton
			v-for="skeleton in Array(5)"
			:key="skeleton"
			style="width: 100%; height: 100%; object-fit: cover; flex: none" />
	</div>
</template>
