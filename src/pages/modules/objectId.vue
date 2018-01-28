<template>
    <div class="objectid">
        <info-block icon="info_outline">
            You can extract the timestamp of an ObjectId
        </info-block>
        <v-container grid-list-lg>
            <v-layout
                row
                wrap>
                <v-flex xs12>
                    <v-card>
                        <v-card-title>
                            <v-text-field
                                label="ObjectId"
                                v-model="value"
                                :error="error !== null"
                                :error-messages="error ? [ error ] : []"
                                dark
                            />
                        </v-card-title>
                        <v-card-actions>
                            <v-btn
                                flat
                                primary
                                @click="parseAction">
                                Extract timestamp
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
                <v-flex
                    xs12
                    v-if="result">
                    <v-card>
                        <v-card-title>Unix Epoch (second)</v-card-title>
                        <v-card-text>
                            <code-block :value="result.format('X')"/>
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex
                    xs12
                    v-if="result">
                    <v-card>
                        <v-card-title>ISO 8601</v-card-title>
                        <v-card-text>
                            <code-block :value="result.format()"/>
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex
                    xs12
                    v-if="result">
                    <v-card>
                        <v-card-title>Human readable</v-card-title>
                        <v-card-text>
                            <code-block :value="result.format('LLLL')"/>
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

export default {
    name       : 'ObjectId',
    components : {
        infoBlock,
        codeBlock,
    },
    data() {
        return {
            validator : new RegExp('^[0-9a-fA-F]{24}$'),
            value     : null,
            error     : null,
            result    : null,
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

            if (!this.validator.test(this.value)) {
                this.error = 'This is not a correct ObjectId';
                return;
            }

            this.result = moment.utc(parseInt(this.value.substring(0, 8), 16) * 1000);
        },
    },
};
</script>

<style lang="scss">
</style>
