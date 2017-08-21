import Vue from 'vue';
import VueRouter from 'vue-router';

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
    },
    {
        path        : '/base64',
        component   : Base64,
        name        : 'Base64',
    },
    {
        path        : '/hash',
        component   : Hash,
        name        : 'String Hash',
    },
    {
        path        : '/json',
        component   : Json,
        name        : 'JSON Viewer',
    },
];

export { routes };

export default new VueRouter({
    mode : 'history',
    routes,
});

