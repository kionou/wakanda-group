<template>
 

    <div class="row mb-4">
      
    <div class="col-xl-12">
        <div class="col-xl-12 col-md-12 col-sm-12 mb-3 pe-0">
        <AnimatedPlaceholder 
          height="60px"
          width="100%"
        />
      </div>
      <div class="row">
         
           <AnimatedPlaceholder class="me-2"
                         height="200px"
                         width="400px" />
        
         
        <AnimatedPlaceholder 
                         height="200px"
                         width="400px" />
      
      
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
  