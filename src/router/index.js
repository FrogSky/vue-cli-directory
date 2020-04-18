import Vue from 'vue'
import Router from 'vue-router'

const manageList = () => import('@/views/manage/list.vue')

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/manage/list', name: '车位办理列表', component: manageList }
    ]
})