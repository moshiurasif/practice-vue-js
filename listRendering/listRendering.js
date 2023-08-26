const app = Vue.createApp({
    data(){
        return {
          skills:["html", "css", "js"],
          newSkill:"",
          products:[
            {name:'Shirt', price: 30},
            {name:'Pants', price: 40},
            {name:'Cap', price: 200},
        ],
        newProduct: {name: "", price: 0}
        }
    },
    methods: {
      addSkill(){
        this.skills.push(this.newSkill);
        this.newSkill = ""
      },
      removeSkill(i){
        this.skills.splice(i, 1)
      },
      addProduct(){
        this.products.push(this.newProduct);
        this.newProduct = {}
      },
      removeProduct(i){
        this.products.splice(i, 1);
      }
    }
})

app.mount('#app')