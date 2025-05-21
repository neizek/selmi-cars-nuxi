<script setup lang="ts">
	import MessengerSVG from '~/assets/icons/messenger.svg';
	import WhatsAppSVG from '~/assets/icons/whatsapp.svg';
	import TelegramSVG from '~/assets/icons/telegram.svg';
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
			icon: WhatsAppSVG,
		},
		{
			name: 'Telegram',
			link: `https://t.me/share/url?url=${props.link}`,
			icon: TelegramSVG,
		},
		{
			name: 'Facebook',
			link: `https://www.facebook.com/sharer/sharer.php?u=${props.link}`,
			icon: MessengerSVG,
		},
	];
</script>
<template>
	<q-dialog ref="dialogRef" @hide="onDialogHide">
		<q-card class="q-pa-sm">
			<q-item class="column">
				<q-item-section>
					<h3>Поделиться</h3>
				</q-item-section>
				<q-item-label caption>Нажмите где хотите Поделиться ссылкой</q-item-label>
			</q-item>
			<q-item class="row">
				<NuxtLink
					v-for="network in socialNetworks"
					:key="network.name"
					:to="network.link"
					class="q-pa-sm"
					style="width: 64px; height: 64px">
					<!-- <NuxtImg :src="network.icon" alt="icon" style="width: 100%; height: 100%" /> -->
					<component :is="network.icon" />
				</NuxtLink>
			</q-item>
		</q-card>
	</q-dialog>
</template>
