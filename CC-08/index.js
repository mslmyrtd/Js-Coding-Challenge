var input = document.getElementById("input");
var button = document.getElementById("button");
var display = document.getElementById("p");

button.addEventListener("click", () => {
  var number = input.value;
  var i= 1;
  while(i<=number){
    if (i % 5 == 0 && i % 3 == 0) {
        display.innerHTML += `${i} fizzbuzz `+"</br>";
        i++;
      }
    else if (i % 5 == 0) {
      display.innerHTML += `${i} buzz `+"</br>" ;
      i++;
    } else if (i % 3 == 0) {
    display.innerHTML += `${i} fizz ` +"</br>";
      i++;
    } 
    else{
        i++;
    }
  }
});
