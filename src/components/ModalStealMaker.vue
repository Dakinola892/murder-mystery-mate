<template>
    <div>
        <sui-dropdown :options="characters" placeholder="User" search selection @input="$emit('update:user', $event)" :value="user" id="user"/> is attempting to steal an
        <span>
            <div class="ui radio checkbox">
                <input type="radio" name="stealTarget" :value="false" @input="$emit('update:isAbility', boolValue($event))" checked>
                <label>Item</label>
            </div>
            <div class="ui radio checkbox" id="radio-ability">
                <input type="radio" name="stealTarget" :value="true" @input="$emit('update:isAbility', boolValue($event))">
                <label>Ability</label>
            </div>
        </span> 
        called <sui-dropdown :options="availableToSteal" placeholder="Target Item/Ability" search selection @input="$emit('update:targetItemOrAbility', $event)" :value="targetItemOrAbility" id="targetItemOrAbility"/> 
        <br>
        from <sui-dropdown :options="characters" placeholder="Target" search selection @input="$emit('update:target', $event)" :value="target" id="target"/>
        <br>
        <div class="ui checkbox" id="checkbox-confirm">
                <input type="checkbox" name="confirm" @input="$emit('update:immediateConfirm', checkboxBoolValue($event))" :value="immediateConfirm" :checked="immediateConfirm">
                <label>Confirm Success/Failure (Optional)</label>
        </div>
        <div v-if="immediateConfirm">
            <div class="success field">
                <div class="ui radio checkbox">
                    <input type="radio" name="stealSuccess" @input="$emit('update:isSuccessful', boolValue($event))" :value="true" id="confirm-success" :checked="isSuccessful">
                    <label for="confirm-success">Successful</label>
                </div>
            </div>
            <div class="success field">
                <div class="ui radio checkbox">
                    <input type="radio" name="stealSuccess" @input="$emit('update:isSuccessful', boolValue($event))" :value="false" id="confirm-fail" :checked="!isSuccessful">
                    <label for="confirm-fail">Unsuccessful</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ModalStealMaker",
    props: {
        characters: Array,
        user: Number,
        target: Number,
        targetItemOrAbility: Number,
        isAbility: Boolean,
        availableToSteal: Array,
        immediateConfirm: Boolean,
        isSuccessful: Boolean
    },
    methods: {
        boolValue(event) {
            return event.target.value === "true";
        },
        checkboxBoolValue(event) {
            return event.target.value === "false"
        }
    }
}
</script>

<style scoped>
#targetItemOrAbility {
    margin-left: 4px;
}
#radio-ability {
    margin-left: 8px;
}
#target {
    margin-top: 8px;
}
</style>
