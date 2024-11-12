export default {
  namespaced: true,
  state: {
    items: JSON.parse(localStorage.getItem('cart')) || [],
    alertMessage: '',
    loadingItems: {}, // Chargement spécifique par article
  },
  mutations: {
    addToCart(state, payload) {
      const existingItem = state.items.find(item => item.idProducts === payload.idProducts);

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
    
    setLoading(state, { productId, value }) {
      state.loadingItems[productId] = value;
    },

    increaseQuantity(state, productId) {
      const item = state.items.find(item => item.idProducts === productId);
      if (item) {
        item.quantity += 1;
        state.alertMessage = `Quantité de ${item.NomProduit} augmentée.`;
        localStorage.setItem('cart', JSON.stringify(state.items));
      }
    },

    decreaseQuantity(state, productId) {
      const item = state.items.find(item => item.idProducts === productId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.alertMessage = `Quantité de ${item.NomProduit} diminuée.`;
        localStorage.setItem('cart', JSON.stringify(state.items));
      }
    },

    removeItemFromCart(state, productId) {
      const index = state.items.findIndex(item => item.idProducts === productId);
      if (index !== -1) {
        const removedProduct = state.items.splice(index, 1)[0];
        state.alertMessage = `${removedProduct.NomProduit} a été retiré du panier.`;
        localStorage.setItem('cart', JSON.stringify(state.items)); 
      }
    },
  },
  actions: {
    addToCart({ commit }, payload) {
      commit('setLoading', { productId: payload.idProducts, value: true });
      setTimeout(() => {
        commit('addToCart', payload);
        commit('setLoading', { productId: payload.idProducts, value: false });
      }, 1000); // Simule un délai pour l'ajout au panier
    },

    increaseQuantity({ commit }, productId) {
      commit('setLoading', { productId, value: true });
      setTimeout(() => {
        commit('increaseQuantity', productId);
        commit('setLoading', { productId, value: false });
      }, 1000); // Simule un délai pour l'augmentation de la quantité
    },

    decreaseQuantity({ commit }, productId) {
      commit('setLoading', { productId, value: true });
      setTimeout(() => {
        commit('decreaseQuantity', productId);
        commit('setLoading', { productId, value: false });
      }, 1000); // Simule un délai pour la diminution de la quantité
    },
    removeItemFromCart({ commit }, productId) {
      commit('setLoading', { productId, value: true });
      setTimeout(() => {
        commit('removeItemFromCart', productId);
        commit('setLoading', { productId, value: false });
      }, 1000); // Simule un délai pour la suppression
    },
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
      return !!state.loadingItems[productId]; // Vérifie si le produit est en cours de chargement
    },
  },
};
