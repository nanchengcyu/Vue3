<script setup lang="ts">
import {ref} from "vue";

let toy = ref('奥特曼1')
//声明事件
const emit = defineEmits(['send-toy'])
</script>

<template>
  <h1>子组件</h1>
  {{ toy }}<br>
  <button @click="emit('send-toy',toy)">发送玩具</button>

</template>

<style scoped>

</style>