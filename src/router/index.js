import Vue from 'vue'
import Router from 'vue-router'
import Apple from '@/components/apple/Apple'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Apple',
            component: Apple
        }
    ]
})
