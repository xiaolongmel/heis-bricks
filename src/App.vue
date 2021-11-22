<template>
  <h1>慕课乐高标准模版</h1>
  <hello-world />
  <ul>
    <li>开箱即用</li>
    <li>typescript</li>
    <li>Vue3</li>
    <li>支持 tsx</li>
    <li>eslint</li>
    <li>简单易用可扩展</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted, inject } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    console.log('inject', inject('test'))
    onMounted(() => {
      getCurrentInstance()?.appContext.config.globalProperties.$echo()
    })
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
