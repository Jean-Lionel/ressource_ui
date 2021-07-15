<template>
    <div>
        <add-employe />
        <seach-component />
        <div>
            <table>
                <thead>
                <tr>
                <th>id </th>
                <th>CNI </th>
                <th>mobile </th>
                <th>title </th>
                <th>status </th>
                <th>thumb </th>
                <th>address </th>
                <th>gender </th>
                <th>joined </th>
                <th>birthday </th>
                <th>education </th>
                <th>employeetype </th>
                <th>profile </th>
                <th>department </th>
                <th>role </th>
                <th>ACTION </th>
                </tr>

                </thead>

                <tbody>
                    <tr v-for="employe in employes" :key="employe.id" >
                        <td> {{employe.id }} </td>
                        <td> {{employe.emp_id }} </td>
                        <td> {{employe.mobile }} </td>
                        <td> {{employe.title }} </td>
                        <td> {{employe.status }} </td>
                        <td> {{employe.thumb }} </td>
                        <td> {{employe.address }} </td>
                        <td> {{employe.gender }} </td>
                        <td> {{datetime(employe.joined) }} </td>
                        <td> {{datetime(employe.birthday) }} </td>
                        <td> {{employe.education }} </td>
                        <td> {{employe.employeetype }} </td>
                        <td> {{employe.profile }} </td>
                        <td> {{employe.department }} </td>
                        <td> {{employe.role }} </td>
                        <td>
                            <button title="Modifier" @click="updatEmploye(employe)"><i class="fa fa-edit" ></i></button>
                            <button title="Delete" @click="deleteEmploye(employe)"><i class="fa fa-trash" ></i></button>
                            
                        </td>
                    </tr>

                </tbody>
            </table>

        </div>

        
    </div>
</template>

<script>
import AddEmploye from '../components/AddEmploye.vue'

import Modale from '../components/Modale.vue'

import axios from 'axios'
import SeachComponent from '../components/SeachComponent.vue'

export default {
  components: { Modale, AddEmploye, SeachComponent  },
  data(){
      return{
          selectedEmploye : null
      }
  },
  watch:{
    //   "$store.state.keySearch"(new_val){
    //      // this.$store.state.employes = this.$store.state.employes.filter(a => false)
    //   }
  },
  mounted() {
      this.fetchData()
  },
  computed: {
      employes(){
          return this.$store.state.employes 
      },
  },
  methods: {
      fetchData() {
          axios.get(this.baseURL+"/employee/",this.header)
          .then(res => {
              this.$store.state.employes = res.data.results
          })
          .catch(err => {
              console.error(err); 
          })

      },
      updatEmploye(employe){
         
         this.$store.state.selectedEmploye = employe
         
      },
      deleteEmploye(employe){
           axios.delete(this.baseURL+"/employee/"+employe.id+"/",this.header)
          .then(res => {
              this.fetchData()
              //console.log(res)
          })
          .catch(err => {
              console.error(err); 
          })

      }
      
  },
    
}
</script>

<style scoped>

</style>