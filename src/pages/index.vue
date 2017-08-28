<template>
    <v-app
        height="415px"
        dark
        id="app"
        standalone
    >
        <drawer></drawer>
        <toolbar></toolbar>
        <main>
            <router-view></router-view>
        </main>
    </v-app>
</template>

<script>
    import toolbar from './index/toolbar.vue';
    import drawer from './index/drawer.vue';

    export default {
        namr        : 'App',
        components  : {
            toolbar,
            drawer,
            // titleBar,
            // menuLeft,
        },
    };
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
