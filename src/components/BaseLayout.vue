<template>
    <div class="baseLayout">
        
        <ul class="link-list">
                <li>
                <router-link
                            to="departement"
                            active-class="active"
                            tag="button"
                            exact
                        >
                        
                            <span class="link-name">Departements</span>
                </router-link>
                </li>

                <li>  
                <router-link
                            to="role"
                            active-class="active"
                            tag="button"
                            exact
                        >
                        
                            <span class="link-name">Rôle</span>
                </router-link>
                </li>

                <li>  
                    <router-link
                                to="bank"
                                active-class="active"
                                tag="button"
                                exact
                            >
                                <span class="link-name">Banque</span>
                    </router-link>
                </li> 
                <li>  
                    <router-link
                                to="presences"
                                active-class="active"
                                tag="button"
                                exact
                            >
                                <span class="link-name">Présence</span>
                    </router-link>
                </li>

                 <li>  
                    <router-link
                                to="conges"
                                active-class="active"
                                tag="button"
                                exact
                            >
                                <span class="link-name">Congées</span>
                    </router-link>
                </li>

                <li>
                
                <router-link
                            to="employes"
                            active-class="active"
                            tag="button"
                            exact
                        >
                            
                            <span class="link-name">Employes</span>
                </router-link>
                </li>

                <li> 
                <router-link
                            to="paiements"
                            active-class="active"
                            tag="button"
                            exact
                        >
                            
                            <span class="link-name">Paiements</span>
                </router-link>
                </li>

                 <li> 
                <router-link
                            to="rapport"
                            active-class="active"
                            tag="button"
                            exact
                        >
                            
                            <span class="link-name">Rapport</span>
                </router-link>
                </li>




                <li class="logout">
                        
                        <button @click="logout">Se Déconnecter </button>
                </li>
        
        </ul>

        <div class="slot-view"> 
        <slot></slot>
        
        </div>

        
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        logout(){
            if (confirm("êtes vous sur de vouloir vous déconnecter?")) {
				localStorage.removeItem("user");
				window.location = "/";
			}
        }
    }
    
}
</script>

<style scoped>
    .baseLayout{
        display: flex;
        align-items: stretch;
        display: flex;
        height: 100vh; 
    }

    .slot-view{
        width: 100%;
    }

    .link-list{
        display: flex;
        flex-direction: column;
        align-content: flex-end;
        background: rgb(30, 63, 97);
        list-style: none;
        text-align: left;

    }

    .link-list a{
        color: #fff;
        text-decoration: none;
        font-size: 20px;
        margin-top : 20px;
    }
    .link-list a i {
        display: block;
    }
    .logout{
        position: absolute;
        bottom: 20px;
    }

   

</style>