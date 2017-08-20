<template>
    <div class="info-block valign-wrapper">
        <mu-icon :size="25" :value="icon" v-if="icon"></mu-icon>
        <div class="message-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name    : 'infoBlock',
        props   : {
            icon : {
                type : String,
            },
        },
        data() {
            return {

            };
        },
    };
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    @import "~styles/core";

    .info-block {
        padding: 10px;
        border-left: 5px solid color('grey', 'base');
        margin-bottom: 20px;

        .mu-icon + .message-content {
            padding-left: 10px;
        }
    }
</style>
