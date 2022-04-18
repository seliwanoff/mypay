<script>
import { mapGetters } from 'vuex';
 import Balance from '../components/balance.vue'
  import Header from '../components/header.vue'
  import Bottom from '../components/bottom.vue'
  import axios from 'axios';
  import Message from '../components/message.vue'

export default {
    name:"airtel-data",
    components:{
        Balance,
        Header,
        Bottom,
        Message
        
    },
    data(){
        return{
            recipient : '',
          
            couponcode:'',
            accountpin:'',
            network:'AIRTEL DATA BUNDLE',
            responseSuccess: '',
            statuss:null,
            error:'',
            isdisabled:false,
            text:'Proceed',
           
            id:null,
            packages:'MD116'
           
        }
    },
    methods:{
       async  handleSubmit(){
            this.text='Processing'
           this.isdisabled = true
           const data = {
                recipient:this.recipient,
              
                couponcode:this.couponcode,
                accountpin:this.accountpin,
                network :'AIRTEL DATA BUNDLE',
                user:this.user.member_id,
                package:this.packages,
                table:'airtel-data'   
                }
             
            const response =  await axios.post('http://localhost/api/data.php',data)
            console.log(response)
             this.id = response['data']['data']['Txt-ref']
            this.statuss = response['data']['status'];
            this.error =response['data']['error'];
            if(response['data']['status']==true){
                 
                this.responseSuccess=response['data']['message']
               this.interval= setInterval(()=>{
                    this.statuss = null;
                     this.isdisabled = true
                       this.$router.push('/make_payment/'+this.id);
                },3000);
            }else{
                this.responseSuccess=response['data']['message']
                  this.interval= setInterval(()=>{
                        this.statuss = null;
                         this.isdisabled = false
                          this.text='Proceed'
                },3000);
            }
        
            
        }
    },
    
    computed:{
        ...mapGetters(['user'])
    },
   
   

};
</script>
<template>
<div>
<Message :getdata="responseSuccess" :getstatus="statuss"/>
<Header/>
<Balance />
<div class="item-data-container">
    <div class="parent-specify">
       <div class="form-data">
        <form @submit.prevent="handleSubmit">
            <div class="form-group-logo">
                <div class="checkbalance">
                    <h3>Buy Data</h3>
                   <span>Use *127# to check balance</span>
                </div>
                <div class="img-icon-mtn">
                 <img src="../assets/images/download.png" alt="" srcset="">
                </div>
            </div>
            <div class="form-group">
            <label for="Recipient">Recipient</label>
            
                <input type="text" class="each-data" placeholder="Recipient" required v-model="recipient">
            </div>
             <div class="form-group">
             <label for="Data_plan">Data Plan</label>
             
             <select v-model="packages" class="each-data" required>
            <option value="MD116">AIRTEL 10MB   (&#8358;50)  </option>
            <option value="MD117">AIRTEL 50MB   (&#8358;100) </option>
            <option value="MD118">AIRTEL 200MB  (&#8358;200) </option>
            <option value="MD119">AIRTEL 350MB  (&#8358;300) </option>
            <option value="MD120">AIRTEL 7000MB (&#8358;500)</option>
            <option value="MD121">AIRTEL 1.3GB  (&#8358;1000)</option>
            <option value="MD122">AIRTEL 3.5GB  (&#8358;2000) </option>
            <option value="MD123">AIRTEL 5GB    (&#8358;2500) </option>
            <option value="MD124">AIRTEL 7GB    (&#8358;3500)</option>
            <option value="MD125">AIRTEL 9GB    (&#8358;4000)</option>
            <option value="MD126">AIRTEL 10GB    (&#8358;5000)</option>
            </select>
            </div>
             <div class="form-group">
             <label for="coupon">Coupon Code</label>
                <input type="text" class="each-data" placeholder="Coupon Code (if any)" v-model="couponcode">
            </div>
             <div class="form-group">
             <label for="Account PIN">Account PIN</label>
                <input type="password" class="each-data" placeholder="Account PIN" required autocomplete="off" v-model="accountpin">
                <span>Forget PIN? <router-link to="./reset">reset</router-link></span>
            </div>
            
             <div class="form-group">
               <button :disabled="isdisabled" :class="{'disablebtn':isdisabled}"> {{text}}</button>
            </div>
            
        
        
        </form>
       </div>
      
    </div>

<Bottom />
</div></div> 

</template>

<style scoped>
.item-data-container{
max-width: 1519.20px;
width:100%;
margin:0px auto;

display: flex;
justify-content: center;
box-sizing: border-box;

}
.parent-specify{
    width:85%;
   background: #fff;
   border-radius: 10px;
   padding:10px;
   margin-bottom: 10px;
   

}

.form-data{
    border: 1px solid #ccc;

}
.form-group{
    padding:5px;

}
.form-group-logo{
    padding:5px;
    justify-content: space-between;
    display: flex;
}
.form-group input{
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ccc;
    padding: 10px;
    outline: none;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 13px;
}
.img-icon-mtn{
    max-width: 50px;
    height: 50px;
    width: 100%;

}
.img-icon-mtn img{
    width:100%
}
label{
    font-size: 14px;
    margin: 0px;
    padding: 5px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color:rgb(98, 54, 255)
}
.form-group span{
    font-size: 12px;
    color:rgb(98, 54, 255)
}
.checkbalance span{
    color:green;
    font-family: 'Times New Roman', Times, serif;
}
button{
width: 100%;
box-sizing: border-box;
outline: none;
background: rgb(98, 54, 255);
border:1px solid rgb(98, 54, 255);
padding: 5px;
margin-top: 15px;
border-radius: 10px;
color:#ccc;
cursor: pointer;
}
select{
width:100%;
padding: 10px;
outline: none;
border: none;
border-bottom: 1px solid #ccc;

}
select option{
    padding: 10px;
}
.disablebtn{
    background: rgb(127, 107, 197);
    border:1px solid rgb(127, 107, 197);
}
select{
appearance: none;
}

</style>