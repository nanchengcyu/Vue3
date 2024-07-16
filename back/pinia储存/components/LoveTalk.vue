<script setup lang="ts">
import axios from "axios";
import {useTalkStore} from "@/store/loveTalk";

const talkStore =useTalkStore()



async function getLoveTalk(){
  let data = await axios.get('https://api.uomg.com/api/rand.qinghua')
  // console.log(data)
  let loveTalk = {id:data.data.code,title:data.data.content}
  console.log(loveTalk.id)
  talkStore.talkList.unshift(loveTalk)
}

</script>

<template>
  <div class="person">
  <button @click="getLoveTalk">获取一句话</button>
  <ul >
    <li v-for="qinghua in talkStore.talkList" :key="qinghua.id">{{qinghua.title}}</li>
  </ul>
  </div>
</template>

<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

</style>