<template>
    <sui-modal @clickAwayModal="$emit('closeModal')" :open="open">
        <modal-page-selector :post-type="postType" @page-change="currentPage = $event" ></modal-page-selector>
        <sui-modal-content>
            <modal-page-content :post-type="postType" :page-num="currentPage"></modal-page-content>
        </sui-modal-content>
    </sui-modal>
</template>

<script>
import ModalPageSelector from "./ModalPageSelector.vue";
import ModalPageContent from "./ModalPageContent.vue";

export default {
    
    components: {
        ModalPageSelector,
        ModalPageContent
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
        confirm() {
            this.confirmed = true,
            this.showModal = false
        }
    }
}
  
</script>

