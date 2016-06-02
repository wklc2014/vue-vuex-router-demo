<template>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<script>

// 接入 vuex 的 store

import store from './store'

export default {
  store
}

</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html, body {
  font: 12px/1.5 arial;
  height: 100%;
}
</style>
