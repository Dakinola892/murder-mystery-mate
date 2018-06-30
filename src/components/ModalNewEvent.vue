<template>
    <modal name="modal-record-new-event">
        <modal-page-selector :post-type="postType" @page-change="currentPage = $event" ></modal-page-selector>
        <modal-page-content :post-type="postType" :page-num="currentPage"></modal-page-content>
    </modal>
</template>

<script>
import ModalPageSelector from "./ModalPageSelector.vue";
import ModalPageContent from "./ModalPageContent.vue";

export default {
    
    components: {
        ModalPageSelector,
        ModalPageContent
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
            currentPage: 0
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

