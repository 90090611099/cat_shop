<template>
<div :style="{ display: display}">
    <div class="modal">
        <button @click="close" style="margin-left:96%">X</button>
        <h1>Choose payment method</h1>
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
    data() {
        

        },
    methods:{
        close(){
              return { display: 'none'        
        }
    }}
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
