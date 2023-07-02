import './assets/main.css'
import Antd from 'ant-design-vue';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'ant-design-vue/dist/antd.css';

const app = createApp(App);

app.use(router)
app.use(Antd)
app.mount('#app')
