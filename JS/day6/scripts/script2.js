const Name = getCookie("name");
var visits = getCookie("visits");
var gender = getCookie("gender");
var color = getCookie("color");
visits++;
setCookie("visits", visits);
var image = document.getElementById('img');
if (gender === 'female') {
    image.src = '../styles/2.jpg';
} else {
    image.src = '../styles/1.jpg';
}

document.getElementById('name').innerText = Name;
document.getElementById('name').style.color = color;
document.getElementById('visits').style.color = color;
document.getElementById('visits').innerHTML = visits;
document.getElementById('num').style.color = color;