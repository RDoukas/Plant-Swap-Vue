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
      <div class="main">
        <div
          id="rev_slider_wrapper"
          class="slider-container mb0 rev_slider_wrapper rev_container_1 fullwidthbanner-container"
          data-alias="classicslider1"
        >
          <div
            id="rev_slider"
            class="rev_slider fullwidthabanner"
            style="display:none;"
            data-version="5.0.7"
          >
            <ul>
              <!-- SLIDE  -->
              <li
                data-index="rs-1"
                data-transition="crossfade"
                data-slotamount="7"
                data-easein="Power4.easeInOut"
                data-easeout="Power4.easeInOut"
                data-masterspeed="1200"
                data-thumb="assets/images/homepages/index-shop/slide1-150x100.jpg"
                data-rotate="0"
                data-saveperformance="off"
                data-title="Great"
              >
                <!-- MAIN IMAGE -->
                <img
                  src="assets/images/homepages/index-shop/slide1.jpg"
                  alt="Slider bg 1"
                  data-bgposition="center center"
                  data-duration="11000"
                  data-bgparallax="10"
                  data-ease="Linear.easeNone"
                  class="rev-slidebg"
                  data-no-retina
                />
                <!-- LAYERS -->

                <!-- LAYER NR. 1 -->
                <div
                  class="tp-caption tp-resizeme rs-parallaxlevel-0"
                  id="slide-1-layer-1"
                  data-x="['left','left','left','left']"
                  data-hoffset="['120','60','30','15']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['-40','-35','-35','-30']"
                  data-fontsize="['60','54','44','32']"
                  data-fontweight="700"
                  data-lineheight="['60','54','44','32']"
                  data-width="none"
                  data-color="#fff"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-transform_idle="sX:1;sY:1;o:1;"
                  data-transform_in="sX:0;sY:0;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                  data-transform_out="sX:0;sY:0;s:1000;e:Power2.easeInOut;"
                  data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                  data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                  data-start="900"
                  data-splitin="none"
                  data-splitout="none"
                  data-responsive_offset="on"
                  data-elementdelay="0.1"
                  style="z-index: 8; white-space: nowrap;text-shadow:0 3px 8px rgba(0,0,0, 0.35);"
                >
                  See Our Latest Deals
                </div>

                <!-- LAYER NR. 2 -->
                <div
                  class="tp-caption tp-resizeme rs-parallaxlevel-0"
                  id="slide-1-layer-2"
                  data-x="['left','left','left','left']"
                  data-hoffset="['120','60','30','15']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['10','10','5','5']"
                  data-width="none"
                  data-height="none"
                  data-color="#fff"
                  data-fontsize="['22','20','18','16']"
                  data-fontweight="300"
                  data-lineheight="['22','20','18','16']"
                  data-whitespace="nowrap"
                  data-transform_idle="sX:1;sY:1;o:1;"
                  data-transform_in="sX:0;sY:0;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                  data-transform_out="sX:0;sY:0;s:1000;e:Power2.easeInOut;"
                  data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"
                  data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                  data-start="1200"
                  data-splitin="none"
                  data-splitout="none"
                  data-responsive_offset="on"
                  style="z-index: 7; white-space: nowrap;text-shadow:0 2px 5px rgba(0,0,0, 0.35);"
                >
                  WE OFFER THE BEST PRICES FOR YOU
                </div>

                <!-- LAYER NR. 3 -->
                <a
                  class="tp-caption btn btn-custom min-width tp-resizeme rs-parallaxlevel-0"
                  id="slide-1-layer-3"
                  data-x="['left','left','left','left']"
                  data-hoffset="['120','60','30','15']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['80','75','70','65']"
                  data-witdh="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-transform_idle="o:1;"
                  data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                  data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                  data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"
                  data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                  data-start="1800"
                  data-splitin="none"
                  data-splitout="none"
                  data-responsive_offset="on"
                  style="z-index: 6; white-space: nowrap;"
                  href="#"
                  >See Features
                </a>

                <!-- LAYER NR. 4 -->
                <div
                  class="tp-caption tp-resizeme rs-parallaxlevel-0"
                  id="slide-1-layer-4"
                  data-x="['right','right','right','right']"
                  data-hoffset="['380','200','125','75']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['10','10','5','5']"
                  data-width="none"
                  data-height="none"
                  data-color="#fff"
                  data-whitespace="nowrap"
                  data-transform_idle="x:0;sX:1;sY:1;o:1;"
                  data-transform_in="x[100%];sX:0;sY:0;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                  data-transform_out="x[100%];sX:0;sY:0;s:1000;e:Power2.easeInOut;"
                  data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"
                  data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                  data-start="1600"
                  data-splitin="none"
                  data-splitout="none"
                  data-responsive_offset="on"
                  style="z-index: 5;"
                >
                  <img
                    src="assets/images/homepages/index-shop/phone1.png"
                    alt="Laptops"
                    width="174"
                    height="440"
                    data-ww="['174px', '139px', '104px', '67px']"
                    data-hh="['440px', '352px', '264px', '176px']"
                    data-no-retina
                  />
                </div>

                <!-- LAYER NR. 5 -->
                <div
                  class="tp-caption tp-resizeme rs-parallaxlevel-0"
                  id="slide-1-layer-5"
                  data-x="['right','right','right','right']"
                  data-hoffset="['265','105','50','30']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['10','10','5','5']"
                  data-width="none"
                  data-height="none"
                  data-color="#fff"
                  data-whitespace="nowrap"
                  data-transform_idle="x:0;sX:1;sY:1;o:1;"
                  data-transform_in="x[100%];sX:0;sY:0;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                  data-transform_out="x[100%];sX:0;sY:0;s:1000;e:Power2.easeInOut;"
                  data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"
                  data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                  data-start="1400"
                  data-splitin="none"
                  data-splitout="none"
                  data-responsive_offset="on"
                  style="z-index: 4;"
                >
                  <img
                    src="assets/images/homepages/index-shop/phone2.png"
                    alt="Laptops"
                    width="999"
                    height="400"
                    data-ww="['99px', '79px', '59px', '40px']"
                    data-hh="['400px', '320px', '240px', '160px']"
                    data-no-retina
                  />
                </div>
              </li>
              <!-- SLIDE  -->
              <li
                data-index="rs-2"
                data-transition="crossfade"
                data-slotamount="7"
                data-easein="Power4.easeInOut"
                data-easeout="Power4.easeInOut"
                data-masterspeed="1200"
                data-thumb="assets/images/homepages/index-shop/slide2-150x100.jpg"
                data-rotate="0"
                data-saveperformance="off"
                data-title="Design"
              >
                <!-- MAIN IMAGE -->
                <img
                  src="assets/images/homepages/index-shop/slide2.jpg"
                  alt="Slider bg 2"
                  data-bgposition="center center"
                  data-duration="11000"
                  data-bgparallax="10"
                  data-ease="Linear.easeNone"
                  class="rev-slidebg"
                  data-no-retina
                />
                <!-- LAYERS -->

                <!-- LAYER NR. 1 -->
                <div
                  class="tp-caption tp-resizeme rs-parallaxlevel-0"
                  id="slide-2-layer-1"
                  data-x="['right','right','right','right']"
                  data-hoffset="['120','60','30','15']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['-40','-35','-35','-30']"
                  data-fontsize="['60','54','44','32']"
                  data-fontweight="700"
                  data-lineheight="['60','54','44','32']"
                  data-width="none"
                  data-color="#fff"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-transform_idle="sX:1;sY:1;o:1;"
                  data-transform_in="sX:0;sY:0;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                  data-transform_out="sX:0;sY:0;s:1000;e:Power2.easeInOut;"
                  data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                  data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                  data-start="900"
                  data-splitin="none"
                  data-splitout="none"
                  data-responsive_offset="on"
                  data-elementdelay="0.1"
                  style="z-index: 8; white-space: nowrap;text-shadow:0 3px 8px rgba(0,0,0, 0.35);"
                >
                  2017 Special Events
                </div>

                <!-- LAYER NR. 2 -->
                <div
                  class="tp-caption tp-resizeme rs-parallaxlevel-0"
                  id="slide-2-layer-2"
                  data-x="['right','right','right','right']"
                  data-hoffset="['120','60','30','15']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['10','10','5','5']"
                  data-width="none"
                  data-height="none"
                  data-color="#fff"
                  data-fontsize="['22','20','18','16']"
                  data-fontweight="300"
                  data-lineheight="['22','20','18','16']"
                  data-whitespace="nowrap"
                  data-transform_idle="sX:1;sY:1;o:1;"
                  data-transform_in="sX:0;sY:0;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                  data-transform_out="sX:0;sY:0;s:1000;e:Power2.easeInOut;"
                  data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"
                  data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                  data-start="1200"
                  data-splitin="none"
                  data-splitout="none"
                  data-responsive_offset="on"
                  style="z-index: 7; white-space: nowrap;text-shadow:0 2px 5px rgba(0,0,0, 0.35);"
                >
                  GET THE LATEST DEALS &amp; DISCOUNTS
                </div>

                <!-- LAYER NR. 3 -->
                <a
                  class="tp-caption btn btn-custom min-width tp-resizeme rs-parallaxlevel-0"
                  id="slide-2-layer-3"
                  data-x="['right','right','right','right']"
                  data-hoffset="['120','50','20','15']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['80','75','70','65']"
                  data-witdh="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-transform_idle="o:1;"
                  data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                  data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                  data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"
                  data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                  data-start="1800"
                  data-splitin="none"
                  data-splitout="none"
                  data-responsive_offset="on"
                  style="z-index: 6; white-space: nowrap;"
                  href="#"
                  >See Features
                </a>

                <!-- LAYER NR. 4 -->
                <div
                  class="tp-caption tp-resizeme rs-parallaxlevel-0"
                  id="slide-2-layer-4"
                  data-x="['left','left','left','left']"
                  data-hoffset="['130','50','30','15']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['10','10','5','5']"
                  data-width="none"
                  data-height="none"
                  data-color="#fff"
                  data-whitespace="nowrap"
                  data-transform_idle="sX:1;sY:1;o:1;"
                  data-transform_in="sX:0;sY:0;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                  data-transform_out="sX:0;sY:0;s:1000;e:Power2.easeInOut;"
                  data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"
                  data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                  data-start="1400"
                  data-splitin="none"
                  data-splitout="none"
                  data-responsive_offset="on"
                  style="z-index: 5;"
                >
                  <img
                    src="assets/images/homepages/index-shop/laptops.png"
                    alt="Laptops"
                    width="555"
                    height="307"
                    data-ww="['555px', '444px', '333px', '222px']"
                    data-hh="['307px', '246px', '184px', '123px']"
                    data-no-retina
                  />
                </div>
              </li>
            </ul>
            <div
              class="tp-bannertimer tp-bottom"
              style="height: 4px; background-color: rgba(255, 255, 255, 0.5);"
            ></div>
          </div>
          <!-- End #rev_slider -->
        </div>
        <!-- END REVOLUTION SLIDER -->

        <div class="info-boxes-container custom">
          <div class="container-fluid">
            <div class="info-box text-center">
              <div class="info-box-wrapper">
                <i class="fa fa-truck info-box-icon"></i>
                <div class="info-box-content">
                  <h4 class="info-box-title">All Free Shipping</h4>
                  <p>We provide free shipping all around the world.</p>
                </div>
                <!-- End .info-box-content -->
              </div>
              <!-- End .info-box-wrapper -->
            </div>
            <!-- End .info-box -->

            <div class="info-box text-center">
              <div class="info-box-wrapper">
                <i class="fa fa-tag info-box-icon"></i>
                <div class="info-box-content">
                  <h4 class="info-box-title">Money back Guarantee.</h4>
                  <p>If you don't like it, return it in 2 weeks.</p>
                </div>
                <!-- End .info-box-content -->
              </div>
              <!-- end .info-box-wrapper -->
            </div>
            <!-- End .info-box -->

            <div class="info-box text-center">
              <div class="info-box-wrapper">
                <i class="fa fa-support info-box-icon"></i>
                <div class="info-box-content">
                  <h4 class="info-box-title">Free Customer Support</h4>
                  <p>24h free and reliable support.</p>
                </div>
                <!-- End .info-box-content -->
              </div>
              <!-- end .info-box-wrapper -->
            </div>
            <!-- End .info-box -->
          </div>
          <!-- End .container-fluid -->
        </div>
        <!-- End .info-boxes-container -->

        <div class="container-fluid">
          <div role="tabpanel">
            <!-- Nav tabs -->
            <ul class="nav nav-tabs nav-tabs-flex" role="tablist">
              <li role="presentation" class="active">
                <a
                  href="#recent-products-tab"
                  aria-controls="recent-products-tab"
                  role="tab"
                  data-toggle="tab"
                  >Recent Products</a
                >
              </li>

              <li role="presentation">
                <a
                  href="#popular-products-tab"
                  aria-controls="popular-products-tab"
                  role="tab"
                  data-toggle="tab"
                  >Popular Products</a
                >
              </li>

              <li role="presentation">
                <a
                  href="#trending-products-tab"
                  aria-controls="trending-products-tab"
                  role="tab"
                  data-toggle="tab"
                  >Trending Products</a
                >
              </li>
            </ul>

            <!-- Tab Panes -->
            <div class="tab-content">
              <div
                role="tabpanel"
                class="tab-pane active"
                id="recent-products-tab"
              >
                <div class="row">
                  <div class="col-md-3 col-xs-6 col-xss-12">
                    <div class="product">
                      <div class="product-top">
                        <span class="label new">New</span>
                        <figure>
                          <a href="product.html" title="Product Name">
                            <img
                              src="assets/images/products/product1.jpg"
                              alt="Product image"
                              class="product-image"
                            />
                            <img
                              src="assets/images/products/product1-hover.jpg"
                              alt="Product image"
                              class="image-hover"
                            />
                          </a>
                        </figure>
                        <div class="product-action-container">
                          <a
                            href="#"
                            class="btn product-add-btn"
                            data-toggle="tooltip"
                            title="Add to Cart"
                            ><i class="fa fa-shopping-cart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-wishlist-btn"
                            data-toggle="tooltip"
                            title="Add to Wishlist"
                            ><i class="fa fa-heart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-compare-btn"
                            data-toggle="tooltip"
                            title="Compare"
                            ><i class="fa fa-retweet"></i
                          ></a>
                        </div>
                        <!-- End .product-action-container -->
                      </div>
                      <!-- End .product -->
                      <h3 class="product-title">
                        <a href="product.html"
                          >Debitis reicie ndis facili salis</a
                        >
                      </h3>
                      <div class="ratings-container">
                        <a href="#" class="product-ratings" title="4 Ratings">
                          <span class="ratings" style="width:80%">
                            <span class="ratings-text sr-only"
                              >4 Ratings</span
                            > </span
                          ><!-- End .ratings --> </a
                        ><!-- End .product-ratings -->
                      </div>
                      <!-- End .ratings-container -->
                      <div class="product-price-container">
                        <span class="old-price">$99.00</span>
                        <span class="product-price">$49.00</span>
                      </div>
                      <!-- End .product-price-container -->
                    </div>
                    <!-- End .product -->
                  </div>
                  <!-- End .col-md-3 -->

                  <div class="col-md-3 col-xs-6 col-xss-12">
                    <div class="product">
                      <div class="product-top">
                        <figure>
                          <a href="product.html" title="Product Name">
                            <img
                              src="assets/images/products/product2.jpg"
                              alt="Product image"
                              class="product-image"
                            />
                            <img
                              src="assets/images/products/product2-hover.jpg"
                              alt="Product image"
                              class="image-hover"
                            />
                          </a>
                        </figure>
                        <div class="product-action-container">
                          <a
                            href="#"
                            class="btn product-add-btn"
                            data-toggle="tooltip"
                            title="Add to Cart"
                            ><i class="fa fa-shopping-cart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-wishlist-btn"
                            data-toggle="tooltip"
                            title="Add to Wishlist"
                            ><i class="fa fa-heart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-compare-btn"
                            data-toggle="tooltip"
                            title="Compare"
                            ><i class="fa fa-retweet"></i
                          ></a>
                        </div>
                        <!-- End .product-action-container -->
                      </div>
                      <!-- End .product-top -->
                      <h3 class="product-title">
                        <a href="product.html"
                          >Debitis reicie ndis facili salis</a
                        >
                      </h3>
                      <div class="ratings-container">
                        <a href="#" class="product-ratings" title="5 Ratings">
                          <span class="ratings" style="width:100%">
                            <span class="ratings-text sr-only"
                              >8 Ratings</span
                            > </span
                          ><!-- End .ratings --> </a
                        ><!-- End .product-ratings -->
                      </div>
                      <!-- End .ratings-container -->
                      <div class="product-price-container">
                        <span class="old-price">$99.00</span>
                        <span class="product-price">$49.00</span>
                      </div>
                      <!-- End .product-price-container -->
                    </div>
                    <!-- End .product -->
                  </div>
                  <!-- End .col-md-3 -->

                  <div class="clearfix visible-xs visible-sm"></div>
                  <!-- clearfix -->

                  <div class="col-md-3 col-xs-6 col-xss-12">
                    <div class="product">
                      <div class="product-top">
                        <span class="label discount">-50%</span>
                        <figure>
                          <a href="product.html" title="Product Name">
                            <img
                              src="assets/images/products/product3.jpg"
                              alt="Product image"
                              class="product-image"
                            />
                            <img
                              src="assets/images/products/product3-hover.jpg"
                              alt="Product image"
                              class="image-hover"
                            />
                          </a>
                        </figure>
                        <div class="product-action-container">
                          <a
                            href="#"
                            class="btn product-add-btn"
                            data-toggle="tooltip"
                            title="Add to Cart"
                            ><i class="fa fa-shopping-cart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-wishlist-btn"
                            data-toggle="tooltip"
                            title="Add to Wishlist"
                            ><i class="fa fa-heart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-compare-btn"
                            data-toggle="tooltip"
                            title="Compare"
                            ><i class="fa fa-retweet"></i
                          ></a>
                        </div>
                        <!-- End .product-action-container -->
                      </div>
                      <!-- End .product-top -->
                      <h3 class="product-title">
                        <a href="product.html"
                          >Debitis reicie ndis facili salis</a
                        >
                      </h3>
                      <div class="ratings-container">
                        <a href="#" class="product-ratings" title="3 Ratings">
                          <span class="ratings" style="width:60%">
                            <span class="ratings-text sr-only"
                              >4 Ratings</span
                            > </span
                          ><!-- End .ratings --> </a
                        ><!-- End .product-ratings -->
                      </div>
                      <!-- End .ratings-container -->
                      <div class="product-price-container">
                        <span class="old-price">$99.00</span>
                        <span class="product-price">$49.00</span>
                      </div>
                      <!-- End .product-price-container -->
                    </div>
                    <!-- End .product -->
                  </div>
                  <!-- End .col-md-3 -->

                  <div class="col-md-3 col-xs-6 col-xss-12">
                    <div class="product">
                      <div class="product-top">
                        <figure>
                          <a href="product.html" title="Product Name">
                            <img
                              src="assets/images/products/product4.jpg"
                              alt="Product image"
                              class="product-image"
                            />
                            <img
                              src="assets/images/products/product4-hover.jpg"
                              alt="Product image"
                              class="image-hover"
                            />
                          </a>
                        </figure>
                        <div class="product-action-container">
                          <a
                            href="#"
                            class="btn product-add-btn"
                            data-toggle="tooltip"
                            title="Add to Cart"
                            ><i class="fa fa-shopping-cart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-wishlist-btn"
                            data-toggle="tooltip"
                            title="Add to Wishlist"
                            ><i class="fa fa-heart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-compare-btn"
                            data-toggle="tooltip"
                            title="Compare"
                            ><i class="fa fa-retweet"></i
                          ></a>
                        </div>
                        <!-- End .product-action-container -->
                      </div>
                      <!-- End .product-top -->
                      <h3 class="product-title">
                        <a href="product.html"
                          >Debitis reicie ndis facili salis</a
                        >
                      </h3>
                      <div class="ratings-container">
                        <a href="#" class="product-ratings" title="5 Ratings">
                          <span class="ratings" style="width:50%">
                            <span class="ratings-text sr-only"
                              >5 Ratings</span
                            > </span
                          ><!-- End .ratings --> </a
                        ><!-- End .product-ratings -->
                      </div>
                      <!-- End .ratings-container -->
                      <div class="product-price-container">
                        <span class="old-price">$99.00</span>
                        <span class="product-price">$49.00</span>
                      </div>
                      <!-- End .product-price-container -->
                    </div>
                    <!-- End .product -->
                  </div>
                  <!-- End .col-md-3 -->
                </div>
                <!-- End .row -->

                <div class="row">
                  <div class="col-md-3 col-xs-6 col-xss-12">
                    <div class="product">
                      <div class="product-top">
                        <figure>
                          <a href="product.html" title="Product Name">
                            <img
                              src="assets/images/products/product5.jpg"
                              alt="Product image"
                              class="product-image"
                            />
                          </a>
                        </figure>
                        <div class="product-action-container">
                          <a
                            href="#"
                            class="btn product-add-btn"
                            data-toggle="tooltip"
                            title="Add to Cart"
                            ><i class="fa fa-shopping-cart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-wishlist-btn"
                            data-toggle="tooltip"
                            title="Add to Wishlist"
                            ><i class="fa fa-heart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-compare-btn"
                            data-toggle="tooltip"
                            title="Compare"
                            ><i class="fa fa-retweet"></i
                          ></a>
                        </div>
                        <!-- End .product-action-container -->
                      </div>
                      <!-- End .product-top -->
                      <h3 class="product-title">
                        <a href="product.html"
                          >Debitis reicie ndis facili salis</a
                        >
                      </h3>
                      <div class="ratings-container">
                        <a href="#" class="product-ratings" title="3 Ratings">
                          <span class="ratings" style="width:40%">
                            <span class="ratings-text sr-only"
                              >3 Ratings</span
                            > </span
                          ><!-- End .ratings --> </a
                        ><!-- End .product-ratings -->
                      </div>
                      <!-- End .ratings-container -->
                      <div class="product-price-container">
                        <span class="old-price">$99.00</span>
                        <span class="product-price">$49.00</span>
                      </div>
                      <!-- End .product-price-container -->
                    </div>
                    <!-- End .product -->
                  </div>
                  <!-- End .col-md-3 -->

                  <div class="col-md-3 col-xs-6 col-xss-12">
                    <div class="product">
                      <div class="product-top">
                        <span class="label discount">-50%</span>
                        <figure>
                          <a href="product.html" title="Product Name">
                            <img
                              src="assets/images/products/product6.jpg"
                              alt="Product image"
                              class="product-image"
                            />
                          </a>
                        </figure>
                        <div class="product-action-container">
                          <a
                            href="#"
                            class="btn product-add-btn"
                            data-toggle="tooltip"
                            title="Add to Cart"
                            ><i class="fa fa-shopping-cart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-wishlist-btn"
                            data-toggle="tooltip"
                            title="Add to Wishlist"
                            ><i class="fa fa-heart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-compare-btn"
                            data-toggle="tooltip"
                            title="Compare"
                            ><i class="fa fa-retweet"></i
                          ></a>
                        </div>
                        <!-- End .product-action-container -->
                      </div>
                      <!-- End .product-top -->
                      <h3 class="product-title">
                        <a href="product.html"
                          >Debitis reicie ndis facili salis</a
                        >
                      </h3>
                      <div class="ratings-container">
                        <a href="#" class="product-ratings" title="7 Ratings">
                          <span class="ratings" style="width:80%">
                            <span class="ratings-text sr-only"
                              >7 Ratings</span
                            > </span
                          ><!-- End .ratings --> </a
                        ><!-- End .product-ratings -->
                      </div>
                      <!-- End .ratings-container -->
                      <div class="product-price-container">
                        <span class="old-price">$99.00</span>
                        <span class="product-price">$49.00</span>
                      </div>
                      <!-- End .product-price-container -->
                    </div>
                    <!-- End .product -->
                  </div>
                  <!-- End .col-md-3 -->

                  <div class="clearfix visible-xs visible-sm"></div>
                  <!-- clearfix -->

                  <div class="col-md-3 col-xs-6 col-xss-12">
                    <div class="product">
                      <div class="product-top">
                        <figure>
                          <a href="product.html" title="Product Name">
                            <img
                              src="assets/images/products/product7.jpg"
                              alt="Product image"
                              class="product-image"
                            />
                          </a>
                        </figure>
                        <div class="product-action-container">
                          <a
                            href="#"
                            class="btn product-add-btn"
                            data-toggle="tooltip"
                            title="Add to Cart"
                            ><i class="fa fa-shopping-cart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-wishlist-btn"
                            data-toggle="tooltip"
                            title="Add to Wishlist"
                            ><i class="fa fa-heart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-compare-btn"
                            data-toggle="tooltip"
                            title="Compare"
                            ><i class="fa fa-retweet"></i
                          ></a>
                        </div>
                        <!-- End .product-action-container -->
                      </div>
                      <!-- End .product-top -->
                      <h3 class="product-title">
                        <a href="product.html"
                          >Debitis reicie ndis facili salis</a
                        >
                      </h3>
                      <div class="ratings-container">
                        <a href="#" class="product-ratings" title="11 Ratings">
                          <span class="ratings" style="width:60%">
                            <span class="ratings-text sr-only"
                              >11 Ratings</span
                            > </span
                          ><!-- End .ratings --> </a
                        ><!-- End .product-ratings -->
                      </div>
                      <!-- End .ratings-container -->
                      <div class="product-price-container">
                        <span class="old-price">$99.00</span>
                        <span class="product-price">$49.00</span>
                      </div>
                      <!-- End .product-price-container -->
                    </div>
                    <!-- End .product -->
                  </div>
                  <!-- End .col-md-3 -->

                  <div class="col-md-3 col-xs-6 col-xss-12">
                    <div class="product">
                      <div class="product-top">
                        <span class="label new">New</span>
                        <figure>
                          <a href="product.html" title="Product Name">
                            <img
                              src="assets/images/products/product8.jpg"
                              alt="Product image"
                              class="product-image"
                            />
                            <img
                              src="assets/images/products/product8-hover.jpg"
                              alt="Product image"
                              class="image-hover"
                            />
                          </a>
                        </figure>
                        <div class="product-action-container">
                          <a
                            href="#"
                            class="btn product-add-btn"
                            data-toggle="tooltip"
                            title="Add to Cart"
                            ><i class="fa fa-shopping-cart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-wishlist-btn"
                            data-toggle="tooltip"
                            title="Add to Wishlist"
                            ><i class="fa fa-heart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-compare-btn"
                            data-toggle="tooltip"
                            title="Compare"
                            ><i class="fa fa-retweet"></i
                          ></a>
                        </div>
                        <!-- End .product-action-container -->
                      </div>
                      <!-- End .product-top -->
                      <h3 class="product-title">
                        <a href="product.html"
                          >Debitis reicie ndis facili salis</a
                        >
                      </h3>
                      <div class="ratings-container">
                        <a href="#" class="product-ratings" title="7 Ratings">
                          <span class="ratings" style="width:100%">
                            <span class="ratings-text sr-only"
                              >7 Ratings</span
                            > </span
                          ><!-- End .ratings --> </a
                        ><!-- End .product-ratings -->
                      </div>
                      <!-- End .ratings-container -->
                      <div class="product-price-container">
                        <span class="old-price">$99.00</span>
                        <span class="product-price">$49.00</span>
                      </div>
                      <!-- End .product-price-container -->
                    </div>
                    <!-- End .product -->
                  </div>
                  <!-- End .col-md-3 -->
                </div>
                <!-- End .row -->
              </div>
              <!-- End .tab-pane -->

              <div role="tabpanel" class="tab-pane" id="popular-products-tab">
                <div class="row">
                  <div class="col-md-3 col-xs-6 col-xss-12">
                    <div class="product">
                      <div class="product-top">
                        <figure>
                          <a href="product.html" title="Product Name">
                            <img
                              src="assets/images/products/product5.jpg"
                              alt="Product image"
                              class="product-image"
                            />
                          </a>
                        </figure>
                        <div class="product-action-container">
                          <a
                            href="#"
                            class="btn product-add-btn"
                            data-toggle="tooltip"
                            title="Add to Cart"
                            ><i class="fa fa-shopping-cart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-wishlist-btn"
                            data-toggle="tooltip"
                            title="Add to Wishlist"
                            ><i class="fa fa-heart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-compare-btn"
                            data-toggle="tooltip"
                            title="Compare"
                            ><i class="fa fa-retweet"></i
                          ></a>
                        </div>
                        <!-- End .product-action-container -->
                      </div>
                      <!-- End .product -->
                      <h3 class="product-title">
                        <a href="product.html"
                          >Debitis reicie ndis facili salis</a
                        >
                      </h3>
                      <div class="ratings-container">
                        <a href="#" class="product-ratings" title="4 Ratings">
                          <span class="ratings" style="width:80%">
                            <span class="ratings-text sr-only"
                              >4 Ratings</span
                            > </span
                          ><!-- End .ratings --> </a
                        ><!-- End .product-ratings -->
                      </div>
                      <!-- End .ratings-container -->
                      <div class="product-price-container">
                        <span class="old-price">$99.00</span>
                        <span class="product-price">$49.00</span>
                      </div>
                      <!-- End .product-price-container -->
                    </div>
                    <!-- End .product -->
                  </div>
                  <!-- End .col-md-3 -->

                  <div class="col-md-3 col-xs-6 col-xss-12">
                    <div class="product">
                      <div class="product-top">
                        <figure>
                          <a href="product.html" title="Product Name">
                            <img
                              src="assets/images/products/product3.jpg"
                              alt="Product image"
                              class="product-image"
                            />
                            <img
                              src="assets/images/products/product3-hover.jpg"
                              alt="Product image"
                              class="image-hover"
                            />
                          </a>
                        </figure>
                        <div class="product-action-container">
                          <a
                            href="#"
                            class="btn product-add-btn"
                            data-toggle="tooltip"
                            title="Add to Cart"
                            ><i class="fa fa-shopping-cart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-wishlist-btn"
                            data-toggle="tooltip"
                            title="Add to Wishlist"
                            ><i class="fa fa-heart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-compare-btn"
                            data-toggle="tooltip"
                            title="Compare"
                            ><i class="fa fa-retweet"></i
                          ></a>
                        </div>
                        <!-- End .product-action-container -->
                      </div>
                      <!-- End .product-top -->
                      <h3 class="product-title">
                        <a href="product.html"
                          >Debitis reicie ndis facili salis</a
                        >
                      </h3>
                      <div class="ratings-container">
                        <a href="#" class="product-ratings" title="5 Ratings">
                          <span class="ratings" style="width:100%">
                            <span class="ratings-text sr-only"
                              >8 Ratings</span
                            > </span
                          ><!-- End .ratings --> </a
                        ><!-- End .product-ratings -->
                      </div>
                      <!-- End .ratings-container -->
                      <div class="product-price-container">
                        <span class="old-price">$99.00</span>
                        <span class="product-price">$49.00</span>
                      </div>
                      <!-- End .product-price-container -->
                    </div>
                    <!-- End .product -->
                  </div>
                  <!-- End .col-md-3 -->

                  <div class="clearfix visible-xs visible-sm"></div>
                  <!-- clearfix -->

                  <div class="col-md-3 col-xs-6 col-xss-12">
                    <div class="product">
                      <div class="product-top">
                        <span class="label discount">-50%</span>
                        <figure>
                          <a href="product.html" title="Product Name">
                            <img
                              src="assets/images/products/product1.jpg"
                              alt="Product image"
                              class="product-image"
                            />
                            <img
                              src="assets/images/products/product1-hover.jpg"
                              alt="Product image"
                              class="image-hover"
                            />
                          </a>
                        </figure>
                        <div class="product-action-container">
                          <a
                            href="#"
                            class="btn product-add-btn"
                            data-toggle="tooltip"
                            title="Add to Cart"
                            ><i class="fa fa-shopping-cart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-wishlist-btn"
                            data-toggle="tooltip"
                            title="Add to Wishlist"
                            ><i class="fa fa-heart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-compare-btn"
                            data-toggle="tooltip"
                            title="Compare"
                            ><i class="fa fa-retweet"></i
                          ></a>
                        </div>
                        <!-- End .product-action-container -->
                      </div>
                      <!-- End .product-top -->
                      <h3 class="product-title">
                        <a href="product.html"
                          >Debitis reicie ndis facili salis</a
                        >
                      </h3>
                      <div class="ratings-container">
                        <a href="#" class="product-ratings" title="3 Ratings">
                          <span class="ratings" style="width:60%">
                            <span class="ratings-text sr-only"
                              >4 Ratings</span
                            > </span
                          ><!-- End .ratings --> </a
                        ><!-- End .product-ratings -->
                      </div>
                      <!-- End .ratings-container -->
                      <div class="product-price-container">
                        <span class="old-price">$99.00</span>
                        <span class="product-price">$49.00</span>
                      </div>
                      <!-- End .product-price-container -->
                    </div>
                    <!-- End .product -->
                  </div>
                  <!-- End .col-md-3 -->

                  <div class="col-md-3 col-xs-6 col-xss-12">
                    <div class="product">
                      <div class="product-top">
                        <span class="label discount">-50%</span>
                        <figure>
                          <a href="product.html" title="Product Name">
                            <img
                              src="assets/images/products/product8.jpg"
                              alt="Product image"
                              class="product-image"
                            />
                            <img
                              src="assets/images/products/product8-hover.jpg"
                              alt="Product image"
                              class="image-hover"
                            />
                          </a>
                        </figure>
                        <div class="product-action-container">
                          <a
                            href="#"
                            class="btn product-add-btn"
                            data-toggle="tooltip"
                            title="Add to Cart"
                            ><i class="fa fa-shopping-cart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-wishlist-btn"
                            data-toggle="tooltip"
                            title="Add to Wishlist"
                            ><i class="fa fa-heart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-compare-btn"
                            data-toggle="tooltip"
                            title="Compare"
                            ><i class="fa fa-retweet"></i
                          ></a>
                        </div>
                        <!-- End .product-action-container -->
                      </div>
                      <!-- End .product-top -->
                      <h3 class="product-title">
                        <a href="product.html"
                          >Debitis reicie ndis facili salis</a
                        >
                      </h3>
                      <div class="ratings-container">
                        <a href="#" class="product-ratings" title="5 Ratings">
                          <span class="ratings" style="width:50%">
                            <span class="ratings-text sr-only"
                              >5 Ratings</span
                            > </span
                          ><!-- End .ratings --> </a
                        ><!-- End .product-ratings -->
                      </div>
                      <!-- End .ratings-container -->
                      <div class="product-price-container">
                        <span class="old-price">$99.00</span>
                        <span class="product-price">$49.00</span>
                      </div>
                      <!-- End .product-price-container -->
                    </div>
                    <!-- End .product -->
                  </div>
                  <!-- End .col-md-3 -->
                </div>
                <!-- End .row -->

                <div class="row">
                  <div class="col-md-3 col-xs-6 col-xss-12">
                    <div class="product">
                      <div class="product-top">
                        <figure>
                          <a href="product.html" title="Product Name">
                            <img
                              src="assets/images/products/product7.jpg"
                              alt="Product image"
                              class="product-image"
                            />
                          </a>
                        </figure>
                        <div class="product-action-container">
                          <a
                            href="#"
                            class="btn product-add-btn"
                            data-toggle="tooltip"
                            title="Add to Cart"
                            ><i class="fa fa-shopping-cart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-wishlist-btn"
                            data-toggle="tooltip"
                            title="Add to Wishlist"
                            ><i class="fa fa-heart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-compare-btn"
                            data-toggle="tooltip"
                            title="Compare"
                            ><i class="fa fa-retweet"></i
                          ></a>
                        </div>
                        <!-- End .product-action-container -->
                      </div>
                      <!-- End .product-top -->
                      <h3 class="product-title">
                        <a href="product.html"
                          >Debitis reicie ndis facili salis</a
                        >
                      </h3>
                      <div class="ratings-container">
                        <a href="#" class="product-ratings" title="3 Ratings">
                          <span class="ratings" style="width:40%">
                            <span class="ratings-text sr-only"
                              >3 Ratings</span
                            > </span
                          ><!-- End .ratings --> </a
                        ><!-- End .product-ratings -->
                      </div>
                      <!-- End .ratings-container -->
                      <div class="product-price-container">
                        <span class="old-price">$99.00</span>
                        <span class="product-price">$49.00</span>
                      </div>
                      <!-- End .product-price-container -->
                    </div>
                    <!-- End .product -->
                  </div>
                  <!-- End .col-md-3 -->

                  <div class="col-md-3 col-xs-6 col-xss-12">
                    <div class="product">
                      <div class="product-top">
                        <figure>
                          <a href="product.html" title="Product Name">
                            <img
                              src="assets/images/products/product2.jpg"
                              alt="Product image"
                              class="product-image"
                            />
                          </a>
                        </figure>
                        <div class="product-action-container">
                          <a
                            href="#"
                            class="btn product-add-btn"
                            data-toggle="tooltip"
                            title="Add to Cart"
                            ><i class="fa fa-shopping-cart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-wishlist-btn"
                            data-toggle="tooltip"
                            title="Add to Wishlist"
                            ><i class="fa fa-heart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-compare-btn"
                            data-toggle="tooltip"
                            title="Compare"
                            ><i class="fa fa-retweet"></i
                          ></a>
                        </div>
                        <!-- End .product-action-container -->
                      </div>
                      <!-- End .product-top -->
                      <h3 class="product-title">
                        <a href="product.html"
                          >Debitis reicie ndis facili salis</a
                        >
                      </h3>
                      <div class="ratings-container">
                        <a href="#" class="product-ratings" title="7 Ratings">
                          <span class="ratings" style="width:80%">
                            <span class="ratings-text sr-only"
                              >7 Ratings</span
                            > </span
                          ><!-- End .ratings --> </a
                        ><!-- End .product-ratings -->
                      </div>
                      <!-- End .ratings-container -->
                      <div class="product-price-container">
                        <span class="old-price">$99.00</span>
                        <span class="product-price">$49.00</span>
                      </div>
                      <!-- End .product-price-container -->
                    </div>
                    <!-- End .product -->
                  </div>
                  <!-- End .col-md-3 -->

                  <div class="clearfix visible-xs visible-sm"></div>
                  <!-- clearfix -->

                  <div class="col-md-3 col-xs-6 col-xss-12">
                    <div class="product">
                      <div class="product-top">
                        <figure>
                          <a href="product.html" title="Product Name">
                            <img
                              src="assets/images/products/product1.jpg"
                              alt="Product image"
                              class="product-image"
                            />
                          </a>
                        </figure>
                        <div class="product-action-container">
                          <a
                            href="#"
                            class="btn product-add-btn"
                            data-toggle="tooltip"
                            title="Add to Cart"
                            ><i class="fa fa-shopping-cart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-wishlist-btn"
                            data-toggle="tooltip"
                            title="Add to Wishlist"
                            ><i class="fa fa-heart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-compare-btn"
                            data-toggle="tooltip"
                            title="Compare"
                            ><i class="fa fa-retweet"></i
                          ></a>
                        </div>
                        <!-- End .product-action-container -->
                      </div>
                      <!-- End .product-top -->
                      <h3 class="product-title">
                        <a href="product.html"
                          >Debitis reicie ndis facili salis</a
                        >
                      </h3>
                      <div class="ratings-container">
                        <a href="#" class="product-ratings" title="11 Ratings">
                          <span class="ratings" style="width:60%">
                            <span class="ratings-text sr-only"
                              >11 Ratings</span
                            > </span
                          ><!-- End .ratings --> </a
                        ><!-- End .product-ratings -->
                      </div>
                      <!-- End .ratings-container -->
                      <div class="product-price-container">
                        <span class="old-price">$99.00</span>
                        <span class="product-price">$49.00</span>
                      </div>
                      <!-- End .product-price-container -->
                    </div>
                    <!-- End .product -->
                  </div>
                  <!-- End .col-md-3 -->

                  <div class="col-md-3 col-xs-6 col-xss-12">
                    <div class="product">
                      <div class="product-top">
                        <span class="label new">New</span>
                        <figure>
                          <a href="product.html" title="Product Name">
                            <img
                              src="assets/images/products/product4.jpg"
                              alt="Product image"
                              class="product-image"
                            />
                            <img
                              src="assets/images/products/product4-hover.jpg"
                              alt="Product image"
                              class="image-hover"
                            />
                          </a>
                        </figure>
                        <div class="product-action-container">
                          <a
                            href="#"
                            class="btn product-add-btn"
                            data-toggle="tooltip"
                            title="Add to Cart"
                            ><i class="fa fa-shopping-cart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-wishlist-btn"
                            data-toggle="tooltip"
                            title="Add to Wishlist"
                            ><i class="fa fa-heart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-compare-btn"
                            data-toggle="tooltip"
                            title="Compare"
                            ><i class="fa fa-retweet"></i
                          ></a>
                        </div>
                        <!-- End .product-action-container -->
                      </div>
                      <!-- End .product-top -->
                      <h3 class="product-title">
                        <a href="product.html"
                          >Debitis reicie ndis facili salis</a
                        >
                      </h3>
                      <div class="ratings-container">
                        <a href="#" class="product-ratings" title="7 Ratings">
                          <span class="ratings" style="width:100%">
                            <span class="ratings-text sr-only"
                              >7 Ratings</span
                            > </span
                          ><!-- End .ratings --> </a
                        ><!-- End .product-ratings -->
                      </div>
                      <!-- End .ratings-container -->
                      <div class="product-price-container">
                        <span class="old-price">$99.00</span>
                        <span class="product-price">$49.00</span>
                      </div>
                      <!-- End .product-price-container -->
                    </div>
                    <!-- End .product -->
                  </div>
                  <!-- End .col-md-3 -->
                </div>
                <!-- End .row -->
              </div>
              <!-- End .tab-pane -->

              <div role="tabpanel" class="tab-pane" id="trending-products-tab">
                <div class="row">
                  <div class="col-md-3 col-xs-6 col-xss-12">
                    <div class="product">
                      <div class="product-top">
                        <figure>
                          <a href="product.html" title="Product Name">
                            <img
                              src="assets/images/products/product3.jpg"
                              alt="Product image"
                              class="product-image"
                            />
                            <img
                              src="assets/images/products/product3-hover.jpg"
                              alt="Product image"
                              class="image-hover"
                            />
                          </a>
                        </figure>
                        <div class="product-action-container">
                          <a
                            href="#"
                            class="btn product-add-btn"
                            data-toggle="tooltip"
                            title="Add to Cart"
                            ><i class="fa fa-shopping-cart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-wishlist-btn"
                            data-toggle="tooltip"
                            title="Add to Wishlist"
                            ><i class="fa fa-heart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-compare-btn"
                            data-toggle="tooltip"
                            title="Compare"
                            ><i class="fa fa-retweet"></i
                          ></a>
                        </div>
                        <!-- End .product-action-container -->
                      </div>
                      <!-- End .product -->
                      <h3 class="product-title">
                        <a href="product.html"
                          >Debitis reicie ndis facili salis</a
                        >
                      </h3>
                      <div class="ratings-container">
                        <a href="#" class="product-ratings" title="4 Ratings">
                          <span class="ratings" style="width:80%">
                            <span class="ratings-text sr-only"
                              >4 Ratings</span
                            > </span
                          ><!-- End .ratings --> </a
                        ><!-- End .product-ratings -->
                      </div>
                      <!-- End .ratings-container -->
                      <div class="product-price-container">
                        <span class="old-price">$99.00</span>
                        <span class="product-price">$49.00</span>
                      </div>
                      <!-- End .product-price-container -->
                    </div>
                    <!-- End .product -->
                  </div>
                  <!-- End .col-md-3 -->

                  <div class="col-md-3 col-xs-6 col-xss-12">
                    <div class="product">
                      <div class="product-top">
                        <span class="label new">New</span>
                        <figure>
                          <a href="product.html" title="Product Name">
                            <img
                              src="assets/images/products/product6.jpg"
                              alt="Product image"
                              class="product-image"
                            />
                          </a>
                        </figure>
                        <div class="product-action-container">
                          <a
                            href="#"
                            class="btn product-add-btn"
                            data-toggle="tooltip"
                            title="Add to Cart"
                            ><i class="fa fa-shopping-cart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-wishlist-btn"
                            data-toggle="tooltip"
                            title="Add to Wishlist"
                            ><i class="fa fa-heart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-compare-btn"
                            data-toggle="tooltip"
                            title="Compare"
                            ><i class="fa fa-retweet"></i
                          ></a>
                        </div>
                        <!-- End .product-action-container -->
                      </div>
                      <!-- End .product-top -->
                      <h3 class="product-title">
                        <a href="product.html"
                          >Debitis reicie ndis facili salis</a
                        >
                      </h3>
                      <div class="ratings-container">
                        <a href="#" class="product-ratings" title="5 Ratings">
                          <span class="ratings" style="width:100%">
                            <span class="ratings-text sr-only"
                              >8 Ratings</span
                            > </span
                          ><!-- End .ratings --> </a
                        ><!-- End .product-ratings -->
                      </div>
                      <!-- End .ratings-container -->
                      <div class="product-price-container">
                        <span class="old-price">$99.00</span>
                        <span class="product-price">$49.00</span>
                      </div>
                      <!-- End .product-price-container -->
                    </div>
                    <!-- End .product -->
                  </div>
                  <!-- End .col-md-3 -->

                  <div class="clearfix visible-xs visible-sm"></div>
                  <!-- clearfix -->

                  <div class="col-md-3 col-xs-6 col-xss-12">
                    <div class="product">
                      <div class="product-top">
                        <span class="label discount">-50%</span>
                        <figure>
                          <a href="product.html" title="Product Name">
                            <img
                              src="assets/images/products/product4.jpg"
                              alt="Product image"
                              class="product-image"
                            />
                            <img
                              src="assets/images/products/product4-hover.jpg"
                              alt="Product image"
                              class="image-hover"
                            />
                          </a>
                        </figure>
                        <div class="product-action-container">
                          <a
                            href="#"
                            class="btn product-add-btn"
                            data-toggle="tooltip"
                            title="Add to Cart"
                            ><i class="fa fa-shopping-cart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-wishlist-btn"
                            data-toggle="tooltip"
                            title="Add to Wishlist"
                            ><i class="fa fa-heart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-compare-btn"
                            data-toggle="tooltip"
                            title="Compare"
                            ><i class="fa fa-retweet"></i
                          ></a>
                        </div>
                        <!-- End .product-action-container -->
                      </div>
                      <!-- End .product-top -->
                      <h3 class="product-title">
                        <a href="product.html"
                          >Debitis reicie ndis facili salis</a
                        >
                      </h3>
                      <div class="ratings-container">
                        <a href="#" class="product-ratings" title="3 Ratings">
                          <span class="ratings" style="width:60%">
                            <span class="ratings-text sr-only"
                              >4 Ratings</span
                            > </span
                          ><!-- End .ratings --> </a
                        ><!-- End .product-ratings -->
                      </div>
                      <!-- End .ratings-container -->
                      <div class="product-price-container">
                        <span class="old-price">$99.00</span>
                        <span class="product-price">$49.00</span>
                      </div>
                      <!-- End .product-price-container -->
                    </div>
                    <!-- End .product -->
                  </div>
                  <!-- End .col-md-3 -->

                  <div class="col-md-3 col-xs-6 col-xss-12">
                    <div class="product">
                      <div class="product-top">
                        <figure>
                          <a href="product.html" title="Product Name">
                            <img
                              src="assets/images/products/product1.jpg"
                              alt="Product image"
                              class="product-image"
                            />
                          </a>
                        </figure>
                        <div class="product-action-container">
                          <a
                            href="#"
                            class="btn product-add-btn"
                            data-toggle="tooltip"
                            title="Add to Cart"
                            ><i class="fa fa-shopping-cart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-wishlist-btn"
                            data-toggle="tooltip"
                            title="Add to Wishlist"
                            ><i class="fa fa-heart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-compare-btn"
                            data-toggle="tooltip"
                            title="Compare"
                            ><i class="fa fa-retweet"></i
                          ></a>
                        </div>
                        <!-- End .product-action-container -->
                      </div>
                      <!-- End .product-top -->
                      <h3 class="product-title">
                        <a href="product.html"
                          >Debitis reicie ndis facili salis</a
                        >
                      </h3>
                      <div class="ratings-container">
                        <a href="#" class="product-ratings" title="5 Ratings">
                          <span class="ratings" style="width:50%">
                            <span class="ratings-text sr-only"
                              >5 Ratings</span
                            > </span
                          ><!-- End .ratings --> </a
                        ><!-- End .product-ratings -->
                      </div>
                      <!-- End .ratings-container -->
                      <div class="product-price-container">
                        <span class="old-price">$99.00</span>
                        <span class="product-price">$49.00</span>
                      </div>
                      <!-- End .product-price-container -->
                    </div>
                    <!-- End .product -->
                  </div>
                  <!-- End .col-md-3 -->
                </div>
                <!-- End .row -->

                <div class="row">
                  <div class="col-md-3 col-xs-6 col-xss-12">
                    <div class="product">
                      <div class="product-top">
                        <span class="label discount">-50%</span>
                        <figure>
                          <a href="product.html" title="Product Name">
                            <img
                              src="assets/images/products/product4.jpg"
                              alt="Product image"
                              class="product-image"
                            />
                          </a>
                        </figure>
                        <div class="product-action-container">
                          <a
                            href="#"
                            class="btn product-add-btn"
                            data-toggle="tooltip"
                            title="Add to Cart"
                            ><i class="fa fa-shopping-cart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-wishlist-btn"
                            data-toggle="tooltip"
                            title="Add to Wishlist"
                            ><i class="fa fa-heart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-compare-btn"
                            data-toggle="tooltip"
                            title="Compare"
                            ><i class="fa fa-retweet"></i
                          ></a>
                        </div>
                        <!-- End .product-action-container -->
                      </div>
                      <!-- End .product-top -->
                      <h3 class="product-title">
                        <a href="product.html"
                          >Debitis reicie ndis facili salis</a
                        >
                      </h3>
                      <div class="ratings-container">
                        <a href="#" class="product-ratings" title="3 Ratings">
                          <span class="ratings" style="width:40%">
                            <span class="ratings-text sr-only"
                              >3 Ratings</span
                            > </span
                          ><!-- End .ratings --> </a
                        ><!-- End .product-ratings -->
                      </div>
                      <!-- End .ratings-container -->
                      <div class="product-price-container">
                        <span class="old-price">$99.00</span>
                        <span class="product-price">$49.00</span>
                      </div>
                      <!-- End .product-price-container -->
                    </div>
                    <!-- End .product -->
                  </div>
                  <!-- End .col-md-3 -->

                  <div class="col-md-3 col-xs-6 col-xss-12">
                    <div class="product">
                      <div class="product-top">
                        <figure>
                          <a href="product.html" title="Product Name">
                            <img
                              src="assets/images/products/product3.jpg"
                              alt="Product image"
                              class="product-image"
                            />
                          </a>
                        </figure>
                        <div class="product-action-container">
                          <a
                            href="#"
                            class="btn product-add-btn"
                            data-toggle="tooltip"
                            title="Add to Cart"
                            ><i class="fa fa-shopping-cart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-wishlist-btn"
                            data-toggle="tooltip"
                            title="Add to Wishlist"
                            ><i class="fa fa-heart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-compare-btn"
                            data-toggle="tooltip"
                            title="Compare"
                            ><i class="fa fa-retweet"></i
                          ></a>
                        </div>
                        <!-- End .product-action-container -->
                      </div>
                      <!-- End .product-top -->
                      <h3 class="product-title">
                        <a href="product.html"
                          >Debitis reicie ndis facili salis</a
                        >
                      </h3>
                      <div class="ratings-container">
                        <a href="#" class="product-ratings" title="7 Ratings">
                          <span class="ratings" style="width:80%">
                            <span class="ratings-text sr-only"
                              >7 Ratings</span
                            > </span
                          ><!-- End .ratings --> </a
                        ><!-- End .product-ratings -->
                      </div>
                      <!-- End .ratings-container -->
                      <div class="product-price-container">
                        <span class="old-price">$99.00</span>
                        <span class="product-price">$49.00</span>
                      </div>
                      <!-- End .product-price-container -->
                    </div>
                    <!-- End .product -->
                  </div>
                  <!-- End .col-md-3 -->

                  <div class="clearfix visible-xs visible-sm"></div>
                  <!-- clearfix -->

                  <div class="col-md-3 col-xs-6 col-xss-12">
                    <div class="product">
                      <div class="product-top">
                        <figure>
                          <a href="product.html" title="Product Name">
                            <img
                              src="assets/images/products/product2.jpg"
                              alt="Product image"
                              class="product-image"
                            />
                          </a>
                        </figure>
                        <div class="product-action-container">
                          <a
                            href="#"
                            class="btn product-add-btn"
                            data-toggle="tooltip"
                            title="Add to Cart"
                            ><i class="fa fa-shopping-cart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-wishlist-btn"
                            data-toggle="tooltip"
                            title="Add to Wishlist"
                            ><i class="fa fa-heart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-compare-btn"
                            data-toggle="tooltip"
                            title="Compare"
                            ><i class="fa fa-retweet"></i
                          ></a>
                        </div>
                        <!-- End .product-action-container -->
                      </div>
                      <!-- End .product-top -->
                      <h3 class="product-title">
                        <a href="product.html"
                          >Debitis reicie ndis facili salis</a
                        >
                      </h3>
                      <div class="ratings-container">
                        <a href="#" class="product-ratings" title="11 Ratings">
                          <span class="ratings" style="width:60%">
                            <span class="ratings-text sr-only"
                              >11 Ratings</span
                            > </span
                          ><!-- End .ratings --> </a
                        ><!-- End .product-ratings -->
                      </div>
                      <!-- End .ratings-container -->
                      <div class="product-price-container">
                        <span class="old-price">$99.00</span>
                        <span class="product-price">$49.00</span>
                      </div>
                      <!-- End .product-price-container -->
                    </div>
                    <!-- End .product -->
                  </div>
                  <!-- End .col-md-3 -->

                  <div class="col-md-3 col-xs-6 col-xss-12">
                    <div class="product">
                      <div class="product-top">
                        <span class="label new">New</span>
                        <figure>
                          <a href="product.html" title="Product Name">
                            <img
                              src="assets/images/products/product8.jpg"
                              alt="Product image"
                              class="product-image"
                            />
                            <img
                              src="assets/images/products/product8-hover.jpg"
                              alt="Product image"
                              class="image-hover"
                            />
                          </a>
                        </figure>
                        <div class="product-action-container">
                          <a
                            href="#"
                            class="btn product-add-btn"
                            data-toggle="tooltip"
                            title="Add to Cart"
                            ><i class="fa fa-shopping-cart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-wishlist-btn"
                            data-toggle="tooltip"
                            title="Add to Wishlist"
                            ><i class="fa fa-heart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-compare-btn"
                            data-toggle="tooltip"
                            title="Compare"
                            ><i class="fa fa-retweet"></i
                          ></a>
                        </div>
                        <!-- End .product-action-container -->
                      </div>
                      <!-- End .product-top -->
                      <h3 class="product-title">
                        <a href="product.html"
                          >Debitis reicie ndis facili salis</a
                        >
                      </h3>
                      <div class="ratings-container">
                        <a href="#" class="product-ratings" title="7 Ratings">
                          <span class="ratings" style="width:100%">
                            <span class="ratings-text sr-only"
                              >7 Ratings</span
                            > </span
                          ><!-- End .ratings --> </a
                        ><!-- End .product-ratings -->
                      </div>
                      <!-- End .ratings-container -->
                      <div class="product-price-container">
                        <span class="old-price">$99.00</span>
                        <span class="product-price">$49.00</span>
                      </div>
                      <!-- End .product-price-container -->
                    </div>
                    <!-- End .product -->
                  </div>
                  <!-- End .col-md-3 -->
                </div>
                <!-- End .row -->
              </div>
              <!-- End .tab-pane -->
            </div>
            <!-- End .tab-content -->
          </div>
          <!-- end role[tabpanel] -->
        </div>
        <!-- End .container-fluid -->

        <div class="mb60 mb50-sm mb45-xs"></div>
        <!-- margin -->

        <div class="bg-white pt60 pb60 pt50-sm pb50-sm">
          <div class="container-fluid">
            <header class="title-block text-center">
              <h2 class="title-border custom text-center">
                <span>Testimonials</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit magni
                illum quisquam modi.
              </p>
            </header>

            <div
              class="swiper-container testimonials-box-carousel-fullnav-3col"
            >
              <div class="swiper-buttons-container">
                <div class="swiper-button-prev">
                  <i class="fa fa-angle-left"></i>
                </div>
                <!-- End .swiper-button-prev -->
                <div class="swiper-button-next">
                  <i class="fa fa-angle-right"></i>
                </div>
                <!-- End .swiper-button-next -->
              </div>
              <!-- End .swiper-buttons-container -->

              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="testimonial-box">
                    <div class="testimonial-content">
                      <blockquote>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Laborum, est voluptum recusa sendae, enim non
                          eos digni ssimos commodi repelldus quia pariatur.
                        </p>
                      </blockquote>
                    </div>
                    <!-- End .testimonial-content -->
                    <div class="testimonial-owner">
                      <h5>Jason Richardson<span>Ceo of Boss Inc.</span></h5>
                      <figure>
                        <img
                          src="assets/images/testimonials/user1.jpg"
                          alt="Name"
                        />
                      </figure>
                    </div>
                    <!-- End .testimonial-owner -->
                  </div>
                  <!-- End .testimonial-box -->
                </div>
                <!-- End .swiper-slide -->

                <div class="swiper-slide">
                  <div class="testimonial-box">
                    <div class="testimonial-content">
                      <blockquote>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Laborum, est voluptum recusa sendae, enim non
                          eos digni ssimos commodi repelldus quia pariatur.
                        </p>
                      </blockquote>
                    </div>
                    <!-- End .testimonial-content -->
                    <div class="testimonial-owner">
                      <h5>Eon Dean<span>Ceo of Eonythemes</span></h5>
                      <figure>
                        <img
                          src="assets/images/testimonials/user2.jpg"
                          alt="Name"
                        />
                      </figure>
                    </div>
                    <!-- End .testimonial-owner -->
                  </div>
                  <!-- End .testimonial-box -->
                </div>
                <!-- End .swiper-slide -->

                <div class="swiper-slide">
                  <div class="testimonial-box">
                    <div class="testimonial-content">
                      <blockquote>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Laborum, est voluptum recusa sendae, enim non
                          eos digni ssimos commodi repelldus quia pariatur.
                        </p>
                      </blockquote>
                    </div>
                    <!-- End .testimonial-content -->
                    <div class="testimonial-owner">
                      <h5>Dean James<span>Ceo of e2themes</span></h5>
                      <figure>
                        <img
                          src="assets/images/testimonials/user3.jpg"
                          alt="Name"
                        />
                      </figure>
                    </div>
                    <!-- End .testimonial-owner -->
                  </div>
                  <!-- End .testimonial-box -->
                </div>
                <!-- End .swiper-slide -->

                <div class="swiper-slide">
                  <div class="testimonial-box">
                    <div class="testimonial-content">
                      <blockquote>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Laborum, est voluptum recusa sendae, enim non
                          eos digni ssimos commodi repelldus quia pariatur.
                        </p>
                      </blockquote>
                    </div>
                    <!-- End .testimonial-content -->
                    <div class="testimonial-owner">
                      <h5>Desmond Likes<span>Ceo of Coldplay</span></h5>
                      <figure>
                        <img
                          src="assets/images/testimonials/user4.jpg"
                          alt="Name"
                        />
                      </figure>
                    </div>
                    <!-- End .testimonial-owner -->
                  </div>
                  <!-- End .testimonial-box -->
                </div>
                <!-- End .swiper-slide -->

                <div class="swiper-slide">
                  <div class="testimonial-box">
                    <div class="testimonial-content">
                      <blockquote>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Laborum, est voluptum recusa sendae, enim non
                          eos digni ssimos commodi repelldus quia pariatur.
                        </p>
                      </blockquote>
                    </div>
                    <!-- End .testimonial-content -->
                    <div class="testimonial-owner">
                      <h5>James Rodriguez<span>Ceo of Bold Inc.</span></h5>
                      <figure>
                        <img
                          src="assets/images/testimonials/user5.jpg"
                          alt="Name"
                        />
                      </figure>
                    </div>
                    <!-- End .testimonial-owner -->
                  </div>
                  <!-- End .testimonial-box -->
                </div>
                <!-- End .swiper-slide -->

                <div class="swiper-slide">
                  <div class="testimonial-box">
                    <div class="testimonial-content">
                      <blockquote>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Laborum, est voluptum recusa sendae, enim non
                          eos digni ssimos commodi repelldus quia pariatur.
                        </p>
                      </blockquote>
                    </div>
                    <!-- End .testimonial-content -->
                    <div class="testimonial-owner">
                      <h5>Eony James<span>Ceo of Simple</span></h5>
                      <figure>
                        <img
                          src="assets/images/testimonials/user6.jpg"
                          alt="Name"
                        />
                      </figure>
                    </div>
                    <!-- End .testimonial-owner -->
                  </div>
                  <!-- End .testimonial-box -->
                </div>
                <!-- End .swiper-slide -->
              </div>
              <!-- End .swiper-wrapper -->
            </div>
            <!-- End .clients-carousel -->
          </div>
          <!-- End .container-fluid -->
        </div>
        <!-- End .bg-white -->

        <div class="mb60 mb50-sm"></div>
        <!-- margin -->

        <div class="container-fluid">
          <header class="title-block text-center">
            <h2 class="title-border custom text-center">
              <span>Latest News</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit magni
              illum quisquam modi.
            </p>
          </header>

          <div class="swiper-container latest-news-carousel-3col">
            <div class="swiper-buttons-container">
              <div class="swiper-button-prev">
                <i class="fa fa-angle-left"></i>
              </div>
              <!-- End .swiper-button-prev -->
              <div class="swiper-button-next">
                <i class="fa fa-angle-right"></i>
              </div>
              <!-- End .swiper-button-next -->
            </div>
            <!-- End .swiper-buttons-container -->

            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <article class="entry entry-grid">
                  <div class="entry-media">
                    <figure>
                      <a href="single.html"
                        ><img
                          src="assets/images/blog/post1.jpg"
                          alt="Post image"
                      /></a>
                    </figure>
                  </div>
                  <!-- End .entry-media -->

                  <div class="entry-icon">
                    <i class="fa fa-file-image-o"></i>
                  </div>
                  <!-- End .entry-icon -->

                  <div class="entry-content-container">
                    <div class="entry-meta">
                      <div><i class="fa fa-calendar"></i>17 Aug 2016</div>
                      <div>
                        <a href="#"
                          ><i class="fa fa-comments"></i>8 Comment(s)</a
                        >
                      </div>
                      <div>
                        <a href="#"><i class="fa fa-user"></i> Admin</a>
                      </div>
                    </div>
                    <!-- End .entry-meta -->

                    <div class="entry-content-wrapper">
                      <h2 class="entry-title">
                        <a href="single.html"
                          >Lorem ipsum dolor sit amet, consec tetur elit.</a
                        >
                      </h2>
                      <div class="entry-content">
                        <p>
                          Molestiae neque doloremque, voluptatum nostrum
                          praesentium esse fugiat. Deserunt praese ntiumin
                          architecto expedit.
                        </p>
                        <a href="#" class="readmore"
                          >Read more<i class="fa fa-angle-right"></i
                        ></a>
                      </div>
                      <!-- End .entry-content -->
                    </div>
                    <!-- End .entry-content-wrapper -->
                  </div>
                  <!-- End .entry-content-container -->
                </article>
              </div>
              <!-- End .swiper-slide -->

              <div class="swiper-slide">
                <article class="entry entry-grid">
                  <div class="entry-media">
                    <figure
                      id="blog-post-gallery"
                      class="carousel slide"
                      data-ride="carousel"
                      data-interval="10000"
                    >
                      <div class="carousel-inner">
                        <div class="item active">
                          <a href="single.html"
                            ><img
                              src="assets/images/blog/post2.jpg"
                              alt="Post image"
                          /></a>
                        </div>
                        <!-- End .item -->

                        <div class="item">
                          <a href="single.html"
                            ><img
                              src="assets/images/blog/post3.jpg"
                              alt="Post image"
                          /></a>
                        </div>
                        <!-- End .item -->
                      </div>
                      <!-- End .carousel-inner -->

                      <!-- Controls -->
                      <a
                        class="left carousel-control"
                        href="#blog-post-gallery"
                        role="button"
                        data-slide="prev"
                        ><i class="fa fa-angle-left"></i
                      ></a>
                      <a
                        class="right carousel-control"
                        href="#blog-post-gallery"
                        role="button"
                        data-slide="next"
                        ><i class="fa fa-angle-right"></i
                      ></a>
                    </figure>
                    <!-- End .carousel -->
                  </div>
                  <!-- End .entry-media -->

                  <div class="entry-icon">
                    <i class="fa fa-file-image-o"></i>
                  </div>
                  <!-- End .entry-icon -->

                  <div class="entry-content-container">
                    <div class="entry-meta">
                      <div><i class="fa fa-calendar"></i>17 Aug 2016</div>
                      <div>
                        <a href="#"
                          ><i class="fa fa-comments"></i>8 Comment(s)</a
                        >
                      </div>
                      <div>
                        <a href="#"><i class="fa fa-user"></i> eon</a>
                      </div>
                    </div>
                    <!-- End .entry-meta -->

                    <div class="entry-content-wrapper">
                      <h2 class="entry-title">
                        <a href="single.html"
                          >Lorem ipsum dolor sit amet, consec tetur elit.</a
                        >
                      </h2>
                      <div class="entry-content">
                        <p>
                          Molestiae neque doloremque, voluptatum nostrum
                          praesentium esse fugiat. Deserunt praese ntiumin
                          architecto expedit.
                        </p>
                        <a href="#" class="readmore"
                          >Read more<i class="fa fa-angle-right"></i
                        ></a>
                      </div>
                      <!-- End .entry-content -->
                    </div>
                    <!-- End .entry-content-wrapper -->
                  </div>
                  <!-- End .entry-content-container -->
                </article>
              </div>
              <!-- End .swiper-slide -->

              <div class="swiper-slide">
                <article class="entry entry-grid">
                  <div class="entry-media">
                    <figure>
                      <a href="single.html"
                        ><img
                          src="assets/images/blog/post4.jpg"
                          alt="Post image"
                      /></a>
                    </figure>
                  </div>
                  <!-- End .entry-media -->

                  <div class="entry-icon">
                    <i class="fa fa-file-image-o"></i>
                  </div>
                  <!-- End .entry-icon -->

                  <div class="entry-content-container">
                    <div class="entry-meta">
                      <div><i class="fa fa-calendar"></i>17 Aug 2016</div>
                      <div>
                        <a href="#"
                          ><i class="fa fa-comments"></i>8 Comment(s)</a
                        >
                      </div>
                      <div>
                        <a href="#"><i class="fa fa-user"></i> Sarah</a>
                      </div>
                    </div>
                    <!-- End .entry-meta -->

                    <div class="entry-content-wrapper">
                      <h2 class="entry-title">
                        <a href="single.html"
                          >Lorem ipsum dolor sit amet, consec tetur elit.</a
                        >
                      </h2>
                      <div class="entry-content">
                        <p>
                          Molestiae neque doloremque, voluptatum nostrum
                          praesentium esse fugiat. Deserunt praese ntiumin
                          architecto expedit.
                        </p>
                        <a href="#" class="readmore"
                          >Read more<i class="fa fa-angle-right"></i
                        ></a>
                      </div>
                      <!-- End .entry-content -->
                    </div>
                    <!-- End .entry-content-wrapper -->
                  </div>
                  <!-- End .entry-content-container -->
                </article>
              </div>
              <!-- End .swiper-slide -->

              <div class="swiper-slide">
                <article class="entry entry-grid">
                  <div class="entry-media">
                    <figure>
                      <a href="single.html"
                        ><img
                          src="assets/images/blog/post5.jpg"
                          alt="Post image"
                      /></a>
                    </figure>
                  </div>
                  <!-- End .entry-media -->

                  <div class="entry-icon">
                    <i class="fa fa-file-image-o"></i>
                  </div>
                  <!-- End .entry-icon -->

                  <div class="entry-content-container">
                    <div class="entry-meta">
                      <div><i class="fa fa-calendar"></i>17 Aug 2016</div>
                      <div>
                        <a href="#"
                          ><i class="fa fa-comments"></i>8 Comment(s)</a
                        >
                      </div>
                      <div>
                        <a href="#"><i class="fa fa-user"></i> Admin</a>
                      </div>
                    </div>
                    <!-- End .entry-meta -->

                    <div class="entry-content-wrapper">
                      <h2 class="entry-title">
                        <a href="single.html"
                          >Lorem ipsum dolor sit amet, consec tetur elit.</a
                        >
                      </h2>
                      <div class="entry-content">
                        <p>
                          Molestiae neque doloremque, voluptatum nostrum
                          praesentium esse fugiat. Deserunt praese ntiumin
                          architecto expedit.
                        </p>
                        <a href="#" class="readmore"
                          >Read more<i class="fa fa-angle-right"></i
                        ></a>
                      </div>
                      <!-- End .entry-content -->
                    </div>
                    <!-- End .entry-content-wrapper -->
                  </div>
                  <!-- End .entry-content-container -->
                </article>
              </div>
              <!-- End .swiper-slide -->

              <div class="swiper-slide">
                <article class="entry entry-grid">
                  <div class="entry-media">
                    <figure>
                      <a href="single.html"
                        ><img
                          src="assets/images/blog/post6.jpg"
                          alt="Post image"
                      /></a>
                    </figure>
                  </div>
                  <!-- End .entry-media -->

                  <div class="entry-icon">
                    <i class="fa fa-file-image-o"></i>
                  </div>
                  <!-- End .entry-icon -->

                  <div class="entry-content-container">
                    <div class="entry-meta">
                      <div><i class="fa fa-calendar"></i>17 Aug 2016</div>
                      <div>
                        <a href="#"
                          ><i class="fa fa-comments"></i>8 Comment(s)</a
                        >
                      </div>
                      <div>
                        <a href="#"><i class="fa fa-user"></i> Eon</a>
                      </div>
                    </div>
                    <!-- End .entry-meta -->

                    <div class="entry-content-wrapper">
                      <h2 class="entry-title">
                        <a href="single.html"
                          >Lorem ipsum dolor sit amet, consec tetur elit.</a
                        >
                      </h2>
                      <div class="entry-content">
                        <p>
                          Molestiae neque doloremque, voluptatum nostrum
                          praesentium esse fugiat. Deserunt praese ntiumin
                          architecto expedit.
                        </p>
                        <a href="#" class="readmore"
                          >Read more<i class="fa fa-angle-right"></i
                        ></a>
                      </div>
                      <!-- End .entry-content -->
                    </div>
                    <!-- End .entry-content-wrapper -->
                  </div>
                  <!-- End .entry-content-container -->
                </article>
              </div>
              <!-- End .swiper-slide -->

              <div class="swiper-slide">
                <article class="entry entry-grid">
                  <div class="entry-media">
                    <figure>
                      <a href="single.html"
                        ><img
                          src="assets/images/blog/post7.jpg"
                          alt="Post image"
                      /></a>
                    </figure>
                  </div>
                  <!-- End .entry-media -->

                  <div class="entry-icon">
                    <i class="fa fa-file-image-o"></i>
                  </div>
                  <!-- End .entry-icon -->

                  <div class="entry-content-container">
                    <div class="entry-meta">
                      <div><i class="fa fa-calendar"></i>17 Aug 2016</div>
                      <div>
                        <a href="#"
                          ><i class="fa fa-comments"></i>8 Comment(s)</a
                        >
                      </div>
                      <div>
                        <a href="#"><i class="fa fa-user"></i> Dean</a>
                      </div>
                    </div>
                    <!-- End .entry-meta -->

                    <div class="entry-content-wrapper">
                      <h2 class="entry-title">
                        <a href="single.html"
                          >Lorem ipsum dolor sit amet, consec tetur elit.</a
                        >
                      </h2>
                      <div class="entry-content">
                        <p>
                          Molestiae neque doloremque, voluptatum nostrum
                          praesentium esse fugiat. Deserunt praese ntiumin
                          architecto expedit.
                        </p>
                        <a href="#" class="readmore"
                          >Read more<i class="fa fa-angle-right"></i
                        ></a>
                      </div>
                      <!-- End .entry-content -->
                    </div>
                    <!-- End .entry-content-wrapper -->
                  </div>
                  <!-- End .entry-content-container -->
                </article>
              </div>
              <!-- End .swiper-slide -->
            </div>
            <!-- End .swiper-wrapper -->
          </div>
          <!-- End .swiper-container -->
        </div>
        <!-- End .container-fluid -->

        <div class="mb65 mb60-sm"></div>
        <!-- margin -->

        <div class="bg-white pt60 pb65 pt50-sm pb55-sm">
          <div class="container-fluid">
            <header class="title-block text-center">
              <h2 class="title-border custom text-center">
                <span>Our Partners</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit magni
                illum quisquam modi.
              </p>
            </header>

            <div class="swiper-container clients-carousel-fullnav">
              <div class="swiper-buttons-container">
                <div class="swiper-button-prev">
                  <i class="fa fa-angle-left"></i>
                </div>
                <!-- End .swiper-button-prev -->
                <div class="swiper-button-next">
                  <i class="fa fa-angle-right"></i>
                </div>
                <!-- End .swiper-button-next -->
              </div>
              <!-- End .swiper-buttons-container -->

              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <a href="#" class="client" title="Client Title">
                    <img
                      src="assets/images/clients/logo1.png"
                      alt="Company Logo"
                    />
                  </a>
                </div>
                <!-- End .swiper-slide -->

                <div class="swiper-slide">
                  <a href="#" class="client" title="Client Title">
                    <img
                      src="assets/images/clients/logo2.png"
                      alt="Company Logo"
                    />
                  </a>
                </div>
                <!-- End .swiper-slide -->

                <div class="swiper-slide">
                  <a href="#" class="client" title="Client Title">
                    <img
                      src="assets/images/clients/logo3.png"
                      alt="Company Logo"
                    />
                  </a>
                </div>
                <!-- End .swiper-slide -->

                <div class="swiper-slide">
                  <a href="#" class="client" title="Client Title">
                    <img
                      src="assets/images/clients/logo4.png"
                      alt="Company Logo"
                    />
                  </a>
                </div>
                <!-- End .swiper-slide -->

                <div class="swiper-slide">
                  <a href="#" class="client" title="Client Title">
                    <img
                      src="assets/images/clients/logo5.png"
                      alt="Company Logo"
                    />
                  </a>
                </div>
                <!-- End .swiper-slide -->

                <div class="swiper-slide">
                  <a href="#" class="client" title="Client Title">
                    <img
                      src="assets/images/clients/logo6.png"
                      alt="Company Logo"
                    />
                  </a>
                </div>
                <!-- End .swiper-slide -->

                <div class="swiper-slide">
                  <a href="#" class="client" title="Client Title">
                    <img
                      src="assets/images/clients/logo7.png"
                      alt="Company Logo"
                    />
                  </a>
                </div>
                <!-- End .swiper-slide -->

                <div class="swiper-slide">
                  <a href="#" class="client" title="Client Title">
                    <img
                      src="assets/images/clients/logo8.png"
                      alt="Company Logo"
                    />
                  </a>
                </div>
                <!-- End .swiper-slide -->

                <div class="swiper-slide">
                  <a href="#" class="client" title="Client Title">
                    <img
                      src="assets/images/clients/logo9.png"
                      alt="Company Logo"
                    />
                  </a>
                </div>
                <!-- End .swiper-slide -->
              </div>
              <!-- End .swiper-wrapper -->
            </div>
            <!-- End .clients-carousel -->
          </div>
          <!-- End .container-fluid -->
        </div>
        <!-- End .bg-white -->
      </div>
      <!-- End .main -->

      <div
        class="page-header largest parallax custom text-center"
        style="background-image:url(/assets/images/monstera-banner.jpg)"
        data-0="background-position:50% 50%;"
        data-top-bottom="background-position:50% 100%"
      >
        <div class="container-fluid">
          <img
            src="/assets/images/PlantSwap.png"
            data-rjs="3"
            alt="Plant Logo"
            height="500"
          />
        </div>
        <!-- End .container-fluid -->
      </div>
      <!-- End .page-header -->
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
