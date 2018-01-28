<template>
    <div class="info-block valign-wrapper">
        <v-icon
            class="pr-2"
            v-if="icon">
            {{ icon }}
        </v-icon>
        <div class="message-content">
            <slot/>
        </div>
    </div>
</template>

<script>
export default {
    name    : 'InfoBlock',
    props   : {
        icon : {
            type    : String,
            default : undefined,
        },
    },
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    @import "~styles/core";

    .info-block {
        padding: 15px;
        background-color: color('grey', 'darken-4');
    }
</style>
