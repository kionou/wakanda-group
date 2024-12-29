import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
import Layout from '../views/Loyout.vue'
import Accueil from '../views/Accueil.vue'
import Categories from '../views/Categories.vue'
import ListeCategories from '../views/categories/listeCategory.vue'
import ListeMarques from '../views/categories/listeMarques.vue'
import Detail from '../views/Detail.vue'
import Panier from '../views/panier.vue'
import DetailType from '../views/VoirPlus.vue'
import Detailarque from '../views/DetailMarques.vue'

import SignUp from '../views/users/auth/sign.vue'
import LoginClient from '../views/users/auth/login.vue'

 import Test from '../views/test.vue'


// router user connect 
import Commande from '../views/users/commande/commandes.vue'
import CommandeDetail from '../views/users/commande/CommandeDetail.vue'
import CommandeHistorique from '../views/users/commande/historiques.vue'
import AdresseUser from '../views/users/compte/adresse.vue'
import Paiement from '../views/users/compte/paiement.vue'
import ValiderCommande from '../views/users/compte/validerCommande.vue'

import General from '../views/users/commande/general.vue'
import Infos from '../views/users/commande/infos.vue'


// nouveau lien

import AccueilNew from '../views/Home/accueil.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
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
            { path: '/list-marques/:id', props:true, name: 'list-marques', component: ListeMarques},
            { path: '/type-detail/:id', props:true, name: 'type-detail', component: DetailType},
            { path: '/marque-detail/:id', props:true, name: 'marque-detail', component: Detailarque},
            { path: '/detail/:id', props:true, name: 'detail', component: Detail},
            { path: '/panier', name: 'panier', component: Panier},
            { path: 'valider', name: 'valider',  component: ValiderCommande},

            { path: '/sign-up', name: 'sign-up', component: SignUp},
            { path: '/login-client', name: 'login-client', component: LoginClient},
  
  
            //router users connect 
            { 
              path: '/client',
               name: 'client', 
               component: General,
               children:[
                  { path: '', name: 'infos',  meta: { requiresAuth: true }, component: Infos},
                  { path: 'commandes', name: 'commandes', meta: { requiresAuth: true }, component: Commande},
                  { path: 'commandes-detail', name: 'commandes-detail',  meta: { requiresAuth: true }, component: CommandeDetail},
                  { path: 'commandes-historique', name: 'commandes-historique',  meta: { requiresAuth: true }, component: CommandeHistorique},
                  { path: 'user-adresse', name: 'user-adresse',  meta: { requiresAuth: true }, component: AdresseUser},
                  { path: 'paiement', name: 'paiement',  meta: { requiresAuth: true }, component: Paiement},

               ]
              },
  
        
          ] },
          { path: '/accueil-new', name: 'accueil-new', component: AccueilNew},

         
 
  ]
})


router.beforeEach((to, from, next) => {
  const requiresAuth = to.meta.requiresAuth;
  const isAuthenticated = store.getters["auth/isAuthenticated"];
  if (requiresAuth && !isAuthenticated) {
    // Si la route nécesite une authentification et l'utilisateur n'est pas connecté,
    // redirigez-le vers la page de connexion
    next("/");
  } else if ((to.name === "login-client" || to.name === "sign-up") && isAuthenticated) {
    // Si l'utilisateur est connecté et essaie d'accéder aux pages d'inscription ou de connexion,
    // redirigez-le vers la page mon_espace
   
      next("/client");
    
  } else {
    next();
  }
});

export default router
