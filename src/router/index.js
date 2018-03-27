import Vue from 'vue'
import Router from 'vue-router'
import home from "../components/home.vue"
import cont1 from "../components/content1.vue"
import cont2 from "../components/content2.vue"
import cont3 from "../components/content3.vue"
import cont4 from "../components/content4.vue"
import cont5 from "../components/content5.vue"
import cont6 from "../components/content6.vue"
import xq from "../components/xq.vue"
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: home,
        redirect: "/home1",
        children: [{
            path: "home1",
            component: cont1,
        }, {
            path: "home2",
            component: cont2,
        }, {
            path: "home3",
            component: cont3,
        }, {
            path: "home4",
            component: cont4,
        }, {
            path: "home5",
            component: cont5,
        }, {
            path: "home6",
            component: cont6,
        }, {
            path: "home1/xq",
            component: xq,
        }]
    }, ],
    linkActiveClass: 'xz'
})