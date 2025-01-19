<template >
  <div>
    <ConfirmDialog></ConfirmDialog>
    <SkeletonAdresse v-if="loading" style="z-index: 99999"></SkeletonAdresse>

    <div class="py-2 p-md-2 p-lg-4 bg-white" v-else>
      <div
        class="d-flex justify-content-between mb-2 pb-1"
        style="border-bottom: 1px solid"
      >
        <!-- heading -->
        <h3 class="mb-0">Adresse</h3>
        <!-- button -->
        <a
          href="#"
          class="btn btn-outline-primary btn-sm"
          data-bs-toggle="modal"
          data-bs-target="#addAddressModal"
          >Ajouter une adresse</a
        >
      </div>
      <div class="row">
        <!-- col -->
        <div
          class="col-xl-5 col-lg-6 col-xxl-4 col-12 mb-4"
          v-for="adresse in adresseArray"
          :key="adresse.id"
        >
          <!-- form -->
          <div
            class="card me-2"
            style="height: 248px"
            v-if="adresse?.IsDefault === 1"
          >
            <div class="card-body p-6" style="background-color: #ffe70017">
              <p class="mb-2">
                {{ adresse?.Prenoms ?? "-" }} {{ adresse?.Nom ?? "-" }} ,
                <br />
                <span class="text-muted">
                  {{ adresse?.ville ?? "-" }} - {{ adresse?.country?.NomPays ?? "-" }}</span
                >
                ,
                <br />
                <span class="text-muted"> {{ adresse?.Whatsapp ?? "-" }},</span>

                <br />
                <span class="text-muted">
                  {{ adresse?.NumerSecondaire ?? "-" }}
                  <strong class="text-dark">(2)</strong>,</span
                >
                <br />
                <span class="text-muted">
                 Point de relais  {{ adresse?.relais?.Ville ?? "-" }}
                  </span>
              </p>
              <p class="link-primary mb-0">Adresse actuelle</p>
            </div>
            <div
              class="card-footer d-flex align-items-center justify-content-between"
            >
              <button
                class="btn btn-warning btn-sm text-white"
                :disabled="adresse.IsDefault === 1"
              >
                Définir par défaut
              </button>
              <div class="d-flex">
                <router-link
                  to="#"
                  class="btn btn-info btn-circle px-3 py-2 me-2"
                  @click="UpdateAdresse(adresse?.id, 'updateAddressModal')"
                >
                  <span
                    class="text-uppercase small"
                    :disabled="loadingItems[adresse?.id]"
                  >
                    <div
                      v-if="loadingItems[adresse?.id]"
                      class="d-flex align-items-center"
                    >
                      <LoaderBtn class="loadingbtn"></LoaderBtn>
                    </div>
                    <div v-else>
                      <i class="bi bi-pen"></i>
                    </div>
                  </span>
                </router-link>
                <a
                  class="btn btn-primary btn-circle px-3 py-2"
                  href="#"
                  @click="DeleteAdresse(adresse?.id)"
                  ><i class="bi bi-trash"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="card me-2" style="height: 248px" v-else>
            <div class="card-body p-6">
              <p class="mb-2">
                {{ adresse?.Prenoms ?? "-" }} {{ adresse?.Nom ?? "-" }} ,
                <br />
                <span class="text-muted">
                  {{ adresse?.ville ?? "-" }} - {{ adresse?.country?.NomPays ?? "-" }}</span
                >
                ,
                <br />
                <span class="text-muted"> {{ adresse?.Whatsapp ?? "-" }},</span>

                <br />
                <span class="text-muted">
                  {{ adresse?.NumerSecondaire ?? "-" }}
                  <strong class="text-dark">(2)</strong>,</span
                >
                <br />
                <span class="text-muted">
                 Point de relais  {{ adresse?.relais?.Ville ?? "-" }}
                  </span>
              </p>
            </div>
            <div
              class="card-footer d-flex align-items-center justify-content-between"
            >
              <div
                class="btn btn-primary btn-sm text-white"
                @click="confirm1(adresse?.id)"
              >
                Définir par défaut
              </div>
              <div class="d-flex">
                <router-link
                  to="#"
                  class="btn btn-info btn-circle px-3 py-2 me-2"
                  @click="UpdateAdresse(adresse?.id, 'updateAddressModal')"
                >
                  <span
                    class="text-uppercase small"
                    :disabled="loadingItems[adresse?.id]"
                  >
                    <div
                      v-if="loadingItems[adresse?.id]"
                      class="d-flex align-items-center"
                    >
                      <LoaderBtn class="loadingbtn"></LoaderBtn>
                    </div>
                    <div v-else>
                      <i class="bi bi-pen"></i>
                    </div>
                  </span>
                </router-link>
                <a
                  class="btn btn-primary btn-circle px-3 py-2"
                  href="#"
                  @click="DeleteAdresse(adresse?.id)"
                  ><i class="bi bi-trash"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="addAddressModal"
      tabindex="-1"
      aria-labelledby="addAddressModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <!-- modal content -->
        <div class="modal-content">
          <!-- modal body -->
          <div class="modal-body p-6">
            <div class="d-flex justify-content-between mb-5">
              <div>
                <!-- heading -->
                <h5 class="mb-1" id="addAddressModalLabel">
                  Ajouter une adresse
                </h5>
              </div>
              <div>
                <!-- button -->
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
            </div>
            <div class="form-container">
              <div class="row mt-3 content-group">
                <div class="col-xl-6">
                  <div class="input-groupe me-2">
                    <label for="userpassword">
                      Nom <span class="text-danger">*</span></label
                    >
                    <MazInput
                      v-model="step1.Nom"
                      color="warning"
                      name="step1.Nom"
                      size="sm"
                      rounded-size="sm"
                      type="text"
                    />
                    <small v-if="v$.step1.Nom.$error">{{
                      v$.step1.Nom.$errors[0].$message
                    }}</small>
                    <small v-if="resultError['Nom']"
                      >{{ resultError["Nom"] }}
                    </small>
                  </div>
                </div>

                <div class="col-xl-6">
                  <div class="input-groupe">
                    <label for="userpassword">
                      Prenoms <span class="text-danger">*</span></label
                    >
                    <MazInput
                      v-model="step1.Prenoms"
                      color="warning"
                      name="step1.Prenoms"
                      size="sm"
                      rounded-size="sm"
                      type="text"
                    />
                    <small v-if="v$.step1.Prenoms.$error">{{
                      v$.step1.Prenoms.$errors[0].$message
                    }}</small>
                    <small v-if="resultError['Prenoms']"
                      >{{ resultError["Prenoms"] }}
                    </small>
                  </div>
                </div>
                <div class="col-xl-6">
                  <div class="input-groupe me-2">
                    <label for="userpassword">
                      Numéro whatsApp <span class="text-danger">*</span></label
                    >
                    <MazPhoneNumberInput
                      v-model="step1.Whatsapp"
                      size="sm"
                      rounded-size="sm"
                      show-code-on-list
                      color="secondary"
                      :ignored-countries="['AC']"
                      defaultCountryCode="TG"
                      update="results = $event"
                      :success="results?.isValid"
                    />
                    <small v-if="v$.step1.Whatsapp.$error">{{
                      v$.step1.Whatsapp.$errors[0].$message
                    }}</small>
                    <small v-if="resultError['Whatsapp']">
                      {{ resultError["Whatsapp"] }}
                    </small>
                  </div>
                </div>
                <div class="col-xl-6">
                  <div class="input-groupe">
                    <label for="userpassword">
                      Second numéro <span class="text-danger">*</span></label
                    >
                    <MazPhoneNumberInput
                      v-model="step1.NumerSecondaire"
                      size="sm"
                      rounded-size="sm"
                      show-code-on-list
                      color="secondary"
                      :ignored-countries="['AC']"
                      defaultCountryCode="TG"
                      update="results = $event"
                      :success="results?.isValid"
                    />
                    <small v-if="v$.step1.NumerSecondaire.$error">{{
                      v$.step1.NumerSecondaire.$errors[0].$message
                    }}</small>
                    <small v-if="resultError['NumerSecondaire']">
                      {{ resultError["NumerSecondaire"] }}
                    </small>
                  </div>
                </div>
                <div class="col-xl-6">
                  <div class="input-groupe me-2">
                    <label for="userpassword">
                      Pays <span class="text-danger">*</span></label
                    >
                    <MazSelect
                      v-model="step1.pays"
                      :options="countriesOptions"
                      color="secondary"
                      size="sm"
                      rounded-size="sm"
                      search
                      v-slot="{ option }"
                    >
                    <div
                      class="flex items-center"
                      style="
                        padding-top: 0.5rem;
                        padding-bottom: 0.5rem;
                        width: 100%;
                        gap: 1rem;
                      "
                      @click="handleOptionClickCountry(option)"
                    >
                      {{ option?.label }}
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
                  <div class="input-groupe">
                    <label for="userpassword">
                      Ville <span class="text-danger">*</span></label
                    >
                    <MazInput
                      v-model="step1.ville"
                      color="warning"
                      name="step1.ville"
                      size="sm"
                      rounded-size="sm"
                      type="text"
                    />
                    <small v-if="v$.step1.ville.$error">{{
                      v$.step1.ville.$errors[0].$message
                    }}</small>
                    <small v-if="resultError['ville']">
                      {{ resultError["ville"] }}
                    </small>
                  </div>
                </div>
                <div class="col-xl-12">
                  <div class="input-groupe">
                    <label for="userpassword">
                      Le point de retrait <span class="text-danger">*</span></label
                    >
                    <MazSelect
                      v-model="step1.PointRelais"
                      :options="RelaisOptions"
                      color="secondary"
                      size="sm"
                      rounded-size="sm"
                      search
                     :disabled="isRelaisDisabled"
                    />
                    
                    <small v-if="v$.step1.PointRelais.$error">{{
                      v$.step1.PointRelais.$errors[0].$message
                    }}</small>
                    <small v-if="resultError['PointRelais']">
                      {{ resultError["PointRelais"] }}
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="btnForm py-3 d-flex items-center justify-content-center"
            >
              <button
                class="btnLogin btn btn-primary"
                style="padding: 0.5em 2em !important"
                :disabled="isButtonDisabled === true"
                @click.prevent="SubmitAdresse('addAddressModal')"
              >
                <span
                  class="text-uppercase small"
                  :disabled="loadingItems['addAddressModal']"
                >
                  <div
                    v-if="loadingItems['addAddressModal']"
                    class="d-flex align-items-center"
                  >
                    <LoaderBtn class="loadingbtn"></LoaderBtn>
                    <span class="">loading...</span>
                  </div>
                  <div v-else>Valider</div>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="updateAddressModal"
      tabindex="-1"
      aria-labelledby="updateAddressModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <!-- modal content -->
        <div class="modal-content">
          <!-- modal body -->
          <div class="modal-body p-6">
            <div class="d-flex justify-content-between mb-5">
              <div>
                <!-- heading -->
                <h5 class="mb-1" id="updateAddressModalLabel">
                  Modifier une adresse
                </h5>
                
              </div>
              <div>
                <!-- button -->
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
            </div>
            <div class="form-container">
              <div class="row mt-3 content-group">
                <div class="col-xl-6">
                  <div class="input-groupe me-2">
                    <label for="userpassword">
                      Nom <span class="text-danger">*</span></label
                    >
                    <MazInput
                      v-model="step2.Nom"
                      color="warning"
                      name="step2.Nom"
                      size="sm"
                      rounded-size="sm"
                      type="text"
                    />
                    <small v-if="v$.step2.Nom.$error">{{
                      v$.step2.Nom.$errors[0].$message
                    }}</small>
                    <small v-if="resultError['Nom']"
                      >{{ resultError["Nom"] }}
                    </small>
                  </div>
                </div>

                <div class="col-xl-6">
                  <div class="input-groupe">
                    <label for="userpassword">
                      Prenoms <span class="text-danger">*</span></label
                    >
                    <MazInput
                      v-model="step2.Prenoms"
                      color="warning"
                      name="step2.Prenoms"
                      size="sm"
                      rounded-size="sm"
                      type="text"
                    />
                    <small v-if="v$.step2.Prenoms.$error">{{
                      v$.step2.Prenoms.$errors[0].$message
                    }}</small>
                    <small v-if="resultError['Prenoms']"
                      >{{ resultError["Prenoms"] }}
                    </small>
                  </div>
                </div>
                <div class="col-xl-6">
                  <div class="input-groupe me-2">
                    <label for="userpassword">
                      Numéro whatsApp <span class="text-danger">*</span></label
                    >
                    <MazPhoneNumberInput
                      v-model="step2.Whatsapp"
                      size="sm"
                      rounded-size="sm"
                      show-code-on-list
                      color="secondary"
                      :ignored-countries="['AC']"
                      defaultCountryCode="TG"
                      update="results = $event"
                      :success="results?.isValid"
                    />
                    <small v-if="v$.step2.Whatsapp.$error">{{
                      v$.step2.Whatsapp.$errors[0].$message
                    }}</small>
                    <small v-if="resultError['Whatsapp']">
                      {{ resultError["Whatsapp"] }}
                    </small>
                  </div>
                </div>
                <div class="col-xl-6">
                  <div class="input-groupe">
                    <label for="userpassword">
                      Second numéro <span class="text-danger">*</span></label
                    >
                    <MazPhoneNumberInput
                      v-model="step2.NumerSecondaire"
                      size="sm"
                      rounded-size="sm"
                      show-code-on-list
                      color="secondary"
                      :ignored-countries="['AC']"
                      defaultCountryCode="TG"
                      update="results = $event"
                      :success="results?.isValid"
                    />
                    <small v-if="v$.step2.NumerSecondaire.$error">{{
                      v$.step2.NumerSecondaire.$errors[0].$message
                    }}</small>
                    <small v-if="resultError['NumerSecondaire']">
                      {{ resultError["NumerSecondaire"] }}
                    </small>
                  </div>
                </div>
                <div class="col-xl-6">
                  <div class="input-groupe me-2">
                    <label for="userpassword">
                      Pays <span class="text-danger">*</span></label
                    >
                    <MazSelect
                      v-model="step2.pays"
                      :options="countriesOptions"
                      color="secondary"
                      size="sm"
                      rounded-size="sm"
                      search
                      v-slot="{ option }"
                    >
                    <div
                      class="flex items-center"
                      style="
                        padding-top: 0.5rem;
                        padding-bottom: 0.5rem;
                        width: 100%;
                        gap: 1rem;
                      "
                      @click="handleOptionClickCountry(option)"
                    >
                      {{ option?.label }}
                    </div>
                    </MazSelect>
                    <small v-if="v$.step2.pays.$error">{{
                      v$.step2.pays.$errors[0].$message
                    }}</small>
                    <small v-if="resultError['pays']">
                      {{ resultError["pays"] }}
                    </small>
                  </div>
                </div>
                <div class="col-xl-6">
                  <div class="input-groupe">
                    <label for="userpassword">
                      Ville <span class="text-danger">*</span></label
                    >
                    <MazInput
                      v-model="step2.ville"
                      color="warning"
                      name="step2.ville"
                      size="sm"
                      rounded-size="sm"
                      type="text"
                    />
                    <small v-if="v$.step2.ville.$error">{{
                      v$.step2.ville.$errors[0].$message
                    }}</small>
                    <small v-if="resultError['ville']">
                      {{ resultError["ville"] }}
                    </small>
                  </div>
                </div>
                <div class="col-xl-12">
                  <div class="input-groupe">
                    <label for="userpassword">
                      le point de retrait <span class="text-danger">*</span></label
                    >
                    <MazSelect
                      v-model="step2.PointRelais"
                      :options="RelaisOptions"
                      color="secondary"
                      size="sm"
                      rounded-size="sm"
                      search
                     
                    />
                    <small v-if="v$.step2.PointRelais.$error">{{
                      v$.step2.PointRelais.$errors[0].$message
                    }}</small>
                    <small v-if="resultError['PointRelais']">
                      {{ resultError["PointRelais"] }}
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="btnForm py-3 d-flex items-center justify-content-center"
            >
              <button
                class="btnLogin btn btn-primary"
                style="padding: 0.5em 2em !important"
                :disabled="isButtonDisabled === true"
                @click.prevent="SubmitUpdateAdresse('updateAddressModal')"
              >
                <span
                  class="text-uppercase small"
                  :disabled="loadingItems['updateAddressModal']"
                >
                  <div
                    v-if="loadingItems['updateAddressModal']"
                    class="d-flex align-items-center"
                  >
                    <LoaderBtn class="loadingbtn"></LoaderBtn>
                    <span class="">loading...</span>
                  </div>
                  <div v-else>Valider</div>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axiosInstance from "@/lib/axiosConfig";
import useVuelidate from "@vuelidate/core";
import { require, lgmin, lgmax, ValidEmail } from "@/functions/rules";
import MazPhoneNumberInput from "maz-ui/components/MazPhoneNumberInput";
import LoaderBtn from "@/components/others/loader/loaderbtn.vue";
import { useToast } from "vue-toastification";
import SkeletonAdresse from "@/components/others/loader/SkeletonAdresse.vue";

export default {
  
  components: {
    MazPhoneNumberInput,
    LoaderBtn,
    SkeletonAdresse,
  },
  setup() {
    const toast = useToast(); // Initialiser useToast
    return { toast };
  },
  computed: {
    loggedInUser() {
      return this.$store.getters["auth/myAuthenticatedUser"];
    },
    isRelaisDisabled() {
      return !this.step1.pays;
    }, 
  },

  data() {
    return {
      countriesOptions: [],
      data: [],
      adresseArray: [],
      RelaisOptions:[],
      loadingItems: {},
      v$: useVuelidate(),
      error: "",
      resultError: {},
      isButtonDisabled: false,
      loading: true,
      ToId: "",
      step1: {
        Nom: "",
        Prenoms: "",
        Whatsapp: "",
        NumerSecondaire: "",
        pays: "Togo",
        ville: "",
        PointRelais: "",
      },
      step2: {
        Nom: "",
        Prenoms: "",
        Whatsapp: "",
        NumerSecondaire: "",
        pays: "Togo",
        ville: "",
        PointRelais: "",
      },
    };
  },
  validations: {
    step1: {
      Nom: { require },
      Prenoms: { require },
      Whatsapp: { require },
      NumerSecondaire: { require },
      pays: { require },
      ville: { require },
      PointRelais: { require },
    },
    step2: {
      Nom: { require },
      Prenoms: { require },
      Whatsapp: { require },
      NumerSecondaire: { require },
      pays: { require },
      ville: { require },
      PointRelais: { require },
    },
  },
  async mounted() {
    await this.getCountries();
    await this.getAdresse();
  },
  methods: {
    goToProductDetail(product) {
      this.$router.push({ name: "detail", params: { id: product.option.id } });
    },

    async getAdresse() {
      try {
        const response = await axiosInstance.get("/repertoire-clients", {
          headers: {
            Authorization: `Bearer ${this.loggedInUser.token}`,
          },
          params: { connected_user: 1 },
        });
        if (response.data.status === "success") {
          this.data = response?.data?.data?.data;
          this.adresseArray = this.data;
          this.loading = false;
        }
      } catch (error) {
        this.handleErrorsGet(error);
      }
    },
    async getCountries() {
      try {
        const response = await axiosInstance.get("countries");
        const countries = response.data?.data;
        const options = countries.map((country) => ({
          label: country.NomPays,
          flag: country.Flag,
          value: country.CodePays,
          code: country.NomAbr,
        }));

        this.countriesOptions = options;
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données des pays:",
          error
        );
      }
    },

    async SubmitAdresse(modalId) {
      this.v$.step1.$touch();
      if (this.v$.$errors.length == 0) {
        this.loadingItems[modalId] = true;
        this.isButtonDisabled = true;
        let DataUser = {
          addresses: [
            {
              Nom: this.step1.Nom,
              Prenoms: this.step1.Prenoms,
              Whatsapp: this.step1.Whatsapp,
              NumerSecondaire: this.step1.NumerSecondaire,
              pays: this.step1.pays,
              ville: this.step1.ville,
              PointRelais:this.step1.PointRelais,
            },
          ],
        };

        try {
          const response = await axiosInstance.post(
            "/repertoire-clients",
            DataUser,
            {
              headers: {
                Authorization: `Bearer ${this.loggedInUser.token}`,
              },
            }
          );
          console.log("response.login", response.data);
          if (response.data.status === "success") {
            this.loadingItems[modalId] = false;
            this.isButtonDisabled = false;
            this.closeModal(modalId);
            this.toast.success("L'adresse a été créée avec succès.", {
              position: "top-right",
              timeout: 2000,
              closeOnClick: true,
            });
            this.step1 = {
              Nom: "",
              Prenoms: "",
              Whatsapp: "",
              NumerSecondaire: "",
              pays: "",
              ville: "",
              PointRelais:"",
            };
            this.v$.step1.$reset();
            await this.getAdresse();
          } else {
          }
        } catch (error) {
          this.loadingItems[modalId] = false;
          this.isButtonDisabled = false;

          console.log("response.login", error);
        }
      } else {
      }
    },
    async UpdateAdresse(id, modalId) {
      this.step2 = {};
      this.loadingItems[id] = true;
      try {
        const response = await axiosInstance.get(`/repertoire-clients/${id}`, {
          headers: {
            Authorization: `Bearer ${this.loggedInUser.token}`,
          },
        });
       

        if (response.data?.status === "success") {
          let data = response.data?.data;
          (this.step2.Nom = data.Nom),
            (this.step2.Prenoms = data.Prenoms),
            (this.step2.Whatsapp = data.Whatsapp),
            (this.step2.NumerSecondaire = data.NumerSecondaire),
            (this.step2.ville = data.ville),
            (this.step2.pays = data.pays),
            (this.step2.PointRelais = data.PointRelais),
            (this.ToId = data.id);
            await this.handleOptionClickCountry(data.pays)
          this.openModal(modalId);
          this.loadingItems[id] = false;
        }
      } catch (error) {
        this.loadingItems[modalId] = false;
        this.handleErrors(error);
      }
    },
    async SubmitUpdateAdresse(modalId) {
      this.v$.step2.$touch();
      if (this.v$.$errors.length == 0) {
        this.loadingItems[modalId] = true;
        this.isButtonDisabled = true;
        let DataUser = {
          addresses: [
            {
              id: this.ToId.toString(),
              Nom: this.step2.Nom,
              Prenoms: this.step2.Prenoms,
              Whatsapp: this.step2.Whatsapp,
              NumerSecondaire: this.step2.NumerSecondaire,
              pays: this.step2.pays,
              PointRelais: this.step2.PointRelais,
              ville: this.step2.ville,
            },
          ],
        };

        try {
          const response = await axiosInstance.post(
            `/repertoire-clients/${this.ToId}`,
            DataUser,
            {
              headers: {
                Authorization: `Bearer ${this.loggedInUser.token}`,
              },
            }
          );
          console.log("response.login", response.data);
          if (response.data.status === "success") {
            this.loadingItems[modalId] = false;
            this.isButtonDisabled = false;
            this.closeModal(modalId);
            this.toast.success("L'adresse a été modifiée avec succès.", {
              position: "top-right",
              timeout: 2000,
              closeOnClick: true,
            });
            this.step2 = {
              Nom: "",
              Prenoms: "",
              Whatsapp: "",
              NumerSecondaire: "",
              pays: "",
              ville: "",
              PointRelais:"",
            };
            this.v$.step2.$reset();
            await this.getAdresse();
          } else {
          }
        } catch (error) {
          this.loadingItems[modalId] = false;
          this.isButtonDisabled = false;

          console.log("response.login", error);
        }
      } else {
      }
    },
    confirm1(id) {
      this.$confirm.require({
        message: "Voulez-vous modifier cette adresse ?",
        header: "Confirmation",
        icon: "pi pi-exclamation-triangle",
        rejectProps: {
          label: "Cancel",
          severity: "secondary",
          outlined: true,
        },
        acceptProps: {
          label: "Save",
        },
        accept: () => {
          this.ActiverAdresseByDefaut(id);
        },
        reject: () => {},
      });
    },
    async ActiverAdresseByDefaut(id) {
      let data = {
        code: id,
      };
      try {
        const response = await axiosInstance.post(
          `/repertoire-clients/set-as-default/${id}`,
          data,
          {
            headers: {
              Authorization: `Bearer ${this.loggedInUser.token}`,
            },
          }
        );
        console.log("response.data", response.data);

        if (response.data?.status === "success") {
          this.toast.success("L'adresse a été définie par defaut.", {
            position: "top-right",
            timeout: 2000,
            closeOnClick: true,
          });

          await this.getAdresse();
        }
      } catch (error) {
        console.log("erro", error);
      }
    },

    DeleteAdresse(id) {
      this.$confirm.require({
        message: "Voulez-vous supprimer cet enregistrement ?",
        header: "Suppression de l'adresse",
        icon: "pi pi-info-circle",
        rejectProps: {
          label: "Annuler",
          severity: "secondary",
          outlined: true,
        },
        acceptProps: {
          label: "Supprimer",
          severity: "danger",
        },
        accept: () => {
          this.ConfirmeDelete(id);
        },
        reject: () => {
          this.toast.danger("L'adresse a été modifiée avec succès.", {
            position: "top-right",
            timeout: 2000,
            closeOnClick: true,
          });
        },
      });
    },

    async ConfirmeDelete(id) {
      // this.isLoading = true;

      try {
        const response = await axiosInstance.delete(
          `/repertoire-clients/${id}`,
          {
            headers: {
              Authorization: `Bearer ${this.loggedInUser.token}`,
            },
          }
        );

        if (response.data.status === "success") {
          this.toast.success("L'adresse a été supprimée avec succès.", {
            position: "top-right",
            timeout: 2000,
            closeOnClick: true,
          });
          await this.getAdresse();
        } else {
        }
      } catch (error) {
        console.log(error);
      }
    },
   async handleOptionClickCountry(value){
        const data = value.value ? value.value :value
        await this.getPointRelais(data)

    },
    async getPointRelais(code) {
      try {
        const response = await axiosInstance.get("/relais/liste-des-points/par-pays",{
            headers: {
              Authorization: `Bearer ${this.loggedInUser.token}`,
            },
            params:{code:code}
        });
        const data = response.data?.data;
        console.log('data',data)
        const options = data.map((r) => ({
          label: r.Ville,
          value: r.id,
        }));

         this.RelaisOptions = options;
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données des pays:",
          error
        );
      }
    },

    openModal(modalId) {
      const modalElement = document.getElementById(modalId);
      const modal = new bootstrap.Modal(modalElement);

      // Afficher le modal
      modal.show();
    },
    closeModal(modalId) {
      // Cette méthode ferme le modal en fonction de l'id passé en paramètre
      const modalElement = document.getElementById(modalId);
      const modal = bootstrap.Modal.getInstance(modalElement); // Récupérer l'instance du modal avec l'id
      modal.hide(); // Ferme le modal
    },
  },
};
</script>
<style lang="css" scoped>
</style>