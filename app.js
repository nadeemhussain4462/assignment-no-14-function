function sum(a, b, c) {
  console.log(a + b + c);
}
sum(32, 56, 97);

function sub(a, b, c) {
  console.log(a - b - c);
}
sub(32, 56, 97);

function mod(a, b, c, d) {
  console.log(((a % b) % c) % d);
}
mod(22, 56, 97, 98);

function divide(a, b, c, d, e) {
  console.log(a / b / c / d / e);
}
divide(16, 23, 45, 12, 17);

function mul(a, b, c) {
  console.log(12 * 2 * 4);
}
mul(12, 2, 4);

var food = prompt(" Enter food name:");
switch (food.toLowerCase()) {
  case "biryani":
    console.log("2 KG biryani le ao ");
    break;
  case "nihari":
    console.log("3 Kg Nihari le ao");
    break;
  case "burger":
    console.log("2 burger le ao");
    break;
  default:
    console.log("I don't like that");
}
