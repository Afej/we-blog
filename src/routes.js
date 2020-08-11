export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./components/Home'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('./components/About'),
  },
  {
    path: '/blogpost/:id',
    name: 'blogpost',
    component: () => import('./components/BlogPosts/singlePost'),
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('./components/BlogPosts/category'),
  },
];
