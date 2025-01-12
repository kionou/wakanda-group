<template >
    <div>
        <Navbar  />
        <navbarMobile />
        <RouterView :style="{marginTop:'60px' , backgroundColor: ColorDay?.data?.Color ? ColorDay?.data?.Color : '#fff' }" class="p-1" />
        
            <Footer />
            <Bottom />

        
    </div>
</template>
<script>
import Footer from '@/components/loyout/footer.vue';
import Navbar from '@/components/loyout/navbar.vue';
import navbarMobile from '@/components/loyout/navbar-mobile.vue';
import Bottom from '@/components/others/bottom.vue';
import axios from '@/lib/axiosConfig';




export default {
    components:{
        Navbar , Footer , navbarMobile , Bottom

    },
    data() {
        return {
            ColorDay:'',
        }
    },
   async mounted() {
    await this.getColorDay()
        
    },
    methods: {
        async getColorDay() {
      try {
        const response = await axios.get('/layouts/active-layout/detail')
        if (response.data.status === "success") {
          this.ColorDay = response.data
          console.log(' this.ColorDay', this.ColorDay)
        

        }

      } catch (error) {
        console.log('error', error)
      }
    },
        
    },
    
}
</script>
<style lang="css" scoped>
    
</style>