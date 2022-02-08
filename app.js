const app = Vue.createApp({
  data() {
    return {
      firstName: "Kithinga",
      lastName: "Mutuku",
      email: "kithinga@love.com",
      gender: "Male",
      picture: "images/images.jpeg"
    };
  },
});

app.mount('#app')