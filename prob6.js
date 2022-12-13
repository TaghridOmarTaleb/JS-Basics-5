
const btn = document.getElementById("btn") 
const inputField = document.getElementById("number");   

btn.onclick = ()=> {  
for (let i = 1; i <= 12; i++) { 
    for (let j = 1; i<= 12; j++){
        alert(i*j + '')
    }
 }
}