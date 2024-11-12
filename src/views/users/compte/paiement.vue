<template >
    <div>
        <div class="col-12">
            <div class="header-pc--wallet-header--2nfM6tA"><span class="header-pc--pageHeadText--2VJmE8U">Paiement</span>
                <div>
                    <div class="header-pc--pageSetting--2fHMIFc btn btn-primary btn-sm" data-bs-toggle="modal"
                        data-bs-target="#paiementModal">
                        Ajouter une carte</div>
                </div>
            </div>
    
            <div class="card-root--card-root--BfQRUAH">
                <div class="card-title--card-title--2qlGxsf">Cartes</div>
                <div class="card-management--card-management--jPRBIHo"
                    data-spm-anchor-id="a2g0o.wallet_pc.0.i9.3b4a7ec8uvMKnc">
                    <div class="card-item--card-item--3GKNCC4 " data-spm-anchor-id="a2g0o.wallet_pc.0.i7.3b4a7ec8uvMKnc">
                        <div class="card-item--card-item-info--3SPozLQ"
                            data-spm-anchor-id="a2g0o.wallet_pc.0.i10.3b4a7ec8uvMKnc"><span
                                class="card-item--card-item-card-no--85ngcaT"
                                data-spm-anchor-id="a2g0o.wallet_pc.0.i6.3b4a7ec8uvMKnc">**** 1265</span><img
                                src="//ae01.alicdn.com/kf/H8dc4a8bc78bc4d67b28bd6b394eecbd0e.png"
                                class="card-brand--card-brand-icon--3BAELFp"></div>
                        <div class="card-item--card-item-desc--35nyV9V card-item-desc"></div>
                        <div class="card-item--card-item-action--3BmgQew"><span
                                class="card-item--card-item-date--3mHL7OL card-item--expired--3gqrBrF"></span><span
                                class="card-item--card-item-btn--2wA009x"><span
                                    data-spm-anchor-id="a2g0o.wallet_pc.0.i8.3b4a7ec8uvMKnc">. . .</span></span></div>
                    </div>
    
    
                </div>
            </div>
        </div>
    
    
    
        <div class="modal fade" id="paiementModal" tabindex="-1" aria-labelledby="paiementModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" style="max-width: 600px !important; width: 100%;">
                <div class="modal-content p-4">
                    <div class="modal-header border-0">
                        <h5 class="modal-title fs-4 fw-bold" id="paiementModalLabel">Ajouter une carte</h5>
    
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-0">
                        <div class="pay-method-item--pay-item-row--2yGBwby">
                            <div class="pay-method-item--pay-item-title--32ZzLu7">Ajouter une carte</div>
                            

                               
                            

                                <img
                                class="pay-method-item--pay-item-icon--1TPE0FX"
                                src="https://ae01.alicdn.com/kf/Sea8b6d9e957a4b4783785f087af30ba2r/216x144.png">
                                <img
                                class="pay-method-item--pay-item-icon--1TPE0FX"
                                src="https://ae01.alicdn.com/kf/S2ee1f368a78345c293982065980ceddeG/216x144.png">
                                
                               
                                
                        </div>
                        <div class="row mt-3 content-group">
                           
                           <div class="col-6">
                               <div class="input-groupe me-2">
                                   <label for="userpassword">
                                      </label>
                                   <MazInput v-model="nombre_unite_achat" color="secondary" name="step2.nombre_unite_achat"
                                       size="sm" rounded-size="sm" type="text" placeholder=" Numéro de la carte"  />
                                  
                               </div>
                           </div>
   
                           <div class="col-6">
                               <div class="input-groupe">
                                   <label for="userpassword">
                                    </label>
                                   <MazInput v-model="quantite_entree" color="secondary" name="step2.quantite_entree" size="sm"
                                       rounded-size="sm" type="text" placeholder="Nom sur la carte" />
                                
                               </div>
                           </div>
                          
                        </div> 
                        <div class="row mt-3 content-group">
                           
                           <div class="col-3">
                               <div class="input-groupe me-2">
                                   <label for="userpassword">
                                      </label>
                                   <MazInput v-model="nombre_unite_achat" color="secondary" name="step2.nombre_unite_achat"
                                       size="sm" rounded-size="sm" type="text" placeholder="MM"  />
                                  
                               </div>
                           </div> 
                           <div class="col-3">
                               <div class="input-groupe  me-2">
                                   <label for="userpassword">
                                     </label>
                                   <MazInput v-model="nombre_unite_achat" color="secondary" name="step2.nombre_unite_achat"
                                       size="sm" rounded-size="sm" type="text" placeholder="YY"  />
                                  
                               </div>
                           </div>
   
                           <div class="col-6">
                               <div class="input-groupe">
                                   <label for="userpassword">
                                    </label>
                                   <MazInput v-model="quantite_entree" color="secondary" name="step2.quantite_entree" size="sm"
                                       rounded-size="sm" type="text" placeholder="CVV" />
                                
                               </div>
                           </div>
                          
                        </div> 
                        <div class="nfm-common-button d-flex w-100 align-items-center justify-content-center">
                            <button @click="login" class="cosmos-btn cosmos-btn-primary cosmos-btn-large cosmos-btn-block" style="color: rgb(255, 255, 255); border: 0px solid rgb(0, 0, 0); background: var(--fc-primary); margin: 12px 0px 8px; border-radius: 0px !important; width: 40%;">
                                <span>Valider</span>
                            </button>
                            </div>
                    </div>
    
                </div>
            </div>
        </div>
    
    </div>
</template>
<script>
export default {

}
</script>
<style lang="css" scoped>
.header-pc--wallet-header--2nfM6tA {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 100%;
    padding: 16px;
    background: #fff;
}

.header-pc--pageHeadText--2VJmE8U {
    color: #222;
    font-weight: 700;
    font-size: 16px;
}

.card-root--card-root--BfQRUAH {
    position: relative;
    margin-top: 20px;
}

.card-title--card-title--2qlGxsf {
    margin-bottom: 16px;
    color: #222;
    font-weight: 700;
    font-size: 16px;
}

.card-management--card-management--jPRBIHo {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}

.card-item--card-item--3GKNCC4 {
    display: inline-block;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 454px;
    height: 140px;
    margin-bottom: 20px;
    padding: 16px;
    background-color: #fff;
}

.card-item--card-item-info--3SPozLQ {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 100%;
}

.card-item--card-item-card-no--85ngcaT {
    font-weight: 700;
    font-size: 20px;
}

.card-brand--card-brand-icon--3BAELFp {
    display: inline-block;
    height: 32px;
}

.pay-method-item--pay-item-row--2yGBwby {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    height: 44px;
    width: 100%;
    border-radius: 8px;
    padding: 0 8px;
    margin-bottom: 24px;
    background-color: #fbc0c0;
}

.pay-method-item--pay-item-row--2yGBwby .pay-method-item--pay-item-title--32ZzLu7 {
    margin-right: 8px;
    font-weight: 700;
    line-height: 20px;
    white-space: nowrap;
}

.pay-method-item--pay-item-row--2yGBwby .pay-method-item--pay-item-icon--1TPE0FX {
    -webkit-box-flex: 0;
    -webkit-flex: 0;
    -ms-flex: 0;
    flex: 0;
    height: 18px;
    margin-right: 10px;
}

.nfm-common-button .cosmos-btn-primary {
    padding: 12px 24px;
    font-size: 18px;
    line-height: 24px;
    font-weight: 600;
}

.nfm-common-button .cosmos-btn {
    border-radius: 24px;
    height: auto;
}

.cosmos-btn-primary.cosmos-btn-large {
    padding-top: 10px;
    padding-bottom: 10px;
}

.cosmos-btn-primary[disabled] {
    background: linear-gradient(90deg, rgba(255, 100, 14, .5), rgba(255, 48, 0, .5));
    color: hsla(0, 0%, 100%, .5);
}
</style>