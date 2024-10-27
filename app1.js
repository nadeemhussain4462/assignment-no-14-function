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
function calculate(num1, num2, operator) {
  var result;
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
  } else {
    return "Invalid operator";
  }
  return result;
}
var num1 = 5;
var num2 = 3;
var operator = "+";
var result = calculate(num1, num2, operator);
console.log(num1 + " " + operator + " " + num2 + " = " + result);


// Question no 5
function squareNumber(num) {
  var squared = num * num;
  return squared;
}
var number = 5;
var squaredNumber = squareNumber(number);
console.log("The square of " + number + " is " + squaredNumber);

// Question no 6
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
var number = 5;
var result = factorial(number);
console.log("The factorial of " + number + " is " + result);

// Question no 7
function count(start, end) {
  for (var i = start; i <= end; i++) {
    document.write(i + "<br>");
  }
}
count(1, 10);

// Question no 8
function calculateHypotenuse(base, perpendicular) {
  function calculateSquare(num) {
    return num * num;
  }
  var hypotenuse = Math.sqrt(
    calculateSquare(base) + calculateSquare(perpendicular)
  );
  return hypotenuse;
}
var base = 3;
var perpendicular = 4;
var hypotenuse = calculateHypotenuse(base, perpendicular);

// Question no 9
function calculateRectangleArea(width, height) {
  var area = width * height;
  return area;
}
var width = 5;
var height = 3;
var area = calculateRectangleArea(width, height);
console.log("The area of a rectangle with width " + width + " and height " + height + " is " + area);

// Question no 10
function isPalindrome(str) {
  var reversedStr = str.split("").reverse().join("");
  if (str === reversedStr) {
    return true;
  } else {
    return false;
  }
}
var string = "radar";
var isPalindrome = isPalindrome(string);
console.log("Is '" + string + "' a palindrome? " + isPalindrome);

// Question no 11
function capitalizeFirstLetter(str) {
  var words = str.split(" ");
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  var capitalizedStr = words.join(" ");
  return capitalizedStr;
}
var string = "hello world";
var capitalizedString = capitalizeFirstLetter(string);
console.log("Original string: " + string);
console.log("Capitalized string: " + capitalizedString);

// Question no 12
function findLongestWord(str) {
  var words = str.split(" ");
  var longestWord = "";
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}
var string = "Web Development Tutorial";

// Question no 13
function countOccurrences(str, letter) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === letter) {
      count++;
    }
  }
  return count;
}
var string = "JSResourceS.com";
var letter = "o";
var occurrences = countOccurrences(string, letter);
console.log("sample string : " + string);
console.log("sample letter : " + letter);
console.log("Number of occurrences of '" + letter + "': " + occurrences);

// Question no 14
function calcCircumference(radius) {
  var circumference = 2 * Math.PI * radius;
  console.log("The circumference is " + circumference.toFixed(2));
}
function calcArea(radius) {
  var area = Math.PI * radius * radius;
  console.log("The area is " + area.toFixed(2));
}
var radius = 5;
calcCircumference(radius);
calcArea(radius);