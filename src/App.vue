<template>
  <div id="app">
    <MysteryHeader />
    <Navigation />
    <!-- <MainContent /> -->
  </div>
</template>

<script>
import MysteryHeader from './components/MysteryHeader.vue'
import Navigation from "./components/Navigation.vue";

export default {
  name: 'app',
  components: {
    MysteryHeader,
    Navigation
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
