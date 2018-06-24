<template>
    <div class="event">
        <div class="label">
            <img src="../assets/noun_1436968_cc.svg">
            Save
        </div>
        <div class="content">
            <div class="date">{{ event.startTime }}</div>
            <div class="summary">Saved used by <a href="#">{{ event.user }}</a> on <a href="#">{{ event.target }}</a></div>
            <div class="extra text">Protected {{ event.target }} from <a href="#">kill attempt by {{ event.kill.user }}</a> </div>
        </div>
  </div>
</template>

<script>
import Kill from "../models/events/abilities/Kill";
import Save from "../models/events/abilities/Save";


export default {

    name: "EventSave",
    props: {
        event: {
            type: Save,
            required: true
        }
    }
}
</script>

<style scoped>

</style>
