<template>
    <div class="event">
        <div class="label">
            <img src="../assets/noun_15280.svg">
            Truthtell
        </div>
        <div class="content">
            <div class="date">{{ event.startTime }}</div>
            <div class="summary" v-if="event.isActive"><a href="#">{{ event.user.name }}</a> is requesting a Truthtell on <a href="#">{{ event.target.name }}</a></div>
            <div class="summary" v-else><a href="#">{{ event.user.name }}</a> used Truthtell on <a href="#">{{ event.target.name }}</a></div>
            <div class="extra text" v-if="event.question && event.answer">
                <i class="quote left icon"></i>
                Question: {{ event.question }} ?
                <br>
                Answer: {{ event.answer }}
                <i class="quote right icon"></i>
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
    }
}
</script>

<style scoped>

</style>
