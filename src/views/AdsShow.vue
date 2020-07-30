<template>
  <div class="ads-show">
    <h2>{{ ad.title }}</h2>
    <h4>Posted on: {{ ad.created_at }}</h4>
    <h5>User: {{ ad.username }}</h5>
    <p>{{ ad.description }}</p>
    <p>Categories:</p>
    <div v-for="category in ad.categories">
      <p>{{ category.name }}</p>
    </div>
    <img :src="ad.image_url" alt="" width="300" />

    <br />

    <div v-if="ad.owner">
      <!-- Edit ad form -->
      <form v-on:submit.prevent="editAd()">
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Title:</label>
          <input type="text" class="form-control" v-model="title" />
        </div>
        <div class="form-group">
          <label>Description: </label>
          <input type="text" class="form-control" v-model="description" />
        </div>
        <div class="form-group">
          <label>Image:</label>
          <input
            class="form-control"
            type="file"
            v-on:change="setFile($event)"
            ref="fileInput"
          />
        </div>
        <div class="form-group">
          <div v-for="category in categories">
            <input
              type="checkbox"
              :id="category.id"
              :value="category.id"
              v-model="categoryIds"
            />
            <label :for="category.id">{{ category.name }}</label>
          </div>
          {{ categoryIds }}
        </div>
        <input type="submit" class="btn btn-primary" value="Update" />
      </form>

      <!-- Delete ad button -->
      <div id="destroyAd">
        <button v-on:click="destroyAd()">Delete Ad</button>
      </div>
    </div>

    <!-- Send message -->
    <div v-if="!ad.owner">
      <button v-on:click="createConversation()">Contact User</button>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      errors: [],
      ad: {},
      categories: [],
      categoryIds: [],
    };
  },
  created: function() {
    axios.get(`/api/ads/${this.$route.params.id}`).then((response) => {
      this.ad = response.data;
      console.log(this.ad);
      this.categoryIds = this.ad.categories.map((category) => category.id);
    });
    axios.get(`/api/categories/`).then((response) => {
      this.categories = response.data;
      console.log(response.data);
    });
  },

  methods: {
    setFile: function(event) {
      if (event.target.files.length > 0) {
        this.ad.imageUrl = event.target.files[0];
      }
    },
    editAd: function() {
      var formData = new FormData();
      formData.append("title", this.title);
      formData.append("description", this.description);
      formData.append("image_url", this.imageUrl);
      formData.append("category_ids", JSON.stringify(this.categoryIds));

      console.log(this.categoryIds);

      if (confirm("Are you sure you'd like to update your ad?")) {
        axios
          .patch(`/api/ads/${this.ad.id}`, formData)
          .then((response) => {
            console.log("Your ad has been updated!", response.data);
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
      }
    },
    destroyAd: function() {
      if (confirm("Are you sure you want to delete this ad?")) {
        axios.delete(`/api/ads/${this.ad.id}`).then((response) => {
          console.log(response.data);
          this.$router.push("/ads");
        });
      }
    },
    createConversation: function() {
      var params = {
        recipient_id: this.ad.user_id,
        ad_id: this.ad.id,
      };
      axios
        .post("/api/conversations/", params)
        .then((response) => {
          console.log(response.data);
          this.$router.push(`/conversations/${response.data.id}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
