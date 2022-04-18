<script>
import { mapGetters } from 'vuex';
    import Balance from '../components/balance.vue'
  import Header from '../components/header.vue'
  import Bottom from '../components/bottom.vue'
  import axios from 'axios';
  import Message from '../components/message.vue'

export default {
    name:"Airteltopup-app",
    components:{
        Balance,
        Header,
        Bottom,
        Message
    },
   
    data(){
        return{
        amount:0,
        accountpin:'',
        text:'Proceed',
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
            amount:this.user.comission,
            accountpin:this.accountpin,
            user:this.user.member_id,
            }
            const response =  await axios.post('http://localhost/api/comission.php',data)
            //console.log(response)
            this.statuss = response['data']['status'];
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
                          this.text='Process'
                },3000);
            }
        
            
        }
    },
   
    computed:{
        ...mapGetters(['user'])
    }
   
   

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
                    <h3>Convert Comission</h3>
                  
                </div>
                
            </div>
            <div class="form-group">
            <label for="Recipient">Amount</label>
           
                <input type="number" class="each-data" placeholder="Recipient" v-model="user.comission">
            </div>
            <div class="form-group">
             <label for="Account PIN">Account PIN</label>
                <input type="password" class="each-data" placeholder="Enter Account PIN" required autocomplete="off" v-model="accountpin">
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
<div></div>
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
.disablebtn{
    background: rgb(127, 107, 197);
    border:1px solid rgb(127, 107, 197);
}
</style>