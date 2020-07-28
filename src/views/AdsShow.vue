<template>
  <div class="ads-show">
    <h2>{{ ad.title }}</h2>
    <h4>Posted on: {{ ad.created_at}}</h4>
    <h5>User: {{ad.user_id}}</h5>
    <p>{{ad.description}}</p>
    <img :src="ad.image_url" alt="" width="300"/>

    <br />

  
   <!-- Edit ad form -->
        <form v-on:submit.prevent="editAd()">
          <ul>
            <li class="text-danger" v-for="error in errors">{{ error }}</li>
          </ul>
          <div class="form-group">
            <label>Title:</label>
            <input type="text" class="form-control" v-model="ad.title">
          </div>
          <div class="form-group">
            <label>Description:</label>
            <input type="text" class="form-control" v-model="ad.description">
          </div>
          <div class="form-group">
            <label>Image:</label>
            <input type="text" class="form-control" v-model="ad.image_url">
          </div>
          <input type="submit" class="btn btn-primary" value="Update">
        </form>
  
<!-- Delete ad button -->
        <div id="destroyAd"> 
          <button v-on:click="destroyAd()">Delete Ad</button>
        </div>
<!-- Send message -->
        <form v-on:submit.prevent="createMessage()">
          <label>Send Message: </label>
          <input
            type="text"
            class="form-control"
            :placeholder="`Message`"
            v-model="newMessage"
          />
          <input type="submit" class="btn btn-primary" value="send" />
        </form>
      </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      errors: [],
      ad: {},
      newMessage: "",
      newConversation: "",
    };
  },
  created: function () {
    axios.get(`/api/ads/${this.$route.params.id}`).then((response) => {
      this.ad = response.data;
      console.log(this.ad);
    });
  },

  methods: {
    destroyAd: function () {
      if (confirm("Are you sure you want to delete this ad?")) {
        axios.delete(`/api/ads/${this.ad.id}`).then((response) => {
          console.log(response.data);
          this.$router.push("/ads");
        });
      }
    },
    editAd: function () {
      var params = {
        title: this.ad.title,
        description: this.ad.description,
        image_url: this.ad.image_url,
      };
      if (confirm("Are you sure you'd like to update your ad?")) {
        axios
          .patch(`/api/ads/${this.ad.id}`, params)
          .then((response) => {
            console.log("Your ad has been updated!", response.data);
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
      }
    },
    createConversation: function () {
      var params = {
        message: this.newConversation,
        recipient_id: this.recipient_id,
        ad_id: this.ad.id,
      };
      axios
        .post("/api/conversations", params)
        .then((response) => {
          this.$router.push(`response.data`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    createMessage: function () {
      var params = {
        body: this.newMessage,
        conversation_id: this.conversation.id,
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
  },
};
</script>