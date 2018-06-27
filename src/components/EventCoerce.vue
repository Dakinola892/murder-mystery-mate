<template>
    <div class="event">
        <div class="label">
            <img src="../assets/noun_1160993_cc.svg">
            Coerce
        </div>
        <div class="content">
            <div class="date">{{ event.startTime }}</div>
            <div class="summary"><a href="#">{{ event.user }}</a> {{ coerceAttemptText }} <a href="#">{{ event.target }}</a> into using {{ targetAbility }} on <a>{{ event.abilityTargetPlayer }}</a></div>
        </div>
    </div>
</template>

<script>
import Coerce from "../models/events/abilities/Coerce";

function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1
}

export default {

    name: "EventCoerce",
    props: {
        event: {
            type: Coerce,
            required: true
        }
    },
    computed: {
        targetAbility() {
            let ability = this.event.coerceTargetAbility;
            let prefix = (isVowel(ability[0])) ? "an" : "a";
            return `${prefix} ${ability}`;
        }, 
        coerceAttemptText() {
            if (this.event.isActive) {
                return "is attempting to Coerce";
            } else if (this.event.isSuccessful) {
                return "successfully coerced";
            } else {
                return "was unsuccessful in trying to Coerce";
            }
        }
    }

}
</script>

<style scoped>

</style>
