"use strict";

const { createApp } = Vue;

createApp({
  data() {
    return {
      text: "Hello my friendz! :D",
      image: "../img/meme.jpg",
    };
  },
}).mount("#app");
