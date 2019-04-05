
<template>
  <div class="wrapper">
    <h1>Cart</h1>
    <h4 v-if="cartItems.length === 0">your cart is empty NYGA!</h4>

    <ul class="cart-list" v-for="item in cartItems" :key="item.id">
      <div class="flex-col cart-list__item__details">
        <p>{{cartItems.indexOf(item)+1}}</p>

        <img :src="getImage(item)" class="thumbnail">
        <span>
          <p>{{ item.name }}</p>
          <p>Size: {{ item.size }}</p>
          <p>Color: {{ item.color }}</p>
          <p>${{ item.price }}</p>
        </span>
        <button @click="removeFromCart(item.id)" class="btn cart-list__btn-remove">Remove</button>
      </div>

      <hr>
    </ul>
    <section class="total-section">
      <h2>Shipping options:</h2>
      <ul class="total-section-list">
        <li class="total-section__item">
          <h4 class="total-section__item__label">Items in Cart: {{cartItemsCount}}</h4>

          <select v-model="selectedShippingOption">
            <option disabled value>Choose a shipping option</option>
            <option
              v-for="option in ShippingTime"
              :value="option"
              :key="option.rate"
            >{{option.time}}-{{option.rate}} $</option>
          </select>
          <span>
            <h4>Products Cost: {{totalItemsCost}} $</h4>
            <h4>Shipping Cost: {{selectedShippingOption.rate}} $</h4>
            <h4>Total Cost: {{totalCost}} $</h4>
          </span>
          <button @click="modalComponent"> Go to payment section </button>
        </li>
      </ul>
    </section>
          <span v-if="showModal">
              <modal/>
          </span>
  </div>
</template>

<script>
import getImage from "../mixins/getImage"
import modal from "../components/modal";

export default {
components: {
        modal
    },
  name: "cart",
  mixins: [getImage],
  data() {
    return {
      title: "Cart",
      selectedShippingOption: "",
      showModal: false,
      ShippingTime: [
        { time: "1 day", rate: 10 },
        {
          time: "2 days",
          rate: 8
        },
        {
          time: "3 days",
          rate: 5
        }
      ]
    };
  },
  methods: {
    removeFromCart(itemId) {
      this.$store.commit("removeFromCart", itemId);
      this.$store.commit("incrementProductInventory", itemId);
      if(this.cartItemsCount === 0){
          this.selectedShippingOption = ""
      }
      },
      modalComponent() {
          this.showModal = true;
        console.log('payment now!')               
    } 
  },
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
    totalItemsCost() {
      return this.cartItems.reduce((total, item) => total + item.price, 0);
    },
    cartItemsCount() {
      return this.cartItems.length;
    },
    totalCost() {
      if (!this.selectedShippingOption) {
        return this.totalItemsCost;
      } else {
        return this.totalItemsCost + this.selectedShippingOption.rate;
      }
    }
  }
};
</script>




<style lang="scss">
.cart-list {
  width: 50%;
  @media only screen and (max-width: 832px) {
    width: 100%;
  }
}
.cart-list__item {
  width: 100%;
  border-bottom: 1px solid #2c3e50;
}
.cart-list__item__details {
  justify-content: start;
  margin-left: 2rem;
  display: flex;
}
.cart-list__btn-remove {
  margin-top: 0.5rem;
  height: 30px;
  &:hover {
    color: red;
  }
}
.thumbnail {
  width: 200px;
  height: 200px;
}

.total-section {
  background: #fafafa;
  padding: 0 1rem 1rem;
  min-width: 33%;
}
.total-section-list {
  margin: 0;
}
.total-section__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.total-section__item__label {
  font-weight: bold;
  margin-right: 1rem;
}
</style>