<template>
  <div class="ads-index">
    <div class="container-fluid">
      <div class="row flex-shop">
        <div class="col-md-9 col-md-push-3">
          <div class="category-filter-row">
            <div class="right"></div>
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
                    </a>
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
                  <div class="panel-heading" role="tab" id="brandFilter-header">
                    <h4 class="panel-title">
                      <a
                        data-toggle="collapse"
                        href="#brandFilter"
                        aria-expanded="true"
                        aria-controls="brandFilter"
                      >
                        Brand Filter
                        <span class="panel-icon"></span>
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
                        <li>
                          <a href="#"
                            ><i class="fa fa-angle-right"></i>Yikes &amp; Sports
                            <span>(11)</span></a
                          >
                        </li>
                        <li>
                          <a href="#"
                            ><i class="fa fa-angle-right"></i>Smittzy &amp; Jane
                            <span>(7)</span></a
                          >
                        </li>
                        <li>
                          <a href="#"
                            ><i class="fa fa-angle-right"></i>Susan's Secrets
                            <span>(10)</span></a
                          >
                        </li>
                        <li>
                          <a href="#"
                            ><i class="fa fa-angle-right"></i>Puma &amp; Cougar
                            <span>(14)</span></a
                          >
                        </li>
                        <li>
                          <a href="#"
                            ><i class="fa fa-angle-right"></i>Jane Shirts
                            <span>(9)</span></a
                          >
                        </li>
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

    <!-- old code  -->
    <div class="shop-area pt-95 pb-100">
      <div class="container">
        <div class="row flex-row-reverse">
          <div class="col-lg-9">
            <div class="shop-top-bar">
              <div class="select-shoing-wrap">
                <div class="shop-select">
                  <select>
                    <option sortAttribute="`created_at`">Sort by newest</option>
                    <option sortAttribute="`title">Sort by Title</option>
                    <option sortAttribute="`username`">Sort by Username</option>
                  </select>
                </div>
              </div>

              <div class="shop-tab nav">
                <a class="active" href="#shop-2" data-toggle="tab"> </a>
              </div>
            </div>
            <div class="shop-bottom-area mt-35">
              <div class="tab-content jump">
                <!-- ad images -->
                <div id="shop-1" class="tab-pane">
                  <div class="row">
                    <div
                      class="col-xl-4 col-md-6 col-lg-6 col-sm-6"
                      v-for="ad in ads"
                    >
                      <div class="product-wrap mb-25 scroll-zoom">
                        <div class="product-img">
                          <a href="/ads/${ad.id}">
                            <img
                              class="default-img"
                              src="ad.image_url"
                              alt=""
                            />
                          </a>
                        </div>
                        <div class="product-content text-center">
                          <h3><a href="`/ads/${ad.id}`"></a>{{ ad.title }}</h3>
                        </div>
                      </div>
                      <!-- End .container-fluid -->
                    </div>
                  </div>
                  <!-- Info for ads -->
                  <div id="shop-2" class="tab-pane active">
                    <div class="shop-list-wrap mb-30 scroll-zoom">
                      <div class="row">
                        <div
                          class="col-xl-8 col-lg-7 col-md-7 col-sm-6"
                          v-for="ad in filterBy(ads, titleFilter)"
                        >
                          <div class="shop-list-content">
                            <div class="product-img">
                              <img
                                class="default-img"
                                v-bind:src="ad.image_url"
                                alt=""
                                height="200px"
                              />
                            </div>
                            <h3>
                              <router-link v-bind:to="`/ads/${ad.id}`">{{
                                ad.title
                              }}</router-link>
                            </h3>
                            <h4>Posted on: {{ ad.created_at }}</h4>
                            <h5>User: {{ ad.username }}</h5>
                            <p>{{ ad.description }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="sidebar-style mr-30">
                <div class="sidebar-widget">
                  <div class="pro-details-cart btn-hover"></div>

                  <div class="pro-sidebar-search mb-50 mt-25">
                    <form class="pro-sidebar-search-form">
                      <input
                        class="form-control"
                        v-model="titleFilter"
                        list="titles"
                        type="text"
                        placeholder="Search"
                      />
                    </form>
                    <datalist id="titles">
                      <option v-for="ad in ads">{{ ad.title }}</option>
                    </datalist>
                  </div>
                </div>
              </div>
              <div class="sidebar-widget mt-50">
                <h4 class="pro-sidebar-title">Categories</h4>
                <div class="sidebar-widget-list mt-20">
                  <div v-for="category in categories">
                    <input
                      type="checkbox"
                      id="toggle"
                      :value="category"
                      v-model="selectedCategories"
                    />
                    <label for="category">{{ category.name }}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
