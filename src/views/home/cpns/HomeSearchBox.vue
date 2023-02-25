<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router'
import useMainStore from '../../../stores/modules/main';
import useCityStore from '../../../stores/modules/city';
import { formatMonthDay } from '@/utils/formatdate'
// 定义 props
defineProps({
    hotSuggests: {
        type: Array,
        default: []
    }
})


const router = useRouter()
// 选择旅行城市
const selectCity = () => {
    router.push('/city')
}

// 获取当前位置
const getPosition = () => {
    navigator.geolocation.getCurrentPosition(res => {
        console.log("获取成功", res);
    }, err => {
        console.log("获取失败", err);
    })
}

// 获取选择的城市
const cityStore = useCityStore()
const currentCity = cityStore.currentCity.cityName

// 日期范围处理
//日历组件
const mainStore = useMainStore()
let selectStartDate = ''
let selectendDate = ''
let selectStayCount = ''
const showCalendar = ref(false);

const onConfirm = (values) => {
    const [start, end] = values;
    showCalendar.value = false;
    selectStayCount = (end - start) / 1000 / 60 / 60 / 24
    selectStartDate = formatMonthDay(start)
    selectendDate = formatMonthDay(end)
    // 将选择的日期存储到 stroe中
    // mainStore.changeDate(selectStartDate,selectendDate)
    mainStore.startDate = selectStartDate;
    mainStore.endDate = selectendDate
};


// 搜索
const startSearch = () => {
    router.push({
        path: '/search',
        query: {
            startDate: start.value,
            endDate: end.value,
            currentCity
        }
    })
}
</script>

<template>
    <!-- 位置选择 -->
    <div class="location">
        <div class="city" @click="selectCity">{{ cityStore.currentCity.cityName }}</div>
        <div class="myPosition" @click="getPosition">
            <span class="text">我的位置</span>
            <div class="icon">
                <icon name="aixin" size="18"></icon>
            </div>
        </div>
    </div>

    <!-- 日期范围 -->
    <div class="section date-range bottom-gray-line" @click="showCalendar = true">
        <div class="start">
            <div class="date">
                <span class="tip">入住</span>
                <span class="time">{{ mainStore.startDate }}</span>
            </div>
            <div class="stay">共{{ selectStayCount || 1 }}晚</div>
        </div>
        <div class="end">
            <div class="date">
                <span class="tip">离店</span>
                <span class="time">{{ mainStore.endDate }}</span>
            </div>
        </div>
    </div>
    <van-calendar v-model:show="showCalendar" type="range" @confirm="onConfirm" />

    <!-- 价格/人数 -->
    <div class="section price-counter bottom-gray-line">
        <div class="start">价格不限</div>
        <div class="end">人数不限</div>
    </div>

    <!-- 关键字 -->
    <div class="section keyword bottom-gray-line">关键字/位置/民宿名</div>

    <!-- 热门建议 -->
    <div class="section hot-suggests">
        <template v-for="(item, index) in hotSuggests" :key="index">
            <div class="item" :style="{ color: item.tagText.color, backgroundColor: item.tagText.background.color }">
                {{ item.tagText.text }}
            </div>
        </template>
    </div>

    <!-- 搜索 -->
    <div class="btn" @click="startSearch">开始搜索</div>
</template>

<style lang="less" scoped>
.location {
    height: 44px;
    display: flex;
    align-items: center;
    padding: 0 20px;

    .city {
        flex: 1;
        font-size: 1.5rem;
        color: rgb(157, 155, 155);
    }

    .myPosition {
        width: 74px;
        display: flex;
        align-items: center;

        .text {
            color: #666;
            font-size: 1.2rem;
        }

        .icon {
            margin-left: 4px;
        }
    }
}

.section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0 2rem;
    color: #999;

    .start {
        flex: 1;
        display: flex;
        height: 4.4rem;
        align-items: center;
    }

    .end {
        min-width: 30%;
        padding-left: 2rem;
    }

    .date {
        display: flex;
        flex-direction: column;

        .tip {
            font-size: 1.2rem;
            color: #999;
        }

        .time {
            margin-top: 3px;
            color: #333;
            font-size: 1.5rem;
            font-weight: 500;
        }
    }
}

.date-range {
    height: 4.4rem;

    .stay {
        flex: 1;
        text-align: center;
        font-size: 1.2rem;
        color: #666;
    }
}

.price-counter {
    height: 44px;

    .start {
        border-right: 1px solid var(--line-color);
    }
}

.keyword {
    height: 44px;
}

.hot-suggests {
    margin: 1rem 0px;

    .item {
        padding: 4px 8px;
        border-radius: 14px;
        margin: 4px;
        font-size: 1.2rem;
    }
}

.btn {
    width: 342px;
    height: 38px;
    max-height: 50px;
    font-weight: 500;
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    background-image: var(--theme-linear-gradient);
    margin: 0 auto;
}
</style>