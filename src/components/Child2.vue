<script setup lang="ts">
import {ref} from "vue";
import emitter from "@/utils/emitter";

let toy = ref('')
let computer = ref('Apple')
emitter.on('send-toy', (value: any) => {
  toy.value = value
})
</script>

<template>
  <h1>子组件22222</h1>
  {{ computer }}<br>
  <h4>哥哥给的玩具{{toy}}</h4>


</template>

<style scoped>

</style>