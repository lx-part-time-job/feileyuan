import Vue from 'vue'
import Router from 'vue-router'

import Default from './layout/default'
import noFooter from './layout/noFooter'

Vue.use(Router);

const routes = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    component: Default,
    children: [{
      path: '',
      name: 'home',
      component: () =>
        import ('./views/home/index.vue'),
    },
      {
        path: 'news',
        name: 'news',
        component: () =>
          import ('./views/home/news.vue')
      }, {
        path: 'article/:articleID',
        name: 'article',
        component: () =>
          import ('./views/home/article.vue')
      }
    ]
  },
    {
      path: '/',
      component: noFooter,
      children: [{
        path: '/login',
        name: 'login',
        component: () =>
          import ('./views/user/login.vue')
      }]
    }
  ]
});

export default routes;