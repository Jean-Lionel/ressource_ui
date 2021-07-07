<template>

    <div>
        <div>
            <h4>AJOUTER UNE DEPARTEMENT</h4>
            <div>
                <div class="form-group">
                    <label for="name">NOM</label>
                    <input id="name" v-model="form.name" class="form-control" type="text" name="">
                </div>
                <div class="form-group">
                    <label for="name">DESCRIPTION</label>
                    <input id="name" v-model="form.description" class="form-control" type="text" name="">
                </div>

                <div class="form-group">
                    <button @click="saveDepartement">Enregistrer </button>
                    <div v-if="errorMessage">
                    
                    </div>
                </div>
            </div>
         </div>


    </div>
    
</template>

<script>
export default {
    data(){
          return{
            form: {
                 name: "",
                 description : ""
            },
            errorMessage: "",
          }
    }
    
}
</script>