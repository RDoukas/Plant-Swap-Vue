<template>
  <div class="ads-index">
    <div class="main">
      <div
        class="page-header largest parallax custom text-center"
        style="background-image:url(assets/images/monstera.jpeg)"
        data-0="background-position:50% 50%;"
        data-top-bottom="background-position:50% 100%"
      >
        <div class="container-fluid">
          <h1>Ads</h1>
          <!-- <ol class="breadcrumb">
            <li><a href="index.html">Home</a></li>
            <li><a href="#">Pages</a></li>
            <li class="active">Category</li>
          </ol> -->
        </div>
        <!-- End .container-fluid -->
      </div>
      <!-- End .page-header -->

      <div class="container-fluid">
        <div class="row flex-shop">
          <div class="col-md-9 col-md-push-3">
            <div class="category-filter-row">
              <div class="right">
                <a href="/ads/new" class="btn btn-custom">Create Ad</a>
              </div>
              <!-- end .right -->
              <div class="left">
                <div class="filter-container filter-sort">
                  <label>Sort by:</label>
                  <select class="form-control input-sm">
                    <option sortAttribute="`ad.created_at`">Date Posted</option>
                    <option sortAttribute="`ad.title`"> Title</option>
                    <option sortAttribute="`ad.username`">Plant Parent</option>
                  </select>
                </div>
                <!-- End .filter-sort -->
              </div>
              <!-- End .left -->
            </div>
            <!-- End .category-filter-row -->

            <div class="product product-list" v-for="ad in ads">
              <div class="row">
                <div class="col-md-4 col-sm-5">
                  <div class="product-top">
                    <figure>
                      <img
                        v-bind:src="ad.image_url"
                        alt="Product image"
                        class="product-image"
                      />
                      <!-- </a> -->
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
                    <p>Plant Parent: {{ ad.username }}</p>
                    <p>Date Posted: {{ ad.created_at }}</p>
                    <p>
                      {{ ad.description }}
                    </p>
                  </div>
                  <!-- End .product-content -->
                </div>
                <!-- End .col-md-8 -->
              </div>
              <!-- end .Row -->
            </div>
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
                      id="brandFilter-header"
                    >
                      <h4 class="panel-title">
                        <a aria-expanded="true" aria-controls="brandFilter">
                          Categories
                        </a>
                      </h4>
                    </div>
                    <!-- End .panel-heading -->
                    <div
                      id="brandFilter"
                      class="panel-collapse collapse in"
                      role="tabpanel"
                      aria-labelledby="brandFilter-header"
                    >
                      <div class="panel-body">
                        <ul class="filter-brand-list">
                          <div class="checkbox" v-for="category in categories">
                            <label class="custom-checkbox-wrapper">
                              <span class="custom-checkbox-container">
                                <input
                                  type="checkbox"
                                  name="category"
                                  id="toggle"
                                  :value="category"
                                  v-model="selectedCategories"
                                />
                              </span>
                              <span for="category">{{ category.name }}</span>
                            </label>
                          </div>
                        </ul>
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
      selectedCategories: [],
      titleFilter: "",
      sortAttribute: "",
    };
  },
  computed: {
    filteredByCateogry() {
      return this.getByCategory(this.ads, this.selectedCategories);
    },
  },
  created: function() {
    axios.get("/api/ads").then((response) => {
      console.log("All Ads:", response.data);
      this.ads = response.data;
    });
    axios.get("/api/categories").then((response) => {
      this.categories = response.data;
    });
  },
  methods: {
    getByCategory: function(ads, selectedCategories) {
      if (selectedCategories.length === 0) {
        return ads;
      }
      selectedCategories.forEach((category) => {
        ads = this.filterBy(ads, category.name);
      });
      return ads;
    },
    isLoggedIn: function() {
      return localStorage.getItem("jwt");
    },
  },
};
</script>
