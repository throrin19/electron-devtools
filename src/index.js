import Vue from 'vue';
import Vuetify from 'vuetify';
import Clipboard from 'v-clipboard';


import App from './pages/index.vue';
import router from './router';

// import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'vuetify/dist/vuetify.min.css';
import './stylesheets/style.scss';

Vue.use(Clipboard);
Vue.use(Vuetify);

new Vue({
    router,
    el     : '#app',
    render : h => h(App),
});
