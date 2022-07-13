<template>
  <div>
    <div class="container background-light-light-blue my-5 p-6">
      <!-- <h1 class="title is-2">Welcome back adminzao</h1> -->
      <h2 class="collapse-header title is-3">Edit a Card</h2>
      <div class="background-white mx-5">
        <form v-on:submit.prevent="edit_card(card._id)">
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
                  required
                />
              </div>
              Card Set Name
              <div class="input-container">
                <input
                  class="input"
                  type="text"
                  placeholder="Card Set Name"
                  name="cardSetName"
                  v-model="setName"
                />
              </div>
              Low Price of the card
              <div class="input-container">
                <input
                  class="input"
                  type="Number"
                  placeholder="10.00"
                  min="0"
                  step="0.01"
                  name="cardPrice"
                  v-model="price"
                />
              </div>
              Market Price of the card
              <div class="input-container">
                <input
                  class="input"
                  type="Number"
                  placeholder="10.00"
                  min="0"
                  step="0.01"
                  name="cardPrice"
                  v-model="marketPrice"
                />
              </div>
              Stock Quantity
              <div class="input-container">
                <input
                  v-model="qtd"
                  class="input"
                  type="Number"
                  placeholder="10"
                  min="0"
                  step="1"
                  name="cardQuantity"
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
              <br />
              <br />
              <br />
              <div class="input-container">
                <button
                  class="button is-primary"
                  type="submit"
                  name="cardSubmit"
                >
                  Edit card
                </button>
              </div>
            </div>
            <div class="column px-5">
              <b>Attack 1</b>
              <br />
              Name
              <div class="input-container">
                <input
                  class="input"
                  type="text"
                  placeholder="Attack1 Name"
                  name="cardAttack1Name"
                  v-model="attack1Name"
                />
                Text
              </div>
              <div class="input-container">
                <textarea
                  rows="9"
                  class="textarea"
                  type="text"
                  placeholder="Attack1 Text"
                  name="cardAttack1Text"
                  v-model="attack1Text"
                ></textarea>
              </div>
            </div>
            <div class="column px-5">
              <b>Attack 2</b>
              <br />
              Name
              <div class="input-container">
                <input
                  class="input"
                  type="text"
                  placeholder="Attack2 Name"
                  name="cardAttack2Name"
                  v-model="attack2Name"
                />
              </div>
              Text
              <div class="input-container">
                <textarea
                  rows="9"
                  class="textarea"
                  type="text"
                  placeholder="Attack2 Text"
                  name="cardAttack2Text"
                  v-model="attack2Text"
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
      id: useRoute().query.id,
      card: json[0],
      cards: json,
      cardname: "",
      price: "",
      marketPrice: "",
      imagelink: "",
      attack1Name: "",
      attack1Text: "",
      attack2Name: "",
      attack2Text: "",
      setName: "",
      qtd: 0,
    };
  },

  mounted() {
    this.setName = this.card.set.name;
    this.qtd = this.card.quantity;
    this.cardname = this.card.name;
    this.price = this.getCardLowPrice(this.card);
    this.marketPrice = this.getCardHighPrice(this.card);
    this.imagelink = this.card.images.small;
    if (this.card.attacks != null && this.card.attacks[0] != null) {
      this.attack1Name = this.card.attacks[0].name;
      this.attack1Text = this.card.attacks[0].text;
    }
    if (this.card.attacks != null && this.card.attacks[1] != null) {
      this.attack2Name = this.card.attacks[1].name;
      this.attack2Text = this.card.attacks[1].text;
    }
    this.getCardFromDB();
  },

  methods: {
    getCardFromDB() {
      fetch("http://127.0.0.1:3000/cards/getCard", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: this.id,
        }),
      })
        .then((res) => {
          res
            .json()
            .then((response) => {
              this.card = response;
              this.setName = this.card.set.name;
              this.qtd = this.card.quantity;
              this.cardname = this.card.name;
              this.price = this.getCardLowPrice(this.card);
              this.marketPrice = this.getCardHighPrice(this.card);
              this.imagelink = this.card.images.small;
              if (this.card.attacks != null && this.card.attacks[0] != null) {
                this.attack1Name = this.card.attacks[0].name;
                this.attack1Text = this.card.attacks[0].text;
              }
              if (this.card.attacks != null && this.card.attacks[1] != null) {
                this.attack2Name = this.card.attacks[1].name;
                this.attack2Text = this.card.attacks[1].text;
              }
            })
            .catch((err) => {
              alert("Erro ao procurar quantidade de cartas no estoque!");
              console.log("Erro: " + err);
            });
        })
        .catch((err) => {
          console.log("Erro: " + err);
        });
    },
    edit_card(id) {
      console.log(this.card._id);
      this.card.name = this.cardname;
      this.card.quantity = this.qtd;
      this.card.name = this.cardname;
      this.card.images.small = this.imagelink;
      this.card.set.name = this.setName;
      console.log(this.card.attacks);
      if (this.card.attacks.length == 0 && this.attack1Name.length > 0) {
        this.card.attacks.push({
          name: this.attack1Name,
          text: this.attack1Text,
        });
      } else if (this.card.attacks.length > 0) {
        this.card.attacks[0].name = this.attack1Name;
        this.card.attacks[0].text = this.attack1Text;
      }
      if (this.card.attacks.length == 0 && this.attack2Name.length > 0) {
        this.card.attacks.push({
          name: this.attack2Name,
          text: this.attack2Text,
        });
      } else if (this.card.attacks.length > 0) {
        if (this.card.attacks[1] == null) {
          this.card.attacks.push({
            name: this.attack2Name,
            text: this.attack2Text,
          });
        } else {
          this.card.attacks[1].name = this.attack2Name;
          this.card.attacks[1].text = this.attack2Text;
        }
      }

      // Se o card não tiver preço definido no banco, incluir em seus dados
      if (this.card.tcgplayer == null) {
        this.card.tcgplayer = {
          prices: {
            holofoil: {
              low: this.price,
              market: this.marketPrice,
            },
          },
        };
      } else if (this.card.tcgplayer.prices == null) {
        this.card.tcgplayer.prices = {
          prices: {
            holofoil: {
              low: this.price,
              market: this.marketPrice,
            },
          },
        };
      } else if (this.card.tcgplayer.prices.holofoil == null) {
        console.log(this.card.tcgplayer.prices);
        this.card.tcgplayer.prices.holofoil = {
          low: this.price,
          market: this.marketPrice,
        };
      } else if (this.card.tcgplayer.prices.holofoil != null) {
        this.card.tcgplayer.prices.holofoil.low = this.price;
        this.card.tcgplayer.prices.holofoil.market = this.marketPrice;
      } else if (this.card.tcgplayer.prices.normal != null) {
        this.card.tcgplayer.prices.normal.low = this.price;
        this.card.tcgplayer.prices.normal.market = this.marketPrice;
      }

      // Remover o campo _id dos dados que serão atualizados
      delete this.card._id;
      console.log(this.card);

      // Chamar a função do backend para modificar as informações da carta
      fetch("http://127.0.0.1:3000/cards/updateCardById", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: this.card,
        }),
      })
        .then((res) => {
          res
            .json()
            .then((response) => {
              alert("Carta atualizada com sucesso!");
            })
            .catch((err) => {
              alert("Erro ao atualizar carta!");
              console.log("Erro: " + err);
            });
        })
        .catch((err) => {
          console.log("Erro: " + err);
        });

      window.scrollTo(0, 0);
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
    getCardHighPrice(card) {
      if (card.tcgplayer == null) return 6.5;
      if (card.tcgplayer.prices == null) return 6.5;
      if (card.tcgplayer.prices.holofoil != null)
        return card.tcgplayer.prices.holofoil.market;
      if (card.tcgplayer.prices.normal != null)
        return card.tcgplayer.prices.normal.market;
      return 6.5;
    },
  },
};
</script>
