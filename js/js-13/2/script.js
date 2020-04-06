let getSel = ourSel => document.querySelector(ourSel),
keys = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80,
   219, 221, 220, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222,
   13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16, 32],
textKeys = {
  "Caps-lock": 20,
  "Backspace":8,
  "Tab":9,
  "Enter":13,
  "Shift":16,
  "Catrl":17,
  "Alt":18,
  "`":192,
  "-":189,
  '=':187,
  '[':219,
  ']':221,
  '\\':220,
  ';':186,
  "'":222,
  ',':188,
  '.':190,
  '/':191,
  "":32
}

keyElement = document.createElement('div'),
keybord = getSel(".keybord"),
textarea = getSel(".text"),
capsLock=0;


for (let i = 0; i < keys.length; i++) {
  
  
  keyElement.className = "keybord-key";
  keyElement.innerHTML = (String.fromCodePoint(keys[i])).toLowerCase();
  for (let textKey in textKeys) {
    if (textKeys[textKey] == keys[i]) {
      keyElement.innerHTML = textKey;
      if(textKey.length>1)keyElement.className = "keybord-key_extra-wide";
      if (textKeys[textKey] == 32) keyElement.className = "keybord-key_ultra-wide";
    }
  }
  keyElement.setAttribute("keyvalue", `${keys[i]}`);
  keybord.append(keyElement);
  keyElement = keyElement.cloneNode(true); 
  
  
}





textarea.addEventListener('keydown',function(event){
  for (const key of keybord.children) {
    if(event.keyCode == key.getAttribute("keyvalue")){

      if (event.keyCode != 20 ){
        key.style.background = "#7d7c7c";
        setTimeout(function () { key.style.background = "#fff"; }, 100);
      }

      else{
        if(capsLock==0){
          key.style.background = "#7d7c7c";
          capsLock=1;
        }
        else{
          key.style.background = "#fff";
          capsLock=0;
        }
      }

    }
  }
})