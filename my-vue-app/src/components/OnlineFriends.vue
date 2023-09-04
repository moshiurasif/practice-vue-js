<template>
    <div>
<h1>Online Friends</h1>
<div v-for="(friend, index) in friends" :key="index">
    <p v-if="friend.online">{{ friend.name }}</p>
</div>


    </div>
</template>

<script>
    export default {
        props:['friends']
    }
</script>

<style scoped>

</style>