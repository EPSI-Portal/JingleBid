// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

// Vuetify
import { createVuetify } from 'vuetify';

import '@fortawesome/fontawesome-free/css/all.css';
import { aliases, fa } from 'vuetify/iconsets/fa';
import { mdi } from 'vuetify/iconsets/mdi';
import { fr } from 'vuetify/locale';

const jingleBidTheme = {
	dark: false,
	colors: {
		primary: '#0077FE',
		accent: '#FFCAB1',
		secondary: '#02AAE5',
		success: '#3AF2A2',
		info: '#03DDCB',
		warning: '#FB8C00',
		error: '#FF6C5C',
	},
};

export default createVuetify({
	// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
	icons: {
		defaultSet: 'fa',
		aliases,
		sets: {
			fa,
			mdi,
		},
	},

	locale: {
		locale: 'fr',
		fallback: 'en',
		messages: { fr },
	},

	theme: {
		defaultTheme: 'jingleBidTheme',
		themes: {
		jingleBidTheme,
		}
	},
});
