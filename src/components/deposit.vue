<template>
    <div class="deposit-con" v-show="showme">
        <div class="head-deposits-con">
            <div class="each-left-icon">
                <span  @click="hidemme"><i class="fa fa-times"></i></span>
            </div>
           <div class="main-depo-container">
                <div class="accout-con main-account-virtual">
                    <h3>Your Virtual Account</h3>
                    <div class="main-acccount-number">
                        <strong>123456789</strong>
                    </div>
                     <div class="main-acccount-number">
                        <strong>Wema Bank</strong>
                    </div>
                </div>
                <form action="">
               <div class="form-container">
                    <div class="form-group">
                        <input type="text" placeholder="Amount" class="main-form-input">
                    </div>
                     <div class="form-group">
                        <input type="password" placeholder="Account PIN" class="main-form-input" autocomplete="off">
                    </div>
                     <div class="form-group">
                       <button>Deposit</button>
                    </div>
               </div>
               </form>
           </div>
           
        </div>
    </div>
</template>
<script>
export default {
    name:"Header-app",
    props:['showme'],
    methods:{
        hideme(){
            alert()
            this.showme=false
        }
    }
}
</script>
<style>
    .deposit-con{
        position: fixed;
        width: 100%;
        box-sizing: border-box;
        bottom: 0px;
        background: #fff;
        padding: 10px;
        box-shadow: 0 0 3px rgb(31 30 47 / 5%);
    }
    .head-deposits-con{
        padding: 10px;
      
    

    }
   
   
    .main-depo-container{
        padding: 10px;
       
        margin-top: 5px;
        
        


    }
    .main-account-virtual{
       
        background: #044040;
        border-radius: 10px;
        border: 1px solid #044040;
        color:#fff;
        padding:10px 
    }
    .main-account-virtual h3{
        color:#ccc;
        font-size: 15px;
        text-align: center;
    }
    .main-acccount-number{
        text-align: center;
        color:#ccc;
        padding: 10px;
    }
    .main-acccount-number strong{
        color:#ccc;
        font-size: 15px;
        margin: 10px;
    }
    .form-container{
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    }
    .form-group{
        padding: 10px;
       
        line-height: 30px;

      
    }
    .form-group input{
        padding: 10px;
        border:none;
        border-bottom: 1px solid #ccc !important;
        font-size: 20px;
        width:100%;
        outline: none;
        box-sizing: border-box;
    }
    .form-group button {
        width:100%;
        background: rgb(48, 194, 48);
        border: rgb(48, 194, 48);
        color:#ccc;
        padding: 10px;
        box-sizing: border-box;
        outline: none;
    }
    
</style>
