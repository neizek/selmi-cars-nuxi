<script setup>
	import { ref } from 'vue';
	import { QSplitter, QScrollArea, QList, QItem, QItemSection, QInput, QBtn } from 'quasar';
	import { messengerOpen } from '~/lib/stores/messenger';

	const users = ref([
		{ id: 1, name: 'Иван Иванов' },
		{ id: 2, name: 'Мария Петрова' },
		{ id: 3, name: 'Алексей Смирнов' },
	]);

	const selectedUser = ref(users.value[0]);
	const messages = ref([
		{ from: 1, text: 'Привет!' },
		{ from: 2, text: 'Здравствуйте!' },
	]);

	const newMessage = ref('');

	function selectUser(user) {
		selectedUser.value = user;
		// Здесь можно загрузить сообщения для выбранного пользователя
	}

	function sendMessage() {
		if (newMessage.value.trim()) {
			messages.value.push({ from: 'me', text: newMessage.value });
			newMessage.value = '';
		}
	}
</script>

<script>
	export default {
		data() {
			return {
				splitterModel: 30,
			};
		},
	};
</script>

<template>
	<q-dialog
		v-model="messengerOpen"
		side="right"
		overlay
		:position="$q.screen.gt.xs ? 'right' : 'bottom'">
		<q-card class="q-pa-md" style="height: 70vh; width: 700px">
			<q-splitter v-model="splitterModel" :limits="[20, 80]" style="height: 100%">
				<template #before>
					<q-scroll-area style="height: 100%">
						<q-list>
							<q-item
								v-for="user in users"
								:key="user.id"
								clickable
								:active="selectedUser && selectedUser.id === user.id"
								@click="selectUser(user)">
								<q-item-section>{{ user.name }}</q-item-section>
							</q-item>
						</q-list>
					</q-scroll-area>
				</template>
				<template #after>
					<div class="column fit q-pa-md">
						<q-scroll-area style="flex: 1 1 auto; min-height: 0">
							<div v-for="(msg, idx) in messages" :key="idx" class="q-mb-sm">
								<div :class="msg.from === 'me' ? 'text-right' : 'text-left'">
									<q-chip
										:color="msg.from === 'me' ? 'primary' : 'grey-3'"
										text-color="black">
										{{ msg.text }}
									</q-chip>
								</div>
							</div>
						</q-scroll-area>
						<div class="row items-center q-gutter-x-md">
							<q-input
								v-model="newMessage"
								standout
								placeholder="Введите сообщение..."
								class="col"
								dense
								@keyup.enter="sendMessage" />
							<q-btn icon="send" @click="sendMessage" />
						</div>
					</div>
				</template>
			</q-splitter>
		</q-card>
	</q-dialog>
</template>
