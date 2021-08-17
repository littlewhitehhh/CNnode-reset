import Vue from 'vue'






import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import getStar from '../views/getStar.vue'
import Api from '../views/Api.vue'
import About from '../views/About.vue'
import Register from '../views/Register.vue'
import signIn from '../views/signIn.vue'
import topicDetail from '../views/topicDetail'
import userInfo from '../views/userInfo'


Vue.use(VueRouter)


//解决冗余导航

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/getStar',
        name: 'getStar',
        component: getStar
    }, {
        path: '/api',
        name: 'Api',
        component: Api
    }, {
        path: '/about',
        name: 'About',
        component: About
    }, {
        path: '/register',
        name: 'Register',
        component: Register
    }, {
        path: '/signin',
        name: 'signIn',
        component: signIn
    },
    // 文章详情
    {
        path: '/topic/:id',
        name: 'topicDetail',
        component: topicDetail
    },
    // 用户详情
    {
        path: '/user/:loginname',
        name: 'userInfo',
        component: userInfo
    }

]

const router = new VueRouter({
    mode: 'hash',
    routes
})

export default router