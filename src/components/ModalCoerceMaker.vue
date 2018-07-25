<template>
    <div>
        <sui-dropdown :options="characters" placeholder="User" search selection @input="$emit('update:user', $event)" :value="user" id="user"/> is attempting to coerce
        <sui-dropdown :options="characters" placeholder="Target" search selection @input="$emit('update:target', $event)" :value="target" id="target"/> into using a
        <sui-dropdown :options="abilities" placeholder="Target Ability" search selection @input="$emit('update:targetAbility', $event)" :value="targetAbility" id="target-ability"/> on  
        <sui-dropdown :options="characters" placeholder="Secondary Target" search selection @input="$emit('update:secondaryTarget', $event)" :value="secondaryTarget" id="secondary-target"/>
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
    name: "ModalCoerceMaker",
    props: {
        characters: Array,
        abilities: Array,
        user: Number,
        target: Number,
        secondaryTarget: Number,
        targetAbility: Number,
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
#target-ability {
    margin-left: 4px;
    margin-right: 4px;
}

#target {
    margin-right: 4px;
}

#secondary-target {
    margin-top: 8px;
}
</style>
