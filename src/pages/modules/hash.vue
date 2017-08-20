<template>
    <div class="page hash">
        <info-block icon="info_outline">
            String Hash is just a tool to generate cryptographics hash code from a string.
            It support most used command hash functions like MD5, SHA-1, SHA-256, ...
        </info-block>
        <mu-text-field
            hintText="String to hash"
            multiLine
            :rows="3"
            :rowsMax="6"
            fullWidth
            v-model="value"
            :errorText="error"
        />
        <div class="btn-bar">
            <mu-flat-button label="Hash" v-on:click="hashAction" secondary/>
        </div>
        <div class="result" v-if="result">
            <h5>Result</h5>

        </div>
    </div>
</template>

<script>
    import infoBlock from '../../components/infoBlock.vue';
    import codeBlock from '../../components/codeBlock.vue';

    export default {
        name        : 'Hash',
        components  : {
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
            hashAction() {
                if (!this.value) {
                    this.error = 'This field is required';
                    return;
                }
            },
        },
    };
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "~styles/core";

    .hash {
        .btn-bar {
            text-align: right;
        }
    }
</style>
