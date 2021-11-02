const display = document.getElementById("display");
const input = document.getElementById("input");
const button = document.getElementById("button");
button.addEventListener("click", ()=>{
    
    var email = input.value;
    if(!email.includes("@")){
        display.innerHTML = `${email} is invalid`;
    }  
    var extension = email.split("@")[1].split(".")[1];
    if(email.includes("@") && extension.length <= 3){
        display.innerHTML = `${email} is valid`;
    }
    else{
        return  display.innerHTML = `${email} is invalid`;
    }

})
