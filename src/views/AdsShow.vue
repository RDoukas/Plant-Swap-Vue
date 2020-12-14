<template>
  <div class="ads-show">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6 col-md-6">
        <div class="product-details">
          <div class="product-details-img">
          <div class="tab-content jump">
            <div id="shop-details-2"
            class="tab-pane active large-img-style">
            <img :src="ad.image_url" alt="" width="300" />
            </div>
            <!-- End .product-zoom-wrapper -->
          </div>
          </div>
        </div>
        </div>
        <div class="col-lg-6 col-md-6">
        <div class="product-details-content ml-70" >
          <h2>{{ ad.title }}</h2>
          <h5>Plant Parent: {{ ad.username }}</h5>
          <h6>Posted on: {{ ad.created_at }}</h6>
          </br>
          <p>{{ ad.description }}</p>
          </br >
          <h5>Categories:</h5>
          <ul>
            <div v-for="category in ad.categories">{{ category.name }}
            </div>
          </ul>
        </div>
        </br>
        <div class="blog-reply-wrapper mt-50">
          <div v-if="!ad.owner">
          <form class="blog-form" action="#" v-on:submit.prevent="createConversation()">
            <label>Send Message: </label>
            <div class="row">
              <div class="col-md-12">
              <div class="text-leave">
                <textarea
                type="text"
                class="form-control"
                :placeholder="`Message...`"
                v-model="newMessage"
                cols="30"
                rows="3"
                ></textarea>
                <input type="submit" value="SEND MESSAGE"/>
              </div>
              </div>
              <!-- End .panel -->
            </div>
          </form>
          </div>
        </div>

      
        </div>
        
        <div v-if="ad.owner">
      <!-- Button trigger modal -->
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editAdModal">
          Edit
          </button>
          <button class="btn btn-primary" v-on:click="destroyAd()">Delete</button>
        </div>

    <!-- Edit Ad Modal -->
        <div class="modal fade" id="editAdModal" tabindex="-1" role="dialog" aria-labelledby="editAdModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="editAdModalLabel">Edit Ad</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <div class="modal-body">
            <form v-on:submit.prevent="editAd()">
              <ul>
              <li class="text-danger" v-for="error in errors">{{ error }}</li>
              </ul>
              <div class="form-group">
              <label>Title:</label>
              <input type="text" class="form-control" v-model="ad.title" />
              </div>
              <div class="form-group">
              <label>Description: </label>
              <input type="text" class="form-control" v-model="ad.description" />
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
          </div> 
        </div>
        </div>
      </div>
      </div>
      <!-- End .row -->
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
    conversation: {},
    messages: [],
    newMessage:"",
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
    formData.append("title", this.ad.title);
    formData.append("description", this.ad.description);
    formData.append("image_url", this.ad.imageUrl);
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
    message: this.newMessage
    };
    axios
    .post(`/api/conversations`, params)
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
