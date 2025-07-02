<template>
  <div class="container p-4 bg-white rounded shadow">
    <h3 class="mb-3">Mode de paiement</h3>

    <!-- Liste des moyens de paiement -->
    <div v-for="(option, index) in paymentMethods" :key="index" class="form-check mb-2">
      <input 
        class="form-check-input" 
        type="radio" 
        v-model="selectedPayment" 
        :value="option.value" 
        :id="'payment-' + index"
      />
      <label class="form-check-label ms-2" :for="'payment-' + index">
        {{ option.label }}
      </label>

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
    </div>

    <!-- Bouton de paiement -->
    <button @click="payNow" class="btn btn-primary w-100 mt-3">
      Payer maintenant
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedPayment: "",
      selectedOperator: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      paymentMethods: [
        { label: "Carte Bancaire", value: "credit_card" },
        { label: "PayPal", value: "paypal" },
        { label: "Argent Mobile", value: "mobile_money" },
        { label: "Virement Bancaire", value: "bank_transfer" }
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
