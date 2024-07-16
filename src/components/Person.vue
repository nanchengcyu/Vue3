<script setup lang="ts">
import {computed, reactive, ref} from "vue";

let firstName = ref('南')
let lastName = ref('城')
/* 只可读 不可写
let fullName = computed(() => {
  return firstName.value + lastName.value;
})*/
  // 可读可写
let fullName = computed({
  get() {
    return firstName.value + lastName.value;
  },
  set() {

  }

})

</script>

<template>
  <div class="person">
    姓: <input v-model="firstName">
    名: <input v-model="lastName">
    全名：{{ fullName }}
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