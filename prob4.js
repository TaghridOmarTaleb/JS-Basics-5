const btn = document.getElementById("btn") 
const inputField = document.getElementById("number");   

btn.onclick = ()=> {     
let sum = 0;   
let n = parseInt(inputField.value)  
   for (let i = 1; i <= n; i++) {  
        if ((i % 3 == 0) || (i % 5 ==0)){
            sum += i;  
        }       

  
}      
alert("The sum is " + sum) 
 }