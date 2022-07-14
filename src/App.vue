<template>
  <div class="header">
    <div class="top-header">
      <div class="header-logo">
        <router-link to="/">
          <img class="logo" src="./assets/img/logo.png" />
        </router-link>
      </div>
      <div class="search-bar">
        <input
          type="text"
          placeholder="Search.."
          name="search"
          id="searchId"
          v-model="searchId"
        />
        <button
          @click="
            $router.push({
              name: 'catalogue',
              query: { page: '0', search: '' + searchId },
            })
          "
        >
          <i class="fa fa-search"></i>
        </button>
      </div>
      <div class="cart">
        <router-link to="/cart" style="color: #ffcb05">
          <i class="fas fa-shopping-cart"></i>Cart
        </router-link>
      </div>
      <div class="header-user">
        <img
          v-if="admin == 'true' && loggedIn == 'true'"
          src="./assets/img/adminImg.png"
        />
        <img
          v-if="admin == 'false' && loggedIn == 'true'"
          src="./assets/img/userImg.png"
        />
        <div
          class="dropdown is-hoverable"
          v-if="admin == 'true' && loggedIn == 'true'"
          style="position: absolute; margin-left: 5%"
        >
          <div class="dropdown-trigger">
            <button
              class="button"
              aria-haspopup="true"
              aria-controls="dropdown-menu4"
              style="
                background-color: unset;
                border-style: unset;
                color: #ffcb05;
                font-size: 100%;
              "
            >
              <span>{{ this.userName ?? "Admin" }}</span>
              <span class="icon is-small">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-menu4" role="menu">
            <div class="dropdown-content" style="background-color: #192653">
              <div
                class="dropdown-item dropdown-item-style"
                style="color: #ffcb05"
                @click="$router.push('/admin-page')"
              >
                <p>Admin Page</p>
              </div>
              <div
                class="dropdown-item dropdown-item-style"
                style="color: #ffcb05"
                @click="logoff()"
              >
                <p>Logoff</p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="dropdown is-hoverable"
          v-else-if="loggedIn == 'true'"
          style="position: absolute; margin-left: 5%"
        >
          <div class="dropdown-trigger">
            <button
              class="button"
              aria-haspopup="true"
              aria-controls="dropdown-menu4"
              style="
                background-color: unset;
                border-style: unset;
                color: #ffcb05;
                font-size: 100%;
              "
            >
              <span>{{ this.userName ?? "Usuário" }}</span>
              <span class="icon is-small">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-menu4" role="menu">
            <div class="dropdown-content" style="background-color: #192653">
              <div
                class="dropdown-item dropdown-item-style"
                style="color: #ffcb05"
                @click="$router.push('/card-of-the-day')"
              >
                <p>Card of The Day</p>
              </div>
              <div
                class="dropdown-item dropdown-item-style"
                style="color: #ffcb05"
                @click="$router.push('/change-info')"
              >
                <p>Edit Profile</p>
              </div>
              <div
                class="dropdown-item dropdown-item-style"
                style="color: #ffcb05"
                @click="logoff()"
              >
                <p>Logoff</p>
              </div>
            </div>
          </div>
        </div>
        <router-link v-else to="/signinup" style="color: #ffcb05">
          <b>Sign-up / Sign-in </b>
          <i class="fas fa-angle-down"></i>
        </router-link>
      </div>
    </div>
    <div class="bottom-header">
      <div class="header-categories">
        <button
          class="btn"
          @click="
            $router.push({
              name: 'catalogue',
              query: { page: '0' },
            })
          "
        >
          <i class="fa fa-bars"></i> Browse All Categories
        </button>
      </div>
      <div class="header-options">
        <button class="btn" @click="$router.push('/')">
          <i class="fas fa-home"></i> Home
        </button>
        <button class="btn" @click="$router.push('/catalogue?page=0')">
          <i class="fa fa-fire"></i> Hot Deals
        </button>
        <button class="btn" @click="$router.push('/catalogue?page=0')">
          <i class="fa fa-bullhorn"></i> New Products
        </button>
      </div>
    </div>
  </div>
  <router-view v-slot="{ Component }" :key="$route.fullPath">
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

<script>
import { useRoute } from "vue-router";

export default {
  name: "SCC0219TrabalhoWebApp",

  data() {
    return {
      searchId: "",
      router: useRoute(),
      admin: false,
      loggedIn: false,
      userName: "",
    };
  },

  mounted() {
    if (localStorage.admin) {
      this.admin = localStorage.getItem("admin");
    }
    if (localStorage.loggedIn) {
      this.loggedIn = localStorage.getItem("loggedIn");
    }
    this.userName = localStorage.userName;

    window.addEventListener("storage", this.storageListener);

    localStorage.cart = [];
  },

  methods: {
    storageListener() {
      // localStorage retorna uma string, converter então para boolean
      this.admin = localStorage.admin;
      this.userName = localStorage.userName;
    },
    logoff() {
      localStorage.admin = false;
      localStorage.loggedIn = false;
      localStorage.userName = "";
      this.admin = false;
      this.loggedIn = false;
      //alert("Logoff realizado com sucesso!");
      // this.$router.push({
      //   name: "home",
      //   query: { arg: "3" },
      // });
      window.location.href = "/?arg=3";
    },
  },

  beforeUnmount() {
    window.removeEventListener("storage", this.storageListener);
  },
};
</script>

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
