<template>
    <v-dialog
        persistent
        v-model="modal"
        lazy
        full-width
    >
        <v-text-field
            slot="activator"
            :label="label"
            v-model="inputValue"
            prepend-icon="schedule"
            readonly
        ></v-text-field>
        <v-time-picker v-model="inputValue" scrollable dark >
            <template scope="{ save, cancel }">
                <v-card-actions>
                    <v-btn flat primary v-on:click="cancel">Cancel</v-btn>
                    <v-btn flat primary v-on:click="saveDialog">Save</v-btn>
                </v-card-actions>
            </template>
        </v-time-picker>
    </v-dialog>
</template>

<script>
    export default {
        name  : 'timePicker',
        props : {
            value : String,
            label : String,
        },
        data() {
            return {
                inputValue : this.value,
                modal      : false,
            };
        },
        methods : {
            saveDialog() {
                this.modal = false;
                this.$emit('change', this.inputValue);
                this.$emit('input', this.inputValue);
            },
        },
    };
</script>

<style lang="scss" rel="stylesheet/scss">
</style>
