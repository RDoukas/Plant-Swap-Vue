<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/ads">Ads</router-link> |
      <a v-if="!isLoggedIn()"><router-link to="/signup">Signup</router-link></a>
    </div> -->
    <header
      class="header-area header-padding-1 sticky-bar header-res-padding clearfix"
    >
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-2 col-lg-2 col-md-6 col-4">
            <div class="logo">
              <a href="index.html">
                <img alt="" src="assets/img/logo/logo.png" />
              </a>
            </div>
          </div>
          <div class="col-xl-8 col-lg-8 d-none d-lg-block">
            <div class="main-menu">
              <nav>
                <ul>
                  <li><a href="/"> Home</a></li>
                  <li><a href="/about"> About </a></li>
                  <li><a href="/ads">Ads</a></li>
                  <li>
                    <a v-if="isLoggedIn()"
                      ><router-link to="/conversations"
                        >Messages</router-link
                      ></a
                    >
                  </li>
                  <li>
                    <a v-if="!isLoggedIn()"
                      ><router-link to="/login">Login</router-link></a
                    >
                  </li>
                  <li>
                    <a v-if="isLoggedIn()"
                      ><router-link to="/users/">Profile</router-link></a
                    >
                  </li>
                  <li>
                    <a v-if="isLoggedIn()"
                      ><router-link to="/logout">Logout</router-link></a
                    >
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="col-xl-2 col-lg-2 col-md-6 col-8">
            <div class="header-right-wrap">
              <div class="same-style header-search">
                <a class="search-active" href="#"
                  ><i class="pe-7s-search"></i
                ></a>
                <div class="search-content">
                  <form action="#">
                    <input type="text" placeholder="Search" />
                    <button class="button-search">
                      <i class="pe-7s-search"></i>
                    </button>
                  </form>
                </div>
              </div>
              <div class="same-style account-satting">
                <div v-if="isLoggedIn()">
                  <a class="account-satting-active" href="/users"
                    ><i class="pe-7s-user-female"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mobile-menu-area">
          <div class="mobile-menu">
            <nav id="mobile-menu-active">
              <ul class="menu-overflow">
                <li>
                  <a href="index.html">HOME</a>
                </li>
                <li><a href="about.html">About us</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
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
