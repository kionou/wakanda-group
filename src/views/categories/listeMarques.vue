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
                                <li class="breadcrumb-item"><router-link to="/categories">Marques ></router-link></li>
                                <li class="breadcrumb-item active" aria-current="page">{{ MarquesChildrenArray }}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div class="row">
                  
                    <div class="col-xl-12 col-md-12 col-sm-12  pe-0 mb-2">
                        
                        <div class="hero-slider" style="height: 40vh !important;" >
                          <div class="hero-img-1 " style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;"  v-if="SlidersArray.length === 0">
                                <div class=" col-xxl-5 col-lg-7 col-md-8  text-xs-center" style="width: 100%; height:100%">
                                    <img :src="defaultBanner " alt="" style="width: 100%; height:100%">
                                   
                                </div>
                            </div>
                           
                            <div v-else class="hero-img-1" style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;"   v-for="(banner , index) in SlidersArray"  :key="index">
                                <div class=" col-xxl-5 col-lg-7 col-md-8  text-xs-center" style="width: 100%; height:100%">
                                    <img :src=" banner" alt="" style="width: 100%; height:100%">
                                   
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
                    <aside class="col-xl-3 col-lg-2 col-md-3 mb-6 mb-md-0">
                        <div class="offcanvas offcanvas-start offcanvas-collapse w-md-50" tabindex="-1"
                            id="offcanvasCategory" aria-labelledby="offcanvasCategoryLabel">
                            <div class="offcanvas-header d-lg-none">
                                <h5 class="offcanvas-title" id="offcanvasCategoryLabel">Filter</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body ps-lg-2 pt-lg-0">
                                <div class="mb-8">
                                   
                                    <h5 class="mb-3 mb-3 bg-primary p-2 text-center text-white">Marques</h5>
                                    
                                    <ul class="nav nav-category" id="categoryCollapseMenu">
                                        <li 
                                            class="nav-item border-bottom w-100 card px-2 mt-1" 
                                            v-for="(category, index) in marquesArray" 
                                            :key="index" 
                                            :class="{ active: encodeId(category.id) === getActiveCategoryId }"
                                        >
                                            <a :href="`/list-marques/${ encodeId(category.id)}`" class="nav-link collapsed justify-content-start">
                                            <img 
                                                :src="category.Logo !== null ? category.Logo : defaultImageCategorie"
                                                :alt="category.Nom" 
                                                width="24" 
                                                height="24" 
                                                style="width:20px; margin-right: 5px;"
                                            >
                                            <span>{{ category.Nom }}</span>
                                            </a>
                                        </li>
                                        </ul>

                                </div>
                               
    
                                <div class="mb-8 position-relative" style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
                                   
                                    <img src="@/assets/img/bnm.jpg" alt=""
                                        class="img-fluid rounded" />
                                    <!-- Banner Image -->
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
                                 <h5 class="col-xl-5  text-white d-flex justify-content-between mb-0">Filter par intervalle de prix:  </h5>
                                 <div class=" col-xl-7 d-flex align-items-center">
                                    <MazInput v-model="filters.min" color="warning"
                                                name="filters.min" size="xs" rounded-size="xs"
                                                type="number" />
                                               
                                                    <div class="text-white mx-2"> - </div>
                                                <MazInput v-model="filters.max" color="warning"
                                                name="filters.max" size="xs" rounded-size="xs"
                                                type="number" />
                                                <button class="text-dark btn btn-xs bg-gray-300 ms-3" style="cursor: pointer; cursor: pointer; padding: 5px 15px;  border-radius: 0;" @click="FilterProduct" >Filter</button>
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
                                            <li class="nav-item">
                                             
                                                <a href="#" class="nav-link" id="gridplus-tab" data-bs-toggle="tab"
                                                    data-bs-target="#gridplus" role="tab" aria-controls="gridplus"
                                                    aria-selected="false">
                                                    <i class="bi bi-grid-3x3-gap"></i>
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
                                    <div class="tab-pane fade show active" id="grid" role="tabpanel"
                                        aria-labelledby="nav-fruitsandveg-tab" tabindex="0">
                                        <grid :id="id" :dataProduct="dataProduct"></grid>
    
                                    </div>
                                    <div class="tab-pane fade " id="gridplus" role="tabpanel"
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
import grid from '@/components/Marques/grid.vue';
import GridPlus from '@/components/Marques/gridPlus.vue';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';
import 'slick-carousel';
import defaultImage from '@/assets/images/products/product-img-2.jpg'
import defaultBanner from '@/assets/img/banner_default.jpg'
import axios from '@/lib/axiosConfig';
import SkeletonCategorie from '@/components/others/loader/SkeletonCategorie.vue';





export default {
  props: ['id'],
  components: {
    Listes, grid, GridPlus , SkeletonCategorie , 
   
  },
  data() {
    return {
        MarquesChildrenArray:[],
        marquesArray:[],
      defaultImage: defaultImage,
      defaultBanner:defaultBanner,
      loading:false,
     
      filters:{
        min:'',
        max:'',
      },
      dataProduct:"",
      SlidersArray:[],
     
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
    
    await this.getMarquesAll()
     await this.getMarquesDetail()
    this.initSliders();

  },
  methods: {
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
    encodeId(id) {
    return btoa(id); // Encode en Base64
  },
    async getMarquesAll() {
      try {
        const response = await axios.get('/marques')
        if (response.data.status === "success") {
          this.marquesArray = response.data?.data?.data
          .filter(m  =>m.IsActive === 1)
          ?.slice(0,7)

        }

      } catch (error) {
        console.log('error', error)
      }
    },
    async getMarquesDetail() {
      try {
        const response = await axios.get(`/marques/${this.decodedId}`)
        if (response.data.status === "success") {
          
          this.MarquesChildrenArray = response.data?.data?.Nom
          const slider =  response.data?.data?.Sliders !== null &&  response.data?.data?.Sliders !== ''  ? true : false
          this.SlidersArray = slider ?  response.data?.data?.Sliders.split('|') : []
          

         
          

        }

      } catch (error) {
        console.log('error', error)
      }
    },
   async FilterProduct(){
       this.dataProduct ={
        min: parseInt(this.filters.min),
        max:parseInt(this.filters.max) ,
        categorie: parseInt(this.decodedId) 

       }
       
  },
  

}
}
</script>
<style lang="css" scoped>
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
</style>