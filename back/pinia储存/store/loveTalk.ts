import {defineStore} from "pinia";


export const useTalkStore = defineStore('talk', {
    state() {
        return {
            talkList:[
                {id:1,title:'花非花，人非人，在世间'}
            ]
        }
    }
})