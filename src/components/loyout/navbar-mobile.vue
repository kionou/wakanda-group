<template >
    <div>
        <div class="bg-white position-fixed bottom-0 w-100  shadow-lg d-block d-lg-none text-center"
            style="z-index:99999 !important">
            <div class="d-flex align-items-center">
               
    
                <div class="dropdown w-25 ms-2 py-4 icon-hover">
                    <a href="#" class="text-inherit" data-bs-toggle="dropdown" aria-expanded="false">
                        <div class="text-center">
                            <div class="position-relative d-inline-block">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                                    class="bi bi-text-indent-left text-primary" viewBox="0 0 16 16">
                                    <path
                                        d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                                </svg>
    
                            </div>
                        </div>
                    </a>
    
                    <div class="dropdown-menu dropdown-menu-lg p-0">
                        <div>
                            <h6 class="px-4 border-bottom py-3 mb-0">Notification</h6>
                            <p class="mb-0 px-4 py-3">
                                <a href="signin.html">Sign in</a>
                                or
                                <a href="signup.html">Register</a>
                                in or so you don t have to enter your details every time
                            </p>
                        </div>
                    </div>
                </div>
    
                <div class="w-25 ms-2 py-4 icon-hover">
                    <a href="javascript:void(0)" class="text-inherit" data-bs-toggle="modal" data-bs-target="#userModal">
                        <div class="text-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                                    class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path fill-rule="evenodd"
                                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                </svg>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="w-25 ms-2 py-4 icon-hover">
                    <router-link to="/commandes" class="text-inherit">
                        <div class="text-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                                    class="bi bi-archive" viewBox="0 0 16 16">
                                    <path
                                        d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                                </svg>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="w-25 ms-2 py-4 icon-hover">
                    <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" href="#offcanvasExample" role="button"
                        aria-controls="offcanvasRight" class="text-inherit">
                        <div class="text-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                                    class="bi bi-cart2" viewBox="0 0 16 16">
                                    <path
                                        d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                </svg>
                            </div>
                        </div>
                    </a>
                </div>
    
            </div>
        </div>
    
    
    
        <!-- Modal -->
        <div class="modal fade" id="userModal" tabindex="-1" aria-labelledby="userModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" style="max-width: 400px !important; width: 100%;">
                <div class="modal-content p-4">
                    <div class="modal-header border-0">
                        <h5 class="modal-title fs-4 fw-bold" id="userModalLabel">Se connecter</h5>
    
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-0">
                        <div style="padding: 0px 20px;">
                            <div class="fm-history-login-container new-history"
                                data-spm-anchor-id="a2g0o.cart.0.i7.2f53378dWTbody">
                                <img src="//ae01.alicdn.com/kf/Sd0d9a41458df45b39c31d0dd3b50fe8b6/144x144.png"
                                    class="fm-history-login-avatar">
    
                            </div>
                            <div class="row  content-group">
                                <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <div class="input-groupe">
                                        <label for="userpassword">Adresse email <span class="text-danger">*</span></label>
                                        <MazInput v-model="indicateur" color="info" name="CodeIndicateur" size="sm"
                                            rounded-size="sm" type="email" />
                                    </div>
                                </div>
                                <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <div class="input-groupe">
                                        <label for="userpassword">Mot de passe <span class="text-danger">*</span></label>
                                        <MazInput v-model="indicateur" color="info" name="IntituleIndicateur" size="sm"
                                            rounded-size="sm" type="password" />
    
                                    </div>
                                </div>
    
    
                            </div>
                            <span class="cosmos-input-label-wrapper cosmos-input-password">
    
    
                            </span>
                            <div class="fm-baxia-container" style="margin-top: 2px;">
                                <div id="baxia-login-check-code" class="fm-baxia-box"></div>
                            </div>
                            <div class="fm-history-login-hint"><span aria-label="Mot de passe oublié ?"
                                    class="fm-history-login-hint-link-text">Mot de passe oublié ?</span>
                            </div>
    
    
                            <div class="nfm-common-button d-flex w-100 align-items-center justify-content-center">
                                <button @click="login"
                                    class="cosmos-btn cosmos-btn-primary cosmos-btn-large cosmos-btn-block"
                                    style="color: rgb(255, 255, 255); border: 0px solid rgb(0, 0, 0); background: var(--fc-primary); margin: 12px 0px 8px; border-radius: 0px !important; width: 40%;">
                                    <span>Connexion</span>
                                </button>
                            </div>
    
                        </div>
                    </div>
    
                </div>
            </div>
        </div>
    
        <!-- Modal inscription-->
        <div class="modal fade" id="userModalSign" tabindex="-1" aria-labelledby="userModalSignLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" style="max-width: auto !important; width: 100%;">
                <div class="modal-content p-4">
                    <div class="modal-header border-0 justify-content-between">
                        <button v-if="currentStep !== 1" class="fw-bold fs-3 " @click.prevent="prevStep"><i
                                class="bi bi-arrow-left fw-bolder"></i></button>
                        <h5 class="modal-title fs-4 fw-bold" id="userModalLabel">S'inscrire</h5>
    
                        <button type="button" class="btn-close  m-0" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-0">
                        <div class="generastep">
                            <div class="stepper">
                                <div class="stepper-progress">
                                    <div class="stepper-progress-bar" :style="'width:' + stepperProgress"></div>
                                </div>
    
                                <div class="stepper-item"
                                    :class="{ current: currentStep == item, success: currentStep > item }" v-for="item in 3"
                                    :key="item" @click="goToStep(item)">
                                    <div class="stepper-item-counter">
                                        <img class="icon-success"
                                            src="https://www.seekpng.com/png/full/1-10353_check-mark-green-png-green-check-mark-svg.png"
                                            alt="" />
                                        <span class="number">
                                            {{ item }}
                                        </span>
                                    </div>
                                    <!-- <span class="stepper-item-title"> Step {{ item }} </span> -->
                                </div>
                            </div>
                        </div>
                        <div class="container-fluid">
                            <!-- Étape 1 -->
                            <div v-if="currentStep === 1">
                                <div class="form-container">
                                    <div class="row mt-3 content-group">
    
                                        <div class="col-12">
                                            <div class="input-groupe">
                                                <label for="userpassword">
                                                    Adresse email <span class="text-danger">*</span></label>
                                                <MazInput v-model="poids_moyen_unite_stock" color="secondary"
                                                    name="step1.poids_moyen_unite_stock" size="sm" rounded-size="sm"
                                                    type="email" />
                                                <!-- <small v-if="v$.step1.poids_moyen_unite_stock.$error">{{
                                            v$.step1.poids_moyen_unite_stock.$errors[0].$message
                                            }}</small>
                                        <small v-if="resultError['poids_moyen_unite_stock']">
                                            {{ resultError["poids_moyen_unite_stock"] }}
                                        </small> -->
                                            </div>
                                        </div>
    
                                    </div>
    
    
                                </div>
                                <div class="btnForm py-3 d-flex items-center justify-content-end">
                                    <button class="btnLogin" :disabled="isButtonDisabled" @click.prevent="nextStep()">
                                        Suivant
                                    </button>
                                </div>
                            </div>
    
                            <!-- Étape 2 -->
                            <div v-if="currentStep === 2">
                                <div class="form-container">
                                    <div class="row mt-3 content-group">
    
                                        <div class="col-12">
                                            <div class="input-groupe">
                                                <label for="userpassword">
                                                    Adresse email</label>
                                                <MazInput v-model="nombre_unite_achat" color="secondary"
                                                    name="step2.nombre_unite_achat" size="sm" rounded-size="sm" type="email"
                                                    disabled />
                                                <!-- <small v-if="v$.step2.nombre_unite_achat.$error">{{
                                            v$.step2.nombre_unite_achat.$errors[0].$message
                                            }}</small>
                                        <small v-if="resultError['nombre_unite_achat']">
                                            {{ resultError["nombre_unite_achat"] }}
                                        </small> -->
                                            </div>
                                        </div>
    
                                        <div class="col-12">
                                            <div class="input-groupe">
                                                <label for="userpassword">
                                                    Mot de passe <span class="text-danger">*</span></label>
                                                <MazInput v-model="quantite_entree" color="secondary"
                                                    name="step2.quantite_entree" size="sm" rounded-size="sm"
                                                    type="password" />
                                                <!-- <small v-if="v$.step2.quantite_entree.$error">{{
                                            v$.step2.quantite_entree.$errors[0].$message
                                            }}</small>
                                        <small v-if="resultError['quantite_entree']">
                                            {{ resultError["quantite_entree"] }}
                                        </small> -->
                                            </div>
                                        </div>
    
                                    </div>
                                </div>
                                <div class="btnForm py-3 d-flex items-center justify-content-end">
                                    <!-- <button class="btnLogin" @click.prevent="prevStep">Previous</button> -->
                                    <button class="btnLogin" @click.prevent="nextStep()">suivant</button>
                                </div>
                            </div>
    
    
                            <!-- Étape 3 -->
                            <div v-if="currentStep === 3">
                                <div class="form-container">
                                    <p>Saisissez le code à 4 chiffres envoyé à l'adresse <br> <b>Wakanda@gmail.com</b></p>
    
                                    <div class="row mt-3 content-group">
                                        <div class="col-12">
                                            <div class="input-groupe">
                                                <MazInputCode v-model="code" size="sm" />
                                            </div>
                                        </div>
    
    
                                    </div>
                                </div>
                                <div class="btnForm py-3 d-flex items-center justify-content-end">
                                    <!-- <button class="btnLogin" @click.prevent="prevStep">Previous</button> -->
                                    <button class="btnLogin" @click.prevent="nextStep()">valider</button>
                                </div>
                            </div>
    
    
    
                        </div>
                    </div>
                    <div class="modal-footer text-center pt-0">
                            <p>
                              <small>
                                 By placing your order, you agree to be bound by the Freshcart
                                 <a href="#!">Terms of Service</a>
                                 and
                                 <a href="#!">Privacy Policy.</a>
                              </small>
                           </p>
                    </div>
    
                </div>
            </div>
        </div>
    
        <!-- Shop Cart -->
    
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header border-bottom">
                <div class="text-start">
                    <h5 id="offcanvasRightLabel" class="mb-0 fs-4">Shop Cart</h5>
                    <small>Location in 382480</small>
                </div>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div>
                  
                  
                    <ul class="list-group list-group-flush">
                        <!-- list group -->
                        <li class="list-group-item py-3 ps-0 border-top">
                            <!-- row -->
                            <div class="row align-items-center">
                                <div class="col-6 col-md-6 col-lg-7">
                                    <div class="d-flex">
                                        <img src="@/assets/images/products/product-img-1.jpg" alt="Ecommerce"
                                            class="icon-shape icon-xxl" />
                                        <div class="ms-3">
                                            <!-- title -->
                                            <a href="shop-single.html" class="text-inherit">
                                                <h6 class="mb-0">Haldiram's Sev Bhujia</h6>
                                            </a>
                                            <span><small class="text-muted">.98 / lb</small></span>
                                            <!-- text -->
                                            <div class="mt-2 small lh-1">
                                                <a href="#!" class="text-decoration-none text-inherit">
                                                    <span class="me-1 align-text-bottom">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                            class="feather feather-trash-2 text-success">
                                                            <polyline points="3 6 5 6 21 6"></polyline>
                                                            <path
                                                                d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                            </path>
                                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                                            <line x1="14" y1="11" x2="14" y2="17"></line>
                                                        </svg>
                                                    </span>
                                                    <span class="text-muted">Remove</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- input group -->
                                <div class="col-4 col-md-3 col-lg-3">
                                    <!-- input -->
                                    <!-- input -->
                                    <div class="input-group input-spinner">
                                        <input type="button" value="-" class="button-minus btn btn-sm"
                                            data-field="quantity" />
                                        <input type="number" step="1" max="10" value="1" name="quantity"
                                            class="quantity-field form-control-sm form-input" />
                                        <input type="button" value="+" class="button-plus btn btn-sm"
                                            data-field="quantity" />
                                    </div>
                                </div>
                                <!-- price -->
                                <div class="col-2 text-lg-end text-start text-md-end col-md-2">
                                    <span class="fw-bold">$5.00</span>
                                </div>
                            </div>
                        </li>
                        <!-- list group -->
                        <li class="list-group-item py-3 ps-0">
                            <!-- row -->
                            <div class="row align-items-center">
                                <div class="col-6 col-md-6 col-lg-7">
                                    <div class="d-flex">
                                        <img src="@/assets/images/products/product-img-2.jpg" alt="Ecommerce"
                                            class="icon-shape icon-xxl" />
                                        <div class="ms-3">
                                            <a href="shop-single.html" class="text-inherit">
                                                <h6 class="mb-0">NutriChoice Digestive</h6>
                                            </a>
                                            <span><small class="text-muted">250g</small></span>
                                            <!-- text -->
                                            <div class="mt-2 small lh-1">
                                                <a href="#!" class="text-decoration-none text-inherit">
                                                    <span class="me-1 align-text-bottom">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                            class="feather feather-trash-2 text-success">
                                                            <polyline points="3 6 5 6 21 6"></polyline>
                                                            <path
                                                                d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                            </path>
                                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                                            <line x1="14" y1="11" x2="14" y2="17"></line>
                                                        </svg>
                                                    </span>
                                                    <span class="text-muted">Remove</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    
                                <!-- input group -->
                                <div class="col-4 col-md-3 col-lg-3">
                                    <!-- input -->
                                    <!-- input -->
                                    <div class="input-group input-spinner">
                                        <input type="button" value="-" class="button-minus btn btn-sm"
                                            data-field="quantity" />
                                        <input type="number" step="1" max="10" value="1" name="quantity"
                                            class="quantity-field form-control-sm form-input" />
                                        <input type="button" value="+" class="button-plus btn btn-sm"
                                            data-field="quantity" />
                                    </div>
                                </div>
                                <!-- price -->
                                <div class="col-2 text-lg-end text-start text-md-end col-md-2">
                                    <span class="fw-bold text-danger">$20.00</span>
                                    <div class="text-decoration-line-through text-muted small">$26.00</div>
                                </div>
                            </div>
                        </li>
                        <!-- list group -->
                        <li class="list-group-item py-3 ps-0">
                            <!-- row -->
                            <div class="row align-items-center">
                                <div class="col-6 col-md-6 col-lg-7">
                                    <div class="d-flex">
                                        <img src="@/assets/images/products/product-img-3.jpg" alt="Ecommerce"
                                            class="icon-shape icon-xxl" />
                                        <div class="ms-3">
                                            <!-- title -->
                                            <a href="shop-single.html" class="text-inherit">
                                                <h6 class="mb-0">Cadbury 5 Star Chocolate</h6>
                                            </a>
                                            <span><small class="text-muted">1 kg</small></span>
                                            <!-- text -->
                                            <div class="mt-2 small lh-1">
                                                <a href="#!" class="text-decoration-none text-inherit">
                                                    <span class="me-1 align-text-bottom">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                            class="feather feather-trash-2 text-success">
                                                            <polyline points="3 6 5 6 21 6"></polyline>
                                                            <path
                                                                d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                            </path>
                                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                                            <line x1="14" y1="11" x2="14" y2="17"></line>
                                                        </svg>
                                                    </span>
                                                    <span class="text-muted">Remove</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    
                                <!-- input group -->
                                <div class="col-4 col-md-3 col-lg-3">
                                    <!-- input -->
                                    <!-- input -->
                                    <div class="input-group input-spinner">
                                        <input type="button" value="-" class="button-minus btn btn-sm"
                                            data-field="quantity" />
                                        <input type="number" step="1" max="10" value="1" name="quantity"
                                            class="quantity-field form-control-sm form-input" />
                                        <input type="button" value="+" class="button-plus btn btn-sm"
                                            data-field="quantity" />
                                    </div>
                                </div>
                                <!-- price -->
                                <div class="col-2 text-lg-end text-start text-md-end col-md-2">
                                    <span class="fw-bold">$15.00</span>
                                    <div class="text-decoration-line-through text-muted small">$20.00</div>
                                </div>
                            </div>
                        </li>
                      
                    </ul>
                    <!-- btn -->
                    <div class="float-end mt-4">
                        <a href="#!" class="btn btn-primary">Continue Shopping</a>
                       
                    </div>
                </div>
            </div>
        </div>
    
    </div>
</template>
<script>
export default {
  data() {
    return {
      indicateur: "",
      currentStep: 1,
    };
  },
  methods: {
    stepperProgress() {
      return (100 / 2) * (this.currentStep - 1) + "%";
    },
    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },

    goToStep(step) {
      this.currentStep = step;
    },
    async nextStep(modalId) {
      try {

        if (this.currentStep === 1) {
          //   this.v$.step1.$touch();
          //   if (this.v$.$errors.length == 0) {
          this.currentStep++;

          //   } else {
          //     console.log("errroor1", this.v$.$errors);
          //   }


        }
        else if (this.currentStep === 2) {
          this.currentStep++;


        }

        else if (this.currentStep === 3) {
          //   this.v$.step4.$touch();
          //   if (this.v$.$errors.length == 0) {
          //     this.SubmitPixGrossiste(modalId)
          //   } else {
          //     console.log("errroor1", this.v$.$errors);
          //     window.scrollTo({
          //       top: 0,
          //       behavior: "smooth",
          //     });

          //   }
          this.$router.push("/client");


        }


      } catch (error) {
        // Gérer les erreurs
        console.log("errroor222", this.v$.$errors);

        console.error("Une erreur s'est produite :", error);
        console.log("errroor222", this.v$.$errors);


        window.scrollTo({ top: 0, behavior: "smooth" });
        this.loading = false;
      }
    },
    login() {
      // Naviguer vers la page /client
      this.$router.push("/client");



    },
  },
};
</script>
<style lang="css" scoped>
.fm-history-login-container {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-align: center;
    align-items: center;
}

.fm-history-login-container.new-history img {
    margin-bottom: 14px;
}

.fm-history-login-avatar {
    width: 90px;
    height: 90px;
    margin-bottom: 8px;
    border-radius: 50% 50%;
}

.fm-history-login-container.new-history img {
    margin-bottom: 14px;
}

.fm-history-login-avatar {
    width: 90px;
    height: 90px;
    margin-bottom: 8px;
    border-radius: 50% 50%;
}

.fm-history-login-container.new-history .fm-history-login-username {
    margin-bottom: 8px;
}

.fm-history-login-username {
    font-weight: 700;
    font-size: 18px;
    color: #191919;
    line-height: 24px;
}

.fm-history-login-container.new-history .fm-history-login-account-number {
    margin-bottom: 32px;
}

.fm-history-login-account-number {
    font-size: 16px;
    color: #757575;
    line-height: 20px;
    margin-top: 4px;
    margin-bottom: 16px;
    direction: ltr;
}

.new-fm-login .fm-history-login-hint {
    margin-bottom: 20px;
}

.fm-history-login-hint {
    padding-top: 4px;
    color: #757575;
    font-size: 14px !important;
    line-height: 16px;
    letter-spacing: 0;
}

.fm-history-login-hint-link-text {
    text-decoration: underline;
    cursor: pointer;
    float: right;
    color: blue;
}

.cosmos-btn:not(.cosmos-btn-icon-only):not(.cosmos-btn-link) {
    min-width: 80px;
}

.nfm-common-button .cosmos-btn-primary {
    padding: 12px 24px;
    font-size: 18px;
    line-height: 24px;
    font-weight: 600;
}

.nfm-common-button .cosmos-btn {
    border-radius: 24px;
    height: auto;
}

.cosmos-btn-primary.cosmos-btn-large {
    padding-top: 10px;
    padding-bottom: 10px;
}

.cosmos-btn-primary[disabled] {
    background: linear-gradient(90deg, rgba(255, 100, 14, .5), rgba(255, 48, 0, .5));
    color: hsla(0, 0%, 100%, .5);
}

.cosmos-btn[disabled] {
    cursor: not-allowed;
    border-color: #ccc;
    color: #ccc;
    background: transparent;
    text-shadow: none;
    box-shadow: none;
}

button[disabled],
input[disabled] {
    cursor: default;
}

.cosmos-btn-primary {
    padding-top: 4px;
    padding-bottom: 4px;
    background: linear-gradient(90deg, #ff640e, #ff3000);
    color: #fff;
    border-width: 0;
}

.cosmos-btn-large {
    height: 44px;
}

.cosmos-btn-extra-large,
.cosmos-btn-large {
    padding-top: 9px;
    padding-bottom: 9px;
    font-size: 16px;
    line-height: 24px;
    border-radius: 22px;
}

.cosmos-btn-block {
    width: 100%;
}

.cosmos-btn {
    position: relative;
    display: inline-block;
    font-weight: 700;
    white-space: nowrap;
    text-align: center;
    background-image: none;
    border: 1px solid #999;
    cursor: pointer;
    transition: all .3s cubic-bezier(.645, .045, .355, 1);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    box-sizing: border-box;
    font-size: 16px;
    padding: 3px 12px;
    height: 32px;
    font-size: 14px;
    line-height: 24px;
    background: #fff;
    color: #222;
    border-radius: 16px;
    outline: 0;
}

.new-fm-login .fm-history-login-switch-account {
    color: #2490df;
}

.new-fm-login .fm-history-login-hint {
    margin-bottom: 20px;
}

.fm-history-login-switch-account {
    text-align: center;
    padding-top: 16px;
}

.fm-history-login-hint {
    padding-top: 4px;
    color: #757575;
    font-size: 14px !important;
    line-height: 16px;
    letter-spacing: 0;
}


.tx-green-1 {
    color: #75cc65;
    font-weight: 600;
}

.wrapper-stepper {
    background-color: #fff;
    padding: 60px;
    border-radius: 32px;
    box-shadow: rgba(0, 0, 0, 0.09);
}

.stepper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* width: 660px; */
    position: relative;
    z-index: 0;
    /* margin-bottom: 24px; */
}

.stepper-progress {
    position: absolute;
    background-color: #c5c5c5;
    height: 2px;
    z-index: -1;
    left: 0;
    right: 0;
    margin: 0 auto;
}

.stepper-progress-bar {
    position: absolute;
    left: 0;
    height: 100%;
    width: 0%;
    background-color: #47c00b;
    transition: all 500ms ease;
}

.stepper-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #c5c5c5;
    transition: all 500ms ease;
    cursor: pointer;
}

.stepper-item-counter {
    height: 35px;
    width: 35px;
    display: grid;
    place-items: center;
    background-color: #fff;
    border-radius: 100%;
    border: 2px solid #c5c5c5;
    position: relative;
}

.stepper-item-counter .icon-success {
    position: absolute;
    opacity: 0;
    transform: scale(0);
    width: 18px;
    transition: all 500ms ease;
}

.stepper-item-counter .number {
    font-size: 15px;
    transition: all 500ms ease;
}

.stepper-item-title {
    position: absolute;
    font-size: 15px;
    bottom: -39px;
    width: 71px;
    display: flex;
    justify-content: center;
}

.stepper-item.success .stepper-item-counter {
    border-color: #75cc65;
    background-color: #c8ebc1;
    color: #fff;
    font-weight: 600;
}

.stepper-item.success .stepper-item-counter .icon-success {
    opacity: 1;
    transform: scale(1);
}

.stepper-item.success .stepper-item-counter .number {
    opacity: 0;
    transform: scale(0);
}

.stepper-item.success .stepper-item-title {
    color: #75cc65;
}

.stepper-item.current .stepper-item-counter {
    border-color: #75cc65;
    background-color: #75cc65;
    color: #fff;
    font-weight: 600;
}

.stepper-item.current .stepper-item-title {
    color: #818181;
}

.signup a:hover {
    text-decoration: underline var(--fc-primary);
}

.sign {
    display: block;
    width: 100%;
    background-color: var(--fc-primary);
    padding: 0.75rem;
    text-align: center;
    color: black;
    border: none;
    border-radius: 0.375rem;
    font-weight: 600;
    margin-top: 50px;
}

.signup {
    text-align: center;
    font-size: 0.75rem;
    line-height: 1rem;
    color: rgba(156, 163, 175, 1);
}


.btnForm {
    max-width: 1140px;
    margin: 0px auto;
    background-color: white;
    padding: 1rem;
    color: black;

}

.btnLogin {
    padding: 1em 3em;
    font-size: 12px;
    font-weight: 500;
    color: #fff;
    background-color: var(--fc-primary);
    border: none;


    cursor: pointer;
    outline: none;
}

.btnLogin:hover {
    background-color: #fff;
    border: 1px solid var(--fc-primary);
    color: #000;
}
</style>