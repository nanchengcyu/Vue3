<script setup lang="ts">

import Child from "@/components/Child.vue";
import {ref} from "vue";

let car = ref('奔驰')
let toy = ref()

function getToy(value: string) {
  toy.value = value
}
</script>

<template>
  <h1>父组件</h1>
  {{ car }}
  <h2>子组件传递的{{toy}}</h2>
  <hr>
  <Child :car="car" :sendToy="getToy"></Child>
</template>

<style scoped>

</style>