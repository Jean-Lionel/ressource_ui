<template>
    <div>
        <div class="login-component">
            <div>
                <div class="label-text">AUTHENTIFICATION</div>
                <div class="form-group">
                    <label for="login">NOM D'UTILISATEUR</label>
                    <input id="login" v-model="username"  type="text" name="">

                    <p class="text-danger" v-if="errorMessage.username">{{errorMessage.username[0]}} </p>
                </div>
                <div class="form-group">
                    <label for="password">MOT DE PASSE</label>
                    <input id="password" v-model="password"  type="password" name="">
                    <p class="text-danger" v-if="errorMessage.password">{{errorMessage.password[0]}} </p>
                </div>

                <div class="btn-login">
                    <button @click="seConnecter">SE CONNECTER</button>
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


<style scoped>

.label-text{
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 5px;
    line-height: 24px;

}

.login-component{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

label, input{
    display: block;
    width: 300px;
    text-align: left;
    padding: 5px;
}

.btn-login{
    text-align: right;
    margin-top: 20px;
}
button{
    width: 150px;
    cursor: pointer;
}

</style>