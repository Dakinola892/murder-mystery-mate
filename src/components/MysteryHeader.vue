<template>
    <div class="ui container">
        <h1 class="ui top attached huge header">{{ Mystery.title }}</h1>
        <h2 class="ui attached header">{{ Mystery.currentTime }}</h2>
    </div>
</template>

<script>
import Mystery from "../stores/Mystery"

export default {
  name: 'MysteryHeader',
  data() {
      return {
          Mystery: Mystery.data,
      }
  }
}
</script>

<style scoped>
    .container {
        margin-bottom: 20px;
    }
</style>


