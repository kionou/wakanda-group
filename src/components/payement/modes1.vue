<script setup lang="ts">
import axios from '@/lib/axiosConfig'
import { ref, watch, onMounted, computed } from 'vue'
import { useStore } from 'vuex'

// Define props
const props = defineProps({
  code: {
    type: String,
    required: true
  }
})

const store = useStore()
const ModesOptions = ref([])
const selectedMode = ref(null)
const loading = ref(true)
const selectedPaymentMethod = ref('')
const showMobileMoneyOptions = ref(false)
const showCardForm = ref(false)
const selectedMobileProvider = ref('')
const codeCountry = ref('')
const firstName = ref('')
const lastName = ref('')
const phoneNumber = ref('')
const rawPhoneNumber = ref('')
const formattedPhoneNumber = ref('')

// Carte bancaire
const cardNumber = ref('')
const cardExpiry = ref('')
const cardCVC = ref('')
const cardName = ref('')


// Get user data from Vuex store using computed
const loggedInUser = computed(() => {
  return store.getters["auth/myAuthenticatedUser"]
})
const countryFlag = computed(() => {
  const map = {
    '225': 'ci', // Côte d'Ivoire
    '228': 'tg', // Togo
    '229': 'bj'  // Bénin
  }
  return map[codeCountry.value] || null
})

const maxLength = computed(() => {
  const lengths = {
    '225': 14,
    '228': 11,
    '229': 14
  }
  return lengths[codeCountry.value] || 14
})


// Call API when component is mounted
onMounted(() => {
  if (props.code) {
    getModes(props.code)
    codeCountry.value = props.code
  }
})

// First, define the getModes function
const getModes = async (countryCode) => {
  try {
    loading.value = true
    const response = await axios.get("/modes-par-pays", {
      headers: {
        Authorization: `Bearer ${loggedInUser.value.token}`,
        "Content-Type": "application/json",
      },
      params: { code_pays: countryCode }
    });

    ModesOptions.value = response.data?.data;
    // selectedMode.value = ModesOptions.value[0]?.id;
    loading.value = false;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des modes de paiement:",
      error
    );
    loading.value = false;
  }
}

// Then use it in watch and onMounted
watch(() => props.code, (newCode) => {
  if (newCode) {
    getModes(newCode)
    codeCountry.value = newCode

  }
}, { immediate: true })
const handlePaymentMethodChange = (method: string) => {
  selectedPaymentMethod.value = method
  showMobileMoneyOptions.value = method === 'mobile'
  showCardForm.value = method === 'card'
}
const emit = defineEmits(['updatePaymentData'])

watch([selectedPaymentMethod, selectedMobileProvider, firstName, lastName, formattedPhoneNumber, cardNumber, cardExpiry, cardCVC, cardName], () => {
  emit('updatePaymentData', {
    paymentMethod: selectedPaymentMethod.value,
    mobileProvider: selectedMobileProvider.value,
    firstName: firstName.value,
    lastName: lastName.value,
    phoneNumber: formattedPhoneNumber.value,
    cardDetails: {
      number: cardNumber.value,
      expiry: cardExpiry.value,
      cvc: cardCVC.value,
      name: cardName.value,
    }
  })
})

const formatCardNumber = (value: string) => {
  const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
  const matches = v.match(/\d{4,16}/g)
  const match = matches && matches[0] || ''
  const parts = []

  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4))
  }

  if (parts.length) {
    return parts.join(' ')
  } else {
    return value
  }
}

const handleCardNumberInput = (event: Event) => {
  const input = event.target as HTMLInputElement
  const rawValue = input.value.replace(/\D/g, '') // garder que les chiffres
  const grouped = rawValue.match(/.{1,4}/g)?.join(' ') || ''
  cardNumber.value = grouped
}

const validatePhoneNumber = () => {
  const max = maxLength.value
  phoneNumber.value = phoneNumber.value.replace(/\D/g, '').slice(0, max)
}
const onPhoneInput = (event) => {
  const input = event.target.value.replace(/\D/g, '') // Enlever tout sauf chiffres
  rawPhoneNumber.value = input.slice(0, maxLength.value) // Limiter à la longueur max

  // Formater tous les 2 chiffres
  formattedPhoneNumber.value = rawPhoneNumber.value.match(/.{1,2}/g)?.join(' ') || ''
}
const handleExpiryInput = (event: Event) => {
  const input = event.target as HTMLInputElement
  let value = input.value.replace(/\D/g, '') // retirer tout sauf les chiffres

  if (value.length > 2) {
    value = value.slice(0, 2) + '/' + value.slice(2, 4)
  }

  cardExpiry.value = value
}

</script>

<template>
  <div class="payment-container card card-product">
    <h2>Mode de paiement</h2>
    <p class="security-note">
      <span class="check-icon">✓</span>
      La sécurité des données de votre carte est garantie
    </p>

    <div v-if="loading" class="loading-indicator">
      Chargement des modes de paiement...
    </div>

    <div v-else>
      <!-- Paiement à la livraison -->
      <div class="payment-option" @click="handlePaymentMethodChange('paye_cash')">
        <div class="option-content">
          <img src="@/assets/img/modes/livraison.png" 
               alt="paye_cash" 
               class="payment-icon">
          <span>Paiement à la livraison</span>
        </div>
        <input type="radio" 
               :checked="selectedPaymentMethod === 'paye_cash'" 
               name="payment">
      </div>

      <!-- Carte bancaire -->
      <div class="payment-option" @click="handlePaymentMethodChange('card')">
        <div class="option-content">
          <img src="@/assets/img/modes/bancaire.png" 
               alt="Carte bancaire" 
               class="payment-icon">
          <span>Carte bancaire</span>
        </div>
        <input type="radio" 
               :checked="selectedPaymentMethod === 'card'" 
               name="payment">
      </div>

      <!-- Formulaire Carte Bancaire -->
      <div v-if="showCardForm" class="card-form-section mb-3">
        <div class="form-group">
          <label>Numéro de carte</label>
          <input 
            type="text" 
            v-model="cardNumber"
            @input="handleCardNumberInput"
            placeholder="1234 5678 9012 3456"
            maxlength="19"
            class="form-input"
          >
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Date d'expiration</label>
            <input 
              type="text" 
              v-model="cardExpiry"
              @input="handleExpiryInput"
              placeholder="MM/AA"
              maxlength="5"
              class="form-input"
            >
          </div>
          <div class="form-group">
            <label>CVC</label>
            <input 
              type="number" 
              v-model="cardCVC"
              placeholder="123"
              maxlength="3"
              class="form-input"
            >
          </div>
        </div>
        <div class="form-group">
          <label>Nom sur la carte</label>
          <input 
            type="text" 
            v-model="cardName"
            placeholder="JEAN DUPONT"
            class="form-input"
          >
        </div>
      </div>

      <!-- Argent Mobile -->
      <div class="payment-option" @click="handlePaymentMethodChange('mobile')">
        <div class="option-content">
          <img src="@/assets/img/modes/mobile.png" 
               alt="Argent mobile" 
               class="payment-icon">
          <span>Argent mobile</span>
        </div>
        <input type="radio" 
               :checked="selectedPaymentMethod === 'mobile'" 
               name="payment">
      </div>

      <!-- Options Argent Mobile -->
      <div v-if="showMobileMoneyOptions" class="mobile-money-section">
        <div class="mobile-providers">
          <div v-for="provider in ModesOptions" 
               :key="provider.id" 
               class="provider-option"
               :class="{ active: selectedMobileProvider === provider.id }"
               @click="selectedMobileProvider = provider.id">
            <img :src="provider.Logo" :alt="provider.Label" class="provider-logo">
            <span>{{ provider.Label }}</span>
          </div>
        </div>

        <div class="mobile-money-form">
          <div class="form-row">
            <input type="text" 
                   v-model="firstName" 
                   placeholder="Prénom *" 
                   class="form-input">
            <input type="text" 
                   v-model="lastName" 
                   placeholder="Nom *" 
                   class="form-input">
          </div>
          <div class="phone-input">
            <span class="country-code">
              <img
                v-if="countryFlag"
                :src="`https://flagcdn.com/24x18/${countryFlag}.png`"
                alt="flag"
                width="24"
                height="18"
              />

              +{{ codeCountry }}</span>
            <input type="tel" 
                   v-model="formattedPhoneNumber" 
                   placeholder="Numéro de téléphone portable *" 
                   class="form-input"
                   :maxlength="maxLength"
                   @input="onPhoneInput" />
                   
          </div>
        </div>
      </div>

     
    </div>
  </div>
</template>

<style scoped>
.payment-container {
  margin: 0 auto;
  padding: 20px;
  background: white;
  border-radius: 12px;
}

.security-note {
  color: #4CAF50;
  font-size: 0.9em;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.check-icon {
  color: #4CAF50;
}

.loading-indicator {
  text-align: center;
  padding: 20px;
  color: #666;
}

.payment-option {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border: 1px solid #e0e0e0;
  margin-bottom: 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.payment-option:hover {
  border-color: #fb2125;
}

.option-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.payment-icon {
  width: 24px;
  height: 24px;
}

.mobile-money-section, .card-form-section {
  margin-top: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 15px;
}

.mobile-providers {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.provider-option {
  padding: 8px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.provider-logo {
  width: 30px;
  height: 30px;
  object-fit: contain;
}

.provider-option.active {
  background-color: #fb2125;
  color: white;
  border-color: #fb2125;
}

.form-row {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.form-group {
  margin-bottom: 15px;
  width: 100%;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-size: 0.9em;
  color: #666;
}

.form-input {
  flex: 1;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-size: 14px;
  width: 100%;
}

.phone-input {
  display: flex;
  align-items: center;
  gap: 10px;
}

.country-code {
  background: #f5f5f5;
  padding: 10px;
  border-radius: 6px;
  font-size: 14px;
}

.pay-button {
  width: 100%;
  padding: 15px;
  background-color: #ff6b00;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pay-button:hover {
  background-color: #ff5500;
}

.pay-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>