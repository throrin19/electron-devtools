<template>
    <div id="app">
        <title-bar/>
        <menu-left/>
    </div>
</template>

<script>
    import titleBar from '../components/titleBar.vue';
    import menuLeft from './index/menuLeft.vue';

    export default {
        namr        : 'App',
        components  : {
            titleBar,
            menuLeft,
        },
    };
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    @import "~styles/core";

    #app {
        height: 100%;
    }
</style>
