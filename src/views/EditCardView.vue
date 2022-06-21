<template>
  <div>
    <div class="container background-light-light-blue my-5 p-6">
      <h1 class="title is-2">Welcome back adminzao</h1>
      <h2 class="collapse-header title is-3">Edit a Card</h2>
      <div class="background-white mx-5">
        <form>
          <div class="columns">
            <div class="column px-5">
              Card Name
              <div class="input-container">
                <input
                  class="input"
                  type="text"
                  placeholder="Card Name"
                  name="cardName"
                  required
                />
              </div>
              Price of the card
              <div class="input-container">
                <input
                  class="input"
                  type="Number"
                  placeholder="10.00"
                  min="0"
                  name="cardPrice"
                />
              </div>
              Stock Quantity
              <div class="input-container">
                <input
                  class="input"
                  type="Number"
                  placeholder="10"
                  min="0"
                  step="1"
                  name="cardQuantity"
                  required
                />
              </div>
              Card Image Link
              <div class="input-container">
                <input
                  class="input"
                  type="text"
                  name="cardImage"
                  placeholder="idk"
                />
              </div>
              <br />
              <div class="input-container">
                <button
                  class="button is-primary"
                  type="submit"
                  name="cardSubmit"
                  @click="edit_card()"
                >
                  Edit card
                </button>
              </div>
            </div>
            <div class="column px-5">
              Card Description
              <div class="input-container">
                <textarea
                  class="textarea"
                  type="text"
                  placeholder="Description"
                  name="cardDescription"
                  value=""
                ></textarea>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SCC0219TrabalhoWebEditCardView",

  data() {
    return {};
  },

  mounted() {},

  methods: {
    edit_card() {
      alert("As informacoes da carta foram trocadas com sucesso!");
      this.$router.push({
        name: "home",
      });
    },
  },
};
</script>
