const app = Vue.createApp({
    data(){
        return {
            msg: 'Hello, welcome to vue3 js',
            githubInfo: {
                name: "Moshiur Rahman",
                githubLink: "https://github.com/moshiurasif"
            },
            htmlCode: '<a href="githubInfo.githubLink">Github</a>',
            count: 0
        }
    },

    methods:{
        increment(){
            // this.count = this.count + 1;
            this.count++;
            
        },
        decrement(){
            // this.count = this.count - 1;
            this.count--;

        }
    }
})

app.mount('#app')