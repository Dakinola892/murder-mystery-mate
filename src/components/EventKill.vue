<template>
    <div class="event">
        <div class="label test">
            <img src="../assets/noun_733622_cc.svg">
            Kill
        </div>
        <div class="content">
            <div class="date">{{ event.startTime }}</div>
            <div class="summary">  
                {{ killType }} on <a>{{ event.target.name }}</a> by <a>{{ event.user.name }}</a>
            </div>
            <div class="extra text"><a>{{ outcomeMessage }}</a> </div>
        </div>
  </div>
</template>

<script>
import Kill from "../models/events/abilities/Kill";
import Save from "../models/events/abilities/Save";
import Protect from "../models/events/abilities/Protect";
import Death from "../models/events/Death";
import {isEmpty} from "lodash"

const ACTIVE_KILL = 0;
const SAVED_KILL = 1;
const PROTECTED_KILL = 2;
const FATAL_KILL = 3;
const FAILED_KILL = 4;

export default {

    name: "EventKill",
    props: {
        event: {
            type: Kill,
            required: true
        }
    },
    data() {
        return {
            
        }
    },
    computed: {
        state() {
            let outcomeEvent = this.event.outcome;
            if (isEmpty(outcomeEvent)) { return ACTIVE_KILL; }

            switch(outcomeEvent.constructor) {
                case Save:
                    return SAVED_KILL;
                case Protect:
                    return PROTECTED_KILL;
                case Death:
                    return FATAL_KILL;
                default:
                    return FAILED_KILL;
            }
        },
        outcomeMessage() {
            switch(this.state) {
                case SAVED_KILL:
                    return `Saved by ${this.event.outcome.user.name}`;
                case PROTECTED_KILL:
                    return `Protected by ${this.event.outcome.user.name}`;
                case FATAL_KILL:
                    var otherKillers = this.event.accomplices ? ` and ${this.accompliceNames}` : "";
                    return `Killed by ${this.event.user.name}` + otherKillers;
                case FAILED_KILL:
                    return `Stopped by ${this.event.outcome.user.name}`;
                default:
                    return "";
            }
        },
        killType() {
            switch(this.state) {
                case ACTIVE_KILL:
                    return "Kill placed";
                case PROTECTED_KILL:
                    return "Blocked Kill"
                case FATAL_KILL:
                    return "Fatal Kill";
                default:
                    return "Attempted Kill";
            }
        }, 
        accompliceNames() {
            return this.event.accomplices.map(killer => killer.name).join(',');
        }
    }
}
</script>

<style scoped>
    .test {
        background-color: red;
        border-radius: 10%;
        width: 400px;
        height: 400px;
    }

</style>
