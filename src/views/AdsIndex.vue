<template>
  <div class="ads-index">
    <router-link to="/ads/new" tag="button">New Ad</router-link>

    <!-- Shows actual ads list -->
    <div v-for="ad in ads">
        <router-link v-bind:to="`/ads/${ad.id}`">{{ ad.title }}</router-link>
        <p>{{ ad.created_at}}</p>
        <p>{{ad.username}}</p>
        <img v-bind:src="ad.image_url" alt="" height="300"/>
        <p>{{ad.description}}</p>
      </div>

    </div>


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