import axios from "@/lib/axiosConfig.js"
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
              value:devise.id,
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
  
          // Définir une devise par défaut si aucune n'est sélectionnée
          if (!state.selectedDevise && devises.length > 0) {
            commit('SET_SELECTED_DEVISE', devises[0]);
          }
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des devises', error);
      }
    },
    changeDevise({ commit, state }, selectedDevise) {
        console.log('state',state )
      const devise = state.DeviesArray.find((d) => d.value === selectedDevise.value);
      console.log('statedevise',devise)

      if (devise) {
        commit('SET_SELECTED_DEVISE', devise);
      }
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
  