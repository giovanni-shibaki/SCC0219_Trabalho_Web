<template>
  <div class="background-light-light-blue" id="payment-page-container">
    <h1 class="title is-3">Payment informations</h1>
    <form v-on:submit.prevent="finish()">
      <section class="section">
        Name printed in the card
        <div class="input-container">
          <input
            class="input"
            type="text"
            placeholder="Name"
            name="name"
            required
          />
        </div>
        <div class="columns">
          <div class="input-container column is-three-fifths">
            Card Number
            <input
              class="input"
              type="text"
              placeholder="Card Number"
              v-maska="'#### #### #### ####'"
              name="cardNumber"
              required
            />
          </div>
          <div class="input-container column is-one-fifth">
            Expire Date
            <input
              class="input"
              type="text"
              placeholder="MM/YY"
              v-maska="'##/##'"
              name="cardExpireDate"
              required
            />
          </div>
          <div class="input-container column is-one-fifth">
            Security numbers
            <input
              class="input"
              type="text"
              placeholder="CVV"
              name="cardCvv"
              v-maska="'###'"
              required
            />
          </div>
        </div>
      </section>
      <h1 class="title is-3">Shipping Address</h1>
      <section class="section">
        Postal Code
        <div class="input-container">
          <input
            class="input"
            type="text"
            placeholder="XXXXX-XXX"
            v-maska="'#####-###'"
            name="postcode"
          />
        </div>

        Street
        <div class="input-container">
          <input class="input" type="text" placeholder="Street" name="street" />
        </div>

        Number
        <div class="input-container">
          <input
            class="input"
            type="text"
            placeholder="XX-XXX"
            v-maska="'##-###'"
            name="num"
          />
        </div>

        Address Details
        <div class="input-container">
          <input
            class="input"
            type="text"
            placeholder="Additional Information"
            name="addressDetails"
          />
        </div>

        City
        <div class="input-container">
          <input class="input" type="text" placeholder="City" name="city" />
        </div>

        State
        <div class="input-container">
          <input
            class="input"
            type="text"
            placeholder="Country state"
            name="state"
          />
        </div>

        Country
        <div class="input-container">
          <input
            class="input"
            type="text"
            placeholder="Country"
            name="country"
          />
        </div>
      </section>
      <section class="section">
        <div
          class="tile is-5 background-light-blue py-5 px-0 is-vertical has-text-centered has-text-weight-semibold has-text-black"
        >
          <div class="columns mx-0">
            <div class="column">
              <p>Total:</p>
              <p>Shipment Fee:</p>
              <p>Discount:</p>
              <p>Final price</p>
            </div>
            <div class="column">
              <p>$ {{ totalPrice }}</p>
              <p>$ {{ shipmentFee }}</p>
              <p>- $ {{ discount }}</p>
              <p>$ {{ finalPrice }}</p>
            </div>
          </div>
        </div>
        <router-link to="/cart">
          <button class="button is-warning m-3">Return to cart</button>
        </router-link>
        <button type="submit" class="button is-primary m-3">
          Finish Transaction
        </button>
      </section>
    </form>
  </div>
</template>
<script>
export default {
  name: "SCC0219TrabalhoWebPaymentView",

  data() {
    return {
      totalPrice: localStorage.totalPrice,
      shipmentFee: 0,
      discount: 0,
      finalPrice: 0,
    };
  },

  mounted() {
    this.finalPrice = this.totalPrice + this.shipmentFee - this.discount;
  },

  methods: {
    finish() {
      if (localStorage.cart == "") localStorage.cart = "[]";
      let cart = JSON.parse(localStorage.cart);
      let cardsIds = cart.map((c) => ({
        id: c.card.id,
        qtd: c.qtd,
      }));
      fetch("http://127.0.0.1:3000/cards/buyCards", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cardsIds),
      });
      localStorage.cart = "[]";
      // Compra realiza com sucesso!
      window.scrollTo(0, 0);
      this.$router.push({
        name: "home",
        query: { arg: "8" },
      });
    },
  },
};
</script>
