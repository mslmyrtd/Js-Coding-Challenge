const display=document.getElementById("p");
const input=document.getElementById("input");
const button=document.getElementById("button");

button.addEventListener("click", ()=>{
    var identity = input.value;
            var num = identity.split("");
            var collectionNum = 7 * (+num[0] + +num[2] + +num[4] + +num[6] + +num[8]) - (+num[1] + +num[3] + +
                num[5] + +num[7]);
            var number10 = collectionNum % 10;
            var number11 = [(+num[0] + +num[2] + +num[4] + +num[6] + +num[8]) + (+num[1] + +num[3] + +num[5] + +num[7]) + +number10] % 10;
            console.log(number11);
            if (identity[0] != 0 && number10 == num[9] && number11 == num[10]) {
                display.innerText = `Valid`
            }else if(identity.length != 11 || identity.length > 11){
                display.innerText = `Your id number length longer than eleven or less`
            }
            else{
                display.innerText = `Invalid`
            }
    
  
})


        

