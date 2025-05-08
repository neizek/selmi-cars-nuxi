<template>
	<q-card>
		<div style="aspect-ratio: 4 / 3; width: 100%">
			<q-skeleton type="rect" height="100%" />
		</div>
		<q-item>
			<q-item-section>
				<q-item-label><q-skeleton type="text" /></q-item-label>
				<q-item-label caption lines="2"><q-skeleton type="text" /></q-item-label>
			</q-item-section>
			<q-item-section side class="text-primary text-h6">
				<q-item-label><q-skeleton type="text" width="100px" /></q-item-label>
			</q-item-section>
		</q-item>
	</q-card>
</template>
