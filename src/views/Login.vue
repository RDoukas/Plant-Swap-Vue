<template>
  <div class="login">
    <div class="login-register-area pt-100 pb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 col-md-12 ml-auto mr-auto">
            <div class="login-register-wrapper">
              <div class="login-register-tab-list nav">
                <a class="active" data-toggle="tab" href="#lg1">
                  <h4>Login</h4>
                </a>
                <a data-toggle="tab" href="#lg2">
                  <h4>Sign Up</h4>
                </a>
              </div>
              <div class="tab-content">
                <div id="lg1" class="tab-pane active">
                  <div class="login-form-container">
                    <div class="login-register-form">
                      <form action="/login" method="post">
                        <input type="text" name="email" placeholder="Email" />
                        <input
                          type="password"
                          name="password"
                          placeholder="Password"
                        />
                        <div class="button-box">
                          <div class="login-toggle-btn">
                            <input type="checkbox" />
                            <label>Remember me</label>
                            <a href="#">Forgot Password?</a>
                          </div>
                          <button type="submit"><span>Login</span></button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div id="lg2" class="tab-pane">
                  <div class="login-form-container">
                    <div class="login-register-form">
                      <form action="#" method="post">
                        <input
                          type="text"
                          name="user-name"
                          placeholder="Username"
                        />
                        <input
                          type="password"
                          name="user-password"
                          placeholder="Password"
                        />
                        <input
                          name="user-email"
                          placeholder="Email"
                          type="email"
                        />
                        <div class="button-box">
                          <button type="submit"><span>Signup</span></button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <form v-on:submit.prevent="submit()">
      <h1>Login</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" class="form-control" v-model="email" />
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password" class="form-control" v-model="password" />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
    <form>
      <div id="sc-password">
        <h1>Reset Password</h1>
        <div class="sc-container">
          <input type="text" placeholder="Email" />
          <input type="submit" value="Get New Password" />
        </div>
      </div>
    </form> -->
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
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
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
