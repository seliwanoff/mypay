<template>
    <div>
    <Message :getdata="responseSuccess" :getstatus="statuss"/>
    <Header/>
    <Balance />
        <div class="item-data-container">
        <div class="parent-specify">
        <div class="form-data">
            <div class="each-form-group">
                <div class="data-each">
                    <div class="left-side-label">Hash</div>
                    <div class="right-side-data">{{ref}}</div>
                </div> 
                <div class="data-each">
                    <div class="left-side-label">Package</div>
                    <div v-if="network!='MTN DATA BUNDLE' && network!='GLO DATA BUNDLE'&& network!='9MOBILE DATA BUNDLE' && network!='AIRTEL DATA BUNDLE' ">
                    <div class="right-side-data">&#8358;{{amount}} {{network}}</div>
                    </div>
                    <div v-else class="right-side-data">{{biller_name}}</div>
                </div>
                 <div class="data-each">
                    <div class="left-side-label">Description</div>
                    <div v-if="network!='MTN DATA BUNDLE' && network!='GLO DATA BUNDLE'&& network!='9MOBILE DATA BUNDLE' && network!='AIRTEL DATA BUNDLE' ">
                    <div class="right-side-data">{{network}} Airtime</div>
                    </div>
                    <div v-else class="right-side-data">{{biller_name}}</div>
                </div>
                 <div class="data-each">
                    <div class="left-side-label">Recipient</div>
                    <div class="right-side-data">{{recipient}}</div>
                </div>
                 <div class="data-each">
                    <div class="left-side-label">Amount</div>
                    <div class="right-side-data">&#8358;{{amount}}</div>
                </div>
                 <div class="data-each">
                    <div class="left-side-label">Status</div>
                    <div class="right-side-data">{{statuss}}</div>
                </div>
                <form @submit.prevent="sendData">
                <div class="data-each">
                    <input type="text" v-model="item" hidden>
                    <input type="text" v-model="code" hidden>
                    <input type="text" v-model="amount" hidden>
                    <input type="text" v-model="ref" hidden>
                     <input type="text" v-model="network" hidden>
                      <input type="text" v-model="recipient" hidden>
                        <input type="text" v-model="biller_name" hidden>
                   <button :disabled="isdisabled" :class="{'disablebtn':isdisabled}">{{text}}</button>
                </div>
                </form>
                
            </div>
        </div>
        </div>
    </div>
    <Bottom />
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
 import Balance from '../components/balance.vue'
  import Header from '../components/header.vue'
  import Bottom from '../components/bottom.vue'
  import axios from 'axios';
  import Message from '../components/message.vue'
export default {
    name:'Make-payment',
    components:{
        Balance,
        Header,
        Bottom,
        Message
        
    },

      data(){
        return{
            ref :'',
            amount:'',
            recipient:'',
            statuss:'',
            network:'',
            item:'',
            code:'',
            short:'',
            biller_name:'',
            isdisabled:false,
            text:'Make payment'

        }
    },
    async created(){
        const data= {
            id:this.$route.params.id,
            user:this.user.member_id
        }
      const response = await axios.post('http://localhost/api/fetch.php',data)
     
      
      this.ref= response['data']['data']['ref'];
      this.amount = response['data']['data']['amount'];
      this.recipient= response['data']['data']['recipient'];
      this.statuss = response['data']['data']['status'];
      this.network = response['data']['data']['network'];
      this.item =response['data']['data']['item_code'];
      this.code = response['data']['data']['biller_code']
      this.recipient =response['data']['data']['recipient'];
       this.biller_name =response['data']['data']['biller_name'];
    },
    methods:{
           async sendData(){
               this.text='Processing'
                const data = {
                    item:this.item,
                    code:this.code,
                    network:this.network,
                    ref:this.ref,
                    user:this.user.member_id,
                    recipient:this.recipient,
                    amount:this.amount,
                    biller_name:this.biller_name
                    
                }
                console.log(data);
                const response = await axios.post('http://127.0.0.1/api/buy.php',data)
                console.log(response)

            }
    },
   
    computed:{
        ...mapGetters(['user'])
    }
  
}
</script>

<style>
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
.each-form-group{
border:1px solid #ccc;
padding:10px;


}
.data-each{
    border-bottom:1px solid #ccc;
    margin-bottom:10px;
    display:flex;
    justify-content:space-between;
    padding:5px

}
.left-side-label{

    font-weight:400;
    font-size:15px;
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   text-align:left;
}
.right-side-data{
    font-weight:700;
    font-size:15px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align:right
}
@media screen and (max-width:499px){
    .right-side-data{
     font-weight:700;
    font-size:12px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align:right
    }
}
.disablebtn{
    background: rgb(127, 107, 197);
    border:1px solid rgb(127, 107, 197);
}
</style>