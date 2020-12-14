<template>
  <div class="ads-index">
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
