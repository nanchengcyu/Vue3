<script setup lang="ts">
import {ref} from "vue";

let name = ref('南城余')
let age = ref(18)

function changeName() {
  name.value = '南城'
}

function changeAge() {
  age.value = 22
}

</script>

<template>
  名字：{{ name }}
  年龄：{{ age }}
  <button @click="changeName">修改名字</button>
  <br>
  <button @click="changeAge">修改年龄</button>
</template>

<style scoped>

</style>