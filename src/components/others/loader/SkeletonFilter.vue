<template>
 

   
   
  
    <div class="row mb-4">
      
      <div class="col-xl-12">
        <div class="row">
         
          <div class="col-xl-12">
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
  