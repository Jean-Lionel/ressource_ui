<template>
    <div>
        <h3>Liste des présences</h3>
        <div>
        <button @click="toggleModale">Nouvel présence</button>
        <input type="search" style="display: inline; margin: 0 20px;" />
        <button>Ok</button>
        </div>
         <modale ref="anyName" v-bind:toggleModale="toggleModale" v-bind:revele="revele">
           
            <div class="form-group">
                <label for="form.name">Matricule</label>
                <input type="text" v-model="form.name" id="form.name">
                 <p class="error"> {{errorMessage.name}}</p>
            </div>
            <div class="form-group">
                <label for="form.address">Temps d'arrivé</label>
                <input type="date" v-model="form.address" id="form.address">
                 <p class="error"> {{errorMessage.address}}</p>
            </div>

             <div class="form-group">
                <label for="form.address">Temps de depart</label>
                <input type="date" v-model="form.address" id="form.address">
                 <p class="error"> {{errorMessage.address}}</p>
            </div>
           

             <div class="form-group">
                <button @click="updateConge" v-if="bank_id"> Modifier </button>
                <button @click="saveConge" v-else> Enregistrer </button>
                
            </div>

        </modale>

        <table>
            <thead>
                <tr>
                    <th>MATRICULE</th>
                    <th> NOM ET PRENOM </th>
                    <th> SERCIVE </th>
                    <th> TEMPS D'ARRIVÉ </th>
                    <th> TEMPS DE DEPART </th>
                    <th>ACTION</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="i in 5" :key="i" >
                    <td>000{{i}}</td>
                    <td>Nom  prenom {{i}}</td>
                    <td>Informatique {{i}}</td>
                    <td>{{new Date().toLocaleString()}}</td>
                    <td>{{new Date().toLocaleString()}}</td>
                    <td>
                        <button>Arrivé</button>
                        <button>Deppart</button>
                        <button>Anullé</button>
                    </td>
                </tr>
            </tbody>

        </table>
    </div>
</template>

<script>
import axios from 'axios';
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
            axios.get(this.baseURL+"/leave/",this.header)
            .then(res => {
                console.log(res)
                this.$store.state.conges = res.data.results
            })
            .catch(err => {
                console.error(err); 
            })
        },
        toggleModale(){
            this.revele = !this.revele
        },
    }

}
</script>

<style>

</style>