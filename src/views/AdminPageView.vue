<template>
  <div>
    <div class="background-light-light-blue" id="admin-page-container">
      <h1 class="title is-2">Welcome back {{ this.adminName }}</h1>

      <h2 class="collapse-header title is-3">Add new Card</h2>
      <div class="background-white mx-5">
        <form v-on:submit.prevent="addCard()">
          <div class="columns">
            <div class="column px-5">
              Card Id
              <div class="input-container">
                <input
                  class="input"
                  type="text"
                  placeholder="Card Id"
                  name="cardId"
                  v-model="id"
                  required
                />
              </div>
              Card Name
              <div class="input-container">
                <input
                  class="input"
                  type="text"
                  placeholder="Card Name"
                  name="cardName"
                  v-model="cardname"
                />
              </div>
              Card Set Name
              <div class="input-container">
                <input
                  class="input"
                  type="text"
                  placeholder="Card Set Name"
                  name="cardSetName"
                  v-model="setName"
                />
              </div>
              Low Price of the card
              <div class="input-container">
                <input
                  class="input"
                  type="Number"
                  placeholder="10.00"
                  min="0"
                  step="0.01"
                  name="cardPrice"
                  v-model="price"
                />
              </div>
              Market Price of the card
              <div class="input-container">
                <input
                  class="input"
                  type="Number"
                  placeholder="10.00"
                  min="0"
                  step="0.01"
                  name="cardPrice"
                  v-model="marketPrice"
                />
              </div>
              Stock Quantity
              <div class="input-container">
                <input
                  v-model="qtd"
                  class="input"
                  type="Number"
                  placeholder="10"
                  min="0"
                  step="1"
                  name="cardQuantity"
                />
              </div>
              Card Image URL
              <div class="input-container">
                <input
                  class="input"
                  type="text"
                  name="cardImage"
                  placeholder="http://sample.com/pokemon.png"
                  v-model="imagelink"
                  required
                />
              </div>
              <br />
              <br />
              <div class="input-container">
                <button
                  class="button is-primary"
                  type="submit"
                  name="cardSubmit"
                >
                  Add card
                </button>
              </div>
            </div>
            <div class="column px-5">
              <b>Attack 1</b>
              <br />
              Name
              <div class="input-container">
                <input
                  class="input"
                  type="text"
                  placeholder="Attack1 Name"
                  name="cardAttack1Name"
                  v-model="attack1Name"
                />
                Text
              </div>
              <div class="input-container">
                <textarea
                  rows="9"
                  class="textarea"
                  type="text"
                  placeholder="Attack1 Text"
                  name="cardAttack1Text"
                  v-model="attack1Text"
                ></textarea>
              </div>
            </div>
            <div class="column px-5">
              <b>Attack 2</b>
              <br />
              Name
              <div class="input-container">
                <input
                  class="input"
                  type="text"
                  placeholder="Attack2 Name"
                  name="cardAttack2Name"
                  v-model="attack2Name"
                />
              </div>
              Text
              <div class="input-container">
                <textarea
                  rows="9"
                  class="textarea"
                  type="text"
                  placeholder="Attack2 Text"
                  name="cardAttack2Text"
                  v-model="attack2Text"
                ></textarea>
              </div>
            </div>
          </div>
        </form>
      </div>

      <br />
      <br />

      <h2 class="collapse-header title is-3">Add new User</h2>
      <div class="background-white mx-5">
        <form v-on:submit.prevent="addUser()">
          <div class="columns">
            <div class="column px-5">
              <h3 class="title is-4">Personal Info</h3>
              Name
              <div class="input-container">
                <input
                  class="input"
                  type="text"
                  placeholder="Name"
                  name="name"
                  v-model="userName"
                  required
                />
              </div>
              Email
              <div class="input-container">
                <input
                  class="input"
                  type="text"
                  placeholder="email@provider.com"
                  name="email"
                  v-model="userEmail"
                  required
                />
              </div>
              Password
              <div class="input-container">
                <input
                  class="input"
                  type="password"
                  placeholder="Password"
                  name="psw"
                  v-model="password"
                  required
                />
              </div>
              Confirm Password
              <div class="input-container">
                <input
                  class="input"
                  type="password"
                  placeholder="Confirm password"
                  name="cpsw"
                  v-model="confirmPassword"
                  required
                />
              </div>
              User Type
              <div class="input-container">
                <select class="select" v-model="userType">
                  <option value="customer">Customer</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <br /><br /><br /><br /><br /><br /><br />
              <button type="submit" class="button is-primary">Add User</button>
            </div>

            <div class="column px-5">
              <h3 class="title is-4">Address</h3>

              Postal Code
              <div class="input-container">
                <input
                  class="input"
                  type="text"
                  placeholder="XXXXX-XXX"
                  v-maska="'#####-###'"
                  name="postcode"
                  v-model="postalCode"
                />
              </div>

              Street
              <div class="input-container">
                <input
                  class="input"
                  type="text"
                  placeholder="Street"
                  name="street"
                  v-model="street"
                />
              </div>

              Number
              <div class="input-container">
                <input
                  class="input"
                  type="text"
                  placeholder="XX-XXX"
                  v-maska="'##-###'"
                  name="num"
                  v-model="number"
                />
              </div>

              Address Details
              <div class="input-container">
                <input
                  class="input"
                  type="text"
                  placeholder="Additional Information"
                  name="addressDetails"
                  v-model="addressDetails"
                />
              </div>

              City
              <div class="input-container">
                <input
                  class="input"
                  type="text"
                  placeholder="City"
                  name="city"
                  v-model="city"
                />
              </div>

              State
              <div class="input-container">
                <input
                  class="input"
                  type="text"
                  placeholder="Country state"
                  name="state"
                  v-model="state"
                />
              </div>

              Country
              <div class="input-container">
                <input
                  class="input"
                  type="text"
                  placeholder="Contry"
                  name="country"
                  v-model="country"
                />
              </div>

              Phone
              <div class="input-container">
                <input
                  class="input"
                  type="text"
                  placeholder="(DDD) XXXXX-XXXX"
                  v-maska="'(##) #####-####'"
                  name="phone"
                  v-model="phone"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { whileStatement } from "@babel/types";

export default {
  name: "SCC0219TrabalhoWebAdminPageView",

  data() {
    return {
      adminName: "",
      id: "",
      cardname: "",
      price: 0,
      marketPrice: 0,
      imagelink: "",
      attack1Name: "",
      attack1Text: "",
      attack2Name: "",
      attack2Text: "",
      setName: "",
      qtd: 0,
      userType: "customer",
      userName: "",
      userEmail: "",
      confirmPassword: "",
      password: "",
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

  mounted() {
    this.adminName = localStorage.userName;
  },

  methods: {
    addCard() {
      fetch("http://127.0.0.1:3000/cards/addCard", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: this.id,
          name: this.cardname,
          attacks: [
            {
              name: this.attack1Name,
              text: this.attack1Text,
            },
            {
              name: this.attack2Name,
              text: this.attack2Text,
            },
          ],
          images: {
            small: this.imagelink,
          },
          tcgplayer: {
            prices: {
              holofoil: {
                low: this.price,
                market: this.marketPrice,
              },
            },
          },
          quantity: this.qtd,
          set: {
            name: this.setName,
          },
          supertype: "Pokémon",
          rarity: "Common",
        }),
      })
        .then((res) => {
          res.json().then((response) => {
            window.location.href = "/?arg=5";
          });
        })
        .catch((a) => console.log(a));
    },
    addUser() {
      // Checar se as senhas fornecidas nos 2 campos de senha são iguais
      if (this.password != this.confirmPassword) {
        this.$toast(
          "As senhas fornecidas nos campos de senha e confirmar senha não são iguais!",
          {
            duration: 3000,
            styles: {
              color: "white",
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

      // Checar se cadastrou um usuário normal ou admin
      let isAdmin = false;
      if (this.userType == "admin") isAdmin = true;

      console.log(this.userType);
      console.log(isAdmin);

      fetch("http://127.0.0.1:3000/user/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.userName,
          email: this.userEmail,
          password: this.password,
          postalCode: this.postalCode,
          street: this.street,
          number: this.number,
          addressDetails: this.addressDetails,
          city: this.city,
          state: this.state,
          country: this.country,
          phoneNumber: this.phone,
          isAdmin: isAdmin,
        }),
      })
        .then((res) => {
          res.json().then((response) => {
            window.location.href = "/?arg=6";
          });
        })
        .catch((a) => console.log(a));
    },
  },
};
</script>
