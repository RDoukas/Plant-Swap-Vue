<template>
  <div class="users-show">
    <div class="mb50 hidden-s"></div>
    <!-- margin -->
    <div class="container-fluid">
      <form v-on:submit.prevent="editUser()">
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>

        <div class="row">
          <h2 class="title custom mb30">Profile Information</h2>
          <div class="col-md-6">
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
          </div>
          <!-- End .col-md-6 -->

          <div class="mb30 visible-sm visible-xs"></div>
          <!-- margin -->
        </div>
        <!-- end .row -->
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Username:</label>
              <input type="text" class="form-control" v-model="user.username" />
            </div>
            <div class="form-group">
              <label>Email:</label>
              <input type="text" class="form-control" v-model="user.email" />
            </div>
            <div class="form-group">
              <label>Password:</label>
              <input type="password" class="form-control" v-model="password" />
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
          </div>
        </div>
        <input type="submit" class="btn btn-custom" value="Update Profile" />
      </form>

      <div class="mb25 mb15-sm"></div>
      <div id="destroyUser">
        <button type="submit" class="btn btn-custom" v-on:click="destroyUser()">
          Delete Profile
        </button>
      </div>
      <div class="mb25 mb15-sm"></div>
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
          localStorage.removeItem(`${this.user.ads}`);
          localStorage.removeItem("jwt");
          localStorage.removeItem("jwt");
          localStorage.removeItem("user_id");
          this.$router.push("/");
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
