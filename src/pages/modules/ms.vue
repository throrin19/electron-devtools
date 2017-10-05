<template>
    <div class="ms">
        <info-block icon="info_outline">
            Allows you to convert any length of time in milliseconds. Using the ms library.
            Example: "1 hour" will give 3600000 milliseconds
        </info-block>
        <v-container grid-list-lg>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-card>
                        <v-card-title>
                            <v-text-field
                                label="Time to convert"
                                v-model="value"
                                :error="error !== null"
                                :error-messages="error ? [ error ] : []"
                                dark
                            ></v-text-field>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn flat primary v-on:click="convertAction">Convert</v-btn>
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
    import ms from 'ms';
    import infoBlock from '../../components/infoBlock.vue';
    import codeBlock from '../../components/codeBlock.vue';

    export default {
        name        : 'ms',
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
            convertAction() {
                this.result = null;

                if (!this.value) {
                    this.error = 'This field is required';
                    return;
                }

                this.error  = null;
                this.result = ms(this.value);

                if (!this.result) {
                    this.error = 'String format is invalid';
                }
            },
        },
    };
</script>

<style>

</style>
