<template>
  <div class="ads-show">
    <h2>{{ ad.title }}</h2>
    <h4>Posted on: {{ ad.created_at}}</h4>
    <h5>User: {{ad.user_id}}</h5>
    <p>{{ad.description}}</p>
    <img :src="ad.image_url" alt="" width="300"/>

    <br />

  





    <div v-if="ad.owener">
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editAdModal">Edit</button>
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#destroyAdModal">Delete</button>
    </div>

    <!-- Edit Ad Modal -->
    <div class="modal fade" id="editAdModal" tabindex="-1" role="dialog" aria-labelledby="editAdModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editAdModalLabel">Edit Ad</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form v-on:submit.prevent="editAd()">
              <ul>
                <li class="text-danger" v-for="error in errors">{{ error }}</li>
              </ul>
              <div class="form-group">
                <label>Title:</label>
                <input type="text" class="form-control" v-model="ad.title">
              </div>
              <div class="form-group">
                <label>Description:</label>
                <input type="text" class="form-control" v-model="ad.description">
              </div>
              <div class="form-group">
                <label>Image Url:</label>
                <input type="text" class="form-control" v-model="ad.image_url">
              </div>
              <input type="submit" class="btn btn-primary" value="Update">
            </form>
          </div>
        </div>
      </div>
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
      errors: [],
      ad: {},
    };
  },
  created: function () {
    axios.get(`/api/ads/${this.$route.params.id}`).then((response) => {
      this.ad = response.data;
      console.log(this.ad);
    });
  },

  methods: {
    destroyAd: function () {
      if (confirm("Are you sure you want to delete this ad?")) {
        axios.delete(`/api/ads/${this.ad.id}`).then((response) => {
          console.log("Your ad has been successfully deleted", response.data);
          this.$router.push("/ads");
        });
      }
    },
    editAd: function () {
      var params = {
        title: this.ad.title,
        description: this.ad.description,
        image_url: this.ad.image_url,
      };
      axios
        .patch(`/api/ads/${this.ad.id}`, params)
        .then((response) => {
          $("#editAdModal").modal("hide");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>