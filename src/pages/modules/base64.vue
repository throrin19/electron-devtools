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
        />
        <div class="btn-bar">
            <mu-flat-button label="Encode" v-on:click="encodeAction" secondary/>
            <mu-flat-button label="Decode" v-on:click="decodeAction" secondary/>
        </div>
        <div class="result" v-if="result">
            {{ result }}
        </div>
    </div>
</template>

<script>
    import infoBlock from '../../components/infoBlock.vue';

    export default {
        name : 'base64',
        components : {
            infoBlock,
        },
        data() {
            return {
                result : null,
                value : null,
            };
        },
        methods : {
            encodeAction() {
                this.result = btoa(unescape(encodeURIComponent(this.value)));
            },
            decodeAction() {
                this.result = decodeURIComponent(escape(window.atob(this.value)));
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
    }
</style>
