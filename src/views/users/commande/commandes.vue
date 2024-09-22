<template >
    <div>
      <div class="row mt-4">
         <!-- col -->
         <div class="col-12">
            <!-- breadcrumb -->
            <nav class="mb-3" aria-label="breadcrumb">
            <ol class="breadcrumb mb-0">
               <li class="breadcrumb-item"><a href="/">Accueil </a></li>
               <li class="breadcrumb-item"><router-link to="/categories">commande ></router-link></li>
               <li class="breadcrumb-item active" aria-current="page">Electroniques</li>
            </ol>
         </nav>
         </div>
      </div>
        <main>
         <!-- section -->
         <section>
          
               <!-- row -->
               <div class="row mt-2">
                  <!-- col -->
                  <div class="col-12">
                     <div class="d-flex justify-content-between align-items-center d-md-none py-4">
                        <!-- heading -->
                        <h3 class="fs-5 mb-0">Account Setting</h3>
                        <!-- button -->
                        <button
                           class="btn btn-outline-gray-400 text-muted d-md-none btn-icon btn-sm ms-3"
                           type="button"
                           data-bs-toggle="offcanvas"
                           data-bs-target="#offcanvasAccount"
                           aria-controls="offcanvasAccount">
                           <i class="bi bi-text-indent-left fs-3"></i>
                        </button>
                     </div>
                  </div>
                  <!-- col -->
                  <div class="col_xl-3 col-lg-3  col-md-4 col-12  d-none d-md-block ">
                     <div class="pt-10 pe-lg-10 bg-white me-2">
                        <!-- nav -->
                        <ul class="nav flex-column nav-pills nav-pills-dark">
                           <!-- nav item -->
                           <li class="nav-item">
                              <router-link class="nav-link active" aria-current="page" to="#">
                                 <i class="feather-icon icon-user me-2"></i>
                                 Votre compte
                              </router-link>
                           </li>
                           <!-- nav item -->
                           <li class="nav-item">
                              <router-link to="/commandes" class="nav-link" >
                                 <i class="feather-icon icon-shopping-bag me-2"></i>
                                 Vos commandes
                              </router-link>
                           </li>
                           <!-- nav item -->
                           <li class="nav-item">
                              <router-link to="/user-adresse" class="nav-link" >
                                 <i class="feather-icon icon-map-pin me-2"></i>
                                 Adresse
                              </router-link>
                           </li>
                           <!-- nav item -->
                           <li class="nav-item">
                              <a class="nav-link" href="account-payment-method.html">
                                 <i class="feather-icon icon-credit-card me-2"></i>
                                 Mode de payement
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div class=" col_xl-9 col-lg-9  col-md-8 col-12 ">
                     <div class="py-6 p-md-6 p-lg-10 bg-white ms-2">
                        <!-- heading -->
                        <h2 class="mb-6">Your Orders</h2>

                        <div class="row g-4 row-cols-1 mt-2">
                        <div class="col">
                           <!-- card -->
                           <div class="card card-product">
                              <!-- card body -->
                              <div class="card-body">
                                 <div class="row align-items-center">
                                    <!-- col -->
                                    <div class="col-md-10 col-12 mt-0 d-flex align-items-center">
                                       <div class="text-center position-relative">
                                          
                                          <router-link to="/detail">
                                             <!-- img -->
                                             <img src="@/assets/images/products/product-img-1.jpg" alt="Grocery Ecommerce Template" class="mb-0 img-fluid" style="height: 150px !important;"/>
                                          </router-link>
                                       </div>
                                       <div class="">
                                       <!-- heading -->
                                       <h2 class="fs-6"><router-link to="/detail" class="text-inherit text-decoration-none">Haldiram's Sev Bhujia</router-link></h2>

                                       <div class="text-small mb-1">
                                          <router-link to="#" class="text-decoration-none text-muted"><small>Commande 33434243</small></router-link>
                                       </div>
                                       <span class="badge bg-success">Colis livré</span>
                                     
                                       <div class="mt-1">
                                          <!-- price -->
                                          <div>
                                             <span class="text-dark fw-semibold">12-23-2024</span>
                                             
                                          </div>
                                         
                                         
                                       </div>
                                    </div>
                                    </div>
                                  

                                    <div class="col-md-2 ">
                                        <router-link to="/commandes-detail" class="btn btn-sm btn-primary">DETAILS</router-link>
                                       
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col">
                           <!-- card -->
                           <div class="card card-product">
                              <!-- card body -->
                              <div class="card-body">
                                 <div class="row align-items-center">
                                    <!-- col -->
                                    <div class="col-md-4 col-12 mt-0">
                                       <div class="text-center position-relative">
                                          
                                          <router-link to="/detail">
                                             <!-- img -->
                                             <img src="@/assets/images/products/product-img-1.jpg" alt="Grocery Ecommerce Template" class="mb-0 img-fluid" style="height: 150px !important;"/>
                                          </router-link>
                                       </div>
                                    </div>
                                    <div class="col-md-8 col-12 flex-grow-1 mt-0">
                                       <!-- heading -->
                                       <div class="text-small mb-1">
                                          <router-link to="/detail" class="text-decoration-none text-muted"><small>Snack & Munchies</small></router-link>
                                       </div>
                                       <h2 class="fs-6"><router-link to="/detail" class="text-inherit text-decoration-none">Haldiram's Sev Bhujia</router-link></h2>
                                     
                                       <div class="mt-6">
                                          <!-- price -->
                                          <div>
                                             <span class="text-dark">$18</span>
                                             <span class="text-decoration-line-through text-muted">$24</span>
                                          </div>
                                          <!-- btn -->
                                         
                                          <!-- btn -->
                                          <div class="mt-2">
                                             <router-link to="/detail" class="btn btn-primary">
                                                <svg
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   width="16"
                                                   height="16"
                                                   viewBox="0 0 24 24"
                                                   fill="none"
                                                   stroke="currentColor"
                                                   stroke-width="2"
                                                   stroke-linecap="round"
                                                   stroke-linejoin="round"
                                                   class="feather feather-shopping-bag me-2">
                                                   <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                                   <line x1="3" y1="6" x2="21" y2="6"></line>
                                                   <path d="M16 10a4 4 0 0 1-8 0"></path>
                                                </svg>
                                                Add to Cart
                                             </router-link>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col">
                           <!-- card -->
                           <div class="card card-product">
                              <!-- card body -->
                              <div class="card-body">
                                 <div class="row align-items-center">
                                    <!-- col -->
                                    <div class="col-md-4 col-12 mt-0">
                                       <div class="text-center position-relative">
                                          
                                          <router-link to="/detail">
                                             <!-- img -->
                                             <img src="@/assets/images/products/product-img-1.jpg" alt="Grocery Ecommerce Template" class="mb-0 img-fluid" style="height: 150px !important;"/>
                                          </router-link>
                                       </div>
                                    </div>
                                    <div class="col-md-8 col-12 flex-grow-1 mt-0">
                                       <!-- heading -->
                                       <div class="text-small mb-1">
                                          <router-link to="/detail" class="text-decoration-none text-muted"><small>Snack & Munchies</small></router-link>
                                       </div>
                                       <h2 class="fs-6"><router-link to="/detail" class="text-inherit text-decoration-none">Haldiram's Sev Bhujia</router-link></h2>
                                     
                                       <div class="mt-6">
                                          <!-- price -->
                                          <div>
                                             <span class="text-dark">$18</span>
                                             <span class="text-decoration-line-through text-muted">$24</span>
                                          </div>
                                          <!-- btn -->
                                         
                                          <!-- btn -->
                                          <div class="mt-2">
                                             <router-link to="/detail" class="btn btn-primary">
                                                <svg
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   width="16"
                                                   height="16"
                                                   viewBox="0 0 24 24"
                                                   fill="none"
                                                   stroke="currentColor"
                                                   stroke-width="2"
                                                   stroke-linecap="round"
                                                   stroke-linejoin="round"
                                                   class="feather feather-shopping-bag me-2">
                                                   <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                                   <line x1="3" y1="6" x2="21" y2="6"></line>
                                                   <path d="M16 10a4 4 0 0 1-8 0"></path>
                                                </svg>
                                                Add to Cart
                                             </router-link>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col">
                           <!-- card -->
                           <div class="card card-product">
                              <!-- card body -->
                              <div class="card-body">
                                 <div class="row align-items-center">
                                    <!-- col -->
                                    <div class="col-md-4 col-12 mt-0">
                                       <div class="text-center position-relative">
                                          
                                          <router-link to="/detail">
                                             <!-- img -->
                                             <img src="@/assets/images/products/product-img-1.jpg" alt="Grocery Ecommerce Template" class="mb-0 img-fluid" style="height: 150px !important;"/>
                                          </router-link>
                                       </div>
                                    </div>
                                    <div class="col-md-8 col-12 flex-grow-1 mt-0">
                                       <!-- heading -->
                                       <div class="text-small mb-1">
                                          <router-link to="/detail" class="text-decoration-none text-muted"><small>Snack & Munchies</small></router-link>
                                       </div>
                                       <h2 class="fs-6"><router-link to="/detail" class="text-inherit text-decoration-none">Haldiram's Sev Bhujia</router-link></h2>
                                     
                                       <div class="mt-6">
                                          <!-- price -->
                                          <div>
                                             <span class="text-dark">$18</span>
                                             <span class="text-decoration-line-through text-muted">$24</span>
                                          </div>
                                          <!-- btn -->
                                         
                                          <!-- btn -->
                                          <div class="mt-2">
                                             <router-link to="/detail" class="btn btn-primary">
                                                <svg
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   width="16"
                                                   height="16"
                                                   viewBox="0 0 24 24"
                                                   fill="none"
                                                   stroke="currentColor"
                                                   stroke-width="2"
                                                   stroke-linecap="round"
                                                   stroke-linejoin="round"
                                                   class="feather feather-shopping-bag me-2">
                                                   <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                                   <line x1="3" y1="6" x2="21" y2="6"></line>
                                                   <path d="M16 10a4 4 0 0 1-8 0"></path>
                                                </svg>
                                                Add to Cart
                                             </router-link>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col">
                           <!-- card -->
                           <div class="card card-product">
                              <!-- card body -->
                              <div class="card-body">
                                 <div class="row align-items-center">
                                    <!-- col -->
                                    <div class="col-md-4 col-12 mt-0">
                                       <div class="text-center position-relative">
                                          
                                          <router-link to="/detail">
                                             <!-- img -->
                                             <img src="@/assets/images/products/product-img-1.jpg" alt="Grocery Ecommerce Template" class="mb-0 img-fluid" style="height: 150px !important;"/>
                                          </router-link>
                                       </div>
                                    </div>
                                    <div class="col-md-8 col-12 flex-grow-1 mt-0">
                                       <!-- heading -->
                                       <div class="text-small mb-1">
                                          <router-link to="/detail" class="text-decoration-none text-muted"><small>Snack & Munchies</small></router-link>
                                       </div>
                                       <h2 class="fs-6"><router-link to="/detail" class="text-inherit text-decoration-none">Haldiram's Sev Bhujia</router-link></h2>
                                     
                                       <div class="mt-6">
                                          <!-- price -->
                                          <div>
                                             <span class="text-dark">$18</span>
                                             <span class="text-decoration-line-through text-muted">$24</span>
                                          </div>
                                          <!-- btn -->
                                         
                                          <!-- btn -->
                                          <div class="mt-2">
                                             <router-link to="/detail" class="btn btn-primary">
                                                <svg
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   width="16"
                                                   height="16"
                                                   viewBox="0 0 24 24"
                                                   fill="none"
                                                   stroke="currentColor"
                                                   stroke-width="2"
                                                   stroke-linecap="round"
                                                   stroke-linejoin="round"
                                                   class="feather feather-shopping-bag me-2">
                                                   <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                                   <line x1="3" y1="6" x2="21" y2="6"></line>
                                                   <path d="M16 10a4 4 0 0 1-8 0"></path>
                                                </svg>
                                                Add to Cart
                                             </router-link>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col">
                           <!-- card -->
                           <div class="card card-product">
                              <!-- card body -->
                              <div class="card-body">
                                 <div class="row align-items-center">
                                    <!-- col -->
                                    <div class="col-md-4 col-12 mt-0">
                                       <div class="text-center position-relative">
                                          
                                          <router-link to="/detail">
                                             <!-- img -->
                                             <img src="@/assets/images/products/product-img-1.jpg" alt="Grocery Ecommerce Template" class="mb-0 img-fluid" style="height: 150px !important;"/>
                                          </router-link>
                                       </div>
                                    </div>
                                    <div class="col-md-8 col-12 flex-grow-1 mt-0">
                                       <!-- heading -->
                                       <div class="text-small mb-1">
                                          <router-link to="/detail" class="text-decoration-none text-muted"><small>Snack & Munchies</small></router-link>
                                       </div>
                                       <h2 class="fs-6"><router-link to="/detail" class="text-inherit text-decoration-none">Haldiram's Sev Bhujia</router-link></h2>
                                     
                                       <div class="mt-6">
                                          <!-- price -->
                                          <div>
                                             <span class="text-dark">$18</span>
                                             <span class="text-decoration-line-through text-muted">$24</span>
                                          </div>
                                          <!-- btn -->
                                         
                                          <!-- btn -->
                                          <div class="mt-2">
                                             <router-link to="/detail" class="btn btn-primary">
                                                <svg
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   width="16"
                                                   height="16"
                                                   viewBox="0 0 24 24"
                                                   fill="none"
                                                   stroke="currentColor"
                                                   stroke-width="2"
                                                   stroke-linecap="round"
                                                   stroke-linejoin="round"
                                                   class="feather feather-shopping-bag me-2">
                                                   <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                                   <line x1="3" y1="6" x2="21" y2="6"></line>
                                                   <path d="M16 10a4 4 0 0 1-8 0"></path>
                                                </svg>
                                                Add to Cart
                                             </router-link>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
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
export default {
    
}
</script>
<style lang="css" scoped>
    
</style>