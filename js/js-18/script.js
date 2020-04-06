let arr = [5,6,7,8,9],sum=0;
arr.forEach(item=>sum+=item);
console.log(sum);

let poweredArr = arr.map(item=>item**2);
console.log(poweredArr);

arr = [
  {name:'Ivan',country:'Ukraine'},
  { name: 'Petro', country: 'Ukraine' },
  { name: 'Miguel', country: 'Cuba' },
];
console.log(arr.every(item=>item.country=='Ukraine'));

console.log(arr.some(item => item.country == 'Cuba'));

arr = [1,'string',[3,4],5,[6,7]];
console.log(arr.filter(item => (Array.isArray(item)) ));

arr = [1, 2, 5,0,4,5,6];
let toggler =1,count=0;
sum = arr.reduce(function (total, item) {
  if(item ==0){ toggler=0 };
  return  (toggler) ? total + item : total + 0;
},0);
console.log(sum);

arr = [1,2,3,0,4,5,6];
arr.reduce( function(accum,item){
  if (accum<10) count++;
  return accum+item;
} ,0)
console.log(count);

arr = [ 1,-2,3,0,4,-5,6,-11];
let result = arr.filter(item=> item>=0).map(item=>item**2);
console.log(result);
