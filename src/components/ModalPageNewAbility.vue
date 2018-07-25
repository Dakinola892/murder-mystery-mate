<template>
    <div>
        <div class="ui container">
            <sui-dropdown
                placeholder="Select Ability"
                selection
                :options="dropdownAbilities"
                v-model="abilityType"
            />
            <br>
            <h1 v-if="isSelection" class="ui header">
                <img :src="selectedAbility.icon" alt="test" id="ability-icon">
                {{ selectedAbility.name }}
                <!-- <div class="ui divider"></div> -->
                <span class="sub header" v-html="selectedAbility.description"></span>
            </h1>
        </div>
        <div v-if="isSelection" class="ui divider"></div>
        <div class="ui center aligned container">

            <modal-kill-save-maker v-if="isKillOrSave" 
            :characters="dropdownCharacters" :user.sync="formData.user" :target.sync="formData.target" :amount.sync="formData.amount" :is-kill="abilityType == EventTypes.kill">
            </modal-kill-save-maker>

            <modal-protect-maker v-if="abilityType == EventTypes.protect"
            :characters="dropdownCharacters" :user.sync="formData.user" :target.sync="formData.target" >
            </modal-protect-maker>

            <modal-silence-maker v-if="abilityType == EventTypes.silence"
            :characters="dropdownCharacters" :user.sync="formData.user" :target.sync="formData.target" :topic.sync="formData.topic">
            </modal-silence-maker>

            <modal-steal-maker v-if="abilityType == EventTypes.steal"
            :characters="dropdownCharacters" :user.sync="formData.user" :target.sync="formData.target" :target-item-or-ability.sync="formData.targetItemOrAbility" :is-ability.sync="formData.stealingAbility" :available-to-steal="itemsOrAbilities" :is-successful.sync="formData.isSuccessful" :immediate-confirm.sync="formData.immediateConfirm">
            </modal-steal-maker>

            <modal-coerce-maker v-if="abilityType == EventTypes.coerce"
            :characters="dropdownCharacters" :user.sync="formData.user" :target.sync="formData.target" :abilities="dropdownAbilities" :is-successful.sync="formData.isSuccessful" :target-ability.sync="formData.targetItemOrAbility" :secondary-target.sync="formData.secondaryTarget" :immediate-confirm.sync="formData.immediateConfirm">
            </modal-coerce-maker>

            <modal-truthtell-maker v-if="abilityType == EventTypes.truthtell"
            :characters="dropdownCharacters" :user.sync="formData.user" :target.sync="formData.target" :question.sync="formData.question" :answer.sync="formData.answer" :immediate-confirm.sync="formData.immediateConfirm">
            </modal-truthtell-maker>

            <modal-message-maker v-if="isMessage"
            :characters="dropdownCharacters" :user.sync="formData.user" :target.sync="formData.target" :message.sync="formData.message" :is-private="abilityType == EventTypes.message" :immediate-confirm.sync="formData.immediateConfirm">
            </modal-message-maker>

        </div>
    </div>
</template>

<script>
import { isEmpty } from "lodash";
import EventTypes from "../EventTypes";

import ModalKillSaveMaker from "./ModalKillSaveMaker.vue";
import ModalProtectMaker from "./ModalProtectMaker.vue";
import ModalSilenceMaker from "./ModalSilenceMaker.vue";
import ModalStealMaker from "./ModalStealMaker.vue";
import ModalCoerceMaker from "./ModalCoerceMaker.vue";
import ModalTruthtellMaker from "./ModalTruthtellMaker.vue";
import ModalMessageMaker from "./ModalMessageMaker.vue";

export default {
    name: "ModalPageNewAbility",
    components: {
        ModalKillSaveMaker,
        ModalProtectMaker,
        ModalSilenceMaker,
        ModalStealMaker,
        ModalCoerceMaker,
        ModalTruthtellMaker,
        ModalMessageMaker
    },
    computed: {
        isSelection() {
            return !(isEmpty(this.selectedAbility))
        },
        isKillOrSave() {
            return this.abilityType == EventTypes.kill || this.abilityType == EventTypes.save;
        },
        isMessage() {
            return this.abilityType == EventTypes.message || this.abilityType == EventTypes.announcement;
        },
        selectedAbility() {
            return this.abilities[this.abilityType] || {};
        },
        abilityNames() {
            return this.$store.getters.abilityNames;
        },
        dropdownAbilities() {
            return this.$store.getters.dropdownAbilities;
        },
        dropdownItems() {
            return this.$store.getters.dropdownItems;
        },
        dropdownCharacters() {
            return this.$store.getters.dropdownCharacters;
        },
        itemsOrAbilities() {
            return this.formData.stealingAbility ? this.dropdownAbilities : this.dropdownItems;
        },
        creatingNewEvent() {
            return this.$store.state.newEvent;
        }
    },
    watch: {
        creatingNewEvent() {
            if (this.creatingNewEvent) {
                const user = this.$store.state.characters[this.formData.user];
                const target = this.$store.state.characters[this.formData.target];
                let action = "";
                let payload = payload = { user: user, target: target };
                switch(this.abilityType) {
                    case EventTypes.kill:
                        action = 'addKill';
                        break;
                    case EventTypes.save:
                        action = 'addSave';
                        break;
                    case EventTypes.protect:
                        action = 'addProtect';
                        break;
                    case EventTypes.silence:
                        action = 'addSilence';
                        payload.topic = this.formData.topic;
                        break;
                    case EventTypes.steal:
                        action = 'addProtect';
                        payload.targetItemOrAbility = this.formData.targetItemOrAbility;
                        payload.immediateConfirm = this.formData.immediateConfirm;
                        payload.isSuccessful = this.formData.isSuccessful;
                        break;
                    case EventTypes.coerce:
                        action = 'addCoerce';
                        payload.targetAbility = this.formData.targetItemOrAbility;
                        payload.immediateConfirm = this.formData.immediateConfirm;
                        payload.isSuccessful = this.formData.isSuccessful;
                        payload.secondaryTarget = this.formData.secondaryTarget;
                        break;
                    case EventTypes.truthtell:
                        action = 'addProtect';
                        payload.immediateConfirm = this.formData.immediateConfirm;
                        payload.question = this.formData.question;
                        payload.answer = this.formData.answer;
                        break;
                    case EventTypes.message:
                    case EventTypes.announcement:
                        action = 'addMessage';
                        payload.immediateConfirm = this.formData.immediateConfirm;
                        payload.message = this.formData.message;
                        payload.answer = this.formData.answer;
                        if (this.abilityType == EventTypes.announcement) { payload.target = "all Players" }
                        break;
                }
                this.$store.dispatch(action, payload);
            }
        }
    },
    data() {
        return {
            EventTypes: EventTypes,
            abilityType: null,
            formData: {
                user: null,
                target: null,
                amount: null,
                topic: null,
                stealingAbility: null,
                targetItemOrAbility: null,
                secondaryTarget: null,
                immediateConfirm: null,
                isSuccessful: null,
                question: null,
                answer: null,
                message: null
            },
            abilities: this.$store.state.abilities
        }
    }   
}
</script>

<style>
#ability-icon {
    padding-right: 8px;
}

#user, #amount-label {
    margin-right: 4px;
}

#amount-input, #target {
    margin-left: 8px;
}

#checkbox-confirm {
    margin-top: 16px;
    margin-bottom: 8px;
}
.success, .field {
    margin-bottom: 4px;
}
</style>


