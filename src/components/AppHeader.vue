<template>

    <div>
        <div class="ui container">
            <h1 class="ui top attached huge header">{{ title }}</h1>
            <h2 class="ui attached header">{{ currentTime }}</h2>
        </div>

        <div class="ui container">
            <div class="ui three item secondary pointing menu">
                <a v-for="(tab, index) in tabs" :key="index" class="ui item" @click="navigateTo(index)" :class="{ active: isActive(index) }">{{ tab }}</a>
                <!-- <a class="ui item" @click="navigateTo(TAB_ITEM_LOG)" :class="{ active: isActive(TAB_ITEM_LOG) }"> Item Log</a>
                <a class="ui item" @click="navigateTo(TAB_EVENT_TIMELINE)" :class="{ active: isActive(TAB_EVENT_TIMELINE) }">Event Timeline</a>
                <a class="ui item" @click="navigateTo(TAB_CHARACTER_OVERVIEW)" :class="{ active: isActive(TAB_CHARACTER_OVERVIEW) }">Character Overview</a> -->
            </div>
        </div>
    </div>
</template>

<script>


const TAB_ITEM_LOG = 0;
const TAB_EVENT_TIMELINE = 1;
const TAB_CHARACTER_OVERVIEW = 2;

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


