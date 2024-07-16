<script setup lang="ts">
import {ref} from "vue";
import emitter from "@/utils/emitter";

let toy = ref('奥特曼')
//声明事件
</script>

<template>
  <h1>子组件</h1>
  {{ toy }}<br>
  <button @click="emitter.emit('send-toy',toy)">发送玩具</button>

</template>

<style scoped>

</style>