<script setup>
import DetailSwipe from './cpns/DetailSwipe.vue';
import DetailInfos from './cpns/DetailInfos.vue'
import DetailFacility from './cpns/DetailFacility.vue'
import DetailLandlord from './cpns/DetailLandlord.vue'
import DetailComment from './cpns/DetailComment.vue'
import DetailNotice from './cpns/DetailNotice.vue'
import DetailMap from './cpns/DetailMap.vue'
import DetailIntro from './cpns/DetailIntro.vue'
import { useRoute } from 'vue-router'
import { getDetailInfos } from '@/api/detailApi'
import { computed, ref, watch } from 'vue';
import useScroll from '@/hooks/useScroll'

// 获取房屋详细信息
const route = useRoute()
const houseId = route.params.id
let detailInfos = ref({})
getDetailInfos(houseId).then(res => {
    detailInfos.value = res.data
})
const mainPart = computed(() => detailInfos.value.mainPart)


</script>

<template>
    <div class="detail top-page">
        <van-nav-bar title="房屋详情" left-text="旅途" left-arrow @click-left="$router.back()"/>
        <div class="main" v-if="mainPart?.topModule">
            <detail-swipe :swiperData="mainPart.topModule.housePicture.housePics"></detail-swipe>
            <!-- <detail-infos name="描述" :ref="getSectionRef" :topInfos="mainPart.topModule"></detail-infos>
            <detail-facility name="房屋设施" :ref="getSectionRef" :houseFacility="mainPart.dynamicModule.facilityModule.houseFacility"></detail-facility>
            <detail-landlord name="房东介绍" :ref="getSectionRef" :landlord="mainPart.dynamicModule.landlordModule"/>
            <detail-comment name="热门评论" :ref="getSectionRef" :comment="mainPart.dynamicModule.commentModule"/>
            <detail-notice name="预订须知" :ref="getSectionRef" :order-rules="mainPart.dynamicModule.rulesModule.orderRules"/>
            <detail-map name="位置周边" :ref="getSectionRef" :position="mainPart.dynamicModule.positionModule"/> -->
            <detail-infos :topInfos="mainPart.topModule"></detail-infos>
            <detail-facility :houseFacility="mainPart.dynamicModule.facilityModule.houseFacility"></detail-facility>
            <detail-landlord :landlord="mainPart.dynamicModule.landlordModule"/>
            <detail-comment :comment="mainPart.dynamicModule.commentModule"/>
            <detail-notice :order-rules="mainPart.dynamicModule.rulesModule.orderRules"/>
            <detail-map :position="mainPart.dynamicModule.positionModule"/>
            <detail-intro :price-intro="mainPart.introductionModule" />
        </div>

    </div>
</template>

<style lang="less" scoped>

</style>