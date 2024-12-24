
// store/modules/auth.js
import { isTokenExpired } from '@/functions/util.js';

const state = {
  // Modifier le nom de l'utilisateur authentifié si nécessaire
  myAuthenticatedUser: null,
};

const getters = {
  // Modifier le nom du getter de l'utilisateur authentifié si nécessaire
  myAuthenticatedUser: (state) => state.myAuthenticatedUser,
  isAuthenticated: (state) => state.myAuthenticatedUser !== null,

};

const mutations = {
  // Modifier le nom de la mutation si nécessaire
  SET_MY_AUTHENTICATED_USER(state, user) {
    state.myAuthenticatedUser = user;
  },
  CLEAR_MY_AUTHENTICATED_USER(state) {
    state.myAuthenticatedUser = null;
  },
};

const actions = {
  // Modifier le nom de l'action si nécessaire
  setMyAuthenticatedUser({ commit }, user) {
    console.log(user);
   
    const now = Math.floor(Date.now() / 1000);
    const tokenExpiration = now + user.expires_in;
   
    const userSessionData = {
      id_user : user.user?.id,
      nom: user.user?.Nom,
      prenom: user.user?.Prenoms,
      email: user.user?.email,
      username:user.user?.username,
      whatsapp: user.user?.Whatsapp,
      pays:user?.user?.pays,
      token: user.access_token,
      tokenExpiration: tokenExpiration,
      // menus: user.role_relation?.menus,
      // permissions: user.role_relation?.permissions,
      // role_id:user.role_relation?.id,
     
    };
console.log("userSessionData",userSessionData)
    commit('SET_MY_AUTHENTICATED_USER', userSessionData);
    localStorage.setItem('myAuthenticatedWakandaClient', JSON.stringify(userSessionData));
  },
  clearMyAuthenticatedUser({ commit }) {
    commit('CLEAR_MY_AUTHENTICATED_USER');
    localStorage.removeItem('myAuthenticatedWakandaClient');
  },
  loadMyAuthenticatedUser({ commit }) {
    const storedUserData = localStorage.getItem('myAuthenticatedWakandaClient');
    if (storedUserData) {
      // const data = JSON.parse(storedUserData);
      // if (!isTokenExpired(data.tokenExpiration)) {
        commit('SET_MY_AUTHENTICATED_USER', JSON.parse(storedUserData));
      // } else {
      //   commit('CLEAR_MY_AUTHENTICATED_USER');
      //   localStorage.removeItem('myAuthenticatedWakandaClient');
      // }
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
