<template>
  <div id="app">
    <AppHeader />
    <!-- <MainContent /> -->
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppNavigation from "./components/AppNavigation.vue";

export default {
  name: 'app',
  components: {
    AppHeader,
    AppNavigation
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
