import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import store from '@/store'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import LogoutView from '../views/LogoutView.vue'
import PosListView from "@/views/PosListView.vue";
import PosRegisterView from "@/views/PosRegisterView.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,

    },
    {
        path: '/about',
        name: 'About',
        component: AboutView,
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginView,
        meta: {loginRedirect: true}

    },
    {
        path: '/logout',
        name: 'Logout',
        component: LogoutView,
        meta: {loginRequires: true}

    },
    {
        path: '/pos-list',
        name: 'PosList',
        component: PosListView,
        meta: {loginRequires: true}

    },
    {
        path: '/pos-register',
        name: 'PosRegister',
        component: PosRegisterView,
        meta: {loginRequires: true}

    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.loginRequires)) {
        if (store.state.IsAuthenticated) {
            next()
        } else {
            next('/login')
        }
    }else if(to.matched.some(record => record.meta.loginRedirect)){
         if (!store.state.IsAuthenticated) {
            next()
        } else {
            next('/pos-list')
        }
    } else {
        next()
    }


})

export default router
