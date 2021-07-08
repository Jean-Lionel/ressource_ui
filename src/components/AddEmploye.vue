<template>
    <div>
        <button @click="toggleModale">Ajouter</button>
        <modale v-bind:toggleModale="toggleModale" v-bind:revele="revele">
             <div class="form-group">
                <label for="form.emp_id">NOM ET PRENOM</label>
                <input type="text" v-model="form.emp_id" id="form.emp_id">
            </div>
            <div class="form-group">
                <label for="form.mobile">TELEPHONE</label>
                <input type="text" v-model="form.mobile" id="form.mobile">
            </div>
            <div class="form-group">
                <label for="form.title">TITRE</label>
                
                <select v-model="form.title" id="form.title">
                    <option v-for="title in personneTitle" v-bind:value="title" :key="title">{{title}}</option>
                </select>
            </div>
            <div class="form-group">
                <label for="form.title">GENRE</label>
                <select v-model="form.gender" id="form.title">
                    <option v-for="genre in genderList" v-bind:value="genre" :key="genre">{{genre}}</option>
                </select>
            </div>
            <div class="form-group">
                <label for="form.title">ETAT CIVILE</label>
                <select v-model="form.status" id="form.title">
                    <option v-for="status in etat_civil" v-bind:value="status" :key="status">{{status}}</option>
                </select>
            </div>
            <div class="form-group">
                <label for="form.address">Addresse</label>
                <input type="text" v-model="form.address" id="form.address">
            </div>
            <div class="form-group">
                <label for="form.birthday">DATE DE NAISSANCE</label>
                <input type="date" v-model="form.birthday" id="form.birthday">
            </div>

             <div class="form-group">
                <label for="form.education">Education </label>
                <select v-model="form.education" id="form.education">
                    <option v-for="education in educationLevel" v-bind:value="education" :key="education">{{education}}</option>
                </select>
            </div>
             <div class="form-group">
                <label for="form.employeetype">TYPE D'EMPLOYE </label>
                <select v-model="form.employeetype" id="form.employeetype">
                    <option v-for="type in employe_type" v-bind:value="type" :key="type">{{type}}</option>
                </select>
            </div>
       
            <div class="form-group">
      
                <label for="form.role">ROLE</label>
                 <select v-model="form.role" id="form.role">
                    <option v-for="role in roles" v-bind:value="role.id" :key="role.id">{{role.name}}</option>
                </select>
            </div>
            <div class="form-group">
      
                <label for="form.department">DEPARTMENT </label>
                 <select v-model="form.department" id="form.department">
                    <option v-for="department in departments" v-bind:value="department.id" :key="department.id">{{department.name}}</option>
                </select>
            </div>
            <div v-if="errorMessage">
                <p class="error"> {{errorMessage}}</p>
            </div>

            <div>
                <button @click="saveMember">Enregistrer</button>
            </div>
        </modale>
    </div>
</template>

<script>
import Modale from './Modale.vue'
import axios from 'axios'
export default {
  components: { Modale },
    data(){
        return{
            revele: false,
            form : {
                emp_id : "",
                mobile : "",
                title : "",
                status : "",
                address : "",
                gender : "",
                birthday : "",
                education : "",
                employeetype : "",
                profile : 1,
                department : "",
                role : "",
            },
            errorMessage : "",

        }
    },
    mounted() {
        this.initializeData();
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
        saveMember(){
            
            axios.post(this.baseURL+"/employee/",this.form, this.header)
            .then(res => {
                console.log(res)
                this.fetchData()
                this.revele = !this.revele
            })
            .catch(err => {
                
                this.errorMessage = err.response.data
            })
        },
        toggleModale(){
            this.revele = !this.revele
        },
        initializeData(){
             axios.get(this.baseURL+"/role/",this.header)
            .then(res => {
                this.$store.state.roles = res.data.results
            })
            .catch(err => {
                console.error(err); 
            })
             axios.get(this.baseURL+"/department/",this.header)
            .then(res => {
                this.$store.state.departments = res.data.results
            })
            .catch(err => {
                console.error(err); 
            })
        }
        
    },
    computed:{
        roles(){
            return this.$store.state.roles
        },
        departments(){
            return this.$store.state.departments
        }
    }
    
}
</script>>
