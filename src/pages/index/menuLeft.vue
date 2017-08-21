<template>
    <div class="menu-left">
        <h4 class="logo">Dev Toolbox</h4>
        <mu-list :value="currentRoute" @change="handleChange">
            <mu-list-item v-for="route in routes"
                          :key="route.path"
                          :title="route.name"
                          @click="$router.push(route.path)"
                          :value="route.path">
            </mu-list-item>
        </mu-list>
    </div>
</template>

<script>
    import { routes } from '../../router';

    export default {
        name : 'menuLeft',
        data() {
            return {
                currentRoute : this.$router.currentRoute.path,
                routes,
            };
        },
        methods : {
            handleChange() {
                this.currentRoute = this.$router.currentRoute.path;
            },
        },
    };
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "~styles/core";

    .menu-left {
        width: $tpl-left-column-width;
        float: left;
        height: 100%;
        background-color: $tpl-left-column-background-color;
        // padding-top: $title-bar-height;

        .logo {
            text-align: center;
        }
    }
</style>
