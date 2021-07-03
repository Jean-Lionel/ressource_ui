<template>
    <div>
        <modale v-bind:revele="revele" :toggleModale="toggleModale" >
            
            <input class="form-control" type="number" v-model="number1"> + 
            <input class="form-control" type="number" v-model="number2"> = <b>{{ result }}</b>
           
            <button @click="helloWorld">Enregistrer</button>
        </modale>
        <button @click="toggleModale">OpenModate</button>
    </div>

</template>

<script>
import Modale from '../components/Modale.vue'
export default {
  components: { Modale },

  data() {
      return {
          revele : false,
          number1 : 0,
          number2 : 0,
          result : 0
      }
  },
  methods: {
      toggleModale(){
          this.revele = !this.revele;
      },
      helloWorld(){
          this.result = this.number1 *1 + this.number2 * 1
      }
  },
    
}
</script>

<style>
.test{
    border: 20px solid black;
}
</style>