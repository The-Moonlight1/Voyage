
import { definePinia } from 'pinia'
const useSearchStore = definePinia('search',{
    state:()=>{
        return{
            cities:[]
        }
    },
    getters:{

    },
    actions:{

    }

})
export default useSearch 