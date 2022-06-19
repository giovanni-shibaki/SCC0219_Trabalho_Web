<template>
  <div class="background-light-light-blue m-5 p-6 container">
    <h1 class="title is-3">Payment informations</h1>
    <form>
      <section class="section">
        Name printed in the card
        <div class="input-container">
          <input class="input" type="text" placeholder="Name" name="name" />
        </div>
        <div class="columns">
          <div class="input-container column is-three-fifths">
            Card Number
            <input
              class="input"
              type="text"
              placeholder="Card Number"
              name="cardNumber"
            />
          </div>
          <div class="input-container column is-one-fifth">
            Expire Date
            <input
              class="input"
              type="text"
              placeholder="MM/YY"
              name="cardExpireDate"
            />
          </div>
          <div class="input-container column is-one-fifth">
            Security numbers
            <input class="input" type="text" placeholder="CVV" name="cardCvv" />
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
            name="postcode"
          />
        </div>

        Street
        <div class="input-container">
          <input class="input" type="text" placeholder="Street" name="street" />
        </div>

        Number
        <div class="input-container">
          <input class="input" type="text" placeholder="XX-XXx" name="num" />
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
            placeholder="Contry"
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
        <button type="button" class="button is-primary m-3">
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

  methods: {},
};
</script>
