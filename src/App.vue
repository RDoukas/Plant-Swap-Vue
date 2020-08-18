<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/ads">Ads</router-link> |
      <a v-if="isLoggedIn()"
        ><router-link to="/conversations">Messages</router-link></a
      >
      |
      <a v-if="isLoggedIn()"><router-link to="/users/">Profile</router-link></a>
      |
      <a v-if="isLoggedIn()"><router-link to="/logout">Logout</router-link></a>
      |
      <a v-if="!isLoggedIn()"><router-link to="/login">Login</router-link></a> |
      <a v-if="!isLoggedIn()"><router-link to="/signup">Signup</router-link></a>
    </div>

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  methods: {
    isLoggedIn: function() {
      return localStorage.getItem("jwt");
    },

    getUserId: function() {
      return localStorage.getItem("user_id");
    },
  },
};
</script>
