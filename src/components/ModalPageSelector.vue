<template>
    <sui-modal-header>
        <h1>Record New:</h1>    
        <div class="ui center aligned equal width grid">
            <template v-for="page in pages">
                <div class="column" :key="page.pageNum">
                    <div class="field">
                        <div class="ui radio checkbox">
                            <input type="radio" :checked="page.pageNum === currentPage" name="page" :value="page.pageNum" @input="$emit('page-change', page.pageNum)" :id="page.id">
                            <label :for="page.id">{{ page.name }}</label>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </sui-modal-header>
</template>

<script>
export default {
    name: "ModalPageSelector",
    props: {
        postType: Object
    },
    data() {
        return {
            pages: [
                {name: "Ability Usage", pageNum: this.postType.ability, id: "ability-usage"},
                {name: "Custom Mystery Event", pageNum: this.postType.custom, id: "custom-event"},
                {name: "Note", pageNum: this.postType.note, id: "note"}
            ],
            currentPage: this.postType.ability
        }
    }
}
</script>

<style scoped>
.ui.checkbox .box, .ui.checkbox label {
    font-size: 1.25em;
}
</style>
