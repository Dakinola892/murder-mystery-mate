<template>
    <form action="" class="ui form">
        <div class="inline fields">
            <label>Record New:</label>
            <template v-for="page in pages">
                <div class="field" :key="page.pageNum">
                    <div class="ui radio checkbox">
                        <input type="radio" name="page" :value="page.pageNum" @input="$emit('page-change', page.pageNum)">
                        <label>{{ page.name }}</label>
                    </div>
                </div>
            </template>
        </div>
    </form>
</template>

<script>
export default {
    name: "ModalPageSelector",
    props: {
        postType: {
            type: Object
        }
    },
    data() {
        return {
            pages: [
                {name: "Ability Usage", pageNum: this.postType.ability},
                {name: "Custom Mystery Event", pageNum: this.postType.custom},
                {name: "Note", pageNum: this.postType.note}
            ],
            currentPage: this.postType.ability
        }
    }
}
</script>

