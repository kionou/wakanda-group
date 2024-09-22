<template >
    <div>
        <div class="bg-white position-fixed bottom-0 w-100  shadow-lg d-block d-lg-none text-center" style="z-index:99999 !important">
            <div class="d-flex align-items-center">
                <!-- <div class="w-25 icon-hover py-4"> -->
                    <!-- Button -->
                    <!-- <button class="navbar-toggler collapsed d-lg-none" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                            class="bi bi-text-indent-left text-primary" viewBox="0 0 16 16">
                            <path
                                d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </button> -->
                <!-- </div> -->
    
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
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content p-4">
                    <div class="modal-header border-0">
                        <h5 class="modal-title fs-3 fw-bold" id="userModalLabel">Sign Up</h5>
    
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="fullName" class="form-label">Name</label>
                                <input type="text" class="form-control" id="fullName" placeholder="Enter Your Name"
                                    required="" />
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="email" placeholder="Enter Email address"
                                    required="" />
                            </div>
    
                            <div class="mb-5">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" placeholder="Enter Password"
                                    required="" />
                                <small class="form-text">
                                    By Signup, you agree to our
                                    <a href="javascript:void(0)">Terms of Service</a>
                                    &
                                    <a href="javascript:void(0)">Privacy Policy</a>
                                </small>
                            </div>
    
                            <button type="submit" class="btn btn-primary">Sign Up</button>
                        </form>
                    </div>
                    <div class="modal-footer border-0 justify-content-center">
                        Already have an account?
                        <a href="#">Sign in</a>
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
                    <!-- alert -->
                    <div class="alert alert-danger p-2" role="alert">
                        You’ve got FREE delivery. Start
                        <a href="#!" class="alert-link">checkout now!</a>
                    </div>
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
                        <!-- list group -->
                        <li class="list-group-item py-3 ps-0">
                            <!-- row -->
                            <div class="row align-items-center">
                                <div class="col-6 col-md-6 col-lg-7">
                                    <div class="d-flex">
                                        <img src="@/assets/images/products/product-img-4.jpg" alt="Ecommerce"
                                            class="icon-shape icon-xxl" />
                                        <div class="ms-3">
                                            <!-- title -->
                                            <!-- title -->
                                            <a href="shop-single.html" class="text-inherit">
                                                <h6 class="mb-0">Onion Flavour Potato</h6>
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
                                    <span class="fw-bold">$15.00</span>
                                    <div class="text-decoration-line-through text-muted small">$20.00</div>
                                </div>
                            </div>
                        </li>
                        <!-- list group -->
                        <li class="list-group-item py-3 ps-0 border-bottom">
                            <!-- row -->
                            <div class="row align-items-center">
                                <div class="col-6 col-md-6 col-lg-7">
                                    <div class="d-flex">
                                        <img src="@/assets/images/products/product-img-5.jpg" alt="Ecommerce"
                                            class="icon-shape icon-xxl" />
                                        <div class="ms-3">
                                            <!-- title -->
                                            <a href="shop-single.html" class="text-inherit">
                                                <h6 class="mb-0">Salted Instant Popcorn</h6>
                                            </a>
                                            <span><small class="text-muted">100g</small></span>
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
                                    <div class="text-decoration-line-through text-muted small">$25.00</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <!-- btn -->
                    <div class="d-flex justify-content-between mt-4">
                        <a href="#!" class="btn btn-primary">Continue Shopping</a>
                        <a href="#!" class="btn btn-dark">Update Cart</a>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="css" scoped>
    
</style>