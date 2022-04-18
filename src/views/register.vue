<template>
    <div class="regcontainer">
    <Message :getdata="responseSuccess" :getstatus="statuss"/>
    </div>
        <div class="navhead">
        
            <div class="nav">
                <i class="fa fa-arrow-left" @click="goPrevious"></i>

            </div>
            <div class="nav">mypay</div>
             <div class="nav"></div>
            
        </div>
 
        <div class="main-container">
            <div class="reg-con">
                <div class="img-con-reg">
                    <img src="../assets/images/ad3.png" alt="">
                </div>
                
            </div>
          <div class="main-form-data">
            <div class="formdata-con">
                <div class="title-head">
                    <h2>Register</h2>
                </div>
                 <div class="title-head">
                   <form @submit.prevent="handleSubmit">
                    <div class="form-data-group">
                        <input type="text" class="form-data" placeholder="WhatsApp Number" v-model="number" required>
                    </div>
                     <div class="form-data-group">
                        <input type="text" class="form-data" placeholder="Username" v-model="username" required>
                    </div>
                     <div class="form-data-group">
                        <input type="text" class="form-data" placeholder="Fullname" v-model="fullname" required>
                    </div>
                     <div class="form-data-group">
                        <input type="email" class="form-data" placeholder="Email" v-model="email" required>
                        
                    </div>
                     <div class="form-data-group">
                        <input type="password" class="form-data" placeholder="Password" required autocomplete="off" v-model="password">
                    </div>
                     <div class="form-data-group">
                        <input type="password" class="form-data" placeholder="Confirm Password"  required autocomplete="off" v-model="confirmpassword">
                        <div v-if="passwordError" class="passworderror">{{passwordError}}</div>
                    </div>
                    <div class="form-data-group">
                        <input type="password" class="form-data" maxlength="4" placeholder="Your Account PIN" required autocomplete="off" v-model="accountpin">
                    </div>
                     <div class="form-data-group">
                        <input type="Referral" class="form-data" placeholder="Referral (Optional)" autocomplete="off" v-model="referral">
                    </div>
                    <div class="form-data-group">
                        <input type="checkbox" name="" id="" class="checkbox" v-model="terms" required>
                        <label> Accept Our term and condition</label>
                    </div>
                     
                    <div class="form-data-group">
                        <button  :disabled="isDisable">Register</button>
                    </div>
                    <div class="form-data-group">
                        <label> Already have an account, <router-link to="./login">here</router-link></label>
                    </div>
                   </form>
                </div>
            </div>
          </div>
       
    
    </div>
</template>
    <script>
    
 import Message from '../components/message.vue'

    
  import axios from 'axios'
  
    export default {
        name:"register-app",
       
        components:{
             Message
        },
        
        data() {
            return {
                number:'',
                username:'',
                fullname:'',
                email:'',
                password:'',
                confirmpassword:'',
                accountpin:'',
                referral:this.$route.params.ref,
                terms: true,
                passwordError :'',
                responseSuccess: '',
                statuss:'true',
                error:'',
                isDisable:false
               
                
              

            }
        },
        methods: {
       async handleSubmit(){
           this.isDisable= true;
                  if(this.password == this.confirmpassword){
                      this.passwordError=''
                  }else{
                      this.passwordError='Password Does not match'
                  }
                const  data = {
                          number : this.number,
                          username : this.username,
                          fullname : this.fullname,
                          email : this.email,
                          password : this.password,
                          referral : this.referral,
                        accountpin:this.accountpin
                      }
                      
                if(!this.passwordError){
                  
                const response =   await axios.post('http://localhost/api/register.php',data)
               // console.log(response['data']['message'])
                this.statuss = response['data']['status'];
                this.error =response['data']['error'];
               
                if(this.status==false){
                    this.isDisable= !this.isDisable
                    this.responseSuccess=response['data']['message']

                    
                }else{
                      this.responseSuccess=response['data']['message']
                    this.interval= setInterval(()=>{
                        this.number ='';
                        this.username = '';
                        this.fullname = '',
                        this.email = '',
                        this.password = '',
                        this.referral ='',
                        this.accountpin='';
                        this.confirmpassword='';
                         //this.$router.push('/login');
                   
                },3000);
                  
                    
                }
                }
                    
               
                   
                  
            },
            goPrevious(){
            this.$router.go(-1)
            }
        }
    }
    </script>
<style>
    .regcontainer{
        max-width: 1519.20px;
        width: 100%;
        position: relative;
        margin: 0px auto;
    }
    .navhead{
        padding: 10px;
        justify-content: space-between;
        display: flex;
        background: #fff;
        max-width: 1519.20px;
        box-shadow: 0 0 3px rgb(31 30 47 / 5%);
        width: 100%;
        
    }
    .nav{
        margin: 10px;
       
        max-width: 30px;
        min-width: 30px;
        height: 30px;
    }
    .main-container{
        width:100%;
        padding:10px;
       
        box-sizing: border-box;
    }
    .reg-con{
    margin:   10px;
    padding: 10px;
   
    justify-content: center;
    display: flex;
    
    }
    .img-con-reg{
        width: 80%;
      

    }
    .img-con-reg img{
        width: 100%;

    }
    @media screen and (max-width:499px) {
        .img-con-reg{
        width: 100%;
       

    }
    .img-con-reg img{
        width: 100%;

    }
    }
    .main-form-data{
        justify-content: center;
        display: flex;
       
      
        padding: 10px;

    }
    .formdata-con{
    width: 100%;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0 0 3px rgb(31 30 47 / 5%);
    padding: 10px;

    }
    .title-head{
        padding: 10px;
        margin: 10px;
     
    }
    .title-head h2{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 20px;
        margin: 0px;
        padding: 0px;
        text-align: center;
    }
    .form-data-group input{
       
    width: 100%;
    padding: 10px;
    border: none;
    border-bottom: 1px solid #ccc !important;
    box-sizing: border-box;
    outline: none;
    font-size: 15px;
    margin-bottom: 10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .form-data-group button{
       
    width: 100%;
    padding: 10px;
   border: 1px solid rgb(98, 54, 255);
    background: rgb(98, 54, 255);
    color: #ccc;
    font-size: 16px;
    border-radius: 10px;

    }

    input[type="checkbox"]{
       position: relative !important;
       display: inline-block !important;
       
       width: 30px !important;

    }
    .passworderror{
        color: #ff0062;    
    }
    .fa {
        cursor: pointer;
    }
</style>