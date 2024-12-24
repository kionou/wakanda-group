<template>
 

    <div class="row mb-4">
      
    <div class="col-xl-12">
        <div class="col-xl-12 col-md-12 col-sm-12 mb-3 pe-0">
        <AnimatedPlaceholder 
          height="200px"
          width="100%"
        />
      </div>
      <div class="row">
         
        <div class="row">
         
         <div class="col-xl-2 col-md-3 col-lg-3 col-sm-12 " v-for="(item , index) in 6  " :key="index">
           <AnimatedPlaceholder 
                         height="200px"
                         width="98%" />
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
  