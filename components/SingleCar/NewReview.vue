<script lang="ts" setup>
	const isLoading = ref(false);
	const { user } = useUserSession();

	const isOpen = defineModel<boolean>();
	const props = defineProps<{
		userId?: number;
		entityId?: number;
	}>();

	const reviewForm = reactive({
		text: '',
		rate: 0,
		userId: props.userId,
		entityId: props.entityId,
		authorId: user?.value?.id,
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
	<q-dialog v-model="isOpen">
		<q-card>
			<q-card-section class="q-gutter-y-md">
				<div class="row q-gutter-x-md">
					<span>Оцените этого продавца</span>
					<q-rating v-model="reviewForm.rate" />
				</div>
				<q-input v-model="reviewForm.text" type="textarea" label="Ваш честный отзыв" />
				<q-btn :loading="isLoading" label="Оставить отзыв" @click="addReview" />
			</q-card-section>
		</q-card>
	</q-dialog>
</template>
