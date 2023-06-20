require('./bootstrap');

import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from './router'
import store from './store'
import App from './template/App';
import VueCookies from 'vue-cookies';
import VueIziToast from 'vue-izitoast';
import "izitoast/dist/css/iziToast.css";
Vue.use(VueIziToast);
Vue.use(Vuetify)
Vue.use(VueCookies);

const app = new Vue({
    el: '#app',
    store,
    router:Router,
    vuetify: new Vuetify(),
    render: h=>h(App)
});