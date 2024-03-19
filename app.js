const form = document.querySelector("form");
const input = document.querySelector("input");
const ol = document.querySelector("ol");
const clearAllBtn = document.querySelector("#clearAll-btn");
const card = document.querySelector(".card");
const body = document.querySelector("body");
const addBtn = document.querySelector("#add-btn");
clearAllBtn.addEventListener("click", () => {
  ol.innerHTML = "";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  ol.innerHTML += `<li>${input.value} </li>`;
  input.value = "";
  const music = new Audio("./music/add-btn.mp3");
  music.play();
});

input.addEventListener("input", () => {
  const music = new Audio("./music/keyboard.mp3");
  music.play();
});

clearAllBtn.addEventListener("click", () => {
  const music = new Audio("./music/daleteAll-btn.mp3");
  music.play();
});

body.style.backgroundColor = "#29AB87";

card.style.borderRadius = "8px";
card.style.width = "500px";
card.style.marginLeft = "auto";
card.style.marginRight = "auto";
card.style.marginTop = "200px";
card.style.backgroundColor = "purple";
card.style.paddingLeft = "10px";
card.style.paddingBottom = "10px";

input.style.borderRadius = "15px";
input.style.border = "0";
input.style.width = "80%";
input.style.height = "20px";
input.style.backgroundColor = "#89CFEF";
input.style.color = "#800000";
addBtn.style.borderRadius = "15px";
addBtn.style.border = "0";
addBtn.style.width = "15%";
addBtn.style.height = "25px";
addBtn.style.backgroundColor = "blue";
addBtn.style.color = "white";
clearAllBtn.style.height = "30px";
clearAllBtn.style.width = "100px";
clearAllBtn.style.backgroundColor = "red";
clearAllBtn.style.color = "white";
clearAllBtn.style.borderRadius = "15px";
clearAllBtn.style.border = "0";
clearAllBtn.style.marginLeft = "200px";
ol.style.backgroundColor = "#708238";
ol.style.fontSize="18px"
ol.style.marginLeft = "auto";
ol.style.marginRight = "auto";
ol.style.color = "gold";
ol.style.width = "60%";
ol.style.borderRadius = "15px";
