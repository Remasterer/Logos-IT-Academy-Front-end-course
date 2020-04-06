let gedDigits = inputNumber => +(inputNumber - Math.round(inputNumber)).toFixed(3)  ;
console.log(gedDigits(1.25));

let getArea = inputRadius => (inputRadius == undefined) ? alert("Будь ласка, введіть радіус!") :
                             (isNaN(inputRadius)) ? alert("Повинно бути числове значення") : 
                             alert("Площа круга " + Math.round(Math.PI*Math.pow(inputRadius,2)));
console.log(getArea(15));
let getSqrt = inputNumber => (inputNumber == undefined) ? alert("Будь ласка, введіть число!") :
                             (isNaN(inputNumber)) ? alert("Повинно бути числове значення") :
                             (inputNumber<0) ? alert("Введіть додатнє значення"):
                             alert("Квадратнйи корінь із " + inputNumber + " дорівнює " + Math.sqrt(inputNumber))
getSqrt(4);