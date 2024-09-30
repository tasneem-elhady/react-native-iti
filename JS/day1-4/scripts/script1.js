const message = prompt("Enter a message:");
  
  for (let i = 1; i <= 6; i++) {
    document.write ("<h"+i+">" + "Heading"+i+":" + message+"<h"+i+">")    
  }

// let sum = 0;
// let num = 0;

// do{
//     num = Number(prompt("enter number"))
//     if(isNaN(num)){
//         alert("please enter valid number")
//     }
//     else
//     {
//         sum+=num
//     }     

// }while (num!==0 && sum <100)
// alert("last entered: "+num+", sum = "+ sum)