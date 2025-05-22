// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: [
		'@nuxt/eslint',
		'nuxt-quasar-ui',
		'nuxt-auth-utils',
		'@nuxtjs/i18n',
		'@nuxt/image',
		'nuxt-svgo',
	],
	nitro: {
		storage: {
			uploads: {
				driver: 'fs',
				base: './public/uploads',
			},
		},
	},
	i18n: {
		defaultLocale: 'lv',
		locales: [
			{ code: 'lv', name: 'Latviešu', file: 'lv.json' },
			{ code: 'ru', name: 'Русский', file: 'ru.json' },
			{ code: 'en', name: 'English', file: 'en.json' },
		],
	},
	css: ['~/assets/styles/typography.scss'],
	svgo: {
		defaultImport: 'component',
	},
	quasar: {
		plugins: ['Notify', 'Dialog'],
		cssAddon: true,
		quietSassWarnings: true,
		sassVariables: './assets/styles/quasar.variables.scss',
		iconSet: 'fontawesome-v6',
		extras: {
			font: 'roboto-font-latin-ext',
			fontIcons: ['fontawesome-v6'],
		},

		components: {
			defaults: {
				QBtn: {
					unelevated: true,
					color: 'primary',
					noCaps: true,
				},
				QBtnGroup: {
					unelevated: true,
				},
				QSelect: {
					emitValue: true,
					mapOptions: true,
					outlined: true,
					dense: true,
				},
				QInput: {
					outlined: true,
					dense: true,
				},
				QCard: {
					flat: true,
				},
				QRating: {
					color: 'secondary',
				},
			},
		},
	},
});
