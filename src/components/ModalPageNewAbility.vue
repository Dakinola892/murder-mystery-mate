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
            <h1 class="ui header">
                <img :src="selectedAbility.icon" alt="test" id="ability-icon">
                {{ selectedAbility.name }}
                <!-- <div class="ui divider"></div> -->
                <span class="sub header" v-html="selectedAbility.description"></span>
            </h1>
        </div>
        <div class="ui divider"></div>
        <div class="ui center aligned container">

            <div v-if="selectedAbility.type == EventTypes.kill">
                <sui-dropdown :options="dropdownCharacters" placeholder="User" search selection v-model="formData.user" id="user"/> is placing 
                    <div class="ui right labeled input">
                        <input type="number" placeholder="No. of kills" v-model="formData.amount">
                        <div class="ui basic label">{{ killLabel }}</div>
                    </div> on  
                <sui-dropdown :options="dropdownCharacters" placeholder="Target" search selection v-model="formData.target"/>
            </div>

           <div v-if="selectedAbility.type == EventTypes.save">
                <sui-dropdown :options="dropdownCharacters" placeholder="User" search selection v-model="formData.user" id="user"/> is using 
                    <div class="ui right labeled input">
                        <input type="number" placeholder="No. of saves" v-model="formData.amount">
                        <div class="ui basic label">{{ saveLabel }}</div>
                    </div> on  
                <sui-dropdown :options="dropdownCharacters" placeholder="Target" search selection v-model="formData.target"/>
            </div>

            <div v-if="selectedAbility.type == EventTypes.protect">
                <sui-dropdown :options="dropdownCharacters" placeholder="User" search selection v-model="formData.user" id="user"/> is placing a protect  
                <sui-dropdown :options="dropdownCharacters" placeholder="Target" search selection v-model="formData.target"/>
            </div>

            <div v-if="selectedAbility.type == EventTypes.silence">
                <sui-dropdown :options="dropdownCharacters" placeholder="User" search selection v-model="formData.user" id="user"/> is silencing
                <sui-dropdown :options="dropdownCharacters" placeholder="Target" search selection v-model="formData.target"/> to stop them talking about
                <div class="ui input">
                    <input type="text" placeholder="Topic" v-model="formData.topic">
                </div>
            </div>

            <div class="ui form" v-if="selectedAbility.type == EventTypes.steal">
                <sui-dropdown :options="dropdownCharacters" placeholder="User" search selection v-model="formData.user" id="user"/> attempting to steal a 
                <span>
                    <div class="ui radio checkbox">
                        <input type="radio" name="stealTarget" :value="false" v-model="formData.stealingAbility" checked="true">
                        <label>Item</label>
                    </div>
                    <div class="ui radio checkbox">
                        <input type="radio" name="stealTarget" :value="true" v-model="formData.stealingAbility">
                        <label>Ability</label>
                    </div>
                </span>
                <sui-dropdown :options="itemsOrAbilities" placeholder="Target Item/Ability" search selection v-model="formData.targetItemOrAbility"/> <br> 
                from <sui-dropdown :options="dropdownCharacters" placeholder="Target" search selection v-model="formData.target"/>
            </div>

            <div v-if="selectedAbility.type == EventTypes.coerce">
                <sui-dropdown :options="dropdownCharacters" placeholder="User" search selection v-model="formData.user" id="user"/> is attempting to Coerce  
                <sui-dropdown :options="dropdownCharacters" placeholder="Target" search selection v-model="formData.target"/> into using a 
                <sui-dropdown :options="dropdownAbilities" placeholder="Ability" search selection v-model="formData.targetItemOrAbility"/> on 
                <sui-dropdown :options="dropdownCharacters" :placeholder="useAbilityOn" search selection v-model="formData.target"/>
            </div>

            <div v-if="selectedAbility.type == EventTypes.truthtell">
                <sui-dropdown :options="dropdownCharacters" placeholder="User" search selection v-model="formData.user" id="user"/> is requesting a truthtell on  
                <sui-dropdown :options="dropdownCharacters" placeholder="Target" search selection v-model="formData.target"/>
            </div>

            <div class="ui form" v-if="selectedAbility.type == EventTypes.message">
                <sui-dropdown :options="dropdownCharacters" placeholder="User" search selection v-model="formData.user" id="user"/> wants to send a message to
                <sui-dropdown :options="dropdownCharacters" placeholder="Target" search selection v-model="formData.target"/>
                <div class="field">
                    <label>Message</label>
                    <textarea rows="2" style="margin-top: 0px; margin-bottom: 0px; height: 72px;"></textarea>
                </div>
            </div>

            <div class="ui form" v-if="selectedAbility.type == EventTypes.announcement">
                <sui-dropdown :options="dropdownCharacters" placeholder="User" search selection v-model="formData.user" id="user"/> wants an announcement made to all players.
                <div class="field">
                    <label>Message</label>
                    <textarea rows="2" style="margin-top: 0px; margin-bottom: 0px; height: 72px;"></textarea>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import EventTypes from "../EventTypes";

export default {
    name: "ModalPageNewAbility",
    computed: {
        useAbilityOn() {
            return this.formData.targetItemOrAbility ? "Target of " + this.abilityNames[this.formData.targetItemOrAbility] : "Secondary Target";
        },
        killLabel() {
            return this.formData.amount == 1 ? "kill" : "kills";
        },
        saveLabel() {
            return this.formData.amount == 1 ? "save" : "saves";
        },
        selectedAbility() {
            return this.abilties[this.abilityType || 0];
        },
        abilityNames() {
            return this.abilties.map(ability => ability.text);
        },
        dropdownAbilities() {
            return this.abilties.map(ability => ({
                text: ability.name,
                value: ability.type
            }));
        },
        dropdownItems() {
            return this.$store.state.items.map(item => ({
                text: item.name,
                value: item.id
            }));
        },
        dropdownCharacters() {
            return this.$store.state.characters.map(character => ({
                text: character.name,
                value: character.id
            }));
        },
        itemsOrAbilities() {
            return this.formData.stealingAbility ? this.dropdownAbilities : this.dropdownItems;
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
                isSuccessfull: null,
                question: null,
                answer: null,
                message: null
            },
            abilties: [
                {
                    name: "Kill", 
                    type: EventTypes.kill, 
                    description: "When a Player places a <strong>Kill</strong> on another player, the targeted player will be <i>dying</i> for the next 15 minutes. If the kill is not stopped by a Save or other ability, after 15 minutes, the player will have one final chance to be saved. If no-one saves them, the targeted player will <i>Die</i> and no longer be an active character in the mystery. A player can place multiple kills at once, and a target only needs to have one active kill on them to die.  Note, if a kill is placed on a target which is <i>protected</i>, the kill will be <i>blocked</i> and the target won't be affected.",
                    icon: require("../assets/noun_733622_cc.svg")
                },
                {
                    name: "Save", 
                    type: EventTypes.save,
                    description: "<strong>Save</strong> can be used on a player who is <i>dying</i> at least once. Using a save nullifies one kill on the target player.",
                    icon: require("../assets/noun_1436968_cc.svg")
                },
                {
                    name: "Protect",
                    type: EventTypes.protect,
                    description: "Using <strong>Protect</strong> on a player, <i>protects</i> from any kills placed on them for 15 minutes. Any kills placed on them are <i>blocked</i> and their affects are nullified. The <i>protected</i> player is not notified about if a protect is on them, nor any <i>blocked</i> kill attempts made on them. Players attempting to <strong>Kill</strong> a <i>protected</i> player will be notified that their kills failed.",
                    icon: require("../assets/noun_904417_cc.svg")
                },
                {
                    name: "Silence",
                    type: EventTypes.silence,
                    description: "Using <strong>Silence</strong> on a player, prohibits them from talking about a specific <i>topic</i> for 15 minutes. The target of the silence will be alerted when the silence starts, ends and the prohibited <i>topic</i>.",
                    icon: require("../assets/noun_1476127_cc.svg")
                },
                {
                    name: "Steal",
                    type: EventTypes.steal,
                    description: "Players request a <strong>Steal</strong> on another player and state the item/ability they are attempting to steal, the host will then return to them with the result. If <i>successful</i>, the target item/ability is added to the user of <strong>Steal</strong>. If <i>unsuccessful</i>, they have one more attempt to steal something from a player. After the second attempt, regardless of the outcome, the <strong>Steal</strong> is used up.",
                    icon: require("../assets/noun_1368_cc.svg")
                },
                {
                    name: "Coerce",
                    type: EventTypes.coerce,
                    description: "Players request a <strong>Coerce</strong> on another player, stating the ability they want the target of the <strong>Coerce</strong> to use, and the player for them to use it on. The host will then return to them with the result. If <i>successful</i>, the target ability will be used by the target of the coerce on a specified player. If <i>unsuccessful</i>, they have one more attempt to <strong>Coerce</strong>. After the second attempt, regardless of the outcome, the <strong>Coerce</strong> is used up.",
                    icon: require("../assets/noun_1160993_cc.svg")
                },
                {
                    name: "Truthtell",
                    type: EventTypes.truthtell,
                    description: "The user of <strong>Truthtell</strong> can ask the player can ask one question to a player of their choice, supervised by a host. The target of the <strong>Truthell</strong> must deliver an objectively truthful answer. The host can ask the target to give a clearer or more truthful answer if they believe the answer given is inadequate or objectively false.",
                    icon: require("../assets/noun_15280.svg")
                },
                {
                    name: "Message",
                    type: EventTypes.message,
                    description: "A player requests a <strong>Secret Message</strong> to be sent to a specified player. The message is delivered privately to target, and they are not informed of who sent the message.",
                    icon: require("../assets/noun_1788527_cc.svg")
                },
                {
                    name: "Announcement",
                    type: EventTypes.announcement,
                    description: "A player requests an <strong>Anonymous Announcement</strong> to be made to all players. An announcement is delievered by a host on behalf of the player, and the source of the annoncement is said to originate from an anonymous alias.",
                    icon: require("../assets/noun_144092_cc.svg")
                },
            ]
        }
    }   
}
</script>

<style>
#ability-icon {
    padding-right: 8px;
}
</style>


