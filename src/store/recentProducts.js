export default {
    namespaced: true,
    state: {
      recentProducts: JSON.parse(localStorage.getItem('recentProducts')) || [],
    },
    mutations: {
      addToRecentProducts(state, product) {
        const existingIndex = state.recentProducts.findIndex(item => item.id === product.id);
  
        // Si le produit est déjà dans la liste, le retirer
        if (existingIndex !== -1) {
          state.recentProducts.splice(existingIndex, 1);
        }
  
        // Ajouter le produit avec un horodatage
        const productWithTimestamp = {
          ...product,
          addedAt: new Date().toISOString(),
        };
        state.recentProducts.unshift(productWithTimestamp);
  
        // Limiter à 10 produits
        if (state.recentProducts.length > 10) {
          state.recentProducts.pop();
        }
  
        // Mettre à jour le localStorage
        localStorage.setItem('recentProducts', JSON.stringify(state.recentProducts));
      },
    },
    actions: {
      addProductToRecent({ commit }, product) {
        commit('addToRecentProducts', product);
      },
    },
    getters: {
      recentProducts(state) {
        return state.recentProducts;
      },
    },
  };
  