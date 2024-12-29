<template>
 
 <div class="col-12 mb-2">
        <AnimatedPlaceholder height="36px" width="100%"/>
      </div>
    <div class="row mb-4">
      <div class="col-xl-6 col-md-6 col-sm-12 pe-0">
        <div class="col-xl-12">
            <AnimatedPlaceholder style="margin-right: 5px;"
          height="300px"
          width="98%"
         
        />
        </div>
        <div class="col-12 mt-2">
        <div class="row">
         
            <div class="col-3" v-for="(item , index) in 4  " :key="index">
              <AnimatedPlaceholder
          height="100px"
          width="140px"
         
        />
            </div>
         
         
         
        </div>
      </div>
       
      </div>
      <div class="col-xl-6 col-md-6 col-sm-12  pe-0">
        <div class="col-12 mb-2">
        <AnimatedPlaceholder height="36px" width="100%"/>
      </div>
      <div class="row">
        <div class="col-xl-6">
            <AnimatedPlaceholder 
          height="150px"
          width="98%"
         
        />
        </div>
        <div class="col-xl-6">
            <AnimatedPlaceholder 
          height="150px"
          width="100%"
         
        />
        </div>
      </div>
      <div class="col-12 my-2">
        <AnimatedPlaceholder height="98px" width="100%"/>
      </div>
      <div class="col-12 my-2">
        <AnimatedPlaceholder height="98px" width="100%"/>
      </div>
      </div>
  
    </div>
   
    <div class="row mb-4">
     
      <div class="col-12">
        <div class="row">
         
            <div class="col-2" v-for="(item , index) in 6  " :key="index">
              <AnimatedPlaceholder
          height="300px"
          width="200px"
         
        />
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
  