<template>

    <div>
        <div>
            <h4>AJOUTER UNE DEPARTEMENT</h4>
            <div>
                <div class="form-group">
                    <label for="name">NOM</label>
                    <input id="name" v-model="form.name" class="form-control" type="text" name="">
                </div>
                <div class="form-group">
                    <label for="name">DESCRIPTION</label>
                    <input id="name" v-model="form.description" class="form-control" type="text" name="">
                </div>

                <div class="form-group">
                    <button @click="saveupdateRole" v-if="update">Modifier </button>
                    <button @click="saveDepartement" v-else>Enregistrer </button>
                    <div v-if="errorMessage">
                     <p class="error">{{ errorMessage}}</p>
                    </div>
                </div>
            </div>

            <div>
               <role-liste  @updateRole="updateRole" @deleterole="deleterole"/>
            </div>
         </div>


    </div>
    
</template>

<script>
import axios from 'axios'
import DepartementList from '../components/DepartementList.vue'
import RoleListe from '../components/RoleListe.vue'
export default {
  components: { DepartementList, RoleListe },
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
            axios.post(this.baseURL+"/role/",this.form,this.header)
            .then(res => {
                console.log(res)
                 this.fetchData()
            })
            .catch(err => {
                console.error(err); 
                this.errorMessage = err.response.data
            })
        },
        saveupdateRole(){

            axios.put(this.baseURL+"/role/"+this.departement_id +"/",this.form,this.header)
            .then(res => {
                console.log(res)
                 this.fetchData()
            })
            .catch(err => {
                console.error(err); 
            })

        },
        updateRole(dep){
            this.form.name = dep.name
            this.form.description = dep.description
            this.update = true
            this.departement_id = dep.id
        },
        fetchData(){
            axios.get(this.baseURL+"/role/",this.header)
            .then(res => {
                this.$store.state.roles = res.data.results
            })
            .catch(err => {
                console.error(err); 
            })
        },

        deleterole(dep){
            axios.delete(this.baseURL+"/role/"+dep+"/",this.header)
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