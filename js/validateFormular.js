const firstName = document.getElementById("f_name");
const lastName = document.getElementById("l_name");
const eMail = document.getElementById("email");
const ratingDesign = document.getElementById("rating-design");
const ratingComponents = document.getElementById("rating-components");
const comment = document.getElementById("kommentar");
const ratingStarsDesign = [
  ...document.getElementsByClassName("rating-star-design"),
];
const ratingStarsComponents = [
  ...document.getElementsByClassName("rating-star-components"),
];
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const numbers = /^[0-9]+$/;
let ratingDesignCount = 0;
let ratingComponentsCount = 0;
let error = false;

async function postFeedback() {
  const rawResponse = await fetch(
    "https://web-modules.dev/api/v1/feedback?name=" +
      lastName.value +
      "&email=" +
      eMail.value +
      "&rating_design=" +
      ratingDesignCount +
      "&rating_components=" +
      ratingComponentsCount +
      "&comment=" +
      comment.value +
      "",
    {
      method: "POST",
      headers: {
        Authorization: "Bearer 88|CgKZ24rOo76Go9RiyzmOUzb3v1qu8sfVtWXrFGp5",
      },
    }
  );
  const content = await rawResponse.json();
  document.getElementById("success").innerHTML =
    "Danke für dein Feedback du hast das " +
    content.amount +
    ". Rating abgegeben!";
}

function validate() {
  if (
    validateText(firstName) |
    validateText(lastName) |
    validateEmail(eMail) |
    validateRating(ratingDesign, ratingDesignCount) |
    validateRating(ratingComponents, ratingComponentsCount)
  ) {
    error = true;
  } else {
    //FormularPOST
    postFeedback();
    error = false;
  }
  if (error == true) {
    console.log(error);
  }
}

function validateText(textField) {
  if (textField.value.match(numbers)) {
    let parent = textField.parentElement;
    parent.querySelector(".error").style.display = "none";
    return false;
  }

  if (textField.value.length > 100) {
    let parent = textField.parentElement;
    parent.querySelector(".error").innerText = "Maximal 100 Zeichen";
    parent.querySelector(".error").style.display = "block";
    return true;
  }

  let parent = textField.parentElement;
  parent.querySelector(".error").style.display = "none";
  return false;
}

function validateEmail(textField) {
  if (textField.value.length == 0) {
    let parent = textField.parentElement;
    parent.querySelector(".error").innerText = "Erforderlich";
    parent.querySelector(".error").style.display = "block";
    return true;
  } else if (!textField.value.match(emailFormat)) {
    let parent = textField.parentElement;
    parent.querySelector(".error").innerText = "Kein gültiges Format";
    parent.querySelector(".error").style.display = "block";
    return true;
  } else if (textField.value.length > 200) {
    let parent = textField.parentElement;
    parent.querySelector(".error").innerText = "Maximal 200 Zeichen";
    parent.querySelector(".error").style.display = "block";
    return true;
  }

  let parent = textField.parentElement;
  parent.querySelector(".error").style.display = "none";
  return false;
}

function validateRating(starRating, starRatingCount) {
  if (starRatingCount == 0) {
    let parent = starRating.parentElement;
    parent.querySelector(".error").innerText =
      "Wenigstens einen Stern haben wir verdient...";
    parent.querySelector(".error").style.display = "block";
    return true;
  }

  let parent = starRating.parentElement;
  parent.querySelector(".error").style.display = "none";
  return false;
}

function executeRating(stars, starPrefix) {
  const starClassActive = starPrefix + "fa-solid fa-star";
  const starClassUnactive = starPrefix + "fa-regular fa-star";
  const starsLength = stars.length;
  let i;
  let currentRating = 0;
  stars.map((star) => {
    star.onclick = () => {
      i = stars.indexOf(star);
      writeResult(stars, i + 1);
      if (star.className.indexOf(starClassUnactive) !== -1) {
        for (i; i >= 0; --i) stars[i].className = starClassActive;
      } else {
        for (i; i < starsLength; ++i) stars[i].className = starClassUnactive;
      }

      star.className = starClassActive;
    };
  });
}

function writeResult(ratingType, rating) {
  if (ratingType == ratingStarsDesign) {
    ratingDesignCount = rating;
  } else if (ratingType == ratingStarsComponents) {
    ratingComponentsCount = rating;
  }
}

executeRating(ratingStarsDesign, "rating-star-design ");
executeRating(ratingStarsComponents, "rating-star-components ");
