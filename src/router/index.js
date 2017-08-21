import Vue from 'vue';
import Router from 'vue-router';
import tpl from '@/view/tpl';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tpl',
      component: tpl
    }
  ]
});
