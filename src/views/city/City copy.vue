<template>
    <div class="city top-page">
        <div class="top">
            <van-search v-model="searchValue" 
                shape="round" 
                background="#4fc08d" 
                placeholder="城市/区域/位置" 
                autofocus show-action @cancel="onCancel"
            />
            <div class="region">
                <template v-for="(item,index) in tabs" :key="item">
                    <div :class="{active:curTab==item.cpn}" @click="curTab = item.cpn">{{ item.text }}</div>
                </template>
            </div>
            
        </div>

        <div class="content">
            <component v-if="curTab" :is='curTab'></component>
        </div>
    </div>
</template>

<script setup>
    import Domestic from './region/Domestic.vue'
    import Overseas from './region/Overseas.vue'
    import { ref,shallowRef,onBeforeMount } from 'vue';
    import { useRouter } from 'vue-router';
    // import cityApi from '@/api/cityApi.js'
    import useCityStore from '../../stores/modules/city';

    // 搜索框
    let searchValue = ref('')
    const router = useRouter()
    const onCancel = () =>{
        router.back()
    };

    // tabbar 动态组件
    const tabs = [{cpn:Domestic,text:"国内/港澳台"},
                    {cpn:Overseas,text:"海外"}]
    let curTab = shallowRef(Domestic);

    // 网络请求, 获取所有城市
    // const cityStore = useCityStore()
    // cityStore.fetchAllCitiesData()
    onBeforeMount(()=>{
        const cityStore = useCityStore()
        cityStore.fetchAllCitiesData()
    })
</script>

<style lang="less" scoped>
.city {
    // 第一种实现方式，粘性定位
    // .top {
    //     position: sticky;
    //     top: 0;
    // }

    //第二种实现方式，  很帅，可以学习学习
    .content {
        height: calc(100vh - 102px);
        overflow-y: auto;
    }
    .region {
        display: flex;
        text-align: center;
        div {
            height: 4.8rem;
            line-height: 4.8rem;
            border-radius: 40px;
            flex: 1;
        }
        .active {
            // border-bottom: 1px solid #4fc08d;
            box-shadow: 0 -2px 10px #4fc08d inset;
        }
    }

}
</style>
