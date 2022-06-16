<template>
  <div>
    <h3 class="catalogue-title">All Products</h3>
    <div class="catalogue">
      <div class="categories-menu">
        <div class="categories-menu-item">
          <button class="btn-categories-menu-item">
            <i class="fa fa-th-large"></i>
            Pokemon
          </button>
          <button class="btn-categories-menu-item">
            <i class="fa fa-th-large"></i>
            Trainers
          </button>
          <button class="btn-categories-menu-item">
            <i class="fa fa-th-large"></i>
            Items
          </button>
          <button class="btn-categories-menu-item">
            <i class="fa fa-th-large"></i>
            Energy
          </button>
          <button class="btn-categories-menu-item">
            <i class="fa fa-th-large"></i>
            Special Energy
          </button>
          <button class="btn-categories-menu-item">
            <i class="fa fa-th-large"></i>
            Technical Machine
          </button>
        </div>
      </div>
      <div class="all-products">
        <div
          class="card"
          v-for="card in cards.data.slice(
            route.query.page * 20,
            route.query.page * 20 + 20
          )"
          v-bind:key="card.id"
        >
          <img
            :src="card.images.small"
            :alt="card.name"
            class="card-image"
            @click="
              scrollToTop(),
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
              <button class="card-add-cart">
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
      <a
        :href="
          parseInt(route.query.page) > 0
            ? '?page=' + (parseInt(route.query.page) - 1)
            : '#'
        "
        >&laquo;</a
      >
      <a href="?page=0">0</a>
      <a href="#">...</a>
      <a href="#" style="color: #ffcb05">{{ route.query.page }}</a>
      <a href="#">...</a>
      <a href="?page=12">143</a>
      <a
        :href="
          parseInt(route.query.page) < 143
            ? '?page=' + (parseInt(route.query.page) + 1)
            : '#'
        "
        >&raquo;</a
      >
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
    };
  },

  mounted() {},

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
