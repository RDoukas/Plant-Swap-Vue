<template>
  <div class="home">
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
            <h1 class="text-white wow fadeInUp" data-wow-delay="0.25s">
              Welcome
            </h1>
            <p class="text-white wow fadeInUp" data-wow-delay="0.5s"></p>
          </div>
          <!-- End .container-fluid -->
        </div>
        <!-- End .vcenter-content -->
      </div>
      <!-- End .fullscreen -->
      <div class="container-fluid"></div>
      <!-- End .container-fluid -->

      <!-- <div class="mb60 mb50-sm mb45-xs"></div> -->
      <!-- margin -->

      <!-- <div class="mb60 mb50-sm"></div> -->
      <!-- margin -->

      <div class="mb65 mb60-sm"></div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      greeting: "Welcome!!",
    };
  },
  created: function() {},
  methods: {},
};
</script>
