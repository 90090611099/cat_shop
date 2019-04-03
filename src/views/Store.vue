<template>
  <div class="store">
    <h1>{{title}}</h1>
      <section class="wrapper">
      <h3>Items</h3>
      <ul class="featured-items">
        <li v-for="product in products" :key="product.id" class="featured-items__item">
          <img class="product-image" :src="getImage(product)">
          <p class="product-title">{{ product.name }}</p>
          <p><em>{{ product.price }} PLN</em></p>
        </li>
      </ul>
    </section>
  </div>
</template>


<script>
export default {
  name: 'home',
  data(){
    return {
      title: 'This is my store'
  }},
  computed:{
    products(){
      return this.$store.state.products
    }
  },
    methods:{
      getImage(product) {
        return require(`../assets/druk${product.images[0]}.jpg`)
      }
    } 
  }  

</script>

<style lang="scss">
.wrapper {
 
  margin: 0 auto;
  @media only screen and (max-width: 832px) {
    max-width: 100%;
    padding: 1rem;
    text-align: center;
  }
}
.featured-items {
  padding-left: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 832px) {
    flex-direction: column;
  }
}
.featured-items__item {
  width: 33%;
  text-align: center;
  @media only screen and (max-width: 832px) {
    width: 100%;
  }
}
.product-image {
  max-height: 200px;
}
.product-title {
  font-weight: bold;
}
img {
  width:250px
}
</style>
