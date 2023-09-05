<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link :to="{ name: 'About' }">About</router-link>
    <router-link to="/contact">Contact</router-link>

    <div v-for="(id, index) in userIds" :key="index">
      <router-link :to="{ name: 'Profile', params: { id: id } }"
        >Profile {{ id }}</router-link
      >
    </div>
    <button @click="about">About</button>
    <button @click="contact">Contact</button>
    <button @click="back">Back</button>
    <button @click="forward">Forward</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userIds: [1, 2, 3, 4, 5, 6, 9, 11, 23, 45, 25, 32],
    };
  },
  methods: {
    about() {
      this.$router.push({ name: "About" });
    },
    contact() {
      this.$router.push({ name: "Contact" });
    },
    back() {
      this.$router.go(-1);
    },
    forward() {
      this.$router.go(1);
    },
  },
};
</script>

<style scoped>
.router-link-active {
  background-color: purple;
  color: white;
}
</style>
