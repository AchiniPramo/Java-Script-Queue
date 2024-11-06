let h_1 = $("#h-1");
let h_2 = $("#h-2");
let h_3 = $("#h-3");
let h_4 = $("#h-4");
let h_5 = $("#h-5");
let h_6 = $("#h-6");

let arr = ["A", "B", "C", "D", "E", "F"];

let arrRotate = () => {
  arr.unshift(arr.pop());
  h_1.text(arr[0]);
  h_2.text(arr[1]);
  h_3.text(arr[2]);
  h_4.text(arr[3]);
  h_5.text(arr[4]);
  h_6.text(arr[5]);
};
$(document).ready(function () {
  setInterval(arrRotate, 3000);
});

let interval;

btnStart.on("click", function () {
  interval = setInterval(arrRotate, 3000);
  btnStart.css("display", "none");
  btnEnd.css("display", "block");
});
btnEnd.on("click", function () {
  clearInterval(interval);
  btnStart.css("display", "block");
  btnEnd.css("display", "none");
});
