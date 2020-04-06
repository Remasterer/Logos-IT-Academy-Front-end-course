let fib = numbersOfElements => {
  let previous = 0,next=1,temp;
  for(let i = 0 ; i < numbersOfElements ; i++){
    console.log(next);
    temp = next;
    next+=previous;
    previous = temp;
  }
}
fib(5);
function geomProggresion(numbersOfElements,denominator){
  let sum = 0;
  for (let i = 1; numbersOfElements>0; numbersOfElements--,i*=denominator) {
   sum +=i;
  }
  return sum ;
}
function geomProggresion2(numbersOfElements, denominator) {
  return ((denominator**numbersOfElements) -1 )/(denominator-1);

}
console.log(geomProggresion2(5,2));
let from = prompt("From?"),check=1;
let to = prompt("To?");
let rangeOfSimleNumbers = (from,to) => {
  for(; from <= to ;from++) {
   for(let i =1 ;i<=10;i++){
     if(from == i || i ==1){
       continue;
     }
     else if(from % i == 0 ){
       check = 0;
      break;
      
     }
   }
   if(check ==1){
     console.log(from);
   }
   else{
     check=1;
   }
  }
}
rangeOfSimleNumbers(from,to);

