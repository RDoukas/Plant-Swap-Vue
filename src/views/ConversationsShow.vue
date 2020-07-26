<template>
  <div class="conversations-show">
    <div v-for="conversation in conversations"
    <h2> {{ conversation.sender_id }}</h2>
    <h4> {{ conversation.recipient_id}}</h4>
    <h5>Ad: {{conversation.ad_title}}</h5>
    <p> {{conversation.messages}}</p>
  </div>
</template>


<script>
export default {
  data: function () {
    return {
      errors: [],
      conversations: {},
    };
  },
  created: function () {
    axios
      .get(`/api/conversations/${this.$route.params.id}`)
      .then((response) => {
        this.conversation = response.data;
        console.log(this.conversation);
      });
  },
  methods: {},
};
</script>