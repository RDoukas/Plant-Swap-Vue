<template>
  <div class="ads-new">
    <form v-on:submit.prevent="createAd()">
      <h1>Create a new ad</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Title:</label>
        <input type="text" class="form-control" v-model="title" />
      </div>
      <div class="form-group">
        <label>Description:</label>
        <input type="text" class="form-control" v-model="description" />
      </div>
      <div class="form-group">
        <label>Image Url:</label>
        <input type="text" class="form-control" v-model="imageUrl" />
      </div>
      <input type="submit"  class="btn btn-primary" value="Create" />
    </form>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      title: "",
      description: "",
      imageUrl: "",
      errors: []
    };
  },
  created: function() {},
  methods: {
    createAd: function() {
      var formData = new FormData();
      formData.append("title", this.title);
      formData.append("description", this.description);
      formData.append("image_url", this.imageUrl);
      axios
        .post("/api/ads", formData)
        .then(response => {
          this.$router.push(`/ads/${response.data.id}`);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>