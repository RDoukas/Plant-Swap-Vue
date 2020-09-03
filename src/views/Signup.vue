<template>
  <div class="signup">
    <div id="wrapper">
      <div class="container-fluid">
        <div class="user-form-container register-form bg-white">
          <h2 class="mb30">Signup</h2>
          <form v-on:submit.prevent="submit()">
            <ul>
              <li class="text-danger" v-for="error in errors">{{ error }}</li>
            </ul>
            <div class="row">
              <div class="col-sm-6 ">
                <div class="form-group">
                  <label>First Name:</label>
                  <input type="text" class="form-control" v-model="firstName" />
                </div>
                <!-- End .from-group -->
              </div>
              <!-- End .col-sm-6 -->
              <div class="col-sm-6 ">
                <div class="form-group">
                  <label>Last Name:</label>
                  <input type="text" class="form-control" v-model="lastName" />
                </div>
                <!-- End .from-group -->
              </div>
              <!-- End .col-sm-6 -->
            </div>
            <!-- End .row -->

            <div class="row">
              <div class="col-sm-6 ">
                <div class="form-group">
                  <label>Email:</label>
                  <input type="email" class="form-control" v-model="email" />
                </div>
                <!-- End .from-group -->
              </div>
              <!-- End .col-sm-6 -->
              <div class="col-sm-6 ">
                <div class="form-group">
                  <label>Username:</label>
                  <input type="text" class="form-control" v-model="username" />
                  <div>
                    <small>
                      {{ 20 - username.length }} characters remaining</small
                    >
                  </div>
                </div>
                <!-- End .from-group -->
              </div>
              <!-- End .col-sm-6 -->
            </div>
            <!-- End .row -->

            <div class="row">
              <div class="col-sm-6 ">
                <div class="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    class="form-control"
                    v-model="password"
                  />
                  <div>
                    <small
                      class="text-danger"
                      v-if="password.length > 0 && password.length < 6"
                    >
                      Must be at least 6 characters</small
                    >
                  </div>
                  <!-- End .from-group -->
                </div>
              </div>
              <!-- End .col-sm-6 -->
              <div class="col-sm-6 ">
                <div class="form-group">
                  <label>Password confirmation: </label>
                  <input
                    type="password"
                    class="form-control"
                    v-model="passwordConfirmation"
                  />
                  <small
                    class="text-danger"
                    v-if="passwordConfirmation !== password"
                    >Must match password</small
                  >
                </div>
                <!-- End .from-group -->
              </div>
              <!-- End .col-sm-6 -->
            </div>
            <!-- End .row -->

            <div class="mb10"></div>
            <!-- space -->

            <div class="form-group mb0">
              <div class="checkbox">
                <label class="custom-checkbox-wrapper">
                  <span class="custom-checkbox-container">
                    <input type="checkbox" value="true" />
                    <span class="custom-checkbox-icon"></span>
                  </span>
                  <span
                    >I have read and agree on the
                    <a href="#">Privacy Policy</a>.</span
                  >
                </label>
              </div>
              <!-- End .checkbox -->
            </div>
            <!-- End .form-group -->

            <div class="form-group mb5">
              <input
                type="submit"
                class="btn btn-custom min-width"
                value="Signup"
              />
            </div>
            <!-- End .from-group -->
          </form>
        </div>
        <!-- End .register-form-container -->
      </div>
      <!-- End .container-fluid -->
    </div>
    <!-- End #wrapper -->
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
