<template>
    <div class="event">
        <div class="label">
            <!-- TODO: accessibility: colorblindness & alt-text, maybe localization -->
            <img v-if="isPrivateMessage" src="../assets/noun_1788527_cc.svg">
            <img v-else src="../assets/noun_144092_cc.svg">
            {{ messageType }}
        </div>
        <div class="content">
            <div class="date">{{ event.startTime }}</div>
            <div class="summary" v-if="event.isActive"><a href="#">{{ event.user }}</a> would like to {{ requestType }} {{ messageType }} to <a href="#">{{ event.target }}</a></div>
            <div class="summary" v-else>{{ messageType }} from <a href="#">{{ event.user }}</a> successfully delivered to <a href="#">{{ event.target }}</a></div>
            <div class="extra text">Message: {{ event.message }}</div> 
            <!-- font awesome speech marks -->
        </div>
    </div>
</template>

<script>
import Message from "../models/events/abilities/Message";
import EventTypes from "../EventTypes";

export default {

    name: "EventMessage",
    props: {
        event: {
            type: Message,
            required: true
        }
    },
    computed: {
        requestType() {
            return this.isPrivateMessage ? "send a" : "make an"; 
        }, 
        messageType() {
            return this.isPrivateMessage ? "Secret Message" : "Anonymous Announcement";
        }, 
        isPrivateMessage() {
            return this.event.type == EventTypes.message;
        }
    }
}
</script>

<style scoped>

</style>