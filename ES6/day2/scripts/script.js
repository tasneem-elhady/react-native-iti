//#region task 1
function Course(courseInfo) {
    const requiredProperties = ['courseName', 'courseDuration', 'courseOwner'];
    for (const property in courseInfo) {
      if (!requiredProperties.includes(property)) {
        throw new Error(`Invalid property: ${property}`);
      }
    }
    this.courseName = courseInfo.courseName;
    this.courseDuration = courseInfo.courseDuration;
    this.courseOwner = courseInfo.courseOwner;
}
  
const courseData = {
    courseName: "Programming",
    courseDuration: 12,
    courseOwner: "Mr J",
    invalidProperty: "This is invalid" 
};
  
try {
    const newCourse = new Course(courseData);
    console.log(newCourse);
} catch (error) {
    console.error(error.message);
}
//#endregion
//#region task 2
function addOptions(selectElement,...options) {
    options.forEach(option => {
      const optionElement = document.createElement("option");
      optionElement.value = option.value;
      optionElement.textContent = option.text;
      selectElement.appendChild(optionElement);
    });
}

var xhr = new XMLHttpRequest();
var data ;

xhr.open("GET","../data/rockbands.json");
xhr.send('');
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        if(xhr.status == 200){
            data = JSON.parse(xhr.responseText);
            for(band in data){addOptions(bands, {
                    value : band,
                    text : band
                })
            }
        }
    }
}

var bands = document.getElementById("band");
var artists = document.getElementById("artist");

bands.addEventListener("change", () => {
    artists.innerHTML = "<option hidden>[Please select]</option>";
    for(let i = 0; i < data[bands.value].length;i++){
        addOptions(artists, {
            value : data[bands.value][i].value,
            text : data[bands.value][i].name
        });
    }
  });
  
  artists.addEventListener("change", () => {
    window.open(artists.value)
  });
//#endregion