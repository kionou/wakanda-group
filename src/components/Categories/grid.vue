<template >
    <div>
      <SkeletonFilter v-if="loading " style="z-index: 99999"></SkeletonFilter>
      <div v-else>
         <div  class="row g-3 row-cols-xl-4 row-cols-lg-4 row-cols-2 row-cols-md-2 mt-2"  v-if="CategoriesArray?.length > 0">
         
                        
         <div class="col-xl-3" v-for="(product,index) in CategoriesArray" :key="index">
            <!-- card -->
            <div class="card card-product">
  <div class="card-body p-1">
    <!-- badge -->
    <div class="text-center position-relative">
      <div class="position-absolute top-0 start-0">
        <span
          v-if="isPromotionActive(product) && product.PrixPromo"
          class="badge bg-success text-white"
        >
          -{{ calculateDiscount(product.Prix, product.PrixPromo) }}%
        </span>
      </div>
      <router-link
        :to="{ name: 'detail', params: { id: encodeId(product.id) } }"
        @click="addToRecent(product)"
      >
        <img
          :src="product.PhotoCover ? product.PhotoCover : defaultImage"
          :alt="product.NomProduit"
          :title="product.NomProduit"
          style="width: 100%; height: auto; max-height: 30% !important;"
          class="mb-3 img-fluid"
        />
      </router-link>
    </div>
    <!-- heading -->
    <h2 class="fs-6">
      <router-link
        :to="{ name: 'detail', params: { id: encodeId(product.id) } }"
        @click="addToRecent(product)"
        class="text-inherit text-decoration-none"
      >
        {{ product.NomProduit }}
      </router-link>
    </h2>

    <div
      class="d-flex justify-content-between align-items-center mt-3"
      v-if="product?.SurCommande != 1"
    >
      <div>
        <span v-if="isPromotionActive(product) && product?.PrixPromo" class="text-danger">
          {{ formatPrice(convertPrice(product.PrixPromo), selectedDevise.symbol) }}
        </span>
        <span v-else class="text-danger">
          {{ formatPrice(convertPrice(product?.Prix), selectedDevise.symbol) }}
        </span>
        <br />
        <span
          v-if="isPromotionActive(product) && product?.PrixPromo"
          class="text-muted text-decoration-line-through"
        >
          {{ formatPrice(convertPrice(product.Prix), selectedDevise.symbol) }}
        </span>
      </div>
    </div>
    <div class="prix">
      <p class="mb-0" v-if="product?.SurCommande != 1">
        <span
          v-if="product?.magasins_sum_quantite_reel !== null"
          class="badge bg-success text-white"
        >Disponible</span>
        <span v-else class="badge bg-danger text-white">Pas disponible</span>
      </p>
      <p v-else style="width: 100%" class="text-center">
        <span class="badge bg-success text-white">Sur commande</span>
      </p>

      <div v-if="product?.SurCommande != 1">
        <span
          v-if="
            product?.magasins_sum_quantite_reel === null ||
            product?.magasins_sum_quantite_reel === 0
          "
          class="text-uppercase small Icons"
          disabled
        >
          <div class="icon-cards" disabled>
            <div v-if="loadingItems[product?.id]">
              <LoaderBtn class="loadingbtn"></LoaderBtn>
            </div>
            <div v-else>
              <i class="bi bi-cart2 fs-4"></i>
            </div>
          </div>
        </span>

        <span
          v-else
          class="text-uppercase small"
          @click="addProductToCart(product)"
          :disabled="loadingItems[product?.id]"
        >
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
      </div>
          
                   
    </div>
</template>
<script>
import 'slick-carousel';
import LoadingSkeleton from '@/components/others/loader/LoadingSkeleton.vue';
import defaultImage from '@/assets/images/products/product-img-2.jpg'
import defaultImageCategorie from '@/assets/img/logo_mobile.png'
import { mapActions, mapGetters } from 'vuex';
import { useToast } from "vue-toastification";
import LoaderBtn from '@/components/others/loader/loaderbtn.vue';
import axios from '@/lib/axiosConfig';
import SkeletonFilter from '../others/loader/SkeletonFilter.vue';



export default {
  props: ['id','dataProduct'],
//   props: {
//       data: {
//         type: Object,
//         required: true,
//       },
//     },
  components: {
   LoadingSkeleton, LoaderBtn , SkeletonFilter
  },
  computed: {
    ...mapGetters('cart', ['alertMessage', 'loading']),
    ...mapGetters("devise", ["selectedDevise", "getSelectedRate"]),
  },
  data() {
    return {
        CategoriesArray:[],
      defaultImage: defaultImage,
      loading: true,
      loadingItems: {},  
    }
  },
  watch: {
      dataProduct: {
        immediate: true, 
        deep: true, 
        handler(newData) {
          
          this.FilterProduct(newData); 
        },
      },
    },
 async mounted() {
    
    await this.getCategoriesAll()

  },
  methods: {
   
    async getCategoriesAll() {
      this.loading = true
      try {
        const response = await axios.get(`/categories/${this.id}`)
        if (response.data.status === "success") {
          this.CategoriesArray = response.data?.data?.produits 
          this.loading = false
        }

      } catch (error) {
        console.log('error', error)
      }
    },
    async FilterProduct(data){
      if(data === ""){
         return
      }else{
         this.loading = true
      try {
        const response = await axios.get('filtrer-produits',{
         params:data
        })

        if (response.data.status === "success") {
         this.CategoriesArray = []
         this.CategoriesArray = response.data?.data
         this.loading = false
         console.log('data',this.CategoriesArray,this.CategoriesArray?.length )

        }

      } catch (error) {
        console.log('error', error)
      }
       
      }
      
      
       
  },
    truncateText(text, maxLength) {
      if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...'; // Ajoute "..." à la fin si le texte est trop long
      }
      return text;
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
    isPromotionActive(product) {
    if (!product || !product.PrixPromo || !product.DateFinPromo) {
      return false;
    }
    
    const today = new Date();
    const endDate = new Date(product.DateFinPromo);
    
    // Vérifier également la date de début si elle existe
    if (product.DateDebutPromo) {
      const startDate = new Date(product.DateDebutPromo);
      return today >= startDate && today <= endDate;
    }
    
    return today <= endDate;
  },
  },

}
</script>
<style lang="css" scoped>
**.cart-body {
   margin: 0px auto;
   display: -webkit-box;
   display: -webkit-flex;
   display: -ms-flexbox;
   display: flex;
   /* width: 1180px; */
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
    
</style>