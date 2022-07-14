<template>
  <div>
    <div class="sign-in-out">
      <div class="sign-in">
        <p class="title">Sign In</p>
        <br /><br />
        <form v-on:submit.prevent="signin">
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
          <img src="../assets/img/treinador.png" />
        </form>
      </div>
      <div class="sign-up">
        <p class="title">Sign Up</p>
        <br />
        <form class="form-sign-up" v-on:submit.prevent="signup">
          Name
          <div class="input-container">
            <i class="fa fa-user icon"></i>
            <input
              class="input-field"
              type="text"
              placeholder="Type your username here"
              name="name"
              v-model="name"
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
              v-model="email"
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
              v-model="password"
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
              v-model="confirmPassword"
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
              v-model="postalCode"
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
              v-model="street"
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
              v-model="number"
            />
          </div>

          Address Details
          <div class="input-container">
            <i class="fas fa-city icon"></i>
            <input
              class="input-field"
              type="text"
              placeholder="Any additional detail about the address"
              name="addressDetails"
              v-model="addressDetails"
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
              v-model="city"
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
              v-model="state"
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
              v-model="country"
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
              v-model="phone"
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
      arg: 0,
      loginEmail: "",
      loginPassword: "",
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      postalCode: "",
      street: "",
      number: "",
      addressDetails: "",
      city: "",
      state: "",
      country: "",
      phone: "",
    };
  },

  mounted() {},

  methods: {
    signin() {
      if (this.loginEmail == "" || this.loginPassword == "") {
        return;
      }
      fetch("http://127.0.0.1:3000/user/signin", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.loginEmail,
          password: this.loginPassword,
        }),
      })
        .then((res) => {
          res
            .json()
            .then((response) => {
              // Logou com sucesso!
              this.name = response.name;
              this.email = response.email;
              this.password = response.password;
              this.postalCode = response.postalCode;
              this.street = response.street;
              this.number = response.number;
              this.addressDetails = response.addressDetails;
              this.city = response.city;
              this.state = response.state;
              this.country = response.country;
              this.phone = response.phoneNumber;
              this.isAdmin = response.isAdmin;

              if (this.isAdmin == true) {
                localStorage.userName = this.name;
                localStorage.userEmail = this.email;
                localStorage.admin = true;
                localStorage.loggedIn = true;
                window.location.href = "/?arg=1";
              } else {
                localStorage.userName = this.name;
                localStorage.userEmail = this.email;
                localStorage.loggedIn = true;
                localStorage.admin = false;
                window.location.href = "/?arg=2";
              }
            })
            .catch((err) => {
              // Login falhou
              this.$toast("email/senha inválidos!", {
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
              // alert("email/senha inválidos!");
            });
        })
        .catch((err) => {
          err.json().then((error) => {
            console.log("Ovo" + error);
          });
        });
    },
    signup() {
      // Checar se as senhas fornecidas nos 2 campos de senha são iguais
      if (this.password != this.confirmPassword) {
        this.$toast(
          "As senhas fornecidas nos campos de senha e confirmar senha não são iguais!",
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

      fetch("http://127.0.0.1:3000/user/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          password: this.password,
          postalCode: this.postalCode,
          street: this.street,
          number: this.number,
          addressDetails: this.addressDetails,
          city: this.city,
          state: this.state,
          country: this.country,
          phoneNumber: this.phone,
          isAdmin: false,
        }),
      })
        .then((res) => {
          res.json().then((response) => {
            // Cadastro realizado!
            window.location.href = "/?arg=0";
          });
        })
        .catch((a) => console.log(a));
    },
  },
};
</script>
