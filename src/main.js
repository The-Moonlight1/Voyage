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




// 导入 axois
import api from './api/api'

const app = createApp(App)
// 注册全局组件
app.component("Icon",icon)
// 将axios的二次封装（api）挂载到全局
app.$request = api;
app.use(router).use(pinia).mount('#app')