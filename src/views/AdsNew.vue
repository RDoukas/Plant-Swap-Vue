<template>
  <div class="ads-new">
    <div class="main">
      <div
        class="fullscreen vertical-center bg-image overlay-container overflow-hidden"
        style="background-image:url(/assets/images/monstera.jpeg)"
      >
        <div class="overlay custom"></div>
        <!-- End .overlay -->
        <div id="particles-js"></div>
        <!-- End #particles-js -->

        <div class="vcenter-content text-center">
          <div class="container-fluid">
            <h1 class="text-white wow fadeInUp" data-wow-delay="0.25s">
              Create a new ad
            </h1>
            <p class="text-white wow fadeInUp" data-wow-delay="0.5s"></p>
          </div>
          <!-- End .container-fluid -->
        </div>
        <!-- End .vcenter-content -->
      </div>
      <!-- End .fullscreen -->
      <div class="container-fluid">
        <form v-on:submit.prevent="createAd()">
          <!-- <h1>Create a new ad</h1> -->
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
          <input type="submit" class="btn btn-primary" value="Create" />
        </form>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      title: "",
      description: "",
      imageUrl: "",
      errors: [],
      categoryIds: [],
      categories: [],
    };
  },
  created: function() {
    axios.get(`/api/categories/`).then((response) => {
      this.categories = response.data;
      console.log(response.data);
    });
  },
  methods: {
    setFile: function(event) {
      if (event.target.files.length > 0) {
        this.imageUrl = event.target.files[0];
      }
    },
    createAd: function() {
      var formData = new FormData();
      formData.append("title", this.title);
      formData.append("description", this.description);
      formData.append("image_url", this.imageUrl);
      formData.append("category_ids", JSON.stringify(this.categoryIds));
      axios
        .post("/api/ads", formData)
        .then((response) => {
          this.$router.push(`/ads/${response.data.id}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
