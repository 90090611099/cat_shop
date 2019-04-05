<template>
  <div>
    <section class="wrapper">
      <div class="flex-col">
        <img :src="getImage(product)">
        <div class="flex-col--2">
          <h2>{{ product.name }}</h2>
          <p>Price: ${{ product.price }}</p>
          <button 
              @click="addToCart"
              :disabled="buttonBlock"
              >Add to Cart</button>
          <p>Size: {{ product.size }}</p>
          <p>Color: {{ product.color }}</p>
          <p>
            <em>{{ product.quantity }} left in stock</em>
          </p>
          <h3>Details</h3>
          <ul>
            <li>Material: {{ product.details.material }}</li>
            <li>Fit: {{ product.details.fit }}</li>
            <li>Maintenance: {{ product.details.maintenance }}</li>
            <li v-if="product.details.additional">Additional: {{ product.details.additional }}</li>
          </ul>
          <router-link :to="{name: 'home'}" tag="button">Back to Home page</router-link>
          <button @click="backToLastCart">back to last cart</button>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import getImage from "../mixins/getImage.js";

export default {
  name: "Product",
  mixins: [getImage],
  data(){
    return {
      buttonBlock: false,
    }
  },
  methods: {
    getImage(product) {
      return require(`../assets/druk${product.images[0]}.jpg`);
    },
    backToLastCart() {
      this.$router.go(-1);
    },
    addToCart() {
      this.buttonBlock = true;
      this.$store.commit('addToCart', this.$route.params.id)
      this.$store.commit('decrementProductInventory', this.$route.params.id)
    }
  },
  computed: {
    product() {
      return this.$store.getters.product(this.$route.params.id);
    }
  }
};
</script>


<style lang="scss" scoped>
.flex-col {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
}
.flex-col--2 {
  width: 50%;
}
</style>