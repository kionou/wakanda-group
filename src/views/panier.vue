<template >
    <div>
        <main>
         <!-- section-->
         <div class="mt-4">
           
               <!-- row -->
               <div class="row">
                  <!-- col -->
                  <div class="col-12">
                     <!-- breadcrumb -->
                     <nav class="mb-3" aria-label="breadcrumb">
                     <ol class="breadcrumb mb-0">
                        <li class="breadcrumb-item"><a href="/">Accueil </a></li>
                        <li class="breadcrumb-item"><router-link to="/categories">panier ></router-link></li>
                        <li class="breadcrumb-item active" aria-current="page">Electroniques</li>
                     </ol>
                  </nav>
                  </div>
               </div>
           
         </div>
         <!-- section -->
         <section class="mb-lg-14 mb-8 mt-8">
          
               <!-- row -->
               <div class="row">
                <div class="col-xl-12 card mb-4 bg-light border-0 bg-white">
                        <!-- card body -->
                        <div class="card-body p-9">
                           <h2 class="mb-0 fs-1">Shop Cart</h2>
                        </div>
                     </div>
               </div>
               <!-- row -->
               <div class="row justify-content-between">
                  <div class=" col-xl-8 col-lg-8 col-md-7 ">
                     <div class="">
                       
                        <ul class="list-group list-group-flush">
                           <!-- list group -->
                           <li class="list-group-item py-3 ps-0 border-top">
                              <!-- row -->
                              <div class="row align-items-center">
                                 <div class="col-6 col-md-6 col-lg-7">
                                    <div class="d-flex">
                                       <img src="@/assets/images/products/product-img-1.jpg" alt="Ecommerce" class="icon-shape icon-xxl" />
                                       <div class="ms-3">
                                          <!-- title -->
                                          <router-link to="/detail" class="text-inherit">
                                             <h6 class="mb-0">Haldiram's Sev Bhujia</h6>
                                          </router-link>
                                          <span><small class="text-muted">.98 / lb</small></span>
                                          <!-- text -->
                                          <div class="mt-2 small lh-1">
                                             <a href="#!" class="text-decoration-none text-inherit">
                                                <span class="me-1 align-text-bottom">
                                                   <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width="14"
                                                      height="14"
                                                      viewBox="0 0 24 24"
                                                      fill="none"
                                                      stroke="currentColor"
                                                      stroke-width="2"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"
                                                      class="feather feather-trash-2 text-success">
                                                      <polyline points="3 6 5 6 21 6"></polyline>
                                                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
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
                                 <div class="col-4 col-md-4 col-lg-3">
                                    <!-- input -->
                                    <!-- input -->
                                    <div class="input-group input-spinner">
                                       <input type="button" value="-" class="button-minus btn btn-sm" data-field="quantity" />
                                       <input type="number" step="1" max="10" value="1" name="quantity" class="quantity-field form-control-sm form-input" />
                                       <input type="button" value="+" class="button-plus btn btn-sm" data-field="quantity" />
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
                                       <img src="@/assets/images/products/product-img-2.jpg" alt="Ecommerce" class="icon-shape icon-xxl" />
                                       <div class="ms-3">
                                          <router-link to="/detail" class="text-inherit">
                                             <h6 class="mb-0">NutriChoice Digestive</h6>
                                          </router-link>
                                          <span><small class="text-muted">250g</small></span>
                                          <!-- text -->
                                          <div class="mt-2 small lh-1">
                                             <a href="#!" class="text-decoration-none text-inherit">
                                                <span class="me-1 align-text-bottom">
                                                   <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width="14"
                                                      height="14"
                                                      viewBox="0 0 24 24"
                                                      fill="none"
                                                      stroke="currentColor"
                                                      stroke-width="2"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"
                                                      class="feather feather-trash-2 text-success">
                                                      <polyline points="3 6 5 6 21 6"></polyline>
                                                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
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
                                 <div class="col-4 col-md-4 col-lg-3">
                                    <!-- input -->
                                    <!-- input -->
                                    <div class="input-group input-spinner">
                                       <input type="button" value="-" class="button-minus btn btn-sm" data-field="quantity" />
                                       <input type="number" step="1" max="10" value="1" name="quantity" class="quantity-field form-control-sm form-input" />
                                       <input type="button" value="+" class="button-plus btn btn-sm" data-field="quantity" />
                                    </div>
                                 </div>
                                 <!-- price -->
                                 <div class="col-2 text-lg-end text-start text-md-end col-md-2">
                                    <span class="fw-bold text-danger">2000 F CFA</span>
                                    <div class="text-decoration-line-through text-muted small">3000 F CFA</div>
                                 </div>
                              </div>
                           </li>
                           <!-- list group -->
                           <li class="list-group-item py-3 ps-0">
                              <!-- row -->
                              <div class="row align-items-center">
                                 <div class="col-6 col-md-6 col-lg-7">
                                    <div class="d-flex">
                                       <img src="@/assets/images/products/product-img-3.jpg" alt="Ecommerce" class="icon-shape icon-xxl" />
                                       <div class="ms-3">
                                          <!-- title -->
                                          <router-link to="/detail" class="text-inherit">
                                             <h6 class="mb-0">Cadbury 5 Star Chocolate</h6>
                                          </router-link>
                                          <span><small class="text-muted">1 kg</small></span>
                                          <!-- text -->
                                          <div class="mt-2 small lh-1">
                                             <a href="#!" class="text-decoration-none text-inherit">
                                                <span class="me-1 align-text-bottom">
                                                   <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width="14"
                                                      height="14"
                                                      viewBox="0 0 24 24"
                                                      fill="none"
                                                      stroke="currentColor"
                                                      stroke-width="2"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"
                                                      class="feather feather-trash-2 text-success">
                                                      <polyline points="3 6 5 6 21 6"></polyline>
                                                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
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
                                 <div class="col-4 col-md-4 col-lg-3">
                                    <!-- input -->
                                    <!-- input -->
                                    <div class="input-group input-spinner">
                                       <input type="button" value="-" class="button-minus btn btn-sm" data-field="quantity" />
                                       <input type="number" step="1" max="10" value="1" name="quantity" class="quantity-field form-control-sm form-input" />
                                       <input type="button" value="+" class="button-plus btn btn-sm" data-field="quantity" />
                                    </div>
                                 </div>
                                 <!-- price -->
                                 <div class="col-2 text-lg-end text-start text-md-end col-md-2">
                                    <span class="fw-bold">1500 F CFA</span>
                                    <div class="text-decoration-line-through text-muted small">2000 F CFA</div>
                                 </div>
                              </div>
                           </li>
                           <!-- list group -->
                           <li class="list-group-item py-3 ps-0">
                              <!-- row -->
                              <div class="row align-items-center">
                                 <div class="col-6 col-md-6 col-lg-7">
                                    <div class="d-flex">
                                       <img src="@/assets/images/products/product-img-4.jpg" alt="Ecommerce" class="icon-shape icon-xxl" />
                                       <div class="ms-3">
                                          <!-- title -->
                                          <!-- title -->
                                          <router-link to="/detail" class="text-inherit">
                                             <h6 class="mb-0">Onion Flavour Potato</h6>
                                          </router-link>
                                          <span><small class="text-muted">250g</small></span>
                                          <!-- text -->
                                          <div class="mt-2 small lh-1">
                                             <a href="#!" class="text-decoration-none text-inherit">
                                                <span class="me-1 align-text-bottom">
                                                   <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width="14"
                                                      height="14"
                                                      viewBox="0 0 24 24"
                                                      fill="none"
                                                      stroke="currentColor"
                                                      stroke-width="2"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"
                                                      class="feather feather-trash-2 text-success">
                                                      <polyline points="3 6 5 6 21 6"></polyline>
                                                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
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
                                 <div class="col-4 col-md-4 col-lg-3">
                                    <!-- input -->
                                    <!-- input -->
                                    <div class="input-group input-spinner">
                                       <input type="button" value="-" class="button-minus btn btn-sm" data-field="quantity" />
                                       <input type="number" step="1" max="10" value="1" name="quantity" class="quantity-field form-control-sm form-input" />
                                       <input type="button" value="+" class="button-plus btn btn-sm" data-field="quantity" />
                                    </div>
                                 </div>
                                 <!-- price -->
                                 <div class="col-2 text-lg-end text-start text-md-end col-md-2">
                                    <span class="fw-bold">1500 F CFA</span>
                                    <div class="text-decoration-line-through text-muted small">2000 F CFA</div>
                                 </div>
                              </div>
                           </li>
                           <!-- list group -->
                           <li class="list-group-item py-3 ps-0 border-bottom">
                              <!-- row -->
                              <div class="row align-items-center">
                                 <div class="col-6 col-md-6 col-lg-7">
                                    <div class="d-flex">
                                       <img src="@/assets/images/products/product-img-5.jpg" alt="Ecommerce" class="icon-shape icon-xxl" />
                                       <div class="ms-3">
                                          <!-- title -->
                                          <router-link to="/detail" class="text-inherit">
                                             <h6 class="mb-0">Salted Instant Popcorn</h6>
                                          </router-link>
                                          <span><small class="text-muted">100g</small></span>
                                          <!-- text -->
                                          <div class="mt-2 small lh-1">
                                             <a href="#!" class="text-decoration-none text-inherit">
                                                <span class="me-1 align-text-bottom">
                                                   <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width="14"
                                                      height="14"
                                                      viewBox="0 0 24 24"
                                                      fill="none"
                                                      stroke="currentColor"
                                                      stroke-width="2"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"
                                                      class="feather feather-trash-2 text-success">
                                                      <polyline points="3 6 5 6 21 6"></polyline>
                                                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
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
                                 <div class="col-4 col-md-4 col-lg-3">
                                    <!-- input -->
                                    <!-- input -->
                                    <div class="input-group input-spinner">
                                       <input type="button" value="-" class="button-minus btn btn-sm" data-field="quantity" />
                                       <input type="number" step="1" max="10" value="1" name="quantity" class="quantity-field form-control-sm form-input" />
                                       <input type="button" value="+" class="button-plus btn btn-sm" data-field="quantity" />
                                    </div>
                                 </div>
                                 <!-- price -->
                                 <div class="col-2 text-lg-end text-start text-md-end col-md-2">
                                    <span class="fw-bold">1500 F CFA</span>
                                    <div class="text-decoration-line-through text-muted small">2000 F CFA</div>
                                 </div>
                              </div>
                           </li>
                        </ul>
                        <!-- btn -->
                        <div class="d-flex justify-content-between mt-4">
                           <a href="/" class="btn btn-primary">Continue Shopping</a>
                           <a href="#!" class="btn btn-dark">Update Cart</a>
                        </div>
                     </div>
                  </div>

                  <!-- sidebar -->
                  <div class="col-12 col-xl-4 col-lg-4 col-md-5">
                     <!-- card -->
                     <div class="mb-5 card ms-5">
                        <div class="card-body p-6">
                           <!-- heading -->
                           <h2 class="h5 mb-4">Summary</h2>
                           <div class="card mb-2">
                              <!-- list group -->
                              <ul class="list-group list-group-flush">
                                 <!-- list group item -->
                                 <li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="me-auto">
                                       <div>Item Subtotal</div>
                                    </div>
                                    <span>30 000 F CFA</span>
                                 </li>

                                 <!-- list group item -->
                                 <li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="me-auto">
                                       <div>Service Fee</div>
                                    </div>
                                    <span>2 000 F CFA</span>
                                 </li>
                                 <!-- list group item -->
                                 <li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="me-auto">
                                       <div class="fw-bold">Subtotal</div>
                                    </div>
                                    <span class="fw-bold">32 000 F CFA</span>
                                 </li>
                              </ul>
                           </div>
                           <div class="d-grid mb-1 mt-4">
                              <!-- btn -->
                              <button class="btn btn-primary btn-lg d-flex justify-content-between align-items-center" type="submit">
                                 Go to Checkout
                                 <span class="fw-bold">32 000 F CFA</span>
                              </button>
                           </div>
                           <!-- text -->
                           <p>
                              <small>
                                 By placing your order, you agree to be bound by the Freshcart
                                 <a href="#!">Terms of Service</a>
                                 and
                                 <a href="#!">Privacy Policy.</a>
                              </small>
                           </p>

                           <!-- heading -->
                           <div class="mt-8">
                              <h2 class="h5 mb-3">Add Promo or Gift Card</h2>
                              <form>
                                 <div class="mb-2">
                                    <!-- input -->
                                    <label for="giftcard" class="form-label sr-only">Email address</label>
                                    <input type="text" class="form-control" id="giftcard" placeholder="Promo or Gift Card" />
                                 </div>
                                 <!-- btn -->
                                 <div class="d-grid"><button type="submit" class="btn btn-outline-dark mb-1">Redeem</button></div>
                                 <p class="text-muted mb-0"><small>Terms & Conditions apply</small></p>
                              </form>
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