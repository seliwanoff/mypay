<template>
   <div class="message" >
        <span v-if="getstatus==true">
        <div class="ntoify-heade">
            <div class="notification">
                Notification
            </div>
        <div class="main-message">
            <h2>Success</h2>
            <h3>{{getdata}}</h3>
        </div>
        </div>
     </span>
     <span v-if="getstatus==false">
      <div class="changecolorfalse">
            <div class="notification">
                Notification
            </div>
        <div class="main-message">
            <h3>{{getdata}}</h3>
        </div>
        </div>
     </span>
   
    </div>
</template>
<script>
export default {
    name:'message-app',
    props: [
        'getdata',
        'getstatus'
    ]
}
</script>
<style scoped>
.message{
    position: fixed;
    max-width: 1400px;
    width:100%;
     z-index: 1000000;
     box-sizing: border-box;
     display: flex;
     justify-content: center;
    }
    .ntoify-heade{
        border:1px solid rgb(3, 189, 3);
        box-sizing: border-box;
        margin: 3px;
        border-radius: 10px;
        background: rgb(3, 189, 3);
        width: 100%;
        

    }
    .changecolorfalse{
    
     border:1px solid crimson;
        box-sizing: border-box;
        margin: 3px;
        border-radius: 10px;
        background: crimson;
    
    }
    .notification{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 14px;
    text-align: left;
    color: #ccc;
    font-weight: 700;
    padding: 10px;
    border-bottom: 1px solid #ccc;

    }
    .main-message{
        padding: 10px;
        width: 100%;
        margin:10px;
        color: #ccc;
        font-size: 20px;

    }
    .main-message h3{
        font-size: 15px;
        color:#ccc;
        font-weight: 300;
    }
    .main-message h2{
        font-weight:500;
        color:#ccc;
        font-size:14px
    }
    @media screen and (max-width:499px) {
         .notification{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 12px;
    text-align: left;
    color: #ccc;
    font-weight: 500;
    padding: 10px;
    border-bottom: 1px solid #ccc;

    }
    .main-message{
        padding: 5px;
        width: 100%;
        margin:5px;
        color: #ccc;
        font-size: 14px;

    }
    .main-message h3{
        font-size: 10px;
        color:#ccc;
    }
    .main-message h2{
        font-size: 12px;
        color:#ccc;
        font-weight: 500;
    }
    }
    .redbackground{
    background: crimson !important;
    border:  1px solid crimson !important;
    }
    span{
        width: 95%;
        box-sizing: border-box;
        max-width: 100%;
    }
</style>