<template>
    <div id="navbar">
        <router-link :to="{ name: 'home' }">Home</router-link> |
        <router-link :to="{ name: 'blog' }">Blog</router-link> |
        <router-link :to="{ name: 'store'}">Store</router-link>|
        <router-link :to="{ name: 'cart'}">Cart ({{CartItemsCounter}})</router-link>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    computed: {
        CartItemsCounter(){
            return this.$store.getters.cartItemsLength
        }
    }
}
</script>





<style lang="scss" scoped>
#navbar { width:100%; height: 30px; background-color:deeppink;display: flex;justify-content: space-evenly;
a {    padding-top:7px

}
}
</style>
