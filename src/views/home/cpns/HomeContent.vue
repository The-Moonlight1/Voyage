<script setup>
    import HouseItemV3 from '../../../components/HouseItemV3.vue';
    import HouseItemV9 from '../../../components/HouseItemV9.vue';
    import { useRouter } from 'vue-router'
    defineProps({
        houseList:{
            type: Array
        }
    })
    const router = useRouter()
    const toDeatil = (data)=>{
      // console.log(data);
      // router.push({
      //   path:'/detail',
      //   query:{
      //     id:data.houseId
      //   }
      // })
      router.push(`/detail/${data.houseId}`)
    }
</script>

<template>
    <div class="content">
        <h2 class="title">热门精选</h2>
        <div class="list">
        <template v-for="item in houseList" :key="item.data.houseId">
            <HouseItemV3 v-if="item.discoveryContentType === 3" :itemData="item.data" @click="toDeatil(item.data)"/>
            <HouseItemV9 v-else-if="item.discoveryContentType === 9" :itemData="item.data" @click="toDeatil(item.data)"/>
        </template>
        </div>
    </div>
</template>

<style lang="less" scoped>
.content {
  padding: 10px 8px;
  .title {
    font-size: 2.2rem;
    padding: 0px 10px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
  }
}
</style>