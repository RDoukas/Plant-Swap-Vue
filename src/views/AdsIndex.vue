<template>
  <div class="ads-index">
    <div class="wrapper">
      <div class="main">
        <div
          class="fullscreen vertical-center parallax overlay-container overflow-hidden"
          style="background-image:url(assets/images/backgrounds/succulent-wood.jpg)"
          data-0="background-position:50% 50%;"
          data-top-bottom="background-position:50% 100%"
        >
          <div class="overlay custom"></div>
          <!-- End .overlay -->

          <div
            class="vcenter-content text-center"
            data-300-top="opacity:1;"
            data-top-bottom="opacity:0.4;"
          >
            <div class="container-fluid">
              <h1 class="text-white">
                <span>Ads List</span>
              </h1>
              <!-- <h5 class="text-white">
                Below is a a list of all plants that are available to be
                swapped!
              </h5> -->
            </div>
            <!-- End .container-fluid -->
          </div>
          <!-- End .vcenter-content -->
        </div>
        <!-- End .fullscreen -->
        <div class="container-fluid">
          <div class="row flex-shop">
            <div class="col-md-9 col-md-push-3">
              <div class="category-filter-row">
                <div class="right">
                  <div>
                    <button v-on:click="sortAttribute = ad.user_id">
                      Show my ads
                    </button>
                    <button v-on:click="sortAttribute = ad.title">
                      Sort by Title
                    </button>
                  </div>
                </div>
                <!-- end .right -->

                <div class="left">
                  <div class="filter-container filter-sort">
                    <label>Sort by:</label>
                    <select class="form-control input-sm">
                      <option value="title">Sort by title</option>
                      <option value="created_at">Date Posted</option>
                    </select>
                  </div>
                  <!-- End .filter-sort -->
                </div>
                <!-- End .left -->
              </div>
              <!-- End .category-filter-row -->
              <li v-for="ad in ads">
                <div class="product product-list">
                  <div class="row">
                    <div class="col-md-4 col-sm-5">
                      <div class="product-top">
                        <figure>
                          <router-link
                            v-bind:to="`/ads/${ad.id}`"
                            title="ad.title"
                          >
                            <img
                              v-bind:src="ad.image_url"
                              alt="Ad image"
                              class="product-image"
                            />
                          </router-link>
                        </figure>
                      </div>
                      <!-- End .product -->
                    </div>
                    <!-- End .col-md-4 -->
                    <div class="col-md-8 col-sm-7">
                      <div class="product-content">
                        <h3 class="product-title">
                          <router-link v-bind:to="`/ads/${ad.id}`">{{
                            ad.title
                          }}</router-link>
                        </h3>
                        <!-- End .product-meta-container -->
                        <p>{{ ad.description }}</p>
                        <p>{{ ad.username }}</p>
                      </div>
                      <!-- End .product-content -->
                    </div>
                    <!-- End .col-md-8 -->
                  </div>
                  <!-- end .Row -->
                </div>
              </li>

              <!-- End .product -->

              <div class="mb20 mb15-sm"></div>
              <!-- End margin -->

              <!-- <div class="pagination-wrapper">
                <nav class="pagination-container">
                  <label>Showing: 1-4 of 16</label>
                  <ul class="pagination">
                    <li class="active"><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li>
                      <a href="#" aria-label="Next">
                        <span aria-hidden="true"
                          ><i class="fa fa-angle-right"></i
                        ></span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div> -->
              <!-- End .pagination-wrapper -->
            </div>
            <!-- End .col-md-9 -->

            <aside class="col-md-3 col-md-pull-9 sidebar shop-sidebar">
              <div class="widget">
                <div class="filter-group-widget"></div>
                <!-- End .filter-widget -->
              </div>
              <!-- End .widget -->
            </aside>
          </div>
          <!-- End .row -->
        </div>
        <!-- End .container-fluid -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      ads: [],
      titleFilter: "",
      sortAttribute: "",
    };
  },
  created: function() {
    axios.get("api/ads").then((response) => {
      console.log("All Ads:", response.data);
      this.ads = response.data;
    });
  },
  methods: {},
};
</script>
