const app = Vue.createApp({
    data(){
        return {
            count: 0,
            name:""
        }
},

    methods:{
        increment(amount){
            this.count = this.count + amount;
            // console.log(evt);
            
        },
        decrement(amount){
           
            this.count = this.count - amount;
        },
        test(ev){
            console.log(ev);
        },
        keyupInputForm(e){
            this.name = e.target.value;
        },
        formSubmit(e){
            // e.preventDefault();
            console.log(e);
        },
        cardClickedButton(){
            console.log("Card items");
        },
        viewClickedButton(e){
            // e.stopPropagation();
            console.log("View items");
        },
    }
})

app.mount('#app')