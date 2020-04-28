"use strict";

function getDogImage() {
  let breed = $("#breed").val();
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(fetchStatusHandler)
    .then((response) => response.json())
    .then((responseJson) => displayResults(responseJson));
}

function fetchStatusHandler(response) {
  if (response.status === 404) {
    alert("this is not a valid dog type");
    document.getElementById("form").reset();
    throw "not a valid dog type";
  } else {
    return response;
  }
}

function displayResults(responseJson) {
  $(".results-img").replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  );
  $(".results").removeClass("hidden");
}

function watchForm() {
  $("form").submit((event) => {
    event.preventDefault();
    getDogImage();
  });
}

$(function () {
  console.log("App loaded! Waiting for submit!");
  watchForm();
});
