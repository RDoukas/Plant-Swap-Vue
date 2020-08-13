<template>
  <div class="users-show">
    <div class="checkout-area pb-80 pt-100">
      <div class="container">
        <div class="row">
          <div class="ml-auto mr-auto col-lg-9">
            <div class="checkout-wrapper">
              <div id="faq" class="panel-group">
                <div class="panel panel-default single-my-account">
                  <!-- <div
                    class="panel-heading my-account-title"
                    v-on:submit.prevent="editUser()">
                    <h3 class="panel-title">
                      <a
                        data-toggle="collapse"
                        data-parent="#faq"
                        href="#my-account-1"
                        >Edit your account information
                      </a>
                    </h3>
                  </div> -->

                  <div id="my-account-1" class="panel-collapse collapse show">
                    <div class="myaccount-info-wrapper">
                      <form v-on:submit.prevent="editUser()">
                        <h2>Edit your profile:</h2>
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
                            v-model="user.first_name"
                          />
                        </div>
                        <div class="form-group">
                          <label>Last Name:</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="user.last_name"
                          />
                        </div>
                        <div class="form-group">
                          <label>Username:</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="user.username"
                          />
                        </div>
                        <div class="form-group">
                          <label>Email:</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="user.email"
                          />
                        </div>
                        <div class="form-group">
                          <label>Password:</label>
                          <input
                            type="password"
                            class="form-control"
                            v-model="password"
                          />
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
                        <input type="submit" class="btn-hover" value="Update" />
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
      errors: [],
      user: {},
    };
  },
  created: function() {
    axios.get(`/api/users/${this.$route.params.id}`).then((response) => {
      this.user = response.data;
      console.log(this.user);
    });
  },

  methods: {
    destroyUser: function() {
      if (confirm("Are you sure you want to delete your profile?")) {
        axios.delete(`/api/users/${this.user.id}`).then((response) => {
          console.log("Your user has been successfully deleted", response.data);
          this.$router.push("/logout");
        });
      }
    },
    editUser: function() {
      var params = {
        first_name: this.firstName,
        last_name: this.lastName,
        username: this.username,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation,
      };
      if (confirm("Are you sure you'd like to update your profile?")) {
        axios
          .patch(`/api/users/${this.user.id}`, params)
          .then((response) => {
            console.log("Your profile has been updated!", response.data);
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
      }
    },
  },
};
</script>
