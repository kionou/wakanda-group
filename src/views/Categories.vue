<template>
    <div>
        <main>
         <!-- section-->
         <div class="mt-4">
            
               <!-- row -->
               <div class="row">
                  <!-- col -->
                  <div class="col-12">
                     <nav class="mb-3" aria-label="breadcrumb">
                     <ol class="breadcrumb mb-0">
                        <li class="breadcrumb-item"><a href="/">Accueil ></a></li>
                        <li class="breadcrumb-item"><router-link to="/categories">Catégories ></router-link></li>
                        <li class="breadcrumb-item active" aria-current="page">Electroniques</li>
                     </ol>
                  </nav>
                  </div>
               </div>
               <div class="row">
                <div class="col-xl-12 card mb-4 bg-light border-0 bg-white">
                        <!-- card body -->
                        <div class="card-body p-9">
                           <h2 class="mb-0 fs-1">Snacks & Munchies</h2>
                        </div>
                     </div>
               </div>
          
         </div>
         <!-- section -->
         <div class="mt-8  mb-3">
           
               <!-- row -->
               <div class="row ">
                  <!-- col -->
                  <aside class="col-lg-3 col-md-4 mb-6 mb-md-0">
                     <div class="offcanvas offcanvas-start offcanvas-collapse w-md-50" tabindex="-1" id="offcanvasCategory" aria-labelledby="offcanvasCategoryLabel">
                        <div class="offcanvas-header d-lg-none">
                           <h5 class="offcanvas-title" id="offcanvasCategoryLabel">Filter</h5>
                           <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body ps-lg-2 pt-lg-0">
                           <div class="mb-8">
                              <!-- title -->
                              <h5 class="mb-3">Categories</h5>
                              <!-- nav -->
                              <ul class="nav nav-category" id="categoryCollapseMenu">
                                 <li class="nav-item border-bottom w-100">
                                    <a href="#" class="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#categoryFlushOne" aria-expanded="false" aria-controls="categoryFlushOne">
                                       Dairy, Bread & Eggs
                                       <i class="feather-icon icon-chevron-right"></i>
                                    </a>
                                    <!-- accordion collapse -->
                                    <div id="categoryFlushOne" class="accordion-collapse collapse" data-bs-parent="#categoryCollapseMenu">
                                       <div>
                                          <!-- nav -->

                                          <ul class="nav flex-column ms-3">
                                             <!-- nav item -->
                                             <li class="nav-item"><a href="#!" class="nav-link">Milk</a></li>
                                             <!-- nav item -->
                                             <li class="nav-item"><a href="#!" class="nav-link">Milk Drinks</a></li>
                                             <!-- nav item -->
                                             <li class="nav-item"><a href="#!" class="nav-link">Curd & Yogurt</a></li>
                                             <!-- nav item -->
                                             <li class="nav-item"><a href="#!" class="nav-link">Eggs</a></li>
                                             <!-- nav item -->
                                             <li class="nav-item"><a href="#!" class="nav-link">Bread</a></li>
                                             <!-- nav item -->
                                             <li class="nav-item"><a href="#!" class="nav-link">Buns & Bakery</a></li>
                                             <!-- nav item -->
                                             <li class="nav-item"><a href="#!" class="nav-link">Butter & More</a></li>
                                             <!-- nav item -->
                                             <li class="nav-item"><a href="#!" class="nav-link">Cheese</a></li>
                                             <!-- nav item -->
                                             <li class="nav-item"><a href="#!" class="nav-link">Paneer & Tofu</a></li>
                                             <!-- nav item -->
                                             <li class="nav-item"><a href="#!" class="nav-link">Cream & Whitener</a></li>
                                             <!-- nav item -->
                                             <li class="nav-item"><a href="#!" class="nav-link">Condensed Milk</a></li>
                                             <!-- nav item -->
                                             <li class="nav-item"><a href="#!" class="nav-link">Vegan Drinks</a></li>
                                          </ul>
                                       </div>
                                    </div>
                                 </li>
                                 <!-- nav item -->
                                 <li class="nav-item border-bottom w-100">
                                    <a href="#" class="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                       Snacks & Munchies
                                       <i class="feather-icon icon-chevron-right"></i>
                                    </a>

                                    <!-- collapse -->
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#categoryCollapseMenu">
                                       <div>
                                          <ul class="nav flex-column ms-3">
                                             <!-- nav item -->
                                             <li class="nav-item"><a href="#!" class="nav-link">Chips & Crisps</a></li>
                                             <!-- nav item -->
                                             <li class="nav-item"><a href="#!" class="nav-link">Nachos</a></li>
                                             <!-- nav item -->
                                             <li class="nav-item"><a href="#!" class="nav-link">Popcorn</a></li>
                                             <!-- nav item -->
                                             <li class="nav-item"><a href="#!" class="nav-link">Bhujia & Mixtures</a></li>
                                             <!-- nav item -->
                                             <li class="nav-item"><a href="#!" class="nav-link">Namkeen Snacks</a></li>
                                             <!-- nav item -->
                                             <li class="nav-item"><a href="#!" class="nav-link">Healthy Snacks</a></li>
                                             <!-- nav item -->
                                             <li class="nav-item"><a href="#!" class="nav-link">Cakes & Rolls</a></li>
                                             <!-- nav item -->
                                             <li class="nav-item"><a href="#!" class="nav-link">Energy Bars</a></li>
                                             <!-- nav item -->
                                             <li class="nav-item"><a href="#!" class="nav-link">Papad & Fryums</a></li>
                                             <!-- nav item -->
                                             <li class="nav-item"><a href="#!" class="nav-link">Rusks & Wafers</a></li>
                                          </ul>
                                       </div>
                                    </div>
                                 </li>
                                 <li class="nav-item border-bottom w-100">
                                    <a href="#" class="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                       Fruits & Vegetables
                                       <i class="feather-icon icon-chevron-right"></i>
                                    </a>

                                    <!-- collapse -->
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#categoryCollapseMenu">
                                       <div>
                                          <ul class="nav flex-column ms-3">
                                             <!-- nav item -->
                                             <li class="nav-item">
                                                <a class="nav-link active" aria-current="page" href="#!">Fresh Vegetables</a>
                                             </li>
                                             <!-- nav item -->
                                             <li class="nav-item">
                                                <a class="nav-link" href="#!">Herbs & Seasonings</a>
                                             </li>
                                             <!-- nav item -->
                                             <li class="nav-item">
                                                <a class="nav-link" href="#!">Fresh Fruits</a>
                                             </li>
                                             <!-- nav item -->
                                             <li class="nav-item">
                                                <a class="nav-link" href="#!">Organic Fruits & Vegetables</a>
                                             </li>
                                             <!-- nav item -->
                                             <li class="nav-item">
                                                <a class="nav-link" href="#!">Cuts & Sprouts</a>
                                             </li>
                                             <!-- nav item -->
                                             <li class="nav-item">
                                                <a class="nav-link" href="#!">Exotic Fruits & Veggies</a>
                                             </li>
                                             <!-- nav item -->
                                             <li class="nav-item">
                                                <a class="nav-link" href="#!">Flower Bouquets, Bunches</a>
                                             </li>
                                          </ul>
                                       </div>
                                    </div>
                                 </li>
                                 <li class="nav-item border-bottom w-100">
                                    <a href="#" class="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                       Cold Drinks & Juices
                                       <i class="feather-icon icon-chevron-right"></i>
                                    </a>

                                    <!-- collapse -->
                                    <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#categoryCollapseMenu">
                                       <div>
                                          <ul class="nav flex-column ms-3">
                                             <!-- nav item -->
                                             <li class="nav-item"><a href="#!" class="nav-link">Soft Drinks</a></li>
                                             <!-- nav item -->
                                             <li class="nav-item"><a href="#!" class="nav-link">Fruit Juices</a></li>
                                             <!-- nav item -->
                                             <li class="nav-item"><a href="#!" class="nav-link">Coldpress</a></li>
                                             <!-- nav item -->
                                             <li class="nav-item"><a href="#!" class="nav-link">Energy Drinks</a></li>
                                             <!-- nav item -->
                                             <li class="nav-item"><a href="#!" class="nav-link">Water & Ice Cubes</a></li>
                                             <!-- nav item -->
                                             <li class="nav-item"><a href="#!" class="nav-link">Soda & Mixers</a></li>
                                             <!-- nav item -->
                                             <li class="nav-item"><a href="#!" class="nav-link">Concentrates & Syrups</a></li>
                                             <!-- nav item -->
                                             <li class="nav-item"><a href="#!" class="nav-link">Detox & Energy Drinks</a></li>
                                             <!-- nav item -->
                                             <li class="nav-item"><a href="#!" class="nav-link">Juice Collection</a></li>
                                          </ul>
                                       </div>
                                    </div>
                                 </li>

                                 <li class="nav-item border-bottom w-100">
                                    <a href="#" class="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                       Breakfast & Instant Food
                                       <i class="feather-icon icon-chevron-right"></i>
                                    </a>

                                    <!-- collapse -->
                                    <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#categoryCollapseMenu">
                                       <div>
                                          <ul class="nav flex-column ms-3">
                                             <!-- nav item -->
                                             <li class="nav-item">
                                                <a class="nav-link active" aria-current="page" href="#!">Batter</a>
                                             </li>
                                             <!-- nav item -->
                                             <li class="nav-item">
                                                <a class="nav-link" href="#!">Breakfast Cereal</a>
                                             </li>
                                             <!-- nav item -->
                                             <li class="nav-item">
                                                <a class="nav-link" href="#!">Noodles, Pasta & Soup</a>
                                             </li>
                                             <!-- nav item -->
                                             <li class="nav-item">
                                                <a class="nav-link" href="#!">Frozen Non-Veg Snackss</a>
                                             </li>
                                             <!-- nav item -->
                                             <li class="nav-item">
                                                <a class="nav-link" href="#!">Frozen Veg</a>
                                             </li>
                                             <!-- nav item -->
                                             <li class="nav-item">
                                                <a class="nav-link" href="#!">Vermicelli</a>
                                             </li>
                                             <!-- nav item -->
                                             <li class="nav-item">
                                                <a class="nav-link" href="#!">Instant Mixes</a>
                                             </li>
                                          </ul>
                                       </div>
                                    </div>
                                 </li>
                                 <li class="nav-item border-bottom w-100">
                                    <a href="#" class="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                       Bakery & Biscuits
                                       <i class="feather-icon icon-chevron-right"></i>
                                    </a>

                                    <!-- collapse -->
                                    <div id="flush-collapseSix" class="accordion-collapse collapse" data-bs-parent="#categoryCollapseMenu">
                                       <div>
                                          <ul class="nav flex-column ms-3">
                                             <!-- nav item -->
                                             <li class="nav-item">
                                                <a class="nav-link active" aria-current="page" href="#!">Cookies</a>
                                             </li>
                                             <!-- nav item -->
                                             <li class="nav-item">
                                                <a class="nav-link" href="#!">Glucose & Marie</a>
                                             </li>
                                             <!-- nav item -->
                                             <li class="nav-item">
                                                <a class="nav-link" href="#!">Sweet & Salty</a>
                                             </li>
                                             <!-- nav item -->
                                             <li class="nav-item">
                                                <a class="nav-link" href="#!">Healthy & Digestive</a>
                                             </li>
                                             <!-- nav item -->
                                             <li class="nav-item">
                                                <a class="nav-link" href="#!">Cream Biscuits</a>
                                             </li>
                                             <!-- nav item -->
                                             <li class="nav-item">
                                                <a class="nav-link" href="#!">Rusks & Wafers</a>
                                             </li>
                                             <!-- nav item -->
                                             <li class="nav-item">
                                                <a class="nav-link" href="#!">Cakes & Rolls</a>
                                             </li>
                                             <!-- nav item -->
                                             <li class="nav-item">
                                                <a class="nav-link" href="#!">Buns & Bakery</a>
                                             </li>
                                          </ul>
                                       </div>
                                    </div>
                                 </li>
                                 <li class="nav-item border-bottom w-100">
                                    <a href="#" class="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                                       Chicken, Meat & Fish
                                       <i class="feather-icon icon-chevron-right"></i>
                                    </a>

                                    <!-- collapse -->
                                    <div id="flush-collapseSeven" class="accordion-collapse collapse" data-bs-parent="#categoryCollapseMenu">
                                       <div>
                                          <ul class="nav flex-column ms-3">
                                             <!-- nav item -->
                                             <li class="nav-item">
                                                <a class="nav-link active" aria-current="page" href="#!">Chicken</a>
                                             </li>
                                             <!-- nav item -->
                                             <li class="nav-item">
                                                <a class="nav-link" href="#!">Sausage, Salami & Ham</a>
                                             </li>
                                             <!-- nav item -->
                                             <li class="nav-item">
                                                <a class="nav-link" href="#!">Exotic Meat</a>
                                             </li>
                                             <!-- nav item -->
                                             <li class="nav-item">
                                                <a class="nav-link" href="#!">Eggs</a>
                                             </li>
                                             <!-- nav item -->
                                             <li class="nav-item">
                                                <a class="nav-link" href="#!">Frozen Non-Veg Snacks</a>
                                             </li>
                                          </ul>
                                       </div>
                                    </div>
                                 </li>
                              </ul>
                           </div>

                          
                           <div class="mb-8 position-relative">
                              <!-- Banner Design -->
                              <!-- Banner Content -->
                              <div class="position-absolute p-5 py-8">
                                 <h3 class="mb-0">Fresh Fruits</h3>
                                 <p>Get Upto 25% Off</p>
                                 <a href="#" class="btn btn-dark">
                                    Shop Now
                                    <i class="feather-icon icon-arrow-right ms-1"></i>
                                 </a>
                              </div>
                              <!-- Banner Content -->
                              <!-- Banner Image -->
                              <!-- img -->
                              <img src="@/assets/images/banner/assortment-citrus-fruits.png" alt="" class="img-fluid rounded" />
                              <!-- Banner Image -->
                           </div>
                        </div>
                     </div>
                  </aside>
                  <section class="col-lg-9 col-md-12">
                     <!-- card -->
                     
                     <!-- list icon -->
                     <div class="d-lg-flex justify-content-between align-items-center">
                        <div class="mb-3 mb-lg-0">
                           <p class="mb-0">
                              <span class="text-dark">24</span>
                              Products found
                           </p>
                        </div>

                        <!-- icon -->
                        <div class="d-md-flex justify-content-between align-items-center">
                           <div class="d-flex align-items-center justify-content-between">
                            <nav>
                              <ul class="nav nav-pills nav-scroll border-bottom-0 gap-1" id="nav-tab" role="tablist">
                                 <!-- nav item -->
                                 <!-- <li class="nav-item">
                               
                                    <a
                                       href="#"
                                       class="nav-link active"
                                       id="liste-tab"
                                       data-bs-toggle="tab"
                                       data-bs-target="#liste"
                                       role="tab"
                                       aria-controls="liste"
                                       aria-selected="true">
                                       <i class="bi bi-list-ul"></i>
                                    </a>
                                 </li> -->
                                 <!-- nav item -->

                               
                                 <li class="nav-item">
                                    <!-- nav link -->
                                    <a href="#" class="nav-link active" id="grid-tab" data-bs-toggle="tab" data-bs-target="#grid" role="tab" aria-controls="grid" aria-selected="false">
                                        <i class="bi bi-grid"></i>
                                    </a>
                                 </li>
                                 <li class="nav-item">
                                    <!-- nav link -->
                                    <a href="#" class="nav-link" id="gridplus-tab" data-bs-toggle="tab" data-bs-target="#gridplus" role="tab" aria-controls="gridplus" aria-selected="false">
                                        <i class="bi bi-grid-3x3-gap"></i>
                                    </a>
                                 </li>
                                 <!-- nav item -->
                                
                              </ul>
                           </nav>
                              
                              <div class="ms-2 d-lg-none">
                                 <a class="btn btn-outline-gray-400 text-muted" data-bs-toggle="offcanvas" href="#offcanvasCategory" role="button" aria-controls="offcanvasCategory">
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="14"
                                       height="14"
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       stroke="currentColor"
                                       stroke-width="2"
                                       stroke-linecap="round"
                                       stroke-linejoin="round"
                                       class="feather feather-filter me-2">
                                       <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                                    </svg>
                                    Filters
                                 </a>
                              </div>
                           </div>

                           <div class="d-flex mt-2 mt-lg-0">
                              <div class="me-2 flex-grow-1">
                                 <!-- select option -->
                                 <select class="form-select">
                                    <option selected>Show: 50</option>
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                    <option value="30">30</option>
                                 </select>
                              </div>
                              <div>
                                 <!-- select option -->
                                 <select class="form-select">
                                    <option selected>Sort by: Featured</option>
                                    <option value="Low to High">Price: Low to High</option>
                                    <option value="High to Low">Price: High to Low</option>
                                    <option value="Release Date">Release Date</option>
                                    <option value="Avg. Rating">Avg. Rating</option>
                                 </select>
                              </div>
                           </div>
                        </div>
                     </div>
                     <!-- row -->
                     <div class="row">
                  <div class="col-12">
                     <!-- tab -->
                     <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="grid" role="tabpanel" aria-labelledby="nav-fruitsandveg-tab" tabindex="0">
                           <grid></grid>
                         
                        </div>
                        <div class="tab-pane fade " id="gridplus" role="tabpanel" aria-labelledby="nav-snackMunchies-tab" tabindex="0">
                           <GridPlus></GridPlus>
                            
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
import grid from '@/components/Categories/grid.vue';
import GridPlus from '@/components/Categories/gridPlus.vue';


export default {
   props:['id'],
    components:{
        Listes , grid , GridPlus
    },
    data() {
        return {
            
        }
    },
    mounted() {
      console.log('id',this.id);
      
      
    },
    methods: {
      
    },
    
}
</script>
<style lang="css" scoped>
    
</style>