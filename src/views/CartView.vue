<template>
  <div class="background-light-light-blue" id="cart-page-container">
    <section class="section">
      <h2 class="title is-3">Cart</h2>
    </section>
    <section class="section all-products">
      <div class="card" v-for="item in this.cart" v-bind:key="item.card.id">
        <img
          :src="item.card.images.small"
          :alt="item.card.name"
          class="card-image"
          @click="
            updateCards(-1),
              $router.push({
                name: 'itemPage',
                query: { id: item.card.id },
              })
          "
          style="cursor: pointer"
        />
        <div class="card-description">
          <p class="card-type">{{ item.card.supertype }}</p>
          <h3
            class="card-name"
            @click="
              scrollToTop(-1),
                $router.push({
                  name: 'itemPage',
                  query: { id: item.card.id },
                })
            "
            style="cursor: pointer"
          >
            {{ item.card.name }}
          </h3>
          <div class="card-stars">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa-solid fa-star-sharp-half"></i>
            <i class="fa fa-star-o"></i>
          </div>
          <p class="card-seller">By {{ item.card.set.name }}</p>
          <div class="card-buy">
            <p class="card-price">
              ${{ getCardLowPrice(item.card) }} x {{ item.qtd }}
            </p>
            <button
              class="background-red card-add-cart"
              @click="removeItem(item)"
            >
              <i class="fa fa-trash"></i>
              Remove
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div
        class="tile is-5 background-light-blue py-5 px-0 is-vertical has-text-centered has-text-weight-semibold has-text-black"
      >
        <div class="mx-0">Total price: ${{ totalPrice }}</div>
      </div>
      <router-link to="/">
        <button class="button is-warning m-3">Continue Shopping</button>
      </router-link>
      <router-link to="/payment">
        <button type="button" class="button is-primary m-3">
          Proceed to Payment
        </button>
      </router-link>
    </section>
  </div>
</template>
<script>
export default {
  name: "SCC0219TrabalhoWebCartView",

  data() {
    return {
      cart: [],
      totalPrice: 0,
    };
  },
  beforeMount() {
    // localStorage.cart armazena um JSON com as infos do carrinho !!! JSON, não o objeto !!!
    if (localStorage.cart == "") localStorage.cart = "[]";
    this.cart = JSON.parse(localStorage.cart);
    this.calculatePrice();
  },

  mounted() {},

  methods: {
    getCardLowPrice(card) {
      if (card.tcgplayer == null) return 5.5;
      if (card.tcgplayer.prices == null) return 5.5;
      if (card.tcgplayer.prices.holofoil != null)
        return card.tcgplayer.prices.holofoil.low;
      if (card.tcgplayer.prices.normal != null)
        return card.tcgplayer.prices.normal.low;
      return 5.5;
    },
    removeItem(item) {
      item = JSON.parse(JSON.stringify(item));
      let cart = localStorage.cart == "" ? [] : JSON.parse(localStorage.cart);
      cart = cart.filter((c) => c.card.id != item.card.id);
      localStorage.cart = JSON.stringify(cart);
      this.cart = JSON.parse(localStorage.cart);
      this.calculatePrice();
    },
    calculatePrice() {
      let price = 0;
      let cart = JSON.parse(JSON.stringify(this.cart));
      cart.forEach((item) => {
        price += this.getCardLowPrice(item.card) * item.qtd;
      });
      this.totalPrice = price;
      localStorage.totalPrice = price;
    },
  },
};
</script>
