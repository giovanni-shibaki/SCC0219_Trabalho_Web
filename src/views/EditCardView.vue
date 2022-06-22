<template>
  <div>
    <div class="container background-light-light-blue my-5 p-6">
      <!-- <h1 class="title is-2">Welcome back adminzao</h1> -->
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
                  v-model="cardname"
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
                  v-model="price"
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
                  value="10"
                />
              </div>
              Card Image URL
              <div class="input-container">
                <input
                  class="input"
                  type="text"
                  name="cardImage"
                  placeholder="http://sample.com/pokemon.png"
                  v-model="imagelink"
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
                  rows="9"
                  class="textarea"
                  type="text"
                  placeholder="Description"
                  name="cardDescription"
                  v-model="description"
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
import json from "../assets/json/cards.json";
import { useRoute } from "vue-router";

export default {
  name: "SCC0219TrabalhoWebEditCardView",

  data() {
    return {
      router: useRoute(),
      card: json.data.filter(function (obj) {
        if (obj.id == useRoute().query.id) return obj;
      }),
      cards: json,
      cardname: "",
      price: "",
      imagelink: "",
      description: "",
    };
  },

  mounted() {
    // this.price = this.card[0].tcgplayer.prices;
    // this.cards = json.data.filter(function (obj) {
    //   if (useRoute().query.category == null && useRoute().query.search == null)
    //     return obj;
    //   // Verificar se foi feito uma busca
    //   if (useRoute().query.search != null) {
    //     if (
    //       obj.name.toLowerCase().includes(useRoute().query.search.toLowerCase())
    //     ) {
    //       return obj;
    //     }
    //   }
    //   switch (parseInt(useRoute().query.category)) {
    //     case 0:
    //       if (obj.supertype == "Pokémon") return obj;
    //       break;
    //     case 1:
    //       if (obj.supertype == "Trainer") return obj;
    //       break;
    //     case 2:
    //       if (obj.supertype == "Energy") return obj;
    //       break;
    //     case 3:
    //       if (obj.rarity == "Common") return obj;
    //       break;
    //     case 4:
    //       if (obj.rarity == "Uncommon") return obj;
    //       break;
    //     case 5:
    //       if (obj.rarity == "Rare") return obj;
    //       break;
    //     case 6:
    //       if (obj.rarity == "Promo") return obj;
    //       break;
    //   }
    // });
    // this.numPages = Math.ceil(parseInt(parseInt(this.cards.length) / 20));

    this.cardname = this.card[0].name;
    this.price = this.getCardLowPrice(this.card[0]);
    this.imagelink = this.card[0].images.small;
    for (let attack in this.card[0].attacks) {
      this.description += this.card[0].attacks[attack].name + ": ";
      this.description += this.card[0].attacks[attack].text + "\n\n";
    }
  },

  methods: {
    edit_card() {
      alert("As informacoes da carta foram trocadas com sucesso!");
      this.$router.push({
        name: "home",
      });
    },
    getCardLowPrice(card) {
      if (card.tcgplayer == null) return 5.5;
      if (card.tcgplayer.prices == null) return 5.5;
      if (card.tcgplayer.prices.holofoil != null)
        return card.tcgplayer.prices.holofoil.low;
      if (card.tcgplayer.prices.normal != null)
        return card.tcgplayer.prices.normal.low;
      return 5.5;
    },
  },
};
</script>
