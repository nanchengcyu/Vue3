<script setup lang="ts">
import {computed, reactive, ref, watch, watchEffect} from "vue";

let temp = ref(10)
let high = ref(50)

function changTemp() {
  temp.value += 10
}

function changHigh() {
  high.value += 10
}

watchEffect(() => {
  if (temp.value > 60 || high.value > 50) {
    console.log('给服务器发送请求')
  }
})
</script>

<template>
  <div class="person">
    <h1>水温大于60，水位大于50，给服务器发送请求</h1><br>
    水温：{{ temp }}<br>
    水位：{{ high }}<br>
    <button @click="changTemp">改变水温+10</button>
    <button @click="changHigh">改变水位+10</button>
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