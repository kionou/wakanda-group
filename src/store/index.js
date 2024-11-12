import { createStore } from 'vuex'

import state from './state'
import getters from './getters'
import  mutations from './mutations.js'
import  actions from './actions.js'

import authModule from './auth';
import Panier from './panier'
import verification from './verification'


const store = createStore({
  state,
  getters,
  mutations,
  actions,
  modules: {
    auth: authModule,
    verification,
    cart: Panier
  },
})

export default store;
