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
                                <h2>'+param.products[i].name+'</h2>\
                                <p class="flip-box-text">CHF '+param.products[i].price+'</p>\
                                <img src="'+param.products[i].image+'" alt="" wide="40%" height="40%">\
                            </div>\
                            <div class="flip-box-back">\
                                 <h2>'+param.products[i].name+'</h2>\
                                 <img src="'+param.products[i].image+'" alt="" wide="20%" height="20%">\
                                 <p class="flip-box-text">'+param.products[i].description+'</p>\
                                 <p class="flip-box-text">Kategorie: '+ param.products[i].category.name +'</p>\
                                 <p class="flip-box-text">Artikel-Nr.: '+param.products[i].sku+'</p>\
                            </div>\
                    </div>\
                </div>\
           </div>';
  }
};




fetch("https://web-modules.dev/api/v1/products", {
  headers: {
      Authorization: "Bearer 87|Li56CUyS4RmeOywFWwM3Gmq0YKw0nYvBPQygTxgx", // Part nach "Bearer " mit eigenem Token ersetzen
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
      Authorization: "Bearer 87|Li56CUyS4RmeOywFWwM3Gmq0YKw0nYvBPQygTxgx", // Part nach "Bearer " mit eigenem Token ersetzen
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
      Authorization: "Bearer 87|Li56CUyS4RmeOywFWwM3Gmq0YKw0nYvBPQygTxgx", // Part nach "Bearer " mit eigenem Token ersetzen
  },
});
