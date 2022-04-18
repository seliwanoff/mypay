<script>
import { mapGetters } from 'vuex';
 import Balance from '../components/balance.vue'
  import Header from '../components/header.vue'
  import Bottom from '../components/bottom.vue'
  import axios from 'axios';
  import Message from '../components/message.vue'

export default {
    name:"9mobiletopup-app",
    components:{
        Balance,
        Header,
        Bottom,
        Message
        
    },
    data(){
       return{
           show:true,
            showText:'Show card back',
            hide:'Show card front',
            has_card:false,
            hideModal:false,
            bvn:'',
            Send:'Send',
            isdisable:false
       }
        /*return{
            recipient : '',
            amount: '',
            couponcode:'',
            accountpin:'',
            network:'9mobile',
            responseSuccess: '',
            statuss:null,
            error:'',
            isdisabled:false,
            text:'Proceed',
            item:'AT103',
            code:'BIL103',
            id:null
        }*/
    },
    methods:{
      showcard(){
          this.show=!this.show,
        this.showText='show card back',
        this.hideText='Show card front'
          
      },
      goBackpr(){
          this.$router.go(-1)
      },
      cancelmodal(){
         
          this.hideModal=false
      },
      showModal(){
           this.hideModal=true
      },
     async sendBvn(){
         this.Send= 'Sending',
         this.isdisabled=true
         const data = {
             user: this.user.member_id,
             bvn:this.bvn
         }
         const response = await axios.post('http://127.0.0.1/api/sendbvn.php',data);
         console.log(response);
      },
    },
    computed:{
        ...mapGetters(['user'])
    }
   
   

}
</script>
<template>
<div>
    <div v-if="hideModal">
 <div class="modal">
        <div class="modal-child">
            <div class="main-info-con">
               <div class="infocancel">
                    <div></div>
                    <div class="infos"><h2>Information</h2></div>
                    <div class="cancel"><i class="fa fa-times" @click="cancelmodal"></i></div>
               </div>
               <div class="main-info-message">
                   <div class="list-con">
                    <ul>
                    <li>In creating our vrtual card, the following information should be noted.</li>
                    <li>The isssued virtual card can be used for any purposes, be it online payment,transfer,
                        withdrwaing from atm stand, POS and all 
                    </li>
                    <li>On known account should be card details be reaveled to the third partner,even mypay staff we never
                        ask for your card details
                    </li>
                    <li>
                        While generating this virtual card, your Bank Verification Number (BVN) will be required for authentication according
                        CBN issuing rules.
                    </li>
                    <li>
                        No any form of crypto or illegal transaction will be alllowed for the use of this card
                    </li>
                    <li>Card generation is instant and can be used as soon as it is generated.</li>
                    <li>Kindly read our term and condition for issue virtual card for our customer in customer section</li>
                    <li>Report any irregularities to our support center</li>
                    </ul>
                   </div>
                    <div v-if="user.bvn==''" style="box-sizing:border-box">
                   <div class="bvn-text-con">
                     <form   @submit.prevent="sendBvn" style="width:100%">
                    <input type="text" placeholder="Enter BVN" class="inbvn" v-model="bvn" required >
                    <button class="bvnbtn" :disabled="isdisabled" :class="{'disablebtn':isdisabled}">{{Send}}</button>
                    </form>
                  
                   </div>
                   </div>
                  <div>
                   <button @click="goBackpr">Back</button>
                   <button style="background:green;border:1px solid green">Continue</button>
                   </div>
               </div>
            </div>
        </div>
</div>
</div>
  <Message :getdata="responseSuccess" :getstatus="statuss"/>
<Header/>
<Balance />
<div class="item-data-container">
       
    <div class="parent-specify">
    <div v-if="has_card">
        <div class="card-box" v-show="show">
            <div class="card-title">
                <img src="" alt=""><h4><span style="color:#fff">my</span><span style="color:yellow">pay</span> <span>virtual card</span></h4>
            </div>
            <div class="number-box">
                1234-5678-9098-7663
            </div>
             <div class="expire">
              <span>expire</span> 24-01-2024
            </div>
            <div class="type-card">
                <img src="../assets/images/glo.jpg" alt="">
            </div>
        </div>
        <div class="card-box" v-show="!show">
            <div class="card-title">
               <span style="color:#fff;">Your virtual card CVV</span>
            </div>
            <div class="number-box cvv-number">
                345
            </div>
          
        </div>
        <div class="show-card-back" v-if="show">
            <button @click="showcard">{{showText}}</button>
        </div>
        <div class="show-card-back" v-if="!show">
            <button @click="showcard">{{hideText}}</button>
        </div>
   </div>
   <div v-else>

        <button @click="showModal">Get card</button>
   </div>
    </div>
</div> 
 <Bottom />
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
   justify-content: center;
   

}
.card-box{
    border:1px solid rgb(98, 54, 255);
    padding: 5px;
    border-radius: 15px;
    max-width:600px;
    min-width: 400px;
    
    background: rgb(98, 54, 255);;
    box-shadow: 0 0 3px rgb(31 30 47 / 5%);
    color:#fff;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;



}
.card-title h4{
    color:#fff;
    padding: 0px;
    margin-top:-10px;
    font-size: 14px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.number-box{
    text-align: center;
    color: #fff;
    font-size: 16px;
    font-family: 'Times New Roman', Times, serif;
    margin-top: 50px;
    font-weight: 800;


}
.type-card{
   
   padding: 5px;
   margin-top: 50px;
   justify-content: right;
   display: flex;
}
.type-card img{ 
   
    width: 100px;
    height: 30px;


}
.expire{
text-align: center;
font-size:12px;
color:#fff;

}
@media screen and (max-width:499px){
    .card-box{
    border:1px solid rgb(98, 54, 255);
    padding: 5px;
    border-radius: 15px;
    max-width:600px;
    min-width: 300px;
    background: rgb(98, 54, 255);;
    box-shadow: 0 0 3px rgb(31 30 47 / 5%);
    color:#fff;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;



}
.card-title h4{
    color:#fff;
    padding: 0px;
    margin-top:-10px;
    font-size: 12px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.number-box{
    text-align: center;
    color: #fff;
    font-size: 14px;
    font-family: 'Times New Roman', Times, serif;
    margin-top: 50px;


}
.type-card{
   
   padding: 5px;
   margin-top: 70px;
   justify-content: right;
   display: flex;
}
.type-card img{ 
   
    width: 100px;
    height: 30px;


}
}
.cvv-number{
    background: #ccc;
    color:#000;
    font-size: 17px;
    padding: 10px;
    margin-bottom: 90px;
}
.modal{
position: absolute;
width:100%;
min-height: 100%;

background: #ccc;
display: flex;
justify-content: center;

padding: 10px;

}
.modal-child{
 
    padding: 10px;
    box-sizing: border-box;
    justify-content: center;
    display: flex;
   
   
    
}
.main-info-con{
min-width: 600px;
max-width: 600px;
width:100%;
background: #fff;
border-radius: 10px;
margin-bottom: 70px;
height: 100%;

}
.infocancel{
    justify-content: space-between;
    display: flex;
    
   
}
.cancel{
    margin-right: 10px;
    margin-top: 10px;
}
.infos{
    font-size: 13px;
    margin-top: 10px;
}
.main-info-message{
padding: 10px;


}
.list-con{

margin-top: 10px;

}
ul{
  list-style: inside;
    padding: 10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
ul li{
    margin-top:10px;
   
}
@media screen and (max-width:499px){
.modal-child{
    padding: 10px;
    box-sizing: border-box;
    justify-content: center;
    display: flex;
    height: 100%;
}
.main-info-con{
min-width:250px;
min-height: 100%;
width:100%;
background: #fff;
border-radius: 10px;
margin-bottom: 70px;

}
.infocancel{
    justify-content: space-between;
    display: flex;
    
   
}
.cancel{
    margin-right: 10px;
    margin-top: 10px;
}
.infos{
    font-size: 13px;
    margin-top: 10px;
}
.main-info-message{
padding: 10px;


}
.list-con{

margin-top: 10px;

}
ul{
  list-style: inside;
    padding: 10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
ul li{
    margin-top:10px;
     font-size:12px;
}
}
.bvn-text-con{
    display:flex;
}
.bvnbtn{
    max-width: 100px;
    width: 25%;
    padding: 10px;

}
.inbvn{
    width:75%;
    outline: none;
    border:none;
    border-bottom: 1px solid #ccc;

}

</style>