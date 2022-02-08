const app = Vue.createApp({
  data() {
    return {
      firstName: "Kithinga",
      lastName: "Mutuku",
      email: "kithinga@love.com",
      gender: "female",
      picture: "images/images.jpeg"
    };
  },
});

app.mount('#app')