<template>

    <div>
        <div class="ui container">
            <h1 class="ui top attached huge header">{{ title }}</h1>
            <h2 class="ui attached header">{{ currentTime }}</h2>
        </div>

        <div class="ui container">
            <div class="ui three item secondary pointing menu">
                <a v-for="(tab, index) in tabs" :key="index" class="ui item" @click="navigateTo(index)" :class="{ active: isActive(index) }">{{ tab }}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
      return {
          title: this.$store.state.title,
          tabs: ["Item Log", "Event Timeline", "Character Overview"]
      }
  },
  computed: {
      currentPage() {
          return this.$store.state.currentPage;
      },
      currentTime() {
          return this.$store.getters.currentTime;
      }
  },
  methods: {
      navigateTo(page) {
          this.$store.commit("setCurrentPage", page);
      },

      isActive(tab) {
          return this.currentPage === tab;    
      }
  }
}
</script>

<style scoped>
    .container {
        margin-bottom: 20px;
    }
</style>


