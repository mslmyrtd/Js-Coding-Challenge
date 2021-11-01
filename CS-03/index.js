var word = prompt("Please enter a word..");
function reverse(word){
     if(word ==""){
         alert("Input a word please...");
     }
     if(word.length==1){
         alert("Single word should not be reversed!")
     }
     else{
       return word.split("").reverse().join("");
 }
}
console.log(reverse(word));
