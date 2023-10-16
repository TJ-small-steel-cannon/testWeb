<script setup>
import Headers from "./components/Header.vue";
import Body from "./components/Body.vue";
import axios from "axios"
function getData(){
  axios.defaults.baseURL="/api"
  axios({
    url:"/students"
  }).then((res)=>{
    console.log(res);
  })
}
</script>

<template>
  <h1>哈哈哈</h1>
  <router-link to="/Header" ddd="xxx">Home</router-link>
  <router-link to="/Body">About</router-link>
  <router-view></router-view>
  <button @click="getData">发送请求1</button>
</template>

<style lang="scss" scoped>
@import "./assets/base.scss";

h1 {
  color: $pink1;
}
</style>
