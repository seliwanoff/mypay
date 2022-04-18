<script>
import { RouterLink, RouterView } from "vue-router";
import { mapGetters } from "vuex";
import Footer from './components/footer.vue'
 
 export default {
  name:'app',
  components: {
    Footer,
    RouterLink,
    RouterView
   
  
   
  },
 computed:{
     ...mapGetters(['user'])
   }
}

</script>
<template>
  <div>
  
  <router-view></router-view>
 
  <Footer/>
 
</div>
  
</template>

<style>
*{
  text-decoration: none;
  padding: 0px;
  margin:0px;
}
</style>
