<template>
  <div class="users-show">
    <div id="wrapper">
      <div class="container-fluid">
        <div class="user-form-container register-form bg-white">
          <h2 class="mb30">Profile Information</h2>
          <form v-on:submit.prevent="editUser()">
            <!-- <ul>
              <li class="text-danger" v-for="error in errors">{{ error }}</li>
            </ul> -->
            <div class="row">
              <div class="col-sm-6 ">
                <div class="form-group">
                  <label>First Name:</label>
                  <input type="text" class="form-control" v-model="user.first_name" />
                </div><!-- End .from-group -->
              </div><!-- End .col-sm-6 -->
              <div class="col-sm-6 ">
                <div class="form-group">
                  <label>Last Name:</label>
                  <input type="text" class="form-control" v-model="user.last_name" />   
                </div><!-- End .from-group -->
              </div><!-- End .col-sm-6 -->
            </div><!-- End .row -->

            <div class="row">
              <div class="col-sm-6 ">
                <div class="form-group">
                  <label>Username:</label>
                  <input type="text" class="form-control" v-model="user.username" />
                </div><!-- End .from-group -->
              </div><!-- End .col-sm-6 -->
              <div class="col-sm-6 ">
                <div class="form-group">
                  <label>Email:</label>
                  <input type="text" class="form-control" v-model="user.email" />   
                </div><!-- End .from-group -->
              </div><!-- End .col-sm-6 -->
            </div><!-- End .row -->
            
            <div class="row">
              <div class="col-sm-6 ">
                <div class="form-group">
                  <label>Password:</label>
                  <input type="password" class="form-control" v-model="password" />
                </div><!-- End .from-group -->
              </div><!-- End .col-sm-6 -->
              <div class="col-sm-6 ">
                <div class="form-group">
                  <label>Password confirmation: </label>
                  <input
                    type="password"
                    class="form-control"
                    v-model="passwordConfirmation"
                  />
                  <small class="text-danger" v-if="passwordConfirmation !== password">Must match password</small>
                </div><!-- End .from-group -->
              </div><!-- End .col-sm-6 -->
            </div><!-- End .row -->
            <div class="mb10"></div><!-- space -->
              <input type="submit" class="btn btn-custom min-width" value="Update Profile">
            </div><!-- End .from-group -->
          </form>
        </div><!-- End .register-form-container -->
      </div><!-- End .container-fluid -->
    </div><!-- End #wrapper -->
    
      
    <!-- <div id="destroyUser">
      <button class="btn btn-custom min-width" v-on:click="destroyUser()">Delete Your Profile</button>
    </div> -->
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
