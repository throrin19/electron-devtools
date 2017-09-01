<template>
    <div class="timestamps">
        <info-block icon="info_outline">
            Ici vous pouvez saisir une date selon l'un des formats disponibles pour la convertir dans tous les autres formats. Contient la date actuelle par défaut.
        </info-block>
        <v-container grid-list-lg>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-card>
                        <v-card-text>
                            <v-select
                                :items="items"
                                v-model="item"
                                label="Select"
                                bottom
                            ></v-select>
                            <v-text-field
                                label="Unix Epoch (second)"
                                v-model="unixValue"
                                v-if="item === 'unix'"
                                :error="error !== null"
                                :error-messages="error ? [ error ] : []"
                            ></v-text-field>
                            <v-text-field
                                label="ISO 8601"
                                v-model="isoValue"
                                v-if="item === 'iso'"
                                :error="error !== null"
                                :error-messages="error ? [ error ] : []"
                            ></v-text-field>
                            <div v-if="item === 'human'">
                                <date-picker label="Date"></date-picker>
                                <time-picker label="time"></time-picker>
                            </div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn flat primary v-on:click="parseAction">Parse</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
                <v-flex xs12 v-if="result">
                    <v-card>
                        <v-card-title>Unix Epoch (second)</v-card-title>
                        <v-card-text>
                            <code-block :value="result.format('X')"></code-block>
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex xs12 v-if="result">
                    <v-card>
                        <v-card-title>ISO 8601</v-card-title>
                        <v-card-text>
                            <code-block :value="result.format()"></code-block>
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex xs12 v-if="result">
                    <v-card>
                        <v-card-title>Human readable</v-card-title>
                        <v-card-text>
                            <code-block :value="result.format('LLLL')"></code-block>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import moment from 'moment';
    import infoBlock from '../../components/infoBlock.vue';
    import codeBlock from '../../components/codeBlock.vue';
    import datePicker from '../../components/datePicker.vue';
    import timePicker from '../../components/timePicker.vue';

    export default {
        name        : 'timestamps',
        components  : {
            infoBlock,
            codeBlock,
            datePicker,
            timePicker,
        },
        data() {
            return {
                result : null,
                item   : 'unix',
                items  : [
                    { value : 'unix', text : 'Unix Epoch (seconds)' },
                    { value : 'human', text : 'Human readable' },
                    { value : 'iso', text : 'ISO 8601' },
                ],
                unixValue  : new Date().getTime() / 1000,
                isoValue   : new Date().toISOString(),
                humanValue : moment(),
                error      : null,
            };
        },
        methods : {
            parseAction() {
                this.error  = null;
                this.result = null;

                if (this.item === 'unix') {
                    if (!this.unixValue) {
                        this.error = 'This value is required';
                    }

                    this.result = moment.unix(this.unixValue);
                    return;
                }

                if (this.item === 'iso') {
                    if (!this.isoValue) {
                        this.error = 'This value is required';
                    }

                    this.result = moment(this.isoValue);
                    return;
                }

                if (this.item === 'human') {
                    if (!this.humanValue) {
                        this.error = 'This value is required';
                    }

                    this.result = this.humanValue;
                    return;
                }
            },
        },
    };
</script>

<style lang="scss" rel="stylesheet/scss">
</style>
