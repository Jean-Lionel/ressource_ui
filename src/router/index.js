import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home'
import Departement from '../views/Departement'



const routes = [
  {path: '/',name: 'Home',component: Home},
  { path: '/departement', name: 'departement', component: Departement},
  {
    path: '/about',
    name: 'About',
  
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
