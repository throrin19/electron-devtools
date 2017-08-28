import Vue from 'vue';
import VueRouter from 'vue-router';
import omit from 'lodash/omit';

import Home from './pages/modules/home.vue';
import Base64 from './pages/modules/base64.vue';
import Hash from './pages/modules/hash.vue';
import Json from './pages/modules/json.vue';

Vue.use(VueRouter);

const routes = [
    {
        path        : '/',
        component   : Home,
        name        : 'Home',
        icon        : 'home',
    },
    {
        path        : '/base64',
        component   : Base64,
        name        : 'Base64',
        icon        : 'format_bold',
    },
    {
        path        : '/hash',
        component   : Hash,
        name        : 'String Hash',
        icon        : 'vpn_key',
    },
    {
        path        : '/json',
        component   : Json,
        name        : 'JSON Viewer',
        icon        : 'developer_mode',
    },
];

export const menu = omit(routes, 'component');

export default new VueRouter({
    mode : 'history',
    routes,
});

