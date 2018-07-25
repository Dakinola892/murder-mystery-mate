<template>
    <sui-modal-content class="ui center aligned scrolling container">
        <component :is="currentPage"></component>
    </sui-modal-content>
</template>

<script>
import ModalPageNewAbility from "./ModalPageNewAbility.vue";
import ModalPageNewCustomEvent from "./ModalPageNewCustomEvent.vue";
import ModalPageNewNote from "./ModalPageNewNote.vue";

export default {
    
    name: "ModalPageContent",
    components: {
        ModalPageNewAbility,
        ModalPageNewCustomEvent,
        ModalPageNewNote
    },
    props: {
        pageNum: {
            type: Number,
            default: 0
        }, 
        postType: Object,
        confirm: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        currentPage() {
            switch(this.pageNum) {
                case this.postType.ability:
                    return ModalPageNewAbility;
                case this.postType.custom:
                    return ModalPageNewCustomEvent;
                case this.postType.note:
                    return ModalPageNewNote;
                default:
                    return ModalPageNewAbility;
            }
        }
    }
}
</script>

<style scoped>

</style>


