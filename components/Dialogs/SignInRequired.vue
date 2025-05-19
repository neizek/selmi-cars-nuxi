<script setup lang="ts">
	const { dialogRef, onDialogHide } = useDialogPluginComponent();

	defineProps({
		message: {
			type: String,
			required: true,
		},
	});

	defineEmits([...useDialogPluginComponent.emits]);
</script>

<template>
	<q-dialog ref="dialogRef" @hide="onDialogHide">
		<q-card class="row q-pa-sm" style="width: 350px">
			<q-card-section class="q-pa-sm">
				<span>{{ message }}</span>
			</q-card-section>
			<q-card-actions>
				<q-btn
					label="Войти в аккаунт"
					color="primary"
					class="q-mr-sm"
					@click="navigateTo($localePath('/user/signin'))" />
				<q-btn label="Отмена" color="negative" @click="$emit('hide')" />
			</q-card-actions>
		</q-card>
	</q-dialog>
</template>
