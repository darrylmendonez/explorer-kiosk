import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/admin',
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('./views/Admin.vue'),
    },
    {
      path: '/therapy/:id',
      component: () => import('./views/Therapy.vue'),
      props: true,
    },
    {
      path: '*',
      redirect: '/admin',
    },
  ],
});
