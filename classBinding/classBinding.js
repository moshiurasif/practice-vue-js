const app = Vue.createApp({
    data(){
        return {
           activeClass: "red"
        }
    },
    methods: {
      setColor(color){
        this.activeClass = color;
      }
    }
})

app.mount('#app')