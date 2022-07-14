<template>
  <div>
    <h3 class="catalogue-title">All Products</h3>
    <div class="catalogue">
      <div class="categories-menu">
        <div class="categories-menu-item">
          <button
            class="btn-categories-menu-item"
            @click="
              updateCards(0),
                $router.push({
                  name: 'catalogue',
                  query: { page: '0', category: '0' },
                })
            "
          >
            <i class="fa fa-th-large"></i>
            Pokemon
          </button>
          <button
            class="btn-categories-menu-item"
            @click="
              updateCards(1),
                $router.push({
                  name: 'catalogue',
                  query: { page: '0', category: '1' },
                })
            "
          >
            <i class="fa fa-th-large"></i>
            Trainers
          </button>
          <button
            class="btn-categories-menu-item"
            @click="
              updateCards(2),
                $router.push({
                  name: 'catalogue',
                  query: { page: '0', category: '2' },
                })
            "
          >
            <i class="fa fa-th-large"></i>
            Energy
          </button>
          <button
            class="btn-categories-menu-item"
            @click="
              updateCards(3),
                $router.push({
                  name: 'catalogue',
                  query: { page: '0', category: '3' },
                })
            "
          >
            <i class="fa fa-th-large"></i>
            Common
          </button>
          <button
            class="btn-categories-menu-item"
            @click="
              updateCards(4),
                $router.push({
                  name: 'catalogue',
                  query: { page: '0', category: '4' },
                })
            "
          >
            <i class="fa fa-th-large"></i>
            Uncommon
          </button>
          <button
            class="btn-categories-menu-item"
            @click="
              updateCards(5),
                $router.push({
                  name: 'catalogue',
                  query: { page: '0', category: '5' },
                })
            "
          >
            <i class="fa fa-th-large"></i>
            Rare
          </button>
          <button
            class="btn-categories-menu-item"
            @click="
              updateCards(6),
                $router.push({
                  name: 'catalogue',
                  query: { page: '0', category: '6' },
                })
            "
          >
            <i class="fa fa-th-large"></i>
            Promotional
          </button>
        </div>
      </div>
      <div class="all-products">
        <div
          class="card"
          v-for="card in cards
            .filter((c) => c.quantity > 0)
            .slice(route.query.page * 20, route.query.page * 20 + 20)"
          v-bind:key="card.id"
        >
          <img
            :src="card.images.small"
            :alt="card.name"
            class="card-image"
            @click="
              updateCards(-1),
                $router.push({
                  name: 'itemPage',
                  query: { id: card.id },
                })
            "
            style="cursor: pointer"
          />
          <div class="card-description">
            <p class="card-type">{{ card.supertype }}</p>
            <h3
              class="card-name"
              @click="
                scrollToTop(-1),
                  $router.push({
                    name: 'itemPage',
                    query: { id: card.id },
                  })
              "
              style="cursor: pointer"
            >
              {{ card.name }}
            </h3>
            <div class="card-stars">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa-solid fa-star-sharp-half"></i>
              <i class="fa fa-star-o"></i>
            </div>
            <p class="card-seller">By {{ card.set.name }}</p>
            <div class="card-buy">
              <p class="card-price">${{ getCardLowPrice(card) }}</p>
              <p class="card-original-price">${{ getCardHighPrice(card) }}</p>
              <button class="card-add-cart" @click="addToCart(card)">
                <i class="fa fa-shopping-cart"></i>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h3 class="navigate-text">Navigate</h3>
    <br />
    <div class="catalogue-navigate">
      <a :href="getPrevPageParams(0)">&laquo;</a>
      <a :href="getPrevPageParams(-1)">0</a>
      <a href="#">...</a>
      <a href="#" style="color: #ffcb05">{{ route.query.page }}</a>
      <a href="#">...</a>
      <a :href="getNextPageParams(-1)">{{ numPages }}</a>
      <a :href="getNextPageParams(0)">&raquo;</a>
    </div>
  </div>
</template>
<!-- Não esquecer de adicionar as novas rotas no index.js do router! -->
<script>
import json from "../assets/json/cards.json";
import { useRoute } from "vue-router";

export default {
  name: "SCC0219TrabalhoWebCatalogueView",

  data() {
    return {
      route: useRoute(),
      cards: json,
      numPages: 0,
    };
  },

  mounted() {
    this.cards = json.filter(function (obj) {
      if (useRoute().query.category == null && useRoute().query.search == null)
        return obj;
      // Verificar se foi feito uma busca
      if (useRoute().query.search != null) {
        if (
          obj.name.toLowerCase().includes(useRoute().query.search.toLowerCase())
        ) {
          return obj;
        }
      }
      switch (parseInt(useRoute().query.category)) {
        case 0:
          if (obj.supertype == "Pokémon") return obj;
          break;
        case 1:
          if (obj.supertype == "Trainer") return obj;
          break;
        case 2:
          if (obj.supertype == "Energy") return obj;
          break;
        case 3:
          if (obj.rarity == "Common") return obj;
          break;
        case 4:
          if (obj.rarity == "Uncommon") return obj;
          break;
        case 5:
          if (obj.rarity == "Rare") return obj;
          break;
        case 6:
          if (obj.rarity == "Promo") return obj;
          break;
      }
    });
    this.numPages = Math.ceil(parseInt(parseInt(this.cards.length) / 20));

    // Depois de montado, pegar as cartas do banco de dados, o que pode demorar alguns segundos devido a quantidade de cartas
    this.syncDataBase();
  },

  methods: {
    syncDataBase() {
      fetch("http://127.0.0.1:3000/cards/getAllCards", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          res
            .json()
            .then((response) => {
              this.cards = response.filter((obj) => {
                if (
                  this.route.query.category == null &&
                  this.route.query.search == null
                )
                  return obj;
                // Verificar se foi feito uma busca
                if (this.route.query.search != null) {
                  if (
                    obj.name
                      .toLowerCase()
                      .includes(this.route.query.search.toLowerCase())
                  ) {
                    return obj;
                  }
                }
                switch (parseInt(this.route.query.category)) {
                  case 0:
                    if (obj.supertype == "Pokémon") return obj;
                    break;
                  case 1:
                    if (obj.supertype == "Trainer") return obj;
                    break;
                  case 2:
                    if (obj.supertype == "Energy") return obj;
                    break;
                  case 3:
                    if (obj.rarity == "Common") return obj;
                    break;
                  case 4:
                    if (obj.rarity == "Uncommon") return obj;
                    break;
                  case 5:
                    if (obj.rarity == "Rare") return obj;
                    break;
                  case 6:
                    if (obj.rarity == "Promo") return obj;
                    break;
                }
              });
              this.numPages = Math.ceil(
                parseInt(parseInt(this.cards.length) / 20)
              );
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
    updateCards(cat) {
      window.scrollTo(0, 0);
      if (cat == -1) return;
      this.cards = json.filter(function (obj) {
        switch (cat) {
          case 0:
            if (obj.supertype == "Pokémon") return obj;
            break;
          case 1:
            if (obj.supertype == "Trainer") return obj;
            break;
          case 2:
            if (obj.supertype == "Energy") return obj;
            break;
          case 3:
            if (obj.rarity == "Common") return obj;
            break;
          case 4:
            if (obj.rarity == "Uncommon") return obj;
            break;
          case 5:
            if (obj.rarity == "Rare") return obj;
            break;
          case 6:
            if (obj.rarity == "Promo") return obj;
            break;
        }
      });
      this.numPages = Math.ceil(this.cards.length / 20);
    },
    getPrevPageParams(arg) {
      // Checar se não está na página 0
      if (parseInt(this.route.query.page) == 0) return "#";
      let ret = "?page=";
      if (arg == -1) ret += 0;
      else ret += parseInt(this.route.query.page) - 1;
      // Checar se não há mais parametros como o category ou search
      if (this.route.query.category != null)
        ret += "&category=" + this.route.query.category;
      if (this.route.query.search != null)
        ret += "&search=" + this.route.query.search;
      return ret;
    },
    getNextPageParams(arg) {
      // Checar se não está na última página
      if (parseInt(this.route.query.page) >= this.numPages) return "#";
      let ret = "?page=";
      if (arg == -1) ret += this.numPages;
      else ret += parseInt(this.route.query.page) + 1;
      // Checar se não há mais parametros como o category ou search
      if (this.route.query.category != null)
        ret += "&category=" + this.route.query.category;
      if (this.route.query.search != null)
        ret += "&search=" + this.route.query.search;
      return ret;
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
    addToCart(card) {
      // Checar se a quantidade de cards no estoque não é zero
      let sCard = this.cards.filter(function (obj) {
        if (obj.id == card.id) return obj;
      })[0];
      if (sCard.quantity == 0) {
        alert("Não há cartas no estoque!");
        return;
      }

      card = JSON.parse(JSON.stringify(card));
      let cart = localStorage.cart == "" ? [] : JSON.parse(localStorage.cart);
      let index = cart.findIndex((c) => c.card.id == card.id);
      if (index != -1) {
        cart[index].qtd++;
      } else {
        cart.push({ card: card, qtd: 1 });
      }
      localStorage.cart = JSON.stringify(cart);
      alert(card.name + " adicionado ao carrinho!");
    },
  },
};
</script>
