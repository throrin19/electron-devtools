<template>
    <v-navigation-drawer
        height="100%"
        clipped
        persistent
        permanent
    >
        <v-list dense>
            <v-list-tile v-for="item in items" :key="item.name" :to="item.path" ripple exact>
                <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>
                        {{ item.name }}
                    </v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    import { menu } from '../../router';

    export default {
        name  : 'Drawer',
        data() {
            return {
                items  : menu,
            };
        },
    };
</script>

<style lang="scss" rel="stylesheet/scss">
</style>
