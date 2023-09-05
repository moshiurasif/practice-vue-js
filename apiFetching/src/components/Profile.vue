<template>
  <h1>Profile {{ userId }}</h1>
</template>

<script>
export default {
  data() {
    return {
      userId: this.$route.params.id,
    };
  },
  methods: {
    routeLoad() {
      this.userId = this.$route.params.id;
    },
  },
  watch: {
    $route: "routeLoad",
  },
};
</script>

<style scoped></style>
