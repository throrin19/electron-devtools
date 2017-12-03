import Vue from 'vue';
import VueRouter from 'vue-router';
import omit from 'lodash/omit';

import Home from './pages/modules/home.vue';
import Base64 from './pages/modules/base64.vue';
import Hash from './pages/modules/hash.vue';
import Json from './pages/modules/json.vue';
import Timestamps from './pages/modules/timestamps.vue';
import ObjectId from './pages/modules/objectId.vue';
import Ms from './pages/modules/ms.vue';

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
        icon        : 'tb-file-swap',
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
        icon        : 'tb-file-new',
    },
    {
        path        : '/timestamps',
        component   : Timestamps,
        name        : 'Timestamps',
        icon        : 'schedule',
    },
    {
        path        : '/objectid',
        component   : ObjectId,
        name        : 'ObjectId Timestamp',
        icon        : 'tb-server',
    },
    {
        path        : '/ms',
        component   : Ms,
        name        : 'Millisecond Converter',
        icon        : 'timer_10',
    },
];

const router = new VueRouter({
    mode : 'history',
    routes,
});

router.replace('/');

export const menu = omit(routes, 'component');

export default router;
