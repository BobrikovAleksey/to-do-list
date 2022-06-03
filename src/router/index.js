import _has from 'lodash/has';
import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/views/Main.vue';
import Today from '@/views/Today.vue';

const title = 'ToDoList: ';

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Main,
    meta: {
      title: `${title} Главная`,
    },
  },
  {
    name: 'Incoming',
    path: '/incoming',
    component: Main,
    meta: {
      title: `${title} Входящие`,
    },
  },
  {
    name: 'Today',
    path: '/today',
    component: Today,
    meta: {
      title: `${title} Сегодня`,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (_has(to.meta, 'title')) document.title = to.meta.title;
  next();
});

export default router;
