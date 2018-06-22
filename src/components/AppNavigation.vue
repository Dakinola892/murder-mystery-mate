<template>
    <div class="ui container">
        <div class="ui three item secondary pointing menu">
            <a class="ui item" @click="isActive(ItemLog)"> Item Log</a>
            <a class="ui active item">Event Timeline</a>
            <a class="ui item">Character Overview</a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AppNavigation',
  data() {
      return {
          
      }
  }
}
</script>

<style scoped>

</style>
