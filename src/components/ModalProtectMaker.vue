<template>
    <div>
        <sui-dropdown :options="characters" placeholder="User" search selection @input="$emit('update:user', $event)" :value="user" id="user"/> is placing a protect on
        <sui-dropdown :options="characters" placeholder="Target" search selection @input="$emit('update:target', $event)" :value="target" id="target"/>
    </div>
</template>

<script>
export default {
    name: "ModalProtectMaker",
    props: {
        characters: Array,
        user: Number,
        target: Number
    }
}
</script>

