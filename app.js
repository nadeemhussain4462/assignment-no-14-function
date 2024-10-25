// assignment no 14
// Chapter no 35 Function

// Question no 1
function displayCurrentTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var timeString = hours + ":" + minutes + ":" + seconds;
  document.write("<h1>" + timeString + "</h1>");
}

displayCurrentTime();

// Question no 2
function greetUser(firstName, lastName) {
  var fullName = firstName + " " + lastName;
  alert("Hello, " + fullName + "!");
}

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
greetUser(firstName, lastName);
// Question no 3
function addNumbers(num1, num2) {
  var sum = num1 + num2;
  return sum;
}
var result = addNumbers(5, 7);
console.log("The sum of 5 and 7 is: " + result);
// Question no 4
function calculateArea(radius) {
  var area = Math.PI * radius * radius;
  return area;
}
var radius = 5;
var area = calculateArea(radius);
console.log("The area of a circle with radius " + radius + " is: " + area);
// Question no 5
function calculateSalesTax(price, taxRate) {
  var salesTax = price * (taxRate / 100);
  return salesTax;
}
var price = 100;
var taxRate = 10;
var salesTax = calculateSalesTax(price, taxRate);
console.log(
  "The sales tax on a product priced at $" +
    price +
    " with a tax rate of " +
    taxRate +
    "% is: $" +
    salesTax
);
// Question no 6
function convertCelsiusToFahrenheit(celsius) {
  var fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}
var celsius = 25;
var fahrenheit = convertCelsiusToFahrenheit(celsius);
console.log(celsius + "°C is equal to " + fahrenheit + "°F");
