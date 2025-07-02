<template >
    <div>
        <div class="card p-4 card-product mb-4">
                        <!-- heading -->
                        <div class="d-flex justify-content-between mb-0 align-items-center">
                           <h5 class="mb-0">Moyens de paiement </h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item py-5 px-0 d-flex align-items-center " v-for="(option, index) in paymentMethods" :key="index" >
                    <input 
                        class="form-check-input me-2" 
                        type="radio" 
                        v-model="selectedPayment" 
                        :value="option.value" 
                        :id="'payment-' + index"
                    />
                    <div class="d-flex align-items-center">
                                  
                                  
                    <img :src="option.Logo !== null ? option.Logo : defaultImage"
                        :alt="option.label"  width="24" height="24" style="width:50px ; height:50px">
                    <div class="ms-4">
                        <h5 class="mb-0 h6 h6">{{ option?.label }}</h5>
                        <!-- <p class="mb-0 small">Expires in 10/2023</p> -->
                    </div>
                </div>
                    <!-- <label class="form-check-label ms-2" :for="'payment-' + index">
                        {{ option.label }}
                    </label> -->

      <!-- Liste déroulante affichée immédiatement après Argent Mobile -->
      <div v-if="selectedPayment === 'mobile_money'" class="mt-2 p-3 bg-light rounded shadow-sm">
        <h5 class="mb-2">Choisissez un opérateur</h5>

        <select v-model="selectedOperator" class="form-select">
          <option v-for="operator in mobileOperators" :key="operator.value" :value="operator.value">
            {{ operator.label }}
          </option>
        </select>

        <!-- Formulaire pour Mobile Money -->
        <div class="mt-3">
          <label class="form-label">Prénom</label>
          <input type="text" v-model="firstName" class="form-control" required />
        </div>

        <div class="mt-3">
          <label class="form-label">Nom</label>
          <input type="text" v-model="lastName" class="form-control" required />
        </div>

        <div class="mt-3">
          <label class="form-label">Numéro de téléphone</label>
          <input type="text" v-model="phoneNumber" class="form-control" required />
        </div>
      </div>
                              </li>

                        <!-- Bouton de paiement -->
                        <button @click="payNow" class="btn btn-primary w-100 mt-3">
                        Payer maintenant
                        </button>

              
                         
                          
                        </ul>
                     </div>
    </div>
</template>
<script>
import defaultImage from '@/assets/images/products/product-img-2.jpg'
export default {
  data() {
    return {
        defaultImage: defaultImage,
      selectedPayment: "",
      selectedOperator: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      paymentMethods: [
        { label: "Payement à la livraison", value: "paye_cash" ,Logo:'/src/assets/img/modes/livraison.png' },
        { label: "Carte Bancaire", value: "credit_card" ,Logo:'@/assets/images/products/product-img-2.jpg' },
        { label: "PayPal", value: "paypal"  ,Logo:'/src/assets/img/modes/paypal.svg'},
        { label: "Argent Mobile", value: "mobile_money"  ,Logo:'/src/assets/img/modes/mobile.png'},
        { label: "Virement Bancaire", value: "bank_transfer"  ,Logo:'/src/assets/img/modes/bancaire.png'}
      ],
      mobileOperators: [
        { label: "MTN", value: "mtn" },
        { label: "Moov", value: "moov" }
      ]
    };
  },
  methods: {
    payNow() {
      if (this.selectedPayment === "mobile_money" && !this.selectedOperator) {
        alert("Veuillez choisir un opérateur mobile !");
        return;
      }
      alert("Paiement en cours...");
    }
  }
};
</script>
<style lang="css" scoped>
    
</style>