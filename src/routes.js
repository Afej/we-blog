export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./components/Home/index'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('./components/About'),
  },
  {
    path: '/blogpost',
    name: 'BlogPost',
    component: () => import('./components/BlogPosts/singlePost'),
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('./components/BlogPosts/category'),
  },
];
