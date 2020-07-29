<template>
  <div class="conversations-index">
    <!-- Shows actual conversations list -->
    <div v-for="conversation in conversations">
      <router-link v-bind:to="`/conversations/${conversation.id}`">{{
        conversation.ad_title
      }}</router-link>
      <p>{{ conversation.partner.username }}</p>
      <p>{{ conversation.last_message.body }}</p>
      <p>Sent: {{ relativeTime(conversation.last_message) }}</p>
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
    relativeTime: function (time) {
      return moment(time).startOf("hour").fromNow();
    },
  },
};
</script>