<template>
    <div class="city top-page">
        <van-search v-model="searchValue" 
            shape="round" 
            background="#4fc08d" 
            placeholder="城市/区域/位置" 
            autofocus show-action @cancel="onCancel"
        />
        <div class="region">
            <template v-for="(item,index) in tabs" :key="item">
                <div @click="curTab = item.cpn">{{ item.text }}</div>
            </template>
        </div>
        <component v-if="curTab" :is='curTab'></component>
    </div>
</template>

<script setup>
    import Domestic from './region/Domestic.vue'
    import Overseas from './region/Overseas.vue'
    import { ref,shallowRef } from 'vue';
    import { useRouter } from 'vue-router';


    let searchValue = ref('')
    const router = useRouter()
    const onCancel = () =>{
        router.back()
    };


const tabs = [{cpn:Domestic,text:"大陆/港澳台"},
                {cpn:Overseas,text:"海外"}]

let curTab = shallowRef(Domestic);



</script>

<style lang="less" scoped>
.city {
    .region {
        height: 4.8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        div {
            flex: 1;
        }
    }

}
</style>
