<template >
    <div class="sign-header" >
        
                   
			<div class="sign-logo">
				<img src="@/assets/img/logo_wakanda.png" alt="">
			</div>
			<div class="col-12 col-md-6 col-lg-4 order-lg-2 order-1 p-2 border border-1 border-dark">
                     <div class="mb-lg-9 mb-5 text-center">
                        <h1 class="mb-1 h2 fw-bold">Sign in to FreshCart</h1>
                        <p class="text-center">Welcome back to FreshCart! Enter your email to get started.</p>
                     </div>

                     <form class="needs-validation" >
                        <div class="row g-3">
                           <!-- row -->

                           <div class="col-12">
                              <!-- input -->
                              <label for="formSigninEmail" class="form-label visually-hidden">Email address</label>
                              <input type="email" class="form-control" id="formSigninEmail" placeholder="Email" required />
                              <div class="invalid-feedback">Please enter name.</div>
                           </div>
                          
                         
                           <!-- btn -->
                           <div class="col-12 d-grid mt-7">
							<button @click.prevent="SubmitLogin" class="btn btn-primary">Sign In</button>
						</div>
                           <!-- link -->
                           <div class="mt-10">
                             <p>Pour obtenir de l'aide, vous pouvez visiter le centre d'aide ou contacter notre service client.</p>
                           </div>
                        </div>
                     </form>
                  </div>
                  
                
    </div>
</template>
<script>
export default {

   data() {
      return {
         
      }
   },
   methods: {
      SubmitLogin(){
         this.$router.push('/commandes')
      }
   },
    
}
</script>
<style lang="css" scoped>

.sign-header{
    height: 100vh !important; 
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
	flex-direction: column;
}
    .content-sign{

        border: 1px solid red;
        max-width: 300px;
        width: 100%;
        height: 400px ;
    }
.sign-logo{

	width: auto;
	height: 75px;
	margin: 30px 0;
}

.sign-logo img{

width: auto;
height: 100%;
}
</style>