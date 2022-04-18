<template>
    <div class="container">
    
        <div class="parent-container">
        <div class="content-con">
            <div class="balance-con">
                <div class="total-balance get-balance">
                    <h3>Wallet Balance</h3>
                        <span>&#8358;{{ this.user.balance}}</span><br>
                        <span style="font-size:12px;color:green">+ &#8358;{{ this.user.comission}} comission</span>
                </div>
                <div class="total-balance">
                    <button @click="showBalance">
                        Deposit
                    </button>
                </div>

            </div>
            <div class="item-con">
                <div class="main-item-con">
                    <router-link to="/convert-comission">
                    <div class="each-item">
                            <button> <i class="fa fa-percent" aria-hidden="true"></i></button>
                            <strong>Convert</strong>
                    </div>
                    </router-link>
                     <router-link to="/transfer">
                    <div class="each-item ">
                             <button class="transfer"><i class="fas fa-exchange-alt"></i></button>
                            <strong>Transfer</strong>
                    </div>
                    </router-link>
                    <router-link to="/referral">
                    <div class="each-item">
                         <button><i class="fa fa-users" aria-hidden="true"></i></button>
                            <strong>Referral</strong>
                    </div>
                    </router-link>
                </div>

            </div>
            
        </div>
       
        </div>
        <div class="banner-logo-ad">
            <div class="banner-ad">
            <img src="../assets/images/ad3.png" alt="" srcset="">
            </div>
        </div>
        <Deposit :showme="showtisbalane"/>
    </div>
</template>
<script>
import { mapGetters } from "vuex"
import Deposit from "./deposit.vue"
export default {
    name: "balance-app",
    methods: {
        showBalance() {
            this.showtisbalane = !this.showtisbalane;
        }
    },
    data() {
        return {
            balance: "",
            showtisbalane:false
        };
    },
    computed: {
        ...mapGetters(["user"])
    },
    components: { Deposit }
}
</script>
<style>
body{
background: #ccc;
}
    .container{
        max-width: 1519.20px;
        width:100%;
      
        margin:0px auto;

    }
    .parent-container{
        padding: 10px;
        margin: 10px;
        justify-content: center;
        display: flex;

        
    }
    .content-con{
        width:85%;
        background: #fff;
        border-radius: 10px;
        box-shadow: 0 0 3px rgb(31 30 47 / 5%);
        padding: 10px;
    }
    .balance-con{
        width: 100%;
        justify-content: space-between;
        display: flex;
        border-bottom: 1px solid #ccc;
        padding: 10px;
        box-sizing: border-box;
    }
    .item-con{
         width: 100%;
        justify-content: center;
        display: flex;
      
        padding: 10px;
        box-sizing: border-box;
    }
    .total-balance h3{
        margin: 0px;
        padding: 2px;
        font-size: 13px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .total-balance button {
        background: rgb(98, 54, 255);
        outline: none;
        color:#ccc;
        border: 1px solid rgb(98, 54, 255);
        padding: 10px;
        border-radius: 10px;
    }
    @media screen  and (max-width:499px){
        .content-con{
            width:100%
        }
    }
    .get-balan span{
        font-weight: bold;
        font-size: 14px;
        display: inline-block;
    }
    .main-item-con{
        justify-content: space-around;
       
        padding: 10px;
        display: flex;
        width:60%;
    }
    .each-item{
        display: grid;
    }
    .each-item button{
        width: 40px;
        height: 40px;
        border-radius: 5px;
        outline: none;
        background: rgb(98, 54, 255);
        border: 1px solid rgb(98, 54, 255);
       
    }
    .each-item strong{
        font-size: 10px;
        text-align: center;
       
    }
    @media screen and (max-width:499px){
        .main-item-con{
            width: 100%;
           
        }
    }
    .transfer{
        background: rgb(36, 238, 36) !important;
        border: 1px solid rgb(36, 238, 36) !important;
    }
    .banner-logo-ad{
    
    
    justify-content: center;
    display: flex;
    }
    .banner-ad{
          width:85%;
      
        border-radius: 10px;
        box-shadow: 0 0 3px rgb(31 30 47 / 5%);
        padding: 10px;
       display: flex;
       justify-content: center;
       box-sizing: border-box;
      

    }
    .banner-ad img {
    width:80%;
    margin:0px auto;
    height: 100%;
    }
    @media screen and (max-width:499px){
        .banner-ad img {
            width:100%;
        }
    }
</style>