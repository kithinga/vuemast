const app = Vue.createApp({
  data() {
    return {
      firstName: "Kithinga",
      lastName: "Mutuku",
      email: "kithinga@love.com",
      gender: "male",
      picture: "images/images.jpeg",
    };
  },
  methods:{
    async getUser(){
      const res = await fetch('https://randomuser.me/api')
      const {results} = await res.json()
      console.log(results)

      this.firstName = "Buelik",
      this.lastName = "Yong",
      this.email = "kithinga@love.com",
      this.gender = "male",
      this.picture = "images/images.jpeg",
      console.log("Welcome to vue development Mr. " + " "+ this.firstName);
    }
  }
});

app.mount('#app')