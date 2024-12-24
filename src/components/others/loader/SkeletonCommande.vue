<template>
 

    <div class="row mb-4">
    <div class="col-xl-8">
        <div class="col-xl-12 col-md-12 col-sm-12 mb-3 pe-0">
        <AnimatedPlaceholder 
          height="160px"
          width="98%"
        />
      </div>
      <div class="col-xl-12 col-md-12 col-sm-12 mb-3  pe-0">
        <AnimatedPlaceholder 
          height="250px"
          width="98%"
        />
      </div>
      <div class="col-xl-12 col-md-12 col-sm-12  pe-0">
        <AnimatedPlaceholder 
          height="350px"
          width="98%"
        />
      </div>
      
    </div>
    <div class="col-xl-4">
        <div class="col-xl-12 col-md-12 col-sm-12  pe-0">
        <AnimatedPlaceholder 
          height="400px"
          width="100%"
        />
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
  