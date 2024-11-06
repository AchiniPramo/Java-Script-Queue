let box_1 = $("#box1");
let box_2 = $("#box2");
let box_3 = $("#box3");
let box_4 = $("#box4");
let box_5 = $("#box5");
let box_6 = $("#box6");

let colors = ["red", "green", "blue", "yellow", "#f5dede", "hotpink"];

let colorsRotate = () => {
  box_1.css("background-color", colors[0]);
  box_2.css("background-color", colors[1]);
  box_3.css("background-color", colors[2]);
  box_4.css("background-color", colors[3]);
  box_5.css("background-color", colors[4]);
  box_6.css("background-color", colors[5]);
  colors.unshift(colors.pop());
};

$(document).ready(function () {
  colorsRotate();
  setInterval(colorsRotate, 1000);
});
