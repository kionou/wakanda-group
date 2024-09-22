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
                        <li class="breadcrumb-item"><router-link to="/categories">Detail ></router-link></li>
                        <li class="breadcrumb-item active" aria-current="page">Iphone Xr</li>
                     </ol>
                  </nav>
                  </div>
               </div>
            </div>
         </div>
         <div class="row">
            <div class="col-6">
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
            <div class="col-6">
               <section class="">
            <div class="container">
               <div class="row">
                  <div class="col-md-12">
                     <ul class="nav nav-pills nav-lb-tab" id="myTab" role="tablist">
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
                              aria-selected="true">
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
                              aria-selected="false">
                              Information
                           </button>
                        </li>
                      
                       
                     </ul>
                     <!-- tab content -->
                     <div class="tab-content" id="myTabContent">
                        <!-- tab pane -->
                        <div class="tab-pane fade show active" id="product-tab-pane" role="tabpanel" aria-labelledby="product-tab" tabindex="0">
                           <div class="my-2">
                     <div class=" mt-6 mt-md-0">
                        <div class="row">
                           <div class="col-6">
                              <div class="card ">
                           <video src="@/assets/video/video1.mp4"  class="h-100 w-100 " controls style="border-radius:5px ">
                            
                           </video>
                        </div>
                           </div>
                           <div class="col-6">
                              <div class="ms-3">
                                 <h1 class="mb-1">Produit 1</h1>
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
                           <span class="fw-bold text-dark">3 000 F CFA</span>
                           <span class="text-decoration-line-through text-muted">6 500 F CFA</span>
                           <span><small class="fs-6 ms-2 text-danger">26% Off</small></span>
                        </div>
                           </div>
                              </div>

                        

                        </div>

                       
                     
                       
                        <!-- hr -->
                        <hr class="my-6" />
                       
                       
                        <div class="row align-items-center">
                           <div class="col-3">
                               <!-- input -->
                           <div class="input-group input-spinner">
                              <input type="button" value="-" class="button-minus btn btn-sm bg-white" data-field="quantity" />
                              <input type="number" step="1" max="10" value="1" name="quantity" class="quantity-field form-control-sm form-input bg-white" />
                              <input type="button" value="+" class="button-plus btn btn-sm bg-white" data-field="quantity" />
                           </div>
                           </div>
                           <div class="col-9">
                              <div class="row justify-content-start g-2 align-items-center">
                           <div class="col-xl-4 col-lg-4 col-md-5 col-5 d-grid">
                              <!-- button -->
                              <!-- btn -->
                              <button type="button" class="btn btn-primary">
                                 <i class="feather-icon icon-shopping-bag me-2"></i>
                                 Add to cart
                              </button>
                           </div>

                           <div class="col-xl-4 col-lg-4 col-md-4 col-3 d-flex justify-content-center">
                              <a class="btn btn-light" href="shop-wishlist.html" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Wishlist"><i class="feather-icon icon-heart"></i></a>
                          
                           </div>

                           <div class="col-xl-4 col-lg-4 col-md-4 col-4">
                              <div class="">
                           <!-- dropdown -->
                           <div class="dropdown">
                              <a class="btn btn-outline-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Share</a>

                              <ul class="dropdown-menu">
                                 <li>
                                    <a class="dropdown-item" href="#">
                                       <i class="bi bi-facebook me-2"></i>
                                       Facebook
                                    </a>
                                 </li>
                                 <li>
                                    <a class="dropdown-item" href="#">
                                       <i class="bi bi-twitter me-2"></i>
                                       Twitter
                                    </a>
                                 </li>
                                 <li>
                                    <a class="dropdown-item" href="#">
                                       <i class="bi bi-instagram me-2"></i>
                                       Instagram
                                    </a>
                                 </li>
                              </ul>
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
                        <div class="tab-pane fade" id="details-tab-pane" role="tabpanel" aria-labelledby="details-tab" tabindex="0">
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
                                                <router-link to="/detail"><img
                                                        src="@/assets/images/products/product-img-3.jpg"
                                                        alt="Grocery Ecommerce Template"
                                                        class="mb-3 img-fluid" /></router-link>
                                                <!-- action btn -->
    
                                            </div>
                                            <!-- title -->
                                            <h2 class="fs-6"><router-link to="/detail"
                                                    class="text-inherit text-decoration-none">Cadbury
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
                                                <router-link to="/detail"><img
                                                        src="@/assets/images/products/product-img-3.jpg"
                                                        alt="Grocery Ecommerce Template"
                                                        class="mb-3 img-fluid" /></router-link>
                                                <!-- action btn -->
    
                                            </div>
                                            <!-- title -->
                                            <h2 class="fs-6"><router-link to="/detail"
                                                    class="text-inherit text-decoration-none">Cadbury
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
                                                <router-link to="/detail" href="#!"><img
                                                        src="@/assets/images/products/product-img-1.jpg"
                                                        alt="Grocery Ecommerce Template"
                                                        class="mb-3 img-fluid" /></router-link>
                                                <!-- action btn -->
    
                                            </div>
                                            <!-- title -->
                                            <h2 class="fs-6"><router-link to="/detail"
                                                    class="text-inherit text-decoration-none">Haldiram's Sev
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
                                                <router-link to="/detail"><img
                                                        src="@/assets/images/products/product-img-2.jpg"
                                                        alt="Grocery Ecommerce Template"
                                                        class="mb-3 img-fluid" /></router-link>
                                                <!-- action btn -->
    
                                            </div>
                                            <!-- title -->
                                            <h2 class="fs-6"><router-link to="/detail"
                                                    class="text-inherit text-decoration-none">Britannia NutriChoice
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
                                                <router-link to="/detail" href="#!"><img
                                                        src="@/assets/images/products/product-img-1.jpg"
                                                        alt="Grocery Ecommerce Template"
                                                        class="mb-3 img-fluid" /></router-link>
                                                <!-- action btn -->
    
                                            </div>
                                            <!-- title -->
                                            <h2 class="fs-6"><router-link to="/detail"
                                                    class="text-inherit text-decoration-none">Haldiram's Sev
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
export default {
    data() {
        return {
            images: [
        'https://freshcart.codescandy.com/assets/images/products/product-single-img-1.jpg',
        'https://freshcart.codescandy.com/assets/images/products/product-single-img-2.jpg',
        'https://freshcart.codescandy.com/assets/images/products/product-single-img-3.jpg',
        'https://freshcart.codescandy.com/assets/images/products/product-single-img-4.jpg',
     
      ],
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
    }
    },
    mounted() {


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
    ( tns({
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