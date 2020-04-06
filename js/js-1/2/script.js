let name = prompt("Your name", "Michael"), 
divHeight = prompt("div height", "600"),
divWidth = prompt("div height", "400"),
DivBg = prompt("div background", "lightgreen");
secondDivBg = prompt("second div background", "https://unicons.iconscout.com/release/v2.0.1/svg/line/user.svg");
secondDivHeight = prompt("second div height", "50"),
secondDivWidth = prompt("second div height", "50"),

document.write(`
<div style="
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${divWidth}px;
  height: ${divHeight}px;
  background: ${DivBg};">
 <p>${name}</p>
  <div style="width: ${secondDivWidth}px;
              height: ${secondDivHeight}px;
              background: url(${secondDivBg});
              background-size:cover;">
  </div>
 </div>
`)
