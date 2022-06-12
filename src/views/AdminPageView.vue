<template>
  <div>
    <div class="container background-light-light-blue my-5 p-6">
      <h1 class="title is-2">Welcome back adminzao</h1>

      <h2 class="collapse-header title is-3">Add new Card</h2>
      <div class="background-white mx-5">
        <form>
          <div class="columns">
            <div class="column px-5">
              Card Name
              <div class="input-container">
                <input
                  class="input"
                  type="text"
                  placeholder="Card Name"
                  name="cardName"
                />
              </div>
              Price
              <div class="input-container">
                <input
                  class="input"
                  type="Number"
                  placeholder="10.00"
                  min="0"
                  name="cardPrice"
                />
              </div>
              In Stock Quantity
              <div class="input-container">
                <input
                  class="input"
                  type="Number"
                  placeholder="10"
                  min="0"
                  step="1"
                  name="cardQuantity"
                />
              </div>
              Card Image
              <div class="input-container">
                <input
                  class="input-field"
                  type="file"
                  name="cardImage"
                />
              </div>
              <br>
              <div class="input-container">
                <button
                  class="button is-primary"
                  type="submit" 
                  name="cardSubmit">
                  Add card
                </button>
              </div>
            </div>
            <div class="column px-5">
              Card Description
              <div class="input-container">
                <textarea
                  class="textarea"
                  type="text"
                  placeholder="Description"
                  name="cardDescription"
                  value=""
                ></textarea>
              </div>
            </div>
          </div>
        </form>
      </div>

      <br>
      
      <h2 class="collapse-header title is-3">Add new User</h2>
      <div class="background-white mx-5">
        <form>
          <div class="columns">
            <div class="column px-5">
              <h3 class="title is-4">Personal Info</h3>
              Name
              <div class="input-container">
                <input
                  class="input"
                  type="text"
                  placeholder="Username"
                  name="name"
                />
              </div>
              Email
              <div class="input-container">
                <input
                  class="input"
                  type="text"
                  placeholder="email@provider.com"
                  name="email"
                />
              </div>
              Password
              <div class="input-container">
                <input
                  class="input"
                  type="password"
                  placeholder="Password"
                  name="psw"
                />
              </div>
              Confirm Password
              <div class="input-container">
                <input
                  class="input"
                  type="password"
                  placeholder="Confirm password"
                  name="cpsw"
                />
              </div>
              User Type
              <div class="input-container">
                <select class="select">
                  <option value="customer">Customer</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <br>
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
                  name="postcode"
                />
              </div>

              Street
              <div class="input-container">
                <input
                  class="input"
                  type="text"
                  placeholder="Street"
                  name="street"
                />
              </div>

              Number
              <div class="input-container">
                <input
                  class="input"
                  type="text"
                  placeholder="XX-XXx"
                  name="num"
                />
              </div>

              City
              <div class="input-container">
                <input
                  class="input"
                  type="text"
                  placeholder="City"
                  name="city"
                />
              </div>

              State
              <div class="input-container">
                <input
                  class="input"
                  type="text"
                  placeholder="Country state"
                  name="state"
                />
              </div>

              Country
              <div class="input-container">
                <input
                  class="input"
                  type="text"
                  placeholder="Contry"
                  name="country"
                />
              </div>

              Phone
              <div class="input-container">
                <input
                  class="input"
                  type="text"
                  placeholder="(DDD) XXXXX-XXXX"
                  name="phone"
                />
              </div>
            </div>

          </div>
        </form>
      </div>
    </div>
  </div>
</template>

