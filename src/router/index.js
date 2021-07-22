import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home'
import Departement from '../views/Departement'
import Employe from '../views/Employe'
import Role from '../views/Role'
import Banque from '../views/Banque'
import Conge from '../views/Conge'
import Presence from '../views/Presence'
import Rapport from '../views/Rapport'
import Paiement from '../views/Paiement'

const routes = [
  {path: '/',name: 'Home',component: Home},
  { path: '/departement', name: 'departement', component: Departement},
  { path: '/employes', name: 'employes', component: Employe},
  { path: '/role', name: 'role', component: Role},
  { path: '/bank', name: 'bank', component: Banque},
  { path: '/conges', name: 'conges', component: Conge},
  { path: '/presences', name: 'presences', component: Presence},
  { path: '/paiements', name: 'paiements', component: Paiement},
  { path: '/rapport', name: 'rapport', component: Rapport},
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
