export default {
    methods: {
      getImage(product) {
        return require(`../assets/druk${product.images[0]}.jpg`);
      }
    }
};
