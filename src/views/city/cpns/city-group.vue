<template>
    <div class="city-group">
      <van-index-bar :index-list="indexList">
        <van-index-anchor index="热门" />
        <div class="hot">
          <template v-for="item in groupData.hotCities" :key="item.cityId">
            <div class="item" @click="cityClick(item)">{{ item.cityName }}</div>
          </template>
        </div>
        <template v-for="(group, index) in groupData.cities" :key="index">
          <van-index-anchor :index="group.group" />
          <template v-for="(city, indey) in group.cities" :key="indey">
            <van-cell :title="city.cityName" @click="cityClick(city)" />
          </template>
        </template>
      </van-index-bar>
    </div>
  </template>
  
  <script setup>
  import { defineProps, computed } from 'vue';
  import { useRouter } from 'vue-router';
  import useCityStore from '@/stores/modules/city'
  const router = useRouter()
  const cityStore = useCityStore()
  const props = defineProps({
    groupData: {
      type: Object,
      default: () => ({})
    }
  })
  // 自定义索引
  const indexList = computed(() => {
    const indexs = props.groupData.cities.map(item => item.group)
    indexs.unshift("#")
    return indexs
  })
  // 城市点击
  const cityClick = (city) => {
    cityStore.currentCity = city
    router.back()
  }
  </script>
  
  <style lang="less" scoped>
  .hot {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px;
    padding-right: 25px;
    .item {
      width: 70px;
      line-height: 28px;
      text-align: center;
      border-radius: 14px;
      font-size: 12px;
      background-color: #fff4ec;
      margin: 6px 0px;
      color: #000;
    }
  }
  </style>