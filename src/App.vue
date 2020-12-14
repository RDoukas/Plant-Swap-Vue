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
