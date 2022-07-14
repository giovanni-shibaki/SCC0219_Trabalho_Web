<template>
  <div>
    <div id="item-page-container">
      <h1
        class="titles"
        style="font-size: 200%; margin-left: 10%; margin-bottom: 2%"
      >
        Card of the Day
      </h1>
      <div id="item-container">
        <div id="item-img">
          <img :src="card.images.small" :alt="card.name" class="card-image" />
        </div>
        <div id="item-info">
          <h1>{{ card.name }}</h1>
          <h2 class="item-price">${{ getCardLowPrice(card) }}</h2>
          <h3>Attacks</h3>
          <p v-for="atack in card.attacks" v-bind:key="atack.name">
            <b>{{ atack.name }}</b> {{ atack.text }}
          </p>
          <div id="edit-item" v-if="admin == 'true'">
            <input v-model="qtd" type="number" min="0" max="10" readonly />
            <button
              @click="
                $router.push({
                  name: 'editCard',
                  query: { id: card.id },
                })
              "
            >
              <i class="fa fa-shopping-cart"></i>
              Edit Item
            </button>
          </div>
          <div id="itemAddCart" v-else>
            <input v-model="qtd" type="number" min="0" max="10" />
            <button @click="addToCart(this.card, this.qtd)">
              <i class="fa fa-shopping-cart"></i>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import json from "../assets/json/cards.json";
import { useRoute } from "vue-router";

export default {
  name: "SCC0219TrabalhoWebItemPageView",

  data() {
    return {
      router: useRoute(),
      card: this.getCardOfTheDay(),
      cards: json,
      qtd: 1,
      admin: false,
    };
  },

  mounted() {
    this.admin = localStorage.admin;
  },

  methods: {
    getCardOfTheDay() {
      return fetch("http://127.0.0.1:3000/cards/getCardOfTheDay", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          res
            .json()
            .then((response) => {
              this.card = response;
              this.qtdCards = this.card.quantity;
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
    scrollToTop(id) {
      window.scrollTo(0, 0);
      this.card = json.filter(function (obj) {
        if (obj.id == id) return obj;
      });
    },
    addToCart(card, qtd) {
      card = JSON.parse(JSON.stringify(card));
      let cart = localStorage.cart == "" ? [] : JSON.parse(localStorage.cart);
      let index = cart.findIndex((c) => c.card.id == card.id);
      if (index != -1) {
        cart[index].qtd += qtd;
      } else {
        cart.push({ card: card, qtd: qtd });
      }
      localStorage.cart = JSON.stringify(cart);
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
