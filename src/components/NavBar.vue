<template>
    <div id="navbar">
        <router-link :to="{ name: 'home' }">Home</router-link> |
        <router-link :to="{ name: 'blog' }">Blog</router-link> |
        <router-link :to="{ name: 'store'}">Store</router-link>
    </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style lang="scss" scoped>
#navbar { width:100%; height: 30px; background-color:deeppink;
}
</style>
