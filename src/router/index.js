import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/Loyout.vue'
import Accueil from '../views/Accueil.vue'
import Categories from '../views/Categories.vue'
import ListeCategories from '../views/categories/listeCategory.vue'
import Detail from '../views/Detail.vue'
import Panier from '../views/panier.vue'

import Connexion from '../views/users/auth/sign.vue'

 import Test from '../views/test.vue'


// router user connect 
import Commande from '../views/users/commande/commandes.vue'
import CommandeDetail from '../views/users/commande/CommandeDetail.vue'
import CommandeHistorique from '../views/users/commande/historiques.vue'
import AdresseUser from '../views/users/compte/adresse.vue'
import Paiement from '../views/users/compte/paiement.vue'

import General from '../views/users/commande/general.vue'
import Infos from '../views/users/commande/infos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: '/connexion',
      name: 'connexion',  
      component: Connexion
      },
      { 
        path: '/test',
        name: 'test',  
        component: Test
        },
      {
        path: '/',
        name: 'public',
        component: Layout,
        children:[
            { path: '/', name: 'accueil', component: Accueil},
            { path: '/categories/:id', props:true, name: 'categories', component: Categories},
            { path: '/list-categories/:id', props:true, name: 'list-categories', component: ListeCategories},
            { path: '/detail/:id', props:true, name: 'detail', component: Detail},
            { path: '/panier', name: 'panier', component: Panier},
  
  
            //router users connect 
            { 
              path: '/client',
               name: 'client', 
               component: General,
               children:[
                  { path: '', name: 'infos', component: Infos},
                  { path: 'commandes', name: 'commandes', component: Commande},
                  { path: 'commandes-detail', name: 'commandes-detail', component: CommandeDetail},
                  { path: 'commandes-historique', name: 'commandes-historique', component: CommandeHistorique},
                  { path: 'user-adresse', name: 'user-adresse', component: AdresseUser},
                  { path: 'paiement', name: 'paiement', component: Paiement},

               ]
              },
  
        
          ] }
         
 
  ]
})

export default router
