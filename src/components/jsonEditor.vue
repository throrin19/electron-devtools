<template>
    <div
        ref="jsoneditor"
        class="json-editor"/>
</template>

<script>
import JsonEditor from 'jsoneditor';
import 'jsoneditor/dist/jsoneditor.css';

export default {
    name  : 'JsonEditor',
    props : {
        value   : {
            type : Object,
            default() {
                return {};
            },
        },
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
    watch : {
        value(val) {
            this.inputValue = val;
            this.editor.set(val);
        },
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

        .jsoneditor {
            border: 1px solid color('grey', 'darken-3');
            background-color: color('grey', 'darken-3');

            .jsoneditor-menu {
                background-color: color('grey', 'darken-4');
                border-bottom-color: color('grey', 'darken-4');
            }

            div.jsoneditor-readonly {
                color: color('grey', 'base');
            }

            div.jsoneditor-field,
            div.jsoneditor-value,
            div.jsoneditor td,
            div.jsoneditor th,
            div.jsoneditor textarea,
            .jsoneditor-schema-error {
                color: color('g-deep-blue', 'darken-3');
            }

            div.jsoneditor-value.jsoneditor-object,
            div.jsoneditor-value.jsoneditor-array {
                color: color('grey', 'darken-1');
            }

            div.jsoneditor-value.jsoneditor-boolean {
                color : color('orange', 'darken-1');
            }

            div.jsoneditor-value.jsoneditor-number {
                color : color('red', 'accent-2');
            }

            div.jsoneditor-value.jsoneditor-url,
            a.jsoneditor-value.jsoneditor-url,
            div.jsoneditor-value.jsoneditor-string {
                color: color('green', 'accent-4');
            }

            div.jsoneditor-value.jsoneditor-null {
                color: color('blue', 'accent-2');
            }

            div.jsoneditor-field {
              color: color('shades', 'white');
            }
        }
    }
</style>
