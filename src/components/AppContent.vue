<template>
  <div>
      <component :is="currentPage"></component>
  </div>
</template>

<script>
import ContentItemLog from './ContentItemLog.vue';
import ContentEventTimeline from './ContentEventTimeline.vue';
import ContentCharacterOverview from './ContentCharacterOverview.vue';

export default {
    name: 'AppContent',
    components: {
        ContentItemLog,
        ContentEventTimeline,
        ContentCharacterOverview
    },
    computed: {
        currentPage() {
            const pageNum = this.$store.state.currentPage;
            switch(pageNum) {
                case 0:
                    return ContentItemLog;
                case 1:
                    return ContentEventTimeline;
                case 2:
                    return ContentCharacterOverview;
                default:
                    return ContentEventTimeline;
            }
        }
    }
}
</script>

<style>

</style>
