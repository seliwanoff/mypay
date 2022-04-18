<script>
import { mapGetters } from "vuex"
import axios from "axios"
export default {
    name:"Header-app",
    data() {
        return {
            showme: false,
            fullname:''
        }
    },
    methods: {
       showthis(){
           this.showme=!this.showme
        },
        async logClick(){
            const data = {
               token : this.user.token
            };
           const response =  await axios.post('http://localhost/api/logout.php',data)
            console.log(response)
           
            this.$store.dispatch('user',null)
             localStorage.removeItem('token');
            this.$router.push('/home')
        },
    },
    computed:{
        ...mapGetters(['user'])
    },
}
</script>
<template>
<div class="nav-con">
    <div class="main-nav">
        <div class="header-con">
            <div class="each-link-con" style="position:relative">
                <div class="img-logo-icon">
                       <i class="fa fa-bars" @click="showthis"></i>
                </div>
                <div class="drop-down-flex" v-show="showme">
                    <div class="profile-head-co">
                        <div class="profile-link profile-logo"></div>
                        <div class="profile-link profile-name"> {{this.user.fullname}} </div>
                        <div class="profile-link profile-logo"></div>
                    </div>
                    <div class="profile-head-con-account-number">
                        <div class="accnt-number">
                        ACCT NO:
                        </div>
                        <div class="accnt-number">
                            123456789
                        </div>
                    </div>
                    <div class="main-menu">
                    <h2>MENU</h2>
                    <router-link to="/transaction">
                    <div class="each-menu-link">
                        <div class="eachside-link">Transaction</div>
                        <div class="eachside-link"></div>
                    </div>
                    </router-link>
                    <router-link to="/pending">
                    <div class="each-menu-link">
                        <div class="eachside-link">Pending Order</div>
                        <div class="eachside-link"></div>
                    </div>
                    </router-link>
                    <router-link to="/pending">
                    <div class="each-menu-link">
                        <div class="eachside-link">Transfer</div>
                        <div class="eachside-link"></div>
                    </div>
                    </router-link>
                    <router-link to="/convert-comission">
                    <div class="each-menu-link">
                        <div class="eachside-link">Convert Commission</div>
                        <div class="eachside-link"></div>
                    </div>
                    </router-link>
                     <h2 style="margin-top:10px">SERVICE</h2>
                <router-link to="/data">
                    <div class="each-menu-link">
                        <div class="eachside-link">Data </div>
                        <div class="eachside-link"></div>
                    </div>
                    </router-link>
                    <router-link to="/Airtime">
                    <div class="each-menu-link">
                        <div class="eachside-link">Airtime Top Up</div>
                        <div class="eachside-link"></div>
                    </div>
                    </router-link>
                    <router-link to="/tv">
                    <div class="each-menu-link">
                        <div class="eachside-link">TV Subscription</div>
                        <div class="eachside-link"></div>
                    </div>
                    </router-link>
                    <router-link to="/electricity">
                    <div class="each-menu-link">
                        <div class="eachside-link">Electricity</div>
                        <div class="eachside-link"></div>
                    </div>
                    </router-link>
                    <router-link to="/airtime swap">
                    <div class="each-menu-link">
                        <div class="eachside-link">Airtime swap</div>
                        <div class="eachside-link"></div>
                    </div>
                    </router-link>
                     <h2 style="margin-top:10px">ACCOUNT</h2>
                <router-link to="/profile">
                    <div class="each-menu-link">
                        <div class="eachside-link">Accont Profile </div>
                        <div class="eachside-link"></div>
                    </div>
                    </router-link>
                    <router-link to="/settings">
                    <div class="each-menu-link">
                        <div class="eachside-link">Account Settings</div>
                        <div class="eachside-link"></div>
                    </div>
                    </router-link>
                    
                   
                    <a href="javascript:void(0)" @click="logClick">
                    <div class="each-menu-link">
                        <div class="eachside-link">Log Out</div>
                        <div class="eachside-link"></div>
                    </div>
                    </a>
                    </div>
                </div>
            </div>
            <div class="each-link-con logo-home">
            <router-link to='/'>
                <span class="first-id">my</span>
                <span class="scnd-id">pay</span>
                </router-link>
            </div>
            <div class="each-link-con">
               <i class="fa fa-bell"></i>
            </div>
        </div>
      </div>
    </div>
</template>

<style>
*{
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
color: #151933;
}
#app{
    margin: 0px;
}
.nav-con{
    max-width: 1519.20px;
    border: 1px solid rgb(98, 54, 255);;
    margin: 0px auto;

}
.main-nav{
    
    padding: 10px;
  background: rgb(98, 54, 255);;
    justify-content: center;
    display: flex;

}
.header-con{
    width: 100%;
    padding: 10px;
    margin: 0px;
  
    display: flex;
    justify-content: space-between;
}
.each-link-con{
    padding: 5px;
    margin: 5px;
   


}
.header-con .logo-home{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 12px;
    cursor: pointer;
}
.first-id{
color: #fff;
}
.scnd-id{
    color: yellow;
}
.drop-down-flex{
    position: absolute;
    background: #fff;
    widows: 100%;
   top: 58px;
    padding: 10px;
    left:-26px;
    min-width: 250px;
    min-height:100%;
      box-shadow: 0 0 3px rgb(31 30 47 / 5%);
   
}
.profile-head-co{
    padding: 5px;
   
   
    justify-content: space-between;
    display: flex;
}
.profile-head-con-account-number{
    padding: 5px;
   
    justify-content: space-between;
    display: flex;
}
.profile-logo{
    border: 1px solid #777;
    background: #ccc;
    border-radius: 5px;
    max-width: 40px;
    min-width: 40px;
    height: 40px;
}
.profile-name{
    padding: 10px;
    color: #151933;
    text-transform: uppercase;
   
}
@media screen and (max-width:499px){
    .profile-logo{
        min-width: 30px;
        height: 30px;
    }
    .profile-name{
        font-size: 13px;
    }
}
.main-menu{
padding: 5px;

margin-top: 20px;
overflow-y: scroll;

}
.main-menu h2{
    padding: 0px;
    margin:0px;
    font-size: 14px;
}
.each-menu-link{
    justify-content: space-between;
    display: flex;
    border-bottom: 1px solid #151933;
    margin-top: 10px;

}
::-webkit-scrollbar{
    display: none;
}
@media screen  and (max-width:499px){
    .eachside-link{
        font-size:13px
    }
    .main-menu h2{
        font-size: 12px;
    }
    .accnt-number{
        font-size: 12px;
    }
}
.each-menu-link:hover {
    background: #ccc;
    padding: 5px;
}
.eachside-link{
    padding:10px;
}
</style>