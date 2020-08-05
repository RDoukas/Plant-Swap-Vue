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
                  class="single-comment-wrapper mt-35"
                  v-for="conversation in conversations"
                >
                  <div class="blog-comment-content">
                    <h4>{{ conversation.ad_title }}</h4>
                    <span>{{ relativeTime(conversation.last_message) }} </span>
                    <p>{{ conversation.last_message.body }}</p>
                    <div class="blog-details-btn">
                      <router-link
                        v-bind:to="`/conversations/${conversation.id}`"
                        >Open Conversation</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="blog-reply-wrapper mt-50">
                <h4 class="blog-dec-title">post a comment</h4>
                <form class="blog-form" action="#">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="leave-form">
                        <input type="text" placeholder="Full Name" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="leave-form">
                        <input type="email" placeholder="Email Address " />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="text-leave">
                        <textarea placeholder="Message"></textarea>
                        <input type="submit" value="SEND MESSAGE" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div v-for="conversation in conversations">
      <router-link v-bind:to="`/conversations/${conversation.id}`">{{
        conversation.ad_title
      }}</router-link>
      <p>{{ conversation.partner.username }}</p>
      <p>{{ conversation.last_message.body }}</p>
      <p>Sent: {{ relativeTime(conversation.last_message) }}</p>
    </div> -->
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
