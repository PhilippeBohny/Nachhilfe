//Products
const APIresponse = (param) => {
  for (i = 0; i < param.products.length; i++) {
    document.getElementById("products").innerHTML += `
      <div class="product-row">
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
                <h2> ${param.products[i].name}</h2>
                <p class="flip-box-text">CHF ${param.products[i].price}</p>
                <img src="${param.products[i].image}" alt="" wide="40%" height="40%">
            </div>
            <div class="flip-box-back">
              <h2>${param.products[i].name}</h2>
              <img src="${param.products[i].image}" alt="" wide="20%" height="20%">
              <p class="flip-box-text">${param.products[i].description}</p>
              <p class="flip-box-text">Kategorie: ${param.products[i].category.name}</p>
              <p class="flip-box-text">Artikel-Nr.: ${param.products[i].sku}</p>
            </div>
          </div>
        </div>
      </div>`;
  }
};

fetch("https://web-modules.dev/api/v1/products", {
  headers: {
    Authorization: "Bearer 88|CgKZ24rOo76Go9RiyzmOUzb3v1qu8sfVtWXrFGp5",
  },
})
  .then((result) => result.json()) // JSON aus der Antwort annehmen
  .then((json) => APIresponse(json))
  .catch(
    (error) => console.error(error)
    // Fehlerbehandlung
  );

//Testimonials
const APITestimonials = (param) => {
  for (i = 0; i < param.testimonials.length; i++) {
    document.getElementById("testimonials").innerHTML += `
      <div class="testimonial-col">
       <div class="testimonial">
       <div class="testimonial-rating">
              <button class="likeButton" type="button" onClick="like(\'testimonial\', ${param.testimonials[i].id})">
                <div class="heartContainer">                  
                <svg id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.73 14.05"><defs><style>.cls-1{fill:#fff;stroke:#e52421;stroke-miterlimit:10;}</style></defs><path class="cls-1" d="M1.61,1.89C5.85-1.51,8,7.05,8,7.05s2-8.57,6.31-5.2S8,14,8,14-2.63,5.28,1.61,1.89Z" transform="translate(-0.11 -0.57)"/></svg>                  
                </div>
                <span id="${param.testimonials[i].id}">${param.testimonials[i].likes_count} </span>
              </button>
            </div>
          <div class="testimonial-card">            
            <img src="${param.testimonials[i].avatar}" alt="">
            <div class="testimonial-title"> 
              <div class="name">
                ${param.testimonials[i].lastname} ${param.testimonials[i].firstname}
              </div>
              <div class="company"> 
                ${param.testimonials[i].company}
              </div>
            </div>
          </div>
          <div class="testimonial-quote">
            ${param.testimonials[i].quote}
          </div>          
        </div>
      </div>`;
  }
};
//get Abfrage
fetch("https://web-modules.dev/api/v1/testimonials/10", {
  headers: {
    Authorization: "Bearer 88|CgKZ24rOo76Go9RiyzmOUzb3v1qu8sfVtWXrFGp5",
  },
})
  .then((result) => result.json()) // JSON aus der Antwort annehmen
  .then((json) => APITestimonials(json))
  .catch(
    (error) => console.error(error)
    // Fehlerbehandlung
  );

//Post
async function like(type, id) {
  const response = await fetch(
    "https://web-modules.dev/api/v1/like?type=" + type + "&id=" + id + "",
    {
      method: "POST",
      headers: {
        Authorization: "Bearer 88|CgKZ24rOo76Go9RiyzmOUzb3v1qu8sfVtWXrFGp5",
      },
    }
  )
    .then((json) => json.json())
    .then((json) => (document.getElementById(id).innerHTML = json.amount));
}
