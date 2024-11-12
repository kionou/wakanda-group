<template >
   <div>
      <main>
         <div class="mt-4">
            <div class="container">
               <!-- row -->
               <div class="row">
                  <!-- col -->
                  <div class="col-12">
                     <nav class="mb-3" aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0">
                           <li class="breadcrumb-item"><a href="/">Accueil ></a></li>
                           <li class="breadcrumb-item"><router-link to="/categories">{{ product.categorie?.NomCategorie }} ></router-link></li>
                           <li class="breadcrumb-item active" aria-current="page">{{ product.marque?.Nom }} ></li>
                           <li class="breadcrumb-item " aria-current="page">{{ product?.NomProduit }}</li>
                        </ol>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
         <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
               <section class="mt-2">
                  <div class="container">
                     <div class="row">
                        <div class="">
                           <!-- img slide -->
                           <div class="product" id="product">
                              <div v-for="(image, index) in images" :key="index" class="zoom" @mousemove="zoom"
                                 :style="{ backgroundImage: `url(${image})` }">
                                 <img :src="image" alt="" />
                              </div>
                           </div>
                           <!-- product tools -->
                           <div class="product-tools">
                              <div class="thumbnails row g-3" id="productThumbnails">
                                 <div class="col-3" v-for="(image, index) in images" :key="index">
                                    <div class="thumbnails-img">
                                       <img :src="image" alt="" />
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
   
   
   
                     </div>
                  </div>
               </section>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
               <section class="">
                  <div class="container">
                     <div class="row">
                        <div class="col-md-12">
                           <ul class="nav nav-pills nav-lb-tab" id="myTab" role="tablist">
                              <!-- nav item -->
                              <li class="nav-item" role="presentation">
                                 <!-- btn -->
                                 <button class="nav-link active" id="product-tab" data-bs-toggle="tab"
                                    data-bs-target="#product-tab-pane" type="button" role="tab"
                                    aria-controls="product-tab-pane" aria-selected="true">
                                    Product Details
                                 </button>
                              </li>
                              <!-- nav item -->
                              <li class="nav-item" role="presentation">
                                 <!-- btn -->
                                 <button class="nav-link" id="details-tab" data-bs-toggle="tab"
                                    data-bs-target="#details-tab-pane" type="button" role="tab"
                                    aria-controls="details-tab-pane" aria-selected="false">
                                    Information
                                 </button>
                              </li>
   
   
                           </ul>
                           <!-- tab content -->
                           <div class="tab-content" id="myTabContent">
                              <!-- tab pane -->
                              <div class="tab-pane fade show active" id="product-tab-pane" role="tabpanel"
                                 aria-labelledby="product-tab" tabindex="0">
                                 <div class="my-2">
                                    <div class=" mt-6 mt-md-0">
                                       <div class="row">
                                          <div class="col-6">
                                             <div class="card ">
                                                <video :src="product.Videos" class="h-100 w-100 " controls
                                                   style="border-radius:5px ">
   
                                                </video>
                                             </div>
                                          </div>
                                          <div class="col-6">
                                             <div class="ms-3">
                                                <h3 class="mb-1">{{ product.NomProduit }}</h3>
                                                <div class="mb-4">
                                                   <!-- rating -->
                                                   <!-- rating -->
                                                   <small class="text-warning">
                                                      <i class="bi bi-star-fill"></i>
                                                      <i class="bi bi-star-fill"></i>
                                                      <i class="bi bi-star-fill"></i>
                                                      <i class="bi bi-star-fill"></i>
                                                      <i class="bi bi-star-half"></i>
                                                   </small>
                                                   <a href="#" class="ms-2">(30 reviews)</a>
                                                </div>
                                                <div class="fs-5">
                                                   <!-- price -->
                                                    <span class="fw-bold text-dark">{{ formatPrice(product.Prix)}} {{ product.devise?.Symbol }} </span>
                                                   <!-- <span class="text-decoration-line-through text-muted">6 500 F CFA</span> -->
                                                   <!-- <span><small class="fs-6 ms-2 text-danger">26% Off</small></span> -->
                                                </div>
                                             </div>
                                          </div>
   
                                       </div>
   
                                       <hr class="my-6" />
   
                                       <div class="row align-items-center">
                                          <div class="col-12">
                                             <div class="row">
                                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2">
                                                   <div class="row justify-content-center align-items-center">
                                                      <!-- Si le produit est dans le panier, afficher les boutons "+" et "-" -->
                                                      <div class="col-6" v-if="isInCart(product.idProducts)">
                                                         <div class="input-group input-spinner">
                                                            <input type="button" value="-"
                                                               class="button-minus btn btn-sm bg-white"
                                                               :disabled="isLoadingItem(product.idProducts)"
                                                               @click="updateQuantity(product.idProducts, 'decrease')" />
                                                            <!-- Quantité -->
                                                            <template v-if="isLoadingItem(product.idProducts)">
                                                               <!-- Loader à la place de l'input pendant le chargement -->
                                                               <LoaderBtn class="loadingbtn"></LoaderBtn>
                                                            </template>
                                                            <template v-else>
                                                               <!-- Input de quantité lorsqu'il n'y a pas de chargement -->
                                                               <input type="number" :value="getProductQuantity(product.idProducts)"
                                                                  class="quantity-field form-control-sm form-input"
                                                                  disabled />
                                                            </template>
                                                            <input type="button" value="+"
                                                               class="button-plus btn btn-sm bg-white"
                                                               :disabled="isLoadingItem(product.idProducts)"
                                                               @click="updateQuantity(product.idProducts, 'increase')" />
                                                         </div>
                                                      </div>
   
                                                      <!-- Si le produit n'est pas dans le panier, afficher le bouton "Add to cart" -->
                                                      <div class="col-6" v-else>
                                                         <button class="btn btn-primary w-100"    v-if="isLoadingItem(product.idProducts)"
                                                            >
                                                            <LoaderBtn class="loadingbtn"></LoaderBtn>
                                                         </button>
                                                         <button v-else class="btn btn-primary"
                                                            @click="addToCartProduct(product)">
                                                            <i class="feather-icon icon-shopping-bag me-2"></i>
                                                            Add to cart
                                                         </button>
                                                      </div>
                                                   </div>
                                                </div>
   
                                                <!-- Boutons de partage et wishlist -->
                                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                                   <div class="row justify-content-center align-items-center">
                                                      <div class="col-6">
                                                         <a class="btn btn-light" href="shop-wishlist.html"
                                                            data-bs-toggle="tooltip" aria-label="Wishlist">
                                                            <i class="feather-icon icon-heart"></i>
                                                         </a>
                                                      </div>
   
                                                      <div class="col-6">
                                                         <div class="dropdown">
                                                            <a class="btn btn-outline-secondary dropdown-toggle" href="#"
                                                               role="button" data-bs-toggle="dropdown">Share</a>
                                                            <ul class="dropdown-menu">
                                                               <li><a class="dropdown-item" href="#"><i
                                                                        class="bi bi-facebook me-2"></i> Facebook</a></li>
                                                               <li><a class="dropdown-item" href="#"><i
                                                                        class="bi bi-twitter me-2"></i> Twitter</a></li>
                                                               <li><a class="dropdown-item" href="#"><i
                                                                        class="bi bi-instagram me-2"></i> Instagram</a>
                                                               </li>
                                                            </ul>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
   
   
                                       <hr class="my-6" />
                                       <div>
                                          <!-- table -->
                                          <table class="table table-borderless table-striped mb-0">
                                             <tbody>
                                                <tr>
                                                   <td>Product Code:</td>
                                                   <td>FBB00255</td>
                                                </tr>
                                                <tr>
                                                   <td>Availability:</td>
                                                   <td>In Stock</td>
                                                </tr>
                                                <tr>
                                                   <td>Type:</td>
                                                   <td>Fruits</td>
                                                </tr>
                                                <tr>
                                                   <td>Shipping:</td>
                                                   <td>
                                                      <small>
                                                         01 day shipping.
                                                         <span class="text-muted">( Free pickup today)</span>
                                                      </small>
                                                   </td>
                                                </tr>
                                             </tbody>
                                          </table>
                                       </div>
   
   
   
                                    </div>
                                 </div>
                              </div>
                              <!-- tab pane -->
                              <div class="tab-pane fade" id="details-tab-pane" role="tabpanel"
                                 aria-labelledby="details-tab" tabindex="0">
                                 <div class="my-8">
                                    <div class="row">
                                       <div class="col-12">
                                          <h4 class="mb-4">Details</h4>
                                       </div>
                                       <div class="col-12 col-lg-6">
                                          <table class="table table-striped">
                                             <!-- table -->
                                             <tbody>
                                                <tr>
                                                   <th>Weight</th>
                                                   <td>1000 Grams</td>
                                                </tr>
                                                <tr>
                                                   <th>Ingredient Type</th>
                                                   <td>Vegetarian</td>
                                                </tr>
                                                <tr>
                                                   <th>Brand</th>
                                                   <td>Dmart</td>
                                                </tr>
                                                <tr>
                                                   <th>Item Package Quantity</th>
                                                   <td>1</td>
                                                </tr>
                                                <tr>
                                                   <th>Form</th>
                                                   <td>Larry the Bird</td>
                                                </tr>
                                                <tr>
                                                   <th>Manufacturer</th>
                                                   <td>Dmart</td>
                                                </tr>
                                                <tr>
                                                   <th>Net Quantity</th>
                                                   <td>340.0 Gram</td>
                                                </tr>
                                                <tr>
                                                   <th>Product Dimensions</th>
                                                   <td>9.6 x 7.49 x 18.49 cm</td>
                                                </tr>
                                             </tbody>
                                          </table>
                                       </div>
                                       <div class="col-12 col-lg-6">
                                          <table class="table table-striped">
                                             <!-- table -->
                                             <tbody>
                                                <tr>
                                                   <th>ASIN</th>
                                                   <td>SB0025UJ75W</td>
                                                </tr>
                                                <tr>
                                                   <th>Best Sellers Rank</th>
                                                   <td>#2 in Fruits</td>
                                                </tr>
                                                <tr>
                                                   <th>Date First Available</th>
                                                   <td>30 April 2022</td>
                                                </tr>
                                                <tr>
                                                   <th>Item Weight</th>
                                                   <td>500g</td>
                                                </tr>
                                                <tr>
                                                   <th>Generic Name</th>
                                                   <td>Banana Robusta</td>
                                                </tr>
                                             </tbody>
                                          </table>
                                       </div>
                                    </div>
                                 </div>
                              </div>
   
   
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
   
            </div>
         </div>
   
   
         <!-- section -->
         <section class="my-lg-5 my-5">
            <div class="container-fluid">
               <!-- row -->
               <div class="row">
                  <div class="col-12">
                     <!-- heading -->
                     <h3>Related Items</h3>
                  </div>
               </div>
               <!-- row -->
               <div class="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-2 mt-2">
                  <!-- col -->
   
                  <div class="col">
                     <!-- card -->
                     <div class="card card-product h-100">
                        <div class="card-body position-relative">
                           <div class="text-center position-relative">
                              <!-- img -->
                              <router-link to="/detail"><img src="@/assets/images/products/product-img-3.jpg"
                                    alt="Grocery Ecommerce Template" class="mb-3 img-fluid" /></router-link>
                              <!-- action btn -->
   
                           </div>
                           <!-- title -->
                           <h2 class="fs-6"><router-link to="/detail" class="text-inherit text-decoration-none">Cadbury
                                 5 star </router-link></h2>
                           <div>
                              <div class="d-flex justify-content-between align-items-center mt-3">
                                 <div>
                                    <span class="text-danger">2000 FCFA</span>
   
                                 </div>
                                 <div><span class="text-uppercase small ">
                                       <div class="icon-card">
                                          <div>
                                             <i class="bi bi-cart2 fs-4"></i>
                                          </div>
   
                                       </div>
                                    </span></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
   
                  <div class="col">
                     <!-- card -->
                     <div class="card card-product h-100">
                        <div class="card-body position-relative">
                           <div class="text-center position-relative">
                              <!-- img -->
                              <router-link to="/detail"><img src="@/assets/images/products/product-img-3.jpg"
                                    alt="Grocery Ecommerce Template" class="mb-3 img-fluid" /></router-link>
                              <!-- action btn -->
   
                           </div>
                           <!-- title -->
                           <h2 class="fs-6"><router-link to="/detail" class="text-inherit text-decoration-none">Cadbury
                                 5 star </router-link></h2>
                           <div>
                              <div class="d-flex justify-content-between align-items-center mt-3">
                                 <div>
                                    <span class="text-danger">2000 FCFA</span>
   
                                 </div>
                                 <div><span class="text-uppercase small ">
                                       <div class="icon-card">
                                          <div>
                                             <i class="bi bi-cart2 fs-4"></i>
                                          </div>
   
                                       </div>
                                    </span></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
   
   
                  <div class="col">
                     <!-- card -->
                     <div class="card card-product h-100">
                        <div class="card-body position-relative">
                           <div class="text-center position-relative">
   
                              <!-- img -->
                              <router-link to="/detail" href="#!"><img src="@/assets/images/products/product-img-1.jpg"
                                    alt="Grocery Ecommerce Template" class="mb-3 img-fluid" /></router-link>
                              <!-- action btn -->
   
                           </div>
                           <!-- title -->
                           <h2 class="fs-6"><router-link to="/detail" class="text-inherit text-decoration-none">Haldiram's
                                 Sev
                                 Bhujia</router-link></h2>
                           <div class="d-flex justify-content-between align-items-center mt-3">
                              <div>
                                 <span class="text-danger">2000 FCFA</span>
   
                              </div>
                              <div><span class="text-uppercase small ">
                                    <div class="icon-card">
                                       <div>
                                          <i class="bi bi-cart2 fs-4"></i>
                                       </div>
   
                                    </div>
                                 </span></div>
                           </div>
   
   
                        </div>
                     </div>
                  </div>
                  <div class="col">
                     <!-- card -->
                     <div class="card card-product h-100">
                        <div class="card-body position-relative">
                           <div class="text-center position-relative">
                              <!-- img -->
                              <router-link to="/detail"><img src="@/assets/images/products/product-img-2.jpg"
                                    alt="Grocery Ecommerce Template" class="mb-3 img-fluid" /></router-link>
                              <!-- action btn -->
   
                           </div>
                           <!-- title -->
                           <h2 class="fs-6"><router-link to="/detail" class="text-inherit text-decoration-none">Britannia
                                 NutriChoice
                              </router-link></h2>
                           <div class="d-flex justify-content-between align-items-center mt-3">
                              <div>
                                 <span class="text-danger">2000 FCFA</span>
   
                              </div>
                              <div><span class="text-uppercase small ">
                                    <div class="icon-card">
                                       <div>
                                          <i class="bi bi-cart2 fs-4"></i>
                                       </div>
   
                                    </div>
                                 </span></div>
                           </div>
                        </div>
                     </div>
                  </div>
   
                  <div class="col">
                     <!-- card -->
                     <div class="card card-product h-100">
                        <div class="card-body position-relative">
                           <div class="text-center position-relative">
   
                              <!-- img -->
                              <router-link to="/detail" href="#!"><img src="@/assets/images/products/product-img-1.jpg"
                                    alt="Grocery Ecommerce Template" class="mb-3 img-fluid" /></router-link>
                              <!-- action btn -->
   
                           </div>
                           <!-- title -->
                           <h2 class="fs-6"><router-link to="/detail" class="text-inherit text-decoration-none">Haldiram's
                                 Sev
                                 Bhujia</router-link></h2>
                           <div class="d-flex justify-content-between align-items-center mt-3">
                              <div>
                                 <span class="text-danger">2000 FCFA</span>
   
                              </div>
                              <div><span class="text-uppercase small ">
                                    <div class="icon-card">
                                       <div>
                                          <i class="bi bi-cart2 fs-4"></i>
                                       </div>
   
                                    </div>
                                 </span></div>
                           </div>
   
   
                        </div>
                     </div>
                  </div>
   
   
               </div>
            </div>
         </section>
      </main>
   </div>
</template>
<script>
import { tns } from 'tiny-slider/src/tiny-slider';
import { mapGetters, mapActions } from 'vuex';
import { useToast } from "vue-toastification";
import LoaderBtn from '@/components/others/loader/loaderbtn.vue';
import axios from '@/lib/axiosConfig';

export default {
  setup() {
    const toast = useToast(); // Initialiser useToast
    return { toast };
  },
  props: ['id'],
  data() {
    return {
      images: [
        'https://freshcart.codescandy.com/assets/images/products/product-single-img-1.jpg',
        'https://freshcart.codescandy.com/assets/images/products/product-single-img-2.jpg',
        'https://freshcart.codescandy.com/assets/images/products/product-single-img-3.jpg',
        'https://freshcart.codescandy.com/assets/images/products/product-single-img-4.jpg',

      ],
      product: "",
    }
  },
  components: {
    LoaderBtn
  },
  computed: {
    ...mapGetters("cart", ["cartItems", "alertMessage", "isLoadingItem"]),

    // Vérifier si le produit est déjà dans le panier
    isInCart() {
      return (productId) => {
        return this.cartItems.some(item => item.idProducts === productId);
      };
    },

    // Récupérer la quantité du produit dans le panier
    getProductQuantity() {
      return (productId) => {
        const item = this.cartItems.find(item => item.idProducts === productId);
        return item ? item.quantity : 1;
      };
    }
  },
  watch: {
    alertMessage(newMessage) {
      if (newMessage) {
        this.toast.success(newMessage);
      }
    }
  },
  methods: {
    zoom(event) {
      const t = event.currentTarget;
      const offsetX = event.offsetX || event.touches[0].pageX;
      const offsetY = event.offsetY || event.touches[0].pageY;
      const x = (offsetX / t.offsetWidth) * 100;
      const y = (offsetY / t.offsetHeight) * 100;
      t.style.backgroundPosition = `${x}% ${y}%`;
    },
 async  recupererProduits() {

      const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2RhdGEud2FrYW5kYS5iZXN0L2FwaS9zeXN0ZW0vbG9naW4iLCJpYXQiOjE3MzAyNzYzODEsIm5iZiI6MTczMDI3NjM4MSwianRpIjoiVU5sN3J3RXBhTFZGdG1OaCIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.H40wgUqkMXolIzMq_zTz8Mg7Bp-QsyjbarTijztMzi4'
      try {
        const response = await axios.get(`/produits/${this.id}`,{
            headers: {
            Authorization: `Bearer ${token}`,
          },

        })
        if (response.data.status === "success") {
          this.product = response.data.data
          console.log('response ', this.product);


        }

      } catch (error) {
        console.log('error', error)
      }
    },
    ...mapActions('cart', ['addToCart', 'increaseQuantity', 'decreaseQuantity']),

    // Ajouter au panier
    addToCartProduct(product) {
      this.addToCart({ ...product, quantity: 1 });
    },

    // Mettre à jour la quantité (augmenter/diminuer)
    updateQuantity(productId, action) {
      if (action === 'increase') {
        this.increaseQuantity(productId);
      } else if (action === 'decrease') {
        this.decreaseQuantity(productId);
      }
    },
    formatPrice(value) {
      return parseFloat(value).toLocaleString(); // Formatage avec séparateurs de milliers
    },
  },
  async mounted() {

    await this.recupererProduits()
    var modalSlider, productSlider;
    0 < document.querySelectorAll(".productModal").length &&
      (modalSlider = tns({
        container: "#productModal",
        items: 1,
        startIndex: 0,
        navContainer: "#productModalThumbnails",
        navAsThumbnails: !0,
        autoplay: !1,
        autoplayTimeout: 1500,
        swipeAngle: !1,
        speed: 1500,
        controls: !1,
        autoplayButtonOutput: !1,
        loop: !1,
      })),
      document.querySelectorAll(".product").length &&
      (tns({
        container: "#product",
        items: 1,
        startIndex: 0,
        navContainer: "#productThumbnails",
        navAsThumbnails: !0,
        autoplay: !1,
        autoplayTimeout: 1500,
        swipeAngle: !1,
        speed: 1500,
        controls: !1,
        autoplayButtonOutput: !1,
      }));





  },



}
</script>
<style lang="css" scoped>

</style>