//welcome message
var user = "Eric";
var salutation = "Hello";
var greeting = salutation + ", " + user;
var greetingEl = document.getElementById("greeting");

greetingEl.textContent = greeting;

//product price
var price = 1,
    studentDiscount = 0.2,
    studentPrice = price - (price * studentDiscount),
    priceEl = document.getElementById("price"),
    studentPriceEl = document.getElementById("student-price");

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);