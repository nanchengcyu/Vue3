<script setup lang="ts">

import Child from "@/components/Child.vue";
import {ref} from "vue";
import Child2 from "@/components/Child2.vue";

let toy = ref()

function saveToy(value: string) {
  toy.value = value
}
</script>

<template>
  <h1>父组件</h1>
  <h2>子组件传递的{{ toy }}</h2>
  <hr>
  <Child @send-toy="saveToy"></Child>
  <hr>
  <Child2></Child2>
</template>

<style scoped>

</style>