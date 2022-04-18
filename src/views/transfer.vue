<script>
import { mapGetters } from 'vuex';
 import Balance from '../components/balance.vue'
  import Header from '../components/header.vue'
  import Bottom from '../components/bottom.vue'
import axios from 'axios';
  import Message from '../components/message.vue'
export default {
    name:"transfer-app",
    components:{
        Balance,
        Header,
        Bottom,
        Message
        
    },
    data(){
        return{
            recipient : '',
            amount: 0,
            banks:[],
            accountname:'',
            remark:'',
            accountnumber:'',
            bankname:'',
            wallet:'XYZ104',
            accountpin:'',
           
            mypayaccount:'',
            responseSuccess: '',
            statuss:null,
            error:'',
            isdisabled:false,
            platform:'main',
            text:'Send',
           
            id:null 
        }
    },
    methods:{
    
    async handleSubmit(){
         const data = {
             wallet:this.wallet,
             platform:this.platform,
             banks:this.banks,
             accountnumber:this.accountnumber,
             accountname:this.accountname,
             amount:this.amount,
             remark:this.remark,
             accountpin:this.accountpin,
             user:this.user.member_id,
             mypayaccount:this.mypayaccount
         }
         const response = await axios.post('http://127.0.0.1/api/transfer.php',data);
         console.log(response)

    }
      
    },     
     mounted(){
       
          fetch('https://api.flutterwave.com/v3/banks/NG',{
          Headers: {
                    Authorization:'FLWSECK_TEST-3354d548c7b115dbc22642092cd378f6-X' ,
                    
                }
          })
          .then(res=> res.json())
          .then(data=>this.banks=data.data)
          .catch(err => console.log(err.message))
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
                    <h3>Transfer Money</h3>
                 
                </div>
                 
            </div>
            <div class="form-group">
            <label for="Recipient">Choose Bank/Platform</label>
                <select  v-model="wallet"  class="each-data" placeholder="Method of Receiving">
                    <option value="XYZ103">MyPay Account</option>
                    <option value="XYZ104">Bank Account</option>
                </select>
            </div>
             <div class="form-group">
            <label for="Recipient">Send From</label>
                <select  v-model="platform"  class="each-data">
                    
                    <option value="main">Main Wallet </option>
                    <option value="commision">Comission</option>
                </select>
            </div>
            <div class="form-group" v-if="wallet == 'XYZ104'">
            <label for="Recipient">Select Bank</label>
                <select  v-model="banks.code"  class="each-data" placeholder="Select Bank">
                   <option  :value="bank.code" v-for="bank in banks" :key="bank.code" >{{bank.name}}</option>
                </select>
            </div>
             <div class="form-group" v-if="wallet=='XYZ104'">
             <label for="text">Account Number</label>
                <input type="number" class="each-data" placeholder="Account Number" required v-model="accountnumber">
            </div>
            <div class="form-group" v-if="wallet=='XYZ103' ">
             <label for="amount"  >Mypay Account No</label>
                <input type="text" class="each-data" placeholder="Recipient Number" required v-model="mypayaccount">
            </div>
            <div class="form-group">
             <label for="amount">Account Name</label>
                <input type="text" class="each-data" placeholder="Account Name" required v-model="accountname">
            </div>
             <div class="form-group">
             <label for="coupon">Amount:</label>
                <input type="text" class="each-data" placeholder="Amount" v-model="amount" requied>
            </div>
             <div class="form-group">
             <label for="coupon">Remark:</label>
              <textarea class="each-data textarea" cols="30" rows="10" placeholder="Enter Your Remark" required v-model="remark"></textarea>
            </div>
             <div class="form-group">
             <label for="Account PIN">Account PIN</label>
                <input type="password" class="each-data" placeholder="Account PIN" required autocomplete="off" v-model="accountpin">
                <span>Forget PIN? <router-link to="./reset">reset</router-link></span>
            </div>
            
             <div class="form-group">
                <button :disabled="isdisabled" :class="{'disablebtn':isdisabled}">{{text}}</button>
            </div>
        </form>
       </div>
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

}
.img-icon-mtn img{
    width:100%
}
label{
    font-size: 14px;
    margin: 0px;
    padding: 5px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight:600;
}
.form-group span{
    font-size: 12px;
    color:rgb(98, 54, 255)
}
.checkbalance span{
    color:green;
    font-family: 'Times New Roman', Times, serif;
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
    margin:10px;
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
.disablebtn{
    background: rgb(127, 107, 197);
    border:1px solid rgb(127, 107, 197);
}
textarea{
    width:100%;
    box-sizing:border-box;
    outline:none;
    appearance: none;
}
</style>