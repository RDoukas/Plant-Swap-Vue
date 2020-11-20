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
    <div id="wrapper">
      <header class="header sticky-header animated-dropdown ttb-dropdown">
        <div class="header-top">
          <div class="container-fluid">
            <div class="dropdown header-dropdown pull-right"></div>
            <!-- End .header-dropdown -->

            <div class="dropdown header-dropdown pull-right"></div>
            <!-- End .header-dropdown -->

            <ul class="top-menu visible-lg pull-right">
              <li class="active"><a href="/">Home</a></li>
              <div v-if="isLoggedIn()">
                <li><a href="/conversations">Messages</a></li>
                <li><a href="/users">Profile</a></li>
              </div>
            </ul>

            <div class="top-links pull-left">
              <div v-if="!isLoggedIn()">
                <a href="/login">Login</a>
                <a href="/signup">Register</a>
              </div>
              <div v-if="isLoggedIn()">
                <a href="/logout">Logout</a>
              </div>
            </div>
            <!-- End .top-links -->
          </div>
          <!-- End .container-fluid -->
        </div>
        <!-- End .header-top -->

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
              </ul>
            </div>
            <!-- /.navbar-collapse -->
          </div>
          <!-- End .container-fluid -->
        </div>
        <!-- End .header-bottom -->
      </header>
      <!-- End .header -->
    </div>

    <router-view />

    <footer>
      <div class="container-fluid">
        <div class="row"></div>
      </div>
    </footer>
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
