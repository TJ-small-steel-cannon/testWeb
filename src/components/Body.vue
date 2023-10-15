<template >
  <div>我是body组件</div>
  <div>body:{{counterStore.count}}</div>
  <button @click="countIncrement">count++</button>
  <button @click="countDecrement">count--</button>
</template>
<script setup>
import { ref,reactive } from "vue";
import { useCounterStore } from "@/sort/sort"; 
    const counterStore = useCounterStore();
    const countIncrement=ref(counterStore.increment)
    const countDecrement=ref(counterStore.decrement)   
</script>
<style lang="scss"></style>






