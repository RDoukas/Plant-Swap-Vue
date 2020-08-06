<template>
  <div id="app">

    <header class="header-area clearfix header-hm8">
      <div class="header-bottom sticky-bar header-res-padding header-padding-2">
        <div class="container">
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-md-6 col-4">
          <div class="logo text-center">
            <a href="/">
            <img alt="" src="/assets/img/logo/succulent-logo.jpg" height=100px />
            <h4>Chicago Plant Swapp</h4>
            </a>
          </div>
          </div>
          <div class="col-xl-12 col-lg-12 d-none d-lg-block">
          <div class="main-menu">
            <nav>
            <ul>
              <li><a href="/"> Home </a></li>
              <li><a href="/about"> About </a></li>
              <li><a href="/ads"> Ads </a></li>
              <li v-if="!isLoggedIn()"><a href="/login"> Login </a></li>
              <li v-if="!isLoggedIn()">
              <a href="/signup"></i>Signup</a>
              </li>
              <li v-if="isLoggedIn()">
              <a href="/conversations"> Messages </a>
              </li>
              <li v-if="isLoggedIn()">
              <a href="/users">Profile </a>
              </li>
              <li v-if="isLoggedIn()"><a href="/logout"> Logout </a></li>
            </ul>
            </nav>
          </div>
          </div>
        </div>
        </div>
      </div>
    </header>
  

    
  

  <router-view />
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
