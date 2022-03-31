import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
    routes: [
        { path: '/', component: () => import('../views/School/school.vue'), meta:{ title: '校园概览'} },
        { path: '/Afts', component:() => import('../views/Afts/afts.vue'), meta:{ title: '安防态势'}},
        { path: '/Bxtx', component: () => import('../views/Bxtx/bxtx.vue'), meta:{ title: '便携通行'} },
        // { path: '/', redirect: '/home' }
    ]
}
)