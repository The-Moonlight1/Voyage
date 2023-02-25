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
            // component:()=>import("@/views/message/Message.vue")
            component:()=>import("@/views/message/Message.vue")
        },
        {
            path:'/city',
            name:'city',
            // component:City,
            component:()=>import("@/views/city/City.vue"),
            meta:{
                hideTabBar: true
            }
        },
        {
            path:'/search',
            name :'search',
            component:()=>import("@/views/search/Search.vue")
        },
        {
            path:'/detail/:id',
            name :'detail',
            component:()=>import("@/views/detail/Detail.vue")
        },
        {
            path:'/404',
            name:'404',
            component:()=>import("@/views/notFound/NotFound.vue"),
            meta:{
                hideTabBar: true
            }
        },
        {
            path:'/:catchAll(.*)',
            redirect:'/404'
        }
    ]  
})

export default router