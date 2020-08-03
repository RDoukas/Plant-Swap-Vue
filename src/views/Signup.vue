<template>
  <div class="signup">
    '
    <div class="login-register-area pt-100 pb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 col-md-12 ml-auto mr-auto">
            <div class="login-register-wrapper">
              <div class="login-register-tab-list nav">
                <a class="active" data-toggle="tab" href="#lg1">
                  <h4>Signup</h4>
                </a>
              </div>
              <div class="tab-content">
                <div id="lg1" class="tab-pane active">
                  <div class="login-form-container">
                    <div class="login-register-form">
                      <form v-on:submit.prevent="submit()">
                        <div class="text-center">
                          <h1>Signup</h1>
                        </div>
                        <ul>
                          <li class="text-danger" v-for="error in errors">
                            {{ error }}
                          </li>
                        </ul>
                        <div class="form-group">
                          <label>First Name:</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="firstName"
                          />
                        </div>
                        <div class="form-group">
                          <label>Last Name:</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="lastName"
                          />
                        </div>
                        <div class="form-group">
                          <label>Username:</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="username"
                          />
                          <div>
                            <small>
                              {{ 20 - username.length }} characters
                              remaining</small
                            >
                          </div>
                        </div>
                        <div class="form-group">
                          <label>Email:</label>
                          <input
                            type="email"
                            class="form-control"
                            v-model="email"
                          />
                        </div>
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
                          <div>
                            <small
                              class="text-danger"
                              v-if="password.length > 20"
                            >
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
                          <small
                            class="text-danger"
                            v-if="passwordConfirmation !== password"
                            >Must match password</small
                          >
                        </div>
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
