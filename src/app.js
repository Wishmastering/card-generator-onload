/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const suit = ["♦", "♥", "♠", "♣"];

const number = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

window.onload = () => {
  let rSuit = Math.floor(Math.random() * suit.length);
  let rNumber = Math.floor(Math.random() * number.length);

  let suit1 = document.querySelector("#addSuit1");
  suit1.innerHTML = suit[rSuit];

  let suit2 = document.querySelector("#addSuit2");
  suit2.innerHTML = suit[rSuit];

  let number1 = document.querySelector("#addNumber");
  number1.innerHTML = number[rNumber];

  function color() {
    return this.rSuit === "♠" || this.rSuit === "♣" ? "black" : "red";
  }
};

onload();
