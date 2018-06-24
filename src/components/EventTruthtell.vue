<template>
    <div class="event">
        <div class="label">
            <img src="../assets/noun_15280.svg">
            Truthtell
        </div>
        <div class="content">
            <div class="date">{{ event.startTime }}</div>
            <div class="summary" v-if="event.isActive"><a href="#">{{ event.user }}</a> is requesting a Truthtell on <a href="#">{{ event.target }}</a></div>
            <div class="summary" v-else><a href="#">{{ event.user }}</a> used Truthtell on <a href="#">{{ event.target }}</a></div>
            <div class="extra text" v-if="event.question && event.answer">
                <!-- font-awesome question marks -->
                Question: {{ event.question }} ?
                <br>
                Answer: {{ event.answer }}
            </div>
        </div>
  </div>
</template>

<script>
import Truthtell from "../models/events/abilities/Truthtell";

export default {

    name: "EventTruthtell",
    props: {
        event: {
            type: Truthtell,
            required: true
        }
    },
    computed: {
        
    }

}
</script>

<style scoped>

</style>
