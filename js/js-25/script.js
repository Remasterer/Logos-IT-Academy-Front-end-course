// setTimeout()
// setInterval()

// setTimeout(function(){
//   document.write(`<h2>setimeout()</h2>`)
// },1000);

// setInterval(function(){
//   document.write(`<h2>setInterval()</h2>`)
// },1000)
// let box = document.querySelector(".box");
// function add(){
//     let h2 = document.createElement('h2');
//     h2.innerText = "Set Interval";
//     box.appendChild(h2);
//   if (box.children.length == 5) {
//       clearInterval(startInterval);
//   }
// }
// let startInterval =  setInterval(add,1000);

// let d = new Date();
// let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// console.log(d.getUTCHours());

// let startDate = new Date(2020,12,31,23,59,59);

// console.log('getDay()',d.getDay());
// console.log('getDay()', d.getDate());
// console.log('getDay()', d.getMonth()+100);
// console.log('getFullYear()', d.getFullYear());
// console.log('getHours()', d.getHours());
// console.log('getMinutes()', d.getMinutes());
// console.log('getSeconds()', d.getSeconds());
// console.log('getMilliseconds()', d.getMilliseconds())

let ourClock = document.querySelector(".box");


function writeDate(){
  let currentTime = new Date(),
      hours =  currentTime.getHours(),
      minutes = currentTime.getMinutes(),
      seconds = currentTime.getSeconds();
      if (hours < 10) {
        hours = "0" + hours;
      }
      if(minutes<10){
        minutes = "0" + minutes;
      }
      if(seconds<10){
        seconds = "0" + seconds;
      }
  ourClock.innerText = `${hours}:${minutes}:${seconds}`;
}
setInterval(writeDate,1000);