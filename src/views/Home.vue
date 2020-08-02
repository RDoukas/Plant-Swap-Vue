<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p>{{ intro }}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      message: "Welcome to Chicago Plant Swapp!!",
      intro:
        "Our goal is to connect plant lovers in the area to swap different plants! As we all know, our babies are always out growing their space!! We love sharing our babies and aim to share them with other plant lovers! All swap items are 100% free!",
    };
  },
  created: function() {},
  methods: {},
};
</script>
