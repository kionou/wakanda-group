<template>
  <div>
    <LoadingSkeleton v-if="loading" style="z-index: 99999"></LoadingSkeleton>
    <main v-else>
      <section class="">
        <div class="row mt-3 height-slick">
          <div class="col-xl-2 col-md-3 d-none d-md-block d-lg-block pe-0">
            <div class="mb-1">
              <div
                class="card height-slick justify-content-between categorie"
                style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px"
              >
                <ul
                  class="nav-item dropdown align-items-center p-2 mb-0"
                  style="list-style: none"
                >
                  <span class="">
                    <h3 class="text-center mt-2" style="font-size:13px">
                      <b>
                        <i class="bi bi-list text-primary"> W </i> GAMMES DE PRODUITS
                      </b>
                    </h3>
                  </span>
                  <hr />
                  <li
                    v-for="(category, index) in CategoriesArray"
                    :key="index"
                    class="dropdown-menu-list"
                  >
                    <router-link
                      :to="{
                        name: 'list-categories',
                        params: { id: encodeId(category.id) },
                      }"
                      class="dropdown-item d-flex justify-content-between mb-1 py-1"
                    >
                      <div>
                        <img
                          :src="
                            category.Image !== null
                              ? category.Image
                              : defaultImageCategorie
                          "
                          :alt="category.NomCategorie"
                          width="24"
                          height="24"
                          style="width: 20px"
                        />

                        <span class="ms-1">{{ category.NomCategorie }}</span>
                      </div>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-8 col-md-9 col-sm-12 pe-0">
            <div class="hero-slider">
              <div
                class="hero-img-1"
                style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px"
                v-if="BannerPrincipale.length === 0"
              >
                <div
                  class="col-xxl-5 col-lg-7 col-md-8 text-xs-center"
                  style="width: 100%; height: 100%"
                >
                  <img :src="defaultBanner" alt="" style="width: 100%; height: 100%" />
                </div>
              </div>
              <div
                v-else
                class="hero-img-1"
                style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px"
                v-for="(banner, index) in BannerPrincipale"
                :key="index"
              >
                <div
                  class="col-xxl-5 col-lg-7 col-md-8 text-xs-center"
                  style="width: 100%; height: 100%"
                >
                  <img :src="banner.Banner" alt="" style="width: 100%; height: 100%" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-2 d-none d-xl-block pe-0">
            <div
              class="card ms-2 height-slick card-right"
              style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px"
            >
              <img :src="firstAccueilBanner" alt="" class="h-100" />
            </div>
          </div>
        </div>
      </section>
      <section class=" mt-1">
            <div class="container-fluid">
               <div class="row align-items-center">
                  <!-- col -->
                  <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                     <div class="card me-1 p-md-0 mb-2 text-center">
                        <div class="card-body  row align-items-end">
                          <div class="col-3">
                            <div class="mb-1">
                              <!-- svg -->
                             
                              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" class="bi bi-truck text-primary" viewBox="0 0 16 16">
                                 <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                              </svg>
                           </div>
                          </div>
                          <div class="col-9">
                            <!-- text -->
                            <h3 class="fs-5 mb-1">Livraison rapide</h3>
                            <p class="mb-0">livraison partout</p>
                          </div>
                           
                          
                        </div>
                     </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6  col-xs-12">
                     <div class="card p-md-0 me-1 mb-2 text-center">
                        <div class="card-body  row align-items-end">
                          <div class="col-3">
                            <div class="mb-1">
                              <!-- svg -->
                             
                              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" class="bi bi-clock text-primary" viewBox="0 0 16 16">
                                 <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
                                 <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
                              </svg>
                           </div>
                          </div>
                         <div class="col-9">
                          <!-- text -->
                          <h3 class="fs-5 mb-1">Support en ligne 24/7</h3>
                           <p class="mb-0">Disponible jours ouvrés.</p>
                         </div>
                           
                        </div>
                     </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6  col-xs-12">
                     <div class="card p-md-0 me-1 mb-2 text-center">
                        <div class="card-body  row align-items-end">
                          <div class="col-3">
                            <div class="mb-1">
                              <!-- svg -->
                              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" class="bi bi-arrow-repeat text-primary" viewBox="0 0 16 16">
                                 <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"></path>
                                 <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"></path>
                              </svg>
                           </div>
                          </div>
                          <div class="col-9">
                            <!-- text -->
                            <h3 class="fs-5 mb-1">Money return</h3>
                            <p class="mb-0"> Garantie</p>
                          </div>
                          
                          
                        </div>
                     </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6  col-xs-12">
                     <div class="card p-md-0 mb-2 text-center">
                        <div class="card-body  row align-items-end">
                          <div class="col-3">
                            <div class="mb-1">
                              <!-- svg -->
                              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" class="bi bi-gift text-primary" viewBox="0 0 16 16">
                                 <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z"></path>
                              </svg>
                           </div>
                          </div>
                          <div class="col-9">
                            <!-- text -->
                            <h3 class="fs-5 mb-1">Reduction</h3>
                            <p class="mb-0">
                              Des réductions wow !
                            
                           </p>
                          </div>
                          
                        </div>
                     </div>
                  </div>
               
               
               
               </div>
            </div>
         </section>
      <section class="mt-0 d-none d-lg-block">
        <div class="px-0">
          <div class="row align-items-center mb-2 bg-primary">
            <div
              class="col-xl-10 col-lg-110 col-md-10 mb-md-0 px-0"
              style="border-bottom: 1px solid var(--fc-primary)"
            >
              <div class="col-12 px-0 mb-0 p-1 ps-1">
                <!-- heading    -->
                <h3 class="align-items-center d-flex mb-0 h4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-layers text-white"
                  >
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                  <span class="ms-3 text-white text-uppercase" style="font-weight: bold"
                    >Nos Marques</span
                  >
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
                    <router-link
                      :to="{
                        name: 'list-marques',
                        params: { id: encodeId(marque.id) },
                      }"
                      class="text-decoration-none text-inherit"
                    >
                      <!-- style="border-radius: 50%; width: 120px; height: 120px;  overflow: hidden; display: flex; justify-content: center; align-items: center;  border:1px solid var(--fc-secondary)" -->
                      <div class="mb-0 position-relative">
                        <div
                          class="card-body p-0 d-flex flex-column justify-content-center align-items-center bg-white"
                          style="
                            border-radius: 50%;
                            width: 120px;
                            height: 120px;
                            overflow: hidden;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            border: 1px solid var(--fc-secondary);
                          "
                        >
                          <div
                            class="my-1 d-flex p-0 justify-content-center align-items-center"
                            style="width: 100px; height: 100px; border-radius: 50%"
                          >
                            <img
                              :src="
                                marque.Logo !== null || !marque.Logo.startsWith('https')
                                  ? marque.Logo
                                  : defaultImageCategorie
                              "
                              :alt="marque.Nom"
                              style="
                                border-radius: 50%;
                                width: 100%;
                                height: 100%;
                                overflow: hidden;
                                justify-content: center;
                                align-items: center;
                              "
                            />
                          </div>
                        </div>
                        <div class="card-footer text-center" style="width: 120px">
                          {{ marque.Nom }}
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

      <!-- section slick and marque 1111111111, moment  -->
      <section class="row mt-1">
        <div class="col-xl-3 col-lg-4 col-md-4">
          <div class="row" style="height: 100%">
            <div class="col-xl-12 mb-2">
              <div class="card me-1" style="height: 100%">
                <div
                  class="text-white card-header text-center p-0"
                  style="background-color: var(--fc-secondary)"
                >
                  <p style="border-bottom: 0" class="fs-3 fw-bold mb-0">OFFRE SPECIAL</p>
                </div>
                <div class="card-body p-3">
                  <div class="row" style="height: 100%">
                    <div class="col-lg-12 text-center">
                      <div class="slide-one">
                        <div
                          class="item"
                          style="
                            display: grid !important;
                            justify-content: center !important;
                          "
                          v-for="(product, index) in OffreSpecial?.produits"
                          :key="index"
                        >
                          <div class="col-lg-12 text-center text-lg-start">
                            <h4 class="fs-10">
                              <span> {{ product.produit?.NomProduit }}</span>
                            </h4>

                            <div
                              class="d-flex justify-content-center align-items-center mt-3"
                            >
                              <div>
                                <span
                                  v-if="product.produit?.PrixPromo"
                                  class="text-danger fs-5 fw-bold me-2"
                                >
                                  {{
                                    formatPrice(
                                      convertPrice(product.produit.PrixPromo),
                                      selectedDevise.symbol
                                    )
                                  }}
                                </span>

                                <span
                                  v-if="product.produit?.PrixPromo"
                                  class="text-muted text-decoration-line-through fs-5 fw-bold"
                                >
                                  {{
                                    formatPrice(
                                      convertPrice(product.produit.Prix),
                                      selectedDevise.symbol
                                    )
                                  }}
                                </span>
                                <span v-else class="text-danger fs-5 fw-bold">
                                  {{
                                    formatPrice(
                                      convertPrice(product.produit?.Prix),
                                      selectedDevise.symbol
                                    )
                                  }}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div
                            class="d-flex justify-content-center align-items-center"
                            style="width: 100%"
                          >
                            <div style="width: 150px; height: 150px">
                              <router-link
                                :to="{
                                  name: 'detail',
                                  params: { id: encodeId(product.produit?.id) },
                                }"
                                class="d-flex justify-content-center"
                                @click="addToRecent(product.produit)"
                              >
                                <img
                                  :src="
                                    product.produit?.PhotoCover
                                      ? product.produit?.PhotoCover
                                      : defaultImage
                                  "
                                  :alt="product.produit?.NomProduit"
                                  :title="product.produit?.NomProduit"
                                  style="width: 100%; height: 100%"
                                  class="img-fluid"
                                />
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
        <div class="col-xl-9 col-lg-8 col-md-8">
          <!-- section new product start -->

          <div class="row" v-if="NewProductArray?.length !== 0">
            <!-- col -->

            <div class="col-xl-12 col-lg-12 col-md-12 mb-1 mb-md-0">
              <div class="mb-3 product-content">
                <div
                  class="mb-4"
                  style="
                    border-bottom: 1px solid var(--fc-primary);
                    width: 100% !important;
                  "
                >
                  <h3
                    class="mb-0 pb-2 pt-1 ps-2 text-white bg-primary row align-items-center"
                    style="width: 100% !important"
                  >
                    <router-link
                      :to="{
                        name: 'type-detail',
                        params: { id: encodeId('new') },
                      }"
                      class="text-white col-xl-10 col-md-8"
                      title="Voir plus"
                      style="border-radius: 0px !important; font-size: 20px"
                    >
                      Les nouveaux produits</router-link
                    >
                    <div
                      class="col-xl-2 col-md-4 d-none d-sm-block text-end"
                      style="cursor: pointer"
                      @click="
                        $router.push({
                          path: `/type-detail/${encodeId('new')}`,
                        })
                      "
                    >
                      <div style="font-size: 14px" class="me-3">
                        VOIR PLUS <i class="bi bi-arrow-right"></i>
                      </div>
                    </div>
                  </h3>
                </div>

                <div class="product-slider-four-columns">
                  <div
                    class="item"
                    v-for="(product, index) in NewProductArray"
                    :key="index"
                  >
                    <!-- card -->
                    <div class="card card-product h-100">
                      <div class="card-body position-relative p-1">
                        <div
                          class="text-center position-relative d-flex justify-content-center"
                        >
                          <div class="position-absolute top-0 start-0">
                            <span
                              v-if="product?.PrixPromo"
                              class="badge bg-success text-white"
                            >
                              -{{ calculateDiscount(product?.Prix, product?.PrixPromo) }}%
                            </span>
                          </div>
                          <!-- img -->
                          <div>
                            <router-link
                              :to="{
                                name: 'detail',
                                params: { id: encodeId(product?.id) },
                              }"
                              @click="addToRecent(product)"
                            >
                              <img
                                :src="
                                  product?.PhotoCover ? product?.PhotoCover : defaultImage
                                "
                                :alt="product?.NomProduit"
                                :title="product?.NomProduit"
                                style="width: 150px; height: auto"
                                class="mb-3 img-fluid"
                              />
                            </router-link>
                          </div>

                          <!-- action btn -->
                        </div>
                        <!-- title -->
                        <h2 class="fs-6">
                          <router-link
                            :to="{
                              name: 'detail',
                              params: { id: encodeId(product?.id) },
                            }"
                            class="text-inherit text-decoration-none"
                            @click="addToRecent(product)"
                            >{{ product?.NomProduit }}
                          </router-link>
                        </h2>
                        <div
                          class="d-flex justify-content-between align-items-center mt-3"
                        >
                          <div>
                            <span v-if="product?.PrixPromo" class="text-danger">
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
                              class="text-muted text-decoration-line-through"
                            >
                              {{
                                formatPrice(
                                  convertPrice(product.Prix),
                                  selectedDevise.symbol
                                )
                              }}
                            </span>
                            <span v-else class="text-danger">
                              {{
                                formatPrice(
                                  convertPrice(product?.Prix),
                                  selectedDevise.symbol
                                )
                              }}
                            </span>
                          </div>
                        </div>
                        <div class="prix">
                          <p class="mb-0">
                            <span
                              v-if="product?.magasins_sum_quantite_reel !== null"
                              class="badge bg-success text-white"
                              >Disponible</span
                            >
                            <span v-else class="badge bg-danger text-white"
                              >Pas disponible</span
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
                            class="text-uppercase small btn-success"
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- section new product end -->
        </div>
      </section>
      <!-- section slick and marque 222222, moment  -->
      <section class="row mt-2">
        <div class="col-xl-9 col-lg-8 col-md-8">
          <!-- section new product start -->
          <!-- section new product end -->

          <!-- section moment start -->
          <section class="">
            <div class="mb-1 product-content">
              <div
                class="mb-4"
                style="border-bottom: 1px solid var(--fc-primary); width: 100% !important"
              >
                <h3
                  class="mb-0 pb-2 pt-1 ps-2 text-white bg-primary row align-items-center text-uppercase"
                  style="width: 100% !important"
                >
                  <router-link
                    :to="{
                      name: 'type-detail',
                      params: { id: encodeId(ProductMoment?.id) },
                    }"
                    class="text-white col-xl-10 col-md-8 col-sm-6"
                    title="Voir plus"
                    style="border-radius: 0px !important; font-size: 20px"
                  >
                    {{ ProductMoment?.Nom }}</router-link
                  >
                  <div
                    class="col-xl-2 col-md-4 d-none d-sm-block text-end"
                    style="cursor: pointer"
                    @click="
                      $router.push({
                        path: `/type-detail/${encodeId(ProductMoment?.id)}`,
                      })
                    "
                  >
                    <div style="font-size: 14px" class="me-3">
                      VOIR PLUS <i class="bi bi-arrow-right"></i>
                    </div>
                  </div>
                </h3>
              </div>
              <div class="product-slider-four-columns">
                <div
                  class="item"
                  v-for="(product, index) in ProductMoment?.produits"
                  :key="index"
                >
                  <!-- card -->
                  <div class="card card-product h-100">
                    <div class="card-body position-relative p-1">
                      <div
                        class="text-center position-relative d-flex justify-content-center"
                      >
                        <div class="position-absolute top-0 start-0">
                          <span
                            v-if="product.produit?.PrixPromo"
                            class="badge bg-success text-white"
                          >
                            -{{
                              calculateDiscount(
                                product.produit?.Prix,
                                product.produit?.PrixPromo
                              )
                            }}%
                          </span>
                        </div>
                        <!-- img -->
                        <div>
                          <router-link
                            :to="{
                              name: 'detail',
                              params: { id: encodeId(product.produit?.id) },
                            }"
                            @click="addToRecent(product.produit)"
                          >
                            <img
                              :src="
                                product.produit?.PhotoCover
                                  ? product.produit?.PhotoCover
                                  : defaultImage
                              "
                              :alt="product.produit?.NomProduit"
                              :title="product.produit?.NomProduit"
                              style="width: 200px; height: auto"
                              class="mb-3 img-fluid"
                            />
                          </router-link>
                        </div>

                        <!-- action btn -->
                      </div>
                      <!-- title -->
                      <h2 class="fs-6">
                        <router-link
                          :to="{
                            name: 'detail',
                            params: { id: encodeId(product.produit?.id) },
                          }"
                          class="text-inherit text-decoration-none"
                          @click="addToRecent(product.produit)"
                          >{{ product.produit?.NomProduit }}
                        </router-link>
                      </h2>
                      <div class="d-flex justify-content-between align-items-center mt-3">
                        <div class="">
                          <span v-if="product.produit?.PrixPromo" class="text-danger">
                            {{
                              formatPrice(
                                convertPrice(product.produit.PrixPromo),
                                selectedDevise.symbol
                              )
                            }}
                          </span>
                          <br />
                          <span
                            v-if="product.produit?.PrixPromo"
                            class="text-muted text-decoration-line-through"
                          >
                            {{
                              formatPrice(
                                convertPrice(product.produit.Prix),
                                selectedDevise.symbol
                              )
                            }}
                          </span>
                          <span v-else class="text-danger">
                            {{
                              formatPrice(
                                convertPrice(product.produit?.Prix),
                                selectedDevise.symbol
                              )
                            }}
                          </span>
                        </div>
                      </div>
                      <div class="prix">
                        <p class="mb-0">
                          <span
                            v-if="product?.produit?.magasins_sum_quantite_reel !== null"
                            class="badge bg-success text-white"
                            >Disponible</span
                          >
                          <span v-else class="badge bg-danger text-white"
                            >Pas disponible</span
                          >
                        </p>
                        <span
                          v-if="
                            product?.produit?.magasins_sum_quantite_reel === null ||
                            product?.produit?.magasins_sum_quantite_reel === 0
                          "
                          class="text-uppercase small Icons"
                          disabled
                        >
                          <div class="icon-cards" disabled>
                            <div v-if="loadingItems[product?.produit?.id]">
                              <LoaderBtn class="loadingbtn"></LoaderBtn>
                            </div>
                            <div v-else>
                              <i class="bi bi-cart2 fs-4"></i>
                            </div>
                          </div>
                        </span>

                        <span
                          v-else
                          class="text-uppercase small btn-success"
                          @click="addProductToCart(product?.produit)"
                          :disabled="loadingItems[product?.produit?.id]"
                        >
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
          </section>
          <!-- section moment end  -->
        </div>
        <div class="col-xl-3 col-lg-4 col-md-4">
          <div class="row ms-2" style="height: 70%">
            <div class="col-xl-12 mb-2">
              <a
                href="#"
                style="border-radius: 0px !important; font-size: 16px; padding: 5px 0"
                class="nav-link active d-flex justify-content-center align-items-center bg-primary text-uppercase"
                id="nav-fruitsandveg-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-fruitsandveg"
                role="tab"
                aria-controls="nav-fruitsandveg"
                aria-selected="true"
              >
                <span class="d-flex text-white">
                  <!-- <div v-if="days !== '00'"></div> -->
                  <div class="heure">{{ countdownData.promo?.days }}</div>
                  J
                  <div class="heure">{{ countdownData.promo?.hours }}</div>
                  H
                  <div class="heure">{{ countdownData.promo?.minutes }}</div>
                  M
                  <div class="heure">{{ countdownData.promo?.seconds }}</div>
                  S
                </span>
              </a>
            </div>
            <div class="col-xl-12 mb-2">
              <div class="card me-1" style="width: 100%; height: auto">
                <img
                  :src="firstPromoBanner?.Banner"
                  alt="promo wakanda produit"
                  style="height: 370px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="mb-3">
        <div class="row">
          <!-- col -->

          <div class="col-xl-12 col-lg-12 col-md-12 mb-2 mb-md-0">
            <section class="mb-3">
              <!-- row -->
              <div
                class="row align-items-center bg-primary text-white mb-2"
                style="border: 1px solid red"
              >
                <div class="col-xl-2 col-md-3 col-lg-4">
                  <div class="mb-xl-0">
                    <h3
                      class="mb-0 d-flex justify-content-center align-items-center text-uppercase"
                      style="cursor: pointer"
                      @click="
                        $router.push({
                          path: `/type-detail/${encodeId(ProductFlash?.id)}`,
                        })
                      "
                    >
                      <img src="@/assets/img/flash.png" alt="" style="width: 13%" />
                      <span class="text-white"> {{ ProductFlash?.Nom }}</span>
                    </h3>
                  </div>
                </div>
                <div class="col-xl-9 col-md-7 col-lg-6">
                  <div>
                    <!-- nav -->
                    <nav>
                      <ul
                        class="nav justify-content-center nav-pills nav-scroll border-bottom-0 gap-1 text-uppercase"
                        id="nav-tab"
                        role="tablist"
                      >
                        <!-- nav item -->
                        <li class="nav-item">
                          <!-- nav link -->
                          <a
                            href="#"
                            style="border-radius: 0px !important; font-size: 16px"
                            class="nav-link active d-flex"
                            id="nav-fruitsandveg-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-fruitsandveg"
                            role="tab"
                            aria-controls="nav-fruitsandveg"
                            aria-selected="true"
                          >
                            Termine dans
                            <span class="d-flex">
                              <!-- <div v-if="days !== '00'"></div> -->
                              <div class="heure">
                                {{ countdownData.flash.days }}
                              </div>
                              j
                              <div class="heure">
                                {{ countdownData.flash.hours }}
                              </div>
                              h
                              <div class="heure">
                                {{ countdownData.flash.minutes }}
                              </div>
                              m
                              <div class="heure">
                                {{ countdownData.flash.seconds }}
                              </div>
                              s
                            </span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>

                <div
                  class="col-xl-1 col-md-2 col-lg-2 d-none d-sm-block"
                  style="cursor: pointer"
                  @click="
                    $router.push({
                      path: `/flash-promo/${encodeId(ProductFlash?.id)}`,
                    })
                  "
                >
                  <div>VOIR PLUS <i class="bi bi-arrow-right"></i></div>
                </div>
              </div>
              <!-- row -->
              <div class="row mt-1">
                <div class="col-12">
                  <!-- tab -->
                  <div class="tab-content" id="nav-tabContent">
                    <div
                      class="tab-pane fade show active"
                      id="nav-fruitsandveg"
                      role="tabpanel"
                      aria-labelledby="nav-fruitsandveg-tab"
                      tabindex="0"
                    >
                      <!-- row -->
                      <div
                        class="row g-4 row-cols-xl-6 row-cols-lg-6 row-cols-lg-6 row-cols-2 row-cols-md-3"
                      >
                        <div
                          class="col mt-3"
                          v-for="(product, index) in ProductFlash?.produits"
                          :key="index"
                        >
                          <!-- card -->
                          <div class="card card-product-v2 h-100">
                            <div class="card-body position-relative p-1">
                              <!-- badge -->
                              <div class="text-center position-relative">
                                <div class="position-absolute top-0 start-0">
                                  <span
                                    v-if="product.produit?.PrixPromo"
                                    class="badge bg-success text-white"
                                  >
                                    -{{
                                      calculateDiscount(
                                        product.produit?.Prix,
                                        product.produit?.PrixPromo
                                      )
                                    }}%
                                  </span>
                                </div>
                                <!-- img -->
                                <router-link
                                  :to="{
                                    name: 'detail',
                                    params: {
                                      id: encodeId(product.produit?.id),
                                    },
                                  }"
                                  @click="addToRecent(product.produit)"
                                >
                                  <img
                                    :src="
                                      product.produit?.PhotoCover
                                        ? product.produit?.PhotoCover
                                        : defaultImage
                                    "
                                    :alt="product.produit?.NomProduit"
                                    :title="product.produit?.NomProduit"
                                    style="
                                      width: 100%;
                                      height: auto;
                                      max-height: 30% !important;
                                    "
                                    class="mb-3 img-fluid"
                                  />
                                </router-link>
                                <!-- action btn -->
                              </div>
                              <!-- title -->
                              <h2 class="fs-6">
                                <router-link
                                  :to="{
                                    name: 'detail',
                                    params: {
                                      id: encodeId(product.produit?.id),
                                    },
                                  }"
                                  class="text-inherit text-decoration-none"
                                  @click="addToRecent(product.produit)"
                                  >{{ product.produit?.NomProduit }}
                                </router-link>
                              </h2>

                              <!-- price -->
                              <div
                                class="d-flex justify-content-between align-items-center mt-3"
                              >
                                <div>
                                  <span
                                    v-if="product.produit?.PrixPromo"
                                    class="text-danger"
                                  >
                                    {{
                                      formatPrice(
                                        convertPrice(product.produit.PrixPromo),
                                        selectedDevise.symbol
                                      )
                                    }}
                                  </span>
                                  <br />
                                  <span
                                    v-if="product.produit?.PrixPromo"
                                    class="text-muted text-decoration-line-through"
                                  >
                                    {{
                                      formatPrice(
                                        convertPrice(product.produit.Prix),
                                        selectedDevise.symbol
                                      )
                                    }}
                                  </span>
                                  <span v-else class="text-danger">
                                    {{
                                      formatPrice(
                                        convertPrice(product.produit?.Prix),
                                        selectedDevise.symbol
                                      )
                                    }}
                                  </span>
                                </div>
                              </div>
                              <div class="prix">
                                <p class="mb-0">
                                  <span
                                    v-if="
                                      product?.produit?.magasins_sum_quantite_reel !==
                                      null
                                    "
                                    class="badge bg-success text-white"
                                    >Disponible</span
                                  >
                                  <span v-else class="badge bg-danger text-white"
                                    >Pas disponible</span
                                  >
                                </p>
                                <span
                                  v-if="
                                    product?.produit?.magasins_sum_quantite_reel ===
                                      null ||
                                    product?.produit?.magasins_sum_quantite_reel === 0
                                  "
                                  class="text-uppercase small Icons"
                                  disabled
                                >
                                  <div class="icon-cards" disabled>
                                    <div v-if="loadingItems[product?.produit?.id]">
                                      <LoaderBtn class="loadingbtn"></LoaderBtn>
                                    </div>
                                    <div v-else>
                                      <i class="bi bi-cart2 fs-4"></i>
                                    </div>
                                  </div>
                                </span>

                                <span
                                  v-else
                                  class="text-uppercase small btn-success"
                                  @click="addProductToCart(product?.produit)"
                                  :disabled="loadingItems[product?.produit?.id]"
                                >
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
            <section class="d-lg-block d-none">
              <div
                class="d-flex justify-content-center"
                v-if="countdownData.banner1?.seconds != '00'"
              >
                <a
                  href="#"
                  style="border-radius: 0px !important; font-size: 16px; padding: 5px 2px"
                  class="nav-link active d-flex justify-content-center align-items-center bg-primary text-uppercase"
                  id="nav-fruitsandveg-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-fruitsandveg"
                  role="tab"
                  aria-controls="nav-fruitsandveg"
                  aria-selected="true"
                >
                  <span class="d-flex text-white me-2">
                    <div class="heure">{{ countdownData.banner1?.days }}</div>
                    j
                    <div class="heure">{{ countdownData.banner1?.hours }}</div>
                    h
                    <div class="heure">
                      {{ countdownData.banner1?.minutes }}
                    </div>
                    m
                    <div class="heure">
                      {{ countdownData.banner1?.seconds }}
                    </div>
                    s
                  </span>
                </a>
              </div>

              <div class="row">
                <div class="col-12">
                  <div class="mb-4 bg-white rounded">
                    <div
                      class="p-4 d-lg-block col-7 border-1"
                      style="width: 100%; height: 40vh"
                    >
                      <img
                        :src="firstBanniere1Banner?.Banner"
                        alt=""
                        class="img-fluid"
                        style="height: 100% !important"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div class="row" v-if="ProductPlusVendu?.produits?.length !== 0">
              <!-- col -->

              <div class="col-xl-12 col-lg-12 col-md-12 mb-2 mb-md-0">
                <div class="mb-1 product-content">
                  <div
                    class="mb-4"
                    style="
                      border-bottom: 1px solid var(--fc-primary);
                      width: 100% !important;
                    "
                  >
                    <h3
                      class="mb-0 pb-2 pt-1 ps-2 text-white bg-primary row align-items-center text-uppercase"
                      style="width: 100% !important"
                    >
                      <router-link
                        :to="{
                          name: 'type-detail',
                          params: { id: encodeId(ProductPlusVendu?.id) },
                        }"
                        class="text-white col-xl-11 col-md-8"
                        title="Voir plus"
                        style="border-radius: 0px !important; font-size: 20px"
                      >
                        {{ ProductPlusVendu?.Nom }}</router-link
                      >
                      <div
                        class="col-xl-1 col-md-4 d-none d-sm-block text-end"
                        style="cursor: pointer"
                        @click="
                          $router.push({
                            path: `/type-detail/${encodeId(ProductPlusVendu?.id)}`,
                          })
                        "
                      >
                        <div style="font-size: 14px" class="me-3">
                          VOIR PLUS <i class="bi bi-arrow-right"></i>
                        </div>
                      </div>
                    </h3>
                  </div>

                  <div class="product-slider-four-column">
                    <div
                      class="item"
                      v-for="(product, index) in ProductPlusVendu?.produits"
                      :key="index"
                    >
                      <!-- card -->
                      <div class="card card-product h-100">
                        <div class="card-body position-relative p-1">
                          <div
                            class="text-center position-relative d-flex justify-content-center"
                          >
                            <div class="position-absolute top-0 start-0">
                              <span
                                v-if="product.produit?.PrixPromo"
                                class="badge bg-success text-white"
                              >
                                -{{
                                  calculateDiscount(
                                    product.produit?.Prix,
                                    product.produit?.PrixPromo
                                  )
                                }}%
                              </span>
                            </div>
                            <!-- img -->
                            <div>
                              <router-link
                                :to="{
                                  name: 'detail',
                                  params: { id: encodeId(product.produit?.id) },
                                }"
                                @click="addToRecent(product.produit)"
                              >
                                <img
                                  :src="
                                    product.produit?.PhotoCover
                                      ? product.produit?.PhotoCover
                                      : defaultImage
                                  "
                                  :alt="product.produit?.NomProduit"
                                  :title="product.produit?.NomProduit"
                                  style="width: 150px; height: auto"
                                  class="mb-3 img-fluid"
                                />
                              </router-link>
                            </div>

                            <!-- action btn -->
                          </div>
                          <!-- title -->
                          <h2 class="fs-6">
                            <router-link
                              :to="{
                                name: 'detail',
                                params: { id: encodeId(product.produit?.id) },
                              }"
                              class="text-inherit text-decoration-none"
                              @click="addToRecent(product.produit)"
                              >{{ product.produit?.NomProduit }}
                            </router-link>
                          </h2>
                          <div
                            class="d-flex justify-content-between align-items-center mt-3"
                          >
                            <div>
                              <span v-if="product.produit?.PrixPromo" class="text-danger">
                                {{
                                  formatPrice(
                                    convertPrice(product.produit.PrixPromo),
                                    selectedDevise.symbol
                                  )
                                }}
                              </span>
                              <br />
                              <span
                                v-if="product.produit?.PrixPromo"
                                class="text-muted text-decoration-line-through"
                              >
                                {{
                                  formatPrice(
                                    convertPrice(product.produit.Prix),
                                    selectedDevise.symbol
                                  )
                                }}
                              </span>
                              <span v-else class="text-danger">
                                {{
                                  formatPrice(
                                    convertPrice(product.produit?.Prix),
                                    selectedDevise.symbol
                                  )
                                }}
                              </span>
                            </div>
                          </div>
                          <div class="prix">
                            <p class="mb-0">
                              <span
                                v-if="
                                  product?.produit?.magasins_sum_quantite_reel !== null
                                "
                                class="badge bg-success text-white"
                                >Disponible</span
                              >
                              <span v-else class="badge bg-danger text-white"
                                >Pas disponible</span
                              >
                            </p>
                            <span
                              v-if="
                                product?.produit?.magasins_sum_quantite_reel === null ||
                                product?.produit?.magasins_sum_quantite_reel === 0
                              "
                              class="text-uppercase small Icons"
                              disabled
                            >
                              <div class="icon-cards" disabled>
                                <div v-if="loadingItems[product?.produit?.id]">
                                  <LoaderBtn class="loadingbtn"></LoaderBtn>
                                </div>
                                <div v-else>
                                  <i class="bi bi-cart2 fs-4"></i>
                                </div>
                              </div>
                            </span>

                            <span
                              v-else
                              class="text-uppercase small btn-success"
                              @click="addProductToCart(product?.produit)"
                              :disabled="loadingItems[product?.produit?.id]"
                            >
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

            <div class="row" v-if="ProductSurCommande?.produits?.length !== 0">
              <!-- col -->

              <div class="col-xl-12 col-lg-12 col-md-12 mb-2 mb-md-0">
                <div class="mb-3 product-content">
                  <div
                    class="mb-4 bg-primary"
                    style="
                      border-bottom: 1px solid var(--fc-primary);
                      width: 100% !important;
                    "
                  >
                    <h3
                      class="mb-0 pb-2 pt-1 ps-2 text-white bg-primary row align-items-center text-uppercase"
                      style="width: 100% !important"
                    >
                      <router-link
                        :to="{
                          name: 'type-detail',
                          params: { id: encodeId(ProductSurCommande?.id) },
                        }"
                        class="text-white col-xl-11 col-md-8"
                        title="Voir plus"
                        style="border-radius: 0px !important; font-size: 20px"
                      >
                        {{ ProductSurCommande?.Nom }}</router-link
                      >
                      <div
                        class="col-xl-1 col-md-4 d-none d-sm-block text-end"
                        style="cursor: pointer"
                        @click="
                          $router.push({
                            path: `/type-detail/${encodeId(ProductSurCommande?.id)}`,
                          })
                        "
                      >
                        <div style="font-size: 14px" class="me-3">
                          VOIR PLUS <i class="bi bi-arrow-right"></i>
                        </div>
                      </div>
                    </h3>
                  </div>

                  <div class="sur_commande">
                    <div
                      class="item"
                      v-for="(product, index) in ProductSurCommande?.produits"
                      :key="index"
                    >
                      <!-- card -->
                      <div class="card card-product h-100">
                        <div class="card-body position-relative p-1">
                          <div
                            class="text-center position-relative d-flex justify-content-center"
                          >
                            <div class="position-absolute top-0 start-0">
                              <span
                                v-if="product.produit?.PrixPromo"
                                class="badge bg-success text-white"
                              >
                                -{{
                                  calculateDiscount(
                                    product.produit?.Prix,
                                    product.produit?.PrixPromo
                                  )
                                }}%
                              </span>
                            </div>
                            <!-- img -->
                            <div>
                              <router-link
                                :to="{
                                  name: 'detail',
                                  params: { id: encodeId(product.produit?.id) },
                                }"
                                @click="addToRecent(product.produit)"
                              >
                                <img
                                  :src="
                                    product.produit?.PhotoCover
                                      ? product.produit?.PhotoCover
                                      : defaultImage
                                  "
                                  :alt="product.produit?.NomProduit"
                                  :title="product.produit?.NomProduit"
                                  style="width: 150px; height: auto"
                                  class="mb-3 img-fluid"
                                />
                              </router-link>
                            </div>

                            <!-- action btn -->
                          </div>
                          <!-- title -->
                          <h2 class="fs-6">
                            <router-link
                              :to="{
                                name: 'detail',
                                params: { id: encodeId(product.produit?.id) },
                              }"
                              class="text-inherit text-decoration-none"
                              @click="addToRecent(product.produit)"
                              >{{ product.produit?.NomProduit }}
                            </router-link>
                          </h2>
                          <div
                            class="d-flex justify-content-between align-items-center mt-3"
                          >
                            <p class="badge bg-success text-white mb-0">sur commande</p>

                            <div>
                              <span
                                class="text-uppercase small"
                                @click="addProductToCart(product?.produit)"
                                :disabled="loadingItems[product?.produit?.id]"
                              >
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
            <section class="d-lg-block d-none">
              <div
                class="d-flex justify-content-center"
                v-if="countdownData.banner2?.seconds !== '00'"
              >
                <a
                  href="#"
                  style="border-radius: 0px !important; font-size: 16px; padding: 5px 2px"
                  class="nav-link active d-flex justify-content-center align-items-center bg-primary text-uppercase"
                  id="nav-fruitsandveg-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-fruitsandveg"
                  role="tab"
                  aria-controls="nav-fruitsandveg"
                  aria-selected="true"
                >
                  <span class="d-flex text-white me-2 text-uppercase">
                    <!-- <div v-if="days !== '00'"></div> -->
                    <div class="heure">
                      {{ countdownData.banner2?.days }}
                    </div>
                    j
                    <div class="heure">
                      {{ countdownData.banner2?.hours }}
                    </div>
                    h
                    <div class="heure">
                      {{ countdownData.banner2?.minutes }}
                    </div>
                    m
                    <div class="heure">
                      {{ countdownData.banner2?.seconds }}
                    </div>
                    s
                  </span>
                </a>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="mb-4 bg-white rounded">
                    <div class="p-4 col-7 border-1" style="width: 100%; height: 40vh">
                      <img
                        :src="firstBanniere2Banner?.Banner"
                        alt=""
                        class="img-fluid"
                        style="height: 100% !important"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- <div class="row">
              <div class="col-xl-12 col-lg-12 col-md-12 mb-2 mb-md-0">
                <div class="mb-3 product-content">
                  <div
                    class="mb-4 bg-primary"
                    style="
                      border-bottom: 1px solid var(--fc-primary);
                      display: flex;
                      width: 100% !important;"
                  >
                    <div class="row" style="width: 101% !important">
                      <div class="col-11">
                        <h3
                          class="mb-0 pb-2 pt-1 ps-2 text-white bg-primary text-uppercase"
                        >
                          <router-link
                            to="/categories"
                            title="Voir plus"
                            class="text-white"
                            style="border-radius: 0px !important; font-size: 18px"
                          >
                            Les produits vus recécemment</router-link
                          >
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div class="vus_recemment">
                    <p v-if="recentProducts.length === 0">
                      Pas de produit vue pour l'instant
                    </p>
                    <div
                      v-else
                      class="item"
                      v-for="(product, index) in recentProducts"
                      :key="index"
                    >
                     
                      <div class="card card-product h-100">
                        <div class="card-body position-relative">
                          <div
                            class="text-center position-relative d-flex justify-content-center"
                          >
                            <div class="position-absolute top-0 start-0">
                              <span
                                v-if="product?.PrixPromo"
                                class="badge bg-success text-white"
                              >
                                -{{
                                  calculateDiscount(product?.Prix, product?.PrixPromo)
                                }}%
                              </span>
                            </div>
                            <div>
                              <router-link
                                :to="{
                                  name: 'detail',
                                  params: { id: encodeId(product?.id) },
                                }"
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
                                  style="width: 200px; height: auto"
                                  class="mb-3 img-fluid"
                                />
                              </router-link>
                            </div>
                          </div>
                          <h2 class="fs-6">
                            <router-link
                              :to="{
                                name: 'detail',
                                params: { id: encodeId(product?.id) },
                              }"
                              class="text-inherit text-decoration-none"
                              @click="addToRecent(product)"
                              >{{ product?.NomProduit }}
                            </router-link>
                          </h2>
                          <div
                            class="d-flex justify-content-between align-items-center mt-3"
                          >
                            <div>
                              <span v-if="product?.PrixPromo" class="text-danger">
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
                                class="text-muted text-decoration-line-through"
                              >
                                {{
                                  formatPrice(
                                    convertPrice(product.Prix),
                                    selectedDevise.symbol
                                  )
                                }}
                              </span>
                              <span v-else class="text-danger">
                                {{
                                  formatPrice(
                                    convertPrice(product?.Prix),
                                    selectedDevise.symbol
                                  )
                                }}
                              </span>
                            </div>
                          </div>
                          <div class="prix">
                            <p class="mb-0">
                              <span
                                v-if="product?.magasins_sum_quantite_reel !== null"
                                class="badge bg-success text-white"
                                >Disponible</span
                              >
                              <span v-else class="badge bg-danger text-white"
                                >Pas disponible</span
                              >
                            </p>
                            <span
                              v-if="
                                product?.magasins_sum_quantite_reel === null ||
                                product?.produit?.magasins_sum_quantite_reel === 0
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
                              class="text-uppercase small btn-success"
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->
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
                <p class="mb-0">
                  Bienvenue chez Wakanda, votre destination en ligne pour une expérience
                  de shopping unique, inspirée par l’innovation, la diversité et la
                  qualité. Chez Wakanda, nous croyons en un futur où la technologie et la
                  culture se rencontrent pour offrir des produits qui résonnent avec tous
                  les aspects de votre vie moderne. Fondé avec une passion pour
                  l'excellence et un engagement à fournir des produits de haute qualité,
                  Wakanda est bien plus qu'une simple boutique en ligne. Nous sommes un
                  espace où chaque client peut trouver des articles soigneusement
                  sélectionnés qui correspondent à leurs besoins, leur style et leurs
                  valeurs. Notre objectif est de vous offrir une vaste gamme de produits
                  allant de la mode aux articles électroniques, en passant par les
                  accessoires et les gadgets innovants.
                </p>
              </div>
            </div>
            <!-- col -->
            <div class="col-md-6">
              <div>
                <!-- img -->
                <img
                  src="@/assets/img/propos.png"
                  alt=""
                  class="img-fluid rounded"
                  style="height: auto !important ; width: 100% !important"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="bg-white border-top" style="background: url(@/assets/images/svg-graphics/pattern.svg) no-repeat; background-size: cover; background-position: center">
            <div class="container py-4">
               <!-- row -->
               <div class="row">
                  <div class="offset-lg-1 col-lg-10">
                     <div class="row align-items-center">
                        <!-- col -->
                        <div class="col-md-6">
                           <div class="text-dark mt-8 mt-lg-0">
                              
                              <h2 class="h2 text-dark my-4">Inscrivez-vous gratuitement à notre newsletter</h2>
                              <p class="text-muted">
                                Inscrivez-vous maintenant pour recevoir les dernières mises à jour sur les
                                 promotions et les coupons.Ne vous inquiétez pas, nous ne spammons pas !

                              </p>
                              <!-- form -->
                             
                           </div>
                        </div>
                        <!-- col -->
                        <div class="col-md-6">
                           <div class="text-center">
                            <form class="row g-3 needs-validation" >
                                 <div class="col-xl-9 col-sm-8 col-xs-12">
                                    <!-- input -->
                                    <label for="emailAddress" class="form-label visually-hidden">Adresse email</label>
                                    <input type="email" v-model="step1.email" class="form-control text-dark" id="emailAddress" placeholder="Entrez votre adresse email" required />
                                    <div class="">
                                      <small v-if="v$.step1.email.$error">{{
                        v$.step1.email.$errors[0].$message
                      }}</small>
                      <small v-if="resultError['email']"
                        >{{ resultError["email"] }}
                      </small>
                                    </div>
                                 </div>
                                 <!-- btn -->
                                 <div class="col-xl-3 col-sm-4 col-xs-5">
                                    <!-- <button type="submit" @click.prevent="AbonnementNewsletters" class="btn btn-primary mb-3">S'abonner</button> -->
                                    <button
         class="btn btn-primary mb-3"
         :disabled="isButtonDisabled === true"
         @click.prevent="AbonnementNewsletters('news')"
        >
       
          <span
            class=""
            :disabled="loadingItems['news']"
          >
            <div v-if="loadingItems['news']" class="d-flex align-items-center">
              <LoaderBtn class="loadingbtn"></LoaderBtn>
              <span class="">loading...</span>
            </div>
            <div v-else>S'abonner</div>
          </span>
        </button>
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
       </section>
    </main>

    <!-- Modal -->

    <div class="modal fade" id="modal-subscribe" tabindex="-1" aria-hidden="true" v-if="countdownData.modal?.seconds !== '00'">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content" style="height: auto; width: 500px">
          <div class="modal-body p-0">
            <div class="">
              <a
                href="#"
                style="border-radius: 0px !important; font-size: 16px; padding: 5px 2px"
                class="nav-link active text-white d-flex justify-content-center align-items-center bg-primary text-uppercase"
                id="nav-fruitsandveg-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-fruitsandveg"
                role="tab"
                aria-controls="nav-fruitsandveg"
                aria-selected="true"
              >
                Termine dans
                <span class="d-flex text-white me-2">
                  <!-- <div v-if="days !== '00'"></div> -->
                  <div class="heure">{{ countdownData.modal?.days }}</div>
                  j
                  <div class="heure">{{ countdownData.modal?.hours }}</div>
                  h
                  <div class="heure">{{ countdownData.modal?.minutes }}</div>
                  m
                  <div class="heure">{{ countdownData.modal?.seconds }}</div>
                  s
                </span>
              </a>
              <div class="" style="height: 100%; width: 100%">
                <img
                  v-if="firstModalBanner.Banner"
                  :src="firstModalBanner.Banner"
                  alt=""
                  class="img-fluid rounded-start"
                />
                <div
                  v-else
                  style="height: 250px; width: 100%"
                  class="d-flex justify-content-center align-items-center"
                >
                  <img
                    src="@/assets/gif/loader.gif"
                    alt=""
                    class="img-fluid rounded"
                    height="100"
                    width="100"
                  />
                </div>
              </div>
            </div>
            <div class="px-8 py-0 py-lg-0">
              <div
                class="position-absolute"
                style="
                  top: -36px;
                  right: -54px;
                  background-color: red;
                  padding: 4px;
                  border-radius: 50%;
                "
              >
                <button
                  type="button"
                  class="btn text-white d-lg-block d-none"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  X
                </button>
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
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <!-- img slide -->
                <div class="product productModal" id="productModal">
                  <div
                    class="zoom"
                    onmousemove="zoom(event)"
                    style="
                      background-image: url(@/assets/images/products/product-single-img-1.jpg);
                    "
                  >
                    <!-- img -->
                    <img src="@/assets/images/products/product-single-img-1.jpg" alt="" />
                  </div>
                  <div>
                    <div
                      class="zoom"
                      onmousemove="zoom(event)"
                      style="
                        background-image: url(@/assets/images/products/product-single-img-2.jpg);
                      "
                    >
                      <!-- img -->
                      <img
                        src="@/assets/images/products/product-single-img-2.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div>
                    <div
                      class="zoom"
                      onmousemove="zoom(event)"
                      style="
                        background-image: url(@/assets/images/products/product-single-img-3.jpg);
                      "
                    >
                      <!-- img -->
                      <img
                        src="@/assets/images/products/product-single-img-3.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div>
                    <div
                      class="zoom"
                      onmousemove="zoom(event)"
                      style="
                        background-image: url(@/assets/images/products/product-single-img-4.jpg);
                      "
                    >
                      <!-- img -->
                      <img
                        src="@/assets/images/products/product-single-img-4.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <!-- product tools -->
                <div class="product-tools">
                  <div class="thumbnails row g-3" id="productModalThumbnails">
                    <div class="col-3 tns-nav-active">
                      <div class="thumbnails-img">
                        <!-- img -->
                        <img
                          src="@/assets/images/products/product-single-img-1.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="col-3">
                      <div class="thumbnails-img">
                        <!-- img -->
                        <img
                          src="@/assets/images/products/product-single-img-2.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="col-3">
                      <div class="thumbnails-img">
                        <!-- img -->
                        <img
                          src="@/assets/images/products/product-single-img-3.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="col-3">
                      <div class="thumbnails-img">
                        <!-- img -->
                        <img
                          src="@/assets/images/products/product-single-img-4.jpg"
                          alt=""
                        />
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
                      <i class="bi bi-star-half"></i></small
                    ><a href="#" class="ms-2">(30 reviews)</a>
                  </div>
                  <div class="fs-4">
                    <span class="fw-bold text-dark">$32</span>
                    <span class="text-decoration-line-through text-muted">$35</span
                    ><span><small class="fs-6 ms-2 text-danger">26% Off</small></span>
                  </div>
                  <hr class="my-6" />
                  <div class="mb-4">
                    <button type="button" class="btn btn-outline-secondary">250g</button>
                    <button type="button" class="btn btn-outline-secondary">500g</button>
                    <button type="button" class="btn btn-outline-secondary">1kg</button>
                  </div>
                  <div>
                    <!-- input -->
                    <!-- input -->
                    <div class="input-group input-spinner">
                      <input
                        type="button"
                        value="-"
                        class="button-minus btn btn-sm"
                        data-field="quantity"
                      />
                      <input
                        type="number"
                        step="1"
                        max="10"
                        value="1"
                        name="quantity"
                        class="quantity-field form-control-sm form-input"
                      />
                      <input
                        type="button"
                        value="+"
                        class="button-plus btn btn-sm"
                        data-field="quantity"
                      />
                    </div>
                  </div>
                  <div class="mt-3 row justify-content-start g-2 align-items-center">
                    <div class="col-lg-4 col-md-5 col-6 d-grid">
                      <!-- button -->
                      <!-- btn -->
                      <button type="button" class="btn btn-primary">
                        <i class="feather-icon icon-shopping-bag me-2"></i>Add to cart
                      </button>
                    </div>
                    <div class="col-md-4 col-5">
                      <!-- btn -->
                      <a
                        class="btn btn-light"
                        href="#"
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        aria-label="Compare"
                        ><i class="bi bi-arrow-left-right"></i
                      ></a>
                      <a
                        class="btn btn-light"
                        href="#!"
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        aria-label="Wishlist"
                        ><i class="feather-icon icon-heart"></i
                      ></a>
                    </div>
                  </div>
                  <hr class="my-6" />
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
                            <small
                              >01 day shipping.<span class="text-muted"
                                >( Free pickup today)</span
                              ></small
                            >
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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import $ from "jquery";
import "slick-carousel";
import LoadingSkeleton from "@/components/others/loader/LoadingSkeleton.vue";
import defaultImage from "@/assets/images/products/product-img-2.jpg";
import defaultImageCategorie from "@/assets/img/logo_mobile.png";
import { mapActions, mapGetters } from "vuex";
import { useToast } from "vue-toastification";
import LoaderBtn from "@/components/others/loader/loaderbtn.vue";
import defaultBanner from "@/assets/img/banner_default.jpg";
import axios from "@/lib/axiosConfig";
import useVuelidate from "@vuelidate/core";
import { require, lgmin, lgmax, ValidEmail } from "@/functions/rules";

export default {
  components: {
    LoadingSkeleton,
    LoaderBtn,
  },
  computed: {
    ...mapGetters("cart", ["alertMessage", "loading"]),
    ...mapGetters("devise", ["selectedDevise", "getSelectedRate"]),
    recentProducts() {
      return this.$store.getters["recentProducts/recentProducts"];
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
      isButtonDisabled: false,
      products: [],
      defaultImage: defaultImage,
      defaultBanner: defaultBanner,
      defaultImageCategorie: defaultImageCategorie,
      CategoriesArray: [],
      marquesArray: [],
      NewProductArray: [],
      productsArray: [],
      productsAll: [],
      BannerPrincipale: [],
      ProductMoment: "",
      ProductFlash: "",
      ProductPlusVendu: "",
      ProductSurCommande: "",
      ProduitNew: "",
      OffreSpecial: "",
      countdownData: {
        modal: { days: "00", hours: "00", minutes: "00", seconds: "00" },
        flash: { days: "00", hours: "00", minutes: "00", seconds: "00" },
        banner1: { days: "00", hours: "00", minutes: "00", seconds: "00" },
        banner2: { days: "00", hours: "00", minutes: "00", seconds: "00" },
        promo: { days: "00", hours: "00", minutes: "00", seconds: "00" },
      },
      intervals: {},
step1:{
  email:''
},
      firstAccueilBanner: "",
      firstModalBanner: "",
      firstBanniere1Banner: "",
      firstBanniere2Banner: "",
      firstPromoBanner: "",
      v$: useVuelidate(),
      error: "",
      resultError: {},

      images: [
        "@/assets/images/slider/hero-img-slider-1.jpg",
        "@/assets/images/slider/hero-img-slider-2.jpg",
        "@/assets/images/slider/hero-img-slider-3.jpg",
      ],
    };
  },
  validations: {
    step1: {
      email: { require, ValidEmail },
      
    },
  },
  async mounted() {
    await this.getBannerActiver();
    await this.getCategoriesAll();
    await this.getBannerPrincipale();
    await this.getMarquesAll();
    await this.getNewProducts();
    await this.getTypesVentesAll();
    await this.getProductsAll();

    // await this.recupererProduits()
  },
  watch: {
    loading(newVal) {
      if (newVal === false) {
        this.initSliders();
      }
    },
    alertMessage(newVal) {
      console.log("newVal", newVal);
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
      this.$store.dispatch("cart/addToCart", product);
    },
    addToRecent(product) {
      if (product) {
        // Ajouter le produit aux produits récents
        this.$store.dispatch("recentProducts/addProductToRecent", product);
      }
    },

    recupererProduits() {
      fetch("/data/products.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erreur lors du chargement des produits");
          }
          return response.json();
        })
        .then((data) => {
          this.products = data;
          this.loading = false;
        })
        .catch((error) => {
          console.error("Erreur :", error);
        });
    },
    truncateText(text, maxLength) {
      if (text.length > maxLength) {
        return text.substring(0, maxLength) + "..."; // Ajoute "..." à la fin si le texte est trop long
      }
      return text;
    },
    initSliders() {
      this.$nextTick(() => {
        $(".hero-slider").slick({
          infinite: !0,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: !0,
          dots: !0,
          arrows: !1,
        });
        $(".slider-8-columns").slick({
          infinite: !0,
          slidesToShow: 10,
          slidesToScroll: 1,
          autoplay: !0,
          dots: !1,
          arrows: !0,
          speed: 1e3,
          loop: !0,
          adaptiveHeight: !0,
          responsive: [
            {
              breakpoint: 1230,
              settings: { slidesToShow: 10, slidesToScroll: 4 },
            },
            {
              breakpoint: 1225,
              settings: { slidesToShow: 9, slidesToScroll: 4 },
            },
            {
              breakpoint: 1150,
              settings: { slidesToShow: 8, slidesToScroll: 4 },
            },
            {
              breakpoint: 1050,
              settings: { slidesToShow: 7, slidesToScroll: 3 },
            },
            {
              breakpoint: 900,
              settings: { slidesToShow: 6, slidesToScroll: 3 },
            },

            {
              breakpoint: 768,
              settings: { slidesToShow: 5, slidesToScroll: 2 },
            },
            {
              breakpoint: 640,
              settings: { slidesToShow: 4, slidesToScroll: 2 },
            },
            {
              breakpoint: 500,
              settings: { slidesToShow: 3, slidesToScroll: 1 },
            },
            {
              breakpoint: 380,
              settings: { slidesToShow: 2, slidesToScroll: 1 },
            },
          ],
          prevArrow:
            '<span class="slick-prev"><i class="feather-icon icon-chevron-left"></i></span>',
          nextArrow:
            '<span class="slick-next"><i class="feather-icon icon-chevron-right"></i></span>',
          // appendArrows: "#" + s + "-arrows",
        });
        $(".product-slider-four-columns").slick({
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
            {
              breakpoint: 1500,
              settings: { slidesToShow: 6, slidesToScroll: 2 },
            },
            {
              breakpoint: 1400,
              settings: { slidesToShow: 6, slidesToScroll: 2 },
            },
            {
              breakpoint: 1300,
              settings: { slidesToShow: 5, slidesToScroll: 2 },
            },
            {
              breakpoint: 1200,
              settings: { slidesToShow: 3, slidesToScroll: 2 },
            },
            {
              breakpoint: 768,
              settings: { slidesToShow: 3, slidesToScroll: 2 },
            },
            {
              breakpoint: 480,
              settings: { slidesToShow: 2, slidesToScroll: 1 },
            },
            {
              breakpoint: 425,
              settings: { slidesToShow: 2, slidesToScroll: 1 },
            },
          ],
        });
        $(".product-slider-four-column").slick({
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
            {
              breakpoint: 1500,
              settings: { slidesToShow: 7, slidesToScroll: 6 },
            },
            {
              breakpoint: 1400,
              settings: { slidesToShow: 7, slidesToScroll: 6 },
            },
            {
              breakpoint: 1300,
              settings: { slidesToShow: 6, slidesToScroll: 5 },
            },
            {
              breakpoint: 1200,
              settings: { slidesToShow: 3, slidesToScroll: 3 },
            },
            {
              breakpoint: 1000,
              settings: { slidesToShow: 3, slidesToScroll: 3 },
            },
            {
              breakpoint: 480,
              settings: { slidesToShow: 2, slidesToScroll: 1 },
            },
            {
              breakpoint: 425,
              settings: { slidesToShow: 2, slidesToScroll: 1 },
            },
          ],
        });
        $(".sur_commande").slick({
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
            {
              breakpoint: 1500,
              settings: { slidesToShow: 7, slidesToScroll: 6 },
            },
            {
              breakpoint: 1400,
              settings: { slidesToShow: 7, slidesToScroll: 6 },
            },
            {
              breakpoint: 1300,
              settings: { slidesToShow: 6, slidesToScroll: 5 },
            },
            {
              breakpoint: 1200,
              settings: { slidesToShow: 3, slidesToScroll: 3 },
            },
            {
              breakpoint: 1000,
              settings: { slidesToShow: 3, slidesToScroll: 3 },
            },
            {
              breakpoint: 480,
              settings: { slidesToShow: 2, slidesToScroll: 1 },
            },
            {
              breakpoint: 425,
              settings: { slidesToShow: 2, slidesToScroll: 1 },
            },
          ],
        });
        $(".vus_recemment").slick({
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
            {
              breakpoint: 1500,
              settings: { slidesToShow: 7, slidesToScroll: 6 },
            },
            {
              breakpoint: 1400,
              settings: { slidesToShow: 7, slidesToScroll: 6 },
            },
            {
              breakpoint: 1300,
              settings: { slidesToShow: 6, slidesToScroll: 5 },
            },
            {
              breakpoint: 1200,
              settings: { slidesToShow: 3, slidesToScroll: 3 },
            },
            {
              breakpoint: 1000,
              settings: { slidesToShow: 3, slidesToScroll: 3 },
            },
            {
              breakpoint: 480,
              settings: { slidesToShow: 2, slidesToScroll: 1 },
            },
            {
              breakpoint: 425,
              settings: { slidesToShow: 2, slidesToScroll: 1 },
            },
          ],
        });

        $(".slide-one").slick({
          dots: false,
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
      });
    },
    async getCategoriesAll() {
      try {
        const response = await axios.get("liste/categories");
        if (response.data.status === "success") {
          this.CategoriesArray = response.data.data?.data
            ?.filter((c) => c.Parent === null)
            ?.slice(0, 7);
        }
      } catch (error) {
        console.log("error", error);
      }
    },
    async getMarquesAll() {
      try {
        const response = await axios.get("/marques");
        if (response.data.status === "success") {
          this.marquesArray = response.data?.data?.data.filter((m) => m.IsActive === 1);
        }
      } catch (error) {
        console.log("error", error);
      }
    },
    async getBannerActiver() {
      try {
        const response = await axios.get("/banniere-pub-active/accueil");
        if (response.data.status === "success") {
          const data = response.data?.data;
          let zoneAccueil = [];
          let zoneModal = [];
          let zoneBanniere1 = [];
          let zoneBanniere2 = [];
          let zonePromo = [];
          data.forEach((item) => {
            switch (item.Zone) {
              case "ZONE PUB ACCUEIL":
                zoneAccueil.push(item);
                break;
              case "ZONE PUB MODAL":
                zoneModal.push(item);
                break;
              case "ZONE PUB BANNIERE 1":
                zoneBanniere1.push(item);
                break;
              case "ZONE PUB BANNIERE 2":
                zoneBanniere2.push(item);
                break;
              case "ZONE PUB PROMO":
                zonePromo.push(item);
                break;
            }
          });

          this.firstAccueilBanner = zoneAccueil[0]?.Banner || null;
          this.firstModalBanner = zoneModal[0] || null;
          this.firstBanniere1Banner = zoneBanniere1[0] || null;
          this.firstBanniere2Banner = zoneBanniere2[0] || null;
          this.firstPromoBanner = zonePromo[0] || null;

          this.startCountdown(
            "modal",
            new Date(this.firstModalBanner.DateDebut),
            new Date(this.firstModalBanner.DateFin)
          );
          this.startCountdown(
            "promo",
            new Date(this.firstPromoBanner.DateDebut),
            new Date(this.firstPromoBanner.DateFin)
          );
          this.startCountdown(
            "banner1",
            new Date(this.firstBanniere1Banner.DateDebut),
            new Date(this.firstBanniere1Banner.DateFin)
          );
          this.startCountdown(
            "banner2",
            new Date(this.firstBanniere2Banner.DateDebut),
            new Date(this.firstBanniere2Banner.DateFin)
          );
        }
      } catch (error) {
        console.log("error", error);
      }
    },
    async getBannerPrincipale() {
      try {
        const response = await axios.get("/banniere-active/principale");
        if (response.data.status === "success") {
          this.BannerPrincipale = response.data?.data;
        }
      } catch (error) {
        console.log("error", error);
      }
    },
    async getTypesVentesAll() {
      try {
        const response = await axios.get("/type-ventes");
        if (response.data.status === "success") {
          this.productsAll = response.data?.data?.data.filter((m) => m.IsActive === 1);
          this.ProductMoment = this.productsAll.find((m) => m.id === 1);
          this.ProductFlash = this.productsAll.find((m) => m.id === 2);
          this.ProductPlusVendu = this.productsAll.find((m) => m.id === 3);
          this.ProductSurCommande = this.productsAll.find((m) => m.id === 4);
          this.OffreSpecial = this.productsAll.find((m) => m.id === 6);

          // this.startTime = new Date(this.ProductFlash.DateDebut); // Exemple : début à 08:00
          //  this.endTime = new Date(this.ProductFlash.DateFin);   // Exemple : fin à 20:00
          // this.startCountdown();
          this.startCountdown(
            "flash",
            new Date(this.ProductFlash.DateDebut),
            new Date(this.ProductFlash.DateFin)
          );
        }
      } catch (error) {
        console.log("error", error);
      }
    },
    async getNewProducts() {
      try {
        const response = await axios.get("/produits/nouveau-gamme");
        if (response.data.status === "success") {
          this.NewProductArray = response.data?.data?.data;
        }
      } catch (error) {
        console.log("error", error);
      }
    },
    async getProductsAll() {
      const token =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2RhdGEud2FrYW5kYS5iZXN0L2FwaS9zeXN0ZW0vbG9naW4iLCJpYXQiOjE3MzAyNzYzODEsIm5iZiI6MTczMDI3NjM4MSwianRpIjoiVU5sN3J3RXBhTFZGdG1OaCIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.H40wgUqkMXolIzMq_zTz8Mg7Bp-QsyjbarTijztMzi4";
      try {
        const response = await axios.get("/produits", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.data.status === "success") {
          this.productsArray = response.data.data?.data;
          this.loading = false;
        }
      } catch (error) {
        console.log("error", error);
      }
    },
    async AbonnementNewsletters(modalId) {
   
       this.v$.step1.$touch();
      if (this.v$.$errors.length == 0) {
        this.loadingItems[modalId] = true;
        let DataUser = {
          Email: this.step1.email,
         
        };
        try {
          const response = await axios.post("/abonnements", DataUser);
          if (response.data.status === "success") {
            this.loadingItems[modalId] = false;
            this.isButtonDisabled = false;
            this.step1.email = "";
            this.v$.step1.$reset();
            this.toast.success("Votre abonnement a été effectué avec success.", {
              position: "top-right",
              timeout: 2000,
              closeOnClick: true,
            });
           
          } else {
          }
        } catch (error) {
          console.log("response.login", error);

          this.loadingItems[modalId] = false;
          
          if (error.response.data.status === "error") {
            return (this.error = error.response.data.message);
          } else {
          return
          }
        }
      } else {
        
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
      if (symbol === "CFA") {
        return `${formattedPrice} ${symbol}`;
      }
      return `${symbol} ${formattedPrice}`;
    },

    startCountdown(id, startDate, endDate) {
      const now = new Date();

      // Si la date actuelle est déjà après la fin
      if (now >= endDate) {
        this.countdownData[id] = {
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        };
        return;
      }

      // Nettoyez tout interval actif pour cet ID
      if (this.intervals[id]) {
        clearInterval(this.intervals[id]);
      }

      // Créez un nouvel interval pour cet ID
      this.intervals[id] = setInterval(() => {
        const now = new Date();
        const diff = endDate - now;

        if (diff <= 0) {
          clearInterval(this.intervals[id]);
          this.countdownData[id] = {
            days: "00",
            hours: "00",
            minutes: "00",
            seconds: "00",
          };
          return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        this.countdownData[id] = {
          days: days.toString().padStart(2, "0"),
          hours: hours.toString().padStart(2, "0"),
          minutes: minutes.toString().padStart(2, "0"),
          seconds: seconds.toString().padStart(2, "0"),
        };
      }, 1000);
    },
    stopCountdown(id) {
      if (this.intervals[id]) {
        clearInterval(this.intervals[id]);
        delete this.intervals[id];
      }
    },
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },

  beforeDestroy() {},
};
</script>
<style lang="css" scoped>
.slick-list .draggable {
  height: 100% !important;
}
.hero-slider {
  height: 45vh !important;
  width: 100%;
  margin-bottom: 10px !important;
}
.hero-img-1 {
  height: 45vh !important;
  width: 100%;
}

.categorie {
  height: 45vh !important;
  overflow-y: scroll;
  overflow-x: hidden;
}

.card-right {
  height: 45vh !important;
}
@media (max-width: 800px) {
  .hero-slider {
    height: 20vh !important;
    width: 100%;
  }
  .hero-img-1 {
    height: 20vh !important;
    width: 100%;
  }

  .categorie {
    height: 20vh !important;
    overflow-y: scroll;
  }

  .card-right {
    height: 20vh !important;
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
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
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
