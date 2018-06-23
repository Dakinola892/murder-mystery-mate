<template>
    <div class="event">
        <div class="label test">
            <img src="../assets/noun_733622_cc.svg">
            Kill
        </div>
        <div class="content">
            <div class="date">{{ event.startTime }}</div>
            <div class="summary"> <span v-html="headlineMessage"></span></div>
            <div class="extra text">{{ outcomeMessage }} <a></a> </div>
        </div>
  </div>
</template>

<script>
import Kill from "../models/events/abilities/Kill";
import Save from "../models/events/abilities/Save";
import Protect from "../models/events/abilities/Protect";
import Death from "../models/events/Death";
import {isEmpty} from "../../node_modules/lodash/isEmpty.js"

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
            if (outcomeEvent === {}) { return ACTIVE_KILL; }

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
                    return `Saved by ${this.event.outcome.user}`;
                case PROTECTED_KILL:
                    return `Protected by ${this.event.outcome.user}`;
                case FATAL_KILL:
                    let otherKillers = event.accomplices ? ` and ${event.accomplices}` : "";
                    return `Killed by ${event.murderer}` + otherKillers;
                case FAILED_KILL:
                    return `Stopped by ${this.event.outcome.user}`;
                default:
                    return "";
            }
        },
        headlineMessage() {
            switch(this.state) {
                case ACTIVE_KILL:
                    return `Kill placed on <strong>${this.event.target}</strong> by <strong>${this.event.user}</strong>`;
                case PROTECTED_KILL:
                    return `Blocked Kill on <strong>${this.event.target}</strong> by <strong>${this.event.user}</strong>`;
                case FATAL_KILL:
                    return `Fatal Kill on <strong>${this.event.target}</strong>`;
                default:
                    return `Attempted Kill on <strong>${this.event.target}</strong> by <strong>${this.event.user}</strong>`;
            }
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
