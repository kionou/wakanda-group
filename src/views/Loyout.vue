<template >
    <div>
        <Navbar  />
        <navbarMobile />
        <RouterView style="margin-top: 70px;"/>
            <Footer />
            <Bottom />

        
    </div>
</template>
<script>
import Footer from '@/components/loyout/footer.vue';
import Navbar from '@/components/loyout/navbar.vue';
import navbarMobile from '@/components/loyout/navbar-mobile.vue';
import Bottom from '@/components/others/bottom.vue';




export default {
    components:{
        Navbar , Footer , navbarMobile , Bottom

    }
    
}
</script>
<style lang="css" scoped>
    
</style>