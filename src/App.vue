<template>
  <div id="app">
  <news-view/>
  </div>
</template>

<script>
import NewsView from '@/views/NewsView.vue'

export default {
  name: 'App',
  components: {
    NewsView,
  }
}
    NewsView
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
