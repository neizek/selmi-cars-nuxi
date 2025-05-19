<script setup lang="ts">
	const { dialogRef, onDialogHide } = useDialogPluginComponent();

	const props = defineProps({
		link: {
			type: String,
			required: true,
		},
	});

	defineEmits([...useDialogPluginComponent.emits]);

	const socialNetworks = [
		{
			name: 'WhatsApp',
			link: `https://api.whatsapp.com/send?text=${props.link}`,
			icon: '/icons/whatsapp.svg',
		},
		{
			name: 'Telegram',
			link: `https://t.me/share/url?url=${props.link}`,
			icon: '/icons/telegram.svg',
		},
		{
			name: 'Facebook',
			link: `https://www.facebook.com/sharer/sharer.php?u=${props.link}`,
			icon: '/icons/messenger.svg',
		},
	];
</script>
<template>
	<q-dialog ref="dialogRef" @hide="onDialogHide">
		<q-card class="row q-pa-sm">
			<NuxtLink
				v-for="network in socialNetworks"
				:key="network.name"
				:to="network.link"
				class="q-pa-sm"
				style="width: 64px; height: 64px">
				<NuxtImg :src="network.icon" alt="icon" style="width: 100%; height: 100%" />
			</NuxtLink>
		</q-card>
	</q-dialog>
</template>
