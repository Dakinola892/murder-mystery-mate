<template>
    <div class="event">
        <div class="label">
            <img src="../assets/noun_1476127_cc.svg">
            Silence
        </div>
        <div class="content">
            <div class="date">{{ event.startTime }}</div>
            <div class="summary" v-if="event.isActive">Active Silence on <a href="#">{{ event.target.name }}</a> provided by <a href="#">{{ event.user.name }}</a></div>
            <div class="summary" v-else>Silence used by <a href="#">{{ event.user.name }}</a> on <a href="#">{{ event.target.name }}</a></div>
            <div class="extra text">{{ unable }} to talk about: "{{ event.topic }}" </div>
        </div>
  </div>
</template>

<script>
import Silence from "../models/events/abilities/Silence";

export default {

    name: "EventSilence",
    props: {
        event: {
            type: Silence,
            required: true
        }
    },
    computed: {
        unable() {
            return this.event.isActive ? "Unable" : "Was unable"
        }
    }
}
</script>

<style scoped>

</style>
