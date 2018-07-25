<template>
    <div>
        <sui-dropdown :options="characters" placeholder="User" search selection @input="$emit('update:user', $event)" :value="user" id="user"/> is silencing
        <sui-dropdown :options="characters" placeholder="Target" search selection @input="$emit('update:target', $event)" :value="target" id="target"/> to stop them talking about
        <div class="ui input">
            <input type="text" placeholder="Topic" @input="$emit('update:topic', $event.target.value)" :value="topic" id="topic">
        </div>
    </div>
</template>

<script>
export default {
    name: "ModalSilenceMaker",
    props: {
        characters: Array,
        user: Number,
        target: Number,
        topic: String
    }
}
</script>

<style scoped>
#target {
    margin-right: 4px;
}
#topic {
    margin-left: 4px;
}
</style>
