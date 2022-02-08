const app = Vue.createApp({
  data() {
    return {
      firstName: "Kithinga",
      lastName: "Mutuku",
      email: "kithinga@love.com",
      gender: "female",
      picture: "images/images.jpeg",
    };
  },
  methods:{
    getUser(){
      this.firstName = "Buelik",
      this.lastName = "Yong",
      this.email = "kithinga@love.com",
      this.gender = "female",
      this.picture = "images/images.jpeg",
      console.log("Welcome to vue development Mr. " + " "+ this.firstName);
    }
  }
});

app.mount('#app')