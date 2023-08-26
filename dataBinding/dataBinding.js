const app = Vue.createApp({
    data(){
        return {
            num: "",
            result:""
        }
    },
    methods: {
        // handleInput(e){
        //    this.num =  e.target.value
        // },
        getDouble(){
            this.result = this.num * 2;
        },
        getSquare(){
            this.result = this.num * this.num;
        },
        reset(){
            this.result = "";
            this.num = ""
        },
        addTen(){
            // this.result = parseInt(this.num) + 10;
            this.result = this.num + 10;
        }
    }
})

app.mount('#app')