<template>
  <div class="conversations-index">
    <!-- Shows actual conversations list -->
    <div v-for="conversation in conversations">
      <router-link v-bind:to="`/conversations/${conversation.id}`">{{
        conversation.ad_title
      }}</router-link>
      <p>{{ conversation.partner.username }}</p>
      <p>{{ conversation.last_message.body }}</p>
      <p>Sent: {{ relativeTime(conversation.last_message.created_at) }}</p>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import moment from "moment";
export default {
  data: function () {
    return {
      conversations: {},
    };
  },
  created: function () {
    axios.get("api/conversations").then((response) => {
      console.log("all Conversations", response.data);
      this.conversations = response.data;
    });
  },
  methods: {
    createMessage: function () {
      var params = {
        body: this.body,
      };
      axios
        .patch("/api/conversations", params)
        .then((response) => {
          this.messages.push(response.data);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    relativeTime: function (time) {
      return moment(time).startOf("hour").fromNow();
    },
  },
};
</script>
