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
                <tr v-for="role in roles" :key="role.id">
                    <td>{{role.name}}</td>
                    <td>{{role.description}}</td>
                    <td>
                        <button @click="modifierRole(role)" title="Modifier"><i class="fa fa-edit" ></i></button>
                        <button @click="deleterole(role.id)" title="Modifier"><i class="fa fa-trash" ></i></button>
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
        
        modifierRole(role){
            //console.log(role)
            this.$emit('updateRole', role)
        },
        deleterole(dep){
            if(confirm('êtes-vous sûr ? ')){
                this.$emit('deleterole', dep)
            }
            
        }

    },
    computed:{
        roles(){
            return this.$store.state.roles
        }
    }
}
</script>