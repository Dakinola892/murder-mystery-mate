<template>
  <div id="app">
    <AppHeader />
    <AppContent />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';

export default {
  name: 'app',
  components: {
    AppHeader,
    AppContent
  }
}
</script>

<style>
@import '../public/semantic/dist/semantic.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
