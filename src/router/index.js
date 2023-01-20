import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JournalView from '../views/JournalView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/journal',
    name: 'journal',
    component: JournalView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
