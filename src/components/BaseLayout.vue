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
						<span class="link-name">Departement</span>
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