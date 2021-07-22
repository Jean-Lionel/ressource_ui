<template>
    <div>
        <h1>Liste de paie</h1>
        
        <div class="button_liste">
            Du <input type="date"/> Au <input type="date"/> <button>OK</button>
         </div>
        <button>Imprimer</button>
        <table>
            <thead>
                <tr>
                    <th>NUMERO</th>
                    <th>DATE</th>
                    <th>NOM ET PRENOM</th>
                    <th>BANQUE</th>
                    <th>COMPTE</th>
                    <th>MONTANT</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="i in 10" :key="i">
                    <td>{{ i }}</td>
                    <td>{{ datetime(new Date()) }}</td>
                    <td>nom prenom</td>
                    <td>BANCOBU</td>
                    <td>{{ Math.random() * 1200 }}</td>
                    <td>{{ money(2000 * i) }}</td>
                </tr>
            </tbody>

        </table>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.button_liste{
    display: flex;
}

</style>