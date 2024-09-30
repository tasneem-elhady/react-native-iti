function register() {
    
    var name = document.getElementById('Name').value;
    console.log(name)
    var age = document.getElementById('age').value;
    console.log(age)
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var color = document.getElementById('color').value;
    console.log(color);
    if (!name || !age || !gender || !color) {
        alert("Please fill all fields.");
    }
    setCookie("name", name);
    setCookie("age", age);
    setCookie("gender", gender);
    setCookie("color", color);
    // alert("cookiesset");
    let visits = getCookie("visits")!=null ?parseInt(getCookie("visits")) : 0;
    setCookie("visits", visits);
    // alert(visits);
    window.open('../pages/profile.html');
}
