function next(){
    var img = document.getElementById("image");
    var img_src = img.src;
    var index = Number(img_src.charAt(img_src.indexOf(".jpg")-1));
    if(index == 6)
        index = 6;
    else
        index++;

    console.log(index);
    img.src ="../Resources/SlideShow/"+ index+".jpg";
}
function prev(){
    var img = document.getElementById("image");
    var img_src = img.src;
    var index = Number(img_src.charAt(img_src.indexOf(".jpg")-1));
    if(index == 1)
        index = 1;
    else
        index--;
    console.log(index);
    img.src ="../Resources/SlideShow/"+ index+".jpg";
}
var interval;
function SlideShow(){
    var img = document.getElementById("image");
    var img_src = img.src;
    var index = Number(img_src.charAt(img_src.indexOf(".jpg")-1));
    if(index == 6)
        index = 1;
    else
        index++;
    console.log(index);
    img.src ="../Resources/SlideShow/"+ index+".jpg";
    interval = setTimeout(SlideShow,1000);
}
function stop(){
    clearTimeout(interval)
}