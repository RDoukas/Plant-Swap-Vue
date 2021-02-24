<template>
  <div class="users-show">
    <div class="main">
      <div
        class="page-header largest parallax custom text-center"
        style="background-image:url(assets/images/monstera.jpeg)"
        data-0="background-position:50% 50%;"
        data-top-bottom="background-position:50% 100%"
      >
        <div class="container-fluid">
          <h1>Profile</h1>
          <!-- <ol class="breadcrumb">
            <li><a href="index.html">Home</a></li>
            <li><a href="#">Pages</a></li>
            <li class="active">Category</li>
          </ol> -->
        </div>
        <!-- End .container-fluid -->
      </div>
      <!-- End .page-header -->
      <div>
        <ul>
          <li>First Name: {{ user.first_name }}</li>
          <li>Last Name: {{ user.last_name }}</li>
          <li>Username: {{ user.username }}</li>
          <li>Email: {{ user.email }}</li>
        </ul>
      </div>
      <div class="mb60 mb45-sm"></div>
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
