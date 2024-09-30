console.log(location.search);

var queryString = location.search.replace("?","");
var queryArray = queryString.split("&");
var assArray = [];
for(var i =0; i< queryArray.length; i++){
    var Key = queryArray[i].split("=")[0];
    var Val = queryArray[i].split("=")[1];
    console.log(Val.indexOf("%40"));
    Val = Val.replace("%40","@");
    Val = Val.replace("+"," ");
    console.log(Key+" : "+Val);
    assArray[Key] = Val;
    document.getElementById(Key).innerText = Key+" : "+Val; 
}

function suggestChrome() {
    const userAgent = navigator.userAgent.toLowerCase();
    console.log((userAgent.match(/\//g)).length);
    const isChrome = (userAgent.match(/\//g)).length == 4;
    console.log(navigator.userAgent);
    if (!isChrome) {
      const suggestion = document.createElement('div');
      suggestion.classList.add('chrome-suggestion');
      suggestion.innerHTML = `
        <p>For the best experience on our website, we recommend using <a href="https://www.google.com/chrome/">Google Chrome</a>.</p>
      `;
      document.body.appendChild(suggestion);
    }
  }
suggestChrome();

