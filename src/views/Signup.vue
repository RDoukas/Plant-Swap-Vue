<template>
  <div class="signup">
    <form v-on:submit.prevent="submit()">
      <div class="text-center">
        <h1>Signup</h1>
        <img v-if="status" :src="`https://http.cat/${status}`" alt="" />
      </div>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>First Name:</label>
        <input type="text" class="form-control" v-model="firstName" />
      </div>
      <div class="form-group">
        <label>Last Name:</label>
        <input type="text" class="form-control" v-model="lastName" />
      </div>
      <div class="form-group">
        <label>Username:</label>
        <input type="text" class="form-control" v-model="username" />
        <div>
          <small> {{ 20 - username.length }} characters remaining</small>
        </div>
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" class="form-control" v-model="email" />
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password" class="form-control" v-model="password" />
        <div>
          <small
            class="text-danger"
            v-if="password.length > 0 && password.length < 6"
          >
            Must be at least 6 characters</small
          >
        </div>
        <div>
          <small class="text-danger" v-if="password.length > 20">
            Cannot exceed 20 characters</small
          >
        </div>
      </div>
      <div class="form-group">
        <label>Password confirmation: </label>
        <input
          type="password"
          class="form-control"
          v-model="passwordConfirmation"
        />
        <small class="text-danger" v-if="passwordConfirmation !== password"
          >Must match password</small
        >
      </div>
      <input type="submit" class="button" value="Signup" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: [],
      status: "",
    };
  },
  methods: {
    submit: function() {
      var params = {
        first_name: this.firstName,
        last_name: this.lastName,
        username: this.username,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation,
      };
      axios
        .post("/api/users", params)
        .then((response) => {
          // this.$parent.flashMessage = "Successfully signed up!";
          this.$router.push("/login");
        })
        .catch((error) => {
          this.status = error.response.status;
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
