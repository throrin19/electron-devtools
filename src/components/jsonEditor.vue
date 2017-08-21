<template>
    <div ref="jsoneditor" class="json-editor"></div>
</template>

<script>
    import JsonEditor from 'jsoneditor';
    import 'jsoneditor/dist/jsoneditor.css';

    export default {
        name  : 'jsonEditor',
        props : {
            value : Object,
            options : {
                type    : Object,
                default() {
                    return {};
                },
            },
        },
        data() {
            return {
                inputValue : this.value,
            };
        },
        mounted() {
            this.editor = new JsonEditor(this.$refs.jsoneditor, this.options);
            this.editor.set(this.inputValue);
        },
    };
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "~styles/core";

    .json-editor {
        width: 100%;
    }
</style>
