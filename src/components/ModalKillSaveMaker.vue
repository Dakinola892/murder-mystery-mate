<template>
    <div>
        <sui-dropdown :options="characters" placeholder="User" search selection @input="$emit('update:user', $event)" :value="user" id="user"/> is {{ usageVerb }} 
            <div class="ui right labeled input">
                <input type="number" :min="1" placeholder="No. of kills" @input="$emit('update:amount', amountNum($event))" :value="amount" id="amount-input">
                <div class="ui basic label" id="amount-label">{{ label }}</div>
            </div> on  
        <sui-dropdown :options="characters" placeholder="Target" search selection @input="$emit('update:target', $event)" :value="target" id="target"/>
    </div>
</template>

<script>
export default {
    name: "ModalKillSaveMaker",
    props: {
        characters: Array,
        isKill: Boolean,
        user: Number,
        target: Number,
        amount: Number
    },
    methods: {
        amountNum(event) {
            return parseInt(event.target.value, 10);
        }
    },
    computed: {
        label() {
            if(this.isKill) {
                return this.amount == 1 ? "kill" : "kills";
            } else {
                 return this.amount == 1 ? "save" : "saves";
            }
        }, 
        usageVerb() {
            return this.isKill ? "placing" : "using";
        }
    },
    
}
</script>

