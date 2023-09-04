<template>
  <all-friends @delete="removeFriend" :friends="friends"></all-friends>
  <online-friends :friends="friends"></online-friends>
</template>

<script>
import AllFriends from './components/AllFriends.vue'
import OnlineFriends from './components/OnlineFriends.vue'
export default {
  components: { AllFriends, OnlineFriends },
data(){
  return{
    friends:[
      {name: "A", online: true},
      {name: "B", online: true},
      {name: "C", online: false},
      {name: "D", online: true},
      {name: "E", online: false},
    ]
  }
},
methods: {
  removeFriend(payload){
    console.log(payload);
    this.friends = this.friends.filter(friend => friend.name !== payload.name)
  }
}

}
</script>

<style>

</style>