<template >
    <div class="sign-header">
        
        <div class="content-sign">
            <div class="texte text-center">
            <h1>Pourquoi créer un compte ?</h1>
            <p>
                Créer un compte sur Wakanda vous offre de nombreux avantages : un paiement plus rapide, <br> un suivi facile de vos commandes, et bien plus encore !
                Commencez vos achats dès maintenant ! <br>
                Bienvenue sur Wakanda, entrez votre e-mail pour démarrer.
            </p>
        </div>
                        <div class="generastep">
                            <div class="stepper">
                                <div class="stepper-progress">
                                    <div class="stepper-progress-bar" :style="'width:' + stepperProgress"></div>
                                </div>
    
                                <div class="stepper-item"
                                    :class="{ current: currentStep == item, success: currentStep > item }" v-for="item in 3"
                                    :key="item" @click="goToStep(item)">
                                    <div class="stepper-item-counter">
                                        <img class="icon-success"
                                            src="https://www.seekpng.com/png/full/1-10353_check-mark-green-png-green-check-mark-svg.png"
                                            alt="" />
                                        <span class="number">
                                            {{ item }}
                                        </span>
                                    </div>
                                    <!-- <span class="stepper-item-title"> Step {{ item }} </span> -->
                                </div>
                            </div>
                        </div>
                        <div class="container-fluid">
                            <!-- Étape 1 -->
                            <div v-if="currentStep === 1">
                                <div class="form-container">
                                    <div class="row mt-3 content-group">
    
                                        <div class="col-xl-12">
                                        <div class="input-groupe  me-2">
                                            <label for="userpassword">
                                                Adresse Email <span class="text-danger">*</span></label>
                                            <MazInput v-model="step1.email" color="warning"
                                                name="step1.email" size="md" rounded-size="sm"
                                                type="email" />
                                            <small v-if="v$.step1.email.$error">{{
                                        v$.step1.email.$errors[0].$message
                                        }}</small>
                                    <small v-if="resultError['email']">
                                        {{ resultError["email"] }}
                                    </small>
                                        </div>
                                    </div>
                                        
                                     
                                    </div>
    
    
                                </div>
                                <div class="btnForm py-3 d-flex items-center justify-content-end">
                                    <button class="btnLogin" :disabled="isButtonDisabled" @click.prevent="nextStep()">
                                        <span class="text-uppercase small "  :disabled="loadingItems['userModalSign']">
                                                            <div v-if="loadingItems['userModalSign']">
                                                                <LoaderBtn class="loadingbtn">loading</LoaderBtn>
                                                            </div>
                                                            <div v-else>
                                                                Suivant
                                                            </div>
    
                                                       
                                                    </span>
                                       
                                    </button>
                                </div>
                            </div>
    
                            <!-- Étape 2 -->
                            <div v-if="currentStep === 2">
                                <div class="form-container">
                                     <!-- <div class="form-container">
                                    <p>Saisissez le code à 4 chiffres envoyé à l'adresse <br> <b>Wakanda@gmail.com</b></p>
    
                                    <div class="row mt-3 content-group">
                                        <div class="col-12">
                                            <div class="input-groupe">
                                                <MazInputCode v-model="code" size="sm" />
                                            </div>
                                        </div>
    
    
                                    </div>
                                </div> -->
                                    <!-- <div class="row mt-3 content-group">
    
                                        <div class="col-12">
                                            <div class="input-groupe">
                                                <label for="userpassword">
                                                    Mot de passe</label>
                                                <MazInput v-model="step2.password" color="secondary"
                                                    name="step2.password" size="sm" rounded-size="sm" type="password"
                                                     />
                                                <small v-if="v$.step2.password.$error">{{
                                            v$.step2.password.$errors[0].$message
                                            }}</small>
                                        <small v-if="resultError['password']">
                                            {{ resultError["password"] }}
                                        </small>
                                            </div>
                                        </div>
    
                                        <div class="col-12">
                                            <div class="input-groupe">
                                                <label for="userpassword">
                                                    Confirmer le mot de passe <span class="text-danger">*</span></label>
                                                <MazInput v-model="step2.password_confirmation" color="secondary"
                                                    name="step2.password_confirmation" size="sm" rounded-size="sm"
                                                    type="password" />
                                                    <small v-if="v$.step2.password_confirmation.$error">{{
                                                v$.step2.password_confirmation.$errors[0].$message
                                                }}</small>
                                                <small v-if="resultError['password_confirmation']">
                                                    {{ resultError["password_confirmation"] }}
                                                </small>
                                                <small v-if="!validatePasswordsMatch()">Les mots de passe ne correspondent
                                                    pas.</small>
                                            </div>
                                        </div>
    
                                    </div>  -->
                                </div>
                                <div class="btnForm py-3 d-flex items-center justify-content-end">
                                    <!-- <button class="btnLogin" @click.prevent="prevStep">Previous</button> -->
                                    <button class="btnLogin" @click.prevent="nextStep()">suivant</button>
                                </div>
                            </div>
    
    
                            <!-- Étape 3 -->
                            <div v-if="currentStep === 3">
                                <div class="row mt-3 content-group">
    
    <div class="col-xl-6">
        <div class="input-groupe me-2">
            <label for="userpassword">
                Nom <span class="text-danger">*</span></label>
            <MazInput v-model="step1.Nom" color="secondary"
                name="step1.Nom" size="sm" rounded-size="sm"
                type="nom" />
            <small v-if="v$.step1.Nom.$error">{{
        v$.step1.Nom.$errors[0].$message
        }}</small>
    <small v-if="resultError['Nom']">
        {{ resultError["Nom"] }}
    </small>
        </div>
    </div>
    <div class="col-xl-6">
        <div class="input-groupe">
            <label for="userpassword">
                Prenoms <span class="text-danger">*</span></label>
            <MazInput v-model="step1.Prenoms" color="secondary"
                name="step1.Prenoms" size="sm" rounded-size="sm"
                type="prenom" />
            <small v-if="v$.step1.Prenoms.$error">{{
        v$.step1.Prenoms.$errors[0].$message
        }}</small>
    <small v-if="resultError['Prenoms']">
        {{ resultError["Prenoms"] }}
    </small>
        </div>
    </div>

    <div class="col-xl-6">
        <div class="input-groupe  me-2">
            <label for="userpassword">
                Pseudo <span class="text-danger">*</span></label>
            <MazInput v-model="step1.username" color="secondary"
                name="step1.username" size="sm" rounded-size="sm"
                type="username" />
            <small v-if="v$.step1.username.$error">{{
        v$.step1.username.$errors[0].$message
        }}</small>
    <small v-if="resultError['username']">
        {{ resultError["username"] }}
    </small>
        </div>
    </div>
    <div class="col-xl-6">
        <div class="input-groupe">
            <label for="userpassword">
                Pays <span class="text-danger">*</span></label>
                <MazSelect v-model="step1.pays" :options="sortedCountryOptions" v-slot="{ option }"  color="secondary"  size="sm" rounded-size="sm"
              search  option-value-key="value" option-label-key="label" option-input-value-key="value"
                >
                <div class="d-flex align-items-center"
                    style="padding-top: 0.5rem; padding-bottom: 0.5rem; width: 100%; gap: 1rem">
                    <MazAvatar size="0.8rem" :src="option.flag" />
                    <strong>
                    {{ option.code }}
                    </strong>
                </div>
                </MazSelect>
            <small v-if="v$.step1.pays.$error">{{
        v$.step1.pays.$errors[0].$message
        }}</small>
    <small v-if="resultError['pays']">
        {{ resultError["pays"] }}
    </small>
        </div>
    </div>

    <div class="col-xl-6">
        <div class="input-groupe  me-2">
            <label for="userpassword">
                Adresse Email <span class="text-danger">*</span></label>
            <MazInput v-model="step1.email" color="secondary"
                name="step1.email" size="sm" rounded-size="sm"
                type="email" />
            <small v-if="v$.step1.email.$error">{{
        v$.step1.email.$errors[0].$message
        }}</small>
    <small v-if="resultError['email']">
        {{ resultError["email"] }}
    </small>
        </div>
    </div>
    <div class="col-xl-6">
        <div class="input-groupe">
            <label for="userpassword">
                Numéro whatsApp <span class="text-danger">*</span></label>
                <MazPhoneNumberInput v-model="step1.Whatsapp" size="sm" rounded-size="sm" show-code-on-list color="secondary"
                    :ignored-countries="['AC']" defaultCountryCode="TG" update="results = $event"
                    :success="results?.isValid" />
            <small v-if="v$.step1.Whatsapp.$error">{{
        v$.step1.Whatsapp.$errors[0].$message
        }}</small>
    <small v-if="resultError['Whatsapp']">
        {{ resultError["Whatsapp"] }}
    </small>
        </div>
    </div>
         </div>
                               
                                <div class="btnForm py-3 d-flex items-center justify-content-end">
                                    <!-- <button class="btnLogin" @click.prevent="prevStep">Previous</button> -->
                                    <button class="btnLogin" @click.prevent="nextStep()">valider</button>
                                </div>
                            </div>
    
    
    
                        </div>
        </div>
     
    </div>
</template>
<script>
import axios from "@/lib/axiosConfig";
import useVuelidate from "@vuelidate/core";
import { require, lgmin, lgmax, ValidEmail } from "@/functions/rules";
import MazPhoneNumberInput from "maz-ui/components/MazPhoneNumberInput";
import LoaderBtn from '@/components/others/loader/loaderbtn.vue';

export default {
    components: {
	   MazPhoneNumberInput , LoaderBtn
	},
  data() {
    return {
      indicateur: "",
      currentStep: 1,
      loadingItems:{},
      v$: useVuelidate(),
      error: "",
      resultError: {},
      sortedCountryOptions:[],
      step1:{
        email:"",
        
      },
      step3:{
        email:"",
        Nom:"",
        Prenoms:"",
        Whatsapp:"",
        username:"",
        pays:"Togo",
      },
      step2:{
        password:"",
        password_confirmation:"",
      }
    };
  },
  validations: {
    step1:{
        email: { require  , ValidEmail},
    },
    step3: {
      email: { require  , ValidEmail},
      Nom: { require },
      Prenoms: { require },
      Whatsapp: { require },
      username: { require },
      pays: { require },

    },
    step2:{
        password: { require },
      password_confirmation: { require },
    }
    
  },
 async mounted() {
  await  this.getCountryOptions()
  },
  methods: {
    validatePasswordsMatch() {
      return this.step2.password === this.step2.password_confirmation;
    },

    stepperProgress() {
      return (100 / 2) * (this.currentStep - 1) + "%";
    },
    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },

    goToStep(step) {
      this.currentStep = step;
    },
    async nextStep(modalId) {
      try {

        if (this.currentStep === 1) {
            this.v$.step1.$touch();
            if (this.v$.$errors.length == 0) {
                this.loadingItems[modalId] = true
                const stepData = this.collectStepData(this.currentStep);
               const response = await this.registerClientData(stepData) 
               this.loadingItems[modalId] = false

               if (response === true) {
                 this.resultError= {}
                   this.currentStep++;
                   window.scrollTo({ top: 0, behavior: "smooth" });
                   this.loading = false;
               } else {
                   console.error("Erreur lors de l'envoi des données :", response);
                   window.scrollTo({ top: 0, behavior: "smooth" });
                   this.loading = false;
               }

            } else {
              console.log("errroor1", this.v$.$errors);
            }


        }
        else if (this.currentStep === 2) {
            this.v$.step2.$touch();
            if (this.v$.$errors.length == 0) {
               this.currentStep++;

            } else {
              console.log("errroor1", this.v$.$errors);
            }


        }

        else if (this.currentStep === 3) {
            this.v$.step3.$touch();
            if (this.v$.$errors.length == 0) {
            //   this.SubmitPixGrossiste(modalId)
            } else {
              console.log("errroor1", this.v$.$errors);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });

            }
        //   this.$router.push("/client");


        }


      } catch (error) {
        // Gérer les erreurs
        console.log("errroor222", this.v$.$errors);

        console.error("Une erreur s'est produite :", error);
        console.log("errroor222", this.v$.$errors);


        window.scrollTo({ top: 0, behavior: "smooth" });
        this.loading = false;
      }
    },
    collectStepData(step) {
 let stepData = {};


// Collecter les données des étapes précédentes
for (let i = 1; i < step; i++) {
 const previousStepData = this.collectStepData(i);
 Object.assign(stepData, previousStepData);
}
 
 switch (step) {
     case 1:
         stepData = {
           ...stepData,
           email: this.step1.email,
           Nom: this.step1.Nom,
           Prenoms: this.step1.Prenoms,
           Whatsapp: this.step1.Whatsapp,
           username:this.step1.username,
           pays: this.step1.pays,
          
         };
         break;
     case 2:
         stepData = {
           ...stepData,
           password: this.step2.password,
           password_confirmation: this.step2.password_confirmation,
         };
         break;

         case 3:
         stepData = {
           ...stepData,
           any_accident_during_past_year:this.step3.any_accident_during_past_year ,
         };
         break;
        
       
     // Ajoutez des cas pour chaque étape du formulaire
     default:
         break;
 }
 
 return stepData;
},
async registerClientData(Data) {
 try {
     const response = await axios.post('/register-new/user', Data);
     if (response.data.status === 'success') {
       
         return true;
     } else {
         this.error = "An error has occurred. Please try again later";
         return false;
     }
 } catch (error) {
   console.error("Erreur lors de la mise à ", error.response.data.errors);


       if(error.response.data.errors){
         const errorKeys = Object.keys(error.response.data.errors);
         const currentStepFields = Object.keys(Data);
         const isCurrentStepError = errorKeys.some(key => currentStepFields.includes(key));

         if (isCurrentStepError === true) {
             this.formatValidationErrors(error.response.data.errors);
           return false;

         }else{
           return true;
         }

         
       }
       else{

         if (error.response) {
             
         } else {
             this.formatValidationErrors(error.response.data.errors);
             this.loading = false;
         }
       }

 }
},
    async getCountryOptions() {

try {
  await this.$store.dispatch("fetchCountries");
  const options = JSON.parse(
    JSON.stringify(this.$store.getters["getCountryOptions"])
  );
  this.sortedCountryOptions = options.map((country) => ({
      label:country.translations?.fra?.common,
      flag: country.flags.png,
      value: country.translations?.fra?.common,
      code: country.cca3

    }));
  
} catch (error) {
  console.error(
    "Erreur lors de la récupération des options des pays :",
    error.message
  );
}
},
async formatValidationErrors(errors) {
   const formattedErrors = {};

   for (const field in errors) {
     const errorMessages = errors[field]; // Liste complète des messages d'erreur
     const concatenatedError = errorMessages.join(", "); // Concaténer les messages d'erreur
     formattedErrors[field] = concatenatedError; // Utilisez le nom du champ comme clé
   }

   this.resultError = formattedErrors; // Stockez les erreurs dans un objet
 
   for (let key in this.resultError) {
if (this.resultError.hasOwnProperty(key)) {
 // Construire le message d'erreur avec le nom du champ (clé) et son message (valeur)
 let errorMessage = `${key}: ${this.resultError[key]}`;
 // Afficher le toast pour chaque erreur
 // this.triggerToast(errorMessage);
}
}
 },
  },
};
</script>
<style lang="css" scoped>
.fm-history-login-container {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-align: center;
    align-items: center;
}

.fm-history-login-container.new-history img {
    margin-bottom: 14px;
}

.fm-history-login-avatar {
    width: 90px;
    height: 90px;
    margin-bottom: 8px;
    border-radius: 50% 50%;
}

.fm-history-login-container.new-history img {
    margin-bottom: 14px;
}

.fm-history-login-avatar {
    width: 90px;
    height: 90px;
    margin-bottom: 8px;
    border-radius: 50% 50%;
}

.fm-history-login-container.new-history .fm-history-login-username {
    margin-bottom: 8px;
}

.fm-history-login-username {
    font-weight: 700;
    font-size: 18px;
    color: #191919;
    line-height: 24px;
}

.fm-history-login-container.new-history .fm-history-login-account-number {
    margin-bottom: 32px;
}

.fm-history-login-account-number {
    font-size: 16px;
    color: #757575;
    line-height: 20px;
    margin-top: 4px;
    margin-bottom: 16px;
    direction: ltr;
}

.new-fm-login .fm-history-login-hint {
    margin-bottom: 20px;
}

.fm-history-login-hint {
    padding-top: 4px;
    color: #757575;
    font-size: 14px !important;
    line-height: 16px;
    letter-spacing: 0;
}

.fm-history-login-hint-link-text {
    text-decoration: underline;
    cursor: pointer;
    float: right;
    color: blue;
}

.cosmos-btn:not(.cosmos-btn-icon-only):not(.cosmos-btn-link) {
    min-width: 80px;
}

.nfm-common-button .cosmos-btn-primary {
    padding: 12px 24px;
    font-size: 18px;
    line-height: 24px;
    font-weight: 600;
}

.nfm-common-button .cosmos-btn {
    border-radius: 24px;
    height: auto;
}

.cosmos-btn-primary.cosmos-btn-large {
    padding-top: 10px;
    padding-bottom: 10px;
}

.cosmos-btn-primary[disabled] {
    background: linear-gradient(90deg, rgba(255, 100, 14, .5), rgba(255, 48, 0, .5));
    color: hsla(0, 0%, 100%, .5);
}

.cosmos-btn[disabled] {
    cursor: not-allowed;
    border-color: #ccc;
    color: #ccc;
    background: transparent;
    text-shadow: none;
    box-shadow: none;
}

button[disabled],
input[disabled] {
    cursor: default;
}

.cosmos-btn-primary {
    padding-top: 4px;
    padding-bottom: 4px;
    background: linear-gradient(90deg, #ff640e, #ff3000);
    color: #fff;
    border-width: 0;
}

.cosmos-btn-large {
    height: 44px;
}

.cosmos-btn-extra-large,
.cosmos-btn-large {
    padding-top: 9px;
    padding-bottom: 9px;
    font-size: 16px;
    line-height: 24px;
    border-radius: 22px;
}

.cosmos-btn-block {
    width: 100%;
}

.cosmos-btn {
    position: relative;
    display: inline-block;
    font-weight: 700;
    white-space: nowrap;
    text-align: center;
    background-image: none;
    border: 1px solid #999;
    cursor: pointer;
    transition: all .3s cubic-bezier(.645, .045, .355, 1);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    box-sizing: border-box;
    font-size: 16px;
    padding: 3px 12px;
    height: 32px;
    font-size: 14px;
    line-height: 24px;
    background: #fff;
    color: #222;
    border-radius: 16px;
    outline: 0;
}

.new-fm-login .fm-history-login-switch-account {
    color: #2490df;
}

.new-fm-login .fm-history-login-hint {
    margin-bottom: 20px;
}

.fm-history-login-switch-account {
    text-align: center;
    padding-top: 16px;
}

.fm-history-login-hint {
    padding-top: 4px;
    color: #757575;
    font-size: 14px !important;
    line-height: 16px;
    letter-spacing: 0;
}


.tx-green-1 {
    color: #75cc65;
    font-weight: 600;
}

.wrapper-stepper {
    background-color: #fff;
    padding: 60px;
    border-radius: 32px;
    box-shadow: rgba(0, 0, 0, 0.09);
}

.stepper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* width: 660px; */
    position: relative;
    z-index: 0;
    /* margin-bottom: 24px; */
}

.stepper-progress {
    position: absolute;
    background-color: #c5c5c5;
    height: 2px;
    z-index: -1;
    left: 0;
    right: 0;
    margin: 0 auto;
}

.stepper-progress-bar {
    position: absolute;
    left: 0;
    height: 100%;
    width: 0%;
    background-color: #47c00b;
    transition: all 500ms ease;
}

.stepper-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #c5c5c5;
    transition: all 500ms ease;
    cursor: pointer;
}

.stepper-item-counter {
    height: 35px;
    width: 35px;
    display: grid;
    place-items: center;
    background-color: #fff;
    border-radius: 100%;
    border: 2px solid #c5c5c5;
    position: relative;
}

.stepper-item-counter .icon-success {
    position: absolute;
    opacity: 0;
    transform: scale(0);
    width: 18px;
    transition: all 500ms ease;
}

.stepper-item-counter .number {
    font-size: 15px;
    transition: all 500ms ease;
}

.stepper-item-title {
    position: absolute;
    font-size: 15px;
    bottom: -39px;
    width: 71px;
    display: flex;
    justify-content: center;
}

.stepper-item.success .stepper-item-counter {
    border-color: #75cc65;
    background-color: #c8ebc1;
    color: #fff;
    font-weight: 600;
}

.stepper-item.success .stepper-item-counter .icon-success {
    opacity: 1;
    transform: scale(1);
}

.stepper-item.success .stepper-item-counter .number {
    opacity: 0;
    transform: scale(0);
}

.stepper-item.success .stepper-item-title {
    color: #75cc65;
}

.stepper-item.current .stepper-item-counter {
    border-color: #75cc65;
    background-color: #75cc65;
    color: #fff;
    font-weight: 600;
}

.stepper-item.current .stepper-item-title {
    color: #818181;
}

.signup a:hover {
    text-decoration: underline var(--fc-primary);
}

.sign {
    display: block;
    width: 100%;
    background-color: var(--fc-primary);
    padding: 0.75rem;
    text-align: center;
    color: black;
    border: none;
    border-radius: 0.375rem;
    font-weight: 600;
    margin-top: 50px;
}

.signup {
    text-align: center;
    font-size: 0.75rem;
    line-height: 1rem;
    color: rgba(156, 163, 175, 1);
}


.btnForm {
    max-width: 1140px;
    margin: 0px auto;
    /* background-color: white; */
    padding: 1rem;
    color: black;

}

.btnLogin {
    padding: 1em 3em;
    font-size: 12px;
    font-weight: 500;
    color: #fff;
    background-color: var(--fc-primary);
    border: none;


    cursor: pointer;
    outline: none;
}

.btnLogin:hover {
    background-color: #fff;
    border: 1px solid var(--fc-primary);
    color: #000;
}


.sign-header{
    /* height: 100vh !important;  */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
	flex-direction: column;
    padding: 5% 0;
}
    .content-sign{

        border: 1px solid red;
        max-width: 50%;
        width: 100%;
        height: 400px ;
    }
</style>