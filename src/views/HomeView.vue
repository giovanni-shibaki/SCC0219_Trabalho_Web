<template>
  <div>
    <div
      class="slides"
      v-bind:style="{
        backgroundImage:
          'url(' + require('@/assets/img/pikachu_background.jpg') + ')',
        backgroundSize: cover,
        backgroundRepeat: no - repeat,
      }"
    >
      <Carousel :autoplay="5000" :wrapAround="true">
        <Slide v-for="image in images" :key="image.id">
          <img
            :src="image.img"
            @click="
              scrollToTop(),
                $router.push({
                  name: 'catalogue',
                  query: { page: '0' },
                })
            "
            style="cursor: pointer"
          />
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
    <h3 class="titles">Explore Categories</h3>
    <div class="categories">
      <div
        class="category"
        @click="
          scrollToTop(),
            $router.push({
              name: 'catalogue',
              query: { page: '0', category: '0' },
            })
        "
      >
        <img src="../assets/img/eevee.webp" class="category-image" />
        <h4 class="category-name">Pokémon</h4>
        <p class="category-quantity">
          {{
            cards.filter((card) => card.supertype.includes("Pokémon")).length
          }}
          Items
        </p>
      </div>
      <div
        class="category"
        style="background-color: #c5330b"
        @click="
          scrollToTop(),
            $router.push({
              name: 'catalogue',
              query: { page: '0', category: '1' },
            })
        "
      >
        <img src="../assets/img/cards/irida.webp" class="category-image" />
        <h4 class="category-name">Trainers</h4>
        <p class="category-quantity">
          {{
            cards.filter((card) => card.supertype.includes("Trainer")).length
          }}
          Items
        </p>
      </div>
      <div
        class="category"
        style="background-color: #375faa"
        @click="
          scrollToTop(),
            $router.push({
              name: 'catalogue',
              query: { page: '0', category: '2' },
            })
        "
      >
        <img
          src="../assets/img/cards/triple_acceleration_energy.webp"
          class="category-image"
        />
        <h4 class="category-name">Energy</h4>
        <p class="category-quantity">
          {{ cards.filter((card) => card.supertype.includes("Energy")).length }}
          Items
        </p>
      </div>
      <div
        class="category"
        style="background-color: #939992"
        @click="
          scrollToTop(),
            $router.push({
              name: 'catalogue',
              query: { page: '0', category: '3' },
            })
        "
      >
        <img src="../assets/img/cards/rowlet.webp" class="category-image" />
        <h4 class="category-name">Common</h4>
        <p class="category-quantity">
          {{ cards.filter((card) => card.rarity.includes("Common")).length }}
          Items
        </p>
      </div>
      <div
        class="category"
        style="background-color: #375faa"
        @click="
          scrollToTop(),
            $router.push({
              name: 'catalogue',
              query: { page: '0', category: '4' },
            })
        "
      >
        <img src="../assets/img/cards/thievul.webp" class="category-image" />
        <h4 class="category-name">Uncommon</h4>
        <p class="category-quantity">
          {{ cards.filter((card) => card.rarity.includes("Uncommon")).length }}
          Items
        </p>
      </div>
      <div
        class="category"
        style="background-color: #c5330b"
        @click="
          scrollToTop(),
            $router.push({
              name: 'catalogue',
              query: { page: '0', category: '5' },
            })
        "
      >
        <img src="../assets/img/cards/garchomp_v.webp" class="category-image" />
        <h4 class="category-name">Rare</h4>
        <p class="category-quantity">
          {{ cards.filter((card) => card.rarity.includes("Rare")).length }}
          Items
        </p>
      </div>
      <div
        class="category"
        @click="
          scrollToTop(),
            $router.push({
              name: 'catalogue',
              query: { page: '0', category: '6' },
            })
        "
      >
        <img
          src="../assets/img/cards/hisuian_samurott_vstar.webp"
          class="category-image"
        />
        <h4 class="category-name">Promotional</h4>
        <p class="category-quantity">
          {{ cards.filter((card) => card.rarity.includes("Promo")).length }}
          Items
        </p>
      </div>
    </div>
    <h3 class="titles">Featured Products</h3>
    <div class="featured-products">
      <div
        class="card"
        v-for="card in cards.slice(12, 17)"
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
    <div class="divider"></div>
    <div id="main-ads">
      <div class="mads">
        <div id="mads-left">
          <button class="mads-note">Free delivery</button>
          <h2>For all trainer types</h2>
          <br />
          Find all the necessary products for your pokemon journey! <br />
          <button
            class="mads-button"
            style="margin-top: 13%"
            @click="
              scrollToTop(),
                $router.push({
                  name: 'catalogue',
                  query: { page: '0' },
                })
            "
          >
            Shop Now
            <i class="fas fa-angle-right"></i>
          </button>
        </div>
        <div id="mads-right">
          <img src="../assets/img/treinador.png" />
        </div>
      </div>
      <div class="mads">
        <div id="mads-left">
          <button class="mads-note">60% off</button>
          <h2>Expand your pokedex!</h2>
          <br />
          Gotta catch'em all, right!? <br />
          <button
            class="mads-button"
            @click="
              scrollToTop(),
                $router.push({
                  name: 'catalogue',
                  query: { page: '0' },
                })
            "
          >
            Order Now
            <i class="fas fa-angle-right"></i>
          </button>
        </div>
        <div id="mads-right">
          <img src="../assets/img/pokedex.png" />
        </div>
      </div>
    </div>
  </div>
</template>
<!-- Não esquecer de adicionar as novas rotas no index.js do router! -->
<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

import img1 from "@/assets/img/3cards_1.jpg";
import img2 from "@/assets/img/3cards_2.jpg";
import img3 from "@/assets/img/3cards_3.jpg";
import background from "@/assets/img/pikachu_background.jpg";
import json from "../assets/json/cards.json";

import { useRoute } from "vue-router";

export default {
  name: "SCC0219TrabalhoWebHomeView",

  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },

  data() {
    return {
      // Variáveis aqui
      route: useRoute(),
      images: [
        { id: 1, img: img1 },
        { id: 1, img: img2 },
        { id: 1, img: img3 },
      ],
      cards: json,
    };
  },

  mounted() {
    // Faz a checagem do parametro passado noa variavel arg para mostrar o toast adequado
    if (useRoute().query.arg != null) {
      switch (parseInt(useRoute().query.arg)) {
        case 0:
          this.$toast("Registro realizado com sucesso!", {
            duration: 3000,
            styles: {
              borderRadius: "25px",
            },
            slotLeft: '<i class="fa fa-user"></i>',
            slotRight: '<i class="fa fa-thumbs-up"></i>',
            type: "success",
            positionX: "center",
            positionY: "top",
            disableClick: false,
          });
          break;
        case 1:
          this.$toast("Logou como Admin!", {
            duration: 3000,
            styles: {
              borderRadius: "25px",
              backgroundColor: "#254a7f",
            },
            slotLeft: '<i class="fa fa-user"></i>',
            slotRight: '<i class="fa fa-thumbs-up"></i>',
            type: "success",
            positionX: "center",
            positionY: "top",
            disableClick: false,
          });
          break;
        case 2:
          this.$toast("Logou como Usuario!", {
            duration: 3000,
            styles: {
              borderRadius: "25px",
              backgroundColor: "#254a7f",
            },
            slotLeft: '<i class="fa fa-user"></i>',
            slotRight: '<i class="fa fa-thumbs-up"></i>',
            type: "success",
            positionX: "center",
            positionY: "top",
            disableClick: false,
          });
          break;
        case 3:
          this.$toast("Deslogado com sucesso!", {
            duration: 3000,
            styles: {
              borderRadius: "25px",
              backgroundColor: "#254a7f",
            },
            slotLeft: '<i class="fa fa-user"></i>',
            slotRight: '<i class="fa fa-thumbs-up"></i>',
            type: "success",
            positionX: "center",
            positionY: "top",
            disableClick: false,
          });
          break;
        case 4:
          this.$toast("Informações de pefil atualizadas com sucesso!", {
            duration: 3000,
            styles: {
              borderRadius: "25px",
              backgroundColor: "#254a7f",
            },
            slotLeft: '<i class="fa fa-user"></i>',
            slotRight: '<i class="fa fa-thumbs-up"></i>',
            type: "success",
            positionX: "center",
            positionY: "top",
            disableClick: false,
          });
          break;
        case 5:
          this.$toast("Carta cadastrada com sucesso!", {
            duration: 3000,
            styles: {
              borderRadius: "25px",
              backgroundColor: "#254a7f",
            },
            slotLeft: '<i class="fa fa-user"></i>',
            slotRight: '<i class="fa fa-thumbs-up"></i>',
            type: "success",
            positionX: "center",
            positionY: "top",
            disableClick: false,
          });
          break;
        case 6:
          this.$toast("Usuário cadastrado com sucesso!", {
            duration: 3000,
            styles: {
              borderRadius: "25px",
              backgroundColor: "#254a7f",
            },
            slotLeft: '<i class="fa fa-user"></i>',
            slotRight: '<i class="fa fa-thumbs-up"></i>',
            type: "success",
            positionX: "center",
            positionY: "top",
            disableClick: false,
          });
          break;
        case 7:
          this.$toast("Carta atualizada com sucesso!", {
            duration: 3000,
            styles: {
              borderRadius: "25px",
              backgroundColor: "#254a7f",
            },
            slotLeft: '<i class="fa fa-user"></i>',
            slotRight: '<i class="fa fa-thumbs-up"></i>',
            type: "success",
            positionX: "center",
            positionY: "top",
            disableClick: false,
          });
          break;
        case 8:
          this.$toast("Compra realizada com sucesso!", {
            duration: 3000,
            styles: {
              borderRadius: "25px",
              backgroundColor: "#2dbc44",
            },
            slotLeft: '<i class="fa fa-money-bill"></i>',
            slotRight: '<i class="fa fa-thumbs-up"></i>',
            type: "success",
            positionX: "center",
            positionY: "top",
            disableClick: false,
          });
          break;
      }
    }
    // Depois de montado, pegar as cartas do banco de dados, o que pode demorar alguns segundos devido a quantidade de cartas
    this.syncDataBase();
  },

  methods: {
    // Métodos aqui
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
              this.cards = response;
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
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    addToCart(card) {
      // Checar se a quantidade de cards no estoque não é zero
      let sCard = this.cards.filter(function (obj) {
        if (obj.id == card.id) return obj;
      })[0];
      if (sCard.quantity == 0) {
        this.$toast("Não há cartas no estoque!", {
          duration: 3000,
          styles: {
            color: "white",
            borderRadius: "25px",
            backgroundColor: "#c5330b",
          },
          slotLeft: '<i class="fa fa-user"></i>',
          slotRight: '<i class="fa fa-thumbs-down"></i>',
          positionX: "center",
          positionY: "top",
          disableClick: false,
        });
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
      this.$toast(card.name + " adicionado ao carrinho!", {
        duration: 3000,
        styles: {
          color: "white",
          borderRadius: "25px",
          backgroundColor: "#254a7f",
        },
        slotLeft: '<i class="fa fa-cart-arrow-down"></i>',
        slotRight: '<i class="fa fa-thumbs-up"></i>',
        positionX: "center",
        positionY: "top",
        disableClick: false,
      });
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
<style>
.carousel__item {
  height: 50%;
  width: 50%;
  background-color: #192653;
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.carousel__slide {
  padding: 0;
  height: 5%;
}

.carousel__slide img {
  height: 30rem;
  width: auto;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
}
</style>
