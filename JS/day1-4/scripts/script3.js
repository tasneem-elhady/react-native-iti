// task 1
var arr = [];
for(var i = 0; i < 3; i++){
    arr[i] = Number(prompt("please enter n"+i))
}
console.log(arr)
document.write("<h2 style> Sum of the 3 values: "+ arr[0]+"+"+arr[1]+"+"+ arr[2] + "=" +(arr[0]+arr[1]+arr[2])+"<h2>");
document.write("<h2 style> Multiplication of the 3 values: "+ arr[0]+"*"+arr[1]+"*"+ arr[2] + "=" +(arr[0]*arr[1]*arr[2])+"<h2>");
document.write("<h2 style> Division of the 3 values: "+ arr[0]+"/"+arr[1]+"/"+ arr[2] + "=" +(arr[0]/arr[1]/arr[2])+"<h2>");

// // task 2
// var arr = [];
// for(var i = 0; i < 5; i++){
//     arr[i] = Number(prompt("please enter n"+i))
// }

// console.log(arr)
// document.write("<h2 style> you've entered the values: "+ arr+"<h2>");
// // ASC
// document.write("<h2 style> values sorted ascendingly: "+ arr.sort( function(a,b){return a-b;} )+"<h2>");
// //Desc
// document.write("<h2 style> values sorted descendingly: "+ arr.sort( function(a,b){return b-a;} )+"<h2>");

// // task 3
// var r = Number(prompt("please enter radius length"));
// alert("area of circle of radius:"+r+" is "+Math.PI*r*r);
// var v = Number(prompt("please enter value to get its square root"));
// alert("square root of : "+v+" is "+Math.sqrt(v));
// var a = Number(prompt("please enter an angle to get its cosine"));
// var cos = Math.cos(a*Math.PI/180).toFixed(4);
// alert("cosine of :"+a+" is "+cos);

