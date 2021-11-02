const display =document.getElementById("display");
const input = document.getElementById("input");
const button = document.getElementById("button");


button.addEventListener("click", ()=>{
    var email =input.value;
    if(!email.includes("@")){
        display.innerText= `Your ${email} does not include @ `;
    }
    var extension = email.split("@")[1].split(".")[1];
    if(email.includes("@") && extension.length<=3){
        display.innerText=`${email} is valid`;
        input.value=""
    }
    else
        return display.innerText=`${email} is invalid`;
    
   
})
