<template>
  <div class="ads-show">
    <h2>{{ ad.title }}</h2>
    <h4>Posted on: {{ ad.created_at}}</h4>
    <h5>User: {{ad.user_id}}</h5>
    <p>{{ad.description}}</p>
    <img :src="ad.image_url" alt="" width="300"/>

    <br />

  
        
    
      

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
      <div id="destroyAd"> 
        <button v-on:click="destroyAd()">Delete Ad</button>
      </div>


      <form action="/conversations" id="usrform">
        Message:
        <textarea rows="4" cols="50" name="comment" form="usrform">
        Enter text here...</textarea>
       <input type="submit" class="btn    btn-primary" value="Send message"> 
      </form>
      <br>
  

  

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
      conversations: {},
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
            // $("#editAdModal").modal("hide");
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
      }
    },
    createConversation: function () {
      var params = {
        body: this.message.body,
      };
      axios
        .post("/api/conversations")
        .then((response) => {
          this.$router.push(`/conversations/${response.data.id}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>