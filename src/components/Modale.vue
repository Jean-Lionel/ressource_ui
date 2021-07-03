<template>

    <div class="block_modale" v-if="revele">
        <div class="overlay"></div>
        <div class="modal card">
            <div class="btn_close" @click="toggleModale">X</div>
            <div>
                <slot></slot>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "modale",
    props: ['toggleModale', 'revele']
    
}
</script>

<style scoped>

.block_modale{
    position:fixed;
    bottom:0;
    top:0;
    left:0;
    right:0;
    width:100%;
    height:100%;
    display: flex;
    justify-content:center;
    align-items:center;
    overflow-x: scroll;
}

.overlay{
    background: rgba(0,0,0,0.1);
    position:fixed;
    bottom:0;
    top:0;
    left:0;
    right:0;
}

.modal{
    background: #FFFFFF;
    color: #2c3e50;
    position:absolute;
    padding: 50px;
    top:10%;
    overflow: auto;

   
}

.btn_close{
    position:absolute;
    top:5px;
    right:5px;
    background:red;
    padding: 5px;
    cursor: pointer;

}

</style>