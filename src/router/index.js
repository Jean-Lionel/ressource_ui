import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home'
import Departement from '../views/Departement'
import Employe from '../views/Employe'
import Role from '../views/Role'
import Banque from '../views/Banque'
import Conge from '../views/Conge'


const routes = [
  {path: '/',name: 'Home',component: Home},
  { path: '/departement', name: 'departement', component: Departement},
  { path: '/employes', name: 'employes', component: Employe},
  { path: '/role', name: 'role', component: Role},
  { path: '/bank', name: 'bank', component: Banque},
  { path: '/conges', name: 'conges', component: Conge},
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
