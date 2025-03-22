<template>
  <div class="sign-header">
    <div class="content-sign">
      <div class="card shadow border-radius-0">
        <div class="card-header text-center">
          <h2>Rejoignez l'univers Wakanda !</h2>
        </div>
        <div class="card-body">
          <div class="row" style="height: 100%">
            <div class="col-md-12">
              <div class="col-md-12">
                <p class="text-center fw-bold">Bienvenue chez Wakanda</p>
                <p class="text-center">
                  Saisissez votre adresse e-mail ou numéro de téléphone pour
                  vous connecter .
                </p>
                <small>{{ errormsg }}</small>
                <small>{{ error }}</small>
              </div>
              <div class="form-container">
                <div class="row mt-3 content-group">
                  <div class="col-xl-12">
                    <div class="input-groupe">
                      <label for="userpassword">
                        Adresse Email <span class="text-danger">*</span></label
                      >
                      <MazInput
                        v-model="step1.email"
                        color="warning"
                        name="step1.email"
                        size="sm"
                        rounded-size="sm"
                        type="email"
                      />
                      <small v-if="v$.step1.email.$error">{{
                        v$.step1.email.$errors[0].$message
                      }}</small>
                      <small v-if="resultError['email']"
                        >{{ resultError["email"] }}
                      </small>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="input-groupe">
                      <label for="userpassword">
                        Mot de passe <span class="text-danger">*</span></label
                      >
                      <MazInput
                        v-model="step1.password"
                        color="warning"
                        name="step1.password"
                        size="sm"
                        rounded-size="sm"
                        type="password"
                      />
                      <small v-if="v$.step1.password.$error">{{
                        v$.step1.password.$errors[0].$message
                      }}</small>
                      <small v-if="resultError['password']">
                        {{ resultError["password"] }}
                      </small>
                    </div>
                  </div>
                  <div class="mt-1">
                          <div class="float-end">
                            <a href="#" class="text-info" v-on:click="(()=>{addEmail = true})">Mot de passe oublié?</a>
                          </div>
  
                        </div>
                </div>
              </div>
              <div
                class="btnForm py-3 d-flex items-center justify-content-center"
              >
                <button
                  class="btnLogin"
                  style="padding: 0.5em 2em !important"
                  :disabled="isButtonDisabled"
                  @click.prevent="SubmitLogin('client-login')"
                >
                  <span
                    class="text-uppercase small"
                    :disabled="loadingItems['client-login']"
                  >
                    <div
                      v-if="loadingItems['client-login']"
                      class="d-flex align-items-center"
                    >
                      <LoaderBtn class="loadingbtn"></LoaderBtn>
                      <span class="">loading...</span>
                    </div>
                    <div v-else>Se connecter</div>
                  </span>
                </button>
              </div>
            </div>
            <div class="colsm-12">
              <small class="text-center text-dark row">
                <div class="col-xl-12">
                  En continuant, vous acceptez les conditions d'utilisation de
                  Wakanda
                </div>
                <b class="col-xl-12 text-primary">Termes et conditions</b>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Dialog
      v-model:visible="VerifieCodeBywhatsapp"
      modal
      header="Verification du code"
      :style="{ width: '30rem' }"
    >
      <div class="d-flex justify-content-center align-items-center flex-column">
        <!-- <small v-if="erroOtps === true" class="text-primary">{{ errorOtp }}</small> -->
        <span class="text-primary mb-2 text-center">{{ errorOtp }}</span>
        <span class="mb-2 text-center"
          >Entrez le code de vérification envoyé à</span
        >
        <InputOtp
          v-model="step2.code"
          integerOnly
          @input="onOtpInputPassworodWhatsapp"
          :disabled="loadingVerification === true"
        />
        <p v-if="loadingVerification">
          Vous n'avez pas reçu le code? Cela peut prendre un peu de temps,
          redemandez un nouveau code dans
          <b class="text-primary">{{ formattedTime }}</b>
        </p>
        <div v-else>
          <p class="signin" @click="renew">
            <span>Renvoyer un nouveau code</span>
          </p>
        </div>
      </div>
      <ProgressSpinner
        v-if="loadingVerification"
        style="width: 50px; height: 50px"
        strokeWidth="8"
        fill="transparent"
        animationDuration=".5s"
        aria-label="Custom ProgressSpinner"
      />
    </Dialog>

    <Dialog
      v-model:visible="VerifieCodeByMail"
      modal
      header="Verification du code"
      :style="{ width: '30rem' }"
    >
      <div class="d-flex justify-content-center align-items-center flex-column">
        <!-- <small v-if="erroOtps === true" class="text-primary">{{ errorOtp }}</small> -->
        <span class="text-primary mb-2 text-center">{{ errorOtp }}</span>
        <span class="mb-2 text-center"
          >Entrez le code de vérification envoyé à</span
        >
        <InputOtp
          v-model="step2.code"
          integerOnly
          @input="onOtpInputPassworodMail"
          :disabled="loadingVerification === true"
        />
        <p v-if="loadingVerification">
          Vous n'avez pas reçu le code? Cela peut prendre un peu de temps,
          redemandez un nouveau code dans
          <b class="text-primary">{{ formattedTime }}</b>
        </p>
        <div v-else>
          <p class="signin" @click="renew">
            <span>Renvoyer un nouveau code</span>
          </p>
        </div>
      </div>
      <ProgressSpinner
        v-if="loadingVerification"
        style="width: 50px; height: 50px"
        strokeWidth="8"
        fill="transparent"
        animationDuration=".5s"
        aria-label="Custom ProgressSpinner"
      />
    </Dialog>

    <Dialog
      v-model:visible="ChoiceMethodeSendOtp"
      modal
      header="Méthode d'envoi"
      :style="{ width: '30rem' }"
    >
      <div class="d-flex justify-content-center align-items-center flex-column">
        <span class="mb-2 text-center"
          >Veuillez sélectionner un canal pour récevoir votre code
          d'authentification</span
        >
      </div>
      <div class="btnForm py-3 d-flex items-center justify-content-evenly">
        <button
          class="btnLogin d-flex align-items-center"
          style="padding: 0.5em 2em !important; background-color: #25d366"
          :disabled="isButtonDisabled"
          @click.prevent="MethodeOtp('whatsapp')"
        >
          <i class="bi bi-whatsapp"></i>
          <span
            class="text-uppercase small ms-2"
            :disabled="loadingItems['whatsapp']"
          >
            <div
              v-if="loadingItems['whatsapp']"
              class="d-flex align-items-center"
            >
              <LoaderBtn class="loadingbtn"></LoaderBtn>
              <span class="">loading...</span>
            </div>
            <div v-else>WhatsApp</div>
          </span>
        </button>

        <button
          class="btnLogin d-flex align-items-center"
          style="padding: 0.5em 2em !important"
          :disabled="isButtonDisabled"
          @click.prevent="MethodeOtp('mail')"
        >
          <i class="bi bi-envelope"></i>
          <span
            class="text-uppercase small ms-2"
            :disabled="loadingItems['mail']"
          >
            <div v-if="loadingItems['mail']" class="d-flex align-items-center">
              <LoaderBtn class="loadingbtn"></LoaderBtn>
              <span class="">loading...</span>
            </div>
            <div v-else>E mail</div>
          </span>
        </button>
      </div>
    </Dialog>

    <!-- mot de passe oublie -->

    <Dialog v-model:visible="addEmail" modal
      header="Entrez votre adresse email"
      :style="{ width: '30rem' }"
    >
      <div class="d-flex justify-content-center align-items-center flex-column">
        <span class="text-primary mb-2 text-center">{{ errorOtp }}</span>
        <span class="mb-2 text-center"
          >  Entrez votre email et des instructions vous seront envoyées !</span
        >
      </div>
      <div class="form-container">
                <div class="row mt-3 content-group">
                  <div class="col-xl-12">
                    <div class="input-groupe">
                      
                      <MazInput
                        v-model="step3.email"
                        color="warning"
                        name="step3.email"
                        size="sm"
                        rounded-size="sm"
                        type="email"
                        placeholder="Entrez votre adresse email"
                      />
                      <small v-if="v$.step3.email.$error">{{
                        v$.step3.email.$errors[0].$message
                      }}</small>
                      <small v-if="resultError['email']"
                        >{{ resultError["email"] }}
                      </small>
                    </div>
                  </div>
                 
                 
                </div>
              </div>
      <div class="btnForm py-3 d-flex items-center justify-content-evenly">
        

        <button
          class="btnLogin d-flex align-items-center"
          style="padding: 0.5em 2em !important"
          :disabled="isButtonDisabled"
          @click.prevent="SendEmail('addEmail')"
        >
        
          <span
            class="text-uppercase small ms-2"
            :disabled="loadingItems['addEmail']"
          >
            <div v-if="loadingItems['addEmail']" class="d-flex align-items-center">
              <LoaderBtn class="loadingbtn"></LoaderBtn>
              <span class="">loading...</span>
            </div>
            <div v-else>Envoyer</div>
          </span>
        </button>
      </div>
    </Dialog>

    <Dialog v-model:visible="addPassword" modal
      header="Créer un nouveau mot de passe"
      :style="{ width: '30rem' }"
    >
      <div class="d-flex justify-content-center align-items-center flex-column">
        <span class="text-primary mb-2 text-center">{{ errorOtp }}</span>
        <span class="mb-2 text-center"
          >Votre nouveau mot de passe doit être différent du mot de passe utilisé précédemment!</span
        >
      </div>
      <div class="form-container">
                <div class="row mt-3 content-group">
                  <div class="col-12">
                    <div class="input-groupe">
                      <label for="userpassword">
                        Mot de passe <span class="text-danger">*</span></label
                      >
                      <MazInput
                        v-model="step4.password"
                        color="warning"
                        name="step4.password"
                        size="sm"
                        rounded-size="sm"
                        type="password"
                      />
                      <small v-if="v$.step4.password.$error">{{
                        v$.step4.password.$errors[0].$message
                      }}</small>
                      <small v-if="resultError['password']">
                        {{ resultError["password"] }}
                      </small>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="input-groupe">
                      <label for="userpassword">
                        Confirmez le mot de passe<span class="text-danger">*</span></label
                      >
                      <MazInput
                        v-model="step4.password_confirmation"
                        color="warning"
                        name="step4.password_confirmation"
                        size="sm"
                        rounded-size="sm"
                        type="password"
                      />
                      <small v-if="v$.step4.password_confirmation.$error">{{
                        v$.step4.password_confirmation.$errors[0].$message
                      }}</small>
                      <small v-if="resultError['password_confirmation']">
                        {{ resultError["password_confirmation"] }}
                      </small>
                      <small v-if="!validatePasswordsMatch()" >Les mots de passe ne correspondent pas.</small>
                    </div>
                  </div>
                 
                 
                </div>
              </div>
      <div class="btnForm py-3 d-flex items-center justify-content-evenly">
        

        <button
          class="btnLogin d-flex align-items-center"
          style="padding: 0.5em 2em !important"
          :disabled="isButtonDisabled"
          @click.prevent="HamdlePassword('addPassword')"
        >
        
          <span
            class="text-uppercase small ms-2"
            :disabled="loadingItems['addPassword']"
          >
            <div v-if="loadingItems['addPassword']" class="d-flex align-items-center">
              <LoaderBtn class="loadingbtn"></LoaderBtn>
              <span class="">loading...</span>
            </div>
            <div v-else>Valider</div>
          </span>
        </button>
      </div>
    </Dialog>
  </div>
</template>
<script>
import axios from "@/lib/axiosConfig";
import useVuelidate from "@vuelidate/core";
import { require, lgmin, lgmax, ValidEmail } from "@/functions/rules";
import MazPhoneNumberInput from "maz-ui/components/MazPhoneNumberInput";
import LoaderBtn from "@/components/others/loader/loaderbtn.vue";
import { mapActions } from "vuex";
import { useToast } from "vue-toastification";

export default {
  components: {
    MazPhoneNumberInput,
    LoaderBtn,
  },
  setup() {
    const toast = useToast(); // Initialiser useToast
    return { toast };
  },
  data() {
    return {
      loadingItems: {},
      v$: useVuelidate(),
      error: "",
      errormsg: "",
      resultError: {},
      errorOtp: "",
      errorOtps: false,
      loadingVerification: false,
      ChoiceMethodeSendOtp: false,
      addEmail:false,
      addPassword:false,
      GlobalData: "",
      telephone: "",
      step1: {
        email: "",
        password: "",
      },
      step2: {
        code: "",
      },
      step3: {
        email: "",
      },
      step4: {
        password: "",
        password_confirmation: "",
      },
      VerifieCodeByMail: false,
      VerifieCodeBywhatsapp: false,
      timeRemaining: 59, // Temps restant en secondes
      countdownTimer: null, // Référence au setInterval
    };
  },
  computed: {
    // Formater le temps restant en "minutes:secondes"
    formattedTime() {
      const seconds = this.timeRemaining % 60;
      return `${seconds < 10 ? "0" : ""}${seconds} secondes`;
    },
  },

  validations: {
    step1: {
      email: { require, ValidEmail },
      password: { require },
    },
    step3: {
      email: { require, ValidEmail },
    },
    step4: {
      password: { require, lgmin: lgmin(8), lgmax: lgmax(20) },
      password_confirmation: { require, lgmin: lgmin(8), lgmax: lgmax(20) },
    },
  },
  async mounted() {},
  methods: {
    ...mapActions("auth", ["setMyAuthenticatedUser"]),
    validatePasswordsMatch() {
      return this.step4.password === this.step4.password_confirmation;
    },

    startCountdown() {
      this.timeRemaining = 59;
      this.loadingVerification = true;
      this.countdownTimer = setInterval(() => {
        if (this.timeRemaining > 0) {
          this.timeRemaining -= 1;
        } else {
          this.loadingVerification = false;
          clearInterval(this.countdownTimer);
          this.step2.code = "";
        }
      }, 1000);
    },
    async SubmitLogin(modalId) {
      (this.error = ""), this.v$.step1.$touch();
      if (this.v$.$errors.length == 0) {
        this.loadingItems[modalId] = true;
        let DataUser = {
          email: this.step1.email,
          password: this.step1.password,
        };
        try {
          const response = await axios.post("/system/login", DataUser);
          if (response.data.status === "success") {
            if (response.data.user?.roles) {
              this.loadingItems[modalId] = false;
              this.errormsg =
                "Vous n'avez pas le droit d'accéder à ce site avec le compte !";
            } else {
              this.loadingItems[modalId] = false;
              this.ChoiceMethodeSendOtp = true;
              this.GlobalData = response.data;
            }
          } else {
          }
        } catch (error) {
          console.log("response.login", error);

          this.loadingItems[modalId] = false;
          
          if (error.response.data.status === "error") {
            return (this.error = error.response.data.message);
          } else {
            return (this.error = "L'authentification a échoué");
          }
        }
      } else {
      }
    },
    async MethodeOtp(modalId) {
      this.loadingItems[modalId] = true;

      if (modalId === "whatsapp") {
        this.SendOtpByWhahtsApp(this.GlobalData, modalId);
      } else {
        this.SendOtpByMail(this.GlobalData, modalId);
      }
    },
    async SendOtpByWhahtsApp(data, modalId) {
      this.ChoiceMethodeSendOtp = true;
      
      console.log(data);
      let CodeUserWhatsapp = {
        email: 0,
        value: data.data?.user?.Whatsapp,
      };
      this.telephone = data;

      try {
        const response = await axios.post("/send-otp", CodeUserWhatsapp);
        

        if (response.status === 201) {
          this.loadingItems[modalId] = false;
          this.errorOtp = response.data.message;
        }
        if (response.data.status === "success") {
          this.loadingItems[modalId] = false;
          this.VerifieCodeBywhatsapp = true;
        } else {
        }
      } catch (error) {
        console.log("err", error);
      }
    },

    async SendOtpByMail(data, modalId) {
      let CodeUserWhatsapp = {
        email: 1,
        value: data.data?.user?.email,
      };
      this.telephone = data;

      try {
        const response = await axios.post("/send-otp", CodeUserWhatsapp);
        console.log(response);

        if (response.status === 201) {
          this.loadingItems[modalId] = false;
          this.errorOtp = response.data.message;
        }
        if (response.data.status === "success") {
          this.loadingItems[modalId] = false;
          this.VerifieCodeByMail = true;
        } else {
        }
      } catch (error) {
        console.log("err", error);
      }
    },
    //   async renew(){
    //     await this.HamdleOtpPassword()

    //     },
    onOtpInputPassworodWhatsapp() {
      this.errorOtp = "";
      if (this.step2.code.length === 4) {
        this.startCountdown();
        this.loadingVerification = true;
        this.HamdleOtpPasswordWhatsapp();
      }
    },

    onOtpInputPassworodMail() {
      this.errorOtp = "";
      if (this.step2.code.length === 4) {
        this.startCountdown();
        this.loadingVerification = true;
        this.HamdleOtpPasswordMail();
      }
    },

    async HamdleOtpPasswordWhatsapp() {
      this.error = "";
      this.errorOtp = "";
      let DataUser = {
        email: false,
        value: this.telephone?.data?.user?.Whatsapp,
        code: this.step2.code,
      };
      try {
        const response = await axios.post("/verification-otp", DataUser);
        console.log("err", response);

        if (response.data.status === "success") {
          this.setMyAuthenticatedUser(this.telephone?.data);
          this.$router.push("/client");
          // this.$router.go(-1);
        } else {
          this.loadingVerification = false;
          console.log("errssss", response);

          this.errorOtp = "Echec de vérification du code.";
          this.errorOtps = true;
          this.step2.code = "";
        }
      } catch (error) {
        console.log("err", error);

        this.loading = false;
        if (error.response.data.status === "error") {
          return (this.errorOtp = "L'authentification a échoué");
        } else {
        }
      }
    },
    async HamdleOtpPasswordMail() {
      this.error = "";
      this.errorOtp = "";
      let DataUser = {
        email: true,
        value: this.telephone?.data?.user?.email ?? this.step3.email,
        code: this.step2.code,
      };
      
      
      try {
        const response = await axios.post("/verification-otp", DataUser);
        console.log("err", response);

        if (response.data.status === "success") {
          if (this.telephone?.data?.user?.email) {
           this.setMyAuthenticatedUser(this.telephone?.data);
            this.$router.push("/client");
          } else {
        
         this.addPassword = true
         this.VerifieCodeByMail = false;
          }
          
        
        } else {
          this.loadingVerification = false;
          

          this.errorOtp = "Echec de vérification du code.";
          this.errorOtps = true;
          this.step2.code = "";
        }
      } catch (error) {
        console.log("err", error);

        this.loading = false;
        if (error.response.data.status === "error") {
          return (this.errorOtp = "L'authentification a échoué");
        } else {
        }
      }
    },

    // mot de passe oublie 
    async SendEmail(modalId) {
      (this.errorOtp = ""), this.v$.step3.$touch();
      if (this.v$.$errors.length == 0) {
        this.loadingItems[modalId] = true; 
        let CodeUserWhatsapp = {
        email: 1,
        value: this.step3.email,
      };
      try {
        const response = await axios.post("/send-otp", CodeUserWhatsapp);
        if (response.status === 201) {
          this.loadingItems[modalId] = false;
          this.errorOtp = response.data.message;
        }
        if (response.data.status === "success") {
          this.loadingItems[modalId] = false;
          this.VerifieCodeByMail = true;
          this.addEmail = false
        } else {
        }
      } catch (error) {
        this.loadingItems[modalId] = false;

        console.log("err", error);
      }
      }else{
        this.loadingItems[modalId] = false;
      }
      
    },
    async HamdlePassword(modalId) {
      this.v$.step4.$touch()
      if (this.v$.$errors.length == 0) {
        let DataUser = {
      code: this.step2.code,
      email:true,
     value:this.step3.email,
     password: this.step4.password,
     password_confirmation: this.step4.password_confirmation,
   };
   this.loadingItems[modalId] = true
   try {
     const response = await axios.post("/password/reset", DataUser);
     if (response.data.status === "success") {
       this.loadingItems[modalId] = false
       this.addPassword = false
       this.step2 = {}
       this.step4 = {}
       this.v$.step2.$reset();
       this.v$.step4.$reset();
       this.toast.success("Votre mot de passe a été modifié avec succès. vous pouvez maintenant vous  connecter en toute sécurité. !", {
              position: "top-right",
              timeout: 2000,
              closeOnClick: true,
            });
  this.$router.push('/');

      
//        Swal.fire({
// title: "Changement de mot passe réussi",
// text: "Votre mot de passe a été modifié avec succès. vous pouvez maintenant vous  connecter en toute sécurité. Merçi pour votre vigilance en matière de sécurité !",
// icon: "success",
// showCancelButton: false,
// confirmButtonColor: "#3085d6",
// cancelButtonColor: "#d33",
// confirmButtonText: "OK"
// }).then((result) => {
// if (result.isConfirmed) {
//   this.$router.push('/');
 
// }
// });
     
     } else {
     }
   } catch (error) {
    console.log(error)
    this.loadingItems[modalId] = false
     if (
       error.response.data.message === "Vous n'êtes pas autorisé." ||
       error.response.status === 401
     ) {
       await this.$store.dispatch("auth/clearMyAuthenticatedUser");
       this.$router.push("/"); //a revoir
     }
     if (error.response.data.status === "error") {
       return (this.error = error.response.data.message);
     } else {
       this.formatValidationErrors(error.response.data.errors);
     }
   }
      }
  
 },

    // fin mot de passe oublie
    async getCountryOptions() {
      try {
        await this.$store.dispatch("fetchCountries");
        const options = JSON.parse(
          JSON.stringify(this.$store.getters["getCountryOptions"])
        );
        this.sortedCountryOptions = options.map((country) => ({
          label: country.translations?.fra?.common,
          flag: country.flags.png,
          value: country.translations?.fra?.common,
          code: country.cca3,
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
.sign-header {
  height: 100vh !important;
  /* border:1px solid blue; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.content-sign {
  /* border: 1px solid red; */
  max-width: 450px;
  width: 100%;
  height: 500px;
  border-radius: 0 !important;
}
.card {
  padding: 10px;
  border-radius: 0 !important;
  height: 98%;
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
.sign-logo {
  width: auto;
  height: 75px;
  margin: 30px 0;
}

.sign-logo img {
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
.p-dialog-content {
  text-align: center !important;
}

.signin {
  color: rgba(88, 87, 87, 0.822);
  font-size: 14px;
  text-align: center;
  margin-top: 20px;
}

.signin span {
  color: royalblue;
}

.signin span:hover {
  text-decoration: underline royalblue;
  cursor: pointer;
}

@media (max-width: 1200px) {
  .sign-header {
    height: auto !important;
    padding: 20px 10px;
  }
}
</style>
