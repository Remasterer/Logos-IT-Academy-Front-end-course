switch (+prompt("Number plz")) {
  case 1:
  case 2:
  case 12:
    alert("Winter");
    break;
  case 3:
  case 4:
  case 5:
    alert("Spring");
    break;
  case 6:
  case 7:
  case 8:
    alert("Summer");
    break;
  case 6:
  case 7:
  case 8:
     alert("Autumn");
     break;
  default:
    alert("nope")
    break;
}
function isSimpleNumber(number){
  let i=1;
  for(;i<10;i++){ 
     if(i==number || i ==1){
      continue;
    }
     else if (number % i == 0) {
       break;
     }
  }
  if(i==10){
    console.log(number);
  }
}
isSimpleNumber(4);
function max(a,b,...leftArg){
  if(arguments.length==1){
    return a;
  }
  let max=a;
  for(let i =0;i<arguments.length;i++){
    if(arguments[i]>max){
      max= arguments[i];
    }
  }
  alert(max);

}
max(2,34,1,4,1,1);