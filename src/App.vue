<template>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<script>

import store from './store'

export default {
  store: store
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
