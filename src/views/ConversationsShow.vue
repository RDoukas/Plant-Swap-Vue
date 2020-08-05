<template>
  <div class="conversations-show">
    <div class="Blog-area pt-100 pb-100">
      <div class="container">
        <div class="row flex-row-reverse">
          <div class="col-lg-9">
            <div class="blog-details-wrapper ml-20">
              <div id="destroyConvo">
                <div class="btn-hover">
                  <button v-on:click="destroyConvo()">
                    Delete Conversation
                  </button>
                </div>
              </div>
              <div class="blog-comment-wrapper mt-55">
                <h4 class="blog-dec-title">
                  {{ conversation.ad_title }}
                </h4>
                <div
                  class="single-comment-wrapper mt-30"
                  v-for="message in conversation.messages"
                >
                  <div class="blog-comment-content">
                    <h4>{{ message.username }}</h4>
                    <span
                      >Date sent: {{ relativeTime(message.created_at) }}</span
                    >
                    <p>{{ message.body }}</p>
                  </div>
                </div>
              </div>
              <div class="blog-reply-wrapper mt-50">
                <form class="blog-form" v-on:submit.prevent="createMessage()">
                  <ul>
                    <li v-for="error in errors">{{ error }}</li>
                  </ul>
                  <label>Send Message:</label>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="text-leave">
                        <textarea
                          :placeholder="`Reply to ${partner.username}`"
                          v-model="newMessage"
                        ></textarea>
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

    <!-- <div class="cart-main-area pt-90 pb-100">
      <div class="pro-details-cart btn-hover">
      <div id="destroyConvo">
        <button v-on:click="destroyConvo()">Delete Conversation</button>
         <input type="submit" value="">
      </div> -->

    <!-- </div> -->
    <!-- <div class="container">
        <h3><a href="`/ads/${ad.id}`">Ad Title: {{conversation.ad_title}}</a></h3>
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="table-content table-responsive cart-table-content" v-for="message in conversation.messages">
              <table>
                <tbody>
                  <tr>
                    <h6>From: {{ message.username }}</h6>
                    <p>{{ message.body }}</p>
                    <h6>Sent: {{ relativeTime(message.created_at) }}</h6>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="row">
              <div class="col-lg-4 col-md-6"></div>
                <div class="blog-reply-wrapper mt-50">
                  <form class="blog-form" v-on:submit.prevent="createMessage()">
                    <ul>
                      <li v-for="error in errors">{{error}}</li>
                    </ul>
                    <label>Send Message:</label>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="text-leave">
                        <textarea :placeholder="`Reply to ${partner.username}`" v-model="newMessage"></textarea>
                        <input type="submit" value="SEND MESSAGE">
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
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  data: function() {
    return {
      errors: [],
      conversation: {
        messages: [],
      },
      partner: {},
      newMessage: "",
    };
  },
  created: function() {
    axios
      .get(`/api/conversations/${this.$route.params.id}`)
      .then((response) => {
        this.conversation = response.data;
        this.partner = response.data.partner;
        this.messages = response.data.messages;
        console.log(response.data);
      });
  },
  methods: {
    createMessage: function() {
      var params = {
        body: this.newMessage,
        conversation_id: this.conversation.id,
      };
      axios
        .post("/api/messages", params)
        .then((response) => {
          this.messages.push(response.data);
          this.newMessage = "";
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    destroyConvo: function() {
      if (confirm("Are you sure you want to delete this conversation?")) {
        axios
          .delete(`/api/conversations/${this.conversation.id}`)
          .then((response) => {
            console.log(response.data);
            this.$router.push("/conversations");
          });
      }
    },
    relativeTime: function(time) {
      return moment(time)
        .startOf("hour")
        .fromNow();
    },
  },
};
</script>
