<template >
   <div>
      <div class="row mt-4">
     
        
      </div>
      <main>
         <!-- section -->
         <section>
   
            <!-- row -->
            <div class="row mt-2">
   
               <div class="col_xl-3 col-lg-3  col-md-4 col-12  d-none d-md-block ">
                  <div id="page-menu">
  <div class="page-menu-item page-menu-title" data-spm-anchor-id="a2g0o.new_account_index.0.i8.244d5955wy7i0m">
    <div class="item-text">Compte</div>
  </div>

  <div class="page-menu-item" :class="{ 'page-menu-item-active': $route.path === '/client' }">
    <div class="item-text">
      <router-link to="/client" >
        <span>Aperçu général</span>
      </router-link>
    </div>
  </div>

  <div class="page-menu-item" :class="{ 'page-menu-item-active': $route.path === '/client/commandes' }">
    <div class="item-text">
      <router-link to="/client/commandes" >Commandes</router-link>
    </div>
  </div>

  <div class="page-menu-item" :class="{ 'page-menu-item-active': $route.path === '/client/user-adresse' }">
    <div class="item-text">
      <router-link to="/client/user-adresse" >Adresse de livraison</router-link>
    </div>
  </div>

  <div class="page-menu-item">
    <div class="item-text">Paramètres</div>
  </div>
</div>

                  <div id="mobile-download">
                     <div id="mobile-download-content">
                        <div class="text">Application mobile Wakanda</div>
                        <div class="sub-text">Explorez n'importe où, n'importe quand !</div><a
                           href="#" target="_blank" rel="nofollow"><img
                              src="@/assets/img/qr.png"  style="width: 65%;" alt="" >
                           <div class="">Scannez le code ou cliquez ici pour télécharger</div>
                        </a>
                     </div>
                  </div>
               </div>
               <div class=" col_xl-9 col-lg-9  col-md-8 col-12 ">
                
                  <RouterView />
               </div>
            </div>
   
         </section>
      </main>
      <Chatbox></Chatbox>
      
   </div>
</template>
<script>
import Chatbox from '@/components/others/chatbox.vue'

export default {
   components:{
      Chatbox
   },
   data() {
      return {
         
      }
   },
   computed: {
  
   loggedInUser() {
      return this.$store.getters["auth/myAuthenticatedUser"];
    },
  
   
 },
  async mounted() {
   await this.fetchUserDetail()
     
   },
   methods: {
      async fetchUserDetail() {
      try {
        const response = await axios.get("/auth-user", {
          headers: {
            Authorization: `Bearer ${this.loggedInUser.token}`,
          },
        });
        if (response.data.status === "success") {
          const profil = response.data.data;
            console.log(profil)
        
       
            
          this.loading = false;
        }
      } catch (error) {
        if (
          error.response.data.message === "Vous n'êtes pas autorisé." ||
          error.response.status === 401
        ) {
          await this.$store.dispatch("auth/clearMyAuthenticatedUser");
          this.$router.push("/"); //a revoir
        }
      }
    },
   },

}
</script>
<style lang="css" scoped>
#page-menu {
   background-color: #fff;
   padding: 12px 0;
   display: inline-block;
   width: 296px;
   min-height: 240px;
   margin: 0 24px 0 0;
}

#page-menu .page-menu-title {
    font-size: 16px;
    color: #222;
    font-weight: 700;
    cursor: unset;
}

#page-menu .page-menu-item {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 36px;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 14px;
    padding: 0 16px;
    cursor: pointer;
}

#page-menu .page-menu-item .item-text {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
#page-menu .page-menu-item-active {
    background-color: #f5f5f5;
    position: relative;
    padding: 0 16px;
    margin: 0;
}
#page-menu .page-menu-item-active:before {
    content: "";
    position: absolute;
    height: 100%;
    width: 4px;
    background-color: #ff5235;
    left: 0;
}
#page-menu .page-menu-item .item-text {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

#page-menu .page-menu-item .item-text a {
   color:#222
}

 #mobile-download {
    background-color: #fff;
    margin-top: 20px;
    max-width: 296px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
}
#mobile-download #mobile-download-content {
    text-align: center;
    padding: 16px 0;
}

#mobile-download #mobile-download-content .text {
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 8px;
}

#mobile-download #mobile-download-content .sub-text {
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
}
#mobile-download #mobile-download-content a {
    text-decoration: none;
    color: #333;
    font-size: 12px;
}
</style>