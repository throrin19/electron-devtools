<template>
    <v-dialog
        persistent
        v-model="modal"
        lazy
        full-width>
        <v-text-field
            slot="activator"
            :label="label"
            v-model="inputValue"
            prepend-icon="schedule"
            readonly />
        <v-time-picker
            v-model="inputValue"
            scrollable
            dark>
            <template slot-scope="{ save, cancel }">
                <v-card-actions>
                    <v-btn
                        flat
                        primary
                        @click="cancel">
                        Cancel
                    </v-btn>
                    <v-btn
                        flat
                        primary
                        @click="saveDialog">
                        Save
                    </v-btn>
                </v-card-actions>
            </template>
        </v-time-picker>
    </v-dialog>
</template>

<script>
export default {
    name  : 'TimePicker',
    props : {
        value : {
            type    : String,
            default : undefined,
        },
        label : {
            type    : String,
            default : undefined,
        },
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
