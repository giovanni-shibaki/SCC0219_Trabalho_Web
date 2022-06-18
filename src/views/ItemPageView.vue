<template>
  <div>
    <div id="item-page-container">
      <h1
        class="titles"
        style="font-size: 200%; margin-left: 10%; margin-bottom: 2%"
      >
        Item Page
      </h1>
      <div id="item-container">
        <div id="item-img">
          <img
            :src="card[0].images.small"
            :alt="card[0].name"
            class="card-image"
          />
        </div>
        <div id="item-info">
          <h1>{{ card[0].name }}</h1>
          <h2 class="item-price">$2</h2>
          <h3>Ataques</h3>
          <p v-for="atack in card[0].attacks" v-bind:key="atack.name">
            <b>{{ atack.name }}</b> {{ atack.text }}
          </p>
          <div id="itemAddCart">
            <input v-model="qtd" type="number" min="0" max="10" />
            <button @click="addToCart(this.card[0], this.qtd)">
              <i class="fa fa-shopping-cart"></i>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div id="related-items">
        <h1 class="titles" style="font-size: 200%; margin-bottom: 2%">
          Related Items
        </h1>
        <div class="featured-products">
          <div
            class="card"
            v-for="card in cards.data
              .filter(function (obj) {
                if (obj.rarity === card[0].rarity) return obj;
              })
              .slice(0, 5)"
            v-bind:key="card.id"
          >
            <img
              :src="card.images.small"
              :alt="card.name"
              class="card-image"
              @click="
                scrollToTop(card.id),
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
                  scrollToTop(),
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
                <p class="card-price">
                  ${{ /*card.tcgplayer.prices.holofoil.market ??*/ 6.5 }}
                </p>
                <p class="card-original-price">
                  ${{ /*card.tcgplayer.prices.holofoil.mid ??*/ 4.5 }}
                </p>
                <button class="card-add-cart" @click="addToCart(card, 1)">
                  <i class="fa fa-shopping-cart"></i>
                  Add
                </button>
              </div>
            </div>
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
      card: json.data.filter(function (obj) {
        if (obj.id == useRoute().query.id) return obj;
      }),
      cards: json,
      qtd: 1,
    };
  },

  mounted() {},

  methods: {
    scrollToTop(id) {
      window.scrollTo(0, 0);
      this.card = json.data.filter(function (obj) {
        if (obj.id == id) return obj;
      });
    },
    addToCart(card, qtd) {
      card = JSON.parse(JSON.stringify(card));
      let cart = localStorage.cart == "" ? [] : JSON.parse(localStorage.cart);
      cart.push({ card: card, qtd: qtd });
      localStorage.cart = JSON.stringify(cart);
      console.log(JSON.parse(localStorage.cart));
    },
  },
};
</script>
