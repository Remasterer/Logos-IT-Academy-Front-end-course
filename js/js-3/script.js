let userNumber = prompt("Enter a number?"), factorial = 1, userPower  = prompt("Enter a power?"),result=1;
for(let i = 1;i<=userNumber;i++){
  factorial*=i;
}
alert("Our factorial - " + factorial);

for (let i = 1000; i <= 9999; i+=3) {
  console.log(i);
}

for (let i = 1000; i <= 55; i += 2) {
  console.log(i);
}

for (let i = 90; i >= 0; i -= 5) {
  console.log(i);
}

for (let i = 0,j=1; i < 20; j *= 2 , i++) {
  console.log(j);
}

for (let a = -166 ;  a < 100; a = (2*a) + 200 ){
  if(a > -100 && a < 100)
    console.log(a);
}

for(let i = 0; i < userPower;i++){
  result *= userNumber;
}
(userPower < 0) ? result *= 0.5 : (userPower == 0) ? result = 1:0;
alert("Our number to the "+ userPower+" power " + result);