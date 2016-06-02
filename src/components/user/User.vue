<template>
  <div class="main-user">
    <header-vue title="用户列表"></header-vue>
    <search></search>
    <table-vue></table-vue>
  </div>
</template>

<script>
import HeaderVue from './HeaderVue'
import TableVue from './TableVue'
import Search from './Search'

export default {
  components: {
    HeaderVue,
    TableVue,
    Search
  }
}
</script>
