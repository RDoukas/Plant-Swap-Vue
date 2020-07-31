<template>
  <div class="ads-index">
    <div class="form-group">
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
    <router-link to="/ads/new" tag="button">New Ad</router-link>

    <!-- Shows actual ads list -->
    <!-- <div v-for="ad in ads"> -->
    <div
      v-for="ad in orderBy(filterBy(ads, titleFilter), sortAttribute)"
      v-bind:key="ad.id"
    >
      <router-link v-bind:to="`/ads/${ad.id}`">{{ ad.title }}</router-link>
      <p>{{ ad.created_at }}</p>
      <p>{{ ad.username }}</p>
      <img v-bind:src="ad.image_url" alt="" height="300" />
      <p>{{ ad.description }}</p>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      ads: [],
      titleFilter: "",
      sortAttribute: "title",
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
