<template>
    <div class="ui form">
        <sui-dropdown :options="characters" placeholder="User" search selection @input="$emit('update:user', $event)" :value="user" id="user"/> wants 
        <span v-if="isPrivate">a message delivered to</span>
        <sui-dropdown v-if="isPrivate" :options="characters" placeholder="Target" search selection @input="$emit('update:target', $event)" :value="target" id="target"/>
        <span v-else>an announcement made to all players.</span>
        <div class="field" id="message">
            <label>Message</label>
            <textarea rows="2" @input="$emit('update:message', $event.target.value)"></textarea>
        </div>
        <br>
        <div class="ui checkbox" id="checkbox-confirm">
            <input type="checkbox" name="confirm" @input="$emit('update:immediateConfirm', boolValue($event))" :value="immediateConfirm" :checked="immediateConfirm">
            <label>Confirm Sent</label>
        </div>
    </div>
</template>

<script>
export default {
    name: "ModalMessageMaker",
    props: {
        characters: Array,
        user: Number,
        target: Number,
        message: String,
        isPrivate: Boolean,
        immediateConfirm: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        boolValue(event) {
            return event.target.value === "false";
        }
    }
}
</script>

<style scoped>
#message {
    margin-top: 16px;
    height: 72px;
}

#checkbox-confirm {
    margin-top: 0px;
    margin-bottom: 0px;
}
</style>
