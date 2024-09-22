<template >
    <div>
      <div class="row mt-4">
         <!-- col -->
         <div class="col-12">
            <!-- breadcrumb -->
            <nav class="mb-3" aria-label="breadcrumb">
            <ol class="breadcrumb mb-0">
               <li class="breadcrumb-item"><a href="/">Accueil </a>></li>
               <li class="breadcrumb-item"><router-link to="/categories">commande ></router-link></li>
               <li class="breadcrumb-item"><router-link to="/categories">detail ></router-link></li>
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
                     <div class="py-3 p-md-3 p-lg-5 bg-white ms-2">
                        
                        <section >
           
              
               <!-- row -->
               <div class="row row-cols-1 row-cols-lg-3 row-cols-md-3 g-4 g-lg-4">
                  <!-- col -->
                  <div class="col-xl-12" style="border-bottom: 1px solid;">
                  
                     <div class=" ">
                           <h3 class="mb-1 ">Commande n° 3234342</h3>
                           <div class=" text-muted d-flex justify-content-between " style="font-size: 16px;">
                              <span class="" style="font-weight: bolder;">1 articles </span> 
                              <span style="font-weight: bolder;">Effectué 23/23/2345</span>
                              <span style="font-weight: bolder;">Total 2 3434 FCFA</span>
                            
                           </div>
                          
                           
                           <div>
                             
                         
                        </div>
                     </div>
                  </div>
                  <div class="col-xl-12">
                     <!-- card -->
                     <div class="card p-4 flex-row mb-4">
                        <div class="col-xl-8 d-flex align-items-center">
                            <div class="me-3">
                          
                          <img src="@/assets/images/stores-logo/stores-logo-2.svg" alt="" class=" icon-shape icon-xxl" style="width:100px ; height:100px !important;">
                       </div>
                       <div class="mt-4">
                         
                          <h2 class="mb-1 h5"><a href="#!" class="text-inherit">DealShare Mrt</a></h2>
                          <div class="small text-muted">
                             <span class="me-2">Quantité: 2</span> <br>
                             <span class="me-2">prix:2344323</span>
                          </div>
                          
                         
                       </div>
                        </div>
                        <div class="col-xl-4">
                            <button class="btn btn-primary btn-sm">
                                <router-link to="#" class="text-white">Commander  à nouveau</router-link> 
                            </button> <br>
                                <router-link to="/commandes-historique">Voir l'historiquez</router-link>
                            
                        </div>
                      
                     </div>

                     <div class="table-responsive-xxl border-1 mb-4">
                           <!-- Table -->
                           <table class="table mb-0 text-nowrap table-centered">
                              <!-- Table Head -->
                              <thead class="bg-light">
                                 <tr>
                                    <th>&nbsp;</th>
                                    <th>Product</th>
                                    <th>Items</th>
                                    <th>Status</th>
                                    <th>Price</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <!-- Table body -->
                                 <tr>
                                    <td class="align-middle border-top-0 w-0">
                                       <a href="#"><img src="@/assets/images/products/product-img-1.jpg" alt="Ecommerce" class="icon-shape icon-xl"></a>
                                    </td>
                                    <td class="align-middle border-top-0">
                                       <a href="#" class="fw-semibold text-inherit">
                                          <h6 class="mb-0">Haldiram's Nagpur Aloo Bhujia</h6>
                                       </a>
                                       <span><small class="text-muted">400g</small></span>
                                    </td>
                                    
                                   
                                    <td class="align-middle border-top-0">1</td>
                                    <td class="align-middle border-top-0">
                                       <span class="badge bg-warning">Processing</span>
                                    </td>
                                    <td class="align-middle border-top-0">$15.00</td>
                                   
                                 </tr>
                                 <tr>
                                    <td class="align-middle border-top-0 w-0">
                                       <a href="#"><img src="@/assets/images/products/product-img-2.jpg" alt="Ecommerce" class="icon-shape icon-xl"></a>
                                    </td>
                                    <td class="align-middle border-top-0">
                                       <a href="#" class="fw-semibold text-inherit">
                                          <h6 class="mb-0">Nutri Choise Biscuit</h6>
                                       </a>
                                       <span><small class="text-muted">2 Pkt</small></span>
                                    </td>
                                   
                                   
                                    <td class="align-middle border-top-0">2</td>
                                    <td class="align-middle border-top-0">
                                       <span class="badge bg-success">Completed</span>
                                    </td>
                                    <td class="align-middle border-top-0">$45.00</td>
                                  
                                 </tr>
                                 <tr>
                                    <td class="align-middle border-top-0 w-0">
                                       <a href="#"><img src="@/assets/images/products/product-img-3.jpg" alt="Ecommerce" class="icon-shape icon-xl"></a>
                                    </td>
                                    <td class="align-middle border-top-0">
                                       <a href="#" class="text-inherit">
                                          <h6 class="mb-0">Cadbury Dairy Milk 5 Star Bites</h6>
                                          <span><small class="text-muted">202 g</small></span>
                                       </a>
                                    </td>
                                   
                                   
                                    <td class="align-middle border-top-0">4</td>
                                    <td class="align-middle border-top-0">
                                       <span class="badge bg-success">Completed</span>
                                    </td>
                                    <td class="align-middle border-top-0">$99.00</td>
                                   
                                 </tr>

                                
                                 
                              </tbody>
                           </table>
                        </div>
                  </div>
                 
               </div>

               <div class="row">
                <div class="col-xl-6">
                    <div class="card me-4" style="height:100% !important">
                        <div class="card-header">
                            <p class="mb-0"><b>PAIEMENT</b></p>
                        </div>
                        <div class="card-body">
                            <div class="mb-3">
                              <h6 class="mb-0 fw-bold">Mode de paiement</h6>
                              <p class="mb-0 text-muted">Payer cash à la livraison.</p>
                           </div>

                           <div class="mb-3">
                              <h6 class="mb-0 fw-bold">Détails du paiement</h6>
                              <p class="mb-0 text-muted">Sous-total: 2,190 FCFA</p>
                              <p class="mb-0 text-muted">Frais de livraison: 500 FCFA</p>
                              <p class="mb-0 text-">Total: 2,690 FCFA.</p>
                           </div>
                           

                        </div>
                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="card">
                        <div class="card-header">
                            <p class="mb-0"><b>LIVRAISON</b></p>
                        </div>
                        <div class="card-body">
                            <div class="mb-3">
                              <h6 class="mb-0 fw-bold">Méthode de livraison</h6>
                              <p class="mb-0 text-muted">Point Relais</p>
                           </div>
                        
                           <div class="mb-3">
                              <h6 class="mb-0 fw-bold">Adresse du point relais</h6>
                              <p class="mb-0 text-muted">Agence d'Agnibilekrou Dioulakro1 , Non loin du carrefour Vagabond terrain, derrière la pharmacie K. Boilot</p>
                              <p class="mb-0 text-muted">Agnibilekrou, Comoé</p>
                              <p class="mb-0 text-dark mt-1">Heures d'ouverture:</p>
                              <p class="mb-0 text-muted">   ouvert du Lundi au Samedi : 08h00 - 18h00; fermé les Dimanches et jours fériés</p>
                           </div>

                           <div class="mb-3">
                              <h6 class="mb-0 fw-bold">Détails d'expédition</h6>
                              <p class="mb-0 text-muted">Point relais.Expédié par GUEETON-COD</p>
                              <p class="mb-0 text-muted">Livraison entre le 17 juillet et le 18 juillet</p>
                           </div>
                           

                        </div>
                    </div>
                </div>
               </div>
           
         </section>

                       
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