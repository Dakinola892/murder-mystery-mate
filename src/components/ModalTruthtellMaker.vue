<template>
    <div>
        <sui-dropdown :options="characters" placeholder="User" search selection @input="$emit('update:user', $event)" :value="user" id="user"/> {{ requestText }} a truthtell on
        <sui-dropdown :options="characters" placeholder="Target" search selection @input="$emit('update:target', $event)" :value="target" id="target"/>
        <br>
        <div class="ui checkbox" id="checkbox-confirm">
            <input id="checkbox-confirm-input" type="checkbox" name="confirm" @input="$emit('update:immediateConfirm', checkboxBoolValue($event))" :value="immediateConfirm" :checked="immediateConfirm">
            <label for="checkbox-confirm-input">Confirm Question and Answer</label>
        </div>
        <br>
        <div id="qa-input" v-if="immediateConfirm">
            <div class="field">
                <div class="ui fluid labeled input">
                    <div class="ui label">Question</div>
                    <input type="text" placeholder="Question asked by User" @input="$emit('update:question', $event.target.value)" :value="question">
                </div>
            </div>
            <div class="field">
                <div class="ui fluid labeled input">
                    <div class="ui label">Answer</div>
                    <input type="text" placeholder="Answer given by Target" @input="$emit('update:answer', $event.target.value)" :value="answer">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ModalTruthtellMaker",
    props: {
        characters: Array,
        user: Number,
        target: Number,
        question: String,
        answer: String,
        immediateConfirm: Boolean
    },
    computed: {
        requestText() {
            return this.immediateConfirm ? "used" : "is requesting";
        }
    },
    methods: {
        checkboxBoolValue(event) {
            return event.target.value === "false";
        }
    }
}
</script>

<style scoped>
#qa-input {
    margin-top: 16px;
}
</style>
