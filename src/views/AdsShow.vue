<template>
  <div class="ads-show">
    <div class="mb50 hidden-s"></div>
    <!-- margin -->
    
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <div class="product-gallery-container">
            <div class="product-zoom-wrapper">
              <div class="product-zoom-container">
                <img id="product-zoom" :src="ad.image_url" alt="ad.title" />
              </div>
              <!-- End .product-zoom-container -->
            </div>
            <!-- End .product-zoom-wrapper -->
          </div>
          <!-- End .product-gallery-container -->
        </div>
        <!-- End .col-md-6 -->

        <div class="clearfix visible-sm"></div>
        <!-- end .clearfix -->

        <div class="col-md-6">
          <div class="product-details">
            <h2 class="product-title">{{ ad.title }}</h2>

            <div class="product-desc-box">
              <ul>
                <li><strong>Plant Parent: </strong>{{ ad.username }}</li>
                <li><strong>Date Posted: </strong>{{ ad.created_at }}</li>
                <li><strong>Description: </strong>{{ ad.description }}</li>
              </ul>
            </div>
            <!-- End .product-desc-box -->

            <div class="row">
              <div class="col-xs-6"></div>
              <!-- End .col-xs-6 -->
              <div class="col-xs-6"></div>
              <!-- End .col-xs-6 -->
            </div>
            <!-- End .row -->

            <!-- End .product-action -->
            <div
              class="panel-group"
              id="accordion"
              role="tablist"
              aria-multiselectable="true"
            >
              <div class="panel">
                <div class="panel-heading" role="tab" id="headingOne2">
                  <h4 class="panel-title">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseOne2"
                      aria-expanded="true"
                      aria-controls="collapseOne2"
                    >
                      Categories:
                    </a>
                  </h4>
                </div>
                <!-- End .panel-heading -->
                <div
                  id="collapseOne2"
                  class="panel-collapse collapse in"
                  role="tabpanel"
                  aria-labelledby="headingOne2"
                >
                  <div class="panel-body">
                    <div v-for="category in ad.categories">
                      <ul>
                        {{
                          category.name
                        }}
                      </ul>
                    </div>
                  </div>
                  <!-- End .panel-body -->
                </div>
                <!-- End .panel-collapse -->
              </div>
              <!-- End .panel -->
            </div>
            <!-- End .panel-group -->
          </div>
          <!-- End .product-details -->
          <div class="product-action">
            <div v-if="ad.owner">
              <a href="#" class="btn btn-custom">Edit Ad</a>
              <div class="btn btn-white hidden-xs" v-on:click="destroyAd()">Delete Ad</a>
              </div>
            </div>
            <div v-if="!ad.owner">
              <div class="col-md-8 col-sm-6">
                            <h2 class="title custom">Get in touch</h2>
                            <form action="#" method="post" id="contact-form">

                                <div class="row">
                                    <div class="col-md-12">
                                        <label>Message</label>
                                        <textarea class="form-control" rows="6" id="createConversation" name="createConversation" placeholder="Message" required></textarea>
                                    </div><!-- End .col-md-12 -->
                                </div><!-- End .row -->

                                <div class="mb10"></div><!-- margin -->

                                <input type="submit" class="btn btn-custom min-width" data-loading-text="Sending Message..." value="Send Message">
                            </form>
                        </div><!-- End .col-md-8 -->

                        <div class="clearfix mb50 visible-sm visible-xs"></div><!-- margin -->
              <!-- <div class="col-sm-6">
                <label class="input-desc">Message Plant Parent</label>
                <textarea class="form-control" rows="4" placeholder="Your message"></textarea><div class="btn btn-custom" v-on:click="createConversation()">
                  Contact User
                </div>
              </div>  -->
            </div>
          </div>
        </div>
        <!-- End .col-md-6 -->
      </div>
      <!-- End .row -->
    </div>
    <!-- End .container-fluid -->

    <div class="mb30 hidden-xs"></div>
    <!-- margin -->

    <div v-if="ad.owner">
      <!-- Edit ad form -->
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
