
let httpRequest , data , products_data = [];
const product_view_row = document.querySelector(".products-page .row");
const search_field = document.querySelector(".products-page .search-field");

// make api data request 
let makeRequest = () => {
  httpRequest = new XMLHttpRequest();
  
    if (!httpRequest) {
      alert("Giving up :( Cannot create an XMLHTTP instance");
      return false;
    }

    let alertContents = () => {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          products_data = JSON.parse(httpRequest.responseText);
          viewAllProducts(products_data);
          // console.log(products); 

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

// view all products from the api data 
const viewAllProducts = (products) => {
    return (product_view_row.innerHTML = products.map((product , key) => {
        return `
        <div id = product-id-${key} class = "col-md-3 mb-5">
          <div class="card">
            <div class="card-image">
              <img src=${product.image} class="card-img-top" alt="...">
            </div>
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text">Price : ${product.price}</p>
              <button class="btn btn-danger w-100 py-2 d-flex items-center justify-content-center">ADD TO CART <span class="material-symbols-outlined ms-2">
              shopping_cart</span></button>
            </div>
          </div>
        </div>
            `
    }).join(""))
}

// filter search 
search_field.addEventListener("keyup" , e => {
  const filtered_products = products_data.filter(product =>{
    if(product.title.toLowerCase().includes(e.target.value.toLowerCase())){
      return product;
    }
  });

  viewAllProducts(filtered_products);
})
