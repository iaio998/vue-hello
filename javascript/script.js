"use strict";

const { createApp } = Vue;

createApp({
  data() {
    return {
      text: "HELLO MY FRIENDZ! :D",
      image: "img/meme.jpg",
      background:
        "background-image: url(img/background.jpg); background-repeat: no-repeat",
    };
  },
}).mount("#app");
