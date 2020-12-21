<template>
  <div id="app">
    <div id="page-loader">
      <div class="sk-double-bounce">
        <div class="sk-child sk-double-bounce1"></div>
        <!-- End .sk-child -->
        <div class="sk-child sk-double-bounce2"></div>
        <!-- End .sk-child -->
      </div>
      <!-- End .sk-double-bounce -->
    </div>
    <!-- End #page-loader -->

    <!-- old code  -->
    <div id="wrapper">
      <header class="header sticky-header animated-dropdown ttb-dropdown">
        <div class="header-top">
          <div class="container-fluid">
            <div class="dropdown header-dropdown pull-right"></div>
            <!-- End .header-dropdown -->

            <div
              v-if="isLoggedIn()"
              class="dropdown header-dropdown pull-right"
            >
              <a
                href="/users"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                >Profile</a
              >
            </div>

            <div
              v-if="isLoggedIn()"
              class="dropdown header-dropdown pull-right"
            >
              <a
                href="/conversations"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                >Messages</a
              >
            </div>
            <div
              v-if="isLoggedIn()"
              class="dropdown header-dropdown pull-right"
            >
              <a
                href="/logout"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                >Logout</a
              >
            </div>
            <div
              v-if="!isLoggedIn()"
              class="dropdown header-dropdown pull-right"
            >
              <!-- Register form trigger -->
              <button
                class="btn btn-custom"
                data-toggle="modal"
                data-target="#modal-login-form"
                href="/signup"
              >
                Signup
              </button>
            </div>
            <div
              v-if="!isLoggedIn()"
              class="dropdown header-dropdown pull-right"
            >
              <button
                class="btn btn-custom"
                data-toggle="modal"
                data-target="#modal-login-form"
              >
                Login
              </button>
              <!-- Modal Login Form-->
              <div
                class="modal fade"
                id="modal-login-form"
                tabindex="-1"
                role="dialog"
                aria-labelledby="myModalLabel1"
                aria-hidden="true"
              >
                <form id="login-form" v-on:submit.prevent="submit()">
                  <div class="modal-dialog modal-sm">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                        >
                          <span aria-hidden="true">&times;</span
                          ><span class="sr-only">Close</span>
                        </button>
                        <h3 class="modal-title" id="myModalLabel1">
                          Login
                        </h3>
                      </div>
                      <!-- End .modal-header -->
                      <div class="modal-body">
                        <div class="form-group">
                          <label for="email2" class="form-label"
                            >Email<span class="required">*</span></label
                          >
                          <input
                            type="email"
                            name="email"
                            id="email2"
                            class="form-control"
                            placeholder="Email"
                            required
                            v-model="email"
                          />
                        </div>
                        <!-- End .form-group -->
                        <div class="form-group">
                          <label for="password2" class="form-label"
                            >Passowrd:<span class="required">*</span></label
                          >
                          <input
                            type="password"
                            name="password2"
                            id="password2"
                            class="form-control"
                            placeholder="Password"
                            v-model="password"
                          />
                        </div>
                        <!-- End .form-group -->
                      </div>
                      <!-- End .modal-body -->
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-black"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button class="btn btn-custom">Login</button>
                      </div>
                      <!-- End .modal-footer -->
                    </div>
                    <!-- End .modal-content -->
                  </div>
                  <!-- End .modal-dialog -->
                </form>
              </div>
              <!-- End .modal -->
              <!-- <a
                href="/signup"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                >Register</a
              > -->
            </div>
            <!-- End .header-dropdown -->

            <ul class="top-menu visible-lg pull-right"></ul>

            <div class="top-links pull-left"></div>
            <!-- End .top-links -->
          </div>
          <!-- End .container-fluid -->
        </div>
        <!-- End .header-top -->
        <div class="header-inner">
          <div class="container-fluid">
            <img
              src="/assets/images/kayla-logo.png"
              data-rjs="3"
              alt="Bold Logo"
              height="200px"
            />
            <span class="sr-only"></span>
          </div>
          <!-- End .container-fluid -->
        </div>
        <!-- End .header-inner -->

        <div class="header-bottom">
          <div class="container-fluid">
            <div id="main-nav-container">
              <ul class="nav navbar-nav">
                <li>
                  <a href="/" role="button" aria-expanded="false">Home</a>
                </li>
                <li>
                  <a href="/ads" role="button" aria-expanded="false">Ads</a>
                </li>
                <li>
                  <a href="/about" role="button" aria-expanded="false">About</a>
                </li>
              </ul>
            </div>
            <!-- /.navbar-collapse -->
          </div>
          <!-- End .container-fluid -->
        </div>
        <!-- End .header-bottom -->
      </header>

      <!-- End .header -->
      <!-- End .header-search-form -->
    </div>

    <router-view />
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
    createUser: function() {
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
    isLoggedIn: function() {
      return localStorage.getItem("jwt");
    },

    getUserId: function() {
      return localStorage.getItem("user_id");
    },
  },
};
</script>
