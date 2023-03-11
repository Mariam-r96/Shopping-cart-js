window.addEventListener("load" , makeRequest);
let httpRequest;

function makeRequest() {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert("Giving up :( Cannot create an XMLHTTP instance");
      return false;
    }

    httpRequest.onreadystatechange = alertContents;
    httpRequest.open("GET", "../data/products.json", true);

    function alertContents() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            alert()
          if (httpRequest.status === 200) {
            console.log(httpRequest.responseText);
          } else {
            alert("There was a problem with the request.");
          }
        }
      }

      httpRequest.send(null);  
}
