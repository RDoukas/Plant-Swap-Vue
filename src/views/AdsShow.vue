<template>
  <div class="ads-show">
    <h2>{{ ad.title }}</h2>
      <h4>Posted on: {{ ad.created_at}}</h4>
      <h5>User: {{ad.user_id}}</h5>
      <p>{{ad.description}}</p>
      <img :src="ad.image_url" alt="" width="300"/>
      </div>
    </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      errors: [],
      ad: {}
    };
  },
  created: function() {
    axios.get(`/api/ads/${this.$route.params.id}`).then(response => {
      console.log(response.data);
      this.ad = response.data;
    });
  },

  methods: {}
};
</script>