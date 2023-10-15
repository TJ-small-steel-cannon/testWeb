import { createApp } from 'vue'
// 引入pinia
import { createPinia } from 'pinia'
// 引入elementUi-Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入pinia缓存库
import piniaPluginPersist from "pinia-plugin-persist"
// 引入router
import router from '@/router/index.js'

import App from './App.vue'

const app=createApp(App)
// 创建pinia实例
const pinia = createPinia()
// 在pinia上应用pinia缓存库
pinia.use(piniaPluginPersist)
// 应用pinia实例
app.use(pinia)
// 应用ElementPlus
app.use(ElementPlus)
// 应用router
app.use(router)
app.mount('#app')

const env=import.meta.env
console.log("环境",env,"baseApi",env.VITE_BASE_API); 