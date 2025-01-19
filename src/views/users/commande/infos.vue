<template >
    <div>
        <SkeletonClient v-if="loading " style="z-index: 99999"></SkeletonClient>

        <div class="card" v-else>
            <div class="card-body">
                <div class="row">
                    <div class="col-xl-12 row">
                        <div class="col-xl-1">
                            <img src="@/assets/images/avatar/avatar-1.jpg" class="mg-thumbnail rounded "
                            style="border-radius: 50%; height: 100px; width: 100px;" alt="">
                        </div>
                      
                            <div class="col-xl-8 ms-8">
                                <strong class=" fs-5 text-dark">{{ profil?.Prenoms }} {{ profil?.Nom }}</strong> <br>
                                <span class="text-muted">{{ profil?.pays }} </span> <br>
                                <span class="text-muted">{{ profil?.email }}</span> <br>
                                <span class="text-muted">{{ profil?.Whatsapp }}</span>
                            </div>
                      
                    </div>
                  
                </div>
            </div>
        </div>
    

          <!-- section -->
          <section class="my-lg-5 my-5">
            <div class="container-fluid">
               <!-- row -->
               <div class="row">
                  <div class="col-12">
                     <!-- heading -->
                     <h3>Produits vus récemment</h3>
                  </div>
               </div>
               <!-- row -->
               <div class="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-2 mt-2">
                  <p v-if="recentProducts.length === 0">Pas de produit vue pour l'instant</p>
            
   
                  <div class="col" v-else v-for="(product,index) in recentProducts" :key="index">
                                                    <!-- card -->
                                                    <div class="card card-product-v2 h-100">
                                                        <div class="card-body position-relative">
                                                            <!-- badge -->
                                                            <div class="text-center position-relative">
                                                                <div class="position-absolute top-0 start-0">
                                                                    <span v-if="product?.PrixPromo" class="badge bg-success text-white">
                                                                    -{{ calculateDiscount(product?.Prix, product?.PrixPromo) }}%
                                                                    </span>
                                                                </div>
                                                                <!-- img -->
                                                                <a :href="`/detail/${ encodeId(product?.id)}`" @click="addToRecent(product)">
                                                                    <img :src="product?.PhotoCover ? product?.PhotoCover : defaultImage"
                                                                        :alt="product?.NomProduit" :title="product?.NomProduit"
                                                                        style="width: 100%; height: auto; max-height: 30% !important;"
                                                                        class="mb-3 img-fluid" />
                                                                </a>
                                                                <!-- action btn -->
    
                                                            </div>
                                                            <!-- title -->
                                                            <h2 class="fs-6"><a
                                                                :href="`/detail/${ encodeId(product?.id)}`"
                                                                class="text-inherit text-decoration-none" @click="addToRecent(product)">{{
                                                                product?.NomProduit  }}
                                                            </a></h2>
    
                                                            <!-- price -->
                                                            <div class="d-flex justify-content-between align-items-center mt-3">
                             
                                                <div>
                                             <span v-if="product?.PrixPromo" class="text-danger">
                                                 {{ formatPrice(convertPrice(product.PrixPromo), selectedDevise?.symbol) }}
                                             </span>
                                             <br>
                                             <span v-if="product?.PrixPromo" class="text-muted text-decoration-line-through">
                                                 {{ formatPrice(convertPrice(product.Prix), selectedDevise?.symbol) }}
                                             </span>
                                             <span v-else class="text-danger">
                                                 {{ formatPrice(convertPrice(product?.Prix), selectedDevise?.symbol) }}
                                             </span>
                             </div>

                         
                       
                           </div>
                                           <div class="prix">
                                             <p class="mb-0">
                                                 <span v-if="product?.magasins_sum_quantite_reel !== null" class="badge bg-success text-white">Disponible</span>
                                                 <span v-else class="badge bg-danger text-white">Pas disponible</span>
                                             </p>
                                                 <span  v-if="product?.magasins_sum_quantite_reel === null || product?.magasins_sum_quantite_reel === 0" class="text-uppercase small Icons " 
                                                     disabled>
                                                     <div class="icon-cards" disabled>
                                                         <div v-if="loadingItems[product?.id]">
                                                             <LoaderBtn class="loadingbtn"></LoaderBtn>
                                                         </div>
                                                         <div v-else>
                                                             <i class="bi bi-cart2 fs-4"></i>
                                                         </div>
 
                                                     </div>
                                                 </span>

                                                 <span v-else class="text-uppercase small   " @click="addProductToCart(product)"
                                                     :disabled="loadingItems[product?.id] " >
                                                     <div class="icon-card">
                                                         <div v-if="loadingItems[product?.id]">
                                                             <LoaderBtn class="loadingbtn"></LoaderBtn>
                                                         </div>
                                                         <div v-else>
                                                             <i class="bi bi-cart2 fs-4"></i>
                                                         </div>
 
                                                     </div>
                                                 </span>
                            </div>
                                                  
    
                                                        </div>
                                                        <!-- hidden class for hover -->
                                                        <div class="product-content-fade border-info"></div>
                                                    </div>
                                                </div>
   
               </div>
            </div>
         </section>
    </div>
</template>
<script>
import SkeletonClient from '@/components/others/loader/SkeletonClient.vue';
import axios from '@/lib/axiosConfig';
import { mapGetters, mapActions } from 'vuex';

export default {
   components:{
    SkeletonClient
   },
   data() {
      return {
        profil:"",
        loading:true,
        loadingItems: {},
         
      }
   },
   computed: {
    ...mapGetters("cart", ["cartItems", "alertMessage", "isLoadingItem"]),
    ...mapGetters("devise", ["selectedDevise", "getSelectedRate"]),
  
   loggedInUser() {
      return this.$store.getters["auth/myAuthenticatedUser"];
      
    },
    recentProducts() {
    return this.$store.getters['recentProducts/recentProducts'];
  },
  
   
 },
  async mounted() {
   await this.fetchUserDetail()
     
   },
   watch: {
    alertMessage(newMessage) {
      if (newMessage) {
        this.toast.success(newMessage);
      }
    },
    isInCart() {
      return (productId) => {
        return this.cartItems.some(item => item.id === productId);
      };
    },

    // Récupérer la quantité du produit dans le panier
    getProductQuantity() {
      return (productId) => {
        const item = this.cartItems.find(item => item.id === productId);
        return item ? item.quantity : 1;
      };
    },
  },
   methods: {
    ...mapActions('cart', ['addToCart', 'increaseQuantity', 'decreaseQuantity']),
    encodeId(id) {
    return btoa(id); // Encode en Base64
  },
      async fetchUserDetail() {
      try {
        const response = await axios.get("/auth-user", {
          headers: {
            Authorization: `Bearer ${this.loggedInUser.token}`,
          },
        });
        if (response.data.status === "success") {
          this.profil = response.data.data;
            console.log(this.profil)
          this.loading = false;
        }
      } catch (error) {
        console.log(error)
        if (
          error.response.data.message === "Vous n'êtes pas autorisé." ||
          error.response.status === 401
        ) {
          await this.$store.dispatch("auth/clearMyAuthenticatedUser");
          this.$router.push("/"); //a revoir
        }
      }
    },
    
    // Mettre à jour la quantité (augmenter/diminuer)
    updateQuantity(productId, action) {
      if (action === 'increase') {
        this.increaseQuantity(productId);
      } else if (action === 'decrease') {
        this.decreaseQuantity(productId);
      }
    },
   
    calculateDiscount(price, promoPrice) {
    if (!promoPrice || !price) return null;
    const discount = ((price - promoPrice) / price) * 100;
    return Math.round(discount); 
  },
    convertPrice(prix) {
      return prix / this.getSelectedRate; // Convertir avec le taux sélectionné
    },
    // Formatage du prix
    formatPrice(price, symbol) { 
      const formattedPrice = price.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, " ");  
      if (symbol === 'CFA') {
        return `${formattedPrice} ${symbol}`;
    }
    return `${symbol} ${formattedPrice}`;
    },
    formatPrices(value) {
      return parseFloat(value).toLocaleString(); // Formatage avec séparateurs de milliers
    },
    truncateText(text, maxLength) {
      if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...'; // Ajoute "..." à la fin si le texte est trop long
      }
      return text;
    },
   },

}
</script>
<style lang="css" scoped>
.account-info-stats {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 16px 0;
}

.account-info-stats-item {
    position: relative;
    width: 100%;
    text-align: center;
    cursor: pointer;
}

.account-info-stats-num {
    font-size: 32px;
}

.comet-icon {
    display: inline-block;
    color: inherit;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    vertical-align: -0.125em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.comet-icon svg {
    display: inline-block;
}

.account-info-stats-text {
    margin-top: 4px;
    color: #222;
    font-size: 16px;
}

.account-order {
    margin-top: 20px;
    padding: 16px 16px 0;
    background-color: #fff;
    border: 1px solid #eee;
    -webkit-box-shadow: 0 0 2px 0 #eee;
    box-shadow: 0 0 2px 0 #eee;
}


.account-order-header {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border-bottom: 1px solid #eee;
}
.account-order-content, .account-order-header {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}

.account-order-title {
    display: inline-block;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding: 12px 0;
    font-weight: 700;
    font-size: 16px;
    font-size: 20px;
    line-height: 1;
    line-height: 1.5;
}

.account-order-extra {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    color: #999;
    font-size: 14px;
    cursor: pointer;
}

.account-order-extra .arrow-icon {
    margin-left: 8px;
    font-size: 18px;
}

.comet-icon {
    display: inline-block;
    color: inherit;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    vertical-align: -0.125em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.account-order-content, .account-order-header {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
.account-order-status {
    position: relative;
    width: 100%;
    text-align: center;
    cursor: pointer;
}

.account-order-status .status-image {
    width: 53px;
    height: 53px;
}

.account-order-status-text {
    color: #222;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0;
}

.account-order-slider {
    background-color: #f7f7f7;
}
.slick-slider {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
}
.slick-list, .slick-slider, .slick-track {
    position: relative;
    display: block;
}
.slick-slider .slick-list, .slick-slider .slick-track {
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
}
.slick-list {
    overflow: hidden;
    margin: 0;
    padding: 0;
}
.slick-list, .slick-slider, .slick-track {
    position: relative;
    display: block;
}

.slick-slider .slick-list, .slick-slider .slick-track {
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
}
.slick-track {
    top: 0;
    left: 0;
}

.account-order-dispute {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 16px 0;
    border-top: 1px solid #eee;
    cursor: pointer;
}

.dispute-icon {
    font-size: 24px;
}


.comet-icon {
    display: inline-block;
    color: inherit;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    vertical-align: -0.125em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.account-order-dispute-text {
    margin-left: 6px;
    color: #222;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0;
}

.account-order-dispute .dispute-arrow {
    position: absolute;
    right: 0;
    color: #999;
    font-size: 18px;
}

.comet-icon {
    display: inline-block;
    color: inherit;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    vertical-align: -0.125em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>