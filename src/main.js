import { createApp } from 'vue'
import DataVVue3 from '@kjgl77/datav-vue3'
import './style.css'
import App from './App.vue'
import moment from 'moment';

// 设置语言环境为中文
moment.locale('zh-cn');

createApp(App).use(DataVVue3).mount('#app')
