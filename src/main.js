import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

import axios from 'axios'
Vue.prototype.$_axios = axios

import moment_ from 'moment'
Vue.prototype.$_moment = moment_
moment_.locale('fr')

const app = createApp(App)

app.use(router)

app.mount('#app')
