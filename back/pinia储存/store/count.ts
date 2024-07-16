import {defineStore} from "pinia";


export const useCountStore = defineStore('count', {
    actions:{ //actions里面放置的是一个一个的方法，用于响应组件中的方法
        increment() {
            this.sum+=5
        }


    },
    state() {
        return {
            sum: 10
        }
    },
    getters:{
        bigSum(state){
            return state.sum *10
        }
    }
})