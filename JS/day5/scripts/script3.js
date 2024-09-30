var index = 0;
out();
var interval;
function out(){
    var imgs = document.getElementsByTagName("img");
    console.log(imgs);
    imgs[index].src = "../Resources/marbels/marble1.jpg";
    index = (index == 4)? 0 : index+1;
    console.log(index);
    imgs[index].src = "../Resources/marbels/marble3.jpg";
    interval = setTimeout(out,500);
}
function over(){
    clearTimeout(interval);
}
