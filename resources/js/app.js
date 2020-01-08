require('./bootstrap');
import router from "./routes";
import Index from "./Index";
import VueRouter from "vue-router";
import Vuex from 'vuex'

window.Vue = require('vue');
Vue.use(VueRouter);
Vue.use(Vuex);

const app = new Vue({
    el: '#app',
    router,
    components: {
        "index": Index
    },
});
