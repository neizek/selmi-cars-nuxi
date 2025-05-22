<script lang="ts" setup>
	const isLoading = ref(false);
	const userSession = useUserSession();

	const reviewForm = reactive({
		text: '',
		rate: 0,
		userId: props.user.id,
		authorId: userSession.id,
	});

	function addReview() {
		isLoading.value = true;
		$fetch('/api/reviews/create', {
			method: 'POST',
			body: reviewForm,
		}).finally(() => {
			isLoading.value = false;
		});
	}
</script>

<template>
	<q-card-section class="q-gutter-y-md">
		<div class="row q-gutter-x-md">
			<span>Оцените этого продавца</span>
			<q-rating v-model="reviewForm.rate" />
		</div>
		<q-input v-model="reviewForm.text" type="textarea" label="Ваш честный отзыв" />
		<q-btn :loading="isLoading" label="Оставить отзыв" @click="addReview" />
	</q-card-section>
</template>
