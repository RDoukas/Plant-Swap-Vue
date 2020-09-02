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
      <header class="header header3 sticky-header">
        <div class="header-top">
          <div class="container-fluid">
            <div class="dropdown header-dropdown pull-right"></div>
            <!-- End .header-dropdown -->

            <div class="dropdown header-dropdown pull-right"></div>
            <!-- End .header-dropdown -->

            <ul class="top-menu visible-lg pull-left"></ul>

            <div class="top-links pull-right">
              <a v-if="!isLoggedIn()" href="/login">Login</a>
              <a v-if="!isLoggedIn()" href="/signup">Signup</a>
              <a v-if="isLoggedIn()" href="/logout">Logout</a>
            </div>
            <!-- End .top-links -->
          </div>
          <!-- End .container-fluid -->
        </div>
        <!-- End .header-top -->

        <div class="header-inner">
          <div class="container-fluid">
            <div class="header-left"></div>
            <!-- End .header-left -->

            <div class="header-center">
              <a
                href="index.html"
                class="site-logo"
                title="Bold - Multipurpose Template"
              >
                <img
                  src="/assets/images/plant-logo.png"
                  data-rjs="3"
                  alt="Logo"
                  width="200px"
                />
              </a>
            </div>
            <!-- End .header-center -->

            <div class="header-right"></div>
            <!-- End .header-right -->
          </div>
          <!-- End .container-fluid -->
        </div>
        <!-- End .header-inner -->

        <div class="header-bottom dark">
          <div class="container-fluid">
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#main-nav-container"
              aria-expanded="false"
            >
              <span class="toggle-text">Menu</span>
              <span class="toggle-wrapper">
                <span class="sr-only">Toggle Menu</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </span>
            </button>
            <div id="main-nav-container">
              <ul class="nav navbar-nav navbar-nav-table">
                <li>
                  <a href="/" class="btn btn-black">Home</a>
                </li>
                <li>
                  <a href="/ads" class="btn btn-black">Ads</a>
                </li>
                <li>
                  <a
                    v-if="isLoggedIn()"
                    href="/conversations"
                    class="btn btn-black"
                    >Messages</a
                  >
                </li>
                <li>
                  <a v-if="isLoggedIn()" href="/users" class="btn btn-black"
                    >Profile</a
                  >
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

      <!-- <div class="header-search-form">
        <a href="#" class="header-search-toggle" title="Close"
          ><i class="fa fa-times"></i
        ></a>
        <form action="#">
          <input
            type="search"
            class="form-control"
            placeholder="Type in here"
            required
          />
        </form>
      </div> -->
      <!-- End .header-search-form -->
      

      <a id="scroll-top" href="#top" title="Scroll top"
        ><i class="fa fa-angle-up"></i
      ></a>

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
