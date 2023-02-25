import { defineStore } from 'pinia'

const useLoadingStore = defineStore('loading',{
    state:()=>{
        return {
            isLoading:false
        }
    }
})

export default useLoadingStore