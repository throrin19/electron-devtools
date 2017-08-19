<template>
    <div id="app">
        <title-bar></title-bar>
        <div class="content-left">

        </div>
    </div>
</template>

<script>
    import titleBar from '../components/titleBar.vue';

    export default {
        namr        : 'App',
        components  : {
            titleBar,
        },
    };
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    @import "~styles/core";

    #app {
        height: 100%;
        background-color: color('g-deep-blue', 'base');
    }

    .content-left {
        width: 30%;
        float: left;
        height: 100%;
        background-color: color('purple', 'darken-4');
        margin-bottom: -4000px;
        padding-bottom: 4000px;
    }
</style>
