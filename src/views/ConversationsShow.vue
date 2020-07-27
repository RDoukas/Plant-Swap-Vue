<template>
  <div class="conversations-show">
    <router-link :to="`/users/${partner.id}`">{{
      conversation.partner.username
    }}</router-link>
    <div v-for="message in messages">
      <p>{{ message.body }}</p>
      <p>{{ relativeTime(message.created_at) }}</p>
    </div>
    <form v-on:submit.prevent="createMessage()">
      <label>Send Message: </label>
      <input
        type="text"
        class="form-control"
        :placeholder="`Message ${partner.usernmae}`"
        v-model="newMessage"
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
      conversation: {},
      messages: [],
      partner: {},
      newMessage: "",
    };
  },
  created: function() {
    axios
      .get(`/api/conversations/${this.$route.params.id}`)
      .then((response) => {
        console.log("Messages", response.data);
        this.conversation = response.data;
        this.partner = response.data.partner;
        this.messages = response.data.messages;
      });
  },
  methods: {
    createMessage: function() {
      var params = {
        body: this.newMessage,
      };
      axios.post("api/messages", params).then((response) => {
        this.messages.push(response.data);
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
