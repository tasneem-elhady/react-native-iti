// task 1.1
text = prompt("Enter a text: ");
character = prompt("Enter a character to count: ");
// case_sensitive = confirm("Consider case sensitivity? (yes/no): ")

count = 0
for (let i = 0; i<text.length; i++){
    if (text.charAt(i) == character)
    count ++;
}
alert(count);
  
// task 1.2
function reverse(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
word = prompt("Enter a word: ");
case_sensitive = confirm("Consider case sensitivity?")
var p =true;
if(!case_sensitive)
    word = word.toLowerCase();
var word_r = reverse(word);

alert(word_r == word);

// task 1.4
var Name = "" ;
var Phone = "";
var mobile = "";
var email = "";
do{
    Name = prompt("Please enter your name");
    // alert(Name);
    // alert(/^[a-zA-Z]{3,50}$/.test(Name));
}while(!/^[a-zA-Z]{3,50}$/.test(Name));

do{
    Phone = prompt("Please enter your phone number")
}while(!/^[0-9]{8}$/.test(Phone));

do{
    mobile = prompt("Please enter your mobile number")
}while(!/^(010||011||012){11}[0-9]$/.test(mobile));

do{
    email = prompt("Please enter your email")
}while(!/^[a-zA-Z0-9._]+@[a-zA-Z]+.com$/);

document.write("<h2> Name: "+Name+"<h2>");
document.write("<h2> Phone number: "+Phone+"<h2>");
document.write("<h2> Mobile number: "+mobile+"<h2>");
document.write("<h2> email: "+email+"<h2>");


