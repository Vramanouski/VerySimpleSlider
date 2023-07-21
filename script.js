"use strict";

const btnLeft = document.querySelector(".left");
const btnRight = document.querySelector(".right");
const slider = document.querySelector(".slider");
const totalPicsNumber = 4;
let currentPicNumber = 1;
const imgSlider = document.querySelector(".img-slider");

const changePicture = function (e) {
  console.log(e.target);
  if (e.target.classList.contains("left")) {
    slideLeft();
  } else if (e.target.classList.contains("right")) {
    slideRight();
  }
};

const slideLeft = function () {
  currentPicNumber == 1 ? (currentPicNumber = 4) : currentPicNumber--;
  imgSlider.src = `img/00${currentPicNumber}.jpeg`;
};

const slideRight = function () {
  currentPicNumber == 4 ? (currentPicNumber = 1) : currentPicNumber++;
  imgSlider.src = `img/00${currentPicNumber}.jpeg`;
};

slider.addEventListener("click", changePicture);
