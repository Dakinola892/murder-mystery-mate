<template>
    <div class="ui compact segments">
        <div class="ui segment grid">
            <div class="ui four wide column">
                {{ event.startTime }}
                <img class="ui small circular image" src="../assets/noun_1436968_cc.svg">
                Save
            </div>
            <div class="ui eight wide column">
                <h1 class="summary">Save used by <a href="#">{{ event.user.name }}</a> on <a href="#">{{ event.target.name }}</a></h1>
                <h2 class="extra text">Saved <a href="#">{{ event.target.name }}</a> from kill attempt by <a href="#">{{ event.kill.user.name }}</a></h2>
            </div>
        </div>
        <div v-if="selected" class="ui bottom attached segment">
            <button class="ui button" @click="editSave">Edit</button>
            <button class="ui button" @click="showDeleteDialog">Delete</button>
        </div>
    </div>
</template>

<script>
import Save from "../models/events/abilities/Save";

export default {

    name: "EventSave",
    props: {
        event: {
            type: Save,
            required: true
        }
    },
    methods: {
        editSave() {
            this.$emit('showEditModal', this.event);
        },
        showDeleteDialog() {
            console.log("showDeleteDialog");
        }
    },
    computed: {
        selected() {
            return this.$store.state.selectedEvent === this.event.id;
        }
    }
}
</script>

<style scoped>

</style>
