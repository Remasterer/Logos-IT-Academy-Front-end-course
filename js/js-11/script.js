document.querySelectorAll('a').forEach( linkitem =>{
  linkitem.href += prompt("", "www.google.com");
  linkitem.innerText = linkitem.href.split('.')[1];
});
document.body.style.backgroundColor=prompt("Background color?","lightgreen");
document.body.style.fontStyle = prompt("Font style?","oblique");
document.getElementsByTagName('h1')[0].style.textAlign=prompt("h1 alighn ?","center");
let  linksContainer = document.getElementsByTagName('p')[0];
linksContainer.style.backgroundColor = prompt("Paragraph with links background color ?","orange");
linksContainer.style.color = prompt("Paragraph with links text color ?", "white");
let linksColor = prompt("Links color ?",'red');
linksContainer.querySelectorAll('a').forEach( userItem => userItem.style.color= linksColor);
document.querySelector('div').style.backgroundColor=prompt('div background color ?','yellow');
document.querySelector('div').style.color = prompt('div text color?', 'purple');
document.querySelector('div').style.fontSize = prompt('div background font size?', '20') + "px";
document.querySelector('div').style.fontWeight = prompt('div background font weight?', '900');
document.querySelector('ul').style.listStyle=prompt("ul list style?","none");