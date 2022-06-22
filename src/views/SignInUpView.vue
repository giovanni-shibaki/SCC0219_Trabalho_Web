<template>
  <div>
    <div class="sign-in-out">
      <div class="sign-in">
        <p class="title">Sign In</p>
        <br /><br />
        <form @submit="login" action="/">
          Email
          <div class="input-container">
            <i class="fa fa-envelope icon"></i>
            <input
              class="input-field"
              type="email"
              placeholder="email@provider.com"
              name="email"
              v-model="loginEmail"
              required
            />
          </div>
          Password
          <div class="input-container">
            <i class="fa fa-key icon"></i>
            <input
              class="input-field"
              type="password"
              placeholder="Type your password here"
              name="psw"
              v-model="loginPassword"
              required
            />
          </div>
          <a href="idk">Forgot your password? Click here.</a>
          <button type="submit" class="btn">Sign In</button>
        </form>
        <img src="../assets/img/treinador.png" />
      </div>
      <div class="sign-up">
        <p class="title">Sign Up</p>
        <br /><br />
        <form class="form-sign-up" action="#">
          Name
          <div class="input-container">
            <i class="fa fa-user icon"></i>
            <input
              class="input-field"
              type="text"
              placeholder="Type your username here"
              name="name"
              required
            />
          </div>
          Email
          <div class="input-container">
            <i class="fa fa-envelope icon"></i>
            <input
              class="input-field"
              type="text"
              placeholder="email@provider.com"
              name="email"
              required
            />
          </div>
          Password
          <div class="input-container">
            <i class="fa fa-key icon"></i>
            <input
              class="input-field"
              type="password"
              placeholder="Type your password here"
              name="psw"
              required
            />
          </div>
          Confirm Password
          <div class="input-container">
            <i class="fa fa-key icon"></i>
            <input
              class="input-field"
              type="password"
              placeholder="Type your password again here"
              name="cpsw"
              required
            />
          </div>

          <br />
          <h1>Address</h1>
          <br />

          Postal Code
          <div class="input-container">
            <i class="fas fa-envelope-open-text icon"></i>
            <input
              class="input-field"
              type="text"
              placeholder="XXXXX-XXX"
              v-maska="'XXXXX-XXX'"
              name="postcode"
            />
          </div>

          Street
          <div class="input-container">
            <i class="fas fa-road icon"></i>
            <input
              class="input-field"
              type="text"
              placeholder="Type your street name"
              name="street"
            />
          </div>

          Number
          <div class="input-container">
            <i class="fas fa-sort-numeric-down icon"></i>
            <input
              class="input-field"
              type="text"
              placeholder="XX-XXX"
              v-maska="'XX-XXX'"
              name="num"
            />
          </div>

          City
          <div class="input-container">
            <i class="fas fa-city icon"></i>
            <input
              class="input-field"
              type="text"
              placeholder="Type the name of your city"
              name="city"
            />
          </div>

          State
          <div class="input-container">
            <i class="fas fa-building icon"></i>
            <input
              class="input-field"
              type="text"
              placeholder="Type your country state"
              name="state"
            />
          </div>

          Country
          <div class="input-container">
            <i class="fas fa-flag icon"></i>
            <input
              class="input-field"
              type="text"
              placeholder="Type your contry name"
              name="country"
            />
          </div>

          Phone
          <div class="input-container">
            <i class="fas fa-phone icon"></i>
            <input
              class="input-field"
              type="text"
              placeholder="(DDD) XXXXX-XXXX"
              v-maska="'(XX) XXXXX-XXXX'"
              name="phone"
            />
          </div>

          <button type="submit" class="btn">Sign Up</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SCC0219TrabalhoWebSignInUpView",

  data() {
    return {
      loginEmail: "",
      loginPassword: "",
    };
  },

  mounted() {},

  methods: {
    login() {
      if (this.loginEmail == "" || this.loginPassword == "") {
        return;
      }
      if (
        this.loginEmail == "admin@admin.com" &&
        this.loginPassword == "admin"
      ) {
        localStorage.admin = true;
        localStorage.loggedIn = true;
        alert("Logou como admin");
      } else {
        localStorage.loggedIn = true;
        localStorage.admin = false;
        alert("Logou como usuário");
      }
    },
  },
};
</script>
