<template>
    <div class="image-container">
      <!-- Loader -->
      <div v-if="loading" class="loader"></div>
  
      <!-- Image -->
      <img
        v-if="!loading"
        :src="src"
        :alt="alt"
        @load="handleImageLoad"
        @error="handleImageError"
        class="loaded-image"
      />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      src: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
        default: 'image',
      },
    },
    data() {
      return {
        loading: true, 
      };
    },
    methods: {
      handleImageLoad() {
        this.loading = false; 
      },
      handleImageError() {
        this.loading = false; 
      },
    },
  };
  </script>
  
  <style scoped>
  .image-container {
    position: relative;
    width: 100%; 
    height: 300px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .loader {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  .loaded-image {
    display: block;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
  </style>
  