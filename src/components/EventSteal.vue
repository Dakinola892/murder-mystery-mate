<template>
    <div class="event">
        <div class="label">
            <img src="../assets/noun_1368_cc.svg">
            Steal
        </div>
        <div class="content">
            <div class="date">{{ event.startTime }}</div>
            <div class="summary" v-if="event.isActive"><a href="#">{{ event.user }}</a> is attempting to steal {{ prefix + tryingToSteal}} from <a href="#">{{ event.target }}</a></div>
            <div class="summary" v-else-if="event.isSuccessful"><a href="#">{{ event.user }}</a> successfully stole {{ prefix + tryingToSteal}} from <a href="#">{{ event.target }}</a></div>
            <div class="summary" v-else>Unsuccessful Steal attempt from <a href="#">{{ event.user }}</a> trying to steal {{ prefix + tryingToSteal}} from <a href="#">{{ event.target }}</a></div>
            <!-- if >0, show as accordion -->
        </div>
  </div>
</template>

<script>
import Steal from "../models/events/abilities/Steal";
import Item from "../models/Item"

function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1
}

export default {

    name: "EventSteal",
    props: {
        event: {
            type: Steal,
            required: true
        }
    },
    computed: {
        isItem() {
            return this.event.goal.constructor === Item;
        },
        prefix() {
            if (this.isItem) {
                //todo: check if one of many
                return "the ";
            } else if (isVowel(this.event.goal[0])) {
                return "an ";
            } else {
                return "a ";
            }
        },
        tryingToSteal() {
            return this.event.goal.name || this.event.goal;
        },
    }

}
</script>

<style scoped>

</style>
