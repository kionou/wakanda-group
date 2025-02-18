<template >
    <div>
        <SkeletonClient v-if="loading " style="z-index: 99999"></SkeletonClient>

        <div class="card" v-else>
            <div class="card-body">
                <div class="row">
                    <div class="col-xl-12 row position-relative">
                      <div class="col-xl-1">
    <div class="profile-pic text-center">
      <label class="-label" for="file">
        <i class="bi bi-camera"></i>
      </label>
      <input id="file" type="file" @change="loadFile"   :disabled="isLoading" />

      <!-- Loader GIF -->
      <div
        v-if="isLoading"
        style="
          height: 80px;
          width: 80px;
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
           top: 27%;
          left: 28%;
          transform: translate(-50%, -50%);
        "
      >
        <img src="@/assets/gif/loader.gif" alt="Loading..." height="50" width="50" />
      </div>

      <!-- Image de profil -->
      <img
        v-if="profileImage"
        :src="profileImage"
        id="output"
        class="mg-thumbnail rounded"
        style="border-radius: 50%; height: 100px; width: 100px;"
      />
      <img
        v-else
        src="@/assets/images/avatar/avatar-1.jpg"
        id="output"
        class="mg-thumbnail rounded"
        style="border-radius: 50%; height: 100px; width: 100px;"
      />
    </div>
  </div>
                      
                            <div class="col-xl-8 ms-8">
                                <strong class=" fs-5 text-dark">{{ profil?.Prenoms }} {{ profil?.Nom }}</strong> <br>
                                <span class="text-muted">{{ profil?.pays }} </span> <br>
                                <span class="text-muted">{{ profil?.email }}</span> <br>
                                <span class="text-muted">{{ profil?.Whatsapp }}</span>
                            </div>
                            <div class="col-xl-1" style="position: absolute; right: 0;top: 29px;">
                                <router-link to="#" class="btn btn-info btn-circle px-3 py-2 me-2"
                                     data-bs-toggle="modal" data-bs-target="#addUserModal"
                                >
                                    <span
                                        class="text-uppercase small"
                                        :disabled="loadingItems['d']"
                                    >
                    <div
                      v-if="loadingItems['aze']"
                      class="d-flex align-items-center"
                    >
                      <LoaderBtn class="loadingbtn"></LoaderBtn>
                    </div>
                    <div v-else>
                      <i class="bi bi-pen"></i>
                    </div>
                  </span>
                </router-link>

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

         <div
      class="modal fade"
      id="addUserModal"
      tabindex="-1"
      aria-labelledby="addUserModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <!-- modal content -->
        <div class="modal-content">
          <!-- modal body -->
          <div class="modal-body p-6">
            <div class="d-flex justify-content-between mb-5">
              <div>
                <!-- heading -->
                <h5 class="mb-1" id="addUserModalLabel">
                  Modifier mes informations
                </h5>
              </div>
              <div>
                <!-- button -->
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
            </div>
            <div class="form-container">
              <div class="row mt-3 content-group">
                <div class="col-xl-6">
                  <div class="input-groupe me-2">
                    <label for="userpassword">
                      Nom <span class="text-danger">*</span></label
                    >
                    <MazInput
                      v-model="step1.Nom"
                      color="warning"
                      name="step1.Nom"
                      size="sm"
                      rounded-size="sm"
                      type="text"
                    />
                    <small v-if="v$.step1.Nom.$error">{{
                      v$.step1.Nom.$errors[0].$message
                    }}</small>
                    <small v-if="resultError['Nom']"
                      >{{ resultError["Nom"] }}
                    </small>
                  </div>
                </div>

                <div class="col-xl-6">
                  <div class="input-groupe">
                    <label for="userpassword">
                      Prenoms <span class="text-danger">*</span></label
                    >
                    <MazInput
                      v-model="step1.Prenoms"
                      color="warning"
                      name="step1.Prenoms"
                      size="sm"
                      rounded-size="sm"
                      type="text"
                    />
                    <small v-if="v$.step1.Prenoms.$error">{{
                      v$.step1.Prenoms.$errors[0].$message
                    }}</small>
                    <small v-if="resultError['Prenoms']"
                      >{{ resultError["Prenoms"] }}
                    </small>
                  </div>
                </div>

                <div class="col-xl-6">
                  <div class="input-groupe me-2">
                    <label for="userpassword">
                      Pseudo <span class="text-danger">*</span></label
                    >
                    <MazInput
                      v-model="step1.username"
                      color="warning"
                      name="step1.username"
                      size="sm"
                      rounded-size="sm"
                      type="text"
                    />
                    <small v-if="v$.step1.username.$error">{{
                      v$.step1.username.$errors[0].$message
                    }}</small>
                    <small v-if="resultError['username']"
                      >{{ resultError["username"] }}
                    </small>
                  </div>
                </div>

                <div class="col-xl-6">
                  <div class="input-groupe">
                    <label for="userpassword">
                      Adresse Email <span class="text-danger">*</span></label
                    >
                    <MazInput
                      v-model="step1.email"
                      color="warning"
                      name="step1.email"
                      size="sm"
                      rounded-size="sm"
                      type="email"
                    />
                    <small v-if="v$.step1.email.$error">{{
                      v$.step1.email.$errors[0].$message
                    }}</small>
                    <small v-if="resultError['email']"
                      >{{ resultError["email"] }}
                    </small>
                  </div>
                </div>
                
                <div class="col-xl-6">
                  <div class="input-groupe me-2">
                    <label for="userpassword">
                      Numéro whatsApp <span class="text-danger">*</span></label
                    >
                    <MazPhoneNumberInput
                      v-model="step1.Whatsapp"
                      size="sm"
                      rounded-size="sm"
                      show-code-on-list
                      color="secondary"
                      :ignored-countries="['AC']"
                      defaultCountryCode="TG"
                      update="results = $event"
                      :success="results?.isValid"
                    />
                    <small v-if="v$.step1.Whatsapp.$error">{{
                      v$.step1.Whatsapp.$errors[0].$message
                    }}</small>
                    <small v-if="resultError['Whatsapp']">
                      {{ resultError["Whatsapp"] }}
                    </small>
                  </div>
                </div>
              
                <div class="col-xl-6">
                  <div class="input-groupe me-2">
                    <label for="userpassword">
                      Pays <span class="text-danger">*</span></label
                    >
                    <MazSelect
                      v-model="step1.pays"
                      :options="countriesOptions"
                      color="secondary"
                      size="sm"
                      rounded-size="sm"
                      search
                      v-slot="{ option }"
                    >
                    <div
                      class="flex items-center"
                      style="
                        padding-top: 0.5rem;
                        padding-bottom: 0.5rem;
                        width: 100%;
                        gap: 1rem;
                      "
                      @click="handleOptionClickCountry(option)"
                    >
                      {{ option?.label }}
                    </div>
                    </MazSelect>
                    <small v-if="v$.step1.pays.$error">{{
                      v$.step1.pays.$errors[0].$message
                    }}</small>
                    <small v-if="resultError['pays']">
                      {{ resultError["pays"] }}
                    </small>
                  </div>
                </div>
               
                <div class="col-xl-12">
                  <div class="input-groupe">
                    <label for="userpassword">
                      Date de naissance <span class="text-danger">*</span></label
                    >
                    <MazInput
                      v-model="step1.DateNaissance"
                      color="warning"
                      name="step1.DateNaissance"
                      size="sm"
                      rounded-size="sm"
                      type="date"
                    />
                    
                    <small v-if="v$.step1.DateNaissance.$error">{{
                      v$.step1.DateNaissance.$errors[0].$message
                    }}</small>
                    <small v-if="resultError['DateNaissance']">
                      {{ resultError["DateNaissance"] }}
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="btnForm py-3 d-flex items-center justify-content-center"
            >
              <button
                class="btnLogin btn btn-primary"
                style="padding: 0.5em 2em !important"
                :disabled="isButtonDisabled === true"
                @click.prevent="HamdleUpdateUser('addUserModal')"
              >
                <span
                  class="text-uppercase small"
                  :disabled="loadingItems['addUserModal']"
                >
                  <div
                    v-if="loadingItems['addUserModal']"
                    class="d-flex align-items-center"
                  >
                    <LoaderBtn class="loadingbtn"></LoaderBtn>
                    <span class="">loading...</span>
                  </div>
                  <div v-else>Valider</div>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
import SkeletonClient from '@/components/others/loader/SkeletonClient.vue';
import axios from '@/lib/axiosConfig';
import { mapGetters, mapActions } from 'vuex';
import useVuelidate from "@vuelidate/core";
import { require, lgmin, lgmax, ValidEmail } from "@/functions/rules";
import MazPhoneNumberInput from "maz-ui/components/MazPhoneNumberInput";
import LoaderBtn from "@/components/others/loader/loaderbtn.vue";
import { useToast } from "vue-toastification";


export default {
   components:{
    SkeletonClient ,
    MazPhoneNumberInput,
    LoaderBtn,
   },
   setup() {
    const toast = useToast(); // Initialiser useToast
    return { toast };
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
   data() {
      return {
        profil:"",
        loading:true,
        isLoading:false,
        loadingItems: {},
        v$: useVuelidate(),
        countriesOptions: [],
        id:"",
      error: "",
      resultError: {},
      ToId: "",
      profileImage:"",
      step1: {
        Nom: "",
        Prenoms: "",
        Whatsapp: "",
        email: "",
        pays: "",
        DateNaissance: "",
        username: "",
      },
         
      }
   },
   validations: {
    step1: {
      Nom: { require },
      Prenoms: { require },
      Whatsapp: { require },
      email: { require , ValidEmail },
      pays: { require },
      DateNaissance: { require },
      username: { require },
    },
   
  },
  
  async mounted() {
   await this.fetchUserDetail()
   await this.getCountries();
     
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
    ...mapActions("auth", ["setMyAuthenticatedUser"]),
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
          const profil = response.data.data;
          this.data = profil

          this.step1.Nom = profil.Nom;
          this.step1.Prenoms = profil.Prenoms;
          this.step1.username = profil.username;
          this.step1.email = profil.email;
          this.step1.Whatsapp = profil.Whatsapp;
          this.step1.pays = profil.pays;
          this.step1.DateNaissance = profil.DateNaissance
          this.id = profil.id;
          (this.profileImage = profil.photo),
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
    async getCountries() {
      try {
        const response = await axios.get("countries",{
          params: { statut: 1 },
        });
        const countries = response.data?.data;
        const options = countries.map((country) => ({
          label: country.NomPays,
          flag: country.Flag,
          value: country.CodePays,
          code: country.NomAbr,
        }));

        this.countriesOptions = options;
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données des pays:",
          error
        );
      }
    },
    async loadFile(event) {
      this.isLoading = true;
      var image = document.getElementById("output");
      image.src = URL.createObjectURL(event.target.files[0]);
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append("profile", file);
      

      try {
        const response = await axios.post("/auth-user-profile", formData, {
          headers: {
            Authorization: `Bearer ${this.loggedInUser.token}`,
            "Content-Type": "multipart/form-data",
          },
        });

        if (response.data.status === "success") {
          const updatedUser = response.data.data;
         
          this.$store.dispatch("auth/setMyAuthenticatedUser", {
            user: {
              id: updatedUser.id,
              Nom: updatedUser.Nom,
              Prenoms: updatedUser.Prenoms,
              email: updatedUser.email,
              Whatsapp: updatedUser.Whatsapp,
              photo: updatedUser.photo,
              username: updatedUser.username,
            },
            menus: this.menus,
            permissions: this.permissions,
            user_role: this.loggedInUser.user_role,
            expires_in:
              this.loggedInUser.tokenExpiration - Math.floor(Date.now() / 1000),
            access_token: this.loggedInUser.token,
          });
          this.isLoading = false;
          this.toast.success("Votre compte a été mis à jour avec succès !", {
              position: "top-right",
              timeout: 2000,
              closeOnClick: true,
            });
          this.fetchUserDetail();

        } else {
          this.errorImage = "L'enregistrement a échoué !!!";
        }
      } catch (error) {
        
        if (
          error.response.data.message === "Vous n'êtes pas autorisé." ||
          error.response.status === 401
        ) {
          await this.$store.dispatch("auth/clearMyAuthenticatedUser");
          this.$router.push("/"); //a revoir
        }
      }
    },
    async HamdleSign(modalId) {
     this.loadingItems[modalId] = true
     
      let DataUser = {
        user: this.id,
        email: this.step1.email,
        Nom: this.step1.Nom,
        Prenoms: this.step1.Prenoms,
        username: this.step1.username,
        Whatsapp: this.step1.Whatsapp,
        pays: this.step1.pays,
        DateNaissance: this.step1.DateNaissance,
      };
      try {
        const response = await axios.put("/auth-user-update", DataUser, {
          headers: {
            Authorization: `Bearer ${this.loggedInUser.token}`,
          },
        });
        if (response && response.data && response.data.status === "success") {
          const updatedUser = response.data.data;
          
          this.$store.dispatch("auth/setMyAuthenticatedUser", {
            user: {
              id: updatedUser.id,
              Nom: updatedUser.Nom,
              Prenoms: updatedUser.Prenoms,
              email: updatedUser.email,
              Whatsapp: updatedUser.Whatsapp,
              photo: updatedUser.photo,
              username: updatedUser.username,
            },
            menus: this.menus,
            permissions: this.permissions,
            user_role: this.loggedInUser.user_role,
            expires_in:
              this.loggedInUser.tokenExpiration - Math.floor(Date.now() / 1000),
            access_token: this.loggedInUser.token,
          });
          window.scrollTo({ top: 0, behavior: "smooth" });
          this.loadingItems[modalId] = false
          this.closeModal(modalId);
            this.toast.success("Votre compte a été mis à jour avec succès !", {
              position: "top-right",
              timeout: 2000,
              closeOnClick: true,
            });
          this.fetchUserDetail();
        
        } else {
          this.loadingItems[modalId] = false
      
        }
      } catch (error) {
          this.loadingItems[modalId] = false
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
  

    HamdleUpdateUser(modalId) {
      this.v$.step1.$touch();
      this.error = "";
      if (this.v$.$errors.length == 0) {
        this.loadingItems[modalId] = true
        this.HamdleSign(modalId);
      } else {
        console.log("pas bon", this.v$.$errors);
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
    
    openModal(modalId) {
      const modalElement = document.getElementById(modalId);
      const modal = new bootstrap.Modal(modalElement);

      // Afficher le modal
      modal.show();
    },
    closeModal(modalId) {
      // Cette méthode ferme le modal en fonction de l'id passé en paramètre
      const modalElement = document.getElementById(modalId);
      const modal = bootstrap.Modal.getInstance(modalElement); // Récupérer l'instance du modal avec l'id
      modal.hide(); // Ferme le modal
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


.profile-pic {
  color: transparent;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: all 0.3s ease;
  height: 210px;
  width: 210px;
}

.profile-pic input {
  display: none;
}

.profile-pic img {
  position: absolute;
  object-fit: cover;
  width: 80%;
  height: 80%;
  box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.35);
  z-index: 0;
  border:1px solid #435971;
  border-radius: 50%;
  padding:2px;
  top: 3px;
  left: -3px;
}

.profile-pic .-label {
  left: 80px;
  cursor: pointer;
  height: 23px;
  width: 29px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--fc-primary);
  z-index: 1;
  color:  #fff ;
  transition: background-color 0.2s ease-in-out;
  margin-bottom: 0;
  position: absolute;
  top: 80px;
  border-radius: 3px;
  border: 1px solid var(--fc-primary);
}

.profile-pic .-label:hover {
  background-color: #fff ;
  color: var(--fc-primary);
}

.profile-pic span {
  display: inline-flex;
  padding: 0.2em;
}
</style>