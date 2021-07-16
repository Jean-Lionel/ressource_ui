<template>
<div>

    <div>
    <h3>Liste des banques</h3>
    <button @click="toggleModale">Ajouter une banque</button>

        <modale ref="anyName" v-bind:toggleModale="toggleModale" v-bind:revele="revele">
            <div class="form-group">
                <label for="form.name">DESIGNATION</label>
                <input type="text" v-model="form.name" id="form.name">
                 <p class="error"> {{errorMessage.name}}</p>
            </div>
            <div class="form-group">
                <label for="form.address">ADDRESSE</label>
                <input type="text" v-model="form.address" id="form.address">
                 <p class="error"> {{errorMessage.address}}</p>
            </div>
           

             <div class="form-group">
                <button @click="updateBank" v-if="bank_id"> Modifier </button>
                <button @click="saveBank" v-else> Enregistrer </button>
                
            </div>

        </modale>

    <modale >

    </modale>
    <table>
        <thead>
            <tr>
            <th>DESIGNATION</th>
            <th>ADDRESSE</th>
            <th>ACTION</th>
            </tr>
        </thead>
        <tbody>
           
           <tr v-for="bank in banques" :key="bank.id">
           <td>{{bank.name}}</td>
           <td>{{bank.address}}</td>
           <td>
                <button class="fa fa-edit" @click="editBanque(bank)"></button>
                <button class="fa fa-trash" @click="deleteBanque(bank.id)"></button>
           </td>
           </tr>
        
        </tbody>

    </table>
    </div>

</div>
    
</template>

<script>
import axios from 'axios'
import Modale from '../components/Modale.vue';
export default {
    components:{Modale},
    data(){
       return{
           revele : false,
           form : {
               name: "",
               address : ""
           },
           errorMessage : "",
           bank_id : ""
        }
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        fetchData(){
            axios.get(this.baseURL+"/bank/",this.header)
            .then(res => {
                console.log(res)
                this.$store.state.banques = res.data.results
            })
            .catch(err => {
                console.error(err); 
            })
        },
        deleteBanque(id){

            if(confirm("êtes-vous sûr ? ")){
                axios.delete(this.baseURL+"/bank/"+ id+"/", this.header)
                .then(res => {
                this.fetchData();
                })
                .catch(err => {
                    this.errorMessage = err.response.data
                    console.error(err); 
                })

            }
            

        },
        updateBank(){
              axios.put(this.baseURL+"/bank/"+ this.bank_id+"/",this.form, this.header)
            .then(res => {
              this.fetchData();
              this.toggleModale()
            })
            .catch(err => {
                this.errorMessage = err.response.data
                console.error(err); 
            })


        },
        saveBank(){
            axios.post(this.baseURL+"/bank/",this.form, this.header)
            .then(res => {
              this.fetchData();
              this.toggleModale()
            })
            .catch(err => {
                this.errorMessage = err.response.data
                console.error(err); 
            })
        },
        toggleModale(){
            this.revele = !this.revele 
              this.form = {
               name: "",
               address : ""
           },
           this.errorMessage = ""
           this. bank_id  = ""
        },
        editBanque(bank){
            this.revele = !this.revele 
            this.form = {
               name: bank.name,
               address: bank.address,
           }
           this.bank_id  = bank.id
          
        }
    },
    computed:{
        banques(){
            return this.$store.state.banques
        }
    }
    
}
</script>