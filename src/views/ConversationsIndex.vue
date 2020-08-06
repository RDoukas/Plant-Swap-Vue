<template>
  <div class="conversations-index">
    <div class="Blog-area pt-100 pb-100">
      <div class="container">
        <div class="row flex-row-reverse">
          <div class="col-lg-9">
            <div class="blog-details-wrapper ml-20">
              <div class="blog-details-top"></div>

              <div class="blog-comment-wrapper mt-55">
                <h4 class="blog-dec-title">Conversations:</h4>
                <div
                  class="single-comment-wrapper mt-40"
                  v-for="conversation in conversations"
                >
                  <div class="blog-comment-content">
                    <h4>{{ conversation.ad_title }}</h4>
                    <p></p>
                    <p>Plant Parent: {{ conversation.partner.username }}</p>
                    <p>"{{ conversation.last_message.body }}"</p>
                    <div class="blog-details-btn">
                      <router-link
                        v-bind:to="`/conversations/${conversation.id}`"
                        >Open Conversation</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

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
    axios.get("api/conversations").then((response) => {
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
