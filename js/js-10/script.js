let arrCopy = arr => arr.slice(),defArr = [1, 2, 3, 5, [1, 2, 34]];
const arrNew1 = arrCopy(defArr);
alert(arrNew1[4]);

let arrToString = arr => arr.map(item => item.toString() )
const arrNew2 = arrToString([1,2,3,4]);
alert(arrNew2[0]+arrNew[1]);

let getLength = arr => arr.map(item => item.length); 
const arrNew3 = getLength(["Michael","Petro","Hi","there"]);
alert(arrNew3);

let  removeDuplicates = (arr)=> arr.filter((item,v)=> arr.indexOf(item) == v);
let newArr4 = removeDuplicates(["css","html","css","css","js","js"]);
alert(newArr4);