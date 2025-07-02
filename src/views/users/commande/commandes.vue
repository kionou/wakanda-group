<template >
    <div>
      <div class="py-6 p-md-6 p-lg-10 bg-white ms-2">
                        <!-- heading -->
                        <h2 class="mb-6">Mes commandes</h2>
                        <div class="row">
						<div class="col-md-12 text-center">
							<ul class="nav nav-tabs" id="myTab" role="tablist">
							<li class="nav-item" role="presentation">
								<button class="nav-link active" id="pending-tab" data-bs-toggle="tab" data-bs-target="#pending" type="button" role="tab" aria-controls="pending" aria-selected="true">Attente</button>
							</li>
							<li class="nav-item" role="presentation">
								<button class="nav-link" id="progress-tab" data-bs-toggle="tab" data-bs-target="#progress" type="button" role="tab" aria-controls="progress" aria-selected="false">En cours</button>
							</li>
							<li class="nav-item" role="presentation">
								<button class="nav-link" id="delivered-tab" data-bs-toggle="tab" data-bs-target="#delivered" type="button" role="tab" aria-controls="delivered" aria-selected="false">Livrée</button>
							</li>
							<li class="nav-item" role="presentation">
								<button class="nav-link" id="ready-tab" data-bs-toggle="tab" data-bs-target="#ready" type="button" role="tab" aria-controls="ready" aria-selected="false">Annulée</button>
							</li>
							
							</ul>
							<div class="tab-content" id="myTabContent">
							<div class="tab-pane fade show active" id="pending" role="tabpanel" aria-labelledby="pending-tab"><Pending></Pending></div>
							<div class="tab-pane fade" id="progress" role="tabpanel" aria-labelledby="progress-tab"> <Progress></Progress> </div>
							<div class="tab-pane fade" id="ready" role="tabpanel" aria-labelledby="ready-tab"> <Readly></Readly> </div>
							<div class="tab-pane fade" id="delivered" role="tabpanel" aria-labelledby="delivered-tab"> <Delivred></Delivred> </div>
							</div>
						</div>
				         	</div>
							
                     

                        
                     </div>
    </div>
</template>
<script>
import axios from '@/lib/axiosConfig.js'
import Pending from '@/components/commandes/pending.vue';
import Readly from '@/components/commandes/readly.vue';
import Delivred from '@/components/commandes/delivred.vue';
import Progress from '@/components/commandes/progress.vue';

export default {
   components:{
      Pending , Progress , Delivred , Readly
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
        if (
          error.response.data.message === "Vous n'êtes pas autorisé." ||
          error.response.status === 401
        ) {
          await this.$store.dispatch("auth/clearMyAuthenticatedUser");
          this.$router.push("/"); //a revoir
        }
      }
    },
   },
    
}
</script>
<style lang="css" scoped>
    
</style>