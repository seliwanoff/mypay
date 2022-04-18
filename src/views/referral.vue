<script>
import { mapGetters } from 'vuex';
 import Balance from '../components/balance.vue'
  import Header from '../components/header.vue'
  import Bottom from '../components/bottom.vue'
  import axios from 'axios';
  import Message from '../components/message.vue'

export default {
    name:"referral-app",
    components:{
        Balance,
        Header,
        Bottom,
        Message
        
    },
    data(){
        return{
            referral:0,
            text:'Withdraw your point',
            isdisabled:false,
            statuss:null,
            responseSuccess:''

        }
    },
    methods:{
       async  handleSubmit(){
            this.text='Processing'
            this.isdisabled = true
            const data = {
               user:this.user.member_id,
               referral:this.referral,
            }
             
            const response =  await axios.post('http://localhost/api/send-referral.php',data)
            console.log(response)
             //this.id = response['data']['data']['Txt-ref']
            this.statuss = response['data']['status'];
            //this.error =response['data']['error'];
            if(response['data']['status']==true){
                 
                this.responseSuccess=response['data']['message']
               this.interval= setInterval(()=>{
                    this.statuss = null;
                     this.isdisabled = true
                     this.$router.push('/dashboard')
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
    async created(){
        const data = {
            user: this.user.member_id
        }
       const response = await axios.post('http://127.0.0.1/api/referral.php',data);
    
       this.referral = response['data']['total_number']
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
       <div class="deposit-con-income-sector" style="width:100%">
        <div class="parent-income info" style="justify-content:space-between,display:flex">
            <div style="color:#fff;font-size:12px">http://localhost:3000/register/{{user.member_id}}</div>
            <div><i class="fa fa-copy"  style="color:#ccc"></i></div>
        </div>
    </div>
    <div class="referal-list">
        <div class="menu-referral">
            <div class="member">No referred Membeer</div>
            <div class="list-number">{{referral}}</div>
            <input type="hidden" v-model="referral">
        </div>
        <div class="menu-referral">
            <div class="member">Success refer</div>
            <div class="list-number">12</div>
        </div>
        <div class="menu-referral">
            <div class="member">Point Earned</div>
            <div class="list-number">{{referral *100}} points</div>
        </div>
        <div class="menu-referral">
            <div class="member">Total Earning</div>
            <div class="list-number">&#8358;{{referral * 20}}</div>
        </div>
    </div>
    <div class="info-ref-con">
        <div class="main-ref-info">
            <p> For each successful referral, you are awarded with 100 points which is equivalent to 20naira.</p>
            <p>This implies that if you refer 10 member, you will be awarded 1,000  point 200naira worth.</p>
            <p>You can withdraw you point as naira to your wallet and then use it for any transaction. </p>
            <p>Minimum withdraw is 0 naira and the total point can be withdraw at a goal.</p>
        </div>
    </div>
    
        <button :disabled="isdisabled" :class="{'disablebtn':isdisabled}" @click="handleSubmit">{{text}}</button>
    
</div>

<Bottom />
</div>
</div> 

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
.referal-list{
    padding: 10px;
    background: #ccc;
}
.menu-referral{
    padding: 5px;
    justify-content: space-between;
    display: flex;
    border-bottom: 1px solid #ddd;
}
@media screen and (max-width:499px) {
    .member,.list-number{
    font-size:12px;

    }
}
.info-ref-con{
    padding: 10px;
    
}
.main-ref-info{
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-size: 14px;
}
</style>