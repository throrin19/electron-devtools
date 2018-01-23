<template>
    <v-dialog
        persistent
        v-model="modal"
        lazy
        full-width>
        <v-text-field
            scope="activator"
            :label="label"
            v-model="inputValue"
            prepend-icon="event"
            readonly/>
        <v-date-picker
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
        </v-date-picker>
    </v-dialog>
</template>

<script>
export default {
    name  : 'DatePicker',
    props : {
        value : {
            type    : [String, Date, Object, Number],
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
            this.$emit('change', this.inputValue);
            this.$emit('input', this.inputValue);
            this.modal = false;
        },
    },
};
</script>
