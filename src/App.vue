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

    <!-- old code  -->
    <div id="wrapper">
      <header class="header sticky-header animated-dropdown ttb-dropdown">
        <div class="header-top">
          <div class="container-fluid">
            <div class="dropdown header-dropdown pull-right"></div>
            <!-- End .header-dropdown -->

            <div
              v-if="isLoggedIn()"
              class="dropdown header-dropdown pull-right"
            >
              <a
                href="/users"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                >Profile</a
              >
            </div>
            <div
              v-if="isLoggedIn()"
              class="dropdown header-dropdown pull-right"
            >
              <a
                href="/conversations"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                >Messages</a
              >
            </div>
            <div
              v-if="isLoggedIn()"
              class="dropdown header-dropdown pull-right"
            >
              <a
                href="/logout"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                >Logout</a
              >
            </div>
            <div
              v-if="!isLoggedIn()"
              class="dropdown header-dropdown pull-right"
            >
              <a
                href="/login"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                >Login</a
              >
            </div>
            <div
              v-if="!isLoggedIn()"
              class="dropdown header-dropdown pull-right"
            >
              <a
                href="/signup"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                >Register</a
              >
            </div>
            <!-- End .header-dropdown -->

            <ul class="top-menu visible-lg pull-right"></ul>

            <div class="top-links pull-left"></div>
            <!-- End .top-links -->
          </div>
          <!-- End .container-fluid -->
        </div>
        <!-- End .header-top -->
        <div class="header-inner">
          <div class="container-fluid">
            <img
              src="/assets/images/kayla-logo.png"
              data-rjs="3"
              alt="Bold Logo"
              height="200px"
            />
            <span class="sr-only"></span>
          </div>
          <!-- End .container-fluid -->
        </div>
        <!-- End .header-inner -->

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
                <li>
                  <a href="/about" role="button" aria-expanded="false">About</a>
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
              <h1 class="text-white wow fadeInUp" data-wow-delay="0.25s"></h1>
              <p class="text-white wow fadeInUp" data-wow-delay="0.5s"></p>
            </div>
            <!-- End .container-fluid -->
          </div>
          <!-- End .vcenter-content -->
        </div>
        <!-- End .fullscreen -->

        <div class="mb60 mb45-sm"></div>
        <!-- margin -->
      </div>
      <!-- End .main -->
    </div>

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
