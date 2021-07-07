<template>
    <div>
        <div>
            <div>
                <div>AUTHENTIFICATION</div>
                <div class="form-group">
                    <label for="login">NOM D'UTILISATEUR</label>
                    <input id="login" v-model="username"  type="text" name="">
                </div>
                <div class="form-group">
                    <label for="password">MOT DE PASSE</label>
                    <input id="password" v-model="password"  type="password" name="">
                </div>

                <div class="form-group">
                    <button @click="seConnecter">SE CONNECTER</button>
                </div>

                <div v-if="errorMessage">
                    <p class="text-danger">{{errorMessage}} </p>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {

    data(){
        return{
            username: "",
            password: "",
            errorMessage : ""
        }
    },
    methods:{

        seConnecter(){
            axios.post(this.$store.state.url+"/login/",{
                 "username" : this.username,
                  "password" : this.password
            })
            .then(res => {
                 this.$store.state.user = res.data 
                console.log(res)
            })
            .catch(err => {
                console.error(err); 
                this.errorMessage = err.response.data
            })
        }
    }
}
</script>


<style>
.text-danger{
    color: red;
}

</style>