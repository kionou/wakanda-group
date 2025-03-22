<template>
  <div>
    <SkeletonDetail v-if="loading" style="z-index: 99999"></SkeletonDetail>
    <main v-else>
      <div class="mt-4">
        <div class="container">
          <!-- row -->
          <div class="row">
            <!-- col -->
            <div class="col-12">
              <nav class="mb-3" aria-label="breadcrumb">
                <ol class="breadcrumb mb-0">
                  <li class="breadcrumb-item"><a href="/">Accueil ></a></li>
                  <li class="breadcrumb-item">
                    <router-link to="/categories"
                      >{{ product.categorie?.NomCategorie }} ></router-link
                    >
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    {{ product.marque?.Nom }} >
                  </li>
                  <li class="breadcrumb-item" aria-current="page">
                    {{ product?.NomProduit }}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-xl-1 col-lg-1 col-md-1"></div>
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
          <section class="mt-2">
            <div class="container">
              <div class="row">
                <div class="">
                  <!-- img slide -->
                  <div class="product" id="product">
                    <div
                      v-for="(image, index) in images"
                      :key="index"
                      class="zoom"
                      @mousemove="zoom"
                      :style="{ backgroundImage: `url(${image})` }"
                    >
                      <img :src="image" alt="" />
                    </div>
                  </div>
                  <!-- product tools -->
                  <div class="product-tools">
                    <div class="thumbnails row g-3" id="productThumbnails">
                      <div
                        class="col-3"
                        v-for="(image, index) in images"
                        :key="index"
                      >
                        <div class="thumbnails-img">
                          <img :src="image" style="width: 100%; height: auto" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-7 col-sm-12">
          <section class="">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <ul
                    class="nav nav-pills nav-lb-tab"
                    id="myTab"
                    role="tablist"
                  >
                    <!-- nav item -->
                    <li class="nav-item" role="presentation">
                      <!-- btn -->
                      <button
                        class="nav-link active"
                        id="product-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#product-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="product-tab-pane"
                        aria-selected="true"
                      >
                        Product Details
                      </button>
                    </li>
                    <!-- nav item -->
                    <li class="nav-item" role="presentation">
                      <!-- btn -->
                      <button
                        class="nav-link"
                        id="details-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#details-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="details-tab-pane"
                        aria-selected="false"
                      >
                        Information
                      </button>
                    </li>
                  </ul>
                  <!-- tab content -->
                  <div class="tab-content" id="myTabContent">
                    <!-- tab pane -->
                    <div
                      class="tab-pane fade show active"
                      id="product-tab-pane"
                      role="tabpanel"
                      aria-labelledby="product-tab"
                      tabindex="0"
                    >
                      <div class="my-2">
                        <div class="mt-6 mt-md-0">
                          <div class="row">
                            <div class="col-6" v-if="product?.Videos">
                              <div class="card">
                                <video
                                  :src="product.Videos"
                                  class="h-100 w-100"
                                  controls
                                  style="border-radius: 5px"
                                ></video>
                              </div>
                            </div>
                            <div class="col-6">
                              <div class="ms-3">
                                <h3 class="mb-1">{{ product.NomProduit }}</h3>

                                <div class="fs-5">
                                  <!-- price -->
                                    <div v-if="product?.SurCommande == 1" >
                                      <!-- <button class="btn">Commander via WhatsApp</button> -->
                                      <a   :href="getWhatsApp('+22891994964')"
                                      target="_blank" class="btn d-flex align-items-center text-white fs-6"  style=" background-color: #25d366; width:237px">
                                           <i class="bi bi-whatsapp me-2"></i>  Commander via WhatsApp 
                                      </a>
                                    </div>
                                  <div v-else>
                                    <!-- <span
                                      v-if="product?.PrixPromo"
                                      class="text-danger fs-5 fw-bold"
                                    >
                                      {{
                                        formatPrice(
                                          convertPrice(product.PrixPromo),
                                          selectedDevise.symbol
                                        )
                                      }}
                                    </span>
                                    <br />
                                    <span
                                      v-if="product?.PrixPromo"
                                      class="text-muted text-decoration-line-through fs-5 fw-bold"
                                    >
                                      {{
                                        formatPrice(
                                          convertPrice(product.Prix),
                                          selectedDevise.symbol
                                        )
                                      }}
                                    </span>
                                    <span
                                      v-else
                                      class="text-danger fs-5 fw-bold"
                                    >
                                      {{
                                        formatPrice(
                                          convertPrice(product?.Prix),
                                         selectedDevise.symbol
                                        )
                                      }}
                                    </span> -->


                                    <!-- nouveau -->

                                    <div>
          <span v-if="isPromotionActive && product?.PrixPromo" class="text-danger fs-5 fw-bold">
            {{ formatPrice(convertPrice(product.PrixPromo), selectedDevise.symbol) }}
          </span>
          <span v-else class="text-danger fs-5 fw-bold">
            {{ formatPrice(convertPrice(product?.Prix), selectedDevise.symbol) }}
          </span>
          <br />
          <span
            v-if="isPromotionActive && product?.PrixPromo"
            class="text-muted text-decoration-line-through fs-5 fw-bold"
          >
            {{ formatPrice(convertPrice(product.Prix), selectedDevise.symbol) }}
          </span>
        </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <hr class="my-6" v-if="product?.SurCommande != 1"/>

                          <div class="row align-items-center" v-if="product?.SurCommande != 1">
                            <div class="col-12">
                              <div class="row">
                                <div
                                  class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-2"
                                >
                                  <div
                                    class="row justify-content-center align-items-center"
                                  >
                                    <!-- Si le produit est dans le panier, afficher les boutons "+" et "-" -->
                                    <div
                                      class="col-6"
                                      v-if="isInCart(product.id)"
                                    >
                                      <div class="input-group input-spinner">
                                        <input
                                          type="button"
                                          value="-"
                                          class="button-minus btn btn-sm bg-white"
                                          :disabled="isLoadingItem(product.id)"
                                          @click="
                                            updateQuantity(
                                              product.id,
                                              'decrease'
                                            )
                                          "
                                        />
                                        <!-- Quantité -->
                                        <template
                                          v-if="isLoadingItem(product.id)"
                                        >
                                          <!-- Loader à la place de l'input pendant le chargement -->
                                          <LoaderBtn
                                            class="loadingbtn"
                                          ></LoaderBtn>
                                        </template>
                                        <template v-else>
                                          <!-- Input de quantité lorsqu'il n'y a pas de chargement -->
                                          <input
                                            type="number"
                                            :value="
                                              getProductQuantity(product.id)
                                            "
                                            class="quantity-field form-control-sm form-input"
                                            disabled
                                          />
                                        </template>
                                        <input
                                          type="button"
                                          value="+"
                                          class="button-plus btn btn-sm bg-white"
                                          :disabled="isLoadingItem(product.id)"
                                          @click="
                                            updateQuantity(
                                              product.id,
                                              'increase'
                                            )
                                          "
                                        />
                                      </div>
                                    </div>

                                    <!-- Si le produit n'est pas dans le panier, afficher le bouton "Add to cart" -->
                                    <div class="col-6" v-else>
                                      <button
                                        class="btn btn-primary w-100"
                                        v-if="isLoadingItem(product.id)"
                                      >
                                        <LoaderBtn
                                          class="loadingbtn"
                                        ></LoaderBtn>
                                      </button>
                                      <div v-else>
                                        <button
                                          v-if="
                                            product?.magasins_sum_quantite_reel ===
                                              null ||
                                            product?.magasins_sum_quantite_reel ===
                                              0
                                          "
                                          class="btn btn-primary"
                                          disabled
                                        >
                                          <i
                                            class="feather-icon icon-shopping-bag me-2"
                                          ></i>
                                          en rupture
                                        </button>

                                        <button
                                          v-else
                                          class="btn btn-primary"
                                          @click="addToCartProduct(product)"
                                        >
                                          <i
                                            class="feather-icon icon-shopping-bag me-2"
                                          ></i>
                                          Achète
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <!-- Boutons de partage et wishlist -->
                                <div
                                  class="col-xl-6 col-lg-6 col-md-12 col-sm-12"
                                >
                                  <div
                                    class="row justify-content-center align-items-center"
                                  >
                                    <div class="col-6">
                                      <div class="dropdown">
                                        <a
                                          class="btn btn-outline-secondary dropdown-toggle"
                                          href="#"
                                          role="button"
                                          data-bs-toggle="dropdown"
                                          >Share</a
                                        >
                                        <ul class="dropdown-menu">
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i
                                                class="bi bi-facebook me-2"
                                              ></i>
                                              Facebook</a
                                            >
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i
                                                class="bi bi-twitter me-2"
                                              ></i>
                                              Twitter</a
                                            >
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i
                                                class="bi bi-instagram me-2"
                                              ></i>
                                              Instagram</a
                                            >
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
                          <div class="mt-4 text-muted mb-2">
                            <h5 class="fs-14">Caractéristiques :</h5>
                            <table class="table table-striped">
                              <!-- table -->
                              <tbody>
                                <tr
                                  v-for="carac in product?.caracteristiques"
                                  :key="carac.id"
                                >
                                  <th>{{ carac.caracteristique?.Name }}</th>
                                  <td>{{ carac.Valeur }}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div>
                            <!-- table -->
                            <table
                              class="table table-borderless table-striped mb-0"
                            >
                              <tbody>
                                <tr>
                                  <td>Catégorie:</td>
                                  <td>
                                    <router-link
                                      class="text-dark"
                                      :to="{
                                        name: 'list-categories',
                                        params: {
                                          id: encodeId(product?.categorie.id)
                                        }
                                      }"
                                    >
                                      {{ product?.categorie?.NomCategorie }}
                                    </router-link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Marque:</td>
                                  <td>
                                    <router-link
                                      :to="{
                                        name: 'list-marques',
                                        params: {
                                          id: encodeId(product?.marque.id)
                                        }
                                      }"
                                    >
                                      <small>
                                        {{ product?.marque?.Nom }}
                                      </small>
                                    </router-link>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- tab pane -->
                    <div
                      class="tab-pane fade"
                      id="details-tab-pane"
                      role="tabpanel"
                      aria-labelledby="details-tab"
                      tabindex="0"
                    >
                      <div class="">
                        <div class="row">
                          <div class="col-12 col-lg-12">
                            <div class="content-preview">
                              <div
                                v-html="product.Description"
                                class="preview-content"
                              ></div>
                            </div>
                          </div>
                          <!-- <div class="col-12 col-lg-6">
                                          <table class="table table-striped">
                                            
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
                                       </div> -->
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
              <h3>Produits similaires</h3>
            </div>
          </div>
          <!-- row -->
          <div class="row g-5 row-cols-lg-6 row-cols-2 row-cols-md-2 mt-2">
            <p v-if="recentProducts.length === 0">
              Pas de produit similaire pour l'instant
            </p>

            <div
              class="col"
              v-else
              v-for="(product, index) in ProductSimulairesArray"
              :key="index"
            >
              <!-- card -->
              <div class="card card-product-v2 ">
                <div class="card-body position-relative p-1">
                  <!-- badge -->
                  <div class="text-center position-relative" >
                    <div class="position-absolute top-0 start-0" v-if="product?.SurCommande !=1">
                      <span
                        v-if="product?.PrixPromo"
                        class="badge bg-success text-white"
                      >
                        -{{
                          calculateDiscount(product?.Prix, product?.PrixPromo)
                        }}%
                      </span>
                    </div>
                    <!-- img -->
                    <a
                      :href="`/detail/${encodeId(product?.id)}`"
                      @click="addToRecent(product)"
                    >
                      <img
                        :src="
                          product?.PhotoCover
                            ? product?.PhotoCover
                            : defaultImage
                        "
                        :alt="product?.NomProduit"
                        :title="product?.NomProduit"
                        style="
                          width: 100%;
                          height: auto;
                          max-height: 30% !important;
                        "
                        class="mb-3 img-fluid"
                      />
                    </a>
                    <!-- action btn -->
                  </div>
                  <!-- title -->
                  <h2 class="fs-6">
                    <a
                      :href="`/detail/${encodeId(product?.id)}`"
                      class="text-inherit text-decoration-none"
                      @click="addToRecent(product)"
                      >{{ product?.NomProduit }}
                    </a>
                  </h2>

                  <!-- price -->
                  <div class="d-flex justify-content-between align-items-center mt-3" v-if="product?.SurCommande !=1"
                  >
                    <div>
                      <span v-if="product?.PrixPromo" class="text-danger">
                        {{
                          formatPrice(convertPrice(product.PrixPromo), "F CFA")
                        }}
                      </span>
                      <br />
                      <span
                        v-if="product?.PrixPromo"
                        class="text-muted text-decoration-line-through"
                      >
                        {{ formatPrice(convertPrice(product.Prix), "F CFA") }}
                      </span>
                      <span v-else class="text-danger">
                        {{ formatPrice(convertPrice(product?.Prix), "F CFA") }}
                      </span>
                    </div>
                  </div>
                  <div class="prix">

                    <p class="mb-0" v-if="product?.SurCommande !=1">
                      <span
                        v-if="product?.magasins_sum_quantite_reel !== null"
                        class="badge bg-success text-white"
                        >Disponible</span
                      >
                      <span v-else class="badge bg-danger text-white"
                        >Pas disponible</span
                      >
                    </p>
                    <p v-else>
                      <span
                      
                        class="badge bg-success text-white"
                        >Sur commande</span
                      >
                    </p>


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
                <!-- hidden class for hover -->
                <div class="product-content-fade border-info"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
          <div class="row g-5 row-cols-lg-6 row-cols-2 row-cols-md-2 mt-2">
            <p v-if="recentProducts.length === 0">
              Pas de produit vue pour l'instant
            </p>

            <div
              class="col"
              v-else
              v-for="(product, index) in recentProducts"
              :key="index"
            >
              <!-- card -->
              <div class="card card-product-v2 ">
                <div class="card-body position-relative p-1">
                  <!-- badge -->
                  <div class="text-center position-relative" >
                    <div class="position-absolute top-0 start-0" v-if="product?.SurCommande !=1">
                      <span
                        v-if="product?.PrixPromo"
                        class="badge bg-success text-white"
                      >
                        -{{
                          calculateDiscount(product?.Prix, product?.PrixPromo)
                        }}%
                      </span>
                    </div>
                    <!-- img -->
                    <a
                      :href="`/detail/${encodeId(product?.id)}`"
                      @click="addToRecent(product)"
                    >
                      <img
                        :src="
                          product?.PhotoCover
                            ? product?.PhotoCover
                            : defaultImage
                        "
                        :alt="product?.NomProduit"
                        :title="product?.NomProduit"
                        style="
                          width: 100%;
                          height: auto;
                          max-height: 30% !important;
                        "
                        class="mb-3 img-fluid"
                      />
                    </a>
                    <!-- action btn -->
                  </div>
                  <!-- title -->
                  <h2 class="fs-6">
                    <a
                      :href="`/detail/${encodeId(product?.id)}`"
                      class="text-inherit text-decoration-none"
                      @click="addToRecent(product)"
                      >{{ product?.NomProduit }}
                    </a>
                  </h2>

                  <!-- price -->
                  <div
                    class="d-flex justify-content-between align-items-center mt-3" v-if="product?.SurCommande !=1"
                  >
                    <div>
                      <span v-if="product?.PrixPromo" class="text-danger">
                        {{
                          formatPrice(convertPrice(product.PrixPromo), "F CFA")
                        }}
                      </span>
                      <br />
                      <span
                        v-if="product?.PrixPromo"
                        class="text-muted text-decoration-line-through"
                      >
                        {{ formatPrice(convertPrice(product.Prix), "F CFA") }}
                      </span>
                      <span v-else class="text-danger">
                        {{ formatPrice(convertPrice(product?.Prix), "F CFA") }}
                      </span>
                    </div>
                  </div>
                  <div class="prix">

                    <p class="mb-0" v-if="product?.SurCommande !=1">
                      <span
                        v-if="product?.magasins_sum_quantite_reel !== null"
                        class="badge bg-success text-white"
                        >Disponible</span
                      >
                      <span v-else class="badge bg-danger text-white"
                        >Pas disponible</span
                      >
                    </p>
                    <p v-else>
                      <span
                      
                        class="badge bg-success text-white"
                        >Sur commande</span
                      >
                    </p>


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
                <!-- hidden class for hover -->
                <div class="product-content-fade border-info"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import { tns } from "tiny-slider/src/tiny-slider";
import { mapGetters, mapActions } from "vuex";
import { useToast } from "vue-toastification";
import LoaderBtn from "@/components/others/loader/loaderbtn.vue";
import axios from "@/lib/axiosConfig";
import SkeletonDetail from "@/components/others/loader/SkeletonDetail.vue";

export default {
  setup() {
    const toast = useToast(); // Initialiser useToast
    return { toast };
  },
  props: ["id"],
  data() {
    return {
      images: [],
      ProductSimulairesArray:[],
      product: "",
      loading: true,
      loadingItems: {}
    };
  },
  components: {
    LoaderBtn,
    SkeletonDetail
  },
  computed: {
    ...mapGetters("cart", ["cartItems", "alertMessage", "isLoadingItem"]),
    ...mapGetters("devise", ["selectedDevise", "getSelectedRate"]),
    recentProducts() {
      return this.$store.getters["recentProducts/recentProducts"];
    },

    // Vérifier si le produit est déjà dans le panier
    isInCart() {
      return (productId) => {
        return this.cartItems.some((item) => item.id === productId);
      };
    },

    // Récupérer la quantité du produit dans le panier
    getProductQuantity() {
      return (productId) => {
        const item = this.cartItems.find((item) => item.id === productId);
        return item ? item.quantity : 1;
      };
    },
    decodedId() {
      return atob(this.id); // Décode l'ID reçu en Base64
    },
    isPromotionActive() {
      if (!this.product || !this.product.PrixPromo || !this.product.DateFinPromo) {
        return false;
      }
      
      const today = new Date();
      const endDate = new Date(this.product.DateFinPromo);
      
      // Vérifier également la date de début si elle existe
      if (this.product.DateDebutPromo) {
        const startDate = new Date(this.product.DateDebutPromo);
        return today >= startDate && today <= endDate;
      }
      
      return today <= endDate;
    }
  },
  watch: {
    alertMessage(newMessage) {
      if (newMessage) {
        //   this.toast.success(newMessage);
        this.toast.success(newMessage, {
          position: "top-right",
          timeout: 2000,
          closeOnClick: true
        });
        this.loadingItems = {};
      }
    }
  },
  methods: {
    encodeId(id) {
      return btoa(id); // Encode en Base64
    },
    ...mapActions("cart", [
      "addToCart",
      "increaseQuantity",
      "decreaseQuantity"
    ]),

    zoom(event) {
      const t = event.currentTarget;
      const offsetX = event.offsetX || event.touches[0].pageX;
      const offsetY = event.offsetY || event.touches[0].pageY;
      const x = (offsetX / t.offsetWidth) * 100;
      const y = (offsetY / t.offsetHeight) * 100;
      t.style.backgroundPosition = `${x}% ${y}%`;
    },
    async recupererProduits() {
      const token =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2RhdGEud2FrYW5kYS5iZXN0L2FwaS9zeXN0ZW0vbG9naW4iLCJpYXQiOjE3MzAyNzYzODEsIm5iZiI6MTczMDI3NjM4MSwianRpIjoiVU5sN3J3RXBhTFZGdG1OaCIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.H40wgUqkMXolIzMq_zTz8Mg7Bp-QsyjbarTijztMzi4";
      try {
        const response = await axios.get(`/produits/${this.decodedId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (response.data.status === "success") {
          this.product = response.data?.data;
          this.images = this.product?.Photos?.split("|") || [];
          if (this.product?.PhotoCover) {
            this.images.unshift(this.product.PhotoCover);
          }
          this.getMarquesbyId(this.product?.Marque ,this.product?.id)
          this.loading = false;
        }
      } catch (error) {
        console.log("error", error);
      }
    },
    async getMarquesbyId(id ,productId) {
     
     this.loading = true
     try {
       const response = await axios.get(`/marques/${id}`)
   

       if (response.data.status === "success") {
        console.log("response.data?.data",response.data?.data);
        
         this.ProductSimulairesArray = response.data?.data?.produits.filter(item => item.id !== productId)
         console.log(" this.ProductSimulairesArra",this.ProductSimulairesArray )
        

         this.loading = false
       }

     } catch (error) {
       console.log('error', error)
     }
   },

    // Ajouter au panier
    addToCartProduct(product) {
      this.addToCart({ ...product, quantity: 1 });
    },

    // Mettre à jour la quantité (augmenter/diminuer)
    updateQuantity(productId, action) {
      if (action === "increase") {
        this.increaseQuantity(productId);
      } else if (action === "decrease") {
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
      const formattedPrice = price
        .toFixed()
        .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      if (symbol === "CFA") {
        return `${formattedPrice} ${symbol}`;
      }
      return ` ${formattedPrice} ${symbol}`;
    },
    formatPrices(value) {
      return parseFloat(value).toLocaleString(); // Formatage avec séparateurs de milliers
    },
    truncateText(text, maxLength) {
      if (text.length > maxLength) {
        return text.substring(0, maxLength) + "..."; // Ajoute "..." à la fin si le texte est trop long
      }
      return text;
    },
    addProductToCart(product) {
      this.loadingItems[product?.id] = true;
      this.$store.dispatch("cart/addToCart", product);
    },
    getWhatsApp(numero) {

      const numeros = numero?.startsWith("+") ? numero.replace("+", "") : numero;
      return `https://wa.me/${numeros}`;
    },
  },
  async mounted() {
    await this.recupererProduits();
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
        loop: !1
      })),
      document.querySelectorAll(".product").length &&
        tns({
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
          autoplayButtonOutput: !1
        });
  }
};
</script>
<style lang="css" scoped>
table {
  width: 100% !important;
}
</style>
