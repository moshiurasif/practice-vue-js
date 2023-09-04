<template>
  <div>
    <h1>Posts</h1>
    <div v-for="post in posts" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ $filters.snippet(post.body) }}</p>
      <hr />
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      posts: [],
    };
  },

  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        this.posts = res.data;
      })
      .catch((err) => console.log(err));
  },
};
</script>
<style scoped></style>
