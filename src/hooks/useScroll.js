import { onMounted,onUnmounted,ref } from 'vue';
import { throttle } from 'underscore'
export default function useScroll(list,getListApi) {
    let clientHeight = ref(0)
    let scrollTop = ref(0)
    let scrollHeight = ref(0)
    let currentPage = 1
    function getList(){
        getListApi(currentPage).then(res=>{
            list.value = [...list.value,...res.data]
            currentPage++
        })
    }
    getList()

    const scrollListenerHandler = () =>{
        // 整个页面的高度
        scrollHeight.value = document.documentElement.scrollHeight
        // 已经滚动的高度
        scrollTop.value = document.documentElement.scrollTop
        // 视窗高度
        clientHeight.value = document.documentElement.clientHeight
        // console.log(scorllTop,scrollHeight-scorllTop);
        if(scrollTop.value+clientHeight.value*2>=scrollHeight.value){
            getList()
        }
    }

    onMounted(() => {
        window.addEventListener("scroll",throttle(scrollListenerHandler,200))
    })

    onUnmounted(() => {
        window.removeEventListener("scroll",scrollListenerHandler)
    })
    return { clientHeight, scrollTop, scrollHeight }
}