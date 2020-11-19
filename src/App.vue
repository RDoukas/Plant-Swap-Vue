<template>
  <div id="wrapper">
  <header class="header header3 sticky-header">
        <div class="header-top">
          <div class="container-fluid">

            <div class="top-links pull-right">
              <a href="#">Login</a>
              <li v-if="!isLoggedIn()">
                  <a href="/signup"></i>Signup</a>
              </li>
              <li v-if="isLoggedIn()">
                <a href="/users">Profile </a>
                </li>
                <li v-if="isLoggedIn()"><a href="/logout"> Logout </a></li>
            </div><!-- End .top-links -->
          </div><!-- End .container-fluid -->
        </div><!-- End .header-top -->

        <div class="header-inner">
          <div class="container-fluid">
            <div class="header-left">
            </div><!-- End .header-left -->

            <div class="header-center">
              <a href="index.html" class="site-logo" title="Bold - Multipurpose Template">
                <img src="/assets/images/PlantSwap.png" data-rjs="3" alt="Bold Logo">
                <span class="sr-only">Plant Swap</span>
              </a>
            </div><!-- End .header-center -->

            <div class="header-right">
            </div><!-- End .header-right -->
          </div><!-- End .container-fluid -->
        </div><!-- End .header-inner -->

        <div class="header-bottom custom">
          <div class="container-fluid">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav-container" aria-expanded="false">
              <span class="toggle-text">Menu</span>
              <span class="toggle-wrapper">
                <span class="sr-only">Toggle Menu</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </span>
            </button>
            <div class="collapse navbar-collapse" id="main-nav-container">
              <ul class="nav navbar-nav navbar-nav-table">
                <ul class="nav navbar-nav">
                  <li><a href="/"> Home </a></li>
                  <!-- <li><a href="/about"> About </a></li> -->
                  <li><a href="/ads"> Ads </a></li>
                  <li v-if="!isLoggedIn()"><a href="/login"> Login </a></li>
                  
                  <li v-if="isLoggedIn()">
                  <a href="/conversations"> Messages </a>
                  </li>
                 

                </ul>
                
                <li>
                  <a href="#" class="header-search-toggle" role="button" title="Open Search"><span class="visible-inline-xs">Search</span><i class="fa fa-search"></i></a>
                </li>
              </ul>
            </div><!-- /.navbar-collapse -->
          </div><!-- End .container-fluid -->
        </div><!-- End .header-bottom -->
      </header><!-- End .header -->

      <div class="header-search-form">
        <a href="#" class="header-search-toggle" title="Close"><i class="fa fa-times"></i></a>
        <form action="#">
          <input type="search" class="form-control" placeholder="Type in here" required>
        </form>
      </div><!-- End .header-search-form -->
  <router-view />

  <footer class="footer"></footer>
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
