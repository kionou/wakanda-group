<template>
 

    <div class="row mb-4">
    
      <div class="col-xl-12 col-md-12 col-sm-12  pe-0">
        <AnimatedPlaceholder 
          height="150px"
          width="100%"
         
        />
      </div>
    
    </div>
    <div class="col-xl-12 mb-3">
        <div class="row">
         
            <div class="col-xl-2 col-md-3 col-lg-3 col-sm-12 " v-for="(item , index) in 6  " :key="index">
              <AnimatedPlaceholder 
                            height="200px"
                            width="98%" />
            </div>
         
         
         
        </div>
      </div>
  
    <div class="row mb-4">
      
      <div class="col-xl-12">
        <div class="row">
          <div class="col-xl-4">
            <AnimatedPlaceholder 
                            height="98%"
                            width="95%" />
          </div>
          <div class="col-xl-8">
            <div class="row">
              <div class="col-xl-3 col-md-3 col-lg-3 col-sm-2 mb-2" v-for="(item , index) in 8  " :key="index">
              <AnimatedPlaceholder 
                            height="250px"
                            width="98%" />
            </div>
         
            </div>

          </div>

        </div>
      </div>
  
    </div>
  </template>
  
  <script setup>
  import AnimatedPlaceholder from "./AnimatedPlaceholder.vue";
  </script>
  
  <style scoped>
  .summary-placeholder {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
  }
  </style>
  