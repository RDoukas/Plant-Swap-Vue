<template>
  <div class="conversations-index">
    <div v-for="conversation in conversations">
      <h4>{{ conversation.ad_title }}</h4>
      <p></p>
      <p>Plant Parent: {{ conversation.partner.username }}</p>
      <p>"{{ conversation.last_message.body }}"</p>
      <router-link v-bind:to="`/conversations/${conversation.id}`"
        >Open Conversation</router-link
      >
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
