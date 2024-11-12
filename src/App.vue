<template >
  <div>
    <RouterView />
  </div>
</template>

<script>
//  import "@/assets/libs/slick-carousel/slick/slick.min.js"
// import "@/assets/libs/slick-carousel/slick/slick.css"
// import "@/assets/libs/slick-carousel/slick/slick-theme.css"


import "@/assets/libs/tiny-slider/dist/tiny-slider.css"
import "@/assets/libs/bootstrap-icons/font/bootstrap-icons.min.css"
import "@/assets/libs/feather-webfont/dist/feather-icons.css"
import "@/assets/libs/simplebar/dist/simplebar.min.css"
import "@/assets/css/theme.min.css"


   

  export default {
  name:'App',
  created() {
   
  },
  watch: {
    
    $route(to,) {
      const name = to.name.toLowerCase()
      const title = name 
        // ? `${name} (${to.href.split('/')[2].toLowerCase()})`
        // : name
      document.title = `Wakanda - ${title}`

      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  },
  mounted() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  },
  
}
</script>
<style lang="css" scoped>
  
</style>