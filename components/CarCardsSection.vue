<script setup lang="ts">
	defineProps(['cars'])
</script>

<template>
	<div class="q-col-gutter-lg">
		<slot name="header"></slot>
		<div class="row q-col-gutter-md ">
			<div class="col-md-3 col-6" v-for="car in cars" >
				<SingleCarCard :car="car" />
			</div>
		</div>	
	</div>
</template>