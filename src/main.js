import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import VuePaginate from 'vue-paginate';
import { routes } from './routes';

Vue.use(VueRouter);
Vue.use(VuePaginate);
Vue.use(VueResource);

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior() {
    return {
      x: 0,
      y: 0,
    };
  },
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
