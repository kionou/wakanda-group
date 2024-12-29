export default {
  namespaced: true,
  state: {
    items: JSON.parse(localStorage.getItem('cart')) || [],
    recentProducts: JSON.parse(localStorage.getItem('recentProducts')) || [], // Liste des produits récents
    alertMessage: '',
    loadingItems: {}, // Chargement spécifique par article
  },
  mutations: {
    addToCart(state, payload) {
      const existingItem = state.items.find(item => item.id === payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
        state.alertMessage = `Quantité de ${existingItem.NomProduit} mise à jour.`;
      } else {
        payload.quantity = 1;
        state.items.push(payload);
        state.alertMessage = `${payload.NomProduit} ajouté au panier.`;
      }

      localStorage.setItem('cart', JSON.stringify(state.items));
    },

    addRecentProduct(state, product) {
      // Vérifie si le produit est déjà dans les produits récents
      const exists = state.recentProducts.find(item => item.id === product.id);

      if (!exists) {
        // Ajoute un nouveau produit avec timestamp
        state.recentProducts.unshift({
          ...product,
          timestamp: Date.now()
        });

        // Limite à 10 produits
        if (state.recentProducts.length > 10) {
          state.recentProducts.pop();
        }

        // Sauvegarde dans le localStorage
        localStorage.setItem('recentProducts', JSON.stringify(state.recentProducts));
      }
    },

    removeExpiredProducts(state, expirationTime) {
      const currentTime = Date.now();
      state.recentProducts = state.recentProducts.filter(
        item => currentTime - item.timestamp <= expirationTime
      );

      localStorage.setItem('recentProducts', JSON.stringify(state.recentProducts));
    },

    setLoading(state, { productId, value }) {
      state.loadingItems[productId] = value;
    },

    increaseQuantity(state, productId) {
      const item = state.items.find(item => item.id === productId);
      if (item) {
        item.quantity += 1;
        state.alertMessage = `Quantité de ${item.NomProduit} augmentée.`;
        localStorage.setItem('cart', JSON.stringify(state.items));
      }
    },

    decreaseQuantity(state, productId) {
      const item = state.items.find(item => item.id === productId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.alertMessage = `Quantité de ${item.NomProduit} diminuée.`;
        localStorage.setItem('cart', JSON.stringify(state.items));
      }
    },

    removeItemFromCart(state, productId) {
      const index = state.items.findIndex(item => item.id === productId);
      if (index !== -1) {
        const removedProduct = state.items.splice(index, 1)[0];
        state.alertMessage = `${removedProduct.NomProduit} a été retiré du panier.`;
        localStorage.setItem('cart', JSON.stringify(state.items)); 
      }
    },

    clearCart(state) {
      state.items = [];
      localStorage.removeItem('cart');
    }
  },
  actions: {
    addToCart({ commit }, payload) {
      commit('setLoading', { productId: payload.id, value: true });
      setTimeout(() => {
        commit('addToCart', payload);
        commit('addRecentProduct', payload); // Ajoute le produit dans les récents
        commit('setLoading', { productId: payload.id, value: false });
      }, 1000); // Simule un délai pour l'ajout au panier
    },

    increaseQuantity({ commit }, productId) {
      commit('setLoading', { productId, value: true });
      setTimeout(() => {
        commit('increaseQuantity', productId);
        commit('setLoading', { productId, value: false });
      }, 1000);
    },

    decreaseQuantity({ commit }, productId) {
      commit('setLoading', { productId, value: true });
      setTimeout(() => {
        commit('decreaseQuantity', productId);
        commit('setLoading', { productId, value: false });
      }, 1000);
    },

    removeItemFromCart({ commit }, productId) {
      commit('setLoading', { productId, value: true });
      setTimeout(() => {
        commit('removeItemFromCart', productId);
        commit('setLoading', { productId, value: false });
      }, 1000);
    },

    clearCart({ commit }) {
      commit('clearCart');
    },

    removeExpiredRecentProducts({ commit }) {
      const expirationTime = 24 * 60 * 60 * 1000; // Expire après 24 heures
      commit('removeExpiredProducts', expirationTime);
    }
  },
  getters: {
    cartItems(state) {
      return state.items;
    },
    alertMessage(state) {
      return state.alertMessage;
    },
    cartItemCount(state) {
      return state.items.reduce((total, item) => total + item.quantity, 0);
    },
    isLoadingItem: (state) => (productId) => {
      return !!state.loadingItems[productId];
    },
    recentProducts(state) {
      return state.recentProducts;
    }
  }
};
