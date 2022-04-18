<template>
<div>
<Header/>
<Balance />
<div class="item-data-container">
    <div class="parent-specify">
        <div class="daughter-data">
            <div class="item-specific" role="item-holder" data-type="DSTV">
                <div class="img-data-con">
                    <div class="data-info-img">
                        <div class="img-con-service">
                            <img src="../assets/images/dstv.png" alt="" srcset="">
                        </div>
                         <div class="img-con-service">
                            <h3>DSTV</h3>
                        </div>
                        <div class="img-con-service">
                            <strong>DSTV TOP UP</strong>
                        </div>
                        
                    </div>
                 <router-link to="./dstv-topup">
                    <button>BUY</button>
                 </router-link>
                </div>
               
            </div>
             <div class="item-specific" role="item-holder" data-type="GOTV">
                <div class="img-data-con">
                    <div class="data-info-img">
                        <div class="img-con-service">
                            <img src="../assets/images/gotv.png" alt="" srcset="">
                        </div>
                         <div class="img-con-service">
                            <h3>GOTV</h3>
                        </div>
                        <div class="img-con-service">
                            <strong>GOTV TOP UP</strong>
                        </div>
                        
                    </div>
                 <router-link to="./gotv-topup">
                    <button>BUY</button>
                 </router-link>
                </div>
            </div>
        
        </div>
        
</div>
<Bottom />
</div>
</div> 
</template>
<script>
import { mapGetters } from 'vuex';
import Balance from '../components/balance.vue'
import Header from '../components/header.vue'
import Bottom from '../components/bottom.vue'
export default {
    name:"tv-app",
    components:{
        Balance,
        Header,
        Bottom
        
    },
    computed:{
        ...mapGetters(['user'])
    },
     
   
   
   

};
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
   
    display: grid;
   

}

.daughter-data{
    width:100%;
    box-sizing: border-box;
   
    padding: 5px;
    justify-content: space-between;
    display: flex;
}
.item-specific{
    background-color: #fff;
    border-radius: 10px;
    margin: 5px;
    width:100%;
    padding:10px;
    box-shadow: 0 0 3px rgb(31 30 47 / 5%);
}
.img-data-con{
    padding: 10px;
    border: 1px solid #ccc;
    
}
.data-info-img{
    max-width: 200px;
    width: 100%;
   
    margin:0px auto


}
.img-con-service{
    border: 100%;
    max-width: 70px;
    width:100%;
    text-align:center;
    margin: 10px auto;
}
.img-con-service img{
    width:100%;
    height:70px ;
    mix-blend-mode: multiply;
  
}
@media screen and (max-width:499px) {
.img-con-service{
    border: 100%;
    max-width: 40px;
    width:100%;
  
    margin: 10px auto;
}
    .img-con-service img{
    width:100%;
    height:40px ;
    mix-blend-mode: multiply;
  
}
.img-con-service h3{
    text-align: center;
    font-size: 14px;
}
}
.img-con-service strong {
    font-weight: 500;
    font-size: 10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
    margin: 0px;
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
</style>