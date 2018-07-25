<template>
    <div class="event">
        <div class="label">
            <img src="../assets/noun_904417_cc.svg">
            Protect
        </div>
        <div class="content">
            <div class="date">{{ event.startTime }}</div>
            <div class="summary" v-if="event.isActive">Active Protect on <a href="#">{{ event.target.name }}</a> provided by <a href="#">{{ event.user.name }}</a></div>
            <div class="summary" v-else>Protect used by <a href="#">{{ event.user.name }}</a> on <a href="#">{{ event.target.name }}</a></div>
            <div class="extra text">Kills Blocked: {{ event.blockedKills.length }} </div>
            <!-- if >0, show as accordion -->
        </div>
  </div>
</template>

<script>
import Protect from "../models/events/abilities/Protect";

export default {

    name: "EventProtect",
    props: {
        event: {
            type: Protect,
            required: true
        }
    }
}
</script>

<style scoped>

</style>
