<template>

    <div>
        <div class="department">
            
            <div>
                <h4>AJOUTER UNE DEPARTEMENT</h4>
                <div class="form-group">
                    <label for="name">NOM</label>
                    <input id="name" v-model="form.name" class="form-control" type="text" name="">
                </div>
                <div class="form-group">
                    <label for="name">DESCRIPTION</label>
                    <input id="name" v-model="form.description" class="form-control" type="text" name="">
                </div>

                <div class="form-group">
                    <button @click="saveUpdateDepartement" v-if="update">Modifier </button>
                    <button @click="saveDepartement" v-else>Enregistrer </button>
                    <div v-if="errorMessage">
                     <p class="error">{{ errorMessage}}</p>
                    </div>
                </div>
            </div>

            <div>
                <h4> TOUS LES  DEPARTEMENTS</h4>
               <departement-list  @updateDepartement="updateDepartement" @deleteDepartement="deleteDepartement"/>
            </div>
         </div>


    </div>
    
</template>

<script>
import axios from 'axios'
import DepartementList from '../components/DepartementList.vue'
export default {
  components: { DepartementList },
    data(){
          return{
            form: {
                 name: "",
                 description : ""
            },
            errorMessage: "",
            update : false,
            departement_id : ""
          }
    },
    mounted() {
        this.fetchData()
    },
    methods: {
        saveDepartement(){
            //console.log(this.baseUrl,this.form,this.header)
            axios.post(this.baseURL+"/department/",this.form,this.header)
            .then(res => {
                console.log(res)
                 this.fetchData()
            })
            .catch(err => {
                console.error(err); 
                this.errorMessage = err.response.data
            })
        },
        saveUpdateDepartement(){

            axios.put(this.baseURL+"/department/"+this.departement_id +"/",this.form,this.header)
            .then(res => {
                console.log(res)
                 this.fetchData()
            })
            .catch(err => {
                console.error(err); 
            })

        },
        updateDepartement(dep){
            this.form.name = dep.name
            this.form.description = dep.description
            this.update = true
            this.departement_id = dep.id
        },
        fetchData(){
            axios.get(this.baseURL+"/department/",this.header)
            .then(res => {
                this.$store.state.departements = res.data.results
            })
            .catch(err => {
                console.error(err); 
            })
        },

        deleteDepartement(dep){
            axios.delete(this.baseURL+"/department/"+dep+"/",this.header)
            .then(res => {
                console.log(res)
                this.fetchData()
            })
            .catch(err => {
                console.error(err); 
            })
        }
    },
    
}
</script>

<style scoped>
.department{
    display: flex;
}
</style>