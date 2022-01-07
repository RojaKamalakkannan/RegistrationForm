let button=document.createElement("div")

button.setAttribute("id","ans")
button.setAttribute("class","text-center h3 text-danger text")
let para=document.createElement("p")

document.body.appendChild(button).appendChild(para)




function validate(){
    let pass=document.getElementById("pass").value;
let confirm=document.getElementById("confirm").value;
let Uname=document.getElementById("Uname").value;
    console.log("entered validation")
     console.log(pass)

if(pass!=""&& confirm!=""){
if(pass===confirm){
  
    document.getElementById("ans").innerHTML=Uname+"<br>"+"Registration Sucessfully done" ;
    
}else{
    console.log("Incorrect Password")
    document.getElementById("ans").innerHTML="Incorrect Password";
    
}
  
}else{
    if(Uname==""&&pass==""&&confirm==""){
        document.getElementById("ans").innerHTML="Please fill the mandetory details";

    }else{

    if(Uname==""){
        document.getElementById("ans").innerHTML="Please fill the UserName";
    }else if(pass==""){
        document.getElementById("ans").innerHTML="Please fill the password";
    }else if(confirm==""){
        document.getElementById("ans").innerHTML="Please fill the confirm password";
    }
}
    console.log("Please fill the text boxes")
    
    
} 
}

let btn=document.getElementById("btn").addEventListener("click",validate)
