import { createApp } from 'vue'
import App from './App.vue'

// 引入初始化样式以及公共样式
import "normalize.css"
import "./assets/css/index.css"

// 状态管理库
import pinia from './stores'

// 路由
import router from './router'

//icon组件 ---全局组件
import "./assets/icon/iconfont";
import icon from '@/components/icon.vue'


// 导入 axois       感觉不是很有必要了
// import api from './api'



const app = createApp(App)
// 注册全局组件
app.component("Icon",icon)
// 将axios的二次封装（api）挂载到全局  全局引入的话,使用也不简单。越来越发现给人一种脱裤子放屁的感觉  感觉不是很有必要了

// app.config.globalProperties.$request = api
// app.$request = api;
app.use(router).use(pinia).mount('#app')