const p=document.getElementById("p");
const input=document.getElementById("input");
const button= document.getElementById("button");

button.addEventListener("click", ()=>{
    var number=input.value;
    var sum =0;
    for(let i=1; i<=(number/2);i++ ){
        if(number%i==0){
            sum +=i;
            
        }
        
    }if(number==sum){
        p.innerText=`${number} is a perfect number`
        input.value=""
    }else{
        p.innerText=`${number} is not a perfect number`
    }
})
