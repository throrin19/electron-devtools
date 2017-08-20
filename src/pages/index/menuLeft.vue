<template>
    <div class="menu-left">

    </div>
</template>

<script>
    export default {
        name : 'menuLeft',
    };
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "~styles/core";

    .menu-left {
        width: $tpl-left-column-width;
        float: left;
        height: 100%;
        background-color: $tpl-left-column-background-color;
        padding-top: $title-bar-height;
    }
</style>
