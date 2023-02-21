import { createRouter,createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
const router = createRouter({
    history:createWebHashHistory(),
    //映射关系
    routes:[
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            name:'home',
            component:Home
        },
        {
            path:'/collection',
            name:'collection',
            component:()=>import("@/views/collection/Collection.vue")
        },
        {
            path:'/order',
            name:'order',
            component:()=>import("@/views/order/Order.vue")
        },
        {
            path:'/message',
            name:'message',
            component:()=>import("@/views/message/Message.vue")
        }
    ]  
})

export default router