"use strict";

const { createApp } = Vue;

createApp({
  data() {
    return {
      text: "Hello my friendz! :D",
      image: "../img/meme.jpg",
      background:
        "background-image: url(../img/background.jpg); background-repeat: no-repeat",
    };
  },
}).mount("#app");
