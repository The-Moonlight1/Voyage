<template>
    <div class="home">
        <div class="nav-bar">
            <div class="title">旅途</div>
        </div>
        <div class="banner">
            <img src="../../assets/img/home/home-banner.png" alt="">
        </div>
        <home-search-box :hotSuggests="hotSuggests"></home-search-box>
        <home-categories :categories="categories"></home-categories>
        <search-bar v-show="isShowSearchBar"></search-bar>
        <home-content :houseList="houseList"></home-content>
    </div>
</template>

<script setup> 
import HomeSearchBox from './cpns/HomeSearchBox.vue'
import HomeCategories from './cpns/HomeCategories.vue';
import HomeContent from './cpns/HomeContent.vue'
import SearchBar from '@/components/SearchBar.vue'
import { getHotSuggestsApi,getHomeCategories,getHouseList  } from '@/api/homeApi'
import { ref,computed } from 'vue';
import useScroll from "@/hooks/useScroll"

let hotSuggests = ref([])

// 网络请求，获取热门建议
getHotSuggestsApi().then(res=>{
    hotSuggests.value = res.data
})

// 获取 推荐类别
let categories = ref([])
getHomeCategories().then(res=>{
    categories.value = res.data
})

// 使用 房间列表获取 hooks
let houseList = ref([])
let { scrollTop } =  useScroll(houseList,getHouseList)
const isShowSearchBar = computed(() => {
    return scrollTop.value >= 360
})

</script>


<style lang="less" scoped>

.home {
    // overflow-y: auto;
    .nav-bar {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 46px;
        box-shadow:0 2px 2px #ccc;
        .title {
            color: var(--primary-color);
            font-size: 18px;
            font-weight: 700;
        }
    }

    .banner {
        img {
            width: 100%;
        }
    }
}
</style>