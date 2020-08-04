<template>
  <div class="ads-show" 
    <div class="shop-area pt-100 pb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div class="product-details">
              <div class="product-details-img">
                <div class="tab-content jump">
                  <div id="shop-details-2"
                    class="tab-pane active large-img-style">
                    <img :src="ad.image_url" alt="" width="300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="product-details-content ml-70">
              <h2>{{ ad.title }}</h2>
              <h4>Posted on: {{ ad.created_at }}</h4>
              <h5>Plant Parent: {{ ad.username }}</h5>
              <p>{{ ad.description }}</p>
              <div class="pro-details-meta">
                <span>Categories :</span>
                <div v-for="category in ad.categories">
                  {{ category.name }}
                </div>
              </div>
            </div>
            </br>
            <div class="blog-reply-wrapper mt-50">
              <h4 class="blog-dec-title">Message Plant Parent</h4>
                <form class="blog-form" action="#">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="text-leave">
                        <textarea placeholder="Message"></textarea>
                        <input type="submit" value="SEND MESSAGE">
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            
            <div class="pro-details-cart btn-hover" v-if="ad.owner">
              <div id="destroyAd">
                <button v-on:click="destroyAd()">Delete Ad</button>
              </div>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">x</span></button>
                  </div>
                  <div class="modal-body">
                    <div class="row">
                      <div class="col-md-5 col-sm-12 col-xs-12">
                          <!-- Thumbnail Large Image End -->
                          <!-- Thumbnail Image End -->
                          <div class="quickview-wrap mt-15">
                              <div class="quickview-slide-active owl-carousel nav nav-style-1" role="tablist">
                                  <a class="active" data-toggle="tab" href="#pro-1"><img src="assets/img/product/quickview-s1.jpg" alt=""></a>
                                  <a data-toggle="tab" href="#pro-2"><img src="assets/img/product/quickview-s2.jpg" alt=""></a>
                                  <a data-toggle="tab" href="#pro-3"><img src="assets/img/product/quickview-s3.jpg" alt=""></a>
                                  <a data-toggle="tab" href="#pro-4"><img src="assets/img/product/quickview-s2.jpg" alt=""></a>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-7 col-sm-12 col-xs-12">
                          <div class="product-details-content quickview-content">
                              <h2>Products Name Here</h2>
                              <div class="product-details-price">
                                  <span>$18.00 </span>
                                  <span class="old">$20.00 </span>
                              </div>
                              <div class="pro-details-rating-wrap">
                                  <div class="pro-details-rating">
                                      <i class="fa fa-star-o yellow"></i>
                                      <i class="fa fa-star-o yellow"></i>
                                      <i class="fa fa-star-o yellow"></i>
                                      <i class="fa fa-star-o"></i>
                                      <i class="fa fa-star-o"></i>
                                  </div>
                                  <span>3 Reviews</span>
                              </div>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco</p>
                              <div class="pro-details-list">
                                  <ul>
                                      <li>- 0.5 mm Dail</li>
                                      <li>- Inspired vector icons</li>
                                      <li>- Very modern style  </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
            </div>
        </div>
    </div>
</div>

         
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
  </div>
</template>

<!-- <div v-if="ad.owner"> -->
<!-- Edit ad form -->
<!-- <form v-on:submit.prevent="editAd()">
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
      </form> -->

<!-- Delete ad button -->
<!-- <div id="destroyAd">
        <button v-on:click="destroyAd()">Delete Ad</button>
      </div>
    </div> -->

<!-- Send message -->
<!-- <div v-if="!ad.owner">
      <button v-on:click="createConversation()">Contact User</button>
    </div> -->

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
