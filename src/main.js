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
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
