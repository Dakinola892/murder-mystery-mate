<template>
    <div class="ui segments">
        <div class="ui segment grid">
            <div class="ui two wide column">
                {{ event.startTime }}
                <img class="ui small circular image" src="../assets/noun_1436968_cc.svg">
                Save
            </div>
            <div class="ui container">
                <h1 class="summary">Saved used by <a href="#">{{ event.user.name }}</a> on <a href="#">{{ event.target.name }}</a></h1>
                <h2 class="extra text">Saved <a href="#">{{ event.target.name }}</a> from kill attempt by <a href="#">{{ event.kill.user.name }}</a></h2>
            </div>
        </div>
        <div v-if="selected" class="ui basic compact segment">
            <button class="ui button" @click="editSave">Edit</button>
            <button class="ui button" @click="showDeleteDialog">Delete</button>
        </div>
    </div>
</template>

<script>
import EventTypes from "../EventTypes";

import Event from "../models/events/Event"

import EventKill from "./EventKill.vue";
import EventSave from "./EventSave.vue";
import EventProtect from "./EventProtect.vue";
import EventSilence from "./EventSilence.vue";
import EventSteal from "./EventSteal.vue";
import EventTruthtell from "./EventTruthtell.vue";
import EventCoerce from "./EventCoerce.vue";
import EventMessage from "./EventMessage.vue";
import ModalNewEvent from "./ModalNewEvent.vue";
import ModalEditEvent from "./ModalEditEvent.vue";

export default {
    name: "Event",
    props: {
        event: Event
    },
    data() {
        return {
            showOptions: false
        }
    },
    methods: {
        toggle() {
            if (this.selected) {
                this.showOptions = !this.showOptions;
            }
        },
        editSave() {
            this.$emit('showEditModal', this.event);
        },
        showDeleteDialog() {
            console.log("showDeleteDialog");
        },
        eventType(type) {
            switch(type) {
                case EventTypes.kill:
                    return EventKill;
                case EventTypes.save:
                    return EventSave;
                case EventTypes.protect:
                    return EventProtect;
                case EventTypes.silence:
                    return EventSilence;
                case EventTypes.steal:
                    return EventSteal;
                case EventTypes.truthtell:
                    return EventTruthtell;
                case EventTypes.coerce:
                    return EventCoerce;
                case EventTypes.message:
                case EventTypes.announcement:
                    return EventMessage;
                default:
                    return EventKill;
            }
        }
    },
    computed: {
        selected() {
            return this.$store.state.selectedEvent == this.event.id;
        }
    }
}
</script>

<style>

</style>
