<template>
    <sui-modal @clickAwayModal="$emit('closeModal')" :open="open">
        <sui-modal-header>Edit Event</sui-modal-header>
        <sui-modal-content>
            <h1 class="ui header">Test</h1>
            <div class="ui center aligned container">
                <component :is="eventEditor" v-bind="eventData" v-on="dataChanges"></component>
            </div>
        </sui-modal-content>
        <sui-modal-actions>
            <sui-button floated="right" positive @click.native="toggle">Confirm Edit</sui-button>
        </sui-modal-actions>
    </sui-modal>
</template>

<script>
import Event from "../models/events/Event";
import EventTypes from "../EventTypes";

import ModalKillSaveMaker from "./ModalKillSaveMaker.vue";
import ModalProtectMaker from "./ModalProtectMaker.vue";
import ModalSilenceMaker from "./ModalSilenceMaker.vue";
import ModalStealMaker from "./ModalStealMaker.vue";
import ModalCoerceMaker from "./ModalCoerceMaker.vue";
import ModalTruthellMaker from "./ModalTruthtellMaker.vue";
import ModalMessageMaker from "./ModalMessageMaker.vue";

export default {
    name: "ModalEditEvent",
    props: {
        open: {
            type: Boolean,
            default: false
        },
        eventProp: Event
    },
    data() {
        return {
            event: {},
            eventData: {},
            dataChanges: {},
            eventEditor: null
        }
    },
    created() {
        this.event = Object.assign({}, this.eventProp);
    },
    methods: {
        updateUser(userId) {
            this.event.user = this.characters[userId];
        },
        updateTarget(targetId){
            this.event.target = this.characters[targetId];
        },
        updateAmount(amount) {
            this.event.amount = amount;
        },
        updateTopic(topic) {
            this.event.topic = topic;
        },
        updateTargetItemOrAbility(targetItemOrAbility) {
            this.event.targetItemOrAbility = targetItemOrAbility;
        },
        updateIsAbility(isAbility) {
            this.event.isAbility = isAbility
        },
        updateIsSuccessful(isSuccessful) {
            this.event.isSuccessful = isSuccessful
        },
        updateImmediateConfirm(immediateConfirm) {
            this.event.immediateConfirm = immediateConfirm;
        },
        updateSecondaryTarget(secondaryTarget) {
            this.event.secondaryTarget = secondaryTarget;
        },
        updateTargetAbility(targetAbility) {
            this.event.targetAbility = targetAbility;
        },
        updateQuestion(question) {
            this.event.question = question;
        },
        updateAnswer(answer) {
            this.event.answer = answer;
        },
        updateMessage(message) {
            this.event.message = message;
        }

    },
    computed: {
        availableToSteal() {
            return this.event.isAbility ? this.$store.getters.dropdownAbilities : this.$store.getters.dropdownItems
        },
        characters() {
            return this.$store.state.characters;
        }
    },
    watch: {
        event() {
            let props = { characters: this.$store.getters.dropdownCharacters, user: this.event.user.id, target: this.event.target.id };
            let eventHandlers = { "update:user": this.updateUser, "update:target": this.updateTarget };
            switch(this.event.type) {
                case EventTypes.kill:
                case EventTypes.save:
                    this.eventData = { ...props, isKill: this.event.type === EventTypes.kill, amount: this.event.amount };
                    this.eventEditor = ModalKillSaveMaker;
                    this.dataChanges = { ...eventHandlers, "update:amount": this.updateAmount };
                    break;
                case EventTypes.protect:
                    this.eventData = props;
                    this.eventEditor = ModalProtectMaker;
                    this.dataChanges = eventHandlers;
                    break;
                case EventTypes.silence:
                    this.eventData = { ...props, topic: this.event.topic };
                    this.dataChanges = { ...eventHandlers, "update:topic": this.updateTopic };
                    this.eventEditor = ModalSilenceMaker;
                    break;
                case EventTypes.steal:
                    this.eventData = { ...props, targetItemOrAbility: this.event.targetItemOrAbility, isAbility: this.event.isAbility, availableToSteal: this.availableToSteal, isSuccessful: this.event.isSuccessful, immediateConfirm: this.event.immediateConfirm };
                    this.dataChanges = { ...eventHandlers, "update:target-item-or-ability": this.updateTargetItemOrAbility, "update:is-ability": this.updateIsAbility, "update:immediate-confirm": this.updateImmediateConfirm, "update:is-successful": this.updateIsSuccessful };
                    this.eventEditor = ModalStealMaker;
                    break;
                case EventTypes.coerce:
                    this.eventData = { ...props, abilities: this.event.abilities, targetAbility: this.event.targetAbility, secondaryTarget: this.event.secondaryTarget, isSuccessful: this.event.isSuccessful, immediateConfirm: this.event.immediateConfirm };
                    this.dataChanges = { ...eventHandlers, "update:secondary-target": this.updateSecondaryTarget, "update:target-ability":this.updateTargetAbility, "update:immediate-confirm": this.updateImmediateConfirm, "update:is-successful": this.updateIsSuccessful };
                    this.eventEditor = ModalCoerceMaker;
                    break;
                case EventTypes.truthtell:
                    this.eventData = { ...props, question: this.event.question, answer: this.event.answer, immediateConfirm: this.event.immediateConfirm };
                    this.dataChanges = { ...eventHandlers, "update:question": this.updateQuestion, "update:answer": this.updateAnswer, "update:immediate-confirm": this.updateImmediateConfirm, "update:is-successful": this.updateIsSuccessful };
                    this.eventEditor = ModalTruthellMaker;
                    break;
                case EventTypes.message:
                    this.eventData = { ...props, message: this.event.message, isPrivate: this.event.isPrivate, immediateConfirm: this.event.immediateConfirm };
                    this.dataChanges = { ...eventHandlers, "update:message": this.updateMessage, "update:immediate-confirm": this.updateImmediateConfirm, "update:is-successful": this.updateIsSuccessful };
                    this.eventEditor = ModalMessageMaker;
                    break;
            }
        }, 
    }
}
</script>

<style>

</style>
