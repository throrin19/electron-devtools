<template>
    <v-app
        height="415px"
        dark
        id="app"
        standalone>
        <drawer/>
        <toolbar/>
        <v-content id="app__content">
            <div
                id="app__scroller"
                :style="styles">
                <transition
                    name="fade-transition"
                    leave-class=""
                    leave-active-class="">
                    <router-view/>
                </transition>
            </div>
        </v-content>
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
    },
    computed : {
        styles() {
            const { bar, top, right, bottom, left } = this.$vuetify.application;

            return {
                top      : `${top + bar}px`,
                right    : `${right}px`,
                bottom   : `${bottom}px`,
                left     : `${left}px`,
            };
        },
    },
};
</script>

<style lang="scss" rel="stylesheet/scss">
#app {
    height: 100%;

    #app__content {
        height: 100%;
    }

    #app__scroller {
        position: absolute;
        overflow-y: auto;
        overflow-x: hidden;
        backface-visibility: hidden;
    }
}
</style>
