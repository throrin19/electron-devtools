<template>
    <div class="code-block">
        <code>{{ value }}</code>
        <mu-icon-button icon="content_copy"
                        v-on:click="copyAction"
                        v-clipboard="value"
                        v-tooltip.left="'Copy to Clipboard'"
        />
    </div>
</template>

<script>
    export default {
        name    : 'codeBlock',
        props   : {
            value : String,
        },
        methods : {
            copyAction() {

            },
        },
    };
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    @import "~styles/core";

    .code-block {
        position: relative;

        code {
            word-wrap: break-word;
            display: block;
            background-color: color('g-deep-blue', 'lighten-2');
            color: color('g-deep-blue', 'accent-1');
            padding: 12px 8px;
            border-radius: 2px;
            font-size: 12px;
        }

        .mu-icon-button {
            position: absolute;
            top: 0;
            right: 0;
            display: none;
        }

        &:hover {
            .mu-icon-button {
                display: inherit;
            }
        }
    }
</style>
