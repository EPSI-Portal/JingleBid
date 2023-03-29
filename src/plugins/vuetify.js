// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'


import { aliases, fa } from 'vuetify/iconsets/fa'
import { fr, en } from 'vuetify/locale'

export default createVuetify({
	// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
	icons: {
		defaultSet: 'fa',
		aliases,
		sets: {
			fa
		}
	},

	locale: {
		locale: 'fr',
		fallback: 'en',
		messages: { fr }
	},

	theme: {
		defaultTheme: 'light',
		themes: {
			dark: false,
			colors: {
				primary: '#0077FE',
				accent: '#FFCAB1',
				secondary: '#02AAE5',
				success: '#3AF2A2',
				info: '#03DDCB',
				warning: '#FB8C00',
				error: '#FF6C5C'
			}
		}
	}
})
