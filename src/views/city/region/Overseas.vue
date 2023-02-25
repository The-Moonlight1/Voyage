<template>
  <div class="overseas">
    <!-- <van-index-bar :index-list="indexList"> -->
    <van-index-bar>
      <van-index-anchor index="热门"/>
      <div class="hotCities">
        <template v-for="hotCitie in cityGroupOverSea?.hotCities">
          <div class="hotCity" @click="selectedCity(hotCitie)">
            {{ hotCitie.cityName }}
          </div>
        </template>
      </div>
      <template v-for="group in cityGroupOverSea?.cities" :key="group.group">
        <van-index-anchor :index="group.group" />
        <template v-for="city in group.cities" :key="city.cityId">
          <van-cell :title="city.cityName" @click="selectedCity(city)"/>
        </template>
      </template>
    </van-index-bar>

    <!-- <template v-for="group in cityGroupOverSea?.cities" :key="group.group">
      <h2>Group： {{ group.group }}</h2>
      <template v-for="city in group.cities" :key="city.cityId">
        <p>{{ city.cityName }}</p>
      </template>
    </template> -->
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { useRouter } from 'vue-router'
  import useCityStore from '../../../stores/modules/city';
  
  const emit = defineEmits(['changeCity'])

  const cityStore = useCityStore()
  const cityGroupOverSea = computed(() => {
    return cityStore.allCities?.cityGroupOverSea
  })

  const indexList = computed(() => {
    return ['#', ...cityStore.allCities?.cityGroupOverSea?.cities.map(item => item.group)]
  })


  const router = useRouter()
  const selectedCity = (city)=> {
    cityStore.currentCity = city
    // router.push("/home")
    router.back()
  }
</script>

<style lang="less" scoped>
  .hotCities{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    text-align: center;
    .hotCity {
      width: 8rem;
      height: 2rem;
      line-height: 2rem;
      border-radius: 1rem;
      // height: 20px;
      background-color: var(--primary-color);
      margin: 0.5rem 0;
    }
  }
</style>