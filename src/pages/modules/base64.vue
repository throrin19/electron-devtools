<template>
    <div class="page base64">
        <info-block icon="info_outline">
            Vous pouvez encoder la String que vous voulez en base64 ou bien décoder une String base64.
        </info-block>
        <mu-text-field
            hintText="Texte ou base64"
            multiLine
            :rows="3"
            :rowsMax="6"
            fullWidth
            v-model="value"
            :errorText="error"
        />
        <div class="btn-bar">
            <mu-flat-button label="Encode" v-on:click="encodeAction" secondary/>
            <mu-flat-button label="Decode" v-on:click="decodeAction" secondary/>
        </div>
        <div class="result" v-if="result">
            <h5>Result</h5>
            <code-block :value="result"></code-block>
        </div>
    </div>
</template>

<script>
    import infoBlock from '../../components/infoBlock.vue';
    import codeBlock from '../../components/codeBlock.vue';

    export default {
        name       : 'base64',
        components : {
            infoBlock,
            codeBlock,
        },
        data() {
            return {
                result : null,
                value  : null,
                error  : null,
            };
        },
        methods : {
            encodeAction() {
                this.result  = null;

                if (!this.value) {
                    this.error = 'This field is required';
                    return;
                }

                this.error  = null;
                this.result = btoa(unescape(encodeURIComponent(this.value)));
            },
            decodeAction() {
                this.result = null;

                if (!this.value) {
                    this.error = 'This field is required';
                    return;
                }

                try {
                    this.error  = null;
                    this.result = decodeURIComponent(escape(window.atob(this.value)));
                } catch (e) {
                    this.error = 'This string is not a correct base64';
                }
            },
        },
    };
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "~styles/core";

    .base64 {
        .btn-bar {
            text-align: right;
        }

        .result {
            word-wrap: break-word;
        }
    }
</style>
