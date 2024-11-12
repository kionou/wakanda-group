<template >
    <div>
        <LoadingSkeleton v-if="loading " style="z-index: 99999"></LoadingSkeleton>
        <main v-else>
            <section class="">
                <div class="row mt-3 height-slick">
    
                    <div class="col-xl-2 col-md-3 d-none d-lg-block pe-0">
                        <div class="mb-4">
    
    
                            <div class="card height-slick justify-content-between ">
                              
                                <ul class="nav-item dropdown align-items-center  p-2" style="list-style: none;">
                                    
                                    <span class="">
                                        <h6  class="fs-5"><i  class="bi bi-list"></i> Categories</h6>

                                </span>
                                    <li v-for="(category,index) in CategoriesArray" :key="index" class="dropdown-menu-list">
                                        <router-link :to="{ name: 'list-categories', params: { id: category.id }}"
                                            class="dropdown-item d-flex justify-content-between mb-1 py-1">
                                            <div>
                                                <img :src="category.Image !== null ? category.Image : defaultImageCategorie"
                                                    :alt="category.NomCategorie" width="24" height="24" style="width:20px">
    
                                                <span class="ms-1">{{ category.NomCategorie }}</span>
                                            </div>
    
    
                                        </router-link>
    
    
                                    </li>
    
                                  
    
                                </ul>
                                <span class="text-center mt-2">
                                    <hr class="m-0">
                                    <router-link to="#"> <i class="bi bi-eye"></i> Voir plus</router-link>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-8 col-md-9 col-sm-12  pe-0">
    
    
                        <div class="hero-slider">
                            <div class="hero-img-1">
                                <div class="ps-lg-12 py-lg-16 col-xxl-5 col-lg-7 col-md-8 py-14 px-8 text-xs-center">
                                    <h1 class="text-white display-5 fw-bold mt-4">SuperMarket For Fresh Grocery</h1>
                                    <p class="lead text-white">Introduced a new model for online grocery shopping and
                                        convenient home delivery at any time.</p>
                                    <a href="#!" class="btn btn-dark mt-3">
                                        Shop Now
                                        <i class="feather-icon icon-arrow-right ms-1"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="hero-img-2">
                                <div class="ps-lg-12 py-lg-16 col-xxl-5 col-lg-7 col-md-8 py-14 px-8 text-xs-center">
                                    <h1 class="text-dark display-5 fw-bold mt-4">
                                        Opening Sale
                                        <br />
                                        Discount up to
                                        <span class="text-primary display-6">50%</span>
                                    </h1>
                                    <p class="lead">Snack on late-night munchies of delicious nuts & you’re guaranteed
                                        happiness before you doze!</p>
                                    <a href="#!" class="btn btn-dark mt-3">
                                        Shop Now
                                        <i class="feather-icon icon-arrow-right ms-1"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="hero-img-3">
                                <div class="ps-lg-12 py-lg-16 col-xxl-5 col-lg-7 col-md-8 py-14 px-8 text-xs-center">
                                    <h1 class="text-dark display-5 fw-bold mt-4">Midnight Munch Combo</h1>
                                    <p class="lead">Snack on late-night munchies of delicious nuts & you’re guaranteed
                                        happiness before you doze!</p>
                                    <a href="#!" class="btn btn-dark mt-3">
                                        Shop Now
                                        <i class="feather-icon icon-arrow-right ms-1"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 d-none d-xl-block  pe-0">
    
                        <div class="card ms-2 height-slick">
    
    
                            <img src="../assets/images/banner/banner-deal.jpg" alt="" class="h-100">
    
    
    
    
                        </div>
    
    
                    </div>
    
                </div>
            </section>
    
            <!-- section category -->
            <section class="mt-4">
                <div class="px-0">
                    <div class="row align-items-center mb-3">
    
                        <div class="col-xl-12 col-lg-12 col-md-12 mb-12 mb-md-0 px-0"
                            style="border-bottom: 1px solid var(--fc-primary);">
    
                            <div class="col-12 px-0 mb-2 ">
                                <!-- heading    -->
                                <h3 class="align-items-center d-flex mb-0 h4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-layers text-primary">
                                        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                                        <polyline points="2 17 12 22 22 17"></polyline>
                                        <polyline points="2 12 12 17 22 12"></polyline>
                                    </svg>
                                    <span class="ms-3 " style="font-weight: bold;">Nos Marques</span>
                                </h3>
                            </div>
    
                        </div>
    
    
                    </div>
                    <div class="row g-6 mt-1">
                        <div class="col-12 m-0">
                            <div class="position-relative">
                                <div class="slider-8-columns" id="slider-8-columns">
                                    <!-- item -->
                                    <div class="item" v-for="(marque, index) in marquesArray" :key="index">
                                        <!-- item -->
                                        <router-link to="/categories" class="text-decoration-none text-inherit">
                                            <!-- card -->
                                            <div class="card mb-3 card-lift">
                                                <div class="card-body text-center py-2 text-center">
                                                    <div class="my-5">
                                                        <svg width="56" height="56" fill="#3d4f58"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M39.615 1.482c-2.408.689-5.92 3.244-11.615 8.45-2.166 1.98-11.172 10.99-13.38 13.386C8.679 29.765 5.119 34.379 3.338 37.94c-1.308 2.616-1.407 3.949-.369 4.983.266.264.589.48.822.55 2.419.718 6.677-1.78 13.242-7.77 3.539-3.228 13.946-13.993 18.728-19.372 6.081-6.838 8.485-10.74 8.015-13.006-.172-.825-.85-1.597-1.659-1.885-.492-.176-1.82-.154-2.502.042M41.95 3.09c.305.268.33.329.33.823 0 .687-.174 1.258-.693 2.275-1.41 2.762-4.569 6.675-10.641 13.179C19.811 31.295 13.759 37.073 9.241 40.089c-3.039 2.029-5.195 2.564-5.46 1.354-.144-.656.72-2.735 1.964-4.725 1.147-1.835 1.162-1.851 2.853-2.9 3.103-1.926 5.079-2.913 7.362-3.677.967-.324 1.034-.36.671-.364-1.579-.016-4.415.816-6.564 1.926-.58.299-1.094.56-1.142.58-.123.05 1.938-2.486 3.252-4.003 1.047-1.208 1.136-1.285 2.134-1.856 2.704-1.546 6.071-2.998 8.501-3.664.595-.164 1.071-.306 1.058-.317-.013-.011-.524.018-1.137.063-2.117.157-4.114.668-6.119 1.566-.99.443-1.047.458-.83.218.127-.141.893-.956 1.701-1.811 1.603-1.698 1.606-1.699 4.164-3.063 3.621-1.929 6.062-2.922 9.058-3.683l.513-.13-.887.046c-1.256.065-3.035.369-4.323.74-1.132.326-2.913.989-3.609 1.344-.216.11-.411.182-.433.159-.023-.022.916-.962 2.085-2.088l2.127-2.048 1.68-.896c3.259-1.738 4.995-2.521 7.747-3.496l1.68-.594-.84.058c-1.726.121-4.457.823-6.324 1.626-.449.193-.816.341-.816.329 0-.05 2.445-2.216 3.546-3.141 3.918-3.293 6.511-4.835 8.14-4.84.57-.002.657.025.957.288m9.6 8.104c-3.248.878-8.229 4.84-17.159 13.651-10.108 9.974-16.547 17.56-19.17 22.584-.611 1.171-1.088 2.441-1.182 3.148-.137 1.034.376 2.074 1.23 2.492.475.232.572.246 1.417.201 1.455-.077 2.921-.706 5.197-2.232 4.091-2.741 8.783-7.083 17.162-15.882 8.679-9.114 11.932-12.829 14.239-16.259 1.075-1.6 1.613-2.603 1.974-3.682.263-.786.292-.973.256-1.68-.044-.881-.177-1.218-.672-1.714-.752-.751-1.972-.984-3.292-.627m1.879 1.445c1.063.444.789 1.993-.81 4.58-2.201 3.562-7.288 9.321-18.131 20.524-5.979 6.177-11.058 10.673-14.201 12.572-1.739 1.05-3.38 1.654-4.126 1.518-.359-.066-.667-.482-.667-.903-.001-.697.922-2.758 2.034-4.543.791-1.269.895-1.399 1.307-1.638.19-.111.864-.506 1.498-.88 1.963-1.156 4.975-2.407 7.34-3.05.668-.181 1.235-.351 1.26-.377.056-.057-1.169.039-2.146.167-1.751.23-3.687.806-5.625 1.674-.569.254-1.045.452-1.058.439-.041-.041 2.068-2.648 3.34-4.129l1.202-1.4 1.187-.638c2.708-1.456 5.552-2.652 7.814-3.284.974-.273 1.065-.314.7-.318-1.759-.02-4.605.637-6.649 1.535-.668.294-.877.354-.79.23.065-.093.915-1.011 1.888-2.041 1.744-1.844 1.786-1.88 2.797-2.43 3.14-1.707 7.404-3.449 9.707-3.966l.653-.146-.98.052c-1.309.07-2.657.273-3.719.561-.909.246-2.802.9-3.607 1.247-.44.189-.344.077 1.629-1.9l2.096-2.101 1.217-.647c.67-.356 1.701-.867 2.291-1.135.59-.269 1.42-.652 1.844-.852 1.079-.508 1.958-.854 3.896-1.535 1.625-.571 1.66-.588 1.073-.54-1.922.157-4.072.666-6.206 1.468l-1.12.42.7-.662c.995-.942 3.428-3.067 4.526-3.953 3.944-3.182 6.518-4.47 7.836-3.919"
                                                                fill-rule="evenodd" />
                                                        </svg>
                                                    </div>
                                                    <!-- text -->
                                                    <div>{{ marque.Nom }}</div>
                                                </div>
                                            </div>
                                        </router-link>
                                    </div>
    
    
    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- section -->
    
    
            <div class=" mb-3">
    
    
                <div class="row">
                    <!-- col -->
    
                    <div class="col-xl-12 col-lg-12 col-md-12 mb-12 mb-md-0">
                        <div class="mb-5 product-content">
                            <div class="mb-4"
                                style="border-bottom: 1px solid var(--fc-primary); display: flex; width:100% !important">
                                <h3 class=" mb-0  text-white">
                                    <router-link to="/categories" class="btn btn-primary" title="Voir plus"
                                        style="border-radius: 0px !important;font-size: 20px;">
                                        Les produits du moment</router-link>
                                </h3>
                            </div>
                            <div class="product-slider-four-columns">
                                <!-- item -->
                                <!-- <div class="item">
                                                  
                                                    <div class="card card-product h-100">
                                                        <div class="card-body position-relative">
                                                            <div class="text-center position-relative">
                    
                                                              
                                                                <router-link to="/detail" href="#!"><img
                                                                      
                                                                        v-lazy="'https://freshcart.codescandy.com/assets/images/products/product-single-img-1.jpg'"
                                                                        alt="Grocery Ecommerce Template"
                                                                        class="mb-3 img-fluid" /></router-link>
                                                            
                    
                                                            </div>
                                                         
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
                                                </div> -->
                                <div class="item" v-for="(product,index) in productsArray" :key="index">
                                    <!-- card -->
                                    <div class="card card-product h-100">
                                        <div class="card-body position-relative">
                                            <div class="text-center position-relative">
                                                <!-- img -->
                                                <router-link :to="{ name: 'detail', params: { id: product.id }}">
                                                    <img :src="product.PhotoCover ? product.PhotoCover : defaultImage"
                                                        :alt="product.NomProduit" :title="product.NomProduit"
                                                        style="width: 100%; height: 150px; max-height: 30% !important;"
                                                        class="mb-3 img-fluid" />
                                                </router-link>
                                                <!-- action btn -->
    
                                            </div>
                                            <!-- title -->
                                            <h2 class="fs-6"><router-link
                                                    :to="{ name: 'detail', params: { id: product.id }}"
                                                    class="text-inherit text-decoration-none">{{
                                                    truncateText(product.NomProduit , 15) }}
                                                </router-link></h2>
                                            <div class="d-flex justify-content-between align-items-center mt-3">
                                                <div>
                                                    <span class="text-danger">{{ formatPrice(product.Prix)  }} {{ product.devise?.Symbol }}</span>
    
                                                </div>
                                                <div>
    
                                                    <span class="text-uppercase small " @click="addProductToCart(product)"
                                                        :disabled="loadingItems[product?.id]">
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
                        </div>
                        <section class=" mb-3">
    
                            <!-- row -->
                            <div class="row">
                                <div class="col-12">
                                    <div style="border-bottom: 1px solid var(--fc-primary);"
                                        class="mb-6 d-xl-flex justify-content-between align-items-center">
                                        <!-- heading -->
                                        <div class="mb-5 mb-xl-0">
                                            <h3 class="mb-0">Ventes Flash</h3>
    
                                        </div>
                                        <div>
                                            <!-- nav -->
                                            <nav>
                                                <ul class="nav nav-pills nav-scroll border-bottom-0 gap-1" id="nav-tab"
                                                    role="tablist">
                                                    <!-- nav item -->
                                                    <li class="nav-item">
                                                        <!-- nav link -->
                                                        <a href="#" style="border-radius: 0px !important;font-size: 16px;"
                                                            class="nav-link active d-flex" id="nav-fruitsandveg-tab"
                                                            data-bs-toggle="tab" data-bs-target="#nav-fruitsandveg"
                                                            role="tab" aria-controls="nav-fruitsandveg"
                                                            aria-selected="true">
                                                            Promo spécial vetements
                                                            <span class="d-flex">
                                                                <div class="heure">12</div> h <div class="heure">23</div> m
                                                                <div class="heure">12</div>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <!-- nav item -->
    
                                                    <li class="nav-item">
                                                        <!-- nav link -->
                                                        <a style="border-radius: 0px !important;font-size: 16px;" href="#"
                                                            class="nav-link" id="nav-snackMunchies-tab" data-bs-toggle="tab"
                                                            data-bs-target="#nav-snackMunchies" role="tab"
                                                            aria-controls="nav-snackMunchies" aria-selected="false">
                                                            Snack & Munchies
                                                        </a>
                                                    </li>
                                                    <!-- nav item -->
                                                    <li class="nav-item">
                                                        <!-- nav link -->
                                                        <a style="border-radius: 0px !important;font-size: 16px;" href="#"
                                                            class="nav-link" id="nav-bakery-tab" data-bs-toggle="tab"
                                                            data-bs-target="#nav-bakery" role="tab"
                                                            aria-controls="nav-bakery" aria-selected="false">
                                                            Bakery & Biscuits
                                                        </a>
                                                    </li>
    
    
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- row -->
                            <div class="row">
                                <div class="col-12">
                                    <!-- tab -->
                                    <div class="tab-content" id="nav-tabContent">
                                        <div class="tab-pane fade show active" id="nav-fruitsandveg" role="tabpanel"
                                            aria-labelledby="nav-fruitsandveg-tab" tabindex="0">
                                            <!-- row -->
                                            <div class="row row-cols-2 row-cols-xl-6 row-cols-md-3 g-4">
                                                <div class="col">
                                                    <!-- card -->
                                                    <div class="card card-product-v2 h-100">
                                                        <div class="card-body position-relative">
                                                            <!-- badge -->
                                                            <div class="text-center position-relative">
                                                                <div class="position-absolute top-0 start-0">
                                                                    <span
                                                                        class="badge bg-gray-300 text-decoration-line-through text-danger">1
                                                                        200 000 F cfa</span>
                                                                </div>
                                                                <!-- img -->
                                                                <router-link to="/detail"><img
                                                                        src="@/assets/images/products/product-img-1.jpg"
                                                                        alt="Grocery Ecommerce Template"
                                                                        class="mb-3 img-fluid" /></router-link>
                                                                <!-- action btn -->
    
                                                            </div>
                                                            <!-- title -->
                                                            <h2 class="fs-6"><router-link to="/detail"
                                                                    class="text-inherit text-decoration-none">Haldiram's
                                                                    Sev Bhujia</router-link></h2>
    
                                                            <!-- price -->
                                                            <div
                                                                class="d-flex justify-content-between align-items-center mt-3">
                                                                <div>
                                                                    <span class="text-danger">2000 FCFA</span>
                                                                    <!-- -->
                                                                </div>
                                                                <div><span class="text-uppercase small ">
                                                                        <div class="icon-card">
                                                                            <div>
                                                                                <i class="bi bi-cart2 fs-4"></i>
                                                                            </div>
    
                                                                        </div>
                                                                    </span></div>
                                                            </div>
                                                            <div class="mt-4">
                                                                <div class="my-3">
                                                                    <small>
                                                                        the available products :
                                                                        <span class="text-dark fw-bold">8</span>
                                                                    </small>
                                                                </div>
                                                                <div class="progress mt-1" style="height: 8px">
                                                                    <div class="progress-bar bg-gray-400" role="progressbar"
                                                                        style="width: 95%" aria-valuenow="95"
                                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
    
                                                            </div>
    
                                                        </div>
                                                        <!-- hidden class for hover -->
                                                        <div class="product-content-fade border-info"></div>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <!-- card -->
                                                    <div class="card card-product-v2 h-100">
                                                        <div class="card-body position-relative">
                                                            <!-- badge -->
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
                                                                    class="text-inherit text-decoration-none">Britannia
                                                                    NutriChoice Digestive Biscuits</router-link></h2>
    
                                                            <!-- price -->
                                                            <div
                                                                class="d-flex justify-content-between align-items-center mt-3">
                                                                <div>
                                                                    <span class="text-danger">2000 FCFA</span>
                                                                    <span
                                                                        class="text-decoration-line-through text-muted">$65</span>
                                                                </div>
                                                                <div><span class="text-uppercase small ">
                                                                        <div class="icon-card">
                                                                            <div>
                                                                                <i class="bi bi-cart2 fs-4"></i>
                                                                            </div>
    
                                                                        </div>
                                                                    </span></div>
                                                            </div>
                                                            <div class="mt-4">
                                                                <div class="my-3">
                                                                    <small>
                                                                        the available products :
                                                                        <span class="text-dark fw-bold">8</span>
                                                                    </small>
                                                                </div>
                                                                <div class="progress mt-1" style="height: 8px">
                                                                    <div class="progress-bar bg-gray-400" role="progressbar"
                                                                        style="width: 95%" aria-valuenow="95"
                                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
    
                                                            </div>
                                                        </div>
                                                        <!-- hidden class for hover -->
                                                        <div class="product-content-fade border-info"></div>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <!-- card -->
                                                    <div class="card card-product-v2 h-100">
                                                        <div class="card-body position-relative">
                                                            <!-- badge -->
                                                            <div class="text-center position-relative">
                                                                <!-- img -->
                                                                <router-link to="/detail"><img
                                                                        src="@/assets/images/products/product-img-3.jpg"
                                                                        alt="Grocery Ecommerce Template"
                                                                        class="mb-3 img-fluid" /></router-link>
    
                                                            </div>
                                                            <!-- title -->
                                                            <h2 class="fs-6"><router-link to="/detail"
                                                                    class="text-inherit text-decoration-none">Cadbury 5
                                                                    star chocolate</router-link></h2>
    
                                                            <!-- price -->
                                                            <div
                                                                class="d-flex justify-content-between align-items-center mt-3">
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
                                                            <div class="mt-4">
                                                                <div class="my-3">
                                                                    <small>
                                                                        the available products :
                                                                        <span class="text-dark fw-bold">8</span>
                                                                    </small>
                                                                </div>
                                                                <div class="progress mt-1" style="height: 8px">
                                                                    <div class="progress-bar bg-gray-400" role="progressbar"
                                                                        style="width: 95%" aria-valuenow="95"
                                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
    
                                                            </div>
    
                                                        </div>
                                                        <!-- hidden class for hover -->
                                                        <div class="product-content-fade border-info"></div>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <!-- card -->
                                                    <div class="card card-product-v2 h-100">
                                                        <div class="card-body position-relative">
                                                            <!-- badge -->
                                                            <div class="text-center position-relative">
                                                                <!-- img -->
                                                                <router-link to="/detail"><img
                                                                        src="@/assets/images/products/product-img-4.jpg"
                                                                        alt="Grocery Ecommerce Template"
                                                                        class="mb-3 img-fluid" /></router-link>
    
                                                            </div>
                                                            <!-- title -->
                                                            <h2 class="fs-6"><router-link to="/detail"
                                                                    class="text-inherit text-decoration-none">Onion
                                                                    Flavour Potato</router-link></h2>
    
                                                            <!-- price -->
                                                            <div
                                                                class="d-flex justify-content-between align-items-center mt-3">
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
                                                            <div class="mt-4">
                                                                <div class="my-3">
                                                                    <small>
                                                                        the available products :
                                                                        <span class="text-dark fw-bold">8</span>
                                                                    </small>
                                                                </div>
                                                                <div class="progress mt-1" style="height: 8px">
                                                                    <div class="progress-bar bg-gray-400" role="progressbar"
                                                                        style="width: 95%" aria-valuenow="95"
                                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
    
                                                            </div>
    
                                                        </div>
                                                        <!-- hidden class for hover -->
                                                        <div class="product-content-fade border-info"></div>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <!-- card -->
                                                    <div class="card card-product-v2 h-100">
                                                        <div class="card-body position-relative">
                                                            <!-- badge -->
                                                            <div class="text-center position-relative">
                                                                <!-- img -->
                                                                <router-link to="/detail"><img
                                                                        src="@/assets/images/products/product-img-6.jpg"
                                                                        alt="Grocery Ecommerce Template"
                                                                        class="mb-3 img-fluid" /></router-link>
    
                                                            </div>
                                                            <!-- title -->
                                                            <h2 class="fs-6"><router-link to="/detail"
                                                                    class="text-inherit text-decoration-none">Onion
                                                                    Flavour Potato</router-link></h2>
    
                                                            <!-- price -->
                                                            <div
                                                                class="d-flex justify-content-between align-items-center mt-3">
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
                                                            <div class="mt-4">
                                                                <div class="my-3">
                                                                    <small>
                                                                        the available products :
                                                                        <span class="text-dark fw-bold">8</span>
                                                                    </small>
                                                                </div>
                                                                <div class="progress mt-1" style="height: 8px">
                                                                    <div class="progress-bar bg-gray-400" role="progressbar"
                                                                        style="width: 95%" aria-valuenow="95"
                                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
    
                                                            </div>
    
                                                        </div>
                                                        <!-- hidden class for hover -->
                                                        <div class="product-content-fade border-info"></div>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <!-- card -->
                                                    <div class="card card-product-v2 h-100">
                                                        <div class="card-body position-relative">
                                                            <!-- badge -->
                                                            <div class="text-center position-relative">
                                                                <div class="position-absolute top-0 start-0">
                                                                    <span class="badge bg-danger">Sale</span>
                                                                </div>
                                                                <!-- img -->
                                                                <router-link to="/detail"><img
                                                                        src="@/assets/images/products/product-img-1.jpg"
                                                                        alt="Grocery Ecommerce Template"
                                                                        class="mb-3 img-fluid" /></router-link>
                                                                <!-- action btn -->
    
                                                            </div>
                                                            <!-- title -->
                                                            <h2 class="fs-6"><router-link to="/detail"
                                                                    class="text-inherit text-decoration-none">Haldiram's
                                                                    Sev Bhujia</router-link></h2>
    
                                                            <!-- price -->
                                                            <div
                                                                class="d-flex justify-content-between align-items-center mt-3">
                                                                <div>
                                                                    <span class="text-danger">2000 FCFA</span>
                                                                    <!-- -->
                                                                </div>
                                                                <div><span class="text-uppercase small ">
                                                                        <div class="icon-card">
                                                                            <div>
                                                                                <i class="bi bi-cart2 fs-4"></i>
                                                                            </div>
    
                                                                        </div>
                                                                    </span></div>
                                                            </div>
                                                            <div class="mt-4">
                                                                <div class="my-3">
                                                                    <small>
                                                                        the available products :
                                                                        <span class="text-dark fw-bold">8</span>
                                                                    </small>
                                                                </div>
                                                                <div class="progress mt-1" style="height: 8px">
                                                                    <div class="progress-bar bg-gray-400" role="progressbar"
                                                                        style="width: 95%" aria-valuenow="95"
                                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
    
                                                            </div>
    
                                                        </div>
                                                        <!-- hidden class for hover -->
                                                        <div class="product-content-fade border-info"></div>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <!-- card -->
                                                    <div class="card card-product-v2 h-100">
                                                        <div class="card-body position-relative">
                                                            <!-- badge -->
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
                                                                    class="text-inherit text-decoration-none">Britannia
                                                                    NutriChoice Digestive Biscuits</router-link></h2>
    
                                                            <!-- price -->
                                                            <div
                                                                class="d-flex justify-content-between align-items-center mt-3">
                                                                <div>
                                                                    <span class="text-danger">2000 FCFA</span>
                                                                    <span
                                                                        class="text-decoration-line-through text-muted">$65</span>
                                                                </div>
                                                                <div><span class="text-uppercase small ">
                                                                        <div class="icon-card">
                                                                            <div>
                                                                                <i class="bi bi-cart2 fs-4"></i>
                                                                            </div>
    
                                                                        </div>
                                                                    </span></div>
                                                            </div>
                                                            <div class="mt-4">
                                                                <div class="my-3">
                                                                    <small>
                                                                        the available products :
                                                                        <span class="text-dark fw-bold">8</span>
                                                                    </small>
                                                                </div>
                                                                <div class="progress mt-1" style="height: 8px">
                                                                    <div class="progress-bar bg-gray-400" role="progressbar"
                                                                        style="width: 95%" aria-valuenow="95"
                                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
    
                                                            </div>
                                                        </div>
                                                        <!-- hidden class for hover -->
                                                        <div class="product-content-fade border-info"></div>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <!-- card -->
                                                    <div class="card card-product-v2 h-100">
                                                        <div class="card-body position-relative">
                                                            <!-- badge -->
                                                            <div class="text-center position-relative">
                                                                <!-- img -->
                                                                <router-link to="/detail"><img
                                                                        src="@/assets/images/products/product-img-3.jpg"
                                                                        alt="Grocery Ecommerce Template"
                                                                        class="mb-3 img-fluid" /></router-link>
    
                                                            </div>
                                                            <!-- title -->
                                                            <h2 class="fs-6"><router-link to="/detail"
                                                                    class="text-inherit text-decoration-none">Cadbury 5
                                                                    star chocolate</router-link></h2>
    
                                                            <!-- price -->
                                                            <div
                                                                class="d-flex justify-content-between align-items-center mt-3">
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
                                                            <div class="mt-4">
                                                                <div class="my-3">
                                                                    <small>
                                                                        the available products :
                                                                        <span class="text-dark fw-bold">8</span>
                                                                    </small>
                                                                </div>
                                                                <div class="progress mt-1" style="height: 8px">
                                                                    <div class="progress-bar bg-gray-400" role="progressbar"
                                                                        style="width: 95%" aria-valuenow="95"
                                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
    
                                                            </div>
    
                                                        </div>
                                                        <!-- hidden class for hover -->
                                                        <div class="product-content-fade border-info"></div>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <!-- card -->
                                                    <div class="card card-product-v2 h-100">
                                                        <div class="card-body position-relative">
                                                            <!-- badge -->
                                                            <div class="text-center position-relative">
                                                                <!-- img -->
                                                                <router-link to="/detail"><img
                                                                        src="@/assets/images/products/product-img-4.jpg"
                                                                        alt="Grocery Ecommerce Template"
                                                                        class="mb-3 img-fluid" /></router-link>
    
                                                            </div>
                                                            <!-- title -->
                                                            <h2 class="fs-6"><router-link to="/detail"
                                                                    class="text-inherit text-decoration-none">Onion
                                                                    Flavour Potato</router-link></h2>
    
                                                            <!-- price -->
                                                            <div
                                                                class="d-flex justify-content-between align-items-center mt-3">
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
                                                            <div class="mt-4">
                                                                <div class="my-3">
                                                                    <small>
                                                                        the available products :
                                                                        <span class="text-dark fw-bold">8</span>
                                                                    </small>
                                                                </div>
                                                                <div class="progress mt-1" style="height: 8px">
                                                                    <div class="progress-bar bg-gray-400" role="progressbar"
                                                                        style="width: 95%" aria-valuenow="95"
                                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
    
                                                            </div>
    
                                                        </div>
                                                        <!-- hidden class for hover -->
                                                        <div class="product-content-fade border-info"></div>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <!-- card -->
                                                    <div class="card card-product-v2 h-100">
                                                        <div class="card-body position-relative">
                                                            <!-- badge -->
                                                            <div class="text-center position-relative">
                                                                <!-- img -->
                                                                <router-link to="/detail"><img
                                                                        src="@/assets/images/products/product-img-6.jpg"
                                                                        alt="Grocery Ecommerce Template"
                                                                        class="mb-3 img-fluid" /></router-link>
    
                                                            </div>
                                                            <!-- title -->
                                                            <h2 class="fs-6"><router-link to="/detail"
                                                                    class="text-inherit text-decoration-none">Onion
                                                                    Flavour Potato</router-link></h2>
    
                                                            <!-- price -->
                                                            <div
                                                                class="d-flex justify-content-between align-items-center mt-3">
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
                                                            <div class="mt-4">
                                                                <div class="my-3">
                                                                    <small>
                                                                        the available products :
                                                                        <span class="text-dark fw-bold">8</span>
                                                                    </small>
                                                                </div>
                                                                <div class="progress mt-1" style="height: 8px">
                                                                    <div class="progress-bar bg-gray-400" role="progressbar"
                                                                        style="width: 95%" aria-valuenow="95"
                                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
    
                                                            </div>
    
                                                        </div>
                                                        <!-- hidden class for hover -->
                                                        <div class="product-content-fade border-info"></div>
                                                    </div>
                                                </div>
    
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="nav-snackMunchies" role="tabpanel"
                                            aria-labelledby="nav-snackMunchies-tab" tabindex="0">
                                            <div class="row row-cols-2 row-cols-xl-5 row-cols-md-3 g-4">
                                                <div class="col">
                                                    <!-- card -->
                                                    <div class="card card-product-v2 h-100">
                                                        <div class="card-body position-relative">
                                                            <!-- badge -->
                                                            <div class="text-center position-relative">
                                                                <div class="position-absolute top-0 start-0">
                                                                    <span class="badge bg-danger">Sale</span>
                                                                </div>
                                                                <!-- img -->
                                                                <router-link to="/detail"><img
                                                                        src="@/assets/images/products/product-img-1.jpg"
                                                                        alt="Grocery Ecommerce Template"
                                                                        class="mb-3 img-fluid" /></router-link>
                                                                <!-- action btn -->
    
                                                            </div>
                                                            <!-- title -->
                                                            <h2 class="fs-6"><router-link to="/detail"
                                                                    class="text-inherit text-decoration-none">Haldiram's
                                                                    Sev Bhujia</router-link></h2>
    
                                                            <!-- price -->
                                                            <div
                                                                class="d-flex justify-content-between align-items-center mt-3">
                                                                <div>
                                                                    <span class="text-danger">2000 FCFA</span>
                                                                    <!-- -->
                                                                </div>
                                                                <div><span class="text-uppercase small ">
                                                                        <div class="icon-card">
                                                                            <div>
                                                                                <i class="bi bi-cart2 fs-4"></i>
                                                                            </div>
    
                                                                        </div>
                                                                    </span></div>
                                                            </div>
                                                            <div class="mt-4">
                                                                <div class="my-3">
                                                                    <small>
                                                                        the available products :
                                                                        <span class="text-dark fw-bold">8</span>
                                                                    </small>
                                                                </div>
                                                                <div class="progress mt-1" style="height: 8px">
                                                                    <div class="progress-bar bg-gray-400" role="progressbar"
                                                                        style="width: 95%" aria-valuenow="95"
                                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
    
                                                            </div>
    
                                                        </div>
                                                        <!-- hidden class for hover -->
                                                        <div class="product-content-fade border-info"></div>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <!-- card -->
                                                    <div class="card card-product-v2 h-100">
                                                        <div class="card-body position-relative">
                                                            <!-- badge -->
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
                                                                    class="text-inherit text-decoration-none">Britannia
                                                                    NutriChoice Digestive Biscuits</router-link></h2>
    
                                                            <!-- price -->
                                                            <div
                                                                class="d-flex justify-content-between align-items-center mt-3">
                                                                <div>
                                                                    <span class="text-danger">2000 FCFA</span>
                                                                    <span
                                                                        class="text-decoration-line-through text-muted">$65</span>
                                                                </div>
                                                                <div><span class="text-uppercase small ">
                                                                        <div class="icon-card">
                                                                            <div>
                                                                                <i class="bi bi-cart2 fs-4"></i>
                                                                            </div>
    
                                                                        </div>
                                                                    </span></div>
                                                            </div>
                                                            <div class="mt-4">
                                                                <div class="my-3">
                                                                    <small>
                                                                        the available products :
                                                                        <span class="text-dark fw-bold">8</span>
                                                                    </small>
                                                                </div>
                                                                <div class="progress mt-1" style="height: 8px">
                                                                    <div class="progress-bar bg-gray-400" role="progressbar"
                                                                        style="width: 95%" aria-valuenow="95"
                                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
    
                                                            </div>
                                                        </div>
                                                        <!-- hidden class for hover -->
                                                        <div class="product-content-fade border-info"></div>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <!-- card -->
                                                    <div class="card card-product-v2 h-100">
                                                        <div class="card-body position-relative">
                                                            <!-- badge -->
                                                            <div class="text-center position-relative">
                                                                <!-- img -->
                                                                <router-link to="/detail"><img
                                                                        src="@/assets/images/products/product-img-3.jpg"
                                                                        alt="Grocery Ecommerce Template"
                                                                        class="mb-3 img-fluid" /></router-link>
    
                                                            </div>
                                                            <!-- title -->
                                                            <h2 class="fs-6"><router-link to="/detail"
                                                                    class="text-inherit text-decoration-none">Cadbury 5
                                                                    star chocolate</router-link></h2>
    
                                                            <!-- price -->
                                                            <div
                                                                class="d-flex justify-content-between align-items-center mt-3">
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
                                                            <div class="mt-4">
                                                                <div class="my-3">
                                                                    <small>
                                                                        the available products :
                                                                        <span class="text-dark fw-bold">8</span>
                                                                    </small>
                                                                </div>
                                                                <div class="progress mt-1" style="height: 8px">
                                                                    <div class="progress-bar bg-gray-400" role="progressbar"
                                                                        style="width: 95%" aria-valuenow="95"
                                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
    
                                                            </div>
    
                                                        </div>
                                                        <!-- hidden class for hover -->
                                                        <div class="product-content-fade border-info"></div>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <!-- card -->
                                                    <div class="card card-product-v2 h-100">
                                                        <div class="card-body position-relative">
                                                            <!-- badge -->
                                                            <div class="text-center position-relative">
                                                                <!-- img -->
                                                                <router-link to="/detail"><img
                                                                        src="@/assets/images/products/product-img-4.jpg"
                                                                        alt="Grocery Ecommerce Template"
                                                                        class="mb-3 img-fluid" /></router-link>
    
                                                            </div>
                                                            <!-- title -->
                                                            <h2 class="fs-6"><router-link to="/detail"
                                                                    class="text-inherit text-decoration-none">Onion
                                                                    Flavour Potato</router-link></h2>
    
                                                            <!-- price -->
                                                            <div
                                                                class="d-flex justify-content-between align-items-center mt-3">
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
                                                            <div class="mt-4">
                                                                <div class="my-3">
                                                                    <small>
                                                                        the available products :
                                                                        <span class="text-dark fw-bold">8</span>
                                                                    </small>
                                                                </div>
                                                                <div class="progress mt-1" style="height: 8px">
                                                                    <div class="progress-bar bg-gray-400" role="progressbar"
                                                                        style="width: 95%" aria-valuenow="95"
                                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
    
                                                            </div>
    
                                                        </div>
                                                        <!-- hidden class for hover -->
                                                        <div class="product-content-fade border-info"></div>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <!-- card -->
                                                    <div class="card card-product-v2 h-100">
                                                        <div class="card-body position-relative">
                                                            <!-- badge -->
                                                            <div class="text-center position-relative">
                                                                <!-- img -->
                                                                <router-link to="/detail"><img
                                                                        src="@/assets/images/products/product-img-6.jpg"
                                                                        alt="Grocery Ecommerce Template"
                                                                        class="mb-3 img-fluid" /></router-link>
    
                                                            </div>
                                                            <!-- title -->
                                                            <h2 class="fs-6"><router-link to="/detail"
                                                                    class="text-inherit text-decoration-none">Onion
                                                                    Flavour Potato</router-link></h2>
    
                                                            <!-- price -->
                                                            <div
                                                                class="d-flex justify-content-between align-items-center mt-3">
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
                                                            <div class="mt-4">
                                                                <div class="my-3">
                                                                    <small>
                                                                        the available products :
                                                                        <span class="text-dark fw-bold">8</span>
                                                                    </small>
                                                                </div>
                                                                <div class="progress mt-1" style="height: 8px">
                                                                    <div class="progress-bar bg-gray-400" role="progressbar"
                                                                        style="width: 95%" aria-valuenow="95"
                                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
    
                                                            </div>
    
                                                        </div>
                                                        <!-- hidden class for hover -->
                                                        <div class="product-content-fade border-info"></div>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <!-- card -->
                                                    <div class="card card-product-v2 h-100">
                                                        <div class="card-body position-relative">
                                                            <!-- badge -->
                                                            <div class="text-center position-relative">
                                                                <div class="position-absolute top-0 start-0">
                                                                    <span class="badge bg-danger">Sale</span>
                                                                </div>
                                                                <!-- img -->
                                                                <router-link to="/detail"><img
                                                                        src="@/assets/images/products/product-img-1.jpg"
                                                                        alt="Grocery Ecommerce Template"
                                                                        class="mb-3 img-fluid" /></router-link>
                                                                <!-- action btn -->
    
                                                            </div>
                                                            <!-- title -->
                                                            <h2 class="fs-6"><router-link to="/detail"
                                                                    class="text-inherit text-decoration-none">Haldiram's
                                                                    Sev Bhujia</router-link></h2>
    
                                                            <!-- price -->
                                                            <div
                                                                class="d-flex justify-content-between align-items-center mt-3">
                                                                <div>
                                                                    <span class="text-danger">2000 FCFA</span>
                                                                    <!-- -->
                                                                </div>
                                                                <div><span class="text-uppercase small ">
                                                                        <div class="icon-card">
                                                                            <div>
                                                                                <i class="bi bi-cart2 fs-4"></i>
                                                                            </div>
    
                                                                        </div>
                                                                    </span></div>
                                                            </div>
                                                            <div class="mt-4">
                                                                <div class="my-3">
                                                                    <small>
                                                                        the available products :
                                                                        <span class="text-dark fw-bold">8</span>
                                                                    </small>
                                                                </div>
                                                                <div class="progress mt-1" style="height: 8px">
                                                                    <div class="progress-bar bg-gray-400" role="progressbar"
                                                                        style="width: 95%" aria-valuenow="95"
                                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
    
                                                            </div>
    
                                                        </div>
                                                        <!-- hidden class for hover -->
                                                        <div class="product-content-fade border-info"></div>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <!-- card -->
                                                    <div class="card card-product-v2 h-100">
                                                        <div class="card-body position-relative">
                                                            <!-- badge -->
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
                                                                    class="text-inherit text-decoration-none">Britannia
                                                                    NutriChoice Digestive Biscuits</router-link></h2>
    
                                                            <!-- price -->
                                                            <div
                                                                class="d-flex justify-content-between align-items-center mt-3">
                                                                <div>
                                                                    <span class="text-danger">2000 FCFA</span>
                                                                    <span
                                                                        class="text-decoration-line-through text-muted">$65</span>
                                                                </div>
                                                                <div><span class="text-uppercase small ">
                                                                        <div class="icon-card">
                                                                            <div>
                                                                                <i class="bi bi-cart2 fs-4"></i>
                                                                            </div>
    
                                                                        </div>
                                                                    </span></div>
                                                            </div>
                                                            <div class="mt-4">
                                                                <div class="my-3">
                                                                    <small>
                                                                        the available products :
                                                                        <span class="text-dark fw-bold">8</span>
                                                                    </small>
                                                                </div>
                                                                <div class="progress mt-1" style="height: 8px">
                                                                    <div class="progress-bar bg-gray-400" role="progressbar"
                                                                        style="width: 95%" aria-valuenow="95"
                                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
    
                                                            </div>
                                                        </div>
                                                        <!-- hidden class for hover -->
                                                        <div class="product-content-fade border-info"></div>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <!-- card -->
                                                    <div class="card card-product-v2 h-100">
                                                        <div class="card-body position-relative">
                                                            <!-- badge -->
                                                            <div class="text-center position-relative">
                                                                <!-- img -->
                                                                <router-link to="/detail"><img
                                                                        src="@/assets/images/products/product-img-3.jpg"
                                                                        alt="Grocery Ecommerce Template"
                                                                        class="mb-3 img-fluid" /></router-link>
    
                                                            </div>
                                                            <!-- title -->
                                                            <h2 class="fs-6"><router-link to="/detail"
                                                                    class="text-inherit text-decoration-none">Cadbury 5
                                                                    star chocolate</router-link></h2>
    
                                                            <!-- price -->
                                                            <div
                                                                class="d-flex justify-content-between align-items-center mt-3">
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
                                                            <div class="mt-4">
                                                                <div class="my-3">
                                                                    <small>
                                                                        the available products :
                                                                        <span class="text-dark fw-bold">8</span>
                                                                    </small>
                                                                </div>
                                                                <div class="progress mt-1" style="height: 8px">
                                                                    <div class="progress-bar bg-gray-400" role="progressbar"
                                                                        style="width: 95%" aria-valuenow="95"
                                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
    
                                                            </div>
    
                                                        </div>
                                                        <!-- hidden class for hover -->
                                                        <div class="product-content-fade border-info"></div>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <!-- card -->
                                                    <div class="card card-product-v2 h-100">
                                                        <div class="card-body position-relative">
                                                            <!-- badge -->
                                                            <div class="text-center position-relative">
                                                                <!-- img -->
                                                                <router-link to="/detail"><img
                                                                        src="@/assets/images/products/product-img-4.jpg"
                                                                        alt="Grocery Ecommerce Template"
                                                                        class="mb-3 img-fluid" /></router-link>
    
                                                            </div>
                                                            <!-- title -->
                                                            <h2 class="fs-6"><router-link to="/detail"
                                                                    class="text-inherit text-decoration-none">Onion
                                                                    Flavour Potato</router-link></h2>
    
                                                            <!-- price -->
                                                            <div
                                                                class="d-flex justify-content-between align-items-center mt-3">
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
                                                            <div class="mt-4">
                                                                <div class="my-3">
                                                                    <small>
                                                                        the available products :
                                                                        <span class="text-dark fw-bold">8</span>
                                                                    </small>
                                                                </div>
                                                                <div class="progress mt-1" style="height: 8px">
                                                                    <div class="progress-bar bg-gray-400" role="progressbar"
                                                                        style="width: 95%" aria-valuenow="95"
                                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
    
                                                            </div>
    
                                                        </div>
                                                        <!-- hidden class for hover -->
                                                        <div class="product-content-fade border-info"></div>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <!-- card -->
                                                    <div class="card card-product-v2 h-100">
                                                        <div class="card-body position-relative">
                                                            <!-- badge -->
                                                            <div class="text-center position-relative">
                                                                <!-- img -->
                                                                <router-link to="/detail"><img
                                                                        src="@/assets/images/products/product-img-6.jpg"
                                                                        alt="Grocery Ecommerce Template"
                                                                        class="mb-3 img-fluid" /></router-link>
    
                                                            </div>
                                                            <!-- title -->
                                                            <h2 class="fs-6"><router-link to="/detail"
                                                                    class="text-inherit text-decoration-none">Onion
                                                                    Flavour Potato</router-link></h2>
    
                                                            <!-- price -->
                                                            <div
                                                                class="d-flex justify-content-between align-items-center mt-3">
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
                                                            <div class="mt-4">
                                                                <div class="my-3">
                                                                    <small>
                                                                        the available products :
                                                                        <span class="text-dark fw-bold">8</span>
                                                                    </small>
                                                                </div>
                                                                <div class="progress mt-1" style="height: 8px">
                                                                    <div class="progress-bar bg-gray-400" role="progressbar"
                                                                        style="width: 95%" aria-valuenow="95"
                                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
    
                                                            </div>
    
                                                        </div>
                                                        <!-- hidden class for hover -->
                                                        <div class="product-content-fade border-info"></div>
                                                    </div>
                                                </div>
    
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="nav-bakery" role="tabpanel"
                                            aria-labelledby="nav-bakery-tab" tabindex="0">
                                            <div class="row row-cols-2 row-cols-xl-5 row-cols-md-3 g-4">
                                                <div class="col">
                                                    <!-- card -->
                                                    <div class="card card-product-v2 h-100">
                                                        <div class="card-body position-relative">
                                                            <!-- badge -->
                                                            <div class="text-center position-relative">
                                                                <div class="position-absolute top-0 start-0">
                                                                    <span class="badge bg-danger">Sale</span>
                                                                </div>
                                                                <!-- img -->
                                                                <router-link to="/detail"><img
                                                                        src="@/assets/images/products/product-img-1.jpg"
                                                                        alt="Grocery Ecommerce Template"
                                                                        class="mb-3 img-fluid" /></router-link>
                                                                <!-- action btn -->
    
                                                            </div>
                                                            <!-- title -->
                                                            <h2 class="fs-6"><router-link to="/detail"
                                                                    class="text-inherit text-decoration-none">Haldiram's
                                                                    Sev Bhujia</router-link></h2>
    
                                                            <!-- price -->
                                                            <div
                                                                class="d-flex justify-content-between align-items-center mt-3">
                                                                <div>
                                                                    <span class="text-danger">2000 FCFA</span>
                                                                    <!-- -->
                                                                </div>
                                                                <div><span class="text-uppercase small ">
                                                                        <div class="icon-card">
                                                                            <div>
                                                                                <i class="bi bi-cart2 fs-4"></i>
                                                                            </div>
    
                                                                        </div>
                                                                    </span></div>
                                                            </div>
                                                            <div class="mt-4">
                                                                <div class="my-3">
                                                                    <small>
                                                                        the available products :
                                                                        <span class="text-dark fw-bold">8</span>
                                                                    </small>
                                                                </div>
                                                                <div class="progress mt-1" style="height: 8px">
                                                                    <div class="progress-bar bg-gray-400" role="progressbar"
                                                                        style="width: 95%" aria-valuenow="95"
                                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
    
                                                            </div>
    
                                                        </div>
                                                        <!-- hidden class for hover -->
                                                        <div class="product-content-fade border-info"></div>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <!-- card -->
                                                    <div class="card card-product-v2 h-100">
                                                        <div class="card-body position-relative">
                                                            <!-- badge -->
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
                                                                    class="text-inherit text-decoration-none">Britannia
                                                                    NutriChoice Digestive Biscuits</router-link></h2>
    
                                                            <!-- price -->
                                                            <div
                                                                class="d-flex justify-content-between align-items-center mt-3">
                                                                <div>
                                                                    <span class="text-danger">2000 FCFA</span>
                                                                    <span
                                                                        class="text-decoration-line-through text-muted">$65</span>
                                                                </div>
                                                                <div><span class="text-uppercase small ">
                                                                        <div class="icon-card">
                                                                            <div>
                                                                                <i class="bi bi-cart2 fs-4"></i>
                                                                            </div>
    
                                                                        </div>
                                                                    </span></div>
                                                            </div>
                                                            <div class="mt-4">
                                                                <div class="my-3">
                                                                    <small>
                                                                        the available products :
                                                                        <span class="text-dark fw-bold">8</span>
                                                                    </small>
                                                                </div>
                                                                <div class="progress mt-1" style="height: 8px">
                                                                    <div class="progress-bar bg-gray-400" role="progressbar"
                                                                        style="width: 95%" aria-valuenow="95"
                                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
    
                                                            </div>
                                                        </div>
                                                        <!-- hidden class for hover -->
                                                        <div class="product-content-fade border-info"></div>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <!-- card -->
                                                    <div class="card card-product-v2 h-100">
                                                        <div class="card-body position-relative">
                                                            <!-- badge -->
                                                            <div class="text-center position-relative">
                                                                <!-- img -->
                                                                <router-link to="/detail"><img
                                                                        src="@/assets/images/products/product-img-3.jpg"
                                                                        alt="Grocery Ecommerce Template"
                                                                        class="mb-3 img-fluid" /></router-link>
    
                                                            </div>
                                                            <!-- title -->
                                                            <h2 class="fs-6"><router-link to="/detail"
                                                                    class="text-inherit text-decoration-none">Cadbury 5
                                                                    star chocolate</router-link></h2>
    
                                                            <!-- price -->
                                                            <div
                                                                class="d-flex justify-content-between align-items-center mt-3">
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
                                                            <div class="mt-4">
                                                                <div class="my-3">
                                                                    <small>
                                                                        the available products :
                                                                        <span class="text-dark fw-bold">8</span>
                                                                    </small>
                                                                </div>
                                                                <div class="progress mt-1" style="height: 8px">
                                                                    <div class="progress-bar bg-gray-400" role="progressbar"
                                                                        style="width: 95%" aria-valuenow="95"
                                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
    
                                                            </div>
    
                                                        </div>
                                                        <!-- hidden class for hover -->
                                                        <div class="product-content-fade border-info"></div>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <!-- card -->
                                                    <div class="card card-product-v2 h-100">
                                                        <div class="card-body position-relative">
                                                            <!-- badge -->
                                                            <div class="text-center position-relative">
                                                                <!-- img -->
                                                                <router-link to="/detail"><img
                                                                        src="@/assets/images/products/product-img-4.jpg"
                                                                        alt="Grocery Ecommerce Template"
                                                                        class="mb-3 img-fluid" /></router-link>
    
                                                            </div>
                                                            <!-- title -->
                                                            <h2 class="fs-6"><router-link to="/detail"
                                                                    class="text-inherit text-decoration-none">Onion
                                                                    Flavour Potato</router-link></h2>
    
                                                            <!-- price -->
                                                            <div
                                                                class="d-flex justify-content-between align-items-center mt-3">
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
                                                            <div class="mt-4">
                                                                <div class="my-3">
                                                                    <small>
                                                                        the available products :
                                                                        <span class="text-dark fw-bold">8</span>
                                                                    </small>
                                                                </div>
                                                                <div class="progress mt-1" style="height: 8px">
                                                                    <div class="progress-bar bg-gray-400" role="progressbar"
                                                                        style="width: 95%" aria-valuenow="95"
                                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
    
                                                            </div>
    
                                                        </div>
                                                        <!-- hidden class for hover -->
                                                        <div class="product-content-fade border-info"></div>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <!-- card -->
                                                    <div class="card card-product-v2 h-100">
                                                        <div class="card-body position-relative">
                                                            <!-- badge -->
                                                            <div class="text-center position-relative">
                                                                <!-- img -->
                                                                <router-link to="/detail"><img
                                                                        src="@/assets/images/products/product-img-6.jpg"
                                                                        alt="Grocery Ecommerce Template"
                                                                        class="mb-3 img-fluid" /></router-link>
    
                                                            </div>
                                                            <!-- title -->
                                                            <h2 class="fs-6"><router-link to="/detail"
                                                                    class="text-inherit text-decoration-none">Onion
                                                                    Flavour Potato</router-link></h2>
    
                                                            <!-- price -->
                                                            <div
                                                                class="d-flex justify-content-between align-items-center mt-3">
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
                                                            <div class="mt-4">
                                                                <div class="my-3">
                                                                    <small>
                                                                        the available products :
                                                                        <span class="text-dark fw-bold">8</span>
                                                                    </small>
                                                                </div>
                                                                <div class="progress mt-1" style="height: 8px">
                                                                    <div class="progress-bar bg-gray-400" role="progressbar"
                                                                        style="width: 95%" aria-valuenow="95"
                                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
    
                                                            </div>
    
                                                        </div>
                                                        <!-- hidden class for hover -->
                                                        <div class="product-content-fade border-info"></div>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <!-- card -->
                                                    <div class="card card-product-v2 h-100">
                                                        <div class="card-body position-relative">
                                                            <!-- badge -->
                                                            <div class="text-center position-relative">
                                                                <div class="position-absolute top-0 start-0">
                                                                    <span class="badge bg-danger">Sale</span>
                                                                </div>
                                                                <!-- img -->
                                                                <router-link to="/detail"><img
                                                                        src="@/assets/images/products/product-img-1.jpg"
                                                                        alt="Grocery Ecommerce Template"
                                                                        class="mb-3 img-fluid" /></router-link>
                                                                <!-- action btn -->
    
                                                            </div>
                                                            <!-- title -->
                                                            <h2 class="fs-6"><router-link to="/detail"
                                                                    class="text-inherit text-decoration-none">Haldiram's
                                                                    Sev Bhujia</router-link></h2>
    
                                                            <!-- price -->
                                                            <div
                                                                class="d-flex justify-content-between align-items-center mt-3">
                                                                <div>
                                                                    <span class="text-danger">2000 FCFA</span>
                                                                    <!-- -->
                                                                </div>
                                                                <div><span class="text-uppercase small ">
                                                                        <div class="icon-card">
                                                                            <div>
                                                                                <i class="bi bi-cart2 fs-4"></i>
                                                                            </div>
    
                                                                        </div>
                                                                    </span></div>
                                                            </div>
                                                            <div class="mt-4">
                                                                <div class="my-3">
                                                                    <small>
                                                                        the available products :
                                                                        <span class="text-dark fw-bold">8</span>
                                                                    </small>
                                                                </div>
                                                                <div class="progress mt-1" style="height: 8px">
                                                                    <div class="progress-bar bg-gray-400" role="progressbar"
                                                                        style="width: 95%" aria-valuenow="95"
                                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
    
                                                            </div>
    
                                                        </div>
                                                        <!-- hidden class for hover -->
                                                        <div class="product-content-fade border-info"></div>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <!-- card -->
                                                    <div class="card card-product-v2 h-100">
                                                        <div class="card-body position-relative">
                                                            <!-- badge -->
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
                                                                    class="text-inherit text-decoration-none">Britannia
                                                                    NutriChoice Digestive Biscuits</router-link></h2>
    
                                                            <!-- price -->
                                                            <div
                                                                class="d-flex justify-content-between align-items-center mt-3">
                                                                <div>
                                                                    <span class="text-danger">2000 FCFA</span>
                                                                    <span
                                                                        class="text-decoration-line-through text-muted">$65</span>
                                                                </div>
                                                                <div><span class="text-uppercase small ">
                                                                        <div class="icon-card">
                                                                            <div>
                                                                                <i class="bi bi-cart2 fs-4"></i>
                                                                            </div>
    
                                                                        </div>
                                                                    </span></div>
                                                            </div>
                                                            <div class="mt-4">
                                                                <div class="my-3">
                                                                    <small>
                                                                        the available products :
                                                                        <span class="text-dark fw-bold">8</span>
                                                                    </small>
                                                                </div>
                                                                <div class="progress mt-1" style="height: 8px">
                                                                    <div class="progress-bar bg-gray-400" role="progressbar"
                                                                        style="width: 95%" aria-valuenow="95"
                                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
    
                                                            </div>
                                                        </div>
                                                        <!-- hidden class for hover -->
                                                        <div class="product-content-fade border-info"></div>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <!-- card -->
                                                    <div class="card card-product-v2 h-100">
                                                        <div class="card-body position-relative">
                                                            <!-- badge -->
                                                            <div class="text-center position-relative">
                                                                <!-- img -->
                                                                <router-link to="/detail"><img
                                                                        src="@/assets/images/products/product-img-3.jpg"
                                                                        alt="Grocery Ecommerce Template"
                                                                        class="mb-3 img-fluid" /></router-link>
    
                                                            </div>
                                                            <!-- title -->
                                                            <h2 class="fs-6"><router-link to="/detail"
                                                                    class="text-inherit text-decoration-none">Cadbury 5
                                                                    star chocolate</router-link></h2>
    
                                                            <!-- price -->
                                                            <div
                                                                class="d-flex justify-content-between align-items-center mt-3">
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
                                                            <div class="mt-4">
                                                                <div class="my-3">
                                                                    <small>
                                                                        the available products :
                                                                        <span class="text-dark fw-bold">8</span>
                                                                    </small>
                                                                </div>
                                                                <div class="progress mt-1" style="height: 8px">
                                                                    <div class="progress-bar bg-gray-400" role="progressbar"
                                                                        style="width: 95%" aria-valuenow="95"
                                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
    
                                                            </div>
    
                                                        </div>
                                                        <!-- hidden class for hover -->
                                                        <div class="product-content-fade border-info"></div>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <!-- card -->
                                                    <div class="card card-product-v2 h-100">
                                                        <div class="card-body position-relative">
                                                            <!-- badge -->
                                                            <div class="text-center position-relative">
                                                                <!-- img -->
                                                                <router-link to="/detail"><img
                                                                        src="@/assets/images/products/product-img-4.jpg"
                                                                        alt="Grocery Ecommerce Template"
                                                                        class="mb-3 img-fluid" /></router-link>
    
                                                            </div>
                                                            <!-- title -->
                                                            <h2 class="fs-6"><router-link to="/detail"
                                                                    class="text-inherit text-decoration-none">Onion
                                                                    Flavour Potato</router-link></h2>
    
                                                            <!-- price -->
                                                            <div
                                                                class="d-flex justify-content-between align-items-center mt-3">
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
                                                            <div class="mt-4">
                                                                <div class="my-3">
                                                                    <small>
                                                                        the available products :
                                                                        <span class="text-dark fw-bold">8</span>
                                                                    </small>
                                                                </div>
                                                                <div class="progress mt-1" style="height: 8px">
                                                                    <div class="progress-bar bg-gray-400" role="progressbar"
                                                                        style="width: 95%" aria-valuenow="95"
                                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
    
                                                            </div>
    
                                                        </div>
                                                        <!-- hidden class for hover -->
                                                        <div class="product-content-fade border-info"></div>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <!-- card -->
                                                    <div class="card card-product-v2 h-100">
                                                        <div class="card-body position-relative">
                                                            <!-- badge -->
                                                            <div class="text-center position-relative">
                                                                <!-- img -->
                                                                <router-link to="/detail"><img
                                                                        src="@/assets/images/products/product-img-6.jpg"
                                                                        alt="Grocery Ecommerce Template"
                                                                        class="mb-3 img-fluid" /></router-link>
    
                                                            </div>
                                                            <!-- title -->
                                                            <h2 class="fs-6"><router-link to="/detail"
                                                                    class="text-inherit text-decoration-none">Onion
                                                                    Flavour Potato</router-link></h2>
    
                                                            <!-- price -->
                                                            <div
                                                                class="d-flex justify-content-between align-items-center mt-3">
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
                                                            <div class="mt-4">
                                                                <div class="my-3">
                                                                    <small>
                                                                        the available products :
                                                                        <span class="text-dark fw-bold">8</span>
                                                                    </small>
                                                                </div>
                                                                <div class="progress mt-1" style="height: 8px">
                                                                    <div class="progress-bar bg-gray-400" role="progressbar"
                                                                        style="width: 95%" aria-valuenow="95"
                                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
    
                                                            </div>
    
                                                        </div>
                                                        <!-- hidden class for hover -->
                                                        <div class="product-content-fade border-info"></div>
                                                    </div>
                                                </div>
    
                                            </div>
                                        </div>
    
                                    </div>
                                </div>
                            </div>
    
                        </section>
                        <section>
    
                            <div class="row">
                                <div class="col-12">
                                    <div class="mb-4 bg-white d-lg-flex justify-content-between align-items-center rounded">
                                        <div class="p-6 ">
                                            <h2 class="mb-1 fw-bold"> Offres exceptionnelles</h2>
                                            <p class="mb-0 lead">
                                                jusqu'à -30% sur une sélection d'articles
                                                <br />
                                                treats, and more in one easy spot.
                                            </p>
                                            <a href="#" class="btn btn-dark mt-5">Get Discount on Share</a>
                                        </div>
                                        <div class="p-4 d-lg-block d-none col-7" style="height: 30vh !important"><img
                                                src="@/assets/img/pub-2.jpg" alt="" class="img-fluid"
                                                style="height: 100% !important" />
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                        </section>
    
    
                        <div class="row">
                            <!-- col -->
    
                            <div class="col-xl-12 col-lg-12 col-md-12 mb-12 mb-md-0">
                                <div class="mb-3 product-content">
                                    <div class="mb-4"
                                        style="border-bottom: 1px solid var(--fc-primary); display: flex; width:100% !important">
                                        <div class="row" style="width:101% !important">
                                            <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                <h3 class=" mb-0  text-white">
                                                    <router-link to="/categories" title="Voir plus" class="btn btn-primary"
                                                        style="border-radius: 0px !important;font-size: 18px;"> Les produits
                                                        les plus vendu</router-link>
                                                </h3>
                                            </div>
    
    
                                        </div>
    
                                    </div>
                                    <div class="product-slider-four-column">
                                        <!-- item -->
                                        <div class="item">
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
                                        <div class="item">
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
                                        <div class="item">
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
    
                                        <div class="item">
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
                                        <div class="item">
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
                                        <div class="item">
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
    
                                        <div class="item">
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
                                        <div class="item">
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
                                                            <span class="text-decoration-line-through text-muted">$65</span>
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
                                        <div class="item">
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
                                                                <span
                                                                    class="text-decoration-line-through text-muted">$65</span>
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
                                </div>
    
    
                            </div>
                        </div>
    
                        <div class="row">
                            <!-- col -->
    
                            <div class="col-xl-12 col-lg-12 col-md-12 mb-12 mb-md-0">
                                <div class="mb-3 product-content">
                                    <div class="mb-4"
                                        style="border-bottom: 1px solid var(--fc-primary); display: flex; width:100% !important">
                                        <div class="row" style="width:101% !important">
                                            <div class="col-11">
                                                <h3 class=" mb-0  text-white">
                                                    <router-link to="/categories" title="Voir plus" class="btn btn-primary"
                                                        style="border-radius: 0px !important;font-size: 18px;"> Les produits
                                                        sur commandes</router-link>
                                                </h3>
                                            </div>
    
    
                                        </div>
    
                                    </div>
                                    <div class="sur_commande">
                                        <!-- item -->
                                        <div class="item">
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
                                                            <span class="text-decoration-line-through text-muted">$65</span>
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
                                        <div class="item">
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
                                                            <span class="text-decoration-line-through text-muted">$65</span>
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
                                        <div class="item">
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
                                                                <span
                                                                    class="text-decoration-line-through text-muted">$65</span>
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
    
                                        <div class="item">
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
                                                            <span class="text-decoration-line-through text-muted">$65</span>
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
                                        <div class="item">
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
                                                            <span class="text-decoration-line-through text-muted">$65</span>
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
                                        <div class="item">
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
                                                                <span
                                                                    class="text-decoration-line-through text-muted">$65</span>
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
    
                                        <div class="item">
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
                                                            <span class="text-decoration-line-through text-muted">$65</span>
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
                                        <div class="item">
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
                                                            <span class="text-decoration-line-through text-muted">$65</span>
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
                                        <div class="item">
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
                                                                <span
                                                                    class="text-decoration-line-through text-muted">$65</span>
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
                                </div>
    
                                <section>
    
                                    <div class="row">
                                        <div class="col-12">
                                            <div
                                                class="mb-4 bg-white d-lg-flex justify-content-between align-items-center rounded">
                                                <div class="p-6">
                                                    <h2 class="mb-1 fw-bold">One Stop Grocery Shop</h2>
                                                    <p class="mb-0 lead">
                                                        Shopping for your furry friend? Find food,
                                                        <br />
                                                        treats, and more in one easy spot.
                                                    </p>
                                                    <a href="#" class="btn btn-dark mt-5">Get Discount on Share</a>
                                                </div>
                                                <div class="p-4 d-lg-block d-none col-7" style="height: 30vh !important">
                                                    <img src="@/assets/img/pub-3.jpg" alt="" class="img-fluid"
                                                        style="height: 100% !important" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
    
                                </section>
    
    
    
                            </div>
                        </div>
    
                        <div class="row">
                            <!-- col -->
    
                            <div class="col-xl-12 col-lg-12 col-md-12 mb-12 mb-md-0">
                                <div class="mb-3 product-content">
                                    <div class="mb-4"
                                        style="border-bottom: 1px solid var(--fc-primary); display: flex; width:100% !important">
                                        <div class="row" style="width:101% !important">
                                            <div class="col-11">
                                                <h3 class=" mb-0  text-white">
                                                    <router-link to="/categories" title="Voir plus" class="btn btn-primary"
                                                        style="border-radius: 0px !important;font-size: 18px;"> Les produits
                                                        vus recécemment</router-link>
                                                </h3>
                                            </div>
    
    
                                        </div>
    
                                    </div>
                                    <div class="vus_recemment">
                                        <!-- item -->
                                        <div class="item">
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
                                                            <span class="text-decoration-line-through text-muted">$65</span>
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
                                        <div class="item">
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
                                                            <span class="text-decoration-line-through text-muted">$65</span>
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
                                        <div class="item">
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
                                                                <span
                                                                    class="text-decoration-line-through text-muted">$65</span>
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
    
                                        <div class="item">
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
                                                            <span class="text-decoration-line-through text-muted">$65</span>
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
                                        <div class="item">
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
                                                            <span class="text-decoration-line-through text-muted">$65</span>
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
                                        <div class="item">
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
                                                                <span
                                                                    class="text-decoration-line-through text-muted">$65</span>
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
    
                                        <div class="item">
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
                                                            <span class="text-decoration-line-through text-muted">$65</span>
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
                                        <div class="item">
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
                                                            <span class="text-decoration-line-through text-muted">$65</span>
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
                                        <div class="item">
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
                                                                <span
                                                                    class="text-decoration-line-through text-muted">$65</span>
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
                                </div>
                            </div>
                        </div>
    
                        <!-- <swiper
                                    :slidesPerView="5" 
                                    :spaceBetween="20"
                        :cssMode="true"
                        :navigation="true"
                        :pagination="true"
                        :mousewheel="true"
                        :keyboard="true"
                        :modules="modules"
                        class="mySwiper"
                      >
                        <swiper-slide>Slide 1</swiper-slide>
                        <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
                        <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
                        <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
                        <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
                                  </swiper> -->
    
    
                    </div>
                </div>
    
    
                <!-- <section>
                                        
                                            <div class="row align-items-center mb-8">
                                                <div class="col-md-8 col-12">
                                                    <div class="d-flex">
                                                        <div class="mt-1">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                                                class="bi bi-journal text-primary" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z">
                                                                </path>
                                                                <path
                                                                    d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z">
                                                                </path>
                                                            </svg>
                                                        </div>
                                                        <div class="ms-3">
                                                            <h3 class="mb-0">Actualités</h3>
                                                         
                                                        </div>
                                                        <div></div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 text-end d-none d-md-block">
                                                    <a href="#" class="btn btn-primary">Voir plus</a>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-12 col-md-6 col-lg-3 mb-8">
                                                    <div class="mb-4">
                                                        <a href="javascript:void(0)">
                                                            <div class="img-zoom">
                                                                <img src="@/assets/images/blog/blog-img-1.jpg" alt=""
                                                                    class="img-fluid rounded w-100" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <h4 class="h5"><a href="javascript:void(0)" class="text-inherit">Spaghetti with Crispy
                                                                Zucchini</a></h4>
                                                     
                                                        <div class="d-flex align-items-center lh-1">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"
                                                                class="bi bi-clock text-dark" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z">
                                                                </path>
                                                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z">
                                                                </path>
                                                            </svg>
                                                            <small class="ms-1">
                                                                <span class="text-dark fw-bold">15</span>
                                                                min
                                                            </small>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6 col-lg-3 mb-8">
                                                    <div class="mb-4">
                                                        <a href="javascript:void(0)">
                                                            <div class="img-zoom">
                                                                <img src="@/assets/images/blog/blog-img-2.jpg" alt=""
                                                                    class="img-fluid rounded w-100" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <h4 class="h5"><a href="javascript:void(0)" class="text-inherit">Almond Butter Chocolate
                                                                Chip Zucchini Bars</a></h4>
                                                       
                                                        <div class="d-flex align-items-center lh-1">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"
                                                                class="bi bi-clock text-dark" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z">
                                                                </path>
                                                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z">
                                                                </path>
                                                            </svg>
                                                            <small class="ms-1">
                                                                <span class="text-dark fw-bold">18</span>
                                                                min
                                                            </small>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6 col-lg-3 mb-8">
                                                    <div class="mb-4">
                                                        <a href="javascript:void(0)">
                                                            <div class="img-zoom">
                                                                <img src="@/assets/images/blog/blog-img-3.jpg" alt=""
                                                                    class="img-fluid rounded w-100" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <h4 class="h5"><a href="javascript:void(0)" class="text-inherit">Spicy Shrimp Tacos
                                                                Garlic Cilantro Lime Slaw</a></h4>
                                                     
                                                        <div class="d-flex align-items-center lh-1">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"
                                                                class="bi bi-clock text-dark" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z">
                                                                </path>
                                                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z">
                                                                </path>
                                                            </svg>
                                                            <small class="ms-1">
                                                                <span class="text-dark fw-bold">20</span>
                                                                min
                                                            </small>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6 col-lg-3 mb-8">
                                                    <div class="mb-4">
                                                        <a href="javascript:void(0)">
                                                            <div class="img-zoom">
                                                                <img src="@/assets/images/blog/blog-img-4.jpg" alt=""
                                                                    class="img-fluid rounded w-100" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <h4 class="h5"><a href="javascript:void(0)" class="text-inherit">Simple Homemade Tomato
                                                                Soup</a></h4>
                                                   
                                                        <div class="d-flex align-items-center lh-1">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"
                                                                class="bi bi-clock text-dark" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z">
                                                                </path>
                                                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z">
                                                                </path>
                                                            </svg>
                                                            <small class="ms-1">
                                                                <span class="text-dark fw-bold">9</span>
                                                                min
                                                            </small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                    </section> -->
            </div>
    
            <section>
                <!-- col -->
                <div class="col-xl-12 col-lg-12 col-12 bg-white p-3">
                    <div class="row align-items-center mb-3">
                        <div class="col-md-6">
                            <!-- text -->
                            <div class="ms-xxl-14 me-xxl-15 mb-8 mb-md-0 text-center text-md-start">
                                <h1 class="mb-6">A propos de Wakanda group:</h1>
                                <p class="mb-0 ">
                                    Bienvenue chez Wakanda, votre destination en ligne pour une expérience de shopping
                                    unique, inspirée par l’innovation, la diversité et la qualité. Chez Wakanda, nous
                                    croyons en un futur où la technologie et la culture se rencontrent pour offrir des
                                    produits qui résonnent avec tous les aspects de votre vie moderne.
    
                                    Fondé avec une passion pour l'excellence et un engagement à fournir des produits de
                                    haute qualité, Wakanda est bien plus qu'une simple boutique en ligne. Nous sommes un
                                    espace où chaque client peut trouver des articles soigneusement sélectionnés qui
                                    correspondent à leurs besoins, leur style et leurs valeurs. Notre objectif est de vous
                                    offrir une vaste gamme de produits allant de la mode aux articles électroniques, en
                                    passant par les accessoires et les gadgets innovants.
                                </p>
    
    
                            </div>
                        </div>
                        <!-- col -->
                        <div class="col-md-6">
                            <div>
                                <!-- img -->
                                <img src="@/assets/img/propos.png" alt="" class="img-fluid rounded"
                                    style="height:auto !important ; width:100% !important">
                            </div>
                        </div>
                    </div>
    
                </div>
            </section>
        </main>
    
        <!-- Modal -->
    
        <div class="modal fade" id="modal-subscribe" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body p-0">
                        <div class="d-flex align-items-center">
                            <div class="d-none d-lg-block">
                                <img src="@/assets/images/banner/modal_img.jpg" alt="" class="img-fluid rounded-start" />
                            </div>
                            <div class="px-8 py-8 py-lg-0">
                                <div class="position-absolute end-0 top-0 m-6">
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <span class="bg-light-danger text-danger badge rounded-pill mb-4 px-4 py-2">7 Day Super
                                    Sale</span>
                                <h2 class="display-6 fw-bold">
                                    Discount up to
                                    <br />
                                    <span class="text-primary">50%</span>
                                </h2>
                                <p class="lead mb-5">Seven day of grate deals - what could be better?</p>
    
                                <div class="d-grid">
                                    <a href="#" class="btn btn-primary" data-bs-dismiss="modal">Start Show Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <!-- modal -->
        <!-- Modal -->
        <div class="modal fade" id="quickViewModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-xl modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body p-8">
                        <div class="position-absolute top-0 end-0 me-3 mt-3">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <!-- img slide -->
                                <div class="product productModal" id="productModal">
                                    <div class="zoom" onmousemove="zoom(event)" style="
                                              background-image: url(@/assets/images/products/product-single-img-1.jpg);
                                            ">
                                        <!-- img -->
                                        <img src="@/assets/images/products/product-single-img-1.jpg" alt="">
                                    </div>
                                    <div>
                                        <div class="zoom" onmousemove="zoom(event)" style="
                                                background-image: url(@/assets/images/products/product-single-img-2.jpg);
                                              ">
                                            <!-- img -->
                                            <img src="@/assets/images/products/product-single-img-2.jpg" alt="">
                                        </div>
                                    </div>
                                    <div>
                                        <div class="zoom" onmousemove="zoom(event)" style="
                                                background-image: url(@/assets/images/products/product-single-img-3.jpg);
                                              ">
                                            <!-- img -->
                                            <img src="@/assets/images/products/product-single-img-3.jpg" alt="">
                                        </div>
                                    </div>
                                    <div>
                                        <div class="zoom" onmousemove="zoom(event)" style="
                                                background-image: url(@/assets/images/products/product-single-img-4.jpg);
                                              ">
                                            <!-- img -->
                                            <img src="@/assets/images/products/product-single-img-4.jpg" alt="">
                                        </div>
                                    </div>
                                </div>
                                <!-- product tools -->
                                <div class="product-tools">
                                    <div class="thumbnails row g-3" id="productModalThumbnails">
                                        <div class="col-3 tns-nav-active">
                                            <div class="thumbnails-img">
                                                <!-- img -->
                                                <img src="@/assets/images/products/product-single-img-1.jpg" alt="">
                                            </div>
                                        </div>
                                        <div class="col-3">
                                            <div class="thumbnails-img">
                                                <!-- img -->
                                                <img src="@/assets/images/products/product-single-img-2.jpg" alt="">
                                            </div>
                                        </div>
                                        <div class="col-3">
                                            <div class="thumbnails-img">
                                                <!-- img -->
                                                <img src="@/assets/images/products/product-single-img-3.jpg" alt="">
                                            </div>
                                        </div>
                                        <div class="col-3">
                                            <div class="thumbnails-img">
                                                <!-- img -->
                                                <img src="@/assets/images/products/product-single-img-4.jpg" alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="ps-lg-8 mt-6 mt-lg-0">
                                    <a href="#!" class="mb-4 d-block">Bakery Biscuits</a>
                                    <h2 class="mb-1 h1">Napolitanke Ljesnjak</h2>
                                    <div class="mb-4">
                                        <small class="text-warning">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-half"></i></small><a href="#" class="ms-2">(30 reviews)</a>
                                    </div>
                                    <div class="fs-4">
                                        <span class="fw-bold text-dark">$32</span>
                                        <span class="text-decoration-line-through text-muted">$35</span><span><small
                                                class="fs-6 ms-2 text-danger">26% Off</small></span>
                                    </div>
                                    <hr class="my-6">
                                    <div class="mb-4">
                                        <button type="button" class="btn btn-outline-secondary">
                                            250g
                                        </button>
                                        <button type="button" class="btn btn-outline-secondary">
                                            500g
                                        </button>
                                        <button type="button" class="btn btn-outline-secondary">
                                            1kg
                                        </button>
                                    </div>
                                    <div>
                                        <!-- input -->
                                        <!-- input -->
                                        <div class="input-group input-spinner  ">
                                            <input type="button" value="-" class="button-minus  btn  btn-sm "
                                                data-field="quantity">
                                            <input type="number" step="1" max="10" value="1" name="quantity"
                                                class="quantity-field form-control-sm form-input   ">
                                            <input type="button" value="+" class="button-plus btn btn-sm "
                                                data-field="quantity">
                                        </div>
                                    </div>
                                    <div class="mt-3 row justify-content-start g-2 align-items-center">
    
                                        <div class="col-lg-4 col-md-5 col-6 d-grid">
                                            <!-- button -->
                                            <!-- btn -->
                                            <button type="button" class="btn btn-primary">
                                                <i class="feather-icon icon-shopping-bag me-2"></i>Add to
                                                cart
                                            </button>
                                        </div>
                                        <div class="col-md-4 col-5">
                                            <!-- btn -->
                                            <a class="btn btn-light" href="#" data-bs-toggle="tooltip" data-bs-html="true"
                                                aria-label="Compare"><i class="bi bi-arrow-left-right"></i></a>
                                            <a class="btn btn-light" href="#!" data-bs-toggle="tooltip" data-bs-html="true"
                                                aria-label="Wishlist"><i class="feather-icon icon-heart"></i></a>
                                        </div>
                                    </div>
                                    <hr class="my-6">
                                    <div>
                                        <table class="table table-borderless">
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
                                                        <small>01 day shipping.<span class="text-muted">( Free pickup
                                                                today)</span></small>
                                                    </td>
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
    
        <div class="modal fade" id="userModal" tabindex="-1" aria-labelledby="userModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content p-4">
                    <div class="modal-header border-0">
                        <h5 class="modal-title fs-3 fw-bold" id="userModalLabel">Sign dUp</h5>
    
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
    
        <!-- Modal product paye-->
        <div class="modal fade" id="productPaye" tabindex="-1" aria-labelledby="productPayeLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" style="max-width: auto !important; width: 100%;">
                <div class="modal-content p-4">
                    <div class="modal-header border-0 justify-content-between">
    
                        <h5 class="modal-title fs-4 fw-bold" id="productPayeLabel">S'inscrire</h5>
    
                        <button type="button" class="btn-close  m-0" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-0">
                        text
                    </div>
                    <div class="modal-footer text-center pt-0">
    
                    </div>
    
                </div>
            </div>
        </div>
    
    
    
    </div>
</template>
<script>
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';
import 'slick-carousel';
import LoadingSkeleton from '@/components/others/loader/LoadingSkeleton.vue';
import defaultImage from '@/assets/images/products/product-img-2.jpg'
import defaultImageCategorie from '@/assets/img/logo_mobile.png'
import { mapActions, mapGetters } from 'vuex';
import { useToast } from "vue-toastification";
import LoaderBtn from '@/components/others/loader/loaderbtn.vue';
import axios from '@/lib/axiosConfig';




export default {
  components: {
    LoadingSkeleton, LoaderBtn
  },
  computed: {
    ...mapGetters('cart', ['alertMessage', 'loading']),
  },
  setup() {
    const toast = useToast(); // Initialiser useToast
    return { toast };
  },

  data() {

    return {
      loading: true,
      loadingItems: {},
      products: [],
      defaultImage: defaultImage,
      defaultImageCategorie: defaultImageCategorie,
      CategoriesArray: [],
      marquesArray: [],
      productsArray:[],

      images: [
        '@/assets/images/slider/hero-img-slider-1.jpg',
        '@/assets/images/slider/hero-img-slider-2.jpg',
        '@/assets/images/slider/hero-img-slider-3.jpg'
      ]

    }
  },

  async mounted() {
    await this.getCategoriesAll()
    await this.getMarquesAll()
    await this.getProductsAll()
    await this.recupererProduits()

  },
  watch: {
    loading(newVal) {
      if (newVal === false) {
        this.initSliders();
      }
    },
    alertMessage(newVal) {
      console.log('newVal', newVal)
      if (newVal) {
        this.loadingItems = {};
        this.toast.success(newVal, {
          position: "top-right",
          timeout: 2000,
          closeOnClick: true,
        });

        // const modalElement = document.getElementById('productPaye');
        // const modalInstance = bootstrap.Modal.getOrCreateInstance(modalElement);
        // console.log('zz',modalElement)
        // if (modalInstance) {
        //   modalInstance.show();
        // }

      }
    },
  },
  methods: {
    // ...mapActions('cart', ['addToCart']),

    addProductToCart(product) {
      this.loadingItems[product.id] = true;
      this.$store.dispatch('cart/addToCart', product);
    },

    recupererProduits() {

      fetch("/data/products.json")
        .then(response => {
          if (!response.ok) {
            throw new Error("Erreur lors du chargement des produits");
          }
          return response.json();
        })
        .then(data => {
          this.products = data;
          this.loading = false;
        })
        .catch(error => {
          console.error("Erreur :", error);
        });
    },
    truncateText(text, maxLength) {
      if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...'; // Ajoute "..." à la fin si le texte est trop long
      }
      return text;
    },
    initSliders() {

      this.$nextTick(() => {
        $('.hero-slider').slick({
          infinite: !0,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: !0,
          dots: !0,
          arrows: !1,
        });
        $('.slider-8-columns').slick({
          infinite: !0,
          slidesToShow: 8,
          slidesToScroll: 1,
          autoplay: !0,
          dots: !1,
          arrows: !0,
          speed: 1e3,
          loop: !0,
          adaptiveHeight: !0,
          responsive: [
            {
              breakpoint: 1025,
              settings: { slidesToShow: 4, slidesToScroll: 1 },
            },
            {
              breakpoint: 768,
              settings: { slidesToShow: 3, slidesToScroll: 1 },
            },
            {
              breakpoint: 480,
              settings: { slidesToShow: 2, slidesToScroll: 1 },
            },
          ],
          prevArrow:
            '<span class="slick-prev"><i class="feather-icon icon-chevron-left"></i></span>',
          nextArrow:
            '<span class="slick-next"><i class="feather-icon icon-chevron-right"></i></span>',
          // appendArrows: "#" + s + "-arrows",
        });
        $('.product-slider-four-columns').slick({
          infinite: !0,
          slidesToShow: 7,
          slidesToScroll: 1,
          autoplay: !0,
          dots: !1,
          arrows: !0,
          prevArrow:
            '<span class="slick-prev "><i class="feather-icon icon-chevron-left"></i></span>',
          nextArrow:
            '<span class="slick-next "><i class="feather-icon icon-chevron-right "></i></span>',
          responsive: [
            {
              breakpoint: 1400,
              settings: { slidesToShow: 7, slidesToScroll: 7 },
            },
            {
              breakpoint: 1200,
              settings: { slidesToShow: 6, slidesToScroll: 1 },
            },
            { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } },
          ],
        });
        $('.product-slider-four-column').slick({
          infinite: !0,
          slidesToShow: 7,
          slidesToScroll: 1,
          autoplay: !0,
          dots: !1,
          arrows: !0,
          prevArrow:
            '<span class="slick-prev "><i class="feather-icon icon-chevron-left"></i></span>',
          nextArrow:
            '<span class="slick-next "><i class="feather-icon icon-chevron-right "></i></span>',
          responsive: [
            {
              breakpoint: 1400,
              settings: { slidesToShow: 7, slidesToScroll: 7 },
            },
            {
              breakpoint: 1200,
              settings: { slidesToShow: 6, slidesToScroll: 1 },
            },
            { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } },
          ],
        });
        $('.sur_commande').slick({
          infinite: !0,
          slidesToShow: 7,
          slidesToScroll: 1,
          autoplay: !0,
          dots: !1,
          arrows: !0,
          prevArrow:
            '<span class="slick-prev "><i class="feather-icon icon-chevron-left"></i></span>',
          nextArrow:
            '<span class="slick-next "><i class="feather-icon icon-chevron-right "></i></span>',
          responsive: [
            {
              breakpoint: 1400,
              settings: { slidesToShow: 7, slidesToScroll: 7 },
            },
            {
              breakpoint: 1200,
              settings: { slidesToShow: 6, slidesToScroll: 1 },
            },
            { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } },
          ],
        });
        $('.vus_recemment').slick({
          infinite: !0,
          slidesToShow: 7,
          slidesToScroll: 1,
          autoplay: !0,
          dots: !1,
          arrows: !0,
          prevArrow:
            '<span class="slick-prev "><i class="feather-icon icon-chevron-left"></i></span>',
          nextArrow:
            '<span class="slick-next "><i class="feather-icon icon-chevron-right "></i></span>',
          responsive: [
            {
              breakpoint: 1400,
              settings: { slidesToShow: 7, slidesToScroll: 7 },
            },
            {
              breakpoint: 1200,
              settings: { slidesToShow: 6, slidesToScroll: 1 },
            },
            { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } },
          ],
        });

      })
    },
    async getCategoriesAll() {
      try {
        const response = await axios.get('liste/categories')
        if (response.data.status === "success") {
          this.CategoriesArray = response.data.data.data.slice(0, 7)
        }

      } catch (error) {
        console.log('error', error)
      }
    },
    async getMarquesAll() {
      try {
        const response = await axios.get('/marques')
        if (response.data.status === "success") {
          this.marquesArray = response.data.data.data

        }

      } catch (error) {
        console.log('error', error)
      }
    },
    async getProductsAll() {
        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2RhdGEud2FrYW5kYS5iZXN0L2FwaS9zeXN0ZW0vbG9naW4iLCJpYXQiOjE3MzAyNzYzODEsIm5iZiI6MTczMDI3NjM4MSwianRpIjoiVU5sN3J3RXBhTFZGdG1OaCIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.H40wgUqkMXolIzMq_zTz8Mg7Bp-QsyjbarTijztMzi4'
      try {
        const response = await axios.get('/produits',{
            headers: {
            Authorization: `Bearer ${token}`,
          },

        })
        if (response.data.status === "success") {
          this.productsArray = response.data.data.data
          console.log('response ', this.productsArray);


        }

      } catch (error) {
        console.log('error', error)
      }
    },
    formatPrice(value) {
      return parseFloat(value).toLocaleString(); // Formatage avec séparateurs de milliers
    },
  },

  beforeDestroy() {
  }

}
</script>
<style lang="css" scoped>
.hero-img-1 {
    background-image: url('@/assets/images/slider/hero-img-slider-1.jpg');
    background-size: cover;
    border-radius: 0.5rem;
    background-position: center;
    background-repeat: no-repeat;
    height: 55vh !important;
    overflow: hidden;
}

.hero-img-2 {
    background-image: url('@/assets/images/slider/hero-img-slider-2.jpg');
    background-size: cover;
    border-radius: 0.5rem;
    background-position: center;
    background-repeat: no-repeat;
    height: 55vh !important;
    overflow: hidden;
}

.hero-img-3 {
    background-image: url('@/assets/images/slider/hero-img-slider-3.jpg');
    background-size: cover;
    border-radius: 0.5rem;
    background-position: center;
    background-repeat: no-repeat;
    height: 55vh !important;
    overflow: hidden;
}

.height-slick {
    height: 55vh !important;
}

.slick-list .draggable {
    height: 55vh !important;

}



.slick-prev d .slick-arrow,
.slick-next .slick-arrow {
    display: none !important;
}

.slick-slider .slick-next {
    display: none !important;
}


.swiper {
    width: 100%;
    height: 300px;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.heure {

    background-color: #fff;
    color: #000;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);
    margin: 0 5px;
}

.swiper-container {
    width: 100%;
    height: 100%;
}

img {
    width: 100%;
    height: auto;
}
</style>