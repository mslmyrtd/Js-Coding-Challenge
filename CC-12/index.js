var firstSide = document.getElementById("firstside");
var secondSide = document.getElementById("secondside");
var thirdSide = document.getElementById("thirdside");
var button = document.getElementById("btn");
var display = document.getElementById("display");

button.addEventListener("click", (e) => {
  e.preventDefault();
  calculator();
});

function calculator() {
  let firstvalue = parseInt(firstSide.value);
  let secondvalue = parseInt(secondSide.value);
  let thirdvalue = parseInt(thirdSide.value);
  if (firstvalue <= 0 || secondvalue <= 0 || thirdvalue <= 0) {
    display.innerText = "All sides have to be of length > 0";
  } else if (
    firstvalue + secondvalue < thirdvalue ||
    firstvalue + thirdvalue < secondvalue ||
    thirdvalue + secondvalue < firstvalue
  ) {
    display.innerText = "Invalid Triangle";
  } else if (firstvalue == secondvalue && secondvalue == thirdvalue) {
    display.innerText = "Equilateral Triangle";
  } else if (
    firstvalue == secondvalue ||
    firstvalue == thirdvalue ||
    thirdvalue == secondvalue
  ) {
    display.innerText = "Isosceles Triangle";
  } else {
    display.innerText = "Inequality Triangle";
  }
}
