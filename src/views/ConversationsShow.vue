<template>
  <div class="conversations-show">
    <!-- <div id="destroyConvo"> 
      <button v-on:click="destroyConvo()">Delete Conversation</button>
    </div> -->
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
        :placeholder="`Message ${partner.username}`"
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
  data: function () {
    return {
      errors: [],
      conversation: {
        messages: [],
      },
      partner: {},
      newMessage: "",
    };
  },
  created: function () {
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
    createMessage: function () {
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
    destroyConvo: function () {
      if (confirm("Are you sure you want to delete this conversation?")) {
        axios
          .delete(`/api/conversations/${this.conversation.id}`)
          .then((response) => {
            console.log(response.data);
            this.$router.push("/conversations");
          });
      }
    },
    relativeTime: function (time) {
      return moment(time).startOf("hour").fromNow();
    },
  },
};
</script>