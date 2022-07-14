<template>
  <div>
    <div class="sign-in-out">
      <div class="sign-in">
        <p class="title">
          Change your profile information here, {{ this.userName ?? "Usuário" }}
        </p>
        <br /><br />
        On this page you can change any of the informations of your profile,
        just enter the new information on the side and press the button "Save
        Changes" at the end of the page! If you do not wish to change any data
        just leave the spaces blank.

        <img src="../assets/img/treinador.png" />
      </div>
      <div class="sign-up">
        <p class="title">Profile</p>
        <br />
        <form class="form-sign-up" v-on:submit.prevent="editInformation()">
          Username
          <div class="input-container">
            <i class="fa fa-user icon"></i>
            <input
              class="input-field"
              type="text"
              placeholder="Type your new username here"
              name="name"
              v-model="username"
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
              disabled
            />
          </div>
          Password
          <div class="input-container">
            <i class="fa fa-key icon"></i>
            <input
              class="input-field"
              type="password"
              placeholder="Type your new password here"
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
              placeholder="Type your new password again here"
              name="cpsw"
              v-model="cpassword"
              required
            />
          </div>

          <br />
          <h1>Change Address</h1>
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
              v-model="postalcode"
            />
          </div>

          Street
          <div class="input-container">
            <i class="fas fa-road icon"></i>
            <input
              class="input-field"
              type="text"
              placeholder="Type your new street name"
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
              placeholder="Type the name of your new city"
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
              placeholder="Type your new country state"
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
              placeholder="Type your new contry name"
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

          <button type="submit" class="btn">Save Changes</button>
        </form>
      </div>
    </div>
    <br />
  </div>
</template>
<script>
export default {
  name: "SCC0219TrabalhoWebChangeInfoView",

  data() {
    return {
      username: "",
      userName: "",
      userEmail: "",
      email: "",
      password: "",
      cpassword: "",
      postalcode: "",
      street: "",
      number: "",
      city: "",
      state: "",
      country: "",
      phone: "",
      addressDetails: "",
      isAdmin: false,
    };
  },

  mounted() {
    this.userName = localStorage.userName;
    this.userEmail = localStorage.userEmail;
    this.getUserData();
  },

  methods: {
    editInformation() {
      // Checar se as senhas fornecidas nos 2 campos de senha são iguais
      if (this.password != this.cpassword) {
        alert(
          "As senhas fornecidas nos campos de senha e confirmar senha não são iguais!"
        );
        return;
      }

      fetch("http://127.0.0.1:3000/user/updateUserByEmail", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.username,
          email: this.email,
          password: this.password,
          postalCode: this.postalcode,
          street: this.street,
          number: this.number,
          addressDetails: this.addressDetails,
          city: this.city,
          state: this.state,
          country: this.country,
          phoneNumber: this.phone,
          isAdmin: this.isAdmin,
        }),
      })
        .then((res) => {
          res.json().then((response) => {
            // Cadastro realizado!
            localStorage.userName = this.username;
            // alert("Informações de pefil atualizadas com sucesso!");
            // window.location.href = "/";
            this.$router.push({
              name: "home",
              query: { arg: "4" },
            });
          });
        })
        .catch((a) => console.log(a));

      /*this.username += "\n";
      this.email += "\n";
      this.password += "\n";
      this.postalcode += "\n";
      this.street += "\n";
      this.number += "\n";
      this.city += "\n";
      this.state += "\n";
      this.country += "\n";
      this.phone += "\n";
      this.addressDetails += "\n";
      alert(
        "Voce mudou as seguintes informacoes de perfil:\n" +
          "Username: " +
          this.username +
          "Email: " +
          this.email +
          "Password: " +
          this.password +
          "Postal Code: " +
          this.postalcode +
          "Street: " +
          this.street +
          "Number: " +
          this.number +
          "Adrress Details: " +
          this.addressDetails +
          "City: " +
          this.city +
          "State: " +
          this.state +
          "Country: " +
          this.country +
          "Phone: " +
          this.phone
      );*/
    },
    getUserData() {
      console.log(localStorage.userEmail);
      fetch("http://127.0.0.1:3000/user/getUser", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.userEmail,
        }),
      })
        .then((res) => {
          res
            .json()
            .then((response) => {
              // Recebeu as informações do usuário com sucesso!
              this.username = response.name;
              this.email = response.email;
              this.postalcode = response.postalCode;
              this.street = response.street;
              this.number = response.number;
              this.addressDetails = response.addressDetails;
              this.city = response.city;
              this.state = response.state;
              this.country = response.country;
              this.phone = response.phoneNumber;
              this.isAdmin = response.isAdmin;
            })
            .catch((err) => {
              // Request failed
              console.log("Erro: " + err);
            });
        })
        .catch((err) => {
          err.json().then((error) => {
            console.log("Erro: " + err);
          });
        });
    },
  },
};
</script>
