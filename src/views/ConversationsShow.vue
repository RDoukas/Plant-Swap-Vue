<template>
  <div class="conversations-show">
    <button v-on:click="destroyConvo()">
      Delete Conversation
    </button>
    <h4>{{ conversation.ad_title }}</h4>
    <div v-for="message in conversation.messages">
      <h5>Plant Parent: {{ message.username }}</h5>
      <span>Date sent: {{ relativeTime(message.created_at) }}</span>
      <p>{{ message.body }}</p>
    </div>
    <div v-on:submit.prevent="createMessage()">
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      <label>Send Message:</label>
      <textarea
        :placeholder="`Reply to ${partner.username}`"
        v-model="newMessage"
      ></textarea>
      <input type="submit" value="SEND MESSAGE" />
    </div>
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
