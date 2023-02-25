<script setup>
import { useRoute } from 'vue-router';
import TabBar from './components/tabbar/TabBar.vue';
import Loading from './components/Loading.vue';

</script>

<template>
    <router-view></router-view>
    <!-- <tab-bar v-if="!route.meta.hideTabBar"></tab-bar> -->
    <tab-bar></tab-bar>
    <loading></loading>
</template>

<style scoped>

</style>
