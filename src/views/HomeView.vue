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
          <img :src="image.img" />
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
    <h3 class="titles">Explore Categories</h3>
    <div class="categories">
      <div class="category">
        <img src="../assets/img/eevee.webp" class="category-image" />
        <h4 class="category-name">Pokémon</h4>
        <p class="category-quantity">20 Items</p>
      </div>
      <div class="category">
        <img src="../assets/img/eevee.webp" class="category-image" />
        <h4 class="category-name">Pokémon</h4>
        <p class="category-quantity">20 Items</p>
      </div>
      <div class="category">
        <img src="../assets/img/eevee.webp" class="category-image" />
        <h4 class="category-name">Pokémon</h4>
        <p class="category-quantity">20 Items</p>
      </div>
      <div class="category">
        <img src="../assets/img/eevee.webp" class="category-image" />
        <h4 class="category-name">Pokémon</h4>
        <p class="category-quantity">20 Items</p>
      </div>
      <div class="category">
        <img src="../assets/img/eevee.webp" class="category-image" />
        <h4 class="category-name">Pokémon</h4>
        <p class="category-quantity">20 Items</p>
      </div>
      <div class="category">
        <img src="../assets/img/eevee.webp" class="category-image" />
        <h4 class="category-name">Pokémon</h4>
        <p class="category-quantity">20 Items</p>
      </div>
      <div class="category">
        <img src="../assets/img/eevee.webp" class="category-image" />
        <h4 class="category-name">Pokémon</h4>
        <p class="category-quantity">20 Items</p>
      </div>
    </div>
    <h3 class="titles">Featured Products</h3>
    <div class="featured-products">
      <div class="card">
        <router-link to="/item-page">
          <img src="../assets/img/eevee.webp" alt="Eevee" class="card-image" />
        </router-link>
        <div class="card-description">
          <p class="card-type">Pokémon</p>
          <router-link to="/item-page">
            <h3 class="card-name">Eevee</h3>
          </router-link>
          <div class="card-stars">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-half-full"></i>
            <i class="fa fa-star-o"></i>
          </div>
          <p class="card-seller">By Ash Ketchum</p>
          <div class="card-buy">
            <p class="card-price">$5</p>
            <p class="card-original-price">$6</p>
            <button class="card-add-cart">
              <i class="fa fa-shopping-cart"></i>
              Add
            </button>
          </div>
        </div>
      </div>
      <div class="card">
        <img src="../assets/img/eevee.webp" alt="Eevee" class="card-image" />
        <div class="card-description">
          <p class="card-type">Pokémon</p>
          <h3 class="card-name">Eevee</h3>
          <div class="card-stars">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa-solid fa-star-sharp-half"></i>
            <i class="fa fa-star-o"></i>
          </div>
          <p class="card-seller">By Ash Ketchum</p>
          <div class="card-buy">
            <p class="card-price">$5</p>
            <p class="card-original-price">$6</p>
            <button class="card-add-cart">
              <i class="fa fa-shopping-cart"></i>
              Add
            </button>
          </div>
        </div>
      </div>
      <div class="card">
        <img src="../assets/img/eevee.webp" alt="Eevee" class="card-image" />
        <div class="card-description">
          <p class="card-type">Pokémon</p>
          <h3 class="card-name">Eevee</h3>
          <div class="card-stars">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-half-full"></i>
            <i class="fa fa-star-o"></i>
          </div>
          <p class="card-seller">By Ash Ketchum</p>
          <div class="card-buy">
            <p class="card-price">$5</p>
            <p class="card-original-price">$6</p>
            <button class="card-add-cart">
              <i class="fa fa-shopping-cart"></i>
              Add
            </button>
          </div>
        </div>
      </div>
      <div class="card">
        <img src="../assets/img/eevee.webp" alt="Eevee" class="card-image" />
        <div class="card-description">
          <p class="card-type">Pokémon</p>
          <h3 class="card-name">Eevee</h3>
          <div class="card-stars">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-half-full"></i>
            <i class="fa fa-star-o"></i>
          </div>
          <p class="card-seller">By Ash Ketchum</p>
          <div class="card-buy">
            <p class="card-price">$5</p>
            <p class="card-original-price">$6</p>
            <button class="card-add-cart">
              <i class="fa fa-shopping-cart"></i>
              Add
            </button>
          </div>
        </div>
      </div>
      <div class="card">
        <img src="../assets/img/eevee.webp" alt="Eevee" class="card-image" />
        <div class="card-description">
          <p class="card-type">Pokémon</p>
          <h3 class="card-name">Eevee</h3>
          <div class="card-stars">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-half-full"></i>
            <i class="fa fa-star-o"></i>
          </div>
          <p class="card-seller">By Ash Ketchum</p>
          <div class="card-buy">
            <p class="card-price">$5</p>
            <p class="card-original-price">$6</p>
            <button class="card-add-cart">
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
          <button class="mads-button" style="margin-top: 13%">
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
          <button class="mads-button">
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
      images: [
        { id: 1, img: img1 },
        { id: 1, img: img2 },
        { id: 1, img: img3 },
      ],
    };
  },

  mounted() {},

  methods: {
    // Métodos aqui
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
