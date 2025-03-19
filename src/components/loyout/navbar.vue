<template>
  <div class="">
    <header
      class="d-flex justify-content-center position-relative"
      style="width: 100%"
    >
      <div
        class=""
        style="
          background-color: white;
          position: fixed;
          width: 100%;
          border: 1px;
          z-index: 10;
          top: 0;
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        "
      >
        <!-- <div class="row mb-2  d-flex align-items-center bg-white  py-3"> -->
        <!-- <div class="col-xl-3 col-md-3 col-sm-12 ">
                  <div class="d-lg-flex align-items-center">
                     <a href="/">
                        <img src="@/assets/img/logo_wakanda.png" alt="" class="img-fluid" style="height: 50px !important;">
                     </a>
                  </div>
               </div> -->
        <!-- <div class="col-xl-9 col-md-9 col-sm-12">
   
   
                  <div class="row d-none d-md-flex d-lg-flex">
                     <div class="col-xl-7 col-md-7 col-sm-12  text-sm-center">
                        <p class="fs-6 mb-1 text-dark fw-bold">{{ $t('assistance.label')}} <span class=""
                              style="color:var(--fc-secondary)">{{ $t('assistance.value')}}</span> </p>
   
                     </div>
                     <div class="col-xl-5 col-sm-12 col-md-5 text-sm-center">
                        <p class="fs-6 mb-1 text-dark fw-bold">Contact :<span class=""
                              style="color:var(--fc-secondary)">+228 99 12 33 44 55</span> </p>
   
                     </div>
                  </div>
   
               </div> -->
        <!-- </div> -->

        <div class="container px-0">
          <div class="row align-items-center justify-content-center p-2 mt-0 mt-lg-0 bg-white">
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-3 d-lg-block fw-bold d-none d-sm-block"
            >
              <a href="/">
                <img
                  src="@/assets/img/logo_wakanda.png"
                  alt="logo"
                  class="img-fluid"
                  style="height: 50px !important"
                />
              </a>
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-9 col-sm-9">
  <div class="row align-items-center justify-content-end">
    <div class="col-8 d-sm-none">
      <a href="/">
        <img src="@/assets/img/logo_wakanda.png" alt="logo" style="height: 50px !important" />
      </a>
    </div>
    
    <!-- Barre de recherche - cachée sur mobile mais visible sur desktop -->
    <div class="col-7 col-xs-8 col-sm-8 col-md-10 col-lg-10 d-none d-md-block">
      <form action="#" class="me-2">
                    <div class="input-group">
                      <AutoComplete
                        v-model="selectedProduct"
                        optionLabel="NomProduit"
                        :suggestions="filteredProducts"
                        @complete="search"
                        style="width: 100%"
                        size="sm"
                        placeholder="Rechercher un produit..."
                      >
                        <template #option="slotProps">
                          <div
                            class="d-flex align-items-center"
                            @click="goToProductDetail(slotProps)"
                          >
                            <div class="d-flex align-items-center ms-2">
                              <img
                                :alt="slotProps.option.NomProduit"
                                :src="slotProps.option.PhotoCover"
                                style="
                                  width: 30px;
                                  height: 30px;
                                  object-fit: cover;
                                "
                                class="me-2"
                              />
                              <div>{{ slotProps.option.NomProduit }}</div>
                            </div>
                            <div class="fw-bold ms-2">
                              <!-- <div class="fw-bold">({{ slotProps.option?.Prix }})</div> -->
                              <div class="fw-bold">
                                (
                                {{
                                  formatPrice(
                                    convertPrice(slotProps.option?.Prix),
                                    selectedDevise.symbol,
                                    selectedDevise.isSymbolBefore
                                  )
                                }})
                              </div>
                            </div>
                          </div>
                        </template>

                        <template #header>
                          <div class="font-medium px-3 py-2">
                            Produits Disponibles
                          </div>
                        </template>
                      </AutoComplete>
                    </div>
                  </form>
    </div>
    <div class="col-2 col-xs-2 col-sm-1 col-md-1 col-lg-1 position-relative"
                  @mouseenter="showDropdown = true"
                  @mouseleave="showDropdown = false"
                >
                  <img
                    src="@/assets/img/search.png"
                    alt="search by picture"
                    class="cursor-pointer me-3"
                    style="height:30px; width:30px"
                  />

                  <!-- Dropdown de recherche par image avec transition -->
                  <Transition
                    enter-active-class="animate__animated animate__fadeIn"
                    leave-active-class="animate__animated animate__fadeOut"
                  >
                    <div
                      v-if="showDropdown"
                      class="dropdown-container position-absolute end-0 mt-1"
                    >
                      <!-- Triangle pointant vers l'icône -->
                      <div class="dropdown-arrow"></div>

                      <!-- Contenu du dropdown -->
                      <div
                        class="dropdown-content p-3 bg-white rounded shadow border"
                      >
                        <h5 class="mb-1">Recherche par image</h5>
                        <p class="text-muted small mb-1">
                          Trouvez ce que vous aimez à prix réduit sur Wakanda
                          grâce à la recherche par image.
                        </p>

                        <!-- Zone de drop -->
                        <div
                          class="drop-zone p-3 border border-2 border-dashed rounded text-center"
                          :class="{ 'border-primary bg-light': isDragging }"
                          @dragenter.prevent="isDragging = true"
                          @dragleave.prevent="isDragging = false"
                          @dragover.prevent
                          @drop.prevent="handleDrop"
                          @paste.prevent="handlePaste"
                        >
                          <div v-if="!previewImage">
                            <div class="mb-1">Faites glisser une image ici</div>
                            <div class="text-muted">ou</div>
                            <input
                              ref="fileInput"
                              type="file"
                              class="d-none"
                              accept="image/*"
                              @change="handleFileSelect"
                            />
                            <button
                              class="btn btn-primary"
                              @click="$refs.fileInput.click()"
                            >
                              Importez une photo
                            </button>
                          </div>

                          <!-- Prévisualisation de l'image -->
                          <div
                            v-else
                            class="preview-container mt-1 position-relative"
                          >
                            <div
                              style="
                                height: 250px;
                                width: 100%;
                                position: absolute;
                              "
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
                            <img
                              :src="previewImage"
                              alt="Preview"
                              class="img-fluid"
                              style="max-height: 330px"
                            />
                            <button
                              class="btn btn-sm btn-outline-danger"
                              @click="clearImage"
                            >
                              Supprimer
                            </button>
                          </div>
                        </div>

                        <div class="mt-1 text-muted small">
                          *Pour une recherche rapide, appuyez sur CTRL + V pour
                          coller une image
                        </div>
                      </div>
                    </div>
                  </Transition>
                </div>
    <!-- Icône de recherche visible uniquement sur mobile -->
    <div class="col-auto  d-md-none ms-3"  >
      <img
        src="@/assets/img/search2.png"
        alt="search"
        class="cursor-pointer"
        style="height: 23px; width: 23px"
        @click="toggleMobileSearch"
      />
    </div>
    
    <!-- Reste du code... -->
  </div>
  
  <!-- Barre de recherche mobile qui apparaît lors du clic sur l'icône -->
            <div 
              v-if="showMobileSearch" 
              class="mobile-search-container w-100 position-absolute bg-white py-2 px-3 shadow"
              style="left: 0; top: 60px; z-index: 1000;"
            >
              <div class="d-flex align-items-center">
                <div class="flex-grow-1">
                  <form action="#" class="me-2">
                    <div class="input-group">
                      <AutoComplete
                        v-model="selectedProduct"
                        optionLabel="NomProduit"
                        :suggestions="filteredProducts"
                        @complete="search"
                        style="width: 100%"
                        size="sm"
                        placeholder="Rechercher un produit..."
                      >
                        <template #option="slotProps">
                          <div
                            class="d-flex align-items-center"
                            @click="goToProductDetail(slotProps)"
                          >
                            <div class="d-flex align-items-center ms-2">
                              <img
                                :alt="slotProps.option.NomProduit"
                                :src="slotProps.option.PhotoCover"
                                style="
                                  width: 30px;
                                  height: 30px;
                                  object-fit: cover;
                                "
                                class="me-2"
                              />
                              <div>{{ slotProps.option.NomProduit }}</div>
                            </div>
                            <div class="fw-bold ms-2">
                              <!-- <div class="fw-bold">({{ slotProps.option?.Prix }})</div> -->
                              <div class="fw-bold">
                                (
                                {{
                                  formatPrice(
                                    convertPrice(slotProps.option?.Prix),
                                    selectedDevise.symbol,
                                    selectedDevise.isSymbolBefore
                                  )
                                }})
                              </div>
                            </div>
                          </div>
                        </template>

                        <template #header>
                          <div class="font-medium px-3 py-2">
                            Produits Disponibles
                          </div>
                        </template>
                      </AutoComplete>
                    </div>
                  </form>
                </div>
                <div class="ms-2">
                  <button class="btn btn-sm btn-outline-secondary" @click="toggleMobileSearch">
                    <i class="bi bi-x"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
            <div class="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block">
              <div class="row align-items-center" v-if="shouldShowNavbar">
                <div class="col-xl-6 col-md-5">
                  <div
                    ref="dropdownWrapper"
                    class="my-account--menuItem--1GDZChA"
                    @click="toggleDropdown"
                    style="align-items: center"
                  >
                    <span
                      class="comet-icon comet-icon-myaccount my-account--accountIcon--ECZEGeo"
                      ><svg
                        viewBox="0 0 1024 1024"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="false"
                        focusable="false"
                        data-spm-anchor-id="a2g0o.cart.header.i1.2f53378dWTbody"
                      >
                        <path
                          d="M512 126.357333a189.866667 189.866667 0 1 0 189.866667 189.866667 189.866667 189.866667 0 0 0-189.866667-189.866667z m-125.866667 189.866667a125.866667 125.866667 0 1 1 251.733334 0 125.866667 125.866667 0 0 1-251.733334 0zM512 650.666667c138.026667 0 236.074667 72.448 273.152 192H238.848c37.077333-119.552 135.146667-192 273.152-192z m0-64c-171.541333 0-298.325333 96.981333-339.349333 254.805333-9.002667 34.666667 18.346667 65.194667 51.093333 65.194667h576.512c32.768 0 60.096-30.506667 51.093333-65.194667C810.325333 683.648 683.52 586.666667 512 586.666667z"
                          data-spm-anchor-id="a2g0o.cart.header.i0.2f53378dWTbody"
                        ></path>
                      </svg>
                    </span>
                    <div class="my-account--text--2Yt_prE">
                      <span class="my-account--small--3ni1QHm">
                        {{ $t("inscription.item1") }} , {{ loggedInUser.nom }}
                      </span>
                    </div>
                    <span
                      class="comet-icon comet-icon-chevrondown32 base--responseIcon--3et2x1Z"
                      ><svg
                        viewBox="0 0 1024 1024"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="false"
                        focusable="false"
                      >
                        <path
                          d="M296.256 354.944l224 224 224-224a74.656 74.656 0 0 1 0 105.6l-197.6 197.6a37.344 37.344 0 0 1-52.8 0l-197.6-197.6a74.656 74.656 0 0 1 0-105.6z"
                        ></path></svg
                    ></span>
                  </div>
                </div>
                <div class="col-xl-1 col-md-1">
                  <div>
                    <div
                      v-if="isOpen"
                      class="comet-v2-popover-wrap"
                      style="position: relative"
                    >
                      <div
                        class="comet-v2-popover comet-v2-popover-show-arrow comet-v2-zoom-big-enter-done"
                        data-popper-placement="bottom"
                        style="position: absolute; top: 37px; left: -246px"
                        data-spm-anchor-id="a2g0o.cart.0.i10.2f53378dWTbody"
                      >
                        <div
                          class="comet-v2-popover-arrow"
                          data-popper-arrow="true"
                          style="position: absolute; left: 148.5px"
                        ></div>
                        <div
                          class="comet-v2-popover-body my-account--popupCls--1C1NFJ2"
                          style=""
                        >
                          <div class="comet-v2-popover-content">
                            <div class="my-account--accountWrap--2FBvnYE">
                              <div class="my-account--menuBox--3f9Nx8S">
                                <ul class="my-account--menuInfo--3YpLtBU mb-0">
                                  <li>
                                    <router-link to="/client">
                                      <span
                                        class="comet-icon comet-icon-orders my-account--icon--16yzkFW"
                                      >
                                        <svg
                                          viewBox="0 0 1024 1024"
                                          width="1em"
                                          height="1em"
                                          fill="currentColor"
                                          aria-hidden="false"
                                          focusable="false"
                                        >
                                          <path
                                            d="M189.866667 266.666667a76.8 76.8 0 0 1 76.8-76.8h70.250666a34.133333 34.133333 0 1 1 0 68.266666H266.666667a8.533333 8.533333 0 0 0-8.533334 8.533334v618.666666c0 4.693333 3.818667 8.533333 8.533334 8.533334h490.666666a8.533333 8.533333 0 0 0 8.533334-8.533334v-618.666666a8.533333 8.533333 0 0 0-8.533334-8.533334h-70.250666a34.133333 34.133333 0 1 1 0-68.266666H757.333333a76.8 76.8 0 0 1 76.8 76.8v618.666666a76.8 76.8 0 0 1-76.8 76.8h-490.666666a76.8 76.8 0 0 1-76.8-76.8v-618.666666z"
                                          ></path>
                                          <path
                                            d="M328.533333 202.666667A76.8 76.8 0 0 1 405.333333 125.866667h213.333334a76.8 76.8 0 0 1 76.8 76.8v42.666666a76.8 76.8 0 0 1-76.8 76.8H405.333333a76.8 76.8 0 0 1-76.8-76.8v-42.666666z m76.8-8.533334a8.533333 8.533333 0 0 0-8.533333 8.533334v42.666666c0 4.693333 3.818667 8.533333 8.533333 8.533334h213.333334a8.533333 8.533333 0 0 0 8.533333-8.533334v-42.666666a8.533333 8.533333 0 0 0-8.533333-8.533334H405.333333z"
                                          ></path>
                                          <path
                                            d="M362.666667 629.333333a32 32 0 0 1 32-32H554.666667v18.282667C554.666667 640.874667 534.186667 661.333333 508.949333 661.333333H394.666667a32 32 0 0 1-32-32z"
                                          ></path>
                                          <path
                                            d="M352 469.333333m32 0l256 0q32 0 32 32l0 0q0 32-32 32l-256 0q-32 0-32-32l0 0q0-32 32-32Z"
                                          ></path>
                                        </svg>
                                      </span>
                                      <span
                                        class="my-account--menuText--1km-qni"
                                        >Profil</span
                                      >
                                    </router-link>
                                  </li>
                                  <li>
                                    <router-link to="client/commandes">
                                      <span
                                        class="comet-icon comet-icon-orders my-account--icon--16yzkFW"
                                      >
                                        <svg
                                          viewBox="0 0 1024 1024"
                                          width="1em"
                                          height="1em"
                                          fill="currentColor"
                                          aria-hidden="false"
                                          focusable="false"
                                        >
                                          <path
                                            d="M189.866667 266.666667a76.8 76.8 0 0 1 76.8-76.8h70.250666a34.133333 34.133333 0 1 1 0 68.266666H266.666667a8.533333 8.533333 0 0 0-8.533334 8.533334v618.666666c0 4.693333 3.818667 8.533333 8.533334 8.533334h490.666666a8.533333 8.533333 0 0 0 8.533334-8.533334v-618.666666a8.533333 8.533333 0 0 0-8.533334-8.533334h-70.250666a34.133333 34.133333 0 1 1 0-68.266666H757.333333a76.8 76.8 0 0 1 76.8 76.8v618.666666a76.8 76.8 0 0 1-76.8 76.8h-490.666666a76.8 76.8 0 0 1-76.8-76.8v-618.666666z"
                                          ></path>
                                          <path
                                            d="M328.533333 202.666667A76.8 76.8 0 0 1 405.333333 125.866667h213.333334a76.8 76.8 0 0 1 76.8 76.8v42.666666a76.8 76.8 0 0 1-76.8 76.8H405.333333a76.8 76.8 0 0 1-76.8-76.8v-42.666666z m76.8-8.533334a8.533333 8.533333 0 0 0-8.533333 8.533334v42.666666c0 4.693333 3.818667 8.533333 8.533333 8.533334h213.333334a8.533333 8.533333 0 0 0 8.533333-8.533334v-42.666666a8.533333 8.533333 0 0 0-8.533333-8.533334H405.333333z"
                                          ></path>
                                          <path
                                            d="M362.666667 629.333333a32 32 0 0 1 32-32H554.666667v18.282667C554.666667 640.874667 534.186667 661.333333 508.949333 661.333333H394.666667a32 32 0 0 1-32-32z"
                                          ></path>
                                          <path
                                            d="M352 469.333333m32 0l256 0q32 0 32 32l0 0q0 32-32 32l-256 0q-32 0-32-32l0 0q0-32 32-32Z"
                                          ></path>
                                        </svg>
                                      </span>
                                      <span
                                        class="my-account--menuText--1km-qni"
                                        >Mes Commandes</span
                                      >
                                    </router-link>
                                  </li>
                                </ul>
                                <hr class="m-0" />
                                <div class="text-center mt-2">
                                  <button
                                    style="font-size: 13px"
                                    @click="logout"
                                    class="my-account--signin--RiPQVPB"
                                  >
                                    Déconnexion
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="text-center me-8">
                      <div class="dropdown">
                        <router-link to="/panier" class="text-reset">
                          <div class="lh-1">
                            <div class="position-relative d-inline-block">
                              <i class="bi bi-cart2 fs-4"></i>
                              <span
                                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                              >
                                {{ cartItemCount }}
                              </span>
                            </div>
                            <p class="mb-0 d-none d-xl-block small"></p>
                          </div>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-5 col-md-5">
                  <div class="navbar-container ms-3">
                    <div class="dropdown selectBox" ref="dropdownWrapper1" style="height:33px">
                      <a
                        ref="dropdownWrapper1"
                        class="dropdown-toggle selectValue text-reset show d-flex align-items-center"
                        href="javascript:void(0)"
                        @click="toggleDropdownLangage"
                      >
                        <i class="bi bi-globe2 fs-4"></i> &nbsp;
                        <!-- <img :src="currentFlag" alt="Flag" style="width: 24px; margin-left: 8px;"> -->
                        <span>{{ currentLanguage }}</span> &nbsp;
                        <span>({{ selectedDevise?.label }})</span>
                      </a>

                      <div class="es--wrap--RYjm1RT" v-if="isOpenLangage">
                        <div
                          class="es--contentWrap--ypzOXHr es--visible--12ePDdG"
                        >
                          <!-- <div class="form-item--title--1ZN23sl">Envoyez à</div>
                              <MazSelect label="" v-model="detected" :options="countriesOptions" v-slot="{ option  }"
                                 size="sm" rounded-size="md" color="secondary" autocomplete="off" search>
                                 <div class="d-flex align-items-center" @click.prevent="changeCountry(option)" style="
                                 padding-top: 0.5rem;
                                 padding-bottom: 0.5rem;
                                 width: 100% !important;
                                 gap: 1rem;
                              
                                 ">
                                    <MazAvatar size="0.4rem" :src="option.flag" />
                                    <strong>
                                       {{ option.code }}
                                    </strong>
                                 </div>
                              </MazSelect> -->

                          <div class="form-item--title--1ZN23sl">Langue</div>
                          <MazSelect
                            label=""
                            v-model="langage"
                            :options="LangageOptions"
                            v-slot="{ option }"
                            size="sm"
                            rounded-size="md"
                            color="secondary"
                            autocomplete="off"
                          >
                            <div
                              class="d-flex align-items-center"
                              @click="changeLanguage(option)"
                              style="
                                padding-top: 0.5rem;
                                padding-bottom: 0.5rem;
                                width: 100% !important;
                                gap: 1rem;
                              "
                            >
                              <MazAvatar size="0.4rem" :src="option.picture" />
                              <strong>
                                {{ option.label }}
                              </strong>
                            </div>
                          </MazSelect>

                          <div class="form-item--title--1ZN23sl">Devise</div>
                          <MazSelect
                            v-model="devise"
                            color="secondary"
                            secondary
                            :options="DeviesArray"
                            v-slot="{ option }"
                            size="sm"
                            rounded-size="md"
                            autocomplete="off"
                          >
                            <div
                              class="flex items-center"
                              style="
                                padding-top: 0.5rem;
                                padding-bottom: 0.5rem;
                                width: 100%;
                                gap: 1rem;
                              "
                              @click="updateDevise(option)"
                            >
                              {{ option.label }}
                            </div>
                          </MazSelect>

                          <!-- <div class="es--saveBtn--w8EuBuy">Enregistrer</div> -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row align-items-center" v-else>
                <div class="col-xl-5">
                  <div
                    ref="dropdownWrapper"
                    class="my-account--menuItem--1GDZChA"
                    @click="toggleDropdown"
                  >
                    <span
                      class="comet-icon comet-icon-myaccount my-account--accountIcon--ECZEGeo"
                      ><svg
                        viewBox="0 0 1024 1024"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="false"
                        focusable="false"
                        data-spm-anchor-id="a2g0o.cart.header.i1.2f53378dWTbody"
                      >
                        <path
                          d="M512 126.357333a189.866667 189.866667 0 1 0 189.866667 189.866667 189.866667 189.866667 0 0 0-189.866667-189.866667z m-125.866667 189.866667a125.866667 125.866667 0 1 1 251.733334 0 125.866667 125.866667 0 0 1-251.733334 0zM512 650.666667c138.026667 0 236.074667 72.448 273.152 192H238.848c37.077333-119.552 135.146667-192 273.152-192z m0-64c-171.541333 0-298.325333 96.981333-339.349333 254.805333-9.002667 34.666667 18.346667 65.194667 51.093333 65.194667h576.512c32.768 0 60.096-30.506667 51.093333-65.194667C810.325333 683.648 683.52 586.666667 512 586.666667z"
                          data-spm-anchor-id="a2g0o.cart.header.i0.2f53378dWTbody"
                        ></path>
                      </svg>
                    </span>
                    <div class="my-account--text--2Yt_prE">
                      <b
                        ><span
                          data-spm-anchor-id="a2g0o.cart.header.i2.2f53378dWTbody"
                          >{{ $t("inscription.item2") }} /
                          {{ $t("inscription.item3") }}</span
                        ><span
                          class="comet-icon comet-icon-chevrondown32 my-account--centerIcon--2yqLRkj base--chevronIcon--25sHdop"
                          ><svg
                            viewBox="0 0 1024 1024"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="false"
                            focusable="false"
                            data-spm-anchor-id="a2g0o.cart.header.i3.2f53378dWTbody"
                          >
                            <path
                              d="M296.256 354.944l224 224 224-224a74.656 74.656 0 0 1 0 105.6l-197.6 197.6a37.344 37.344 0 0 1-52.8 0l-197.6-197.6a74.656 74.656 0 0 1 0-105.6z"
                            ></path></svg></span
                      ></b>
                    </div>
                    <span
                      class="comet-icon comet-icon-chevrondown32 base--responseIcon--3et2x1Z"
                      ><svg
                        viewBox="0 0 1024 1024"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="false"
                        focusable="false"
                      >
                        <path
                          d="M296.256 354.944l224 224 224-224a74.656 74.656 0 0 1 0 105.6l-197.6 197.6a37.344 37.344 0 0 1-52.8 0l-197.6-197.6a74.656 74.656 0 0 1 0-105.6z"
                        ></path></svg
                    ></span>
                  </div>
                </div>
                <div class="col-xl-2">
                  <div>
                    <div
                      v-if="isOpen"
                      class="comet-v2-popover-wrap"
                      style="position: relative"
                    >
                      <div
                        class="comet-v2-popover comet-v2-popover-show-arrow comet-v2-zoom-big-enter-done"
                        data-popper-placement="bottom"
                        style="position: absolute; top: 37px; left: -246px"
                        data-spm-anchor-id="a2g0o.cart.0.i10.2f53378dWTbody"
                      >
                        <div
                          class="comet-v2-popover-arrow"
                          data-popper-arrow="true"
                          style="position: absolute; left: 148.5px"
                        ></div>
                        <div
                          class="comet-v2-popover-body my-account--popupCls--1C1NFJ2"
                          style=""
                        >
                          <div class="comet-v2-popover-content">
                            <div class="my-account--accountWrap--2FBvnYE">
                              <div class="my-account--userInfo--8cACzqQ">
                                <router-link to="/login-client">
                                  <button class="my-account--signin--RiPQVPB">
                                    {{ $t("inscription.item2") }}
                                  </button>
                                </router-link>

                                <router-link to="/sign-up">
                                  <p>{{ $t("inscription.item3") }}</p>
                                </router-link>
                                <span class="my-account--line--QONK0VF"></span>
                              </div>
                              <div class="my-account--menuBox--3f9Nx8S">
                                <ul class="my-account--menuInfo--3YpLtBU mb-0">
                                  <li>
                                    <router-link to="client/commandes"
                                      ><span
                                        class="comet-icon comet-icon-orders my-account--icon--16yzkFW"
                                        ><svg
                                          viewBox="0 0 1024 1024"
                                          width="1em"
                                          height="1em"
                                          fill="currentColor"
                                          aria-hidden="false"
                                          focusable="false"
                                        >
                                          <path
                                            d="M189.866667 266.666667a76.8 76.8 0 0 1 76.8-76.8h70.250666a34.133333 34.133333 0 1 1 0 68.266666H266.666667a8.533333 8.533333 0 0 0-8.533334 8.533334v618.666666c0 4.693333 3.818667 8.533333 8.533334 8.533334h490.666666a8.533333 8.533333 0 0 0 8.533334-8.533334v-618.666666a8.533333 8.533333 0 0 0-8.533334-8.533334h-70.250666a34.133333 34.133333 0 1 1 0-68.266666H757.333333a76.8 76.8 0 0 1 76.8 76.8v618.666666a76.8 76.8 0 0 1-76.8 76.8h-490.666666a76.8 76.8 0 0 1-76.8-76.8v-618.666666z"
                                          ></path>
                                          <path
                                            d="M328.533333 202.666667A76.8 76.8 0 0 1 405.333333 125.866667h213.333334a76.8 76.8 0 0 1 76.8 76.8v42.666666a76.8 76.8 0 0 1-76.8 76.8H405.333333a76.8 76.8 0 0 1-76.8-76.8v-42.666666z m76.8-8.533334a8.533333 8.533333 0 0 0-8.533333 8.533334v42.666666c0 4.693333 3.818667 8.533333 8.533333 8.533334h213.333334a8.533333 8.533333 0 0 0 8.533333-8.533334v-42.666666a8.533333 8.533333 0 0 0-8.533333-8.533334H405.333333z"
                                          ></path>
                                          <path
                                            d="M362.666667 629.333333a32 32 0 0 1 32-32H554.666667v18.282667C554.666667 640.874667 534.186667 661.333333 508.949333 661.333333H394.666667a32 32 0 0 1-32-32z"
                                          ></path>
                                          <path
                                            d="M352 469.333333m32 0l256 0q32 0 32 32l0 0q0 32-32 32l-256 0q-32 0-32-32l0 0q0-32 32-32Z"
                                          ></path></svg></span
                                      ><span
                                        class="my-account--menuText--1km-qni"
                                        >Mes Commandes</span
                                      ></router-link
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="text-center me-8">
                      <div class="dropdown">
                        <router-link to="/panier" class="text-reset">
                          <div class="lh-1">
                            <div class="position-relative d-inline-block">
                              <i class="bi bi-cart2 fs-4"></i>
                              <span
                                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                              >
                                {{ cartItemCount }}
                              </span>
                            </div>
                            <p class="mb-0 d-none d-xl-block small"></p>
                          </div>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-5">
                  <div class="navbar-container">
                    <div class="dropdown selectBox" ref="dropdownWrapper1" style="height:33px">
                      <a
                        ref="dropdownWrapper1"
                        class="dropdown-toggle selectValue text-reset show d-flex align-items-center"
                        href="javascript:void(0)"
                        @click="toggleDropdownLangage"
                      >
                        <i class="bi bi-globe2 fs-4"></i> &nbsp;
                        <!-- <img :src="currentFlag" alt="Flag" style="width: 24px; margin-left: 8px;"> -->
                        <span>{{ currentLanguage }}</span> &nbsp;
                        <span>({{ selectedDevise?.label }})</span>
                      </a>

                      <div class="es--wrap--RYjm1RT" v-if="isOpenLangage">
                        <div
                          class="es--contentWrap--ypzOXHr es--visible--12ePDdG">
                          <!-- <div class="form-item--title--1ZN23sl">Envoyez à</div>
                          <MazSelect
                            label=""
                            v-model="detected"
                            :options="countriesOptions"
                            v-slot="{ option }"
                            size="sm"
                            rounded-size="md"
                            color="secondary"
                            autocomplete="off"
                            search
                          >
                            <div
                              class="d-flex align-items-center"
                              @click.prevent="changeCountry(option)"
                              style="
                                padding-top: 0.5rem;
                                padding-bottom: 0.5rem;
                                width: 100% !important;
                                gap: 1rem;
                              "
                            >
                              <MazAvatar size="0.4rem" :src="option.flag" />
                              <strong>
                                {{ option.code }}
                              </strong>
                            </div>
                          </MazSelect> -->

                          <div class="form-item--title--1ZN23sl">Langue</div>
                          <MazSelect
                            label=""
                            v-model="langage"
                            :options="LangageOptions"
                            v-slot="{ option }"
                            size="sm"
                            rounded-size="md"
                            color="secondary"
                            autocomplete="off"
                          >
                            <div
                              class="d-flex align-items-center"
                              @click="changeLanguage(option)"
                              style="
                                padding-top: 0.5rem;
                                padding-bottom: 0.5rem;
                                width: 100% !important;
                                gap: 1rem;
                              "
                            >
                              <MazAvatar size="0.4rem" :src="option.picture" />
                              <strong>
                                {{ option.label }}
                              </strong>
                            </div>
                          </MazSelect>

                          <div class="form-item--title--1ZN23sl">Devise</div>
                          <MazSelect
                            v-model="devise"
                            color="secondary"
                            secondary
                            :options="DeviesArray"
                            v-slot="{ option }"
                            size="sm"
                            rounded-size="md"
                            autocomplete="off"
                          >
                            <div
                              class="flex items-center"
                              style="
                                padding-top: 0.5rem;
                                padding-bottom: 0.5rem;
                                width: 100%;
                                gap: 1rem;
                              "
                              @click="updateDevise(option)"
                            >
                              {{ option.label }}
                            </div>
                          </MazSelect>
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
    </header>

    <Dialog
      v-model:visible="productDispo"
      header="Produit simulaire à l'image"
      :style="{ width: '70rem' }"
      :position="top"
      :modal="true"
      :draggable="false"
    >
      <hr class="m-0" />
      <div class="row g-5 row-cols-lg-6 row-cols-2 row-cols-md-2 mt-2">
        <p v-if="recentProducts.length == 0">
          Pas de produit vue pour l'instant
        </p>

        <div
          class="col"
          v-else
          v-for="(product, index) in recentProducts"
          :key="index"
        >
          <!-- card -->
          <div class="card card-product-v2 h-100">
            <div class="card-body position-relative">
              <!-- badge -->
              <div class="text-center position-relative">
                <div class="position-absolute top-0 start-0">
                  <span
                    v-if="product?.PrixPromo"
                    class="badge bg-success text-white"
                  >
                    -{{ calculateDiscount(product?.Prix, product?.PrixPromo) }}%
                  </span>
                </div>
                <!-- img -->
                <a
                  :href="`/detail/${encodeId(product?.id)}`"
                  @click="addToRecent(product)"
                >
                  <img
                    :src="
                      product?.PhotoCover ? product?.PhotoCover : defaultImage
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
    </Dialog>

    <Dialog
      v-model:visible="productNoDispo"
      header="Produit simulaire à l'image"
      :style="{ width: '30rem' }"
      :position="top"
      :modal="true"
      :draggable="false"
    >
      <hr class="m-0" />
      <p
        class="text-center mb-0 text-danger fw-bold fs-5"
        v-if="recentProducts.length == 0"
      >
        Pas de correspondate trouvée!
      </p>
    </Dialog>
  </div>
</template>
<script>
import fr from "@/assets/img/france-flag-icon.svg";
import uk from "@/assets/img/unit.svg";
import LoaderBtn from "@/components/others/loader/loaderbtn.vue";
import axiosInstance from "@/lib/axiosConfig";
import axios from "axios";
import { useToast } from "vue-toastification";
import { mapActions, mapGetters } from "vuex";

export default {
  setup() {
    const toast = useToast(); // Initialiser useToast
    return { toast };
  },
  components: {
    LoaderBtn,
  },
  computed: {
    ...mapGetters("cart", [
      "cartItemCount",
      "cartItems",
      "alertMessage",
      "isLoadingItem",
    ]), // Utiliser le getter pour le nombre d'éléments
    ...mapGetters("devise", [
      "DeviesArray",
      "selectedDevise",
      "getSelectedRate",
    ]),
    ...mapGetters("auth", ["isAuthenticated"]),
    shouldShowNavbar() {
      this.$store.dispatch("auth/loadMyAuthenticatedUser");

      return (
        this.isAuthenticated &&
        this.$route.path !== "/sign-up" &&
        this.$route.path !== "/login-client"
      );
    },
    loggedInUser() {
      return this.$store.getters["auth/myAuthenticatedUser"];
    },
  },

  watch: {
    isLoggedIn(newValue) {
      console.log("User is logged in:", newValue);
    },
    alertMessage(newVal) {
      console.log("newVal", newVal);
      if (newVal) {
        this.loadingItems = {};
        //   this.toast.success(newVal, {
        //     position: "top-right",
        //     timeout: 2000,
        //     closeOnClick: true,
        //   });
      }
    },
  },

  data() {
    return {
      isOpen: false,
      isOpenLangage: false,
      showMobileSearch: false,
      productDispo: false,
      productNoDispo: false,
      recentProducts: [],
      loadingItems: {},
      currentLanguage: this.$i18n.locale === "en" ? "English" : "French",
      currentFlag: this.$i18n.locale === "en" ? uk : fr,
      products: [], // Liste complète des produits récupérés depuis l'API
      selectedProduct: null, // Produit sélectionné (lié à v-model)
      filteredProducts: [],
      LangageOptions: [
        { picture: fr, label: "French", value: "fr" },
        { picture: uk, label: "English", value: "en" },
      ],
      countriesOptions: [],
      // DeviesArray:[],
      langage: "fr",
      devise: "",
      showDropdown: false,
      isDragging: false,
      previewImage: null,
      fileInput: null,
      detected: null,
    };
  },
  async mounted() {
    await this.detectUserCountry();
    await this.fetchDevises();
    await this.fetchProducts();

    if (this.DeviesArray.length > 0) {
      this.devise = this.DeviesArray[2].value;
      console.log("this.devise", this.DeviesArray);
    }
    document.addEventListener("click", this.handleClickOutside);
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      this.langage = savedLanguage;
      this.setLanguage(savedLanguage);
    }
  },
  methods: {
    ...mapActions("devise", [
      "fetchDevises",
      "changeDevise",
      "alertMessage",
      "loading",
    ]),
    ...mapActions("cart", [
      "addToCart",
      "increaseQuantity",
      "decreaseQuantity",
    ]),
    toggleMobileSearch() {
    this.showMobileSearch = !this.showMobileSearch;
  },
    encodeId(id) {
      return btoa(id); // Encode en Base64
    },
    updateDevise(option) {
      const devise = option;
      this.changeDevise(devise);
    },
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    toggleDropdownLangage() {
      this.isOpenLangage = !this.isOpenLangage;
    },
    handleClickOutside(event) {
      if (
        this.isOpen &&
        this.$refs.dropdownWrapper &&
        !this.$refs.dropdownWrapper.contains(event.target)
      ) {
        this.isOpen = false;
      }

      if (
        this.isOpenLangage &&
        this.$refs.dropdownWrapper1 &&
        !this.$refs.dropdownWrapper1.contains(event.target)
      ) {
        this.isOpenLangage = false;
      }
    },
    async logout() {
      try {
        await this.$store.dispatch("auth/clearMyAuthenticatedUser"); // Appel de l'action pour déconnecter l'utilisateur
        this.$router.push("/");
        location.reload();
      } catch (error) {}
    },
    changeLanguage(locale) {
      this.langage = locale.value;

      this.$i18n.locale = locale.value;
      localStorage.setItem("language", locale.value);
      this.setLanguage(locale.value);
    },
    setLanguage(locale) {
      this.$i18n.locale = locale;
      if (locale === "en") {
        this.currentLanguage = "English";
        this.currentFlag = uk;
      } else if (locale === "fr") {
        this.currentLanguage = "French";
        this.currentFlag = fr;
      }
    },
    async fetchProducts() {
      try {
        const response = await axiosInstance.get("/autocomplete", {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.data.status === "success") {
          this.products = response.data.data; // Assurez-vous que 'data' contient vos produits
          this.filteredProducts = [...this.products]; // Initialisez les produits filtrés avec tous les produits
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des produits:", error);
      }
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
      return `${symbol} ${formattedPrice}`;
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

    search(event) {
      setTimeout(() => {
        if (!event.query.trim().length) {
          this.filteredProducts = [...this.products]; // Si aucune recherche, afficher tous les produits
        } else {
          // Filtrage des produits en fonction du nom (insensible à la casse)
          this.filteredProducts = this.products.filter((product) =>
            product.NomProduit.toLowerCase().startsWith(
              event.query.toLowerCase()
            )
          );
        }
      }, 250);
    },
    goToProductDetail(product) {
      window.location.href = `/detail/${this.encodeId(product.option.id)}`;
    },

    async detectUserCountry() {
      try {
        const response = await axios.get("https://ipapi.co/json/");
        const countryCode = response.data.country_code;

        this.getCountries(countryCode);
      } catch (error) {
        console.error("Erreur lors de la détection du pays:", error);
      }
    },

    async getCountries(detectedLanguage) {
      try {
        const response = await axiosInstance.get("countries");
        const countries = response.data?.data;
        const options = countries.map((country) => ({
          label: country.NomPays,
          flag: country.Flag,
          value: country.CodePays,
          code: country.NomAbr,
        }));
        const detected = options.find((i) => i.code === detectedLanguage);
        this.detected = detected.value;
        this.countriesOptions = options;
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données des pays:",
          error
        );
      }
    },
    async getDeviseAll() {
      try {
        const response = await axiosInstance.get("liste/devises");
        if (response.data.status === "success") {
          response.data.data?.data
            ?.filter((x) => x.IsActive === 0)
            .map((d) =>
              this.DeviesArray?.push({
                label: d.Title,
                value: d.id,
              })
            );

          console.log("responsesss", this.DeviesArray);
        }
      } catch (error) {
        console.log("error", error);
      }
    },
    changeCountry(country) {
      console.log(country);
    },
    handleDrop(event) {
      this.isDragging = false;
      const file = event.dataTransfer.files[0];
      if (file && file.type.startsWith("image/")) {
        createPreview(file);
      }
    },

    async handleFileSelect(event) {
      const file = event.target.files[0];
      if (file) {
        console.log(file);
        this.createPreview(file);
      }
      const formData = new FormData();
      formData.append("photo", file);
      this.recentProducts = [];
      try {
        const response = await axiosInstance.post(
          "/search-product-by-image",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (response?.data?.data?.length > 0) {
          this.recentProducts = response?.data?.data;
          this.productDispo = true;
          this.clearImage();
        } else {
          this.productNoDispo = true;
          this.clearImage();
        }
      } catch (error) {
        console.log("err", error);
      }
    },

    handlePaste(event) {
      const items = (event.clipboardData || event.originalEvent.clipboardData)
        .items;
      for (const item of items) {
        if (item.type.startsWith("image/")) {
          const file = item.getAsFile();
          this.createPreview(file);
          break;
        }
      }
    },

    // Création de la prévisualisation
    createPreview(file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.previewImage = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    // Suppression de l'image
    clearImage() {
      this.previewImage = null;
      if (this.fileInput) {
        this.fileInput.value = "";
      }
    },
    convertPrice(prix) {
      return prix / this.getSelectedRate; // Convertir avec le taux sélectionné
    },
    // Formatage du prix
    formatPrice(price, symbol, isSymbolBefore = true) {
      const formattedPrice = price
        .toFixed()
        .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      return isSymbolBefore
        ? `${symbol} ${formattedPrice}`
        : `${formattedPrice} ${symbol}`;
    },
    // Ajouter au panier
    addToCartProduct(product) {
      this.addToCart({ ...product, quantity: 1 });
    },
    addProductToCart(product) {
      this.loadingItems[product?.id] = true;
      this.$store.dispatch("cart/addToCart", product);
    },
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutside);
  },
};
</script>
<style lang="css" scoped>
.my-account--menuItem--1GDZChA {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 44px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: flex-start;
  padding: 0 8px;
  cursor: pointer;
}

.my-account--accountIcon--ECZEGeo {
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

.my-account--text--2Yt_prE {
  margin-left: 4px;
}

.my-account--text--2Yt_prE .my-account--small--3ni1QHm {
  display: block;
  font-size: 12px;
  color: #000;
  line-height: 12px;
}

.my-account--text--2Yt_prE > b {
  font-weight: 700;
  font-size: 12px;
  color: #000;
  line-height: 16px;
}

span.base--chevronIcon--25sHdop {
  font-size: 18px;
  vertical-align: middle;
  color: #000;
}

.my-account--centerIcon--2yqLRkj {
  margin-top: -3px;
}

span.base--responseIcon--3et2x1Z {
  display: none;
  font-size: 18px;
  color: #000;
}

.comet-v2-popover[data-popper-placement^="bottom"].comet-v2-popover-show-arrow {
  padding-top: 10px;
}

.comet-v2-popover[data-popper-placement^="bottom"].comet-v2-popover-show-arrow {
  padding-top: 10px;
}

.comet-v2-popover[data-popper-placement^="bottom"] {
  padding-top: 3px;
}

.comet-v2-popover[data-popper-placement^="bottom"] {
  padding-top: 3px;
}

.comet-v2-popover {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: #222;
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  -webkit-font-feature-settings: "tnum", "tnum";
  font-feature-settings: "tnum", "tnum";
  z-index: 1030;
}

.comet-v2-popover[data-popper-placement^="bottom"] > .comet-v2-popover-arrow {
  -webkit-box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.06);
  box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.06);
  border-top-color: #fff;
  border-left-color: #fff;
  top: 6px;
}

.comet-v2-popover[data-popper-placement^="bottom"] > .comet-v2-popover-arrow {
  -webkit-box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.06);
  box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.06);
  border-top-color: #fff;
  border-left-color: #fff;
  top: 6px;
}

.comet-v2-popover .comet-v2-popover-arrow {
  width: 8.48528137px;
  height: 8.48528137px;
  border: 4.24264069px solid transparent;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.comet-v2-popover-body {
  border-radius: 6px;
}

.comet-v2-popover-body {
  background-color: #fff;
  line-height: 1.5;
  font-size: 14px;
  color: #222;
  text-decoration: none;
  word-wrap: break-word;
  -webkit-box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.comet-v2-popover-body {
  border-radius: 6px;
}

.my-account--popupCls--1C1NFJ2 > div {
  padding: 0;
}

.comet-v2-popover-content {
  padding: 12px 16px;
  word-break: break-word;
}

.comet-v2-popover-content {
  padding: 12px 16px;
  word-break: break-word;
}

.my-account--accountWrap--2FBvnYE {
  width: 240px;
}

.my-account--userInfo--8cACzqQ {
  padding: 20px 24px 0;
  text-align: center;
}

.my-account--signin--RiPQVPB {
  height: 40px;
  width: 130px;
  font-size: 16px;
  background-color: var(--fc-primary);
  /* border-radius: 24px; */
  color: #fff;
  font-weight: 700;
}

button,
input[type="button"],
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button;
  cursor: pointer;
}

.my-account--userInfo--8cACzqQ > p {
  height: 18px;
  font-size: 14px;
  color: #000;
  text-align: center;
  line-height: 18px;
  margin: 8px 0 16px;
  cursor: pointer;
}

.my-account--line--QONK0VF {
  display: block;
  height: 1px;
  background-color: #ebebeb;
}

.my-account--menuBox--3f9Nx8S {
  padding: 0 8px 16px;
}

.my-account--menuInfo--3YpLtBU {
  padding: 10px 16px;
  /* width: 288px; */
}

.my-account--menuInfo--3YpLtBU li {
  min-height: 40px;
  list-style: none;
  margin: 0;
}

.my-account--menuInfo--3YpLtBU li > a {
  display: block;
  font-size: 14px;
  padding: 8px 0;
  color: #222;
}

.my-account--menuInfo--3YpLtBU .my-account--icon--16yzkFW {
  margin-right: 6px;
  font-size: 16px;
}

.my-account--menuInfo--3YpLtBU li .my-account--menuText--1km-qni {
  font-size: 16px;
}

/* debut devise  */

.es--wrap--RYjm1RT {
  display: inline-block;
  position: relative;
}

.ship-to--menuItem--WdBDsYl {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 44px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 8px;
  cursor: pointer;
}

.CI,
.XOF {
  background-position: -173px -131px;
}

.country-flag-y2023 {
  background: url(//ae01.alicdn.com/kf/S8d12126…r.png) -775px -5px no-repeat;
  display: inline-block;
  zoom: 0.5;
  -moz-transform: scale(0.5);
  width: 47px;
  height: 33px;
}

.CI,
.XOF {
  background-position: -173px -131px;
}

.country-flag-y2023 {
  background: url(//ae01.alicdn.com/kf/S8d12126…r.png) -775px -5px no-repeat;
  display: inline-block;
  zoom: 0.5;
  -moz-transform: scale(0.5);
  width: 47px;
  height: 33px;
}

.CI,
.XOF {
  background-position: -173px -131px;
}

.country-flag-y2023 {
  zoom: 0.5;
  background: url(//ae01.alicdn.com/kf/S8d12126…r.png) -775px -5px no-repeat;
  display: inline-block;
  height: 33px;
  -moz-transform: scale(0.5);
  width: 47px;
}

@media screen and (max-width: 1280px) {
  .ship-to--text--3H_PaoC {
    display: none;
  }
}

.ship-to--text--3H_PaoC {
  margin-left: 4px;
}

.ship-to--text--3H_PaoC .ship-to--small--1wG1oGl {
  display: block;
  font-size: 12px;
  color: #fff;
  line-height: 12px;
}

.ship-to--text--3H_PaoC > b {
  font-weight: 700;
  font-size: 12px;
  color: #fff;
  line-height: 16px;
}

span.base--chevronIcon--25sHdop {
  font-size: 18px;
  vertical-align: middle;
  color: #fff;
}

.ship-to--centerIcon--1viVSdj {
  margin-top: -3px;
}

@media screen and (max-width: 1280px) {
  span.base--responseIcon--3et2x1Z {
    display: inline-block;
  }
}

span.base--responseIcon--3et2x1Z {
  display: none;
  font-size: 18px;
  color: #fff;
}

.es--contentWrap--ypzOXHr.es--visible--12ePDdG {
  display: block;
}

.es--contentWrap--ypzOXHr:before {
  content: "";
  position: absolute;
  top: -10px;
  right: 48px;
  display: block;
  width: 0;
  height: 0;
  border-right: 12px solid transparent;
  border-bottom: 10px solid #fff;
  border-left: 12px solid transparent;
}

.es--contentWrap--ypzOXHr {
  direction: ltr;
  display: none;
  position: absolute;
  right: -144px;
  width: 250px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-top: 4px;
  padding: 8px 20px 20px;
  color: #191919;
  background: #fff;
  border-radius: 0px;
  -webkit-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
  z-index: 1030;
}

.form-item--title--1ZN23sl {
  margin-top: 10px;
  line-height: 24px;
  font-size: 16px;
  font-weight: 700;
}

.form-item--content--33yK8CE {
  margin-top: 8px;
}

.select--wrap--3N7DHe_ {
  position: relative;
  color: #191919;
  background: #fff;
  border-radius: 8px;
}

.select--text--1b85oDo {
  position: relative;
  height: 40px;
  line-height: 40px;
  padding: 0 12px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.select--arrow--1cha40Y {
  position: absolute;
  top: 20px;
  right: 12px;
  width: 8px;
  height: 1px;
  background: #191919;
  -webkit-transform: rotate(135deg);
  -ms-transform: rotate(135deg);
  transform: rotate(135deg);
}

.select--popup--W2YwXWt {
  display: none;
  position: absolute;
  top: 42px;
  left: 0;
  width: 100%;
  max-height: 300px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow-y: auto;
  z-index: 10;
}

.select--search--20Pss08 {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: 0;
  padding: 12px;
  background: #fff;
}

.select--search--20Pss08 > input {
  width: 100%;
  height: 40px;
  padding: 0 12px 0 36px;
  background: #f5f5f5;
  border: none;
  border-radius: 8px;
}

.select--search--20Pss08 .select--searchIcon--y8pOuGW {
  position: absolute;
  top: 24px;
  left: 24px;
  width: 16px;
  height: 16px;
  border: 2px solid #757575;
  border-radius: 50%;
}

.select--groupTitle--3La6ms2 {
  margin: 0 12px;
  line-height: 32px;
  font-size: 12px;
  font-weight: 700;
  border-bottom: 1px solid #f5f5f5;
}

.select--item--32FADYB {
  padding: 0 12px;
  line-height: 32px;
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
}

.m-select .m-select-list.--left {
  width: 100% !important;
}

.dropdown-container {
  width: 300px;
  z-index: 1000;
}

.dropdown-arrow {
  position: absolute;
  top: -8px;
  right: 25px;
  /* Ajustez cette valeur pour aligner avec l'icône */
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid white;
  filter: drop-shadow(0 -1px 1px rgba(0, 0, 0, 0.1));
}

.dropdown-content {
  position: relative;
  margin-top: 8px;
}

.drop-zone {
  transition: all 0.3s ease;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.drop-zone:hover {
  background-color: rgba(0, 0, 0, 0.02);
}

.cursor-pointer {
  cursor: pointer;
}

.preview-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Animations */
.animate__animated {
  animation-duration: 0.2s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
    transform: translateY(0);
  }

  to {
    opacity: 0;
    transform: translateY(-10px);
  }
}

.animate__fadeIn {
  animation-name: fadeIn;
}

.animate__fadeOut {
  animation-name: fadeOut;
}

.navbar-container {
  width: 100%;
  overflow: visible;
}

.dropdown-menu-custom {
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1000;
  max-width: 300px; /* Ajustez selon vos besoins */
  width: max-content;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.dropdown-content {
  padding: 1rem;
  max-height: 80vh;
  overflow-y: auto;
}

.form-section {
  margin-bottom: 1rem;
}

.form-item--title {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  color: #666;
}

/* Pour éviter le scroll horizontal */
.MazSelect {
  max-width: 100%;
}

/* Style pour les options longues */
.select-option strong {
  white-space: normal;
  word-wrap: break-word;
  max-width: calc(100% - 2rem); /* Tenir compte de l'avatar */
}

.p-dialog-header {
  padding: 10px !important;
}
</style>
