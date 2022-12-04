//Products
const APIresponse = (param) => {
  for (i = 0; i < param.products.length; i++) {
    console.log(i);
    console.log(param.products.length);
    console.log(param.products[i]);
    console.log(param.products);
    document.getElementById("products").innerHTML +=
      ' <div class="product-row">\
            <div class="flip-box">\
                <div class="flip-box-inner">\
                        <div class="flip-box-front">\
                            <h2>' +
      param.products[i].category.name +
      "</h2><br>\
                            <p>" +
      param.products[i].sku +
      '</p><br>\
                            <p>Name des Produktes</p><br>\
                            <p>Preis des Produktes</p><br><br>\
                            <p>Kategorie</p>\
                        </div>\
                        <div class="flip-box-back">\
                            <h2>Beschreibung zum Produkt</h2>\
                            <p>Beschreibung zum Produkt.......</p>\
                        </div>\
                    </div>\
                </div>\
        </div>';
  }
};

fetch("https://web-modules.dev/api/v1/products", {
  headers: {
    Authorization: "Bearer Li56CUyS4RmeOywFWwM3Gmq0YKw0nYvBPQygTxgx", // Part nach "Bearer " mit eigenem Token ersetzen
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
    console.log(i);
    console.log(param.testimonials.length);
    console.log(param.testimonials[i]);
    console.log(param.testimonials[i].lastname);
    console.log(param.testimonials);
    document.getElementById("testimonials").innerHTML +=
      '<div class="testimonial-col">\
         <div class="testimonial">\
            <div class="testimonial-card">\
                <img src="' +
      param.testimonials[i].avatar +
      '" alt="">\
                <div class="testimonial-title"> <div class="name">' +
      param.testimonials[i].lastname +
      " " +
      param.testimonials[i].firstname +
      '</div>\
                <div class="company">' +
      param.testimonials[i].company +
      '</div>\
                </div>\
            </div>\
            <div class="testimonial-quote">' +
      param.testimonials[i].quote +
      '</div>\
            <div class="testimonial-rating">Likes: <button type="button" onClick="like(\'testimonial\',' +
      param.testimonials[i].id +
      ')">' +
      param.testimonials[i].likes_count +
      '</button>\
    </div>\
        </div>\
    </div>';
  }
};
//get Abfrage
fetch("https://web-modules.dev/api/v1/testimonials/10", {
  headers: {
    Authorization: "Bearer Li56CUyS4RmeOywFWwM3Gmq0YKw0nYvBPQygTxgx", // Part nach "Bearer " mit eigenem Token ersetzen
  },
})
  .then((result) => result.json()) // JSON aus der Antwort annehmen
  .then((json) => APITestimonials(json))
  .catch(
    (error) => console.error(error)
    // Fehlerbehandlung
  );
  //Post
const like = (type, id) =>
  console.log(
    "https://web-modules.dev/api/v1/like?type=" + type + "&id=" + id + ""
  );
fetch("https://web-modules.dev/api/v1/like?type=" + type + "&id=" + id + "", {
  method: "POST",
  mode: "no-cors",
  headers: {
    Authorization: "Bearer Li56CUyS4RmeOywFWwM3Gmq0YKw0nYvBPQygTxgx", // Part nach "Bearer " mit eigenem Token ersetzen
  },
});
