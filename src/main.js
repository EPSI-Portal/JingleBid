import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';

import axios from 'axios';

import moment_ from 'moment';
moment_.locale('fr');

import { firebase, db, auth } from './firebase/firebaseInit';


// IMPORT VARIABLES GLOBALES
import { appConfig } from "@/components/toLoad/appConfig";

import { functions } from "@/components/toLoad/functions";
import { fieldsRules } from "@/components/toLoad/fieldsRules";
import { models } from "@/components/toLoad/models";

loadFonts();

const app = createApp(App);

app.provide("$_moment", moment_);
app.provide("$_axios", axios);

app.provide("$db", db);
app.provide("$firebase", firebase);
app.provide("$auth", auth);

app.provide("$appConfig", appConfig);

app.provide("$functions", functions);
app.provide("$fieldsRules", fieldsRules);

app.provide("$models", models);

app.use(router)
	.use(vuetify)
	.mount('#app');
