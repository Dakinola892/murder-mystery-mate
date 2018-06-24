<template>
    <div class="event">
        <div class="label">
            <img src="../assets/noun_1476127_cc.svg">
            Silence
        </div>
        <div class="content">
            <div class="date">{{ event.startTime }}</div>
            <div class="summary" v-if="event.isActive">Active Silence on <a href="#">{{ event.target }}</a> provided by <a href="#">{{ event.user }}</a></div>
            <div class="summary" v-else>Silence used by <a href="#">{{ event.user }}</a> on <a href="#">{{ event.target }}</a></div>
            <div class="extra text">Unable to talk about: "{{ event.topic }}" </div>
            <!-- if >0, show as accordion -->
        </div>
  </div>
</template>

<script>
import Kill from "../models/events/abilities/Kill";
import Silence from "../models/events/abilities/Silence";

export default {

    name: "EventSilence",
    props: {
        event: {
            type: Silence,
            required: true
        }
    }

}
</script>

<style scoped>

</style>
