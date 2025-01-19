<template >
    <div>
      <div class="py-3 p-md-3 p-lg-5 bg-white ms-2">
                        
                        <section >
           
              
               <!-- row -->
               <div class="row row-cols-1 row-cols-lg-3 row-cols-md-3 g-4 g-lg-4">
                  <!-- col -->
                  <div class="col-xl-12" >
                     <div class="card">
                        <div class="card-header mb-0">
                           <div class="card-title d-flex justify-content-between mb-0">
                              <h6 class="mb-0 ">N° Commande : <strong>{{ data?.NumeroCommande }}</strong> </h6>
                              <h6 class="mb-0 ">Statut Commande : <strong class="badge bg-info text-white px-2 py-1">{{ translateStatus(data?.StatutCommande)  }}</strong> </h6>
                           </div>
                        </div>
                        <div class="card-body">
                           <div class="  d-flex justify-content-between " style="font-size: 14px;">
                              <span class="" style=""><strong class="text-danger">{{ data?.items?.length }}</strong>  article(s) </span> 
                              <span style="">Effectué le : <b class="text-danger"> {{ formatDate(data?.created_at)  }}</b></span>
                              <span style="">Total : <b class="text-info">{{ TotalPrice(data?.items , 'a') }}</b>  </span>
                            
                           </div>
                        </div>
                          
                     </div>
                  </div>
                  <div class="col-xl-12">
                   

                     <div class="table-responsive-xxl  mb-4">
                           <!-- Table -->
                           <table class="table mb-0 text-nowrap table-centered">
                              <!-- Table Head -->
                              <thead class="bg-light">
                                 <tr>
                                    <th>N°</th>
                                    <th>Product</th>
                                    <th>Prix unitaitre</th>
                                    <th>Quantité</th>
                                    <th>Coupon</th>
                                    <th>Total</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <!-- Table body -->
                                 <tr v-for="(product , index ) in data?.items" :key="product.id">
                                    <td class="align-middle border-top-0 w-0">
                                       {{ index + 1 }}
                                    </td>
                                    <td class="align-middle border-top-0 d-flex align-items-center">
                                       <img :src="product?.produit?.PhotoCover ? product?.produit?.PhotoCover : defaultImage"
                                                      :alt="product?.produit?.NomProduit" :title="product?.produit?.NomProduit" class="icon-shape icon-xl" />
                                       <a href="#" class="fw-semibold text-inherit">
                                          <h6 class="mb-0">{{ product?.produit?.NomProduit }}</h6>
                                       </a>
                                    </td>
                                    
                                   
                                    <td class="align-middle border-top-0">{{formatPrixs(product?.total / product?.Quantite) }} {{ product?.produit?.devise?.Symbol }}</td>
                                    <td class="align-middle border-top-0">
                                       <!-- <span class="badge bg-warning">Processing</span> -->
                                       {{ product?.Quantite }}
                                    </td>
                                    <td class="align-middle border-top-0"> {{ product?.coupon ?? "-" }}</td>
                                    <td class="align-middle border-top-0">{{formatPrixs(product?.total)  }} {{ product?.produit?.devise?.Symbol }}</td>
                                   
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
                              <p class="mb-0 text-muted">{{ data?.mode?.Label }}.</p>
                           </div>

                           <div class="mb-3">
                              <h6 class="mb-0 fw-bold">Détails du paiement</h6>
                              <p class="mb-0 text-muted">Sous-total:{{ TotalPrice(data?.items , 'a') }}</p>
                              <p class="mb-0 text-muted">Frais de livraison: {{ fraisExpedition || 0 }}</p>
                              <p class="mb-0 text-">Total: {{ TotalPrice(data?.items , 'a') }}</p>
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
</template>
<script>


import axios from '@/lib/axiosConfig';
import SkeletonCategorie from '@/components/others/loader/SkeletonCategorie.vue';
import defaultImage from '@/assets/images/products/product-img-2.jpg';
export default {
   props:['id'],
   components: {
      SkeletonCategorie
  },
   computed:{
      loggedInUser() {
      return this.$store.getters["auth/myAuthenticatedUser"];
    },
  
    decodedId() {
      return atob(this.id); // Décode l'ID reçu en Base64
    },


   },
   data() {
      return {
         defaultImage:defaultImage,
         data:"",
         fraisExpedition:2000
         
      }
   },
   mounted(){

    this.getCommandesDetail()

   },
   methods: {
      async getCommandesDetail() {
      try {

        const response = await axios.get(`/commandes/${this.decodedId}`, {
          headers: {
            Authorization: `Bearer ${this.loggedInUser.token}`,
            "Content-Type": "application/json",
          },
        });

        this.data = response?.data?.data
  

      } catch (error) {
        console.error(
          "Erreur lors de la récupération des utilisateurs:",
          error
        );
      }
    },
   //  TotalPrice(price){
   //  if (Array.isArray(price)) {
   //      const devise = price[0]?.produit?.devise?.Symbol || ''
   //      const total = this.formatPrix(price.reduce((acc, p) => acc + (p.total || 0) , 0), devise) ;
   //      return total 
        
   //  } else {
   //      return this.formatPrix(0 , 'CFA')
        
   //  }

   //  },
   TotalPrice(price , d){
    if (Array.isArray(price)) {
        const devise = price[0]?.produit?.devise?.Symbol || ''
        const total = this.formatPrix(price.reduce((acc, p) => acc + (p.total || 0) , 0), devise) ;
        const totals = this.formatPrix(price.reduce((acc, p) => acc + (p.total || 0) + this.fraisExpedition , 0), devise) ;
        console.log(total  )
        return d === 'b' ?  totals : total 
        
    } else {
        return this.formatPrix(0 , 'CFA')
        
    }

    },
    formatPrix(value , devise) {
    let Formatter = new Intl.NumberFormat('fr-FR', { 
        style:'currency',
        currency: devise ||  'CFA',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
         })
        return Formatter.format(value)

    },
    formatPrixs(value , devise) {
    let Formatter = new Intl.NumberFormat('fr-FR', { 
        style:'currency',
        currency: devise ||  'CFA',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
         })
        return Formatter.format(value)

    },
    formatDate(date) {
    if (!date) return '';
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return new Date(date).toLocaleDateString('fr-FR', options);
  },
  translateStatus(statut) {
      const statusMap = {
        PENDING: "EN ATTENTE",
        PROGRESS: "EN COURS",
        "READY TO PICK": "PRET A ETRE RECUPERER",
        DELIVERED: " LIVRER",
        CANCELED: "ANNULER",
      };
      return statusMap[statut] || "Statut inconnu";
    },
  
   },
    
}
</script>
<style lang="css" scoped>
    
</style>