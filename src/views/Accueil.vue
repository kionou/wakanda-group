<template >
    <div>
        <LoadingSkeleton v-if="loading " style="z-index: 99999"></LoadingSkeleton>
        <main v-else>
            <section class="">
                <div class="row mt-3 height-slick">
    
                    <div class="col-xl-2  d-none d-lg-block pe-0" >
                        <div class="mb-4">
    
    
                            <div class="card height-slick justify-content-between categorie " style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
                              
                                <ul class="nav-item dropdown align-items-center  p-2 mb-0" style="list-style: none;">
                                    
                                    <span class="">
                                        <h6  class="fs-5"><i  class="bi bi-list"></i> Categories</h6>

                                </span>
                                    <li v-for="(category,index) in CategoriesArray" :key="index" class="dropdown-menu-list">
                                        <router-link :to="{ name: 'list-categories', params: { id: encodeId(category.id)  }}"
                                            class="dropdown-item d-flex justify-content-between mb-1 py-1">
                                            <div>
                                                <img :src="category.Image !== null ? category.Image : defaultImageCategorie"
                                                    :alt="category.NomCategorie" width="24" height="24" style="width:20px">
    
                                                <span class="ms-1">{{ category.NomCategorie }}</span>
                                            </div>
    
    
                                        </router-link>
    
    
                                    </li>
                                </ul>
                              
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-8 col-md-12 col-sm-12  pe-0">
    
    
                        <div class="hero-slider"  >
                            <div class="hero-img-1" style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
                                <div class=" col-xxl-5 col-lg-7 col-md-8  text-xs-center" style="width: 100%; height:100%">
                                    <img src="@/assets/img/bn1.jpg" alt="" style="width: 100%; height:100%">
                                   
                                </div>
                            </div>
                            <div class="hero-img-1" style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
                                <div class=" col-xxl-5 col-lg-7 col-md-8  text-xs-center" style="width: 100%; height:100%">
                                    <img src="@/assets/img/bn2.jpg" alt="" style="width: 100%; height:100%">
                                   
                                </div>
                            </div>
                            <div class="hero-img-1" style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
                                <div class=" col-xxl-5 col-lg-7 col-md-8  text-xs-center" style="width: 100%; height:100%">
                                    <img src="@/assets/img/bn3.jpg" alt="" style="width: 100%; height:100%">
                                   
                                </div>
                            </div>
                          
                        </div>
                    </div>
                    <div class="col-xl-2 d-none d-xl-block  pe-0">
    
                        <div class="card ms-2 height-slick card-right" style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
                            <img src="@/assets/img/right.jpg" alt="" class="h-100">    
                        </div>
    
    
                    </div>
    
                </div>
            </section>
            <!-- section slick and marque , moment  -->
            <section class="row mt-1">
                <div class="col-xl-4 col-md-4 mt-4">
                   
                        <div class="card border   me-1" style="height: 90%;">
                            <div class="card-body p-3">
                                <div class="row" style="height: 100%;">
                              <div class="col-lg-12 text-center">
                                <div class="bg-primary text-white">
                                    <p style="border-bottom: 1px solid red " class="fs-4 fw-bold"> FLASH PROMOS </p>

                                </div>
                                <div class="slide-one">
                                    <div class="item" style="display: grid !important; justify-content: center !important;"  v-for="(product,index) in ProductFlash?.produits" :key="index">
                                        <div class="col-lg-12 text-center text-lg-start">
                                 
                                 <h4 class="fs-10">
                                    <span> {{truncateText(product.produit?.NomProduit , 15) }}</span>
                                   
                                </h4>

                                 <div class="d-flex justify-content-center align-items-center mt-3">
                                    <div>
                                                <span v-if="product.produit?.PrixPromo" class="text-danger fs-5 fw-bold">
                                                    {{ formatPrice(convertPrice(product.produit.PrixPromo), selectedDevise.symbol, selectedDevise.isSymbolBefore) }}
                                                </span>
                                                <br>
                                                <span v-if="product.produit?.PrixPromo" class="text-muted text-decoration-line-through fs-5 fw-bold">
                                                    {{ formatPrice(convertPrice(product.produit.Prix), selectedDevise.symbol, selectedDevise.isSymbolBefore) }}
                                                </span>
                                                <span v-else class="text-danger fs-5 fw-bold">
                                                    {{ formatPrice(convertPrice(product.produit?.Prix), selectedDevise.symbol, selectedDevise.isSymbolBefore) }}
                                                </span>
                                                </div>
                                 </div>
                                 
                                
                              </div>
                                              <router-link :to="{ name: 'detail', params: { id: encodeId(product.produit?.id) }}" class="d-flex justify-content-center" @click="addToRecent(product.produit)">
                                                  
                                                  <img :src="product.produit?.PhotoCover ? product.produit?.PhotoCover : defaultImage"
                                                      :alt="product.produit?.NomProduit" :title="product.produit?.NomProduit"
                                                      style="width: 300px; height: auto; "
                                                      class="img-fluid" />
                                              </router-link> 
                                              <div>{{ product.produit?.Description }}</div>
                              </div>
                            
                                </div>
                               
                             
                                </div>
                                
                           </div>
                            </div>
                          
                        </div>
                   
                </div>
                <div class="col-xl-8 col-md-8">
                     <!-- section marque start -->
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
                                        <router-link  :to="{ name: 'list-marques', params: {  id: encodeId(marque.id) }}" class="text-decoration-none text-inherit">
                                            <!-- card -->
                                            <div class="card mb-3 card-lift">
                                                <div class="card-body  p-2  d-flex flex-column justify-content-center align-items-center">
                                                     <!-- <router-link :to="{ name: 'marque-detail', params: { id: marque?.id }}"></router-link> -->
                                                    <div class="my-2" style="height: 120px; width:120px">
                                                      
                                                        <img :src="marque.Logo !== null ||  !marque.Logo.startsWith('https') ? marque.Logo : defaultImageCategorie"
                                                        :alt="marque.Nom"  height="24" style="width:100% ; height:100%">
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
            <!-- section marque end -->

                <!-- section moment start -->
            <section  class="mt-4">
                <div class="mb-5 product-content">
                            <div class="mb-4 "
                                style="border-bottom: 1px solid var(--fc-primary); width:100% !important">
                                <h3 class=" mb-0 pb-2 pt-1 ps-2 text-white bg-primary row align-items-center" style="width:100% !important;">
                                    <router-link :to="{ name: 'type-detail', params: { id: encodeId(ProductMoment?.id) }}" class="text-white col-xl-10 col-md-8 col-sm-6" title="Voir plus"
                                        style="border-radius: 0px !important;font-size: 20px;">
                                        {{ProductMoment?.Nom}}</router-link>
                                        <div class="col-xl-2 col-md-4  d-none d-sm-block text-end " style="cursor: pointer;" @click="$router.push({path:`/type-detail/${ encodeId(ProductMoment?.id)}`})">
                                       <div style="font-size:14px" class="me-3">VOIR PLUS <i class="bi bi-arrow-right"></i></div>
                                           
                                </div>
                                </h3>
                               
                            </div>
                            <div class="product-slider-four-columns">
                               
                                <div class="item" v-for="(product,index) in ProductMoment?.produits" :key="index">
                                    <!-- card -->
                                    <div class="card card-product h-100">
                                        <div class="card-body position-relative">
                                            <div class="text-center position-relative d-flex justify-content-center">
                                                <div class="position-absolute top-0 start-0">
                                                    <span v-if="product.produit?.PrixPromo" class="badge bg-success text-white">
                                                    -{{ calculateDiscount(product.produit?.Prix, product.produit?.PrixPromo) }}%
                                                    </span>
                                                </div>
                                                <!-- img -->
                                                <div>
                                                    <router-link :to="{ name: 'detail', params: { id: encodeId(product.produit?.id) }}" @click="addToRecent(product.produit)">
                                                  
                                                  <img :src="product.produit?.PhotoCover ? product.produit?.PhotoCover : defaultImage"
                                                      :alt="product.produit?.NomProduit" :title="product.produit?.NomProduit"
                                                      style="width: 200px; height: auto; "
                                                      class="mb-3 img-fluid" />
                                                    </router-link> 
                                                    </div>
                                               
                                                <!-- action btn -->
    
                                            </div>
                                            <!-- title -->
                                            <h2 class="fs-6"><router-link
                                                    :to="{ name: 'detail', params: { id: encodeId (product.produit?.id) }}"
                                                    class="text-inherit text-decoration-none" @click="addToRecent(product.produit)">{{
                                                    truncateText(product.produit?.NomProduit , 15) }}
                                                </router-link></h2>
                                            <div class="d-flex justify-content-between align-items-center mt-3">
                                              
                                                <div>
                                                <span v-if="product.produit?.PrixPromo" class="text-danger">
                                                    {{ formatPrice(convertPrice(product.produit.PrixPromo), selectedDevise.symbol, selectedDevise.isSymbolBefore) }}
                                                </span>
                                                <br>
                                                <span v-if="product.produit?.PrixPromo" class="text-muted text-decoration-line-through">
                                                    {{ formatPrice(convertPrice(product.produit.Prix), selectedDevise.symbol, selectedDevise.isSymbolBefore) }}
                                                </span>
                                                <span v-else class="text-danger">
                                                    {{ formatPrice(convertPrice(product.produit?.Prix), selectedDevise.symbol, selectedDevise.isSymbolBefore) }}
                                                </span>
                                                </div>

                                                <div>
    
                                                    <span class="text-uppercase small " @click="addProductToCart(product?.produit)"
                                                        :disabled="loadingItems[product?.produit?.id]">
                                                        <div class="icon-card">
                                                            <div v-if="loadingItems[product?.produit?.id]">
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
            </section>
            <!-- section moment end  -->
                </div>
            </section>

            <div class=" mb-3">
    
    
                <div class="row">
                    <!-- col -->
    
                    <div class="col-xl-12 col-lg-12 col-md-12 mb-12 mb-md-0">
                       
                        <section class=" mb-3">
    
                            <!-- row -->
                            <div class="row align-items-center bg-primary text-white mb-2" style="border: 1px solid red">
                                <div class="col-xl-2 col-md-3">
                                     <div class="mb-xl-0">
                                         <h3 class="mb-0 d-flex justify-content-center align-items-center" style="cursor: pointer;" @click="$router.push({path:`/type-detail/${ProductFlash?.id}`})"> 
                                           <img src="@/assets/img/flash.png" alt="" style="width:13%">
                                           <span class="text-white"> {{ProductFlash?.Nom}}</span>
                                           
                                        </h3>
                                        </div>
                                    </div>
                                <div class="col-xl-9 col-md-7">
                                    <div>
                                            <!-- nav -->
                                            <nav>
                                                <ul class="nav justify-content-center nav-pills nav-scroll border-bottom-0 gap-1" id="nav-tab"
                                                    role="tablist">
                                                    <!-- nav item -->
                                                    <li class="nav-item">
                                                        <!-- nav link -->
                                                        <a href="#" style="border-radius: 0px !important;font-size: 16px;"
                                                            class="nav-link active d-flex" id="nav-fruitsandveg-tab"
                                                            data-bs-toggle="tab" data-bs-target="#nav-fruitsandveg"
                                                            role="tab" aria-controls="nav-fruitsandveg"
                                                            aria-selected="true">
                                                            Termine dans
                                                            <span class="d-flex">
                                                                

                                                                <div class="heure">{{ hours }}</div> h
                                                                <div class="heure">{{ minutes }}</div> m
                                                                <div class="heure">{{ seconds }}</div> s
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                </div>
                               
                                <div class="col-xl-1 col-md-2 d-none d-sm-block"  style="cursor: pointer;" @click="$router.push({path:`/type-detail/${ProductFlash?.id}`})">
                                    <div>VOIR PLUS <i class="bi bi-arrow-right"></i></div>
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
                                                <div class="col" v-for="(product,index) in ProductFlash?.produits" :key="index">
                                                    <!-- card -->
                                                    <div class="card card-product-v2 h-100">
                                                        <div class="card-body position-relative">
                                                            <!-- badge -->
                                                            <div class="text-center position-relative">
                                                                <div class="position-absolute top-0 start-0">
                                                                    <span v-if="product.produit?.PrixPromo" class="badge bg-success text-white">
                                                                    -{{ calculateDiscount(product.produit?.Prix, product.produit?.PrixPromo) }}%
                                                                    </span>
                                                                </div>
                                                                <!-- img -->
                                                                <router-link :to="{ name: 'detail', params: { id: product.produit?.id }}" @click="addToRecent(product.produit)">
                                                                    <img :src="product.produit?.PhotoCover ? product.produit?.PhotoCover : defaultImage"
                                                                        :alt="product.produit?.NomProduit" :title="product.produit?.NomProduit"
                                                                        style="width: 100%; height: auto; max-height: 30% !important;"
                                                                        class="mb-3 img-fluid" />
                                                                </router-link>
                                                                <!-- action btn -->
    
                                                            </div>
                                                            <!-- title -->
                                                            <h2 class="fs-6"><router-link
                                                                :to="{ name: 'detail', params: { id: product.produit?.id }}"
                                                                class="text-inherit text-decoration-none" @click="addToRecent(product.produit)">{{
                                                                truncateText(product.produit?.NomProduit , 15) }}
                                                            </router-link></h2>
    
                                                            <!-- price -->
                                                            <div class="d-flex justify-content-between align-items-center mt-3">
                                                                <div>
                                                <span v-if="product.produit?.PrixPromo" class="text-danger">
                                                    {{ formatPrice(convertPrice(product.produit.PrixPromo), selectedDevise.symbol, selectedDevise.isSymbolBefore) }}
                                                </span>
                                                <br>
                                                <span v-if="product.produit?.PrixPromo" class="text-muted text-decoration-line-through">
                                                    {{ formatPrice(convertPrice(product.produit.Prix), selectedDevise.symbol, selectedDevise.isSymbolBefore) }}
                                                </span>
                                                <span v-else class="text-danger">
                                                    {{ formatPrice(convertPrice(product.produit?.Prix), selectedDevise.symbol, selectedDevise.isSymbolBefore) }}
                                                </span>
                                                </div>
                                                                <div>
                                                                    
                                                    <span class="text-uppercase small " @click="addProductToCart(product?.produit)"
                                                        :disabled="loadingItems[product?.produit?.id]">
                                                        <div class="icon-card">
                                                            <div v-if="loadingItems[product?.produit?.id]">
                                                                <LoaderBtn class="loadingbtn"></LoaderBtn>
                                                            </div>
                                                            <div v-else>
                                                                <i class="bi bi-cart2 fs-4"></i>
                                                            </div>
    
                                                        </div>
                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div class="mt-4">
                                                                <div class="my-3">
                                                                    <small>
                                                                        Disponible :
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
                        <div class="row" v-if="ProductPlusVendu?.produits?.length !== 0">
                            <!-- col -->
    
                            <div class="col-xl-12 col-lg-12 col-md-12 mb-12 mb-md-0">
                                <div class="mb-3 product-content">
                                    <div class="mb-4 "
                                style="border-bottom: 1px solid var(--fc-primary); width:100% !important">
                                <h3 class=" mb-0 pb-2 pt-1 ps-2 text-white bg-primary row align-items-center" style="width:100% !important;">
                                    <router-link :to="{ name: 'type-detail', params: { id: encodeId(ProductPlusVendu?.id) }}" class="text-white col-xl-11 col-md-8" title="Voir plus"
                                        style="border-radius: 0px !important;font-size: 20px;">
                                        {{ProductPlusVendu?.Nom}}</router-link>
                                        <div class="col-xl-1 col-md-4 d-none d-sm-block  text-end " style="cursor: pointer;" @click="$router.push({path:`/type-detail/${encodeId(ProductPlusVendu?.id)}`})">
                                         
                                         <div style="font-size:14px" class="me-3">VOIR PLUS <i class="bi bi-arrow-right"></i></div>
                                                
                                     </div>
                                </h3>
                               
                            </div>
                                   
                                    <div class="product-slider-four-column">
                                     
                                        <div class="item" v-for="(product,index) in ProductPlusVendu?.produits" :key="index">
                                    <!-- card -->
                                    <div class="card card-product h-100">
                                        <div class="card-body position-relative">
                                            <div class="text-center position-relative d-flex justify-content-center">
                                                <div class="position-absolute top-0 start-0">
                                                    <span v-if="product.produit?.PrixPromo" class="badge bg-success text-white">
                                                    -{{ calculateDiscount(product.produit?.Prix, product.produit?.PrixPromo) }}%
                                                    </span>
                                                </div>
                                                <!-- img -->
                                                <div>
                                                    <router-link :to="{ name: 'detail', params: { id: encodeId(product.produit?.id) }}" @click="addToRecent(product.produit)">
                                                  
                                                  <img :src="product.produit?.PhotoCover ? product.produit?.PhotoCover : defaultImage"
                                                      :alt="product.produit?.NomProduit" :title="product.produit?.NomProduit"
                                                      style="width: 150px; height:auto; "
                                                      class="mb-3 img-fluid" />
                                              </router-link> 
                                                    </div>
                                               
                                                <!-- action btn -->
    
                                            </div>
                                            <!-- title -->
                                            <h2 class="fs-6"><router-link
                                                    :to="{ name: 'detail', params: { id: encodeId(product.produit?.id) }}"
                                                    class="text-inherit text-decoration-none" @click="addToRecent(product.produit)">{{
                                                    truncateText(product.produit?.NomProduit , 15) }}
                                                </router-link></h2>
                                            <div class="d-flex justify-content-between align-items-center mt-3">
                                              
                                                <div>
                                                <span v-if="product.produit?.PrixPromo" class="text-danger">
                                                    {{ formatPrice(convertPrice(product.produit.PrixPromo), selectedDevise.symbol, selectedDevise.isSymbolBefore) }}
                                                </span>
                                                <br>
                                                <span v-if="product.produit?.PrixPromo" class="text-muted text-decoration-line-through">
                                                    {{ formatPrice(convertPrice(product.produit.Prix), selectedDevise.symbol, selectedDevise.isSymbolBefore) }}
                                                </span>
                                                <span v-else class="text-danger">
                                                    {{ formatPrice(convertPrice(product.produit?.Prix), selectedDevise.symbol, selectedDevise.isSymbolBefore) }}
                                                </span>
                                                </div>

                                                <div>
    
                                                    <span class="text-uppercase small " @click="addProductToCart(product?.produit)"
                                                        :disabled="loadingItems[product?.produit?.id]">
                                                        <div class="icon-card">
                                                            <div v-if="loadingItems[product?.produit?.id]">
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
    
    
                            </div>
                        </div>
    
                        <div class="row" v-if="ProductSurCommande?.produits?.length !== 0">
                            <!-- col -->
    
                            <div class="col-xl-12 col-lg-12 col-md-12 mb-12 mb-md-0">
                                <div class="mb-3 product-content">
                                    <div class="mb-4 bg-primary"
                                style="border-bottom: 1px solid var(--fc-primary); width:100% !important">
                                <h3 class=" mb-0 pb-2 pt-1 ps-2 text-white bg-primary row align-items-center" style="width:100% !important;">
                                    <router-link :to="{ name: 'type-detail', params: { id:encodeId(ProductSurCommande?.id) }}" class="text-white col-xl-11 col-md-8" title="Voir plus"
                                        style="border-radius: 0px !important;font-size: 20px;">
                                        {{ProductSurCommande?.Nom}}</router-link>
                                        <div class="col-xl-1 col-md-4 d-none d-sm-block text-end " style="cursor: pointer;" @click="$router.push({path:`/type-detail/${encodeId(ProductSurCommande?.id)}`})">
                                         
                                         <div style="font-size:14px" class="me-3">VOIR PLUS <i class="bi bi-arrow-right"></i></div>
                                                
                                     </div>
                                </h3>
                               
                            </div>
                                  
                                    <div class="sur_commande">
                                       
                                        <div class="item" v-for="(product,index) in ProductSurCommande?.produits" :key="index">
                                    <!-- card -->
                                    <div class="card card-product h-100">
                                        <div class="card-body position-relative">
                                            <div class="text-center position-relative d-flex justify-content-center">
                                                <div class="position-absolute top-0 start-0">
                                                    <span v-if="product.produit?.PrixPromo" class="badge bg-success text-white">
                                                    -{{ calculateDiscount(product.produit?.Prix, product.produit?.PrixPromo) }}%
                                                    </span>
                                                </div>
                                                <!-- img -->
                                                <div>
                                                    <router-link :to="{ name: 'detail', params: { id: encodeId(product.produit?.id) }}" @click="addToRecent(product.produit)">
                                                  
                                                  <img :src="product.produit?.PhotoCover ? product.produit?.PhotoCover : defaultImage"
                                                      :alt="product.produit?.NomProduit" :title="product.produit?.NomProduit"
                                                      style="width: 150px; height: auto; "
                                                      class="mb-3 img-fluid" />
                                              </router-link> 
                                                    </div>
                                               
                                                <!-- action btn -->
    
                                            </div>
                                            <!-- title -->
                                            <h2 class="fs-6"><router-link
                                                    :to="{ name: 'detail', params: { id: encodeId(product.produit?.id) }}"
                                                    class="text-inherit text-decoration-none" @click="addToRecent(product.produit)">{{
                                                    truncateText(product.produit?.NomProduit , 15) }}
                                                </router-link></h2>
                                            <div class="d-flex justify-content-between align-items-center mt-3">
                                              
                                             <p>sur commande</p>

                                                <div>
    
                                                    <span class="text-uppercase small " @click="addProductToCart(product?.produit)"
                                                        :disabled="loadingItems[product?.produit?.id]">
                                                        <div class="icon-card">
                                                            <div v-if="loadingItems[product?.produit?.id]">
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
                                    <div class="mb-4 bg-primary"
                                        style="border-bottom: 1px solid var(--fc-primary); display: flex; width:100% !important">
                                        <div class="row" style="width:101% !important">
                                            <div class="col-11">
                                                <h3 class=" mb-0  pb-2 pt-1 ps-2 text-white bg-primary">
                                                    <router-link to="/categories" title="Voir plus" class="text-white"
                                                        style="border-radius: 0px !important;font-size: 18px;"> Les produits
                                                        vus recécemment</router-link>
                                                </h3>
                                            </div>
                                        </div>
    
                                    </div>
                                    <div class="vus_recemment  ">
                                        <p v-if="recentProducts.length === 0">Pas de produit vue pour l'instant</p>
                                        <div v-else class="item" v-for="(product,index) in recentProducts" :key="index">
                                    <!-- card -->
                                    <div class="card card-product h-100">
                                        <div class="card-body position-relative">
                                            <div class="text-center position-relative d-flex justify-content-center">
                                                <div class="position-absolute top-0 start-0">
                                                    <span v-if="product?.PrixPromo" class="badge bg-success text-white">
                                                    -{{ calculateDiscount(product?.Prix, product?.PrixPromo) }}%
                                                    </span>
                                                </div>
                                                <!-- img -->
                                                <div>
                                                    <router-link :to="{ name: 'detail', params: { id: encodeId(product?.id) }}" @click="addToRecent(product)">
                                                  
                                                  <img :src="product?.PhotoCover ? product?.PhotoCover : defaultImage"
                                                      :alt="product?.NomProduit" :title="product?.NomProduit"
                                                      style="width: 200px; height: auto; "
                                                      class="mb-3 img-fluid" />
                                                    </router-link> 
                                                    </div>
                                               
                                                <!-- action btn -->
    
                                            </div>
                                            <!-- title -->
                                            <h2 class="fs-6"><router-link
                                                    :to="{ name: 'detail', params: { id: encodeId(product?.id) }}"
                                                    class="text-inherit text-decoration-none" @click="addToRecent(product)">{{
                                                    truncateText(product?.NomProduit , 15) }}
                                                </router-link></h2>
                                            <div class="d-flex justify-content-between align-items-center mt-3">
                                              
                                                <div>
                                                <span v-if="product?.PrixPromo" class="text-danger">
                                                    {{ formatPrice(convertPrice(product.PrixPromo), selectedDevise.symbol, selectedDevise.isSymbolBefore) }}
                                                </span>
                                                <br>
                                                <span v-if="product?.PrixPromo" class="text-muted text-decoration-line-through">
                                                    {{ formatPrice(convertPrice(product.Prix), selectedDevise.symbol, selectedDevise.isSymbolBefore) }}
                                                </span>
                                                <span v-else class="text-danger">
                                                    {{ formatPrice(convertPrice(product?.Prix), selectedDevise.symbol, selectedDevise.isSymbolBefore) }}
                                                </span>
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
                            </div>
                        </div>
                    </div>
                </div>
    
    
               
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
                <div class="modal-content" style="height: 500px; width:500px">
                    <div class="modal-body p-0">
                        <div class="">
                            <div class="" style="height: 100%; width:100%">
                                <img src="@/assets/img/bnm.jpg" alt="" class="img-fluid rounded-start" />
                            </div>
                           
                        </div>
                        <div class="px-8 py-8 py-lg-0">
                                <div class="position-absolute " style="top: -32px; right: -27px; background-color: red; padding: 4px; border-radius: 50%;">
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                    
                            </div>
                    </div>
                </div>
            </div>
        </div>  
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
    ...mapGetters("devise", ["selectedDevise", "getSelectedRate"]),
    recentProducts() {
    
      return this.$store.getters['recentProducts/recentProducts'];
    },
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
      productsAll:[],
      ProductMoment:"",
      ProductFlash:"",
      ProductPlusVendu:"",
      ProductSurCommande:"",
      startTime: null, 
      endTime: null, 
      hours: "00",
      minutes: "00",
      seconds: "00",

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
    await this.getTypesVentesAll()
    await this.getProductsAll()
    // await this.recupererProduits()
    this.startTime = new Date("2024-12-17T08:00:00"); // Exemple : début à 08:00
    this.endTime = new Date("2024-12-20T20:00:00");   // Exemple : fin à 20:00
    this.startCountdown();

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
    encodeId(id) {
    return btoa(id); // Encode en Base64
  },

    addProductToCart(product) {
      this.loadingItems[product?.id] = true;
      this.$store.dispatch('cart/addToCart', product);
    },
    addToRecent(product) {
      if (product) {
        // Ajouter le produit aux produits récents
        this.$store.dispatch('recentProducts/addProductToRecent', product);
      }
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
          slidesToShow: 5,
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
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: !0,
          dots: !1,
          arrows: !1,
          prevArrow:
            '<span class="slick-prev "><i class="feather-icon icon-chevron-left"></i></span>',
          nextArrow:
            '<span class="slick-next "><i class="feather-icon icon-chevron-right "></i></span>',
          responsive: [
            { breakpoint: 1400,settings: { slidesToShow: 4, slidesToScroll: 3 } },
            { breakpoint: 1200,settings: { slidesToShow: 3, slidesToScroll: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 425, settings: { slidesToShow: 2, slidesToScroll: 1 } },
          ],
        });
        $('.product-slider-four-column').slick({
          infinite: !0,
          slidesToShow: 6,
          slidesToScroll: 1,
          autoplay: !0,
          dots: !1,
          arrows: !1,
          prevArrow:
            '<span class="slick-prev "><i class="feather-icon icon-chevron-left"></i></span>',
          nextArrow:
            '<span class="slick-next "><i class="feather-icon icon-chevron-right "></i></span>',
          responsive: [
            { breakpoint: 1400,settings: { slidesToShow: 6, slidesToScroll: 5 } },
            { breakpoint: 1200,settings: { slidesToShow: 5, slidesToScroll: 4 } },
            { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 425, settings: { slidesToShow: 2, slidesToScroll: 1 } },
          ],
        });
        $('.sur_commande').slick({
          infinite: !0,
          slidesToShow: 6,
          slidesToScroll: 1,
          autoplay: !0,
          dots: !1,
          arrows: !1,
          prevArrow:
            '<span class="slick-prev "><i class="feather-icon icon-chevron-left"></i></span>',
          nextArrow:
            '<span class="slick-next "><i class="feather-icon icon-chevron-right "></i></span>',
          responsive: [
            { breakpoint: 1400,settings: { slidesToShow: 6, slidesToScroll: 4 } },
            { breakpoint: 1200,settings: { slidesToShow: 5, slidesToScroll: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 425, settings: { slidesToShow: 2, slidesToScroll: 1 } },
          ],
        });
        $('.vus_recemment').slick({
          infinite: !0,
          slidesToShow: 7,
          slidesToScroll: 1,
          autoplay: !0,
          dots: !1,
          arrows: !1,
          prevArrow:
            '<span class="slick-prev "><i class="feather-icon icon-chevron-left"></i></span>',
          nextArrow:
            '<span class="slick-next "><i class="feather-icon icon-chevron-right "></i></span>',
          responsive: [
            { breakpoint: 1400,settings: { slidesToShow: 7, slidesToScroll: 6 } },
            { breakpoint: 1200,settings: { slidesToShow: 5, slidesToScroll: 4 } },
            { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 425, settings: { slidesToShow: 2, slidesToScroll: 1 } },
          ],
        });
        
        $('.slide-one').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: !1,
          prevArrow:
            '<span class="slick-preve btn btn-primary" style="border:1px solid red;padding:6px;position:absolute;left:71px;bottom:-20px;z-index:1">Précédent<i class="feather-icon icon-chevron-left"></i></span>',
          nextArrow:
            '<span class="slick-nexte btn btn-primary" style="border:1px solid red;padding:6px 10px;position:absolute;left:180px;bottom:-20px;z-index:1">Suivant<i class="feather-icon icon-chevron-right "></i></span>',
        });

      })
    },
    async getCategoriesAll() {
      try {
        const response = await axios.get('liste/categories')
        if (response.data.status === "success") {
          this.CategoriesArray = response.data.data?.data
          ?.filter(c =>c.Parent === null)
          ?.slice(0, 7)
          
        }

      } catch (error) {
        console.log('error', error)
      }
    },
    async getMarquesAll() {
      try {
        const response = await axios.get('/marques')
        if (response.data.status === "success") {
          this.marquesArray = response.data?.data?.data
          .filter(m  =>m.IsActive === 1)

        }

      } catch (error) {
        console.log('error', error)
      }
    },
    async getTypesVentesAll() {
      try {
        const response = await axios.get('/type-ventes')
        if (response.data.status === "success") {
            console.log('response.data?.data',response.data?.data?.data)
          this.productsAll = response.data?.data?.data
          .filter(m  =>m.IsActive === 1)
           this.ProductMoment = this.productsAll.find(m => m.id === 1);
            this.ProductFlash = this.productsAll.find(m => m.id === 2);
            this.ProductPlusVendu = this.productsAll.find(m => m.id === 3);
            this.ProductSurCommande = this.productsAll.find(m => m.id === 4);

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
          this.productsArray = response.data.data?.data
          this.loading = false;
        }

      } catch (error) {
        console.log('error', error)
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
    formatPrice(price, symbol, isSymbolBefore = true) { 
      const formattedPrice = price.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, " ");  
      return isSymbolBefore ? `${symbol} ${formattedPrice}` : `${formattedPrice} ${symbol}`;
    },
    startCountdown() {
      const now = new Date();
      
      if (now < this.startTime) {
        this.hours = "00";
        this.minutes = "00";
        this.seconds = "00";
        console.log("Le compte à rebours n'a pas encore commencé.");
        return;
      }

      
      this.interval = setInterval(this.updateCountdown, 1000);
      this.updateCountdown(); 
    },
    updateCountdown() {
      const now = new Date();
      const timeDiff = this.endTime - now;

      if (timeDiff <= 0) {
        clearInterval(this.interval);
        this.hours = "00";
        this.minutes = "00";
        this.seconds = "00";
        console.log("Le temps est écoulé.");
        return;
      }

      const h = Math.floor(timeDiff / (1000 * 60 * 60));
      const m = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((timeDiff % (1000 * 60)) / 1000);

      this.hours = String(h).padStart(2, "0");
      this.minutes = String(m).padStart(2, "0");
      this.seconds = String(s).padStart(2, "0");
    },
  },
  beforeUnmount() {
    clearInterval(this.interval); 
  },

  beforeDestroy() {
  }

}
</script>
<style lang="css" scoped>
.slick-list .draggable{
    height: 100% !important;
}
.hero-slider{
    height: 40vh !important;
    width: 100%;
}
.hero-img-1 {
  
    height: 40vh !important;
    width: 100%;   
}

.categorie {
    height: 40vh !important;
    overflow-y: scroll;
}

.card-right {
    height: 40vh !important;

}
@media (max-width: 800px) {
    .hero-slider{
    height: 30vh !important;
    width: 100%;
}
    .hero-img-1 {
  
  height: 30vh !important;
  width: 100%;   
}

.categorie {
  height: 30vh !important;
  overflow-y: scroll;
}

.card-right {
  height: 30vh !important;

}
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