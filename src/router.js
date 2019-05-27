import Vue from 'vue'
import Router from 'vue-router'

import Default from './layout/default'
import Wrapper from './layout/wrapper'
import noFooter from './layout/noFooter'
import bbsHeader from './layout/bbsHeader'

Vue.use(Router);

import {
    SetCookies,
    GetCookies
} from './../utils/setCookies.js'

let isLogin = () => { //判断是否登录
    try {
        let cookie = GetCookies('uInfo');
        let userInfo = JSON.parse(cookie);
        return !!(userInfo && userInfo.token);
    } catch (e) {
        console.log(e, 'nologin');
        return false;
    }

}

let limitNotLogin = (to, from, next) => {
    if (isLogin()) {
        next('/');
    } else {
        next();
    }
};
let limitLogin = (to, from, next) => { //登陆限制 
    if (isLogin()) {
        next();
    } else {
        next(`/login`);
    }
};

const routes = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    component: Default,
    children: [
      {
        path: '',
        name: 'home',
        component: () =>
          import ('./views/home/index.vue'),
      }, {
        path: 'news',
        name: 'news',
        component: () =>
          import ('./views/home/news.vue')
      }, {
        path: 'news/:articleID',
        name: 'newsArticle',
        component: () =>
          import ('./views/home/article.vue')
      }, {
        path: 'topic',
        name: 'topic',
        component: () =>
          import ('./views/home/topic.vue')
      }, {
        path: 'activity',
        name: 'activity',
        component: () =>
          import ('./views/home/activities.vue')
      }, {
        path: 'activity/:articleID',
        name: 'activityArticle',
        component: () =>
          import ('./views/home/article.vue')
      }, {
        path: 'user',
        component: Wrapper,
        children: [
          {
            path: '',
            name: 'user',
            component: () => import('./views/user/index.vue'),
          },
          {
            path: 'editProfile',
            name: 'editProfile',
            component: () => import('./views/user/editProfile.vue')
          }
        ]
      }
    ]
  },
    {
      path: '/',
      component: noFooter,
      children: [{
        path: '/login',
        name: 'login',
        beforeEnter: limitNotLogin,
        component: () =>
          import ('./views/user/login.vue')
      },{
        path: '/register',
        name: 'register',
        beforeEnter: limitNotLogin,
        component: () =>
          import ('./views/user/register.vue')
      },{
        path: '/bound',
        name: 'bound',
        component: () =>
          import ('./views/user/bound.vue')
      },{
        path: '/findPassword',
        name: 'findPassword',
        component: () =>
          import ('./views/user/findPassword.vue')
      }]
    },
    {
      path: '/',
      component: bbsHeader,
      children: [{
        path: '/bbs',
        name: 'bbs',
        component: () =>
          import('./views/bbs/index.vue')
      }]
    }
  ]
});

export default routes;