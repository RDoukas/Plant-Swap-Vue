<template>
  <div class="users-show">
    <div class="main">
      <div
        class="fullscreen vertical-center bg-image overlay-container overflow-hidden"
        style="background-image:url(/assets/images/monstera.jpeg)"
      >
        <div class="overlay custom"></div>
        <!-- End .overlay -->
        <div id="particles-js"></div>
        <!-- End #particles-js -->

        <div class="vcenter-content text-center">
          <div class="container-fluid">
            <h1 class="text-white wow fadeInUp" data-wow-delay="0.25s">
              Your Profile
            </h1>
            <p class="text-white wow fadeInUp" data-wow-delay="0.5s"></p>
          </div>
          <!-- End .container-fluid -->
        </div>
        <!-- End .vcenter-content -->
      </div>
      <!-- End .fullscreen -->
      <div
        class="panel-heading my-account-title"
        v-on:submit.prevent="editUser()"
      >
        <h3 class="panel-title">
          <a data-toggle="collapse" data-parent="#faq" href="#my-account-1"
            >Edit your account information
          </a>
        </h3>
      </div>

      <form v-on:submit.prevent="editUser()">
        <ul>
          <li class="text-danger" v-for="error in errors">
            {{ error }}
          </li>
        </ul>
        <div class="form-group">
          <label>First Name:</label>
          <input type="text" class="form-control" v-model="user.first_name" />
        </div>
        <div class="form-group">
          <label>Last Name:</label>
          <input type="text" class="form-control" v-model="user.last_name" />
        </div>
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
          <small class="text-danger" v-if="passwordConfirmation !== password"
            >Must match password</small
          >
        </div>
        <input type="submit" class="btn-hover" value="Update" />
      </form>
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
