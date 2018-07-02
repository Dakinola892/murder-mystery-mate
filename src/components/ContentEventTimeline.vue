<template>
    <div class="ui container">
        <div class="ui container">
            <button class="ui large right labeled icon button" id="btn-filter">
                <i class="icon filter"/>Filter
            </button>
            <button class="ui large left labeled icon red button" id="btn-new-event" @click="showModal = !showModal">
                <i class="icon plus"/>Record New Event
            </button>
        </div>
        <div class="ui large feed container">
            <component v-for="event in events" :key="event.id" :is="eventType(event.type)" v-bind:event="event"></component>
        </div>
        <modal-new-event @closeModal="showModal = false"  :open="showModal"></modal-new-event>
    </div>
</template>

<script>
import EventTypes from "../EventTypes";

import Item from "../models/Item";

import _ from 'lodash';

import Kill from "../models/events/abilities/Kill";
import Save from "../models/events/abilities/Save";
import Protect from "../models/events/abilities/Protect";
import Silence from "../models/events/abilities/Silence";
import Steal from "../models/events/abilities/Steal";
import Truthtell from "../models/events/abilities/Truthtell";
import Coerce from "../models/events/abilities/Coerce";
import Message from "../models/events/abilities/Message";

import EventKill from "./EventKill.vue";
import EventSave from "./EventSave.vue";
import EventProtect from "./EventProtect.vue";
import EventSilence from "./EventSilence.vue";
import EventSteal from "./EventSteal.vue";
import EventTruthtell from "./EventTruthtell.vue";
import EventCoerce from "./EventCoerce.vue";
import EventMessage from "./EventMessage.vue";
import ModalNewEvent from "./ModalNewEvent.vue";

let testKill = new Kill(0, "Annie Adams", "Carrie Cross", "00:31:57", true, 384);
let testSave = new Save(1, "Fred Farnsworth", "Carrie Cross", "00:39:19", false, testKill);
testKill.outcome = testSave;

let testKill2 = new Kill(2, "Annie Adams", "Carrie Cross", "00:41:26", true, 554);
let testSave2 = new Save(3, "Fred Farnsworth", "Carrie Cross", "00:42:19", false, testKill);
testKill2.outcome = testSave2;

let testProtect = new Protect(4, "David Downs", "Emma Ericson", "00:47:06", false, 134, [testKill, testKill2]);
let testSilence = new Silence(5, "Barry Bonds", "David Downs", "00:50:18", true, 147, "What he saw last night");

let testSteal = new Steal(6, "Carrie Cross", "Annie", "01:00:37", true, "01:09:21", "Kill");
let testSteal2 = new Steal(7, "Gary Geurich", "Annie Adams", "01:00:37", true, "01:09:21", new Item("Ruby Necklace", "Annie Adams", [], true));
testSteal.isActive = false;
testSteal.isSuccessful = true;

let testTruthtell = new Truthtell(8, "Emma Ericson", "Barry Bonds", "01:11:28", true, "");
testTruthtell.isActive = false;
testTruthtell.confirmationTime = "01:12:27";
testTruthtell.question = "What did you see last night";
testTruthtell.answer = "A hooded figure";

let testCoerce = new Coerce(9, "David Downs", "Gary Geurich", "01:13:12", true, "", "Save", "Carrie Cross");
testCoerce.isActive = false;
testCoerce.isSuccessful = true;

let testMessage = new Message(10, "Gary Geurchich", undefined, "01:18:19", true, "01:12:00", "I love you guys");
let testMessage2 = new Message(11, "Gary Geurchich", "Harry Hunt", "01:20:10", true, "01:21:52", "except you");
testMessage.isActive = false;

export default {
    name: "ContentEventTimeline",
    data() {
        return {
            showModal: false,
            confirmed: true,
            postType: {
                ability: 0,
                custom: 1,
                note: 2
            },
            currentPage: 0,
            events: [testKill, testSave, testKill2, testSave2, testProtect, testSilence, testSteal, testSteal2, testTruthtell, testCoerce, testMessage, testMessage2]
        }
    },
    created() {
        console.log(_.isEmpty() ? 'Lodash is available here!' : 'Uh oh..');
    },
    components: {
        ModalNewEvent
    },
    methods: {
        confirm () {
            this.confirmed = true;
            this.showModal = false;
        },
        print(event) {
            console.log(event);
            console.log(typeof event);
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
    }
}
</script>

<style scoped>
    #btn-filter {
        margin-right: 20px;
        padding-right: 100px;
        padding-left: 100px;
    }

    modal {
        margin: 50%;
        margin-top: 0px;
    }
</style>