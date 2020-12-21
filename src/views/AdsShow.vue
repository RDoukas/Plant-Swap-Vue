<template>
  <div class="ads-show">
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
            </h1>
            <p class="text-white wow fadeInUp" data-wow-delay="0.5s"></p>
          </div>
          <!-- End .container-fluid -->
        </div>
        <!-- End .vcenter-content -->
      </div>
      <!-- End .fullscreen -->

  <div class="container-fluid">
  <div class="row">
    <div class="col-md-6">
    <div class="product-gallery-container">
      <div class="product-zoom-wrapper">
      <div class="product-zoom-container">
        <img :src="ad.image_url" alt="" width="300" />
      </div><!-- End .product-zoom-container -->
      </div><!-- End .product-zoom-wrapper -->
    </div><!-- End .product-gallery-container -->
    </div><!-- End .col-md-6 -->

    <div class="clearfix visible-sm"></div><!-- end .clearfix -->

    <div class="col-md-6">
    <div class="product-details">
      <h2 class="product-title">{{ad.title}}t</h2>

      <div class="product-desc-box">
      <ul>
        <li><strong>Plant Parent: </strong> {{ad.username}}</li>
        <li><strong>Date Posted: </strong>{{ad.created_at}}</li>
        <li><strong>Description: </strong> {{ad.description}}</li>
      </ul>
      </div><!-- End .product-desc-box -->

      <div class="row">
      <div class="col-xs-6">
    
      </div><!-- End .col-xs-6 -->
      <div class="col-xs-6">
      </div><!-- End .col-xs-6 -->
      </div><!-- End .row -->
      <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
      <div class="panel">
        <div class="panel-heading" role="tab" id="headingOne2">
        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne2" aria-expanded="true" aria-controls="collapseOne2">
          Categories
          </a>
        </h4>
        </div><!-- End .panel-heading -->
        <div id="collapseOne2" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne2">
        <div class="panel-body">
          <div v-for="category in ad.categories">{{ category.name }}</div>
        </div><!-- End .panel-body -->
        </div><!-- End .panel-collapse -->
      </div><!-- End .panel -->
      </div><!-- End .panel-group --><div v-if="!ad.owner">
    <form action="#" method="post" id="contact-form" v-on:submit.prevent="createConversation()">

    <div class="row">
      <div class="col-md-12">
        <label>Message</label>
        <textarea class="form-control" rows="6" id="contactmessage" name="contactmessage" placeholder="Message" v-model="newMessage"
         required></textarea>
      </div><!-- End .col-md-12 -->
    </div><!-- End .row -->

    <div class="mb10"></div><!-- margin -->

    <input type="submit" class="btn btn-custom min-width" data-loading-text="Sending Message..." value="Send Message">
  </form>
  </div>

    </div><!-- End .product-details -->
    </div><!-- End .col-md-6 -->
  </div><!-- End .row -->
  
   
  
  </div><!-- End .container-fluid -->
    </div>
     


















  <!-- old code -->
  <div class="container-fluid">

  
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
