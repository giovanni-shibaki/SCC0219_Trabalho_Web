<template>
  <div>
    <div class="sign-in-out">
      <div class="sign-in">
        <p class="title">
          Change your profile information here, {{ userName ?? "Usuário" }}
        </p>
        <br /><br />
        On this page you can change any of the informations of your profile,
        just enter the new information on the side and press the button "Save
        Changes" at the end of the page! If you do not wish to change any data
        just leave the spaces blank.

        <img src="../assets/img/treinador.png" />
      </div>
      <div class="sign-up">
        <p class="title">New profile information</p>
        <br /><br />
        <form class="form-sign-up" action="#">
          Username
          <div class="input-container">
            <i class="fa fa-user icon"></i>
            <input
              class="input-field"
              type="text"
              placeholder="Type your new username here"
              name="name"
              v-model="username"
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

          <button type="submit" class="btn" @click="edit_information()">
            Save Changes
          </button>
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
    };
  },

  mounted() {},

  methods: {
    edit_information() {
      alert(
        "Voce mudou as seguintes informacoes de perfil: " +
          this.username +
          ", " +
          this.email +
          ", " +
          this.password +
          ", " +
          this.postalcode +
          ", " +
          this.street +
          ", " +
          this.number +
          ", " +
          this.city +
          ", " +
          this.state +
          ", " +
          this.country +
          ", " +
          this.phone
      );
    },
  },
};
</script>
