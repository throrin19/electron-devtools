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



            <h6>MD5</h6>
            <code-block :value="result.md5"></code-block>
            <h6>SHA-1</h6>
            <code-block :value="result.sha1"></code-block>
            <h6>SHA-256</h6>
            <code-block :value="result.sha256"></code-block>
            <h6>SHA-512</h6>
            <code-block :value="result.sha512"></code-block>
            <h6>RIPEMD-160</h6>
            <code-block :value="result.rmd160"></code-block>
        </div>
    </div>
</template>

<script>
    import infoBlock from '../../components/infoBlock.vue';
    import codeBlock from '../../components/codeBlock.vue';
    import { remote } from 'electron';

    const hash = remote.require('./libs/hash.js');

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
                this.result = null;

                if (!this.value) {
                    this.error = 'This field is required';
                    return;
                }

                this.error  = null;
                this.result = {
                    md5     : hash.md5(this.value),
                    sha1    : hash.sha1(this.value),
                    sha256  : hash.sha256(this.value),
                    sha512  : hash.sha512(this.value),
                    rmd160  : hash.rmd160(this.value),
                };
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
