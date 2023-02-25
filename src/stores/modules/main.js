
import { defineStore } from 'pinia'
import { formatMonthDay } from '@/utils/formatdate'

// 日期范围处理
const nowDate = new Date()
const startDate = formatMonthDay(nowDate)
const newDate = nowDate.setDate(nowDate.getDate() + 1)
const endDate = formatMonthDay(newDate)

const useMainStore = defineStore('main',{
    state:()=>{
        return {
            startDate,
            endDate
        }
    },
    actions:{
        changeDate(startDate,endDate){
            this.startDate = startDate
            this.endDate = endDate
        }
    }
})

export default useMainStore