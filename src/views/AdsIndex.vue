<template>
  <div class="ads-index">
    <div class="wrapper">
      <div class="main">
        <div
          class="page-header largest parallax custom text-center"
          style="background-image:url(/assets/images/backgrounds/succulent-wood.jpg)"
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
                    <div
                      class="btn btn-custom btn-sm"
                      v-on:click="sortAttribute = ad.user_id"
                    >
                      Show my ads
                    </div>
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
              <ul v-for="ad in ads">
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
              </ul>

              <!-- End .product -->

              <div class="mb20 mb15-sm"></div>
              <!-- End margin -->
            </div>
            <!-- End .col-md-9 -->
            <aside class="col-md-3 col-md-pull-9 sidebar shop-sidebar">
              <div class="widget">
                <div class="filter-group-widget">
                  <div
                    class="panel-group"
                    role="tablist"
                    aria-multiselectable="true"
                  >
                    <div class="panel">
                      <div
                        class="panel-heading"
                        role="tab"
                        id="categoryFilter-header"
                      >
                        <h4 class="panel-title">
                          <a
                            data-toggle="collapse"
                            href="#categoryFilter"
                            aria-expanded="true"
                            aria-controls="categoryFilter"
                          >
                            Categories
                            <span class="panel-icon"></span>
                          </a>
                        </h4>
                      </div>
                      <!-- End .panel-heading -->
                      <div
                        id="categoryFilter"
                        class="panel-collapse collapse in"
                        role="tabpanel"
                        aria-labelledby="categoryFilter-header"
                      >
                        <div class="panel-body">
                          <div class="filter-category-container">
                            <div class="row">
                              <div v-for="category in categories">
                                <input
                                  type="checkbox"
                                  :id="category.id"
                                  :value="category.id"
                                  v-model="categoryIds"
                                />
                                <label for="category">{{
                                  category.name
                                }}</label>
                              </div>
                            </div>
                            <!-- End .row -->
                          </div>
                          <!-- End .filter-color-container -->
                        </div>
                        <!-- End .panel-body -->
                      </div>
                      <!-- End .panel-collapse -->
                    </div>
                    <!-- End .panel -->
                  </div>
                  <!-- End .panel-group -->
                </div>
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
      categories: [],
      categoryIds: [],
      titleFilter: "",
      sortAttribute: "",
    };
  },
  computed: {
    filteredByCateogry() {
      return this.getByCategory(this.ads, this.categoryIds);
    },
  },
  created: function() {
    axios.get("api/ads").then((response) => {
      console.log("All Ads:", response.data);
      this.ads = response.data;
    });
    axios.get("/api/categories").then((response) => {
      this.categories = response.data;
    });
  },
  methods: {
    getByCategory: function(events, categoryIds) {
      if (categoryIds.length === 0) {
        return ads;
      }
      categoryIds.forEach((category) => {
        ads = this.filterBy(ads, category.name);
      });
      return ads;
    },
  },
};
</script>
