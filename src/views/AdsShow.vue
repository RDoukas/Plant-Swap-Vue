<template>
  <div class="ads-show">
    <h2>{{ ad.title }}</h2>
      <p>{{ ad.created_at}}</p>
      <p>{{ad.user_id}}</p>
      <img :src="ad.image_url" alt="" />
      <p>{{ad.description}}</p>
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