<template>
  <div class="conversations-index">

    <!-- Shows actual conversations list -->
    <div v-for="conversation in conversations">
        <!-- <router-link v-bind:to="`/conversations/${conversation.id}`">{{ conversation.ad_id }}</router-link> -->
        <p>{{ conversation.ad_id }}</p>
        <!-- <p>{{conversation.message.body}}</p> -->
        <p>{{conversation.body}}</p>
        
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
      conversations: [],
    };
  },
  created: function () {
    axios.get("api/conversations").then((response) => {
      console.log("All Conversations:", response.data);
      this.conversations = response.data;
    });
  },
  methods: {},
};
</script>