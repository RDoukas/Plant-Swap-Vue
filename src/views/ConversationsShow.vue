<template>
  <div class="conversations-show">
    <div v-for="message in conversation.messages">
      <p>{{ message.body }}</p>
      <p>From: {{ message.username }}</p>
      <p>Sent: {{ relativeTime(message.created_at) }}</p>
    </div>
    <form v-on:submit.prevent="createMessage()">
      <label>Send Message: </label>
      <input
        type="text"
        class="form-control"
        :placeholder="`Message ${partner.usernmae}`"
        v-model="body"
      />
      <input type="submit" class="btn btn-primary" value="send" />
    </form>
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
      body: "",
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
        body: this.body,
      };
      axios
        .post("/api/messages", params)
        .then((response) => {
          this.messages.push(response.data);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    relativeTime: function(time) {
      return moment(time)
        .startOf("hour")
        .fromNow();
    },
  },
};
</script>
