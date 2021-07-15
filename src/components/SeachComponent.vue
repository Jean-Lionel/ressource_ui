<template>
    <div>
       <input  type="text" placeholder="Rechercher !!" v-model="searchKey"  />
      {{searchKey}}
    </div>
</template>

<script>
export default {

    data(){
        return{
            searchKey : "lione"
        }
    },
    watch:{
        searchKey( newValue){
            this.$store.state.keySearch = newValue
        }

    },
    components:{
        makeSearch(){
            
        }

    }
    
}
</script>