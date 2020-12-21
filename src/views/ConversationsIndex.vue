<template>
  <div class="conversations-index">
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
              Messages
            </h1>
            <p class="text-white wow fadeInUp" data-wow-delay="0.5s"></p>
          </div>
          <!-- End .container-fluid -->
        </div>
        <!-- End .vcenter-content -->
      </div>
      <!-- End .fullscreen -->

      <div class="mb60 mb45-sm"></div>
      <!-- margin -->

      <!-- End .main -->
      <div class="container-fluid">
        <!-- End .category-filter-row -->

        <div v-for="conversation in conversations" class="product product-list">
          <div class="row">
            <div class="col-md-4 col-sm-5">
              <div class="product-top"></div>
              <!-- End .product -->
            </div>
            <!-- End .col-md-4 -->
            <div class="col-md-8 col-sm-7">
              <div class="product-content">
                <h1 class="product-title">
                  <router-link v-bind:to="`/ads/${conversation.ad_id}`">
                    {{ conversation.ad_title }}
                  </router-link>
                </h1>
                <p>Plant Parent: {{ conversation.partner.username }}</p>
                <p>
                  Sent: {{ relativeTime(conversation.last_message.created_at) }}
                </p>
                <p>"{{ conversation.last_message.body }}"</p>
                <router-link
                  class="btn btn-custom"
                  v-bind:to="`/conversations/${conversation.id}`"
                  >{{ conversation.ad_title }}
                </router-link>
                <!-- <a
                  href="`/conversations/${conversation.id}`"
                  class="btn btn-custom"
                  >Open Conversation</a
                > -->
              </div>
              <!-- End .product-content -->
            </div>
            <!-- End .col-md-8 -->
          </div>
          <!-- end .Row -->
        </div>
        <!-- End .product -->

        <div class="mb30 mb20-sm"></div>
        <!-- End margin -->
      </div>
      <!-- End .container-fluid -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  data: function() {
    return {
      conversations: {},
    };
  },
  created: function() {
    axios.get("/api/conversations").then((response) => {
      console.log("all Conversations", response.data);
      this.conversations = response.data;
    });
  },
  methods: {
    relativeTime: function(time) {
      return moment(time)
        .startOf("hour")
        .fromNow();
    },
  },
};
</script>
