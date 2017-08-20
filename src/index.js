import Vue from 'vue';
import MuseUi from 'muse-ui';
import Clipboard from 'v-clipboard';
import VTooltip from 'v-tooltip';

import App from './pages/index.vue';
import router from './router';

import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'muse-ui/dist/muse-ui.css';
import './stylesheets/core/themes/app.less';
import './stylesheets/style.scss';

Vue.use(MuseUi);
Vue.use(Clipboard);
Vue.use(VTooltip);

new Vue({
    router,
    el     : '#app',
    render : h => h(App),
});
