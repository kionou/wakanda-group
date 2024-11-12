<template>
 

  <div class="row mb-4">
    <div class="col-xl-2 col-md-3 d-none d-lg-block pe-0">
      <AnimatedPlaceholder style="margin-right: 5px;"
        height="300px"
        width="98%"
       
      />
    </div>
    <div class="col-xl-8 col-md-9 col-sm-12  pe-0">
      <AnimatedPlaceholder 
        height="300px"
        width="100%"
       
      />
    </div>
    <div class="col-xl-2 d-none d-xl-block  pe-0">
      <AnimatedPlaceholder style="margin-left: 5px;"
        height="300px"
        width="100%"
       
      />
    </div>
  </div>
  <div class="row mb-4">
    <div class="col-12 mb-4">
      <AnimatedPlaceholder height="36px" width="100%"/>
    </div>
    <div class="col-12">
      <div class="row">
       
          <div class="col-1" v-for="(item , index) in 12  " :key="index">
            <AnimatedPlaceholder
        height="100px"
        width="100px"
       
      />
          </div>
       
       
       
      </div>
    </div>

  </div>
  <div class="row mb-4">
    <div class="col-12 mb-4">
      <AnimatedPlaceholder height="40px" width="100%"/>
    </div>
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
