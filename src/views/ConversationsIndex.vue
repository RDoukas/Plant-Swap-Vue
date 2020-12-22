<template>
  <div class="conversations-index">
    <div class="main">
      <div
        class="page-header largest parallax custom text-center"
        style="background-image:url(/assets/images/monstera.jpeg)"
        data-0="background-position:50% 50%;"
        data-top-bottom="background-position:50% 100%"
      >
        <div class="container-fluid">
          <h1>Messages</h1>
          <!-- <ol class="breadcrumb">
            <li><a href="index.html">Home</a></li>
            <li><a href="#">Pages</a></li>
            <li class="active">Category</li>
          </ol> -->
        </div>
        <!-- End .container-fluid -->
      </div>
      <!-- End .page-header -->

      <div class="mb60 mb45-sm"></div>
      <!-- margin -->

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
                  >View Conversation
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
