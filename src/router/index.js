import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/Loyout.vue'
import Accueil from '../views/Accueil.vue'
import Categories from '../views/Categories.vue'
import Detail from '../views/Detail.vue'
import Panier from '../views/panier.vue'

import Connexion from '../views/users/auth/sign.vue'

// import Test from '../views/test.vue'


// router user connect 
import Commande from '../views/users/commande/commandes.vue'
import CommandeDetail from '../views/users/commande/CommandeDetail.vue'
import CommandeHistorique from '../views/users/commande/historiques.vue'
import AdresseUser from '../views/users/compte/adresse.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: '/connexion',
      name: 'connexion',  
      component: Connexion
      },
      {
        path: '/',
        name: 'public',
        component: Layout,
        children:[
            { path: '/', name: 'accueil', component: Accueil},
            { path: '/categories', name: 'categories', component: Categories},
            { path: '/detail', name: 'detail', component: Detail},
            { path: '/panier', name: 'panier', component: Panier},
  
  
            //router users connect 
  
            { path: '/commandes', name: 'orders', component: Commande},
            { path: '/commandes-detail', name: 'commandes-detail', component: CommandeDetail},
            { path: '/commandes-historique', name: 'commandes-historique', component: CommandeHistorique},
            { path: '/commandes-historique', name: 'commandes-historique', component: CommandeHistorique},
            { path: '/user-adresse', name: 'user-adresse', component: AdresseUser},
          ] }
         
 
  ]
})

export default router
