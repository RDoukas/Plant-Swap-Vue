<template>
    <div class="ads-index">
        <div class="shop-area pt-95 pb-100">
            <div class="container">
                <div class="row flex-row-reverse">
                    <div class="col-lg-9">
                        <div class="shop-top-bar">
                    <!-- Sort at top of ads index page -->
                        <div class="select-shoing-wrap">
                            <div class="shop-select">
                                <select>
                                    <option value="`ad.created_at`">Sort by newest</option>
                                    <option value="`ad.title`">Sort by Title</option>
                                    <!-- <option value=""> Z to A</option> -->
                                    <option value="`ad.username`">Sort by Username</option>
                                </select>
                            </div>
                        </div>
                        
                    <!-- Ad list view options -->
                            <div class="shop-tab nav">
                                <!-- <a href="#shop-1" data-toggle="tab">
                                    <i class="fa fa-table"></i>
                                </a> -->
                                <a class="active" href="#shop-2" data-toggle="tab">
                                    <i class="fa fa-list-ul"></i>
                                </a>
                            </div>    
                        </div>
                        <div class="shop-bottom-area mt-35">
                            <div class="tab-content jump">
                                <!-- ad images -->
                                <div id="shop-1" class="tab-pane">
                                    <div class="row">
                                        <div class="col-xl-4 col-md-6 col-lg-6 col-sm-6" v-for="ad in ads">
                                            <div class="product-wrap mb-25 scroll-zoom">
                                                <div class="product-img">
                                                    <a href="#">
                                                        <img class="default-img" src="assets/img/product/pro-1.jpg" alt="">
                                                    </a>
                                                </div>
                                                <div class="product-content text-center">
                                                    <h3><a href="`/ads/${ad.id}`"></a>{{ad.title}}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    <!-- Info for ads -->
                                <div id="shop-2" class="tab-pane active">
                                    <div class="shop-list-wrap mb-30 scroll-zoom">
                                        <div class="row">
                                            <div class="col-xl-4 col-lg-5 col-md-5 col-sm-6">
                                                <div class="product-wrap">
                                                    <div class="product-img">
                                                        <a href="/ads/${ad.id}">
                                                            <img class="default-img" src="ad.image_url" alt="">   
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-8 col-lg-7 col-md-7 col-sm-6" v-for="ad in ads">
                                                
                                                <div class="shop-list-content">
                                                    <h3><a href="`/ads/${ad.id}`">{{ad.title}}</a></h3>
                                                    
                                                    <p>{{ad.description}}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                            <div class="pro-pagination-style text-center mt-30">
                                <ul>
                                    <li><a class="prev" href="#"><i class="fa fa-angle-double-left"></i></a></li>
                                    <li><a class="active" href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a class="next" href="#"><i class="fa fa-angle-double-right"></i></a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="sidebar-style mr-30">
                                <div class="sidebar-widget">
                                    <div class="shop-list-btn btn-hover">
                                        <a title="New Ad" href="/ads/new">New Ad</a>
                                    </div>
                                    <h4 class="pro-sidebar-title">Search </h4>
                                    <div class="pro-sidebar-search mb-50 mt-25">
                                        <form class="pro-sidebar-search-form" action="#">
                                            <input type="text" placeholder="Search here...">
                                            <button>
                                                <i class="pe-7s-search"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="sidebar-widget mt-50">
                                <h4 class="pro-sidebar-title">Categories </h4>
                                <div class="sidebar-widget-list mt-20">
                                    <ul>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <input type="checkbox" value=""> <a href="#">Plant <span>4</span> </a>
                                                <span class="checkmark"></span> 
                                            </div>
                                        </li>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <input type="checkbox" value=""> <a href="#">Tropical <span>4</span> </a>
                                                <span class="checkmark"></span> 
                                            </div>
                                        </li>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <input type="checkbox" value=""> <a href="#">Easy Care <span>4</span> </a>
                                                <span class="checkmark"></span> 
                                            </div>
                                        </li>
                                        <li>
                                            <div class="sidebar-widget-list-left">
                                                <input type="checkbox" value=""> <a href="#">Pet Friendly <span>4</span> </a>
                                                <span class="checkmark"></span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
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
    

    <!-- Shows actual ads list -->

    <!-- <div
      v-for="ad in orderBy(filterBy(ads, titleFilter), sortAttribute)"
      v-bind:key="ad.id"
    > -->
    <!-- <router-link v-bind:to="`/ads/${ad.id}`">{{ ad.title }}</router-link>
        <p>Categories:</p>
        <div v-for="category in ad.categories">
            <p>{{ category.name }}</p>
        </div>
        
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
  data: function () {
    return {
      ads: [],
      titleFilter: "",
      sortAttribute: "title",
    };
  },
  created: function () {
    axios.get("api/ads").then((response) => {
      console.log("All Ads:", response.data);
      this.ads = response.data;
    });
  },
  methods: {},
};
</script>
  </div></template
>