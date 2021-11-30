<template>
  <div class="product">
    <div class="product-image">
      <img :src="image" :alt="altText" />
    </div>

    <div class="product-info">
      <h1>{{ title }}</h1>
      <p v-if="inStock > 10">In stock</p>
      <p v-else-if="inStock <= 10 && inStock > 0">Almost sold out!</p>
      <p v-else>Out of stock</p>
      <p>{{ sale }}</p>
      <p>Shipping: {{ shipping }}</p>
      <ProductDetails :details="details" />
      <div
        class="color-box"
        v-for="(variant, index) of variants"
        :key="variant.variantId"
        :style="{ backgroundColor: variant.variantColor }"
        @mouseover="updateProduct(index)"
      ></div>
      <div>
        <span v-for="size of sizes" :key="size">{{ size }}, </span>
      </div>
      <span v-if="onSale">On sale!</span>
      <div class="cart">
        <p>Cart({{ cart }})</p>
      </div>
      <div>
        <button
          @click="addToCart"
          :disabled="!inStock"
          :class="{ disabledButton: !inStock }"
        >
          Add to cart
        </button>
        <button @click="fireFromCart">Fire from cart</button>
      </div>
    </div>
    <a :href="link">More products like this</a>
  </div>
</template>

<script>
import ProductDetails from "./ProductDetails.vue";

export default {
  name: "Product",
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    ProductDetails,
  },
  data() {
    return {
      product: "Socks",
      brand: "Vue Mastery",
      description: "A pair of warm, fuzzy socks",
      // image: require("./assets/vmSocks-blue-onWhite.jpg"),
      selectedVariant: 0,
      altText: "A pair of socks",
      link: "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks",
      onSale: true,
      details: ["80% cotton", "20% polyester", "Gender-neutral"],
      variants: [
        {
          variantId: 2234,
          variantColor: "green",
          variantImage: require("../assets/vmSocks-green-onWhite.jpg"),
          variantQuantity: 10,
        },
        {
          variantId: 2235,
          variantColor: "blue",
          variantImage: require("../assets/vmSocks-blue-onWhite.jpg"),
          variantQuantity: 0,
        },
      ],
      sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
      cart: 0,
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    fireFromCart() {
      this.cart -= this.cart > 0 ? 1 : 0;
    },
    updateProduct(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return `${this.brand} ${this.product}`;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    sale() {
      if (this.onSale) {
        return `${this.brand} ${this.product} are on sale!`;
      }

      return `${this.brand} ${this.product} are not on sale`;
    },
    shipping() {
      if (this.premium) {
        return "Free";
      } else {
        return 2.99;
      }
    },
  },
};
</script>

<style>
.product {
  display: flex;
  flex-flow: wrap;
  padding: 1rem;
}

img {
  border: 1px solid #d8d8d8;
  width: 70%;
  margin: 40px;
  box-shadow: 0px 0.5px 1px #d8d8d8;
}

.product-image {
  width: 80%;
}

.product-image,
.product-info {
  margin-top: 10px;
  width: 50%;
}

.color-box {
  width: 40px;
  height: 40px;
  margin-top: 5px;
}

.cart {
  margin-right: 25px;
  float: right;
  border: 1px solid #d8d8d8;
  padding: 5px 20px;
}

button {
  margin-top: 30px;
  margin-left: 10px;
  border: none;
  background-color: #1e95ea;
  color: white;
  height: 40px;
  width: 100px;
  font-size: 14px;
}

.disabledButton {
  background-color: #d8d8d8;
}

.review-form {
  width: 400px;
  padding: 20px;
  margin: 40px;
  border: 1px solid #d8d8d8;
}

input {
  width: 100%;
  height: 25px;
  margin-bottom: 20px;
}

textarea {
  width: 100%;
  height: 60px;
}

.tab {
  margin-left: 20px;
  cursor: pointer;
}

.activeTab {
  color: #16c0b0;
  text-decoration: underline;
}
</style>