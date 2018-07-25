<template>
    <sui-modal-actions>
        <button class="ui button" @click="addNewEvent">Record New Event</button>
    </sui-modal-actions>
</template>

<script>
export default {
    name:"ModalPageActions",
    data() {
        return {
            confirming: false
        }
    },
    methods: {
        addNewEvent() {
            this.$store.dispatch('createNewEvent');
        }
    }
}
</script>

<style>

</style>
