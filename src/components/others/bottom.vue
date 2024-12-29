<template>
    <router-link to="/" v-show="visible" class="bottom-right">
        <i class="bi bi-chat-dots"></i>
    </router-link>
  </template>
  
  <script>
  export default {
    name: 'CptTop',
    data() {
      return {
        visible: false
      }
    },
    methods: {
      scrollTop: function () {
        this.intervalId = setInterval(() => {
          if (window.pageYOffset === 0) {
            clearInterval(this.intervalId)
          }
          window.scroll(0, window.pageYOffset - 50)
        }, 2)
      },
      scrollListener: function () {
        this.visible = window.scrollY > 150
      }
    },
    mounted: function () {
      window.addEventListener('scroll', this.scrollListener)
    },
  }
  </script>
  
  <style scoped>
  .bottom-right {
    position: fixed;
    bottom: 40px;
    right: 20px;
    cursor: pointer;
    z-index: 999999999999;
    background-color: var(--fc-secondary);
    color: #FFF;
    font-size: 25px;
    border-radius: 50px;
    padding: 4px 12px;
  }
  </style>