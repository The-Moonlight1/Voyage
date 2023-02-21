<script setup>
import { useRoute } from 'vue-router';
import TabBar from './components/tabbar/TabBar.vue';

const route = useRoute()
</script>

<template>
    <router-view></router-view>
    <!-- <tab-bar v-if="!route.meta.hideTabBar"></tab-bar> -->
    <tab-bar></tab-bar>
</template>

<style scoped>

</style>
