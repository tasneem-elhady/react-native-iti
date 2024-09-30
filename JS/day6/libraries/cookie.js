//////////////////////////
function getCookie(cookieName) {
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
  
      const parts = cookie.split('=');
      if (parts[0] === cookieName) {
        return decodeURIComponent(parts[1]);
      }
    }
    return null;
  }
  
function setCookie(cookieName, cookieValue, expirePerMonths) {
    if(expirePerMonths){//Value ==> Persistant
        var today = new Date();
        today.setMonth( today.getMonth()+ expirePerMonths )
        document.cookie = cookieName+"="+cookieValue+";expires="+today;
    }else{//undefined ==> session
        document.cookie = cookieName+"="+cookieValue;
    }
}
  
  function deleteCookie(cookieName) {
    setCookie(cookieName, "", -1);
  }
  
  function allCookieList() {
    const cookies = document.cookie.split('; ');
    const cookieList = [];
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const parts = cookie.split('=');
      cookieList.push({ name: parts[0], value: decodeURIComponent(parts[1]) });
    }
    return cookieList;
  }
  
  function hasCookie(cookieName) {
    return getCookie(cookieName) !== null;
  }