<script>
import { mapGetters} from 'vuex';
import axios from 'axios';
import Balance from '../components/balance.vue'
import Header from '../components/header.vue'
import Bottom from '../components/bottom.vue'
import Deposit from '../components/deposit.vue'
export default {
    name:"dashboard-app",
     
    components:{
        Balance,
        Header,
        Bottom,
        Deposit
    },

    data(){
        return{
            message:'',
            income:0,
            expenses:0
        }
    },
    computed:{
        ...mapGetters(['user']),
    },
     async beforeCreate(){
        const response = await axios.post('http://localhost/api/user.php', {
                headers: {
                    Authorization:'Bearer' + localStorage.getItem('token') 
                }
            });
        this.$store.dispatch('user',response['data']['data']);
      
    },
     async created(){
           const responses = await axios.get('http://localhost/api/info.php')
            this.message=responses['data']['message'];
    },
  
};
</script>
<template>
<div v-if="user">
<title>Dashboard</title>
<Header/>
<Balance />
<div class="home-container">
 <div class="deposit-con-income-sector" v-if="message!='' ">
        <div class="parent-income info">
          {{message}}
        </div>
        
    </div>
    <div class="deposit-con-income-sector">
        <div class="parent-income">
            <div class="data-income" data-category="income">
                <h2>Feb Income</h2>
                <strong>&#8358;{{this.user.income}}</strong>
            </div>
            <div class="data-income" data-category="expenses">
               <h2>Feb Expenses</h2>
               <strong>&#8358;{{this.user.expenses}}</strong>
            </div>
        </div>
        
    </div>
    <div class="service-log-ver">
        <div class="main-log-service">
            <div class="each-service-log">
                <div class="each-logo-item">
                    <router-link to="/data">
                        <div class="each-service">
                         <i class="fa fa-wifi"></i>
                        <div class="listservice"> Data </div>
                        </div>
                    </router-link>
                </div>
                <div class="each-logo-item">
                     <router-link to="/airtime">
                        <div class="each-service">
                        <i class="fa fa-mobile"></i>
                         <div class="listservice"> Airtime</div>
                        </div>
                    </router-link>
                </div>
                <div class="each-logo-item">
                     <router-link to="/tv">
                        <div class="each-service">
                        <i class="fas fa-tv" aria-hidden="true"></i>
                        <div class="listservice"> Tv </div>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="each-service-log">
            <div class="each-logo-item">
                    <router-link to="/cable">
                        <div class="each-service">
                        <i class="fas fa-lightbulb" />
                        <div class="listservice"> Cable </div>
                        </div>
                    </router-link>
                </div>
                <div class="each-logo-item">
                     <router-link to="/card">
                        <div class="each-service">
                        <i class="fa fa-credit-card"></i>
                         <div class="listservice">Virtual card</div>
                        </div>
                    </router-link>
                </div>
                <div class="each-logo-item">
                     <router-link to="/referral">
                        <div class="each-service">
                         <i class="fa fa-users"></i>
                        <div class="listservice">Referral</div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</div>
<Bottom />
</div>
<div v-if="!user"></div>
</template>

<style>
    .home-container {
        max-width: 1300px;
        margin: 0px auto;
    }
    .deposit-con-income-sector{
        padding: 10px;
        display: flex;
       justify-content: center;
        
       

    
    }
    .parent-income{
        justify-content: space-between;
        display: flex;
      
        box-sizing: border-box;
        width:85%

    }
    .data-income{
        background: #fff;
        border-radius: 10px;
        box-shadow: 0 0 3px rgb(31 30 47 / 5%);
        padding: 10px;
    }
    .data-income h2{
        padding: 5px;
        margin: 0px;
        font-size:14px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .data-income[data-category='income'] h2{
        color:green;

    }
    .data-income[data-category='expenses'] h2{
        color:rgb(243, 81, 81);

    }
    .data-income strong {
        padding: 5px;
    }
    .service-log-ver{
        margin: 10px;
        padding: 10px;
      
       
       justify-content: center;
       display: flex;

    }
    .main-log-service{
    width: 90%;
    background: #fff;
    border-radius: 10px;
    padding: 10px;
    display: grid;
   
    }
    .each-service-log{
       
        padding: 10px;
        box-sizing: border-box;
        justify-content: space-around;
        display: flex;
    }
    .each-logo-item{
        width: calc(100%/2.5);
        margin: 10px;
        padding: 10px;
        border: 1px solid #ccc;
        display: flex;
        justify-content: center;

    }
    .each-service{
    padding: 10px;
    max-width: 55px;
    min-width: 55px;
    box-sizing: border-box;
    width: 100%;
    text-align: center;
  
    }
    .each-service img{
        width: 100%;
    }
    .each-service .listservice{
       
        font-size: 12px;
        box-sizing: border-box;
        width: 100%;
        text-align: center;
    }
    @media screen and (max-width:499px){
        .each-service{
    padding: 10px;
    max-width: 50px;
    min-width: 50px;
    box-sizing: border-box;
    width: 100%;
    text-align: center;
   
    }
    }
    @media screen  and (max-width:330px){
    .each-service-log{
    justify-content: center;
    display: flex;
    }
        .each-logo-item {
        width:100%;
        display: flex;
        
        }
        .each-service{
            max-width: 40px;
            min-width: 40px;
        }
        .listservice{
            text-align: center;
            font-size: 10px;
        }
    }
    .info{
    background: #151515;
    color:#fff;
    padding: 10px;
    border-radius: 10px;
    font-size: 14px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    @media screen and (max-width:499px){
        .info{
            font-size: 12px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
    }
</style>