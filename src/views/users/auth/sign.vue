<template >
    <div class="sign-header" >

        <div class="content-sign ">
         <div class="card shadow border-radius-0">
        <div class="card-header text-center">
            <h2>Rejoignez l'univers Wakanda !</h2>
        </div>
        <div class="card-body">
            <div class="row">
                <!-- Colonne pour le texte -->
                <div class="col-md-6">
                    <p class="text-center">
                        Inscrivez-vous dès maintenant pour profiter de nos offres exclusives et découvrir nos produits exceptionnels.
                    </p>
                    <p class="text-center">
                        En vous inscrivant, vous serez les premiers à découvrir nos nouveautés, promotions et bien plus encore !
                    </p>
                </div>
                <!-- Colonne pour le formulaire -->
                <div class="col-md-6">
                  <div class="generastep d-none">
                            <div class="stepper">
                                <div class="stepper-progress">
                                    <div class="stepper-progress-bar" :style="'width:' + stepperProgress"></div>
                                </div>
    
                                <div class="stepper-item"
                                    :class="{ current: currentStep == item, success: currentStep > item }" v-for="item in 5"
                                    :key="item" @click="goToStep(item)">
                                    <div class="stepper-item-counter">
                                        <img class="icon-success"
                                            src="https://www.seekpng.com/png/full/1-10353_check-mark-green-png-green-check-mark-svg.png"
                                            alt="" />
                                        <span class="number">
                                            {{ item }}
                                        </span>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                        <div class="">
                            <!-- Étape 1 -->
                            <div v-if="currentStep === 1">
                                <div class="row mt-3 content-group">
                                <div class="col-xl-12">
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
                                <div class="col-xl-12">
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
                                <div class="col-xl-12">
                                        <div class="input-groupe me-2">
                                            <label for="userpassword">
                                                Adresse Email <span class="text-danger">*</span></label>
                                            <MazInput v-model="step1.email" color="warning"
                                                name="step1.email" size="md" rounded-size="sm"
                                                type="email" />
                                            <small v-if="v$.step1.email.$error">{{  v$.step1.email.$errors[0].$message  }}</small>
                                            <small v-if="resultError['email']">{{ resultError["email"] }}   </small>
                                        </div>
                                    </div>
                                  </div>   
                                  <div class="btnForm py-3 d-flex items-center justify-content-end">
                                    <button class="btnLogin" style="padding: 0.5em 2em !important;" :disabled="isButtonDisabled" @click.prevent="nextStep('client-register')">
                                        <span class="text-uppercase small "  :disabled="loadingItems['client-register']">
                                                            <div v-if="loadingItems['client-register']" class="d-flex align-items-center">
                                                                <LoaderBtn class="loadingbtn"></LoaderBtn>
                                                                <span class="">loading...</span> 
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
                               

                                <div class="row mt-3 content-group">
    
    <div class="col-12">
        <div class="input-groupe">
            <label for="userpassword">
                Mot de passe <span class="text-danger">*</span></label>
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

</div>  
<div class="btnForm py-3 d-flex items-center justify-content-end">
                                    <button class="btnLogin" style="padding: 0.5em 2em !important;" :disabled="isButtonDisabled" @click.prevent="nextStep('client-register')">
                                        <span class="text-uppercase small "  :disabled="loadingItems['client-register']">
                                                            <div v-if="loadingItems['client-register']" class="d-flex align-items-center">
                                                                <LoaderBtn class="loadingbtn"></LoaderBtn>
                                                                <span class="">loading...</span> 
                                                            </div>
                                                            <div v-else>
                                                                Suivant
                                                            </div>
    
                                                       
                                                    </span>
                                       
                                    </button>
                                </div> 
                            </div>
    
    
                            <!-- Étape 3 -->
                            <div v-if="currentStep === 3">
                              
                                <div class="row mt-3 content-group">
    
    <div class="col-xl-12">
        <div class="input-groupe me-2">
            <label for="userpassword">
                Nom <span class="text-danger">*</span></label>
            <MazInput v-model="step3.Nom" color="secondary"
                name="step3.Nom" size="sm" rounded-size="sm"
                type="nom" />
            <small v-if="v$.step3.Nom.$error">{{
        v$.step3.Nom.$errors[0].$message
        }}</small>
    <small v-if="resultError['Nom']">
        {{ resultError["Nom"] }}
    </small>
        </div>
    </div>
    <div class="col-xl-12">
        <div class="input-groupe">
            <label for="userpassword">
                Prenoms <span class="text-danger">*</span></label>
            <MazInput v-model="step3.Prenoms" color="secondary"
                name="step3.Prenoms" size="sm" rounded-size="sm"
                type="prenom" />
            <small v-if="v$.step3.Prenoms.$error">{{
        v$.step3.Prenoms.$errors[0].$message
        }}</small>
    <small v-if="resultError['Prenoms']">
        {{ resultError["Prenoms"] }}
    </small>
        </div>
    </div>

    <div class="col-xl-12">
        <div class="input-groupe  me-2">
            <label for="userpassword">
                Pseudo <span class="text-danger">*</span></label>
            <MazInput v-model="step3.username" color="secondary"
                name="step3.username" size="sm" rounded-size="sm"
                type="username" />
            <small v-if="v$.step3.username.$error">{{
        v$.step1.username.$errors[0].$message
        }}</small>
    <small v-if="resultError['username']">
        {{ resultError["username"] }}
    </small>
        </div>
    </div>

        </div> 
    
 
                               
        <div class="btnForm py-3 d-flex items-center justify-content-end">
                                    <button class="btnLogin" style="padding: 0.5em 2em !important;" :disabled="isButtonDisabled" @click.prevent="nextStep('client-register')">
                                        <span class="text-uppercase small "  :disabled="loadingItems['client-register']">
                                                            <div v-if="loadingItems['client-register']" class="d-flex align-items-center">
                                                                <LoaderBtn class="loadingbtn"></LoaderBtn>
                                                                <span class="">loading...</span> 
                                                            </div>
                                                            <div v-else>
                                                                Suivant
                                                            </div>
    
                                                       
                                                    </span>
                                       
                                    </button>
                                </div> 
                            </div>

                        </div> 
                </div>
            </div>
        </div>
    </div>
         

        </div>
                   
			
        <Dialog v-model:visible="visible" modal header="Creation de compte" :style="{ width: '30rem' }">
          <span class="text-surface-500 dark:text-surface-400 block mb-8">Votre compte Wakanda a été crée avec success</span>
        
          <p>Merci pour la confiance absolue </p>
          <div class="btnForm py-3 d-flex items-center justify-content-end">
                                  
        <button class="btnLogin" @click.prevent="$router.push({ path: '/login-client' })">OK</button>
    </div> 
      </Dialog>
                
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
      visible:false,
      step1:{
       
        Whatsapp:"",
        pays:"Togo",
        email:"",

      },
      step2:{
        password:"",
        password_confirmation:"",
      },
      step3:{
        Nom:"",
        Prenoms:"",
        username:"",
       
      }, 

      step4:{
        code:"",
      
       
      }, 
    };
  },
  validations: {
    step1: { 
      Whatsapp: { require },
      pays: { require },
      email: { require  , ValidEmail},
    },
    step2:{
        password: { require },
      password_confirmation: { require },
    },
    step3: {
      Nom: { require },
      Prenoms: { require },
      username: { require },
    },
    step4:{
        code: { require },
    },
     
    
  },
 async mounted() {
  await  this.getCountryOptions()
  },
  methods: {
    validatePasswordsMatch() {
      return this.step2.password === this.step2.password_confirmation;
    },

    stepperProgress() {
      return (100 / 4) * (this.currentStep - 1) + "%";
    },
    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },

    goToStep(step) {
      this.currentStep = step;
    },
    async nextStep1() {
      try {

        if (this.currentStep === 1) {
            this.v$.step1.$touch();
            if (this.v$.$errors.length == 0) {
                
                   this.currentStep++;
                   window.scrollTo({ top: 0, behavior: "smooth" });
               

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
               this.visible = true 
            } else {
              console.log("errroor1", this.v$.$errors);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });

            }
       


        }
        else if (this.currentStep === 4) {
            this.v$.step4.$touch();
            if (this.v$.$errors.length == 0) {
               this.currentStep++;
               window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
              console.log("errroor1", this.v$.$errors);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });

            }
       


        } else if (this.currentStep === 5) {
            this.v$.step5.$touch();
            if (this.v$.$errors.length == 0) {
           
            } else {
              console.log("errroor1", this.v$.$errors);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });

            }
       


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
                  
               } else {
                   console.error("Erreur lors de l'envoi des données :", response);
                   window.scrollTo({ top: 0, behavior: "smooth" });
                  
               }

            } else {
              console.log("errroor1", this.v$.$errors);
            }


        }
        else if (this.currentStep === 2) {
            this.v$.step2.$touch();
            if (this.v$.$errors.length == 0) {
                this.loadingItems[modalId] = true
                const stepData = this.collectStepData(this.currentStep);
               const response = await this.registerClientData(stepData) 
               this.loadingItems[modalId] = false

               if (response === true) {
                 this.resultError= {}
                   this.currentStep++;
                   window.scrollTo({ top: 0, behavior: "smooth" });
                  
               } else {
                   console.error("Erreur lors de l'envoi des données :", response);
                   window.scrollTo({ top: 0, behavior: "smooth" });
                   
               }

            } else {
              console.log("errroor1", this.v$.$errors);
            }


        }

        else if (this.currentStep === 3) {
            this.v$.step3.$touch();
            if (this.v$.$errors.length == 0) {
                this.loadingItems[modalId] = true
                const stepData = this.collectStepData(this.currentStep);
                 const response = await this.registerClientData(stepData) 
               this.loadingItems[modalId] = false

               if (response === true) {
                 this.resultError= {}
                    this.visible = true
               } else {
                   console.error("Erreur lors de l'envoi des données :", response);
                   window.scrollTo({ top: 0, behavior: "smooth" });
                   
               }

            } else {
              console.log("errroor1", this.v$.$errors);
            }


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
           Whatsapp: this.step1.Whatsapp,
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
           Nom: this.step3.Nom,
           Prenoms: this.step3.Prenoms,
           username:this.step3.username,
           role:2
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
         console.error("Erreur lors de la mise à ", response.data); 
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

.sign-header{
    height: 100vh !important; 
    /* border:1px solid blue; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
	flex-direction: column;
}
    .content-sign{

        /* border: 1px solid red; */
        max-width: 700px;
        width: 100%;
        height: 400px ;
        border-radius: 0 !important;
    }
    .card {
            padding: 10px;
            border-radius: 0 !important; 
        }
        .card-header {
            background-color: #343a40;
            color: white;
            padding: 15px;
            border-radius: 0 !important;
        }
        .card-header h2 {
            font-size: 1.75rem; /* Taille de la police du titre */
            font-weight: 700; /* Met en gras le titre */
            color: white;

        }
        .col-md-6 p {
            font-size: 1rem; /* Taille de la police du texte explicatif */
            line-height: 1.6; /* Espacement entre les lignes */
            color: #333; /* Couleur du texte */
            font-weight: 400; /* Poids du texte */
        }
        .col-md-6 p:first-child {
            font-size: 1.1rem; /* Un peu plus grand pour le premier paragraphe */
            color: #555; /* Couleur légèrement plus claire */
        }
.sign-logo{

	width: auto;
	height: 75px;
	margin: 30px 0;
}

.sign-logo img{

width: auto;
height: 100%;
}




/* nouveau */


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



   
</style>