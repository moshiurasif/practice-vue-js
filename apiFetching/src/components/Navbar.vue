<template>
  <router-link to="/">Home</router-link>
  <router-link :to="{ name: 'About' }">About</router-link>
  <router-link to="/contact">Contact</router-link>
</template>

<script>
export default {};
</script>

<style scoped></style>
