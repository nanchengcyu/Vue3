<script setup lang="ts">
import {reactive} from "vue";

let games = reactive([
  {id: '0001', name: '小南'},
  {id: '0002', name: '小城'},
  {id: '0003', name: '小余'},
])

</script>

<template>
  <div class="person">
  <!--reactive对象式相应数据-->
  <ul>
    <li v-for="game in games" :key="game.id">{{game.name}}</li>
  </ul>
  </div>
</template>

<style scoped>
.person{
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>