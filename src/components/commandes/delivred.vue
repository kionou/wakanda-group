<template >
    <div>
      <div class="nodata" v-if="CommandesOptions.length === 0">Aucune commande livrée </div>

        <div v-else class="row g-4 row-cols-1 mt-2 justify-content-center">
                        <div class="col-xl-6" v-for="(commande, index) in CommandesOptions" :key="index">
                           <!-- card -->
                           <div class="card card-product justify-content-center" style="height: 100px;">
                              <div class="pt-3 px-3">
                                 <div class="row align-items-center">
                                    <!-- col -->
                                    <div class="col-md-10 col-12 mt-0 d-flex align-items-center">
                                       <div class="text-center position-relative me-3">
                                          
                                          <router-link to="/detail">
                                             <img src="@/assets/img/logo_mobile.png" alt="Grocery Ecommerce Template" class="mb-0 img-fluid" style="height: 50px !important;"/>
                                          </router-link>
                                       </div>
                                       <div class="">

                                       <div class="text-small mb-1">
                                          <router-link :to="{ name: 'commandes-details', params: { id: encodeId(commande.id) }}" class="text-decoration-none text-muted"><small>N° commande : {{ commande?.NumeroCommande }}</small></router-link>
                                       </div>
                                       <span class="badge bg-success">{{ commande?.StatutCommande }}</span>
                                     
                                       <div class="mt-1">
                                          <!-- price -->
                                          <div>
                                             <span class="text-dark fw-semibold">{{ commande?.created_at }}</span>
                                             
                                          </div>
                                         
                                       </div>
                                    </div>
                                    </div>
                                    <div class="col-md-2 ">
                                        <router-link :to="{ name: 'commandes-details', params: { id: encodeId(commande.id) }}" class="btn btn-sm btn-primary fs-20">DETAILS</router-link>
                                       
                                    </div>
                                 </div>
                                
                              </div>
                           </div>
                        </div>
                      
                        
                      
                        </div> 
    </div>
</template>
<script>
import axios from '@/lib/axiosConfig.js'
export default {
   components:{

   },
   computed:{
      loggedInUser() {
      return this.$store.getters["auth/myAuthenticatedUser"];
    },
    totalPages() {
      return Math.ceil(this.CommandesOptions.length / this.itemsPerPage);
    },
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.CommandesOptions.slice(startIndex, endIndex);
    },


   },
   data() {
      return {
         CommandesOptions:[],
         
      }
   },
async  mounted() {
   await this.getCommandes()
      
   },
   methods: {
      encodeId(id) {
    return btoa(id); // Encode en Base64
  },
      async getCommandes() {
      try {

        const response = await axios.get("/commandes", {
          headers: {
            Authorization: `Bearer ${this.loggedInUser.token}`,
            "Content-Type": "application/json",
          },
          params:{
            connected_user:this.loggedInUser?.id_user,
             statut:"DELIVERED"
           
          }
        });

        this.data = response.data?.data?.data;
        this.CommandesOptions = this.data
        console.log(this.CommandesOptions)
        this.isLoading = false;

      } catch (error) {
        console.error(
          "Erreur lors de la récupération des utilisateurs:",
          error
        );
      }
    },
   },
    
}
</script>
<style lang="css" scoped>
    
</style>