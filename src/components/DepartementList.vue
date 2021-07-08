<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>DESCRIPTION</th>
                    <th>ACTION</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="departement in departements" :key="departement.id">
                    <td>{{departement.name}}</td>
                    <td>{{departement.description}}</td>
                    <td>
                        <button @click="modifierDepeartement(departement)" title="Modifier"><i class="fa fa-edit" ></i></button>
                        <button @click="deleteDepartement(departement.id)" title="Modifier"><i class="fa fa-trash" ></i></button>
                    </td>
                </tr>
            </tbody>

        </table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return{
        }
    },
    mounted () {
       
    },
    methods: {
        
        modifierDepeartement(dep){
            this.$emit('updateDepartement', dep)
        },
        deleteDepartement(dep){
            if(confirm('êtes-vous sûr ? ')){
                this.$emit('deleteDepartement', dep)
            }
            
        }

    },
    computed:{
        departements(){
            return this.$store.state.departements
        }
    }
}
</script>