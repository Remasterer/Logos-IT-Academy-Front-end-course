function sum() { 
    let ourSum = 0;
    return (y) => console.log((ourSum+=y));
 }
let newSum = sum();
newSum(3);
newSum(5);
newSum(228);