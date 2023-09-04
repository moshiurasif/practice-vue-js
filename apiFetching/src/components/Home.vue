<template>
  <div>
    <h1>Posts</h1>
    <input type="text" v-model="searchTerm" placeholder="search" />
    <div v-for="post in filterSearch" :key="post.id">
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
      searchTerm: "",
    };
  },
  computed: {
    filterSearch() {
      return this.posts.filter((post) => {
        return post.title.match(this.searchTerm);
      });
    },
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
