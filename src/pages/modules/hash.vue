<template>
    <div class="hash">
        <info-block icon="info_outline">
            String Hash is just a tool to generate cryptographics hash code from a string.
            It support most used command hash functions like MD5, SHA-1, SHA-256, ...
        </info-block>
        <v-container grid-list-lg>
            <v-layout
                row
                wrap>
                <v-flex xs12>
                    <v-card>
                        <v-card-title>
                            <v-text-field
                                label="String to hash"
                                v-model="value"
                                :error="error !== null"
                                :error-messages="error ? [ error ] : []"
                                multi-line
                                dark />
                        </v-card-title>
                        <v-card-actions>
                            <v-btn
                                flat
                                primary
                                @click="hashAction">
                                Hash
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
                <v-flex xs12>
                    <v-card
                        class="result"
                        v-if="result">
                        <v-card-title>
                            <div class="headline">MD5</div>
                        </v-card-title>
                        <v-card-text>
                            <code-block :value="result.md5"/>
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex xs12>
                    <v-card
                        class="result"
                        v-if="result">
                        <v-card-title>
                            <div class="headline">SHA-1</div>
                        </v-card-title>
                        <v-card-text>
                            <code-block :value="result.sha1"/>
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex xs12>
                    <v-card
                        class="result"
                        v-if="result">
                        <v-card-title>
                            <div class="headline">SHA-256</div>
                        </v-card-title>
                        <v-card-text>
                            <code-block :value="result.sha256"/>
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex xs12>
                    <v-card
                        class="result"
                        v-if="result">
                        <v-card-title>
                            <div class="headline">SHA-512</div>
                        </v-card-title>
                        <v-card-text>
                            <code-block :value="result.sha512"/>
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex xs12>
                    <v-card
                        class="result"
                        v-if="result">
                        <v-card-title>
                            <div class="headline">RIPEMD-160</div>
                        </v-card-title>
                        <v-card-text>
                            <code-block :value="result.rmd160"/>
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
