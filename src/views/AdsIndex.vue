<template>
  <div class="ads-index">
    <div class="wrapper">
      <div class="main">
        <div class="container-fluid">
          <div class="row flex-shop">
            <div class="col-md-9 col-md-push-3">
              <div class="category-filter-row">
                <div class="right">
                  <div class="filter-product-view">
                    <a
                      href="category.html"
                      class="btn btn-custom"
                      title="Category Grid"
                      ><i class="fa fa-th"></i
                    ></a>
                    <a
                      href="category-list.html"
                      class="btn btn-gray"
                      title="Category List"
                      ><i class="fa fa-th-list"></i
                    ></a>
                  </div>
                </div>
                <!-- end .right -->
                <div class="left">
                  <div class="filter-container filter-sort">
                    <label>Sort by:</label>
                    <select class="form-control input-sm">
                      <option value="Date">Date</option>
                      <option value="Color">Color</option>
                      <option value="Size">Size</option>
                      <option value="Price">Price</option>
                    </select>
                  </div>
                  <!-- End .filter-sort -->
                  <div class="filter-container filter-show">
                    <label>Show:</label>
                    <select class="form-control input-sm">
                      <option value="10">10</option>
                      <option value="15">15</option>
                      <option value="20">20</option>
                      <option value="25">25</option>
                    </select>
                  </div>
                  <!-- End .filter-show -->
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
                          <a href="product.html" title="ad.title">
                            <img
                              v-bind:src="ad.image_url"
                              alt="Product image"
                              class="product-image"
                            />
                          </a>
                        </figure>
                        <!-- <div class="product-action-container">
                          <a
                            href="#"
                            class="btn product-add-btn"
                            data-toggle="tooltip"
                            title="Add to Cart"
                            ><i class="fa fa-shopping-cart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-wishlist-btn"
                            data-toggle="tooltip"
                            title="Add to Wishlist"
                            ><i class="fa fa-heart"></i
                          ></a>
                          <a
                            href="#"
                            class="btn product-compare-btn"
                            data-toggle="tooltip"
                            title="Compare"
                            ><i class="fa fa-retweet"></i
                          ></a>
                        </div> -->
                        <!-- End .product-action-container -->
                      </div>
                      <!-- End .product -->
                    </div>
                    <!-- End .col-md-4 -->
                    <div class="col-md-8 col-sm-7">
                      <div class="product-content">
                        <h3 class="product-title">
                          <a href="product.html">{{ ad.title }}</a>
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

              <div class="pagination-wrapper">
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
              </div>
              <!-- End .pagination-wrapper -->
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
                                ><i class="fa fa-angle-right"></i>Yikes &amp;
                                Sports <span>(11)</span></a
                              >
                            </li>
                            <li>
                              <a href="#"
                                ><i class="fa fa-angle-right"></i>Smittzy &amp;
                                Jane <span>(7)</span></a
                              >
                            </li>
                            <li>
                              <a href="#"
                                ><i class="fa fa-angle-right"></i>Susan's
                                Secrets <span>(10)</span></a
                              >
                            </li>
                            <li>
                              <a href="#"
                                ><i class="fa fa-angle-right"></i>Puma &amp;
                                Cougar <span>(14)</span></a
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
                    <div class="panel">
                      <div
                        class="panel-heading"
                        role="tab"
                        id="priceFilter-header"
                      >
                        <h4 class="panel-title">
                          <a
                            data-toggle="collapse"
                            href="#priceFilter"
                            aria-expanded="true"
                            aria-controls="priceFilter"
                          >
                            Price Filter
                            <span class="panel-icon"></span>
                          </a>
                        </h4>
                      </div>
                      <!-- End .panel-heading -->
                      <div
                        id="priceFilter"
                        class="panel-collapse collapse in"
                        role="tabpanel"
                        aria-labelledby="priceFilter-header"
                      >
                        <div class="panel-body">
                          <div class="filter-price">
                            <div id="price-slider"></div>
                            <!-- End #price-slider -->
                            <div id="filter-range-details" class="row">
                              <div class="col-xs-6">
                                <div class="filter-price-label">from</div>
                                <input
                                  type="text"
                                  id="price-range-low"
                                  class="form-control input-sm"
                                  placeholder="Min"
                                />
                              </div>
                              <div class="col-xs-6">
                                <div class="filter-price-label">to</div>
                                <input
                                  type="text"
                                  id="price-range-high"
                                  class="form-control input-sm"
                                  placeholder="Max"
                                />
                              </div>
                            </div>
                            <!-- End #filter-range-details -->
                            <div class="filter-price-action">
                              <a href="#" class="btn btn-custom btn-sm"
                                >Filter</a
                              >
                              <a href="#" class="btn btn-black btn-sm">Reset</a>
                            </div>
                            <!-- End #filter-price-action -->
                          </div>
                          <!-- End .filter-price -->
                        </div>
                        <!-- End .panel-body -->
                      </div>
                      <!-- End .panel-collapse -->
                    </div>
                    <!-- End .panel -->
                    <div class="panel">
                      <div
                        class="panel-heading"
                        role="tab"
                        id="colorFilter-header"
                      >
                        <h4 class="panel-title">
                          <a
                            data-toggle="collapse"
                            href="#colorFilter"
                            aria-expanded="true"
                            aria-controls="colorFilter"
                          >
                            Color Filter
                            <span class="panel-icon"></span>
                          </a>
                        </h4>
                      </div>
                      <!-- End .panel-heading -->
                      <div
                        id="colorFilter"
                        class="panel-collapse collapse in"
                        role="tabpanel"
                        aria-labelledby="colorFilter-header"
                      >
                        <div class="panel-body">
                          <div class="filter-color-container">
                            <div class="row">
                              <a
                                href="#"
                                style="background-color:#b24b24"
                                class="filter-color-box"
                              ></a>
                              <a
                                href="#"
                                style="background-color:#f41d1d"
                                class="filter-color-box"
                              ></a>
                              <a
                                href="#"
                                style="background-color:#d10707"
                                class="filter-color-box"
                              ></a>
                              <a
                                href="#"
                                style="background-color:#0172b8"
                                class="filter-color-box"
                              ></a>
                              <a
                                href="#"
                                style="background-color:#2599e2"
                                class="filter-color-box"
                              ></a>
                              <a
                                href="#"
                                style="background-color:#49ba17"
                                class="filter-color-box"
                              ></a>
                              <a
                                href="#"
                                style="background-color:#06b0aa"
                                class="filter-color-box"
                              ></a>
                              <a
                                href="#"
                                style="background-color:#7aed47"
                                class="filter-color-box"
                              ></a>
                              <a
                                href="#"
                                style="background-color:#f4b907"
                                class="filter-color-box"
                              ></a>
                              <a
                                href="#"
                                style="background-color:#f08903"
                                class="filter-color-box"
                              ></a>
                              <a
                                href="#"
                                style="background-color:#f003d7"
                                class="filter-color-box"
                              ></a>
                              <a
                                href="#"
                                style="background-color:#b0069e"
                                class="filter-color-box"
                              ></a>
                              <a
                                href="#"
                                style="background-color:#08fd19"
                                class="filter-color-box"
                              ></a>
                              <a
                                href="#"
                                style="background-color:#4099ec"
                                class="filter-color-box"
                              ></a>
                              <a
                                href="#"
                                style="background-color:#00acc1"
                                class="filter-color-box"
                              ></a>
                              <a
                                href="#"
                                style="background-color:#ec407a"
                                class="filter-color-box"
                              ></a>
                              <a
                                href="#"
                                style="background-color:#880e4f"
                                class="filter-color-box"
                              ></a>
                              <a
                                href="#"
                                style="background-color:#000000"
                                class="filter-color-box"
                              ></a>
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
                    <div class="panel">
                      <div
                        class="panel-heading"
                        role="tab"
                        id="sizeFilter-header"
                      >
                        <h4 class="panel-title">
                          <a
                            data-toggle="collapse"
                            href="#sizeFilter"
                            aria-expanded="true"
                            aria-controls="sizeFilter"
                          >
                            Size Filter
                            <span class="panel-icon"></span>
                          </a>
                        </h4>
                      </div>
                      <!-- End .panel-heading -->
                      <div
                        id="sizeFilter"
                        class="panel-collapse collapse in"
                        role="tabpanel"
                        aria-labelledby="sizeFilter-header"
                      >
                        <div class="panel-body">
                          <div class="filter-color-container">
                            <div class="row">
                              <a href="#" class="filter-size-box active">6</a>
                              <a href="#" class="filter-size-box">4</a>
                              <a href="#" class="filter-size-box">6</a>
                              <a href="#" class="filter-size-box">8</a>
                              <a href="#" class="filter-size-box">10</a>
                              <a href="#" class="filter-size-box">12</a>
                              <a href="#" class="filter-size-box">xs</a>
                              <a href="#" class="filter-size-box">s</a>
                              <a href="#" class="filter-size-box">m</a>
                              <a href="#" class="filter-size-box">ml</a>
                              <a href="#" class="filter-size-box">l</a>
                              <a href="#" class="filter-size-box">xl</a>
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
    <!-- <div class="form-group">
      <input
        class="form-control"
        v-model="titleFilter"
        list="titles"
        type="text"
        placeholder="Search"
      />
    </div>
    <datalist id="titles">
      <option v-for="ad in ads">{{ ad.title }}</option>
    </datalist>

    <div>
      <button v-on:click="sortAttribute = 'title'">Sort by title</button>
      <button v-on:click="sortAttribute = 'user_id'">Show my ads</button>
    </div>
    <router-link to="/ads/new" tag="button">New Ad</router-link> -->

    <!-- Shows actual ads list -->

    <!-- <div
      v-for="ad in orderBy(filterBy(ads, titleFilter), sortAttribute)"
      v-bind:key="ad.id"
    >
      <router-link v-bind:to="`/ads/${ad.id}`">{{ ad.title }}</router-link>
      <p>{{ ad.created_at }}</p>
      <p>{{ ad.username }}</p>
      <img v-bind:src="ad.image_url" alt="" height="300" />
      <p>{{ ad.description }}</p>
    </div> -->
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
