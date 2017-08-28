<template>
    <div class="json">
        <info-block icon="info_outline">
            You can parse a jsonString and explore this easilly.
        </info-block>
        <v-container grid-list-lg>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-card>
                        <v-card-title>
                            <v-text-field
                                label="JSON to pase"
                                v-model="value"
                                :error="error !== null"
                                :error-messages="error ? [ error ] : []"
                                multi-line
                                dark
                            ></v-text-field>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn flat class="blue--text" v-on:click="parseAction">Parse</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
                <v-flex xs12>
                    <v-card class="result" v-if="result">
                        <json-editor :options="options" :value="result"></json-editor>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import infoBlock from '../../components/infoBlock.vue';
    import jsonEditor from '../../components/jsonEditor.vue';

    export default {
        name        : 'JsonParser',
        components  : {
            jsonEditor,
            infoBlock,
        },
        data() {
            return {
                value   : null,
                error   : null,
                result  : null,
                options : {
                    mode   : 'view',
                    search : true,
                },
            };
        },
        methods : {
            parseAction() {
                this.result = null;
                this.error  = null;

                if (!this.value) {
                    this.error = 'This field is required';
                    return;
                }

                try {
                    this.result = JSON.parse(this.value);
                } catch (e) {
                    this.error = 'The JSON is invalid';
                }
            },
        },
    };
</script>

<style lang="scss" rel="stylesheet/scss">
    .json {
        .btn-bar {
            text-align: right;
        }
    }
</style>
