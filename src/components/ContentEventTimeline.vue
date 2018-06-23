<template>
    <div class="ui huge feed container">
        <component v-for="event in events" :key="event.id" :is="eventType(event.type)" v-bind:event="event"></component>
    </div>
</template>

<script>
import Kill from "../models/events/abilities/Kill";
import Save from "../models/events/abilities/Save";
import EventTypes from "../EventTypes";
import EventKill from "./EventKill.vue"

let testKill = new Kill(0, "Annie Adams", "Carrie Cross", "00:31:57", true, 384);
let testSave = new Save(1, "Fred Farnsworth", "Carrie Cross", "00:39:19", false, testKill);
testKill.outcome = testSave;

let testKill2 = new Kill(2, "Annie Adams", "Carrie Cross", "00:41:26", true, 554);
let testSave2 = new Save(3, "Fred Farnsworth", "Carrie Cross", "00:42:19", false, testKill);
testKill2.outcome = testSave2;


export default {
    name: "ContentEventTimeline",
    components: {

    },
    data() {
        return {
            events: [testKill, testKill2]
        }
    },
    methods: {
        eventType(type) {
            switch(type) {
                case EventTypes.kill:
                    return EventKill;
                default:
                    return EventKill;
            }
        }
    },
    computed: {
        
    }
}
</script>

<style scoped>

</style>