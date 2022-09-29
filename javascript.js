const getMenuImage = document.querySelector("#hamburger-menu");
const getMenuDown = document.querySelector(".menu-down");
const getBody = document.body;

const homeButton = document.querySelector(".squareOne");
const redButton = document.querySelector(".squareTwo");
const orangeButton = document.querySelector(".squareThree");
const purpleButton = document.querySelector(".squareFour");
const greenButton = document.querySelector(".squareFive");


let menuToggle = function () {

  getMenuImage.addEventListener('click', function () {
      getMenuDown.classList.toggle("v-menu")
  })
}

let colorToggle = function () {

  homeButton.addEventListener('click', function() {
      getBody.removeAttribute("class"); 
      getBody.classList.add("grey-background");
      getMenuDown.classList.toggle("v-menu");
  })

  redButton.addEventListener('click', function() {
      getBody.removeAttribute("class");
      getBody.classList.add("red-background");
      getMenuDown.classList.toggle("v-menu");
  })

  orangeButton.addEventListener('click', function() {
      getBody.removeAttribute("class");
      getBody.classList.add("blue-background");
      getMenuDown.classList.toggle("v-menu");
  })

  purpleButton.addEventListener('click', function() {
      getBody.removeAttribute("class");
      getBody.classList.add("yellow-background");
      getMenuDown.classList.toggle("v-menu");
  })

  greenButton.addEventListener('click', function() {
      getBody.removeAttribute("class");
      getBody.classList.add("green-background");
      getMenuDown.classList.toggle("v-menu");
  })

}

menuToggle();
colorToggle();





