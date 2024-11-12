<template >
    <div>
      <div class="py-2 p-md-2 p-lg-4 bg-white">
                        <div class="d-flex justify-content-between mb-2 pb-1" style="border-bottom: 1px solid ;">
                           <!-- heading -->
                           <h2 class="mb-0">Address</h2>
                           <!-- button -->
                           <a href="#" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#addAddressModal">Add a new address</a>
                        </div>
                        <div class="row">
                           <!-- col -->
                           <div class="col-xl-5 col-lg-6 col-xxl-4 col-12 mb-4">
                              <!-- form -->
                              <div class="card me-2">
                                 <div class="card-body p-6">
                                    <p class="mb-2">
                                       Jitu Chauhan
                                       <br>

                                       4450 North Avenue Oakland,
                                       <br>

                                       Nebraska, United States,
                                       <br>

                                       402-776-1106
                                    </p>
                                    <p class="link-primary mb-0">Adresse actuelle</p>
                                
                                 
                                 </div>
                                 <div class="card-footer d-flex align-items-center justify-content-between">
                                    <div class="adress_default">Définir par défaut</div>
                                    <div class="d-flex">
                                       <router-link to="#" class=" icon-edit"><i class="bi bi-pen"></i></router-link>
                                       <router-link to="#" class="icon-supp ms-3" data-bs-toggle="modal" data-bs-target="#deleteModal"><i class="bi bi-trash"></i></router-link>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           <div class="col-xl-5 col-lg-6 col-xxl-4 col-12 mb-4">
                              <!-- form -->
                              <div class="card me-2">
                                 <div class="card-body p-6">
                                    <p class="mb-2">
                                       Jitu Chauhan
                                       <br>

                                       4450 North Avenue Oakland,
                                       <br>

                                       Nebraska, United States,
                                       <br>

                                       402-776-1106
                                    </p>
                                   
                                
                                 
                                 </div>
                                 <div class="card-footer d-flex align-items-center justify-content-between">
                                    <div class="btn btn-primary btn-sm">Définir par défaut</div>
                                    <div class="d-flex">
                                       <router-link to="#" class=" icon-edit"><i class="bi bi-pen"></i></router-link>
                                       <router-link to="#" class="icon-supp ms-3" data-bs-toggle="modal" data-bs-target="#deleteModal"><i class="bi bi-trash"></i></router-link>
                                    </div>
                                 </div>
                              </div>
                           </div>


                         
                        </div>
                     </div>
      
     

      <div class="modal fade" id="addAddressModal" tabindex="-1" aria-labelledby="addAddressModalLabel" aria-hidden="true">
         <div class="modal-dialog modal-dialog-centered modal-lg">
            <!-- modal content -->
            <div class="modal-content">
               <!-- modal body -->
               <div class="modal-body p-6">
                  <div class="d-flex justify-content-between mb-5">
                     <div>
                        <!-- heading -->
                        <h5 class="mb-1" id="addAddressModalLabel">New Shipping Address</h5>
                        <p class="small mb-0">Add new shipping address for your order delivery.</p>
                     </div>
                     <div>
                        <!-- button -->
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                     </div>
                  </div>
                  <!-- row -->
                  <div class="row g-3">
                     <!-- col -->
                     <div class="col-6">
                        <!-- input -->
                        <input type="text" class="form-control" placeholder="First name" aria-label="First name" required="" />
                     </div>
                     <!-- col -->
                     <div class="col-6">
                        <!-- input -->
                        <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" required="" />
                     </div>
                     <!-- col -->
                     <div class="col-6">
                        <!-- input -->
                        <input type="text" class="form-control" placeholder="Address Line 1" />
                     </div>
                     <!-- col -->
                     <div class="col-6">
                        <!-- input -->
                        <input type="text" class="form-control" placeholder="Address Line 2" />
                     </div>
                     <!-- col -->
                     <div class="col-6">
                        <!-- input -->
                        <input type="text" class="form-control" placeholder="City" />
                     </div>
                     <!-- col -->
                     <div class="col-6">
                        <!-- form select -->
                        <select class="form-select">
                           <option selected="">India</option>
                           <option value="1">UK</option>
                           <option value="2">USA</option>
                           <option value="3">UAE</option>
                        </select>
                     </div>
                    
                     <div class="col-12 text-end">
                        <button type="button" class="btn btn-outline-primary" data-bs-dismiss="modal">Cancel</button>
                        <button class="btn btn-primary" type="button">Save Address</button>
                     </div>
                  </div>
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