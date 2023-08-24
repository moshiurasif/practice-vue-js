const app = Vue.createApp({
    data(){
        return {
            msg: 'Hello, welcome to vue3 js',
            githubInfo: {
                name: "Moshiur Rahman",
                githubLink: "https://github.com/moshiurasif"
            },
            htmlCode: '<a href="githubInfo.githubLink">Github</a>'
        }
    }
})

app.mount('#app')