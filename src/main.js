import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 路由配置
import Router from '/src/router/index.ts';
import axios from "axios";

const app = createApp(App)
//.use(store).use(router).mount('#app')
// app.use(store)
// app.use(router)
app.use(ElementPlus)
app.use(Router)
app.config.globalProperties.$h = axios
app.mount('#app')
