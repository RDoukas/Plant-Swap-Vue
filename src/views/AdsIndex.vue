<template>
  <div class="ads-index">

    <!-- Shows actual ads list -->
    <div v-for="ad in ads">
        <router-link v-bind:to="`/ads/${ad.id}`">{{ ad.title }}</router-link>
        <p>{{ ad.created_at}}</p>
        <p>{{ad.user_id}}</p>
        <img v-bind:src="ad.image_url" alt="" height="300"/>
        <p>{{ad.description}}</p>
      </div>
    </div>

    <!-- <div class="form-group">
      <input class="form-control" v-model="titleFilter" list="titles" type="text" placeholder="Search">
    </div>
    <datalist id="titles">
      <option v-for="ad in ads">{{ ad.title }}</option>
    </datalist>

    <div>
      <button v-on:click="sortAttribute = 'title'">Sort by title</button>
      <button v-on:click="sortAttribute = 'category'">Sort by Category</button>
      <button v-on:click="sortAttribute = 'current_user'">Your Ads</button>
    </div> -->

</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      ads: [],
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