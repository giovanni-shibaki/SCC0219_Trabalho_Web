<template>
  <div class="header">
    <div class="top-header">
      <div class="header-logo">
        <router-link to="/">
          <img class="logo" src="./assets/img/logo.png" />
        </router-link>
      </div>
      <div class="search-bar">
        <form action="">
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit"><i class="fa fa-search"></i></button>
        </form>
      </div>
      <div class="cart">
        <router-link to="/cart">
          <i class="fas fa-shopping-cart"></i>Cart
        </router-link>
      </div>
      <div class="header-user">
        <img src="./assets/img/dilvan.jpg" />
        <router-link to="/signinup">
          <b>Sign-up / Sign-in</b>
        </router-link>
        <i class="fas fa-angle-down"></i>
      </div>
    </div>
    <div class="bottom-header">
      <div class="header-categories">
        <button class="btn" @click="$router.push('catalogue')">
          <i class="fa fa-bars"></i> Browse All Categories
        </button>
      </div>
      <div class="header-options">
        <button class="btn" @click="$router.push('/')">
          <i class="fas fa-home"></i> Home
        </button>
        <button class="btn"><i class="fa fa-fire"></i> Hot Deals</button>
        <button class="btn"><i class="fa fa-bullhorn"></i> New Products</button>
      </div>
    </div>
  </div>
  <router-view v-slot="{ Component }">
    <transition name="slide" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
  <div class="footer" style="background-color: var(--light-blue)">
    <div id="footer-ads2">
      <div class="fads">
        <div id="fads-img">
          <i class="fas fa-hand-holding-usd fa-xl"></i>
        </div>
        <div id="fads-text">
          <h3>Best Prices & Deals</h3>
          Don't miss our daily amazing deals and prices
        </div>
      </div>
      <div class="fads">
        <div id="fads-img">
          <i class="fas fa-retweet"></i>
        </div>
        <div id="fads-text">
          <h3>Refundable</h3>
          If your items have damage we agree to refound it
        </div>
      </div>
      <div class="fads">
        <div id="fads-img">
          <i class="fas fa-truck"></i>
        </div>
        <div id="fads-text">
          <h3>Free delivery</h3>
          Do purchase over $50 and we get free delivery anywhere
        </div>
      </div>
    </div>

    <div class="divider"></div>

    <div class="footer-info">
      <div id="finfo">
        <img id="finfo-logo" src="./assets/img/logo.png" /> <br /><br />
        <i class="fas fa-map-marker-alt"></i> <b>Address:</b> Avenida
        Trabalhador São-carlense, 400 <br /><br />
        <i class="fas fa-phone"></i> <b>Call Us:</b> 4002-8922 <br /><br />
        <i class="fas fa-envelope"></i> <b>Email:</b> email@usp.br <br /><br />
        <i class="fas fa-clock"></i> <b>Work hours:</b> 8:00 - 23:00, Sunday -
        Saturday
      </div>
      <div id="finfo1">
        <p class="navigation-top-text">Account</p>
        <br />
        <a href="">Cart</a> <br />
        <a href="">Track Order</a> <br />
        <a href="">Shopping Details</a>
      </div>
      <div id="finfo">
        <p class="navigation-top-text">Useful Links</p>
        <br />
        <a href="">About Us</a> <br />
        <a href="">Contact</a> <br />
        <a href="">Hot Deals</a> <br />
        <a href="">Promotions</a> <br />
        <a href="">New Products</a>
      </div>
    </div>

    <div class="divider"></div>

    <div class="footer-links">
      <div class="flinks">@ 2022, All rights reserved</div>
      <div class="flinks" id="cc">
        <img src="./assets/img/visa.png" />
        <img src="./assets/img/mastercard.png" />
        <img src="./assets/img/maestro.png" />
        <img src="./assets/img/american_express.png" />
      </div>
      <div class="flinks" id="sm">
        <i class="fab fa-facebook"></i>
        <i class="fab fa-linkedin"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-twitter-square"></i>
      </div>
    </div>
  </div>
</template>
<style lang="css">
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.slide-enterfrom,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>
