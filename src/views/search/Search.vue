<template>
    <div class="search top-page">
        <h3>开始时间：{{ startDate }}</h3>
        <h3>结束时间：{{ endDate }}</h3>
        <h3>当前城市：{{ currentCity }}</h3>
    </div>
</template>
  
<script setup>
import { useRoute } from 'vue-router';
const route = useRoute()
const { currentCity, startDate, endDate } = route.query
</script>
  
<style lang="less" scoped></style>