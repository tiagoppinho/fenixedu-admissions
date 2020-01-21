import Vue from 'vue'
import Router from 'vue-router'
import PageWithNavBarAndFooterLayout from '@/layouts/PageWithNavBarAndFooterLayout'
import PageNotFoundPage from '@/pages/PageNotFoundPage'
import UnauthorizedPage from '@/pages/UnauthorizedPage'
import HomePage from '@/pages/HomePage'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/fenixedu-admissions',
  routes: [
    {
      path: '',
      component: PageWithNavBarAndFooterLayout,
      children: [
        {
          path: '/unauthorized',
          name: 'UnauthorizedPage',
          component: UnauthorizedPage
        },
        {
          path: '/',
          name: 'HomePage',
          component: HomePage
        },
        {
          path: '*',
          name: 'PageNotFound',
          component: PageNotFoundPage
        }
      ]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
