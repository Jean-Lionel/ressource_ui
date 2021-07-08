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
						to="employes"
						active-class="active"
						tag="button"
						exact
					>
						<span class="link-name">Employes</span>
			</router-link>
            </li>
        </ul>

        </div>
        <slot></slot>

    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

ul li{
    display: inline-block;
    padding: 10px;
}

</style>