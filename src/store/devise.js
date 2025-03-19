import axios from "@/lib/axiosConfig.js";

const state = {
  DeviesArray: [], // Liste des devises actives
  conversionRates: {}, // Taux de conversion
  selectedDevise: null, // Devise sélectionnée
};

const mutations = {
  SET_DEVISES(state, devises) {
    state.DeviesArray = devises;
  },
  SET_SELECTED_DEVISE(state, devise) {
    state.selectedDevise = devise;
  },
  SET_CONVERSION_RATES(state, rates) {
    state.conversionRates = rates;
  },
};

const actions = {
  async fetchDevises({ commit }) {
    try {
      const response = await axios.get('liste/devises');
      if (response.data.status === 'success') {
        // Filtrer les devises actives et les formater
        const devises = response.data.data?.data
          ?.filter((devise) => devise.IsActive === 1)
          .map((devise) => ({
            label: devise.Title,
            value: devise.id,
            symbol: devise.Symbol,
            id: devise.id,
            rate: devise.UsdInDevise,
            isSymbolBefore: devise.isSymbolBefore || false,
          }));

        // Commit des devises dans le store
        commit('SET_DEVISES', devises);

        // Construire un objet pour les taux de conversion
        const conversionRates = devises.reduce((rates, devise) => {
          rates[devise.label] = devise.rate;
          return rates;
        }, {});
        commit('SET_CONVERSION_RATES', conversionRates);

        // Récupérer une devise sauvegardée dans le localStorage
        const storedDevise = localStorage.getItem('selectedDevise');
        if (storedDevise) {
          const parsedDevise = JSON.parse(storedDevise);
          const existingDevise = devises.find((d) => d.value === parsedDevise.value);
          if (existingDevise) {
            commit('SET_SELECTED_DEVISE', existingDevise);
          } else if (devises.length > 0) {
            commit('SET_SELECTED_DEVISE', devises[2]);
            localStorage.setItem('selectedDevise', JSON.stringify(devises[2]));
          }
        } else if (devises.length > 0) {
          // Définir une devise par défaut si aucune n'est sélectionnée
          commit('SET_SELECTED_DEVISE', devises[2]);
          localStorage.setItem('selectedDevise', JSON.stringify(devises[2]));
        }
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des devises', error);
    }
  },

  changeDevise({ commit }, selectedDevise) {
    commit('SET_SELECTED_DEVISE', selectedDevise);
    // Sauvegarder la devise dans le localStorage
    localStorage.setItem('selectedDevise', JSON.stringify(selectedDevise));
  },
};

const getters = {
  DeviesArray: (state) => state.DeviesArray,
  selectedDevise: (state) => state.selectedDevise,
  conversionRates: (state) => state.conversionRates,
  getSelectedRate: (state) => state.selectedDevise?.rate || 1,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
