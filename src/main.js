// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from "vue-router"
import router from './router/index'
import Vuex from 'vuex'
import store from './vuex/store'
import axios from 'axios'
import App from './App'



Vue.use(Vuex)
Vue.use(VueRouter)
Vue.prototype.$ajax = axios


/* eslint-disable no-new */


new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})