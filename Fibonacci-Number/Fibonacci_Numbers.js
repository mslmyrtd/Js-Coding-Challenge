const numb=parseInt(prompt("Enter a positive number: "));
let a=0, b=1;
let c=a+b;
console.log(a);
console.log(b);
while(c<=numb){
    
    console.log(c);
    a=b;
    b=c;
    c=a+b;
}