import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';

import axios from 'axios';

import moment_ from 'moment';
moment_.locale('fr');

loadFonts();

const app = createApp(App).use(router).use(vuetify).mount('#app');

app.config.globalProperties.$_moment = moment_;
app.config.globalProperties.$_axios = axios;
