<template>
    <sui-modal @clickAwayModal="$emit('closeModal')" :open="open">
        <modal-page-selector :post-type="postType" @page-change="currentPage = $event" ></modal-page-selector>
        <modal-page-content :post-type="postType" :page-num="currentPage" :confirm="confirmed"></modal-page-content>
        <modal-page-actions></modal-page-actions>
    </sui-modal>
</template>

<script>
import ModalPageSelector from "./ModalPageSelector.vue";
import ModalPageContent from "./ModalPageContent.vue";
import ModalPageActions from "./ModalPageActions.vue";

export default {
    name: "ModalNewEvent",
    components: {
        ModalPageSelector,
        ModalPageContent,
        ModalPageActions
    },
    props: {
        open: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            showModal: false,
            confirmed: false,
            postType: {
                ability: 0,
                custom: 1,
                note: 2
            },
            currentPage: 0,
        }
    },
    methods: {
        confirmInChild() {
            this.confirmed = true,
            this.showModal = false
        }
    }
}
  
</script>

