<script setup lang="ts">
import {ref} from "vue";

let toy = ref('奥特曼')
defineProps(['car', 'sendToy'])
</script>

<template>
  <h1>子组件</h1>
  {{ toy }}<br>
  父组件给的 {{ car }}
  <button @click="sendToy(toy)">发送玩具</button>

</template>

<style scoped>

</style>