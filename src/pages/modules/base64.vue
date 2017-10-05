<template>
    <div class="base64">
        <info-block icon="info_outline">
            You can either encode the String you want to base64 or decode a base64 String.
        </info-block>
        <v-container grid-list-lg>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-card>
                        <v-card-title>
                            <v-text-field
                                label="Text or Base64"
                                v-model="value"
                                :error="error !== null"
                                :error-messages="error ? [ error ] : []"
                                multi-line
                                dark
                            ></v-text-field>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn flat primary v-on:click="encodeAction">Encode</v-btn>
                            <v-btn flat primary v-on:click="decodeAction">Decode</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
                <v-flex xs12>
                    <v-card class="result" v-if="result">
                        <v-card-title>
                            <div class="headline">Result</div>
                        </v-card-title>
                        <v-card-text>
                            <code-block :value="result"></code-block>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
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
                console.log('decode');
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
    }
</style>
