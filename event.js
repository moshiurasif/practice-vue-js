const app = Vue.createApp({
    data(){
        return {
            count: 0
        }
},

    methods:{
        increment(evt, amount){
            this.count = this.count + amount;
            console.log(evt);
            
        },
        decrement(amount){
           
            this.count = this.count - amount;
        },
        test(ev){
            console.log(ev);
        }
    }
})

app.mount('#app')