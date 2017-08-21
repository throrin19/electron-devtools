<template>
    <div class="page json">
        <info-block icon="info_outline">
            You can parse a jsonString and explore this easilly.
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
            <mu-flat-button label="Parse" v-on:click="parseAction" secondary/>
        </div>
        <div class="result" v-if="result">
            <h5>Result</h5>
            <json-editor :options="options" :value="result"></json-editor>
        </div>
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
