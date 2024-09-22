<template >
    <div>
        <header>
	<div class="">
	
        <div class="row mb-2  d-flex align-items-center bg-white rounded">
         <div class="col-xl-3 col-md-3 col-sm-12 ">
                        <div class="d-lg-flex align-items-center">
                           <a href="/">
                           <img src="@/assets/img/logo_wakanda.png" alt="" class="img-fluid" style="height: 50px !important;">
                           </a>
                        </div>
                     </div>
                  <div class="col-xl-9 col-md-9 col-sm-12">
                     

                     <div class="row d-none d-md-flex d-lg-flex">
                        <div class="col-xl-7 col-md-7 col-sm-12  text-sm-center">
                           <p class="fs-6 mb-1 text-dark fw-bold">Centre d'assistance <span class=""  style="color:var(--fc-secondary)">Services clientèle Wakanda</span> </p>

                        </div>
                        <div class="col-xl-5 col-sm-12 col-md-5 text-sm-center">
                           <p class="fs-6 mb-1 text-dark fw-bold">Contact :<span class=""  style="color:var(--fc-secondary)">+228 99 12 33 44 55</span> </p>

                        </div>
                     </div>
                  
                     <!-- <div class="bg-white d-lg-flex justify-content-between align-items-center  px-8 text-center text-lg-start rounded">
                     
                        <div class="d-lg-flex align-items-center">
                          
                          
                           <div class="ms-lg-4">

                           <p class="fs-6 mb-1 text-dark fw-bold">Centre d'assistance <span class=""  style="color:var(--fc-secondary)">Services clientèle Wakanda</span> </p>

                           </div>
                           <div class="ms-lg-4">

                              <p class="fs-6 mb-1 text-dark fw-bold">Contact :<span class=""  style="color:var(--fc-secondary)">+228 99 12 33 44 55</span> </p>

                              </div>
                           
                        </div>
                       
                     </div> -->
                  </div>
               </div>


               
       
		<div class="row align-items-center justify-content-center p-2 mt-4 mt-lg-0 bg-white">
			
            <div class="col-xxl-3 col-xl-3 col-lg-3 d-none d-lg-block fw-bold " >
              
                   
				<h6 class="fs-3">
             <i class="bi bi-list"> </i> Catégories  
            </h6>
			
	
            </div>
			<div class="col-xxl-5 col-xl-5 col-lg-5 col-md-9">
            <div class="row align-items-center">
               <div class="col-11">
                  <form action="#" class="me-2">
					<div class="input-group">
						<input class="form-control" type="search" placeholder="Search for products" aria-label="Recipient's username" aria-describedby="button-addon2" />
						<button class="btn btn-primary" type="button" id="button-addon2">Search</button>
					</div>
				</form>
               </div>
               <div class="col-1">
                  <a href="#">  <i class="bi bi-mic fs-3" ></i></a>
          

               </div>
            </div>
				
			</div>
			<div class="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block">
				<div class="d-flex align-items-center justify-content-end">
               
					<div class="text-center me-8">
						<div class="dropdown">
							<router-link to="/connexion" class="text-reset" >
								<div class="lh-1">
									<div class="position-relative d-inline-block mb-2">
										<i class="bi bi-person-circle fs-4"></i>
									
									</div>
									<p class="mb-0 d-none d-xl-block small"></p>
								</div>
							</router-link>

						</div>
					</div>

              
                <div class="text-center me-8">
						<div class="dropdown">
							<router-link to="/panier" class="text-reset" >
								<div class="lh-1">
									<div class="position-relative d-inline-block mb-2">
										<i class="bi bi-cart2 fs-4"></i>
										<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
											1
										</span>
									</div>
									<p class="mb-0 d-none d-xl-block small"></p>
								</div>
							</router-link>

							
						</div>
					</div>
					

					<div class="dropdown selectBox ">
                        <a class="dropdown-toggle selectValue text-reset show" href="javascript:void(0)" data-bs-toggle="dropdown" aria-expanded="true">
                           <span class="me-2">
                              <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <g clip-path="url(#selectedlang)">
                                    <path d="M0 0.5H16V12.5H0V0.5Z" fill="#012169"></path>
                                    <path d="M1.875 0.5L7.975 5.025L14.05 0.5H16V2.05L10 6.525L16 10.975V12.5H14L8 8.025L2.025 12.5H0V11L5.975 6.55L0 2.1V0.5H1.875Z" fill="white"></path>
                                    <path d="M10.6 7.525L16 11.5V12.5L9.225 7.525H10.6ZM6 8.025L6.15 8.9L1.35 12.5H0L6 8.025ZM16 0.5V0.575L9.775 5.275L9.825 4.175L14.75 0.5H16ZM0 0.5L5.975 4.9H4.475L0 1.55V0.5Z" fill="#C8102E"></path>
                                    <path d="M6.025 0.5V12.5H10.025V0.5H6.025ZM0 4.5V8.5H16V4.5H0Z" fill="white"></path>
                                    <path d="M0 5.325V7.725H16V5.325H0ZM6.825 0.5V12.5H9.225V0.5H6.825Z" fill="#C8102E"></path>
                                 </g>
                                 <defs>
                                    <clipPath id="selectedlang">
                                       <rect width="16" height="12" fill="white" transform="translate(0 0.5)"></rect>
                                    </clipPath>
                                 </defs>
                              </svg>
                           </span>
                           English
                        </a>

                        <ul class="dropdown-menu " style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(-32%, 44%, 0px);" data-popper-placement="bottom-start">
                           <li>
                              <a class="dropdown-item" href="javascript:void(0)">
                                 <span class="me-2">
                                    <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <g clip-path="url(#selectedlang)">
                                          <path d="M0 0.5H16V12.5H0V0.5Z" fill="#012169"></path>
                                          <path d="M1.875 0.5L7.975 5.025L14.05 0.5H16V2.05L10 6.525L16 10.975V12.5H14L8 8.025L2.025 12.5H0V11L5.975 6.55L0 2.1V0.5H1.875Z" fill="white"></path>
                                          <path d="M10.6 7.525L16 11.5V12.5L9.225 7.525H10.6ZM6 8.025L6.15 8.9L1.35 12.5H0L6 8.025ZM16 0.5V0.575L9.775 5.275L9.825 4.175L14.75 0.5H16ZM0 0.5L5.975 4.9H4.475L0 1.55V0.5Z" fill="#C8102E"></path>
                                          <path d="M6.025 0.5V12.5H10.025V0.5H6.025ZM0 4.5V8.5H16V4.5H0Z" fill="white"></path>
                                          <path d="M0 5.325V7.725H16V5.325H0ZM6.825 0.5V12.5H9.225V0.5H6.825Z" fill="#C8102E"></path>
                                       </g>
                                       <defs>
                                          <clipPath id="selectedlang">
                                             <rect width="16" height="12" fill="white" transform="translate(0 0.5)"></rect>
                                          </clipPath>
                                       </defs>
                                    </svg>
                                 </span>
                                 English
                              </a>
                           </li>
                           <li>
                              <a class="dropdown-item" href="javascript:void(0)">
                                 <span class="me-2">
                                    <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <g clip-path="url(#clip0_5543_19751)">
                                          <path d="M0 8.5H16V12.5H0V8.5Z" fill="red"></path>
                                          <path d="M0 0.5H16V4.5H0V0.5Z" fill="blue"></path>
                                          <path d="M0 4.5H16V8.5H0V4.5Z" fill="#FFF"></path>
                                       </g>
                                       <defs>
                                          <clipPath id="clip0_5543_19751">
                                             <rect width="16" height="12" fill="white" transform="translate(0 0.5)"></rect>
                                          </clipPath>
                                       </defs>
                                    </svg>
                                 </span>
                                 French
                              </a>
                           </li>
                        </ul> 
               </div>
				</div>
			</div>
		</div>

       
	</div>
</header>


    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="css" scoped>
    
</style>