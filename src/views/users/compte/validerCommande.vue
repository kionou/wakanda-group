<template >
  <div>
    <SkeletonCommande v-if="loading " style="z-index: 99999"></SkeletonCommande>

     <main v-else>
        <section class="mb-lg-14 mb-8 mt-8">
           <div v-if="cartItems.length > 0">
              <div class="row justify-content-between">
                 <div class=" col-xl-8 col-lg-8 col-md-7 ">
  
                  <div class="card p-4 card-product mb-4" style="width: 100%;">
                    <div class="row align-items-center" style="width: 100%;">
                      <div class="col-xl-11">
                           <h5 class=""><a href="#!" class="text-inherit">Adresse de livraison</a></h5>
                           <div class="small fs-6">
                              <span>{{ adresse?.Prenoms ?? '-' }} {{ adresse?.Nom ?? '-' }}</span>
                           </div>
                           <div class="">
                              <ul class="list-unstyled mb-0 small text-muted">
                                 <li> {{ adresse?.Whatsapp ?? '-' }}</li>
                                 <li> {{ adresse?.ville ?? '-' }} - ( {{ adresse?.pays ?? '-' }})</li>
                              </ul>
                           </div>
                           <div>
                              
                           </div>
                        </div>
                        <div class="col-xl-1 signin">
                          <span class="d-flex"> <i class="bi bi-pen me-1"></i> Changer</span>
                          </div>
                    </div>
                        
                     </div>

                     <div class="card p-4 card-product mb-4">
                        <!-- heading -->
                        <div class="d-flex justify-content-between mb-0 align-items-center">
                           <h5 class="mb-0">Moyens de paiement </h5>
                        </div>
                        <ul class="list-group list-group-flush">
              
                           <li class="list-group-item py-5 px-0"  v-for="(mode, index) in ModesOptions" :key="index">
                              <div class="d-flex justify-content-start align-items-center">
                                <input 
                                    class="form-check-input me-3" 
                                    type="radio" 
                                    :name="'flexRadioDefault' + index" 
                                    :id="'homeRadio' + index" 
                                    v-model="selectedMode" 
                                    :value="mode.id" 
                                />
                                 <div class="d-flex">
                                  
                                  
                                    <img :src="mode.Logo !== null ? mode.Logo : defaultImage"
                                        :alt="mode.Label"  width="24" height="24" style="width:50px ; height:50px">
                                    <div class="ms-4">
                                       <h5 class="mb-0 h6 h6">{{ mode?.Label }}</h5>
                                       <!-- <p class="mb-0 small">Expires in 10/2023</p> -->
                                    </div>
                                 </div>
                                
                              </div>
                           </li>
                          
                        </ul>
                     </div>

                     <div class="card p-4 card-product mb-4">
                        <!-- heading -->
                        <div class="d-flex justify-content-between mb-0 align-items-center">
                           <h5 class="mb-0">Détails de livraison </h5>
                        </div>
                        <div class="mt-2">
                          <div class=" ">Point de Relais</div>
                          <span class="text-muted">Livraison dans  <span class="text-dark">02 </span>  à <span  class="text-dark">04 jours</span> </span>
                         <div class="card my-3">
                          <div class="card-header">Point de ralais</div>
                          <div class="card-body text-muted fw-bold">
                            <span class="text-dark">Agence {{adresse.relais?.NomPointRelais}} ({{adresse.relais?.Ville}})
                            </span> <br>
                              <span v-html="adresse?.relais?.Description"></span>
                          </div>
                         </div>
                        </div>
                        <div class="card">
                          <div class="card-header">Article(s)</div>
                          <div class="card-body">
                            <ul class="list-group list-group-flush card">
                     
                     <li class="list-group-item py-3 ps-0 border-top" v-for="(item, index) in cartItems" :key="index" style="border-top:0px">
                        <!-- row -->
                        <div class="row align-items-center">
                           <div class="col-6 col-md-6 col-lg-7">
                              <div class="d-flex">
                                 <img :src="item.PhotoCover ? item.PhotoCover : defaultImage" :alt="item.NomProduit"
                                    :title="item.Nomproduit" class="icon-shape icon-xxl ms-2" />
                                 <div class="ms-3">
                                    <!-- title -->
                                    <router-link :to="{ name: 'detail', params: { id: item.id }}"
                                       class="text-inherit">
                                       <h6 class="mb-0">{{ item.NomProduit }}</h6>
                                    </router-link>
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
                          </div>
                        </div>
                      
                     </div>
                 
                    
  
                 </div>
  
                 <div class="col-xl-4 col-lg-4 col-md-5">
  <!-- card -->
  <div class="mb-5 card ms-5">
    <div class="card-body p-6">
      <!-- heading -->
      <h2 class="h5 mb-4">Résumé de la commande</h2>
      <div class="card mb-2">
        <!-- list group -->
        <ul class="list-group list-group-flush">
          <!-- list group item: Item Subtotal -->
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="me-auto">
              <div>Total articles</div>
            </div>
            <span>{{ formatPrice(convertPrice(total), selectedDevise?.symbol) }} </span>
          </li>

          <!-- list group item: Service Fee -->
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="me-auto">
              <div>Frais de livraison</div>
            </div>
            <span>{{ formatPrice(convertPrice(serviceFee), selectedDevise?.symbol) }} </span>
          </li>

          <!-- list group item: Subtotal -->
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="me-auto">
              <div class="fw-bold">Total</div>
            </div>
            <span class="fw-bold">{{ formatPrice(convertPrice(totalWithDiscount), selectedDevise?.symbol)}} </span>
          </li>
        </ul>
      </div>
      <div class="mt-4">
        <form class="row align-items-center" @submit.prevent="applyCoupon">
          <div class="col-xl-8">
            <MazInput
              v-model="code"
              color="warning"
              name="code"
              size="sm"
              rounded-size="sm"
              type="text"
              placeholder="Code promo"
               :disabled="couponApplied"
            />
          </div>
          <div class="col-xl-4 text-end">
            <button class="btn btn-primary " :disabled="!code || loadingCoupon || couponApplied">
              {{ loadingCoupon ? "Chargement..." : "Appliquer" }}
            </button>
          </div>
        </form>
      </div>
      <div class="mb-1 mt-4">
        <!-- btn -->
        <router-link to="#" @click="ValiderCommande('valider')">
          <button class="btn btn-primary  d-flex align-items-center w-50"    v-if="LoadingItem['valider']" :disabled="LoadingItem['valider']" >
                    <LoaderBtn class="loadingbtn"></LoaderBtn> chargement...
                 </button>
          <button v-else class="btn btn-primary btn-lg d-flex justify-content-between align-items-center">
            Commander
          </button>
        </router-link>
      </div>

      <div class="col-sm-12">
        <small class="text-center text-dark row">
          <div class="col-xl-12">En cliquant sur "Valider", je confirme avoir lu et compris</div>
          <b class="col-xl-12 text-primary">Les termes et conditions</b>
        </small>
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
import axiosInstance from '@/lib/axiosConfig';
import SkeletonCommande from '@/components/others/loader/SkeletonCommande.vue';


export default {

 setup() {
   const toast = useToast(); // Initialiser useToast
   return { toast };
 },
 components: {
   LoaderBtn , SkeletonCommande
 },

 data() {
   return {
     defaultImage: defaultImage,
     ToId:"",
     code:"",
     adresse:"",
     ModesOptions:[],
     selectedMode:"",
     LoadingItem:{},
     loading:true,
     loadingCoupon: false,
     discountPercentage: 0,
     couponApplied: false,
     CouponId:'',
     TotalGeneral:0

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
   loggedInUser() {
      return this.$store.getters["auth/myAuthenticatedUser"];
    },
  
   serviceFee() {
     return this.adresse?.relais?.FraisLivraision;
   },
   total() {
     return this.subtotal ;
   },
   totalWithDiscount() {
    const discountAmount = (this.subtotal * this.discountPercentage) / 100;
    this.TotalGeneral = this.subtotal + this.serviceFee - discountAmount;
    return this.subtotal + this.serviceFee - discountAmount;
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
async mounted() {
 
  if(this.loggedInUser === null){
    this.$router.push('/login-client')
  }
  await this.getAdresse()
  await this.getModes()
 },
 methods: {
   ...mapActions('cart', ['increaseQuantity', 'decreaseQuantity', 'removeItemFromCart' , 'clearCart']),

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
   async getAdresse() {
        try {
          const response = await axiosInstance.get("/repertoire-clients", {
            headers: {
              Authorization: `Bearer ${this.loggedInUser.token}`,
            },
            params:{connected_user:1}
          });
          if (response.data.status === "success") {
            this.adresse  = response?.data?.data?.data?.find(a => a.IsDefault === 1)
            console.log( ' this.adresse',this.adresse)
         
            // this.loading = false
        
           
          
          }
        } catch (error) {
          console.log(error)
        }
      },
      async getModes() {
      try {

        const response = await axiosInstance.get("/modes", {
          headers: {
            Authorization: `Bearer ${this.loggedInUser.token}`,
            "Content-Type": "application/json",
          },
          params:{statut:1}
        });

      
        this.ModesOptions = response.data?.data?.data;
        this.selectedMode =  this.ModesOptions[0]?.id
        this.loading = false


      } catch (error) {
        console.error(
          "Erreur lors de la récupération des utilisateurs:",
          error
        );
      }
    },
    async applyCoupon() {
      if (!this.code) return;
      this.loadingCoupon = true;
   

      try {
        
        const response = await axiosInstance.get(`/coupons/${this.code}`, {
          headers: {
            Authorization: `Bearer ${this.loggedInUser.token}`,
            "Content-Type": "application/json",
          },
        });

  
        if (response.data?.status === "success") {
          if( response.data?.data?.order == null){
            this.discountPercentage = response.data?.data?.Remise;
          this.CouponId = response.data?.data?.id;
          this.couponApplied = true
          this.toast.success('Code promo appliqué avec succès !', {
          position: "top-right",
          timeout: 2000,
          closeOnClick: true,
        });
          }else{
            this.code = ''
            this.toast.error('Code promo non appliqué  coupon invalide !', {
              position: "top-right",
              timeout: 2000,
              closeOnClick: true,
            });
          }
        
        
        } else {
          this.toast.error('Code promo invalide !', {
          position: "top-right",
          timeout: 2000,
          closeOnClick: true,
        });
        
        }
      } catch (error) {
        console.error(error);
        this.toast.error("Une erreur s'est produite lors de l'application du code promo.", {
          position: "top-right",
          timeout: 2000,
          closeOnClick: true,
        });
    
      } finally {
        this.loadingCoupon = false;
      }
    },
 async   ValiderCommande(modalId){
  this.LoadingItem[modalId] = true
      const produits = []
      this.cartItems?.map(p =>{  produits.push({
          produit:p.id,
          total: (p.PrixPromo ? p.PrixPromo : p.Prix) * p.quantity,
          quantite:p.quantity
        })
      })

      const data = {
        AddressId :this.adresse.id,
        ClientId:this.loggedInUser?.id_user,
        ModePaymentId:this.selectedMode, 
         produits:produits,
         TotalGeneral:this.TotalGeneral

      }
    if ( this.code) {
      data.CouponId = this.CouponId
    }
    

      try {

const response = await axiosInstance.post("/commandes", data,
  {
    headers: {
      Authorization: `Bearer ${this.loggedInUser.token}`,
      "Content-Type": "application/json",
    },
  });
if (response.data.status === "success") {
  this.LoadingItem[modalId] = false
  this.toast.success('Commande appliqué avec succès !', {
          position: "top-right",
          timeout: 2000,
          closeOnClick: true,
        });
    this.clearCart();


}

} catch (error) {
console.log(error)
this.LoadingItem[modalId] = false
}


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
.cart-body {
  margin: 0px auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 1180px;
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
.signin {
color: rgba(88, 87, 87, 0.822);
font-size: 14px;
text-align: center;
margin-top: 20px;
}



.signin span {
color: royalblue;
}

.signin span:hover {
text-decoration: underline royalblue;
cursor: pointer;
}
   
.card > .list-group {
   
    border-top:0px ;
}
</style>