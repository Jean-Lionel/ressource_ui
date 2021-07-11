<template>

  <div id="app">

    <base-layout v-if="logged_in">
      <router-view/>
    </base-layout>

    <login v-else/>

  </div>
  
</template>

<script>
import BaseLayout from './components/BaseLayout.vue';
import Login from './components/Login.vue';
export default {
  components: { BaseLayout, Login },
  data(){
    return{
        logged_in: !!this.$store.state.user
      }
  },
  watch:{
      "$store.state.user" : {
        deep : true,
        handler(new_val){
          localStorage.setItem('user', JSON.stringify(new_val));
         
          if(!!new_val.access){
            this.logged_in = true;
          }
        }
      }
  },
  mounted() {
     var user = JSON.parse(localStorage.getItem('user'));
        if (user) {
          this.$store.state.user = user;
          this.logged_in = false;
        } else {
          console.warn("il y'a pas de session");
        }
      
  },
  methods:{
    performLogin(user){
        console.log(user)
        this.logged_in=true;
      },

  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
