import Vue from 'vue';
import Router from 'vue-router';
import Registration from './components/Registration.vue';
import Succsess from './components/Succsess.vue';
import RegisterNewUser from './components/RegisterNewUser.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'registration',
      component: Registration,
      // component: () => import('./components/Registration.vue'),
    },
    {
      path: '/protected',
      name: 'succsess',
      component: Succsess,
      // component: () => import('./components/Succsess.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterNewUser,
      // component: () => import('./components/Succsess.vue'),
    },
  ],
});
