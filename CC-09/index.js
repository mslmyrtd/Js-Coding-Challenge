var display = document.getElementById("display");
var first = document.getElementById("first");
var second = document.getElementById("second");
var operand = document.getElementById("operand");
var button = document.getElementById("btn");

button.addEventListener("click", () => {
  switch (operand.value) {
    case "+":
      var result=  parseFloat(first.value) + parseFloat(second.value) ;
        display.innerText = `${first.value} + ${second.value} = ${result}`  
      break;
    case "-":
      var result=  parseFloat(first.value) - parseFloat(second.value) ;
        display.innerText = `${first.value} - ${second.value} = ${result}`  
      break;
    case "*":
      var result=  parseFloat(first.value) * parseFloat(second.value) ;
        display.innerText = `${first.value} * ${second.value} = ${result}`  
      break;
    case "/":
      var result=  parseFloat(first.value) / parseFloat(second.value) ;
        display.innerText = `${first.value} / ${second.value} = ${result}`  
      break;

    default:
        display.innerText ="False Operand. Try again..."
        
      break;
  }
});
