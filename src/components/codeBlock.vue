<template>
    <div class="code-block">
        <code>{{ value }}</code>
        <v-btn icon
               class="copy white--text"
               v-clipboard="value"
               v-tooltip:left="{ html : 'Copy to Clipboard' }">
            <v-icon>content_copy</v-icon>
        </v-btn>
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
            background-color: color('grey', 'darken-4');
            color: color('grey', 'darken-2');
            padding: 12px 8px;
            border-radius: 2px;
            font-size: 12px;
            width: 100%;
        }

        .copy {
            position: absolute !important;
            top: -2px;
            right: 0;
            display: none;
        }

        &:hover {
            .copy {
                display: inherit;
            }
        }
    }
</style>
