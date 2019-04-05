<template>
<div :style="{display:block}">
    <div class="modal">
        <h1>Choose payment method</h1>
        <button @click="close">X</button>
        <ul>
            <li>paypal</li>
            <li>payYou</li>
            <li>cash</li>
        </ul>
            
    </div>
    </div>
</template>

<script>
export default {
    name: 'modal',
    methods:{
        close(){
            
        }

    }
}
</script>

<style lang="scss" scoped>
    .modal{
        width:500px;
        height:200px;
        border:1px solid black;
        background: deeppink;
        margin-left: auto;
        margin-right: auto;
        text-align: center
}
</style>
