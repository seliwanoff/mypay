<template>
    <div class="botom-con">
        <div class="scnd-bottom">
        <router-link to="/data">
            <div class="icon-service">
                <div class="img-icon">
                <i class="fa fa-wifi"></i>
                </div>
                <div class="listservice">Data</div>

            </div>
        </router-link>
        <router-link to="/airtime">
            <div class="icon-service">
                 <div class="img-icon">
                  <i class="fa fa-mobile"></i>
                 </div>
                <div class="listservice">Airtime</div>
            </div>
        </router-link>
            <router-link to="/dashboard">
            <div class="icon-service home">
                  <i class="fa fa-home" aria-hidden="true"></i>
              
            </div>
            </router-link>
            
            <router-link to="/tv">
            <div class="icon-service">
                <div class="img-icon">
                    <i class="fas fa-tv" aria-hidden="true"></i>
                </div>
                <div class="listservice">Tv</div>
            </div>
            </router-link>
            <router-link to="/electricity">
            <div class="icon-service">
                <div class="img-icon">
               <i class="fas fa-lightbulb" />
                </div>
                <div class="listservice">Cable</div>
            </div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name:"bottom-app",
}
</script>
<style>

.botom-con{
    max-width: 1519.20px;
    margin: 0px auto;
    width: 100%;
    padding: 10px;
    background: #fff;
    justify-content: center;
    display: flex;
    
    position: fixed;
    bottom: 0px;
    box-sizing: border-box;
    box-shadow: 0 0 3px rgb(31 30 47 / 5%);
    
   
}
.scnd-bottom{
    padding: 5px;
    justify-content: space-around;
    display: flex;
    width: 100%;
    box-sizing: border-box;
     
}
.icon-service{
    
    text-align: center;
    font-size: 12px;
}
.home{
     background: rgb(98, 54, 255);
    border: 1px solid rgb(98, 54, 255);
    margin-top:-30px;
    max-width: 50px;
    max-height: 50px;
    min-height: 40px;
    min-width: 40px;
    padding: 10px;
    border-radius: 100%;
box-shadow: 0 0 3px rgb(31 30 47 / 5%);


}
.img-icon{
    min-width: 30px;
    max-width: 30px;

}
.img-icon img{
width:15px
}
.home img{
width: 100%;
height: 100%;
}
@media screen and (max-width: 499px){
    .img-icon{
        max-width: 25px;
        width: 25px;
    }
    .home img{
        width: 70%;
        height: 70%;
    }
}
@media screen and (max-width:370px){
    .img-icon{
        max-width: 25px;
        width: 25px;
      
       
    }
    .home img{
        width: 80%;
        height: 80%;
    }
}
.fa-home{
    font-size: 2.7em;
    color: #ccc;
}
</style>