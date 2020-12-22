<template>
  <div class="login">
    <div class="main">
      <div
        class="page-header largest parallax custom text-center"
        style="background-image:url(assets/images/monstera.jpeg)"
        data-0="background-position:50% 50%;"
        data-top-bottom="background-position:50% 100%"
      >
        <div class="container-fluid">
          <h1>Login</h1>
          <!-- <ol class="breadcrumb">
            <li><a href="index.html">Home</a></li>
            <li><a href="#">Pages</a></li>
            <li class="active">Category</li>
          </ol> -->
        </div>
        <!-- End .container-fluid -->
      </div>
      <!-- End .page-header -->
      <div id="wrapper">
        <div class="container-fluid">
          <div class="user-form-container bg-white">
            <h2>Login</h2>
            <form v-on:submit.prevent="submit()">
              <ul>
                <li class="text-danger" v-for="error in errors">{{ error }}</li>
              </ul>
              <div class="form-group">
                <label>Email:</label>
                <input type="email" class="form-control" v-model="email" />
              </div>
              <div class="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  class="form-control"
                  v-model="password"
                />
              </div>

              <div class="row">
                <div class="col-xs-6 mt10-r">
                  <div class="checkbox mb25">
                    <label class="custom-checkbox-wrapper">
                      <span class="custom-checkbox-container">
                        <input type="checkbox" value="true" />
                        <span class="custom-checkbox-icon"></span>
                      </span>
                      <small>Remember me</small>
                    </label>
                  </div>
                  <!-- End .checkbox -->
                </div>
                <!-- End .col-xs-6 -->

                <div class="col-xs-6 mt10-r text-right">
                  <a href="#"><small>Recover Password?</small></a>
                </div>
                <!-- End .col-xs-6 -->
              </div>
              <!-- End .row -->

              <button class="btn btn-custom btn-block min-width">Login</button>
              <div class="mb20"></div>
              <!-- margin -->
              <div class="text-center">
                <small>Not a member yet?</small><br />
                <a href="/signup">Signup Now</a>
              </div>
            </form>
          </div>
          <!-- End .user-form-container -->
        </div>
        <!-- End .container-fluid -->
      </div>
      <!-- End #wrapper -->
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password,
      };
      axios
        .post("/api/sessions", params)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("current_user", response.data.user_id);
          this.$router.push("/");
        })
        .catch((error) => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>
