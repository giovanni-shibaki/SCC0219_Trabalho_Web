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
          <img :src="card.images.small" :alt="card.name" class="card-image" />
        </div>
        <div id="item-info">
          <h1>{{ card.name }}</h1>
          <h2 class="item-price">${{ getCardLowPrice(card) }}</h2>
          <h3>Ataques</h3>
          <p v-for="atack in card.attacks" v-bind:key="atack.name">
            <b>{{ atack.name }}</b> {{ atack.text }}
          </p>
          <div id="edit-item" v-if="admin == 'true'">
            <p style="text-align: center">
              Quantidade em estoque: {{ this.qtdCards }}
            </p>
            <button
              @click="
                scrollToTop(-1);
                $router.push({
                  name: 'editCard',
                  query: { id: card.id },
                });
              "
            >
              <i class="fa fa-shopping-cart"></i>
              Edit Item
            </button>
          </div>
          <div id="itemAddCart" v-else>
            <p style="text-align: center">
              Quantidade em estoque: {{ this.qtdCards }}
            </p>
            <input v-model="qtd" type="number" :min="0" :max="this.qtdCards" />
            <button @click="addToCart(this.card, this.qtd)">
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
            v-for="card in cards
              .filter(function (obj) {
                if (obj.rarity === card.rarity) return obj;
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
                <p class="card-price">${{ getCardLowPrice(card) }}</p>
                <p class="card-original-price">${{ getCardHighPrice(card) }}</p>
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
      id: useRoute().query.id,
      card: json[0],
      pos: json.findIndex((obj) => obj.id == useRoute().query.id),
      cards: json,
      qtd: 0,
      admin: false,
      qtdCards: 0,
    };
  },

  mounted() {
    this.admin = localStorage.admin;

    // Depois de montado, pegar as cartas do banco de dados, o que pode demorar alguns segundos devido a quantidade de cartas
    this.getCardFromDB();

    this.qtdCards = this.card.quantity;
  },

  methods: {
    // Função responsável por buscar no banco de dados a quantidade de cartas disponível no estoque
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
              this.qtdCards = this.card.quantity;
            })
            .catch((err) => {
              this.$toast("Erro ao procurar quantidade de cartas no estoque!", {
                duration: 3000,
                styles: {
                  borderRadius: "25px",
                  backgroundColor: "#254a7f",
                },
                slotLeft: '<i class="fa fa-user"></i>',
                slotRight: '<i class="fa fa-thumbs-up"></i>',
                positionX: "center",
                positionY: "top",
                disableClick: false,
              });
              console.log("Erro: " + err);
            });
        })
        .catch((err) => {
          console.log("Erro: " + err);
        });
    },
    scrollToTop(id) {
      window.scrollTo(0, 0);
      if (id != -1) {
        this.card = json.filter(function (obj) {
          if (obj.id == id) return obj;
        });
      }
    },
    addToCart(card, qtd) {
      if (this.qtdCards == 0) {
        // Não há cartas no estoque, portanto a carta não pode ser adicionada no carrinho
        this.$toast("Não há cartas no estoque!", {
          duration: 3000,
          styles: {
            borderRadius: "25px",
            backgroundColor: "#254a7f",
          },
          slotLeft: '<i class="fa fa-user"></i>',
          slotRight: '<i class="fa fa-thumbs-up"></i>',
          positionX: "center",
          positionY: "top",
          disableClick: false,
        });
        return;
      }

      if (this.qtd == 0) {
        this.$toast(
          "Selecione o número de cartas que deseja adicionar ao carrinho!",
          {
            duration: 3000,
            styles: {
              borderRadius: "25px",
              backgroundColor: "#254a7f",
            },
            slotLeft: '<i class="fa fa-user"></i>',
            slotRight: '<i class="fa fa-thumbs-up"></i>',
            positionX: "center",
            positionY: "top",
            disableClick: false,
          }
        );
        return;
      }

      card = JSON.parse(JSON.stringify(card));
      let cart = localStorage.cart == "" ? [] : JSON.parse(localStorage.cart);
      let index = cart.findIndex((c) => c.card.id == card.id);
      if (index != -1) {
        cart[index].qtd += qtd;
      } else {
        cart.push({ card: card, qtd: qtd });
      }
      localStorage.cart = JSON.stringify(cart);
      this.$toast(card.name + " adicionado ao carrinho!", {
        duration: 3000,
        styles: {
          borderRadius: "25px",
          backgroundColor: "#254a7f",
        },
        slotLeft: '<i class="fa fa-user"></i>',
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
