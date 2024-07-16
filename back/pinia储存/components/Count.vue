<script setup lang="ts">
import {useCountStore} from "@/store/count";
import {storeToRefs} from "pinia";

const countStore = useCountStore()
//storeToRefs
const {bigSum,sum} = storeToRefs(countStore)
console.log(countStore)
console.log(countStore.sum)
function add(){
  countStore.increment()
}

function min(){
  sum.value -= 10
}
</script>

<template>
  <div class="person">
    当前值为：{{sum}},放大10倍后数值：{{bigSum}}<br>
    <button @click="add">+</button>
    <br>
    <button @click="min">-</button>
    <br>
  </div>

</template>

<style scoped>
.person {
  background-color: yellowgreen;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>