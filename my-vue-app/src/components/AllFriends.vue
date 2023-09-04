<template>
    <div>
<h1>All Friends</h1>
<div v-for="(friend, index) in friends" :key="index">
    <p @click="unfriend(friend.name)">{{ friend.name }}</p>
</div>

    </div>
</template>

<script>
    export default {
        props:['friends'],
        data(){
            return{

            }
        },
        methods:{
            unfriend(name){
                this.$emit('delete', {name})
            }
        }
    }
</script>

<style scoped>

</style>