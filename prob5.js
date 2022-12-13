
const btn = document.getElementById("btn") 
const inputField = document.getElementById("number");  



btn.onclick = ()=> {     
    let sum = 1;   
    let n = inputField.value ; 
    
             if (n.includes('*')){
                n = n.split(" ");
                number = n[0];
             
                
                for (let i = 1; i <= number; i++) {  
                        sum *= i;  
                    }
                
             }
            
             else if (n.includes('+')){
                
                n = n.split(" ");
                number = n[0];
                sum = 0

                for (let i = 1; i <= number; i++) {  
                        sum += i;  
                        
                    }

             }

        
      
alert("The sum is " + sum) 
 }

