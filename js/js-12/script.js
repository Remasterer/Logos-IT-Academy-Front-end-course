let selector = ourSelector => document.querySelector(ourSelector),colorIteretion=0,defText = selector(".secret__block").innerText;
let allSelector = allSelectors => document.querySelectorAll(allSelectors);

sselector(".block").onmouseover = function(){
  switch(colorIteretion){
    case 3:
      colorIteretion=0;
    case 0:
      this.style.backgroundColor = "red";
      break;
    case 1:
      this.style.backgroundColor = "yellow";
      break;
    case 2:
      this.style.backgroundColor= "green";
      break;
  }
}
selector(".block").onmouseout = function () {
  this.style.backgroundColor = "purple";
  colorIteretion++;
}

function hoverState() {
  this.style.backgroundColor = "yellow";
  this.style.color = "blue";
  this.innerText = "Хочеш знати який?";
}
selector(".secret__block").onmouseover = hoverState;
selector(".secret__block").onmouseout = function () {
  this.style.backgroundColor = "purple";
  this.style.borderColor = "blue";
  this.style.color = "black";
  this.innerText = defText;
}
selector(".secret__block").onmousedown = function(){
  this.style.color = "yellow";
  this.style.backgroundColor = "black";
  this.style.borderColor = "yellow";
  this.innerText = "А я тобі не скажу";
}
selector(".secret__block").onmouseup = hoverState;

function backgroundSet(){
  let userBg = prompt("link", "https://img.freepik.com/free-vector/abstract-colorful-flow-shapes-background_23-2148258092.jpg?size=626&ext=jpg");
  this.style.background = `url( ${userBg}) center center no-repeat`;
  this.style.backgroundSize = cover; 
}
allSelector('.images').forEach(item => item.onclick = backgroundSet );
allSelector('ol > li').forEach(item => item.onclick = function(){this.style.color=this.innerText});