// let prime = true;

// for (let i=2; i<=30; i++) {

//     for (let j = 2; j<=30; j++){
        
//         if (i != j){
//             if (i%j == 0){
//                 prime = false;
//             }
           
//         }
//     }

//     if (prime == true){
//         console.log(i);
//     }
//     prime = false;
// }



// function findPrimeNums(n)
// { 
//    var x= 3,j,i=2,
//    primeArr=[2],isPrime;
//    for (;x<=n;x+=2){
//        j = (int) (Math.sqrt (x));
//        isPrime = true;
//        for (i = 2; i <= j; i++)
//        {
//             if (x % i == 0){
//                 isPrime = false;
//                 break;
//             }
//         }
//         if(isPrime){
//             primeArr.push(x);
//         }

//     }   

//     return primeArr;
// }

function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

for (let i = 2; i < 30; i++) {
    if (test_prime(i)=true){alert(i)}
  }

