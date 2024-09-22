<template >
    <div>
        <Navbar />
        <navbarMobile />
        <RouterView />
      
            <Footer />
        
    </div>
</template>
<script>
import Footer from '@/components/loyout/footer.vue';
import Navbar from '@/components/loyout/navbar.vue';
import navbarMobile from '@/components/loyout/navbar-mobile.vue';



export default {
    components:{
        Navbar , Footer , navbarMobile

    }
    
}
</script>
<style lang="css" scoped>
    
</style>