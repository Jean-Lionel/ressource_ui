<template>
    <div>
        <div>
        <ul>
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
						to="employes"
						active-class="active"
						tag="button"
						exact
					>
						<span class="link-name">Employes</span>
			</router-link>
            </li>
            <li>
                <button @click="logout">Se Déconnecter </button>
            </li>
        </ul>

        </div>
        <slot></slot>

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

ul li{
    display: inline-block;
    padding: 10px;
}

</style>