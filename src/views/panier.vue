<template >
   <div>
      <div class="row">
         <div class="col-xl-12">
            <div class="hero-slider"  >
                            <div class="hero-img-1" style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
                                <div class=" col-xxl-5 col-lg-7 col-md-8  text-xs-center" style="width: 100%; height:100%">
                                    <img src="@/assets/img/panier.jpg" alt="" style="width: 100%; height:100%">
                                   
                                </div>
                            </div>
                        </div> 
         </div>
      </div>
      <main>
         <section class="mb-lg-14 mb-8 mt-8">
            <div v-if="cartItems.length > 0">
               <div class="row justify-content-between">
                  <div class=" col-xl-8 col-lg-8 col-md-7 ">
   
   
                     <ul class="list-group list-group-flush">
                        <!-- list group -->
                        <li class="list-group-item py-3 ps-0 border-top" v-for="(item, index) in cartItems" :key="index">
                           <!-- row -->
                           <div class="row align-items-center">
                              <div class="col-6 col-md-6 col-lg-7">
                                 <div class="d-flex">
                                    <img :src="item.PhotoCover ? item.PhotoCover : defaultImage" :alt="item.NomProduit"
                                       :title="item.Nomproduit" class="icon-shape icon-xxl ms-2" />
                                    <div class="ms-3">
                                       <!-- title -->
                                       <router-link :to="{ name: 'detail', params: { id: encodeId(item.id) }}"
                                          class="text-inherit">
                                          <h6 class="mb-0">{{ item.NomProduit }}</h6>
                                       </router-link>
                                       <!-- <span><small class="text-muted">{{ formatPrice(item.Prix)}} {{ item.devise?.Symbol }}</small></span> -->
                                               <div>
                                                <span v-if="item?.PrixPromo" class="text-danger">
                                                    {{ formatPrice(convertPrice(item?.PrixPromo), selectedDevise?.symbol) }}
                                                </span>
                                                <br>
                                                <span v-if="item?.PrixPromo" class="text-muted text-decoration-line-through">
                                                    {{ formatPrice(convertPrice(item?.Prix), selectedDevise?.symbol) }}
                                                </span>
                                                <span v-else class="text-danger">
                                                    {{ formatPrice(convertPrice(item?.Prix), selectedDevise?.symbol) }}
                                                </span>
                                              </div>
                                       <!-- text -->
                                       <div class="mt-2 small lh-1">
                                          <button data-bs-toggle="modal" data-bs-target="#delete_product"  @click="removeItem(item.id)"
                                             class="text-decoration-none text-inherit">
                                             <span class="me-1 align-text-bottom">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                   stroke-linecap="round" stroke-linejoin="round"
                                                   class="feather feather-trash-2 text-success">
                                                   <polyline points="3 6 5 6 21 6"></polyline>
                                                   <path
                                                      d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                   </path>
                                                   <line x1="10" y1="11" x2="10" y2="17"></line>
                                                   <line x1="14" y1="11" x2="14" y2="17"></line>
                                                </svg>
                                             </span>
                                             <span class="text-muted">Supprimer</span>
                                          </button>
                                          <!-- <LoaderBtn  v-else  class="loadingbtn"></LoaderBtn> -->
                                       </div>
                                    </div>
                                 </div>
                              </div>
   
                              <div class="col-4 col-md-4 col-lg-3">
                                 <div class="input-group input-spinner">
                                    <!-- Bouton de diminution -->
                                    <button class="button-minus btn btn-sm"
                                       @click="updateQuantity(item.id, 'decrease')"
                                       :disabled="isLoadingItem(item.id)">
                                       <span>-</span>
   
                                    </button>
   
                                    <!-- Quantité -->
                                    <template v-if="isLoadingItem(item.id)">
                                       <!-- Loader à la place de l'input pendant le chargement -->
                                       <LoaderBtn class="loadingbtn"></LoaderBtn>
                                    </template>
                                    <template v-else>
                                       <!-- Input de quantité lorsqu'il n'y a pas de chargement -->
                                       <input type="number" v-model.number="item.quantity"
                                          class="quantity-field form-control-sm form-input" disabled />
                                    </template>
   
                                    <!-- Bouton d'augmentation -->
                                    <button class="button-plus btn btn-sm"
                                       @click="updateQuantity(item.id, 'increase')"
                                       :disabled="isLoadingItem(item.id)">
                                       <span>+</span>
   
                                    </button>
                                 </div>
                              </div>
                              <!-- price -->
                              <div class="col-2 text-lg-end text-start text-md-end col-md-2">

                                 <span class="fw-bold" v-if="item.PrixPromo">{{ formatPrice(convertPrice(item?.PrixPromo * item.quantity), selectedDevise?.symbol) }}</span>
                                 <span class="fw-bold" v-else>{{ formatPrice(convertPrice(item?.Prix * item.quantity), selectedDevise?.symbol) }}</span>
                              </div>
                           </div>
                        </li>
   
   
                     </ul>
                     <!-- btn -->
                     <div class="d-flex justify-content-end my-4">
                        <a href="/" class="btn btn-primary">Continuez vos achats</a>
                      
                     </div>
   
                  </div>
   
                  <div class="col-xl-4 col-lg-4 col-md-5">
                     <!-- card -->
                     <div class="mb-5 card ms-5">
                        <div class="card-body p-6">
                           <!-- heading -->
                           <h2 class="h5 mb-4">Résumé</h2>
                           <div class="card mb-2">
                              <!-- list group -->
                              <ul class="list-group list-group-flush">
                                 <!-- list group item: Item Subtotal -->
                                 <li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="me-auto">
                                       <div>Total articles</div>
                                    </div>
                                    <span>{{ formatPrice(convertPrice(subtotal), selectedDevise?.symbol) }}</span>
                                    
                                 </li>
   
                                 <!-- list group item: Service Fee -->
                                 <!-- <li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="me-auto">
                                       <div>Frais de livraison</div>
                                    </div>
                               
                                    <span>{{ formatPrice(convertPrice(serviceFee), selectedDevise?.symbol) }}</span>
                                 </li> -->
   
                                 <!-- list group item: Subtotal -->
                                 <li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="me-auto">
                                       <div class="fw-bold">Total</div>
                                    </div>
                                    <span class="fw-bold">{{ formatPrice(convertPrice(subtotal), selectedDevise?.symbol) }}</span>

                                 </li>
                              </ul>
                           </div>
   
                           <div class="d-grid mb-1 mt-4">
                              <!-- btn -->
                               <router-link to="/valider">
                                 <button class="btn btn-primary btn-lg d-flex justify-content-between align-items-center">
                                 Commander 
                                 <span class="ms-2 fw-bold">{{ formatPrice(convertPrice(subtotal), selectedDevise?.symbol) }}</span>
                              </button>
                               </router-link>
                           
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
   
            <div class="div" v-else>
               <div class="cart-body">
                  <div class="cart-main">
                     <div class="cart-empty-group ">
                        <div class="es--comet-pro-fallback--3ctNGin es--pc--1mZE03B cart-empty-wrap">
                           <img src="@/assets/img/cart.png" class="es--comet-pro-fallback-image--35CZGig es--pc--1mZE03B">
                           <span class="es--comet-pro-fallback-title--1dzE5qT es--pc--1mZE03B text-center"
                              style="font-size: 16px; padding: 16px 0px;">Pas encore d'articles ? Continuez votre shopping
                              pour en trouver.</span>
   
                           <div class="es--comet-pro-fallback-button-container--1Tnc92l es--vertical--1KfvoOr">
                              <router-link to="/" class="btn btn-primary">Parcourir les articles</router-link>
                           </div>
                        </div>
                     </div>
   
                  </div>
               </div>
            </div>
   
         </section>
      </main>
   
      <!-- Modal drop-->
      <div class="modal fade" id="delete_product" tabindex="-1" aria-labelledby="delete_productLabel" aria-hidden="true">
         <div class="modal-dialog modal-dialog-centered" style="max-width: auto !important; width: 100%;">
            <div class="modal-content p-4">
               <div class="modal-header border-0 justify-content-between">
   
                  <h5 class="modal-title fs-4 fw-bold" id="delete_productLabel">
                     <div class="comet-v2-confirm-title" >Supprimer l'article</div>

                  </h5>
   
                  <button type="button" class="btn-close  m-0" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body p-0">
                  <div class="comet-v2-modal-content comet-v2-modal-no-header">
                     <div class="comet-v2-modal-body comet-v2-confirm modal-left">
                        <!-- <div class="comet-v2-confirm-title" >Supprimer l'article</div> -->
                        <div class="comet-v2-confirm-content">Êtes-vous sûr(e) de vouloir supprimer cet article ?</div>
                     </div>
                     <div class="comet-v2-modal-footer comet-v2-modal-footer-vertical d-flex align-items-center justify-content-center flex-column">
                        <button  class="comet-v2-btn comet-v2-btn-primary comet-v2-btn-important">
                           <span v-if="isLoadingItem(ToId)">
                              <LoaderBtn class="loadingbtn"></LoaderBtn>
                           </span>
                           <span  v-else  @click="removeItemConfirm()">Supprimer</span>
                        </button>

                        <button type="button" class="comet-v2-btn comet-v2-btn-slim comet-v2-btn-important " data-bs-dismiss="modal" aria-label="Close"><span>Annuler</span></button>
                     </div>
                  </div>
               </div>
   
            </div>
         </div>
      </div>
   
   </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import defaultImage from '@/assets/images/products/product-img-2.jpg'
import { useToast } from "vue-toastification";
import LoaderBtn from '@/components/others/loader/loaderbtn.vue';
export default {

  setup() {
    const toast = useToast(); // Initialiser useToast
    return { toast };
  },
  components: {
    LoaderBtn
  },

  data() {
    return {
      defaultImage: defaultImage,
      ToId:"",

    }
  },
  computed: {
    ...mapGetters("cart", ["cartItems", "alertMessage", "isLoadingItem"]),
    ...mapGetters("devise", ["selectedDevise", "getSelectedRate"]),

    subtotal() {
      return this.cartItems.reduce((total, item) => {
         if(item.PrixPromo){
            const itemPrice = parseFloat(item.PrixPromo) || 0;
        return total + item.quantity * itemPrice;
         }else{
            const itemPrice = parseFloat(item.Prix) || 0;
        return total + item.quantity * itemPrice;
         }
        
      }, 0);
    },
   
    serviceFee() {
      return 2000;
    },
    total() {
      return this.subtotal + this.serviceFee;
    },
  },
  watch: {
    alertMessage(newMessage) {
      const modalElement = document.getElementById('delete_product');
    const modalInstance = bootstrap.Modal.getInstance(modalElement);
    if (modalInstance) {
      modalInstance.hide();
    }
      if (newMessage) {
        this.toast.success(newMessage);

      }
    }
  },
  methods: {
    ...mapActions('cart', ['increaseQuantity', 'decreaseQuantity', 'removeItemFromCart']),

    encodeId(id) {
    return btoa(id); // Encode en Base64
  },

    removeItem(productId) {
      this.ToId = productId
    },
    removeItemConfirm() {
     
       this.removeItemFromCart(this.ToId);

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

    updateQuantity(productId, action) {
      if (action === "increase") {
        this.increaseQuantity(productId);
      } else if (action === "decrease") {
        this.decreaseQuantity(productId);
      }
    },
    addBackdrop() {
      if (!$('.modal-backdrop').length) {
        const backdrop = $('<div class="modal-backdrop fade"></div>');
        $('body').append(backdrop);
        backdrop.fadeIn(100);
      }
    },

    openModal(modalId) {

      let modalElement = this.$refs[modalId];

      $(modalElement).fadeIn(100, function () {
        $(modalElement).addClass('show');
      });
      $('body').addClass('modal-open');
      this.addBackdrop();
    },
    closeModal(modalId) {
      let modalElement = this.$refs[modalId];

      $(modalElement).fadeOut(100, function () {
        $(modalElement).removeClass('show');
        $(modalElement).css('display', 'none');
      });
      $('body').removeClass('modal-open');
      $('.modal-backdrop').fadeOut(100, function () {
        $(this).remove();
      });
    },

  },

}
</script>
<style lang="css" scoped>
.hero-slider{
    height: 40vh !important;
    width: 100%;
}
.hero-img-1 {
  
    height: 40vh !important;
    width: 100%;   
}
@media (max-width: 800px) {
.hero-slider{
    height: 30vh !important;
    width: 100%;
}
.hero-img-1 {
  
  height: 30vh !important;
  width: 100%;   
}

}
.cart-body {
   margin: 0px auto;
   display: -webkit-box;
   display: -webkit-flex;
   display: -ms-flexbox;
   display: flex;
   max-width: 1180px;
}

.cart-main {
   -webkit-box-flex: 1;
   -webkit-flex: 1;
   -ms-flex: 1;
   flex: 1;
   width: 0;
   min-width: 0;
}

.cart-wrap .cart-empty-group {
   margin: 0 auto;
   padding: 0 16px;
   background-color: #f5f5f5;
   text-align: center;
}

.cart-wrap .cart-empty-group .cart-empty-wrap {
   padding-top: 0;
   padding-bottom: 60px;
}

.es--comet-pro-fallback--3ctNGin.es--pc--1mZE03B {
   padding: 30px 30% 0;
}

.es--comet-pro-fallback--3ctNGin {
   margin: 0 auto;
   display: -webkit-box;
   display: -webkit-flex;
   display: -ms-flexbox;
   display: flex;
   -webkit-box-orient: vertical;
   -webkit-box-direction: normal;
   -webkit-flex-direction: column;
   -ms-flex-direction: column;
   flex-direction: column;
   -webkit-box-align: center;
   -webkit-align-items: center;
   -ms-flex-align: center;
   align-items: center;
   padding: 60px 16px 0;
}

.cart-wrap .cart-empty-group img {
   width: 265px;
}

.es--comet-pro-fallback-image--35CZGig {
   width: 220px;
}

.es--comet-pro-fallback-title--1dzE5qT {
   font-size: 20px;
   font-weight: 700;
   margin: 12px 0;
}

.es--comet-pro-fallback-button-container--1Tnc92l.es--vertical--1KfvoOr {
   -webkit-box-orient: vertical;
   -webkit-box-direction: normal;
   -webkit-flex-direction: column;
   -ms-flex-direction: column;
   flex-direction: column;
}

.es--comet-pro-fallback-button-container--1Tnc92l {
   display: -webkit-box;
   display: -webkit-flex;
   display: -ms-flexbox;
   display: flex;
   -webkit-box-align: center;
   -webkit-align-items: center;
   -ms-flex-align: center;
   align-items: center;
}

.es--comet-pro-fallback-button-container--1Tnc92l.es--vertical--1KfvoOr {
   -webkit-box-orient: vertical;
   -webkit-box-direction: normal;
   -webkit-flex-direction: column;
   -ms-flex-direction: column;
   flex-direction: column;
}

.es--comet-pro-fallback-button-container--1Tnc92l {
   display: -webkit-box;
   display: -webkit-flex;
   display: -ms-flexbox;
   display: flex;
   -webkit-box-align: center;
   -webkit-align-items: center;
   -ms-flex-align: center;
   align-items: center;
}



.comet-v2-modal-content {
   width: 100%;
   border-radius: 12px;
}

.comet-v2-modal-content {
   display: -webkit-box;
   display: -webkit-flex;
   display: -ms-flexbox;
   display: flex;
   -webkit-box-orient: vertical;
   -webkit-box-direction: normal;
   -webkit-flex-direction: column;
   -ms-flex-direction: column;
   flex-direction: column;
   -webkit-flex-wrap: nowrap;
   -ms-flex-wrap: nowrap;
   flex-wrap: nowrap;
   background-color: #fff;
   background-color: var(--color-white, #fff);
   line-height: 1.5;
}

.comet-v2-modal-content {
   font-family: system-ui, SF Pro Display;
}

.comet-v2-confirm {
   text-align: center;
}

.comet-v2-modal-body {
   padding: 0 16px;
   -webkit-box-flex: 1;
   -webkit-flex-grow: 1;
   -ms-flex-positive: 1;
   flex-grow: 1;
   font-size: 14px;
   font-size: var(--font-lineheight-1, 14px);
   word-wrap: break-word;
   overflow: auto;
}

.modal-left .comet-v2-confirm-title {

   text-align: left;
}

.comet-v2-confirm-title {
   padding: 0 16px 12px;
   font-size: 16px;
   color: #222;
   font-weight: 700;
}

.modal-left .comet-v2-confirm-content {
   text-align: center;
}

.comet-v2-confirm-content {
   font-size: 14px;
   color: #666;
}

.comet-v2-modal-footer {
   -webkit-flex-shrink: 0;
   -ms-flex-negative: 0;
   flex-shrink: 0;
   padding: 16px;
}

.comet-v2-btn:not(.comet-v2-btn-icon-only):not(.comet-v2-btn-link) {
   min-width: 80px;
}

.comet-v2-modal-footer-vertical .comet-v2-btn+.comet-v2-btn {
   margin-top: 8px;
}

.comet-v2-btn:not(.comet-v2-btn-icon-only):not(.comet-v2-btn-link) {
   min-width: 80px;
}

.comet-v2-btn-slim.comet-v2-btn-important {
   color: #000;
   border-color: #f5f5f5 !important;
   background-color: #f5f5f5;

}

.comet-v2-modal-footer-vertical .comet-v2-btn {
   width: 50%;
}



.comet-v2-btn {
   display: inline-block;
   font-weight: 700;
   white-space: nowrap;
   text-align: center;
   border: 1px solid #ffe6e7 ;
   cursor: pointer;
   -webkit-transition: all .3s cubic-bezier(.645, .045, .355, 1);
   transition: all .3s cubic-bezier(.645, .045, .355, 1);
   -webkit-user-select: none;
   -moz-user-select: none;
   -ms-user-select: none;
   user-select: none;
   -ms-touch-action: manipulation;
   touch-action: manipulation;
   -webkit-box-sizing: border-box;
   box-sizing: border-box;
   padding: 3px 12px;
   height: 32px;
   font-size: 15px;
   font-size: var(--m-font-size-6);
   line-height: 24px;
   background: var(--fc-primary) ;
   color: #fff ;
   position: relative;
   outline: 0;
}


.comet-v2-btn>span {
   display: inline-block;
}

.comet-v2-btn>span {
   display: inline-block;
}
@media (max-width: 1200px) {
    main{
   
 margin-top:130Px !important;
   
}
}
</style>