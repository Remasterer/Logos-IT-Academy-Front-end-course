let emptyspaceCounter = userStr => userStr.split(" ").length;
alert(emptyspaceCounter(prompt("")));
let emailCheck = userEmail => 
( userEmail.startsWith("@") || userEmail.endsWith("@") || userEmail.includes("@.") || !userEmail.includes("@") ) ? false : true ;
alert(emailCheck(prompt("")));
let wordCounter = userStr =>{
  userStr = userStr.toLowerCase();
  let currentPos=0,foundPos,counter=0;
  while(true){
    foundPos = userStr.indexOf("html", currentPos);
    if(foundPos== -1) break;
    currentPos = foundPos+1;
    counter++;
  }
  alert(counter);
}
wordCounter("HTMadL HTMLa daHTML html")
let shortedDomen = userDomen => userDomen.slice(userDomen.lastIndexOf("/")+1);
alert(shortedDomen(   prompt("","http://www.w3schools.com")));
