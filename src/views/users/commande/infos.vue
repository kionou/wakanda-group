<template >
    <div>
        <SkeletonClient v-if="loading " style="z-index: 99999"></SkeletonClient>

        <div class="card" v-else>
            <div class="card-body">
                <div class="row">
                    <div class="col-xl-12 row">
                        <div class="col-xl-1">
                            <img src="@/assets/images/avatar/avatar-1.jpg" class="mg-thumbnail rounded "
                            style="border-radius: 50%; height: 100px; width: 100px;" alt="">
                        </div>
                      
                            <div class="col-xl-8 ms-8">
                                <strong class=" fs-5 text-dark">{{ profil?.Prenoms }} {{ profil?.Nom }}</strong> <br>
                                <span class="text-muted">{{ profil?.pays }} </span> <br>
                                <span class="text-muted">{{ profil?.email }}</span> <br>
                                <span class="text-muted">{{ profil?.Whatsapp }}</span>
                            </div>
                      
                    </div>
                    <div class="col-12">
                        <div class="account-info-stats">
                            <div class="account-info-stats-item">
                                <div class="account-info-stats-num"><span
                                        class="comet-icon comet-icon-wishlist account-info-stats-icon"><svg
                                            viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor"
                                            aria-hidden="false" focusable="false">
                                            <path
                                                d="M466.666667 892.586667a71.914667 71.914667 0 0 0 85.802666 2.56l4.565334-3.306667 21.162666-14.762667 24.661334-17.578666 15.018666-10.965334a1625.813333 1625.813333 0 0 0 128.917334-105.322666c68.693333-62.634667 122.88-124.949333 157.632-186.026667l1.984-3.157333 3.050666-5.482667 6.058667-12.010667 0.554667-0.746666 1.216-2.410667c4.949333-9.877333 9.152-19.306667 12.693333-28.586667l2.56-6.912c10.794667-29.013333 16.298667-55.978667 16.298667-81.749333l-0.085334-3.904-0.277333 2.901333c0.554667-5.12 0.853333-9.493333 0.853333-14.656C949.333333 244.8 829.418667 117.333333 681.088 117.333333l-5.162667 0.106667c-46.784 1.984-100.650667 30.826667-163.946666 84.864l-7.04-5.973333C442.282667 144.192 389.034667 117.333333 342.912 117.333333 194.517333 117.333333 74.666667 244.736 74.666667 400.469333l0.064 3.776 0.170666 3.669334 0.469334 5.546666-0.042667 2.602667c0 26.218667 5.504 54.122667 16.149333 83.178667l3.989334 10.474666 1.130666 2.645334c1.813333 4.565333 4.373333 10.368 7.125334 16.213333 32.64 69.013333 92.672 140.736 172.522666 213.76a1642.730667 1642.730667 0 0 0 109.482667 91.306667l23.232 17.536 23.210667 16.938666 27.690666 19.776 6.826667 4.693334zM681.088 181.333333c112.085333 0 204.245333 97.962667 204.245333 219.136 0 1.685333-0.064 3.242667-0.213333 5.013334l-0.618667 6.058666 0.341334 3.946667v0.64c0 17.578667-3.989333 37.162667-12.48 59.946667l-2.624 7.04c-1.813333 4.693333-3.84 9.386667-6.08 14.208l-3.050667 6.229333-1.045333 1.813333-3.114667 6.293334-3.498667 6.826666-1.642666 2.965334-1.664 2.688c-31.722667 55.68-81.834667 113.28-145.962667 171.776a1524.736 1524.736 0 0 1-105.514667 87.424l-24.064 17.941333-37.952 27.136-19.754666 13.845333a7.872 7.872 0 0 1-8.490667 1.088l-2.026667-1.28-34.56-24.64-28.309333-20.693333a1620.565333 1620.565333 0 0 1-123.562667-101.610667c-74.261333-67.925333-129.450667-133.888-157.866666-193.92l-3.242667-7.125333-3.541333-8.405333c-9.557333-24.042667-14.506667-45.226667-15.338667-64.042667l-0.085333-6.4 0.170666-3.349333-0.682666-6.784-0.170667-3.178667-0.021333-1.450667C138.666667 279.232 230.784 181.333333 342.912 181.333333c23.744 0 57.002667 15.104 98.368 46.208l11.477333 8.874667c7.808 6.186667 15.850667 12.906667 24.149334 20.16a53.333333 53.333333 0 0 0 70.186666 0l6.613334-5.738667C608.64 203.946667 652.010667 181.333333 681.088 181.333333z">
                                            </path>
                                        </svg></span></div>
                                <div class="account-info-stats-text">Mes favoris</div>
                            </div>
                           
                            <div class="account-info-stats-item">
                                <div class="account-info-stats-num"><span
                                        class="comet-icon comet-icon-viewed account-info-stats-icon"><svg
                                            viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor"
                                            aria-hidden="false" focusable="false">
                                            <path
                                                d="M512 106.666667v64C323.477333 170.666667 170.666667 323.477333 170.666667 512s152.810667 341.333333 341.333333 341.333333c186.261333 0 337.706667-149.205333 341.269333-334.613333L853.333333 512h64c0 223.850667-181.482667 405.333333-405.333333 405.333333S106.666667 735.850667 106.666667 512C106.666667 290.56 284.266667 110.570667 504.789333 106.730667L512 106.666667z m32.490667 192.661333v181.333333h181.333333v64h-213.333333a32 32 0 0 1-31.850667-28.906666l-0.149333-3.093334v-213.333333h64z m282.666666 81.322667l59.050667-24.64c6.485333 15.509333 11.968 31.424 16.469333 47.658666l3.2 12.224-62.208 15.146667a338.346667 338.346667 0 0 0-12.586666-40.533333l-3.925334-9.856 59.050667-24.64-59.050667 24.64z m-55.253333-89.92l48.704-41.514667c10.922667 12.8 21.013333 26.261333 30.272 40.32l6.762667 10.645333-54.549334 33.493334c-7.402667-12.096-15.573333-23.68-24.426666-34.752l-6.762667-8.192 48.704-41.514667-48.704 41.514667z m-80.533333-69.184l33.685333-54.421334c14.293333 8.853333 28.032 18.581333 41.130667 29.141334l9.685333 8.064-41.685333 48.554666a342.805333 342.805333 0 0 0-33.877334-25.6l-8.938666-5.76 33.685333-54.4-33.685333 54.4zM593.6 180.48l15.253333-62.165333c16.384 4.032 32.469333 9.066667 48.149334 15.061333l11.712 4.693333-24.768 59.029334a338.56 338.56 0 0 0-40.064-13.930667l-10.282667-2.688 15.253333-62.165333-15.253333 62.165333z">
                                            </path>
                                        </svg></span></div>
                                <div class="account-info-stats-text">Vus récemment</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="account-order">
           
            <div class="account-order-dispute"><span class="comet-icon comet-icon-earnbyshare dispute-icon"><svg
                        viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false"
                        focusable="false">
                        <path
                            d="M555.413333 87.488l7.573334 0.832c196.394667 23.061333 353.984 182.912 373.546666 380.266667 26.666667 269.696-198.250667 494.634667-467.946666 467.925333-199.893333-19.797333-361.301333-181.205333-381.098667-381.098667C60.8 285.738667 285.738667 60.8 555.413333 87.488zM151.168 549.12c16.810667 169.514667 154.197333 306.922667 323.733333 323.712 229.504 22.72 420.650667-168.426667 397.930667-397.930667-16.554667-167.082667-150.229333-302.933333-316.373333-322.922666l-7.338667-0.789334-6.869333-0.64C315.818667 132.309333 128.682667 321.92 151.168 549.12z m392.853333-307.669333v76.970666a200.384 200.384 0 0 1 119.744 63.488l-47.466666 42.944c-23.338667-25.792-56.469333-41.92-93.034667-44.330666-40.042667-2.666667-75.733333 7.402667-96.725333 28.074666-5.418667 5.333333-9.770667 14.805333-10.410667 23.552-0.618667 8.618667 1.365333 14.72 5.653333 19.52 7.125333 8.042667 17.514667 13.781333 31.381334 17.578667 6.741333 1.834667 11.861333 2.922667 19.370666 3.84l8.469334 0.896 23.274666 1.941333 18.154667 0.426667 2.688 0.149333 21.546667 1.770667 8.896 0.917333c11.477333 1.365333 22.016 3.264 32.277333 6.08 24.938667 6.848 46.037333 18.496 62.293333 36.778667 16 17.962667 23.466667 41.194667 21.589334 66.581333-1.706667 24.256-12.778667 48.341333-29.312 64.618667-25.429333 25.024-59.989333 39.872-98.389334 44.906667v76.629333h-64v-76.992a200.405333 200.405333 0 0 1-119.722666-63.488l47.466666-42.922667c23.317333 25.770667 56.448 41.898667 93.013334 44.309334 40.042667 2.666667 75.733333-7.381333 96.746666-28.074667 5.397333-5.312 9.728-14.762667 10.368-23.594667 0.64-8.554667-1.344-14.677333-5.589333-19.456-7.146667-8.042667-17.536-13.76-31.402667-17.578666a127.445333 127.445333 0 0 0-22.485333-4.202667l-9.045333-0.874667-19.626667-1.621333-18.176-0.405333-2.666667-0.170667-12.053333-0.981333-13.994667-1.216-4.373333-0.469334a216.661333 216.661333 0 0 1-32.234667-6.08c-24.96-6.826667-46.08-18.496-62.293333-36.736-16-17.941333-23.466667-41.152-21.653333-66.645333 1.706667-24.234667 12.8-48.32 29.333333-64.576 25.386667-25.045333 59.989333-39.893333 98.410667-44.949333v-76.608h64z">
                        </path>
                    </svg></span>
                <div class="account-order-dispute-text">Remboursements et retours</div><span
                    class="comet-icon comet-icon-arrowright dispute-arrow"><svg viewBox="0 0 1024 1024" width="1em"
                        height="1em" fill="currentColor" aria-hidden="false" focusable="false">
                        <path
                            d="M280.96 938.197333a32 32 0 0 0 42.517333 5.397334l2.602667-2.005334 393.856-338.901333a107.52 107.52 0 0 0 5.333333-158.101333l-3.221333-3.050667L326.698667 82.965333a32 32 0 0 0-45.312 45.077334l2.304 2.346666L679.04 488.917333a43.52 43.52 0 0 1 1.770667 62.784l-2.624 2.432-393.856 338.922667a32 32 0 0 0-3.392 45.12z">
                        </path>
                    </svg></span>
            </div>
        </div>
    </div>
</template>
<script>
import SkeletonClient from '@/components/others/loader/SkeletonClient.vue';
import axios from '@/lib/axiosConfig';

export default {
   components:{
    SkeletonClient
   },
   data() {
      return {
        profil:"",
        loading:true,
         
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
          this.profil = response.data.data;
            console.log(this.profil)
          this.loading = false;
        }
      } catch (error) {
        console.log(error)
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
.account-info-stats {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 16px 0;
}

.account-info-stats-item {
    position: relative;
    width: 100%;
    text-align: center;
    cursor: pointer;
}

.account-info-stats-num {
    font-size: 32px;
}

.comet-icon {
    display: inline-block;
    color: inherit;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    vertical-align: -0.125em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.comet-icon svg {
    display: inline-block;
}

.account-info-stats-text {
    margin-top: 4px;
    color: #222;
    font-size: 16px;
}

.account-order {
    margin-top: 20px;
    padding: 16px 16px 0;
    background-color: #fff;
    border: 1px solid #eee;
    -webkit-box-shadow: 0 0 2px 0 #eee;
    box-shadow: 0 0 2px 0 #eee;
}


.account-order-header {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border-bottom: 1px solid #eee;
}
.account-order-content, .account-order-header {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}

.account-order-title {
    display: inline-block;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding: 12px 0;
    font-weight: 700;
    font-size: 16px;
    font-size: 20px;
    line-height: 1;
    line-height: 1.5;
}

.account-order-extra {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    color: #999;
    font-size: 14px;
    cursor: pointer;
}

.account-order-extra .arrow-icon {
    margin-left: 8px;
    font-size: 18px;
}

.comet-icon {
    display: inline-block;
    color: inherit;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    vertical-align: -0.125em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.account-order-content, .account-order-header {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
.account-order-status {
    position: relative;
    width: 100%;
    text-align: center;
    cursor: pointer;
}

.account-order-status .status-image {
    width: 53px;
    height: 53px;
}

.account-order-status-text {
    color: #222;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0;
}

.account-order-slider {
    background-color: #f7f7f7;
}
.slick-slider {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
}
.slick-list, .slick-slider, .slick-track {
    position: relative;
    display: block;
}
.slick-slider .slick-list, .slick-slider .slick-track {
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
}
.slick-list {
    overflow: hidden;
    margin: 0;
    padding: 0;
}
.slick-list, .slick-slider, .slick-track {
    position: relative;
    display: block;
}

.slick-slider .slick-list, .slick-slider .slick-track {
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
}
.slick-track {
    top: 0;
    left: 0;
}

.account-order-dispute {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 16px 0;
    border-top: 1px solid #eee;
    cursor: pointer;
}

.dispute-icon {
    font-size: 24px;
}


.comet-icon {
    display: inline-block;
    color: inherit;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    vertical-align: -0.125em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.account-order-dispute-text {
    margin-left: 6px;
    color: #222;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0;
}

.account-order-dispute .dispute-arrow {
    position: absolute;
    right: 0;
    color: #999;
    font-size: 18px;
}

.comet-icon {
    display: inline-block;
    color: inherit;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    vertical-align: -0.125em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>