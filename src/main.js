import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import './assets/main.css'

createApp(App).mount('#app')

app.config.productionTip = false;

app.use(Antd);


