var ans = document.getElementById("Answer");
var v1e = false;
var v2e = false;
var val1 ="";
var val2 ="";
var op;
function EnterClear(){
    val1 ="";
    val2 ="";
    v1e = false;
    v2e = false;
    ans.value = "";
}
function EnterNumber (value){
    if(v1e == false)
    {
        val1 += value;
        ans.value = val1;
    }else if(v2e == false)
    {
        val2 += value;
        ans.value = val2;
    } 
    console.log(val1+"^^^^^^"+val2)
}
function EnterOperator(value){
    if(v1e == false){
        v1e = true;
        op = value;
        console.log(op)
        ans.value ="";
    }
}
function EnterEqual(){
    var answer;
    if(v1e == true)
    {
        switch(op){
            case "+":
                answer = Number(val1)+Number(val2);
                break;
            case "-":
                answer = Number(val1)-Number(val2);
                break;
            case "*":
                answer = Number(val1)*Number(val2);
                break;
            case "/":
                answer = Number(val1)/Number(val2);
                break;
            default:
                answer = Number(val1);
        }
    }
    else
        answer = Number(val1);
    console.log(answer);
    EnterClear();
    ans.value = answer;
}
