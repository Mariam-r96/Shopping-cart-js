
let httpRequest , data;

let makeRequest = () => {
  httpRequest = new XMLHttpRequest();
  
    if (!httpRequest) {
      alert("Giving up :( Cannot create an XMLHTTP instance");
      return false;
    }

    let alertContents = () => {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          let products = JSON.parse(httpRequest.responseText);
          viewAllProducts(products);
          products.map((value) => console.log(value.title))
        } else {
          alert("There was a problem with the request.");
        }
      }
    }

    httpRequest.onreadystatechange = alertContents;
    httpRequest.open("GET", "../data/products.json", true);
    httpRequest.send(null);  
}

window.addEventListener("load" , makeRequest);
const product_view_row = document.querySelector(".products-page .row");

const viewAllProducts = (products) => {
    return (product_view_row.innerHTML = products.map((product , key) => {
        return `
        <div id = product-id-${key} class = "col-md-3">
          <div class="card mb-4">
            <div class="card-image">
              <img src=${product.image} class="card-img-top" alt="...">
            </div>
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text">Price : ${product.price}</p>
            </div>
          </div>
        </div>
            `
    }).join(""))
}
