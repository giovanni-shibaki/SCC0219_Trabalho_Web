<template>
  <div>
    <div class="slides">
      <div class="w3-content w3-display-container" style="max-height: 100%">
        <div class="mySlides">
          <img src="../assets/img/3cards_1.jpg" />
        </div>
        <div class="mySlides">
          <img src="../assets/img/3cards_2.jpg" />
        </div>
        <div class="mySlides">
          <img src="../assets/img/3cards_3.jpg" />
        </div>
        <div
          class="w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle"
          style="width: 100%"
        >
          <div class="w3-left w3-hover-text-khaki" onclick="plusDivs(-1)">
            &#10094;
          </div>
          <div class="w3-right w3-hover-text-khaki" onclick="plusDivs(1)">
            &#10095;
          </div>
          <span
            class="w3-badge demo w3-border w3-transparent w3-hover-white"
            onclick="currentDiv(1)"
          ></span>
          <span
            class="w3-badge demo w3-border w3-transparent w3-hover-white"
            onclick="currentDiv(2)"
          ></span>
          <span
            class="w3-badge demo w3-border w3-transparent w3-hover-white"
            onclick="currentDiv(3)"
          ></span>
        </div>
      </div>
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
    <div class="main-ads">
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
