<template>
    <div>
        <SkeletonCategorie v-if="loading " style="z-index: 99999"></SkeletonCategorie>

        <main v-else>
            <!-- section-->
            <div class="mt-4">
    
                <!-- row -->
                <div class="row">
                    <!-- col -->
                    <div class="col-12">
                        <nav class="mb-3" aria-label="breadcrumb">
                            <ol class="breadcrumb mb-0">
                                <li class="breadcrumb-item"><a href="/">Accueil ></a></li>
                                <li class="breadcrumb-item"><router-link to="/categories">types-vente ></router-link></li>
                                <li class="breadcrumb-item active" aria-current="page">{{ vente }}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-12 col-md-12 col-sm-12  pe-0">
                        
                        <div class="hero-slider"  >
                            <div class="hero-img-1" style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
                                <div class=" col-xxl-5 col-lg-7 col-md-8  text-xs-center" style="width: 100%; height:100%">
                                    <img src="@/assets/img/bn1.jpg" alt="" style="width: 100%; height:100%">
                                   
                                </div>
                            </div>
                            <div class="hero-img-1" style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
                                <div class=" col-xxl-5 col-lg-7 col-md-8  text-xs-center" style="width: 100%; height:100%">
                                    <img src="@/assets/img/bn2.jpg" alt="" style="width: 100%; height:100%">
                                   
                                </div>
                            </div>
                            <div class="hero-img-1" style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
                                <div class=" col-xxl-5 col-lg-7 col-md-8  text-xs-center" style="width: 100%; height:100%">
                                    <img src="@/assets/img/bn3.jpg" alt="" style="width: 100%; height:100%">
                                   
                                </div>
                            </div>
                          
                        </div>
                      
                    </div>
                </div>
    
            </div>
           
            <!-- section -->
            <div class="mt-0  mb-3">
    
                <!-- row -->
                <div class="row ">
                    <!-- col -->
                    <aside class="col-xl-3 col-lg-2 col-md-3 mb-md-0">
                        <div class="offcanvas offcanvas-start offcanvas-collapse w-md-50" tabindex="-1"
                            id="offcanvasCategory" aria-labelledby="offcanvasCategoryLabel">
                            <div class="offcanvas-header d-lg-none">
                                <h5 class="offcanvas-title" id="offcanvasCategoryLabel">Filter</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body ps-lg-2 pt-lg-0">
                                <div class="mb-8">
                                   
                                    <h5 class="mb-3 mb-3 bg-primary p-2 text-center text-white">Categories</h5>
                                    
                                    <ul class="nav nav-category" id="categoryCollapseMenu">
                                        <li 
                                            class="nav-item border-bottom w-100 card px-2 mt-1" 
                                            v-for="(category, index) in CategoriesArray" 
                                            :key="index" 
                                            :class="{ active: category.id === getActiveCategoryId }"
                                        >
                                            <a :href="`/list-categories/${ encodeId(category.id)}`" class="nav-link collapsed justify-content-start">
                                            <img 
                                                :src="category.Image !== null ? category.Image : defaultImageCategorie"
                                                :alt="category.NomCategorie" 
                                                width="24" 
                                                height="24" 
                                                style="width:20px; margin-right: 5px;"
                                            >
                                            <span>{{ category.NomCategorie }}</span>
                                            </a>
                                        </li>
                                        </ul>

                                </div>
                                <div class="mb-8 position-relative" style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
                                  <a href="#" style="border-radius: 0px !important;font-size: 16px; padding: 5px 2px;"
                                    class="nav-link active text-white d-flex justify-content-center align-items-center bg-primary" id="nav-fruitsandveg-tab"
                                    data-bs-toggle="tab" data-bs-target="#nav-fruitsandveg"
                                    role="tab" aria-controls="nav-fruitsandveg"
                                    aria-selected="true">
                                      
                                    <span class="d-flex text-white me-2">
                                         
                                        <!-- <div v-if="days !== '00'"></div> -->
                                      <div class="heure">{{ countdownData.pub?.days }} </div> j
                                      <div class="heure">{{ countdownData.pub?.hours }}</div> h
                                      <div class="heure">{{ countdownData.pub?.minutes }}</div> m
                                      <div class="heure">{{ countdownData.pub?.seconds }}</div> s
                                    </span>
                                </a>
                                 

                                   <img   v-if="Banner.Banner" :src="Banner.Banner" alt="" class="img-fluid rounded-start" />
                                   <div  v-else style="height: 250px; width: 100%;" class="d-flex justify-content-center align-items-center">
                                    <img  src="@/assets/gif/loader.gif" alt="" class="img-fluid rounded" height="100" width="100" />
                                   </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                    <section class="col-xl-9 col-lg-10 col-md-9">
                        <!-- card -->
    
                        <!-- list icon -->
                         <div class="d-lg-flex justify-content-between align-items-center bg-primary p-1">
                            <div class="mb-3 mb-lg-0">
                                <div class="row align-items-center">
                                 <h5 class="col-xl-3  text-white d-flex justify-content-between mb-0">Filter par intervalle de prix:  </h5>
                                 <div class=" col-xl-5 d-flex align-items-center">
                                    <MazInput v-model="filters.min" color="warning"
                                                name="filters.min" size="xs" rounded-size="xs"
                                                type="number" />
                                               
                                                    <div class="text-white mx-2"> - </div>
                                                <MazInput v-model="filters.max" color="warning"
                                                name="filters.max" size="xs" rounded-size="xs"
                                                type="number" />
                                                <button class="text-dark btn btn-xs bg-gray-300 ms-3" style="cursor: pointer; cursor: pointer; padding: 5px 15px;  border-radius: 0;" @click="FilterProduct" >Filter</button>
                                 </div>
                                 <div class="col-xl-4 text-end">
                                    <a href="#" style="border-radius: 0px !important;font-size: 16px;"
                                                            class="nav-link active d-flex justify-content-center text-white" id="nav-fruitsandveg-tab"
                                                            data-bs-toggle="tab" data-bs-target="#nav-fruitsandveg"
                                                            role="tab" aria-controls="nav-fruitsandveg"
                                                            aria-selected="true">
                                                            Termine dans
                                                            <span class="d-flex">
                                                              <div class="heure">{{ countdownData.pub?.days }} </div> j
                                                              <div class="heure">{{ countdownData.pub?.hours }}</div> h
                                                              <div class="heure">{{ countdownData.pub?.minutes }}</div> m
                                                              <div class="heure">{{ countdownData.pub?.seconds }}</div> s
                                                            </span>
                           </a>
                                 </div>
                             
                                </div>
                            </div>
    
                           
                            <div class="d-md-flex justify-content-between align-items-center">
                                <div class="d-flex align-items-center justify-content-between">
                                    <nav>
                                        <ul class="nav nav-pills nav-scroll border-bottom-0 gap-1 d-none" id="nav-tab"
                                            role="tablist">
                                           
    
    
                                            <li class="nav-item">
                                           
                                                <a href="#" class="nav-link active" id="grid-tab" data-bs-toggle="tab"
                                                    data-bs-target="#grid" role="tab" aria-controls="grid"
                                                    aria-selected="false">
                                                    <i class="bi bi-grid"></i>
                                                </a>
                                            </li>
                                          
                                        
    
                                        </ul>
                                    </nav>
    
                                 
                                </div>
    
                                
                            </div>
                        </div> 
                        <!-- row -->
                        <div class="row">
                            <div class="col-xl-12">
                                <!-- tab -->
                                <div class="tab-content" id="nav-tabContent">
                                    
                                    <div class="tab-pane fade show active" id="gridplus" role="tabpanel"
                                        aria-labelledby="nav-snackMunchies-tab" tabindex="0">
                                        <GridPlus :id="id" :dataProduct="dataProduct"></GridPlus>
    
                                    </div>
    
    
                                </div>
                            </div>
                        </div>
    
                    </section>
                </div>
    
            </div>
        </main>
    </div>
</template>
<script>
import Listes from '@/components/Categories/Listes.vue';
import grid from '@/components/types/grid.vue';
import GridPlus from '@/components/types/gridPlus.vue';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';
import 'slick-carousel';
import defaultImage from '@/assets/images/products/product-img-2.jpg'
import axios from '@/lib/axiosConfig';
import SkeletonCategorie from '@/components/others/loader/SkeletonCategorie.vue';



export default {
  props: ['id'],
  components: {
    Listes, grid, GridPlus , SkeletonCategorie
  },
  data() {
    return {
        CategoriesChildrenArray:[],
        CategoriesArray:[],
        vente:'',
      defaultImage: defaultImage,
      loading:true,
      images: [
        '@/assets/images/slider/hero-img-slider-1.jpg',
        '@/assets/images/slider/hero-img-slider-2.jpg',
        '@/assets/images/slider/hero-img-slider-3.jpg'
      ],
      filters:{
        min:'',
        max:'',
      },
      dataProduct:"",
      countdownData: {
        flash: { days: "00", hours: "00", minutes: "00", seconds: "00" },
        pub: { days: "00", hours: "00", minutes: "00", seconds: "00" },

      },
      intervals: {}, 
      Banner:"",
    }
  },
  computed: {
  getActiveCategoryId() {
    // Extrait l'ID de la catégorie à partir de l'URL actuelle
    const path = window.location.pathname;
    const match = path.match(/\/list-categories\/(\d+)/); // Extrait l'ID après '/list-categories/'
    return match ? parseInt(match[1], 10) : null;
  },
  decodedId() {
      return atob(this.id); // Décode l'ID reçu en Base64
    },
},
  watch: {
    loading(newVal) {
      if (newVal === false) {
        this.initSliders();
      }
    },
    alertMessage(newVal) {
      console.log('newVal', newVal)
      if (newVal) {
        this.loadingItems = {};
        this.toast.success(newVal, {
          position: "top-right",
          timeout: 2000,
          closeOnClick: true,
        });

       
      }
    },
  },
 async mounted() {
    
    this.initSliders();
    await this.getCategoriesAll()
    await this.getventeDetail()
    await this.getBannerActiver()

  },
  methods: {
    encodeId(id) {
    return btoa(id); // Encode en Base64
  },

    initSliders() {

      this.$nextTick(() => {
        $('.hero-slider').slick({
          infinite: !0,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: !0,
          dots: !0,
          arrows: !1,
        });



      })
    },
    async getCategoriesAll() {
      try {
        const response = await axios.get('liste/categories')
        if (response.data.status === "success") {
       

          this.CategoriesChildrenArray = response.data.data?.data
          ?.filter(c =>c.Parent === parseInt(this.id) )
        this.CategoriesArray = response.data.data?.data
          ?.filter(c =>  c.Parent === null)
        
          this.loading = false
          
        }

      } catch (error) {
        console.log('error', error)
      }
    },
    async getventeDetail() {
       

        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2RhdGEud2FrYW5kYS5iZXN0L2FwaS9zeXN0ZW0vbG9naW4iLCJpYXQiOjE3MzAyNzYzODEsIm5iZiI6MTczMDI3NjM4MSwianRpIjoiVU5sN3J3RXBhTFZGdG1OaCIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.H40wgUqkMXolIzMq_zTz8Mg7Bp-QsyjbarTijztMzi4'
      try {
        const response = await axios.get(`/type-ventes/${this.decodedId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },

        });
       
        if (response.data.status === "success") {
          this.vente = response.data?.data?.Nom
          this.startCountdown("pub", new Date(response.data?.data?.DateDebut), new Date(response.data?.data?.DateFin));
          
          

         
          

        }

      } catch (error) {
        console.log('error', error)
      }
    },
   async FilterProduct(){
       this.dataProduct ={
        min: parseInt(this.filters.min),
        max:parseInt(this.filters.max) ,
        categorie: parseInt(this.encodeId) 

       }
       
  },
  async getBannerActiver() {
      try {
        const response = await axios.get('/banniere-pub-active/par-zone',{
          params:{zone:"ZONE PUB DETAIL"}
        })
        if (response.data.status === "success") {
           const data =   response.data?.data
           this.Banner =data
           this.startCountdown("pub", new Date(this.Banner.DateDebut), new Date(this.Banner.DateFin));

        }

      } catch (error) {
        console.log('error', error)
      }
    },
  startCountdown(id, startDate, endDate) {
      const now = new Date();

      // Si la date actuelle est déjà après la fin
      if (now >= endDate) {
        this.countdownData[id] = {
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        };
        return;
      }

      // Nettoyez tout interval actif pour cet ID
      if (this.intervals[id]) {
        clearInterval(this.intervals[id]);
      }

      // Créez un nouvel interval pour cet ID
      this.intervals[id] = setInterval(() => {
        const now = new Date();
        const diff = endDate - now;

        if (diff <= 0) {
          clearInterval(this.intervals[id]);
          this.countdownData[id] = {
            days: "00",
            hours: "00",
            minutes: "00",
            seconds: "00",
          };
          return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        this.countdownData[id] = {
          days: days.toString().padStart(2, "0"),
          hours: hours.toString().padStart(2, "0"),
          minutes: minutes.toString().padStart(2, "0"),
          seconds: seconds.toString().padStart(2, "0"),
        };
      }, 1000);
    },
    stopCountdown(id) {
      if (this.intervals[id]) {
        clearInterval(this.intervals[id]);
        delete this.intervals[id];
      }
    },
  

},
beforeUnmount() {
    clearInterval(this.interval); 
  },
}
</script>
<style lang="css" scoped>
  .hero-slider{
    height: 40vh !important;
    width: 100%;
}
.hero-img-1 {
  
  height: 40vh !important;
  width: 100%;
  
}
@media (max-width: 800px) {
    .hero-slider{
    height: 30vh !important;
    width: 100%;
}
    .hero-img-1 {
  
  height: 30vh !important;
  width: 100%;   
}

.categorie {
  height: 30vh !important;
  overflow-y: scroll;
}

.card-right {
  height: 30vh !important;

}
}

.lv3Category--lv3Category--1hf3Fqv {
    width: 100%;
}
.lv3Category--lv3Category--1hf3Fqv .lv3Category--lv3CategoryContentCatainer--3covqIo {
    /* max-width: 1712px;
    min-width: 1073px; */
    margin: auto;
    /* padding: 0 48px; */
    /* display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox; */
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    overflow-x: hidden;
}

    .lv3Category--lv3CategoryBox--1Nts99Z {
        width: 175px;
    }


.lv3Category--lv3Category--1hf3Fqv .lv3Category--lv3CategoryContentCatainer--3covqIo .lv3Category--lv3CategoryBox--1Nts99Z .lv3Category--lv3CategoryContent--2eCQWkm {
   
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3px 0 10px 0;
    /* height:270px; */
    /* justify-content: space-between; */
    margin-bottom: 10px;
    /* border:1px solid red */
}

.lv3Category--lv3Category--1hf3Fqv .lv3Category--lv3CategoryContentCatainer--3covqIo .lv3Category--lv3CategoryBox--1Nts99Z .lv3Category--lv3CategoryContent--2eCQWkm .lv3Category--lv3CategoryContentImg--2GZvdRG {
    overflow: hidden;
    width: 170px;
    /* height: 130px; */
    position: relative;
    aspect-ratio: 1 / 1;
}
.lv3Category--lv3Category--1hf3Fqv .lv3Category--lv3CategoryContentCatainer--3covqIo .lv3Category--lv3CategoryBox--1Nts99Z .lv3Category--lv3CategoryContent--2eCQWkm .lv3Category--lv3CategoryContentImg--2GZvdRG .lv3Category--lv3CategoryContentMask--1VpLYwR {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .04);
    position: absolute;
}

.lv3Category--lv3Category--1hf3Fqv .lv3Category--lv3CategoryContentCatainer--3covqIo .lv3Category--lv3CategoryBox--1Nts99Z .lv3Category--lv3CategoryContent--2eCQWkm .lv3Category--lv3CategoryContentImg--2GZvdRG img {
    width: 100%;
}
.lv3Category--lv3Category--1hf3Fqv .lv3Category--lv3CategoryContentCatainer--3covqIo .lv3Category--lv3CategoryBox--1Nts99Z .lv3Category--lv3CategoryContent--2eCQWkm .lv3Category--lv3CategoryContentName--2JnCa6z {
    margin-top: 16px;
    font-weight: 700;
    font-size: 16px;
    width: 100%;
    line-height: 24px;
    text-align: center;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.heure {

background-color: #fff;
color: #000;
width: 30px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 5px;
box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);
margin: 0 5px;
}
</style>