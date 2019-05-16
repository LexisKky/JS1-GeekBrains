function getElementId(id) {
  return document.getElementById(id);
}

function firstTask() {
  var tC = prompt("Введите градусы по Цельсию");
  var tF = (9 / 5) * tC + 32;
  alert("Градусы по Фаренгейту: " + tF);
}

function secondTask() {
  var name = prompt("Введите имя админа");
  var admin = name;
  alert("Админа зовут " + admin);
}

function thirdTask() {
  var int = Number(prompt("Введите число"));
  var str = String(prompt("Введите строку"));
  alert("Получили: " + int + str);
}

function fourthTask() {
  alert("Разобрался с async и defer");
}

function openFirstTask() {
  var getTf = getElementId("first");
  getTf.addEventListener("click", firstTask);
}

function openSecondTask() {
  var outName = getElementId("second");
  outName.addEventListener("click", secondTask);
}

function openThirdTask() {
  var outResult = getElementId("third");
  outResult.addEventListener("click", thirdTask)
}

function openfourthTask() {
  var outResult = getElementId("fourth");
  outResult.addEventListener("click", fourthTask)
}

function main() {
  openFirstTask();
  openSecondTask();
  openThirdTask();
  openfourthTask();
}

window.onload = main;