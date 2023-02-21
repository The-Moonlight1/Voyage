<template>
    <van-tabbar route active-color="#00cc6a">
        <template v-for="(item,index) in tarber" :key="index">
            <!-- <van-tabbar-item :to="item.path" :icon="item.icon">
                {{ item.text }}
            </van-tabbar-item> -->
            <van-tabbar-item :to="item.path" >
                {{ item.text }}
                <template #icon>
                    <icon name="aixin"></icon> 
                </template>
            </van-tabbar-item>
        </template>
    </van-tabbar>
</template>
<script setup>
    const tarber = [
        {path:'/home',text:"首页",icon:"home-o"},
        {path:'/collection',text:"收藏",icon:"star-o"},
        {path:'/order',text:"订单",icon:"cart-o"},
        {path:'/message',text:"消息",icon:"chat-o"}
    ]
</script>

<style lang="less" scoped>
</style>