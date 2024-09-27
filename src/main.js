import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import DiceThrow from './components/DiceThrow.vue';
import Hello from './components/Hello.vue';
import Title from './components/Title.vue';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('dice-throw', DiceThrow);
app.component('hello-comp', Hello);
app.component('title-comp', Title);
app.mount('#app')
