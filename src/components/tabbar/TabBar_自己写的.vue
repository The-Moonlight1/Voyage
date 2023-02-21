<template>
    <div class="tabbar">
        <div class="tabbar-item" v-for="(item,index) in tarber" :key="index">
            <icon name="aixin"></icon>
            <router-link :to="item.path">
                <span>{{ item.text }}</span>   
            </router-link>
        </div>
    </div>
</template>

<script setup>
    const tarber = [
        {path:'/home',text:"首页"},
        {path:'/collection',text:"收藏"},
        {path:'/order',text:"订单"},
        {path:'/message',text:"消息"}
    ]
</script>

<style lang="less" scoped>
    .tabbar {
        position: fixed;
        bottom: 0;
        height: 50px;
        width: 100%;
        display: flex;
        box-shadow:0 2px 2px;
        font-size: 1.6rem;
    }
    .tabbar-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }
    .router-link-active {
        color: #00cc6a;
    }
</style>