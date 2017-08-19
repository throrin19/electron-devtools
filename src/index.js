import Vue from 'vue';
import App from './pages/index.vue';

import './stylesheets/style.scss';

new Vue({
    el     : '#app',
    render : h => h(App),
});
