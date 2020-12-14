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
    <div id=""></div>

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
            </a>

            <div class="dropdown header-dropdown cart-dropdown">
              <a
                href="#"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span>
                  <i class="fa fa-shopping-basket"></i>
                  <span class="dcart-total-count">2</span>
                </span>
              </a>

              <div class="dropdown-menu">
                <p>2 item(s) in your cart - <span>$279.00</span></p>
                <div class="dcart-products">
                  <div class="product">
                    <figure>
                      <a href="#">
                        <img
                          src="assets/images/products/thumbs/product1.jpg"
                          alt="Product"
                        />
                      </a>
                    </figure>
                    <div class="product-meta">
                      <h5 class="product-title">
                        <a href="#">Oluptate cumque quo archi deleni.</a>
                      </h5>
                      <div class="product-price-container">
                        <span class="product-price">$180.00</span>
                      </div>
                      <!-- End .product-price-container -->
                      <span class="product-quantity">x 1</span>
                    </div>
                    <!-- End .product-meta -->
                    <a href="#" class="delete-btn" title="Delete Product"
                      ><i class="fa fa-times"></i
                    ></a>
                  </div>
                  <!-- End .product -->
                  <div class="product">
                    <figure>
                      <a href="#">
                        <img
                          src="assets/images/products/thumbs/product2.jpg"
                          alt="Product"
                        />
                      </a>
                    </figure>
                    <div class="product-meta">
                      <h5 class="product-title">
                        <a href="#">Lorem ipsum dolor sit amet consect.</a>
                      </h5>
                      <div class="product-price-container">
                        <span class="old-price">$140.00</span>
                        <span class="product-price">$99.00</span>
                      </div>
                      <!-- End .product-price-container -->
                      <span class="product-quantity">x 2</span>
                    </div>
                    <!-- End .product-meta -->
                    <a href="#" class="delete-btn" title="Delete Product"
                      ><i class="fa fa-times"></i
                    ></a>
                  </div>
                  <!-- End .product -->
                </div>
                <!-- End .dcart-products -->
              </div>
              <!-- End .dropdown-menu -->
            </div>
            <!-- End .cartdropdown -->
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
          style="background-image:url(assets/images/backgrounds/index5/page-header.jpg)"
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
