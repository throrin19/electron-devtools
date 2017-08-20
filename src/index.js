import Vue from 'vue';
import App from './pages/index.vue';
import MuseUi from 'muse-ui';

import 'muse-ui/dist/muse-ui.css';
import './stylesheets/core/themes/app.less';
import './stylesheets/style.scss';

Vue.use(MuseUi);

new Vue({
    el     : '#app',
    render : h => h(App),
});
